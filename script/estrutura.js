var Bolinha = function () {
    this.cor = "";
    this.posicao = null;
}

var Posicao = function (posicaoX, posicaoY, angulo) {
    this.posicaoX = posicaoX || 0;
    this.posicaoY = posicaoY || 0;
    this.angulo = angulo || 0;
}

var Modificar = {
    cor: function (bolinha, posicao_cor) {
        bolinha.cor = 'hsl(' + posicao_cor + ', 100%, 50%)';
        return bolinha;
    }
}

var radiano = function (grau) {
    return grau * (Math.PI / 180);
}

var ModificarPosicao = {
    adicionarPosicao: function (bolinha, posicaoX, posicaoY, angulo) {

        bolinha.posicao = new Posicao(posicaoX, posicaoY, angulo);
        return bolinha;
    },
    calcularMovimentacaoBolinha: function (bolinha, passo) {

        var posicaoBaseX = bolinha.posicao.posicaoX;
        var posicaoBaseY = bolinha.posicao.posicaoY;
        var radiano = radiano(bolinha.posicao.angulo);
        bolinha.posicao.posicaoX = ModificarPosicao.calcularPosicaoX(radiano, passo, posicaoBaseX);
        bolinha.posicao.posicaoY = ModificarPosicao.calcularPosicaoY(radiano, passo, posicaoBaseY);
        return bolinha;
    },
    calcularPosicaoX: function (radiano, passo, posicaoRef) {
        return Math.cos(radiano) * passo + posicaoRef;
    },
    calcularPosicaoY: function (radiano, passo, posicaoRef) {
        return Math.sin(radiano) * passo + posicaoRef;
    }
}

var VerificarColisao = {
    origemMinX: 0,
    origemMinY: 0,
    origemMaxX: 0,
    origemMaxY: 0,
    init: function (origemX, origemY, width, height) {
        VerificarColisao.origemMinX = origemX;
        VerificarColisao.origemMinY = origemY;
        VerificarColisao.origemMaxX = origemX + width;
        VerificarColisao.origemMaxY = origemY + height;
    },
    cenario: function (bolinha) {
        var posicaoX = bolinha.posicao.posicaoX;
        var posicaoY = bolinha.posicao.posicaoY;
        if ((posicaoX <= VerificarColisao.origemMinX || posicaoX >= VerificarColisao.origemMaxX) &&
                (posicaoY >= VerificarColisao.origemMinY && posicaoY <= VerificarColisao.origemMaxY))
        {
            return VerificarColisao.alterarAnguloHorizontal(bolinha);
        }
        if ((posicaoY <= VerificarColisao.origemMinY || posicaoY >= VerificarColisao.origemMaxY) &&
                (posicaoX >= VerificarColisao.origemMinX && posicaoX <= VerificarColisao.origemMaxX))
        {
            return VerificarColisao.alterarAnguloVertical(bolinha);
        }
        return bolinha;
    },
    alterarAnguloHorizontal: function (bolinha) {
        // 2 1 1 2
        // 4 3 3 4
        var grau = bolinha.posicao.angulo;
        var resultado = 0;
        resultado = Math.abs(180 - grau);
        if (grau > 180) {
            resultado = Math.abs(360 - resultado);
        }
        bolinha.posicao.angulo = resultado;
        return bolinha;
    },
    alterarAnguloVertical: function (bolinha) {
        // 4 1 1 4 
        // 3 2 2 3
        var grau = bolinha.posicao.angulo;
        var anguloGlobal = (parseInt(grau / 90)+1)*90;
        
        var resultado = 0;
        
        resultado = Math.abs(anguloGlobal - grau);
        
        if (grau > 180) {
            resultado = Math.abs(90 + resultado);
        }else{
            resultado = resultado + 180;
        }
        bolinha.posicao.angulo = resultado;
        return bolinha;
    }
}

