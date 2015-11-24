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
    },
}

var VerificarColisao = function (origemX, origemY, width, height) {
    this.origemMinX = origemX;
    this.origemMinY = origemY;
    this.origemMaxX = origemX + width;
    this.origemMaxY = origemY + height;
    
    function cenario(bolinha) {
        var posicaoX = bolinha.posicao.posicaoX;
        var posicaoY = bolinha.posicao.posicaoY;

        if ((posicaoX <= this.origemMinX || posicaoX >= this.origemMaxX) &&
                (posicaoY >= this.origemMinY && posicaoY <= this.origemMaxY))
        {
            return true;
        }
        if ((posicaoY <= this.origemMinY || posicaoY >= this.origemMaxY) &&
                (posicaoX >= this.origemMinX && posicaoX <= this.origemMaxX))
        {
            return true;
        }
        return false;
    }
    
    return {
        cenario: cenario,
        alterarAngulo: function (bolinha) {

        }
    }
}