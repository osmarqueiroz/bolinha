var Bolinha = function (cor) {
    this.cor = cor || "";
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
    passo : 2,
    adicionarPosicao: function (pBolinha, posicaoX, posicaoY, angulo) {

        pBolinha.posicao = new Posicao(posicaoX, posicaoY, angulo);
        return pBolinha;
    },
    calcularMovimentacaoBolinha: function (bolinha) {

        var posicaoBaseX = bolinha.posicao.posicaoX;
        var posicaoBaseY = bolinha.posicao.posicaoY;
        var vradiano = radiano(bolinha.posicao.angulo);
        bolinha.posicao.posicaoX = ModificarPosicao.calcularPosicaoX(vradiano, ModificarPosicao.passo, posicaoBaseX);
        bolinha.posicao.posicaoY = ModificarPosicao.calcularPosicaoY(vradiano, ModificarPosicao.passo, posicaoBaseY);
        return bolinha;
    },
    calcularPosicaoX: function (vradiano, passo, posicaoRef) {
        return Math.cos(vradiano) * passo + posicaoRef;
    },
    calcularPosicaoY: function (vradiano, passo, posicaoRef) {
        return Math.sin(vradiano) * passo + posicaoRef;
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
       // console.log(bolinha.posicao.angulo)
        if ((posicaoX <= VerificarColisao.origemMinX || posicaoX >= VerificarColisao.origemMaxX) &&
                (posicaoY >= VerificarColisao.origemMinY && posicaoY <= VerificarColisao.origemMaxY))
        {
           // console.log('Horizontal')
            bolinha = VerificarColisao.alterarAnguloHorizontal(bolinha);
            return ModificarPosicao.calcularMovimentacaoBolinha(bolinha);
        }
        if ((posicaoY <= VerificarColisao.origemMinY || posicaoY >= VerificarColisao.origemMaxY) &&
                (posicaoX >= VerificarColisao.origemMinX && posicaoX <= VerificarColisao.origemMaxX))
        {
          //  console.log('Vertical')
            bolinha =  VerificarColisao.alterarAnguloVertical(bolinha);
            return ModificarPosicao.calcularMovimentacaoBolinha(bolinha);
        }
        return bolinha;
    },
    alterarAnguloHorizontal: function (bolinha) {
        // 2 1 - 1 2
        // 4 3 - 3 4
        var anguloBase = 90;
        var grau = bolinha.posicao.angulo;
        var anguloGlobal = (parseInt(grau / anguloBase))+1;
        var resultado = 0;
        var valorBase = Math.abs(anguloGlobal * anguloBase - grau);
        switch (anguloGlobal) {
            case 1:
                resultado = (anguloBase * 1) + valorBase;
                break;
            case 2:
                resultado = (anguloBase * 0) + valorBase;
                break;
            case 3:
                resultado = (anguloBase * 3) + valorBase;
                break;
            case 4:
                resultado = (anguloBase * 2) + valorBase;
                break;
        }

        bolinha.posicao.angulo = resultado;
        return bolinha;
    },
    alterarAnguloVertical: function (bolinha) {
        // 4 1 - 1 4 
        // 3 2 - 2 3
        var anguloBase = 90;
        var grau = bolinha.posicao.angulo;
        var anguloGlobal = (parseInt(grau / anguloBase))+1;
        var resultado = 0;
        var valorBase = Math.abs(anguloGlobal * anguloBase - grau);

        switch (anguloGlobal) {
            case 1:
                resultado = (anguloBase * 3) + valorBase;
                break;
            case 2:
                resultado = (anguloBase * 2) + valorBase;
                break;
            case 3:
                resultado = (anguloBase * 1) + valorBase;
                break;
            case 4:
                resultado = (anguloBase * 0) + valorBase;
                break;
        }

        bolinha.posicao.angulo = resultado;
        return bolinha;
    }
}

