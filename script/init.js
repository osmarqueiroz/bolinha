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

var Processamento = {
  canvas:null,
  context:null,
  totalBolinha:0,
  definicaoInicial:function(canvas,totalBolinha){
    Processamento.canvas = canvas;
    Processamento.totalBolinha = totalBolinha;
    Processamento.context = canvas.getContext('2d');
    Estrutura.configurarTamanhoMapa(parseInt(canvas.width), parseInt(canvas.height));
    Estrutura.definirPontoDisparo(parseInt(canvas.width) / 2, 0);
    Estrutura.definirAnguloDisparo(10, 170);
  },
  limparTela:function(){
    Processamento.context.clearRect(0, 0, parseInt(Processamento.canvas.width), parseInt(Processamento.canvas.height));
  },
  gerenciarAnimacao : function(){
    if (Estrutura.buscarTotalBolinhas() < Processamento.totalBolinha) {
        Estrutura.adicionarBolinha();
    }
    Estrutura.processarBolinha();
    var bolinhas = Estrutura.buscarLista();
    var total = bolinhas.length;
    Processamento.limparTela();
    for (var i = 0; i < total; i++) {
        Processamento.context.beginPath();
        Processamento.context.arc(bolinhas[i].posicao.posicaoX, bolinhas[i].posicao.posicaoY, 5, 0, 2 * Math.PI, false);
        Processamento.context.fillStyle = bolinhas[i].cor;
        Processamento.context.fill();

    }

  }
}
