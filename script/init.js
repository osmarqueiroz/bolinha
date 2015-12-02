var Estrutura = {
    bolinhas: [],
    tamanhoLista: 0,
    origemDisparoX: 0,
    origemDisparoY: 0,
    anguloIncial:0,
    anguloFinal:0,
    definirAnguloDisparo:function(anguloInicial,anguloFinal){
        Estrutura.anguloIncial = anguloInicial;
        Estrutura.anguloFinal = anguloFinal;
    },
    configurarTamanhoMapa: function (largura, altura) {
        VerificarColisao.init(0, 0, largura, altura);
    },
    definirPontoDisparo: function (posicaoX, posicaoY) {
        Estrutura.origemDisparoX = posicaoX;
        Estrutura.origemDisparoY = posicaoY;
    },
    definirAngulo: function () {
        max = Estrutura.anguloFinal;
        min = Estrutura.anguloIncial;
        return Math.floor(Math.random() * (max - min)) + min;


    },
    definirAnguloCor: function () {

        return Estrutura.tamanhoLista;


    },
    adicionarBolinha: function () {

        var bolinha = new Bolinha('hsl(' + Estrutura.definirAnguloCor() + ',100%,50%)');
        var angulo = Estrutura.definirAngulo();

        Estrutura.bolinhas[Estrutura.tamanhoLista] = ModificarPosicao.adicionarPosicao(bolinha, Estrutura.origemDisparoX, Estrutura.origemDisparoY, angulo);

        Estrutura.tamanhoLista++;

    },
    processarBolinha: function () {
        var tamanho = Estrutura.bolinhas.length;

        for (var i = 0; i < tamanho; i++) {
            Estrutura.bolinhas[i] = ModificarPosicao.calcularMovimentacaoBolinha(Estrutura.bolinhas[i], Estrutura.passo);
            Estrutura.bolinhas[i] = VerificarColisao.cenario(Estrutura.bolinhas[i]);
        }
    },
    buscarLista: function () {
        return Estrutura.bolinhas;
    },
    buscarTotalBolinhas: function () {
        return Estrutura.tamanhoLista;
    }


}