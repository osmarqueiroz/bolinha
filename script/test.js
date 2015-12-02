var bolinhaAzul = new Bolinha();
VerificarColisao.init(0, 0, 50, 30);

QUnit.test("Bolinha é objeto sem posicao", function (assert) {
    bolinhaAzul = new Bolinha();
    assert.equal(typeof bolinhaAzul, "object", "Passou");
    assert.equal(bolinhaAzul.posicao, null, "Posicao tem que ser nula");
});



QUnit.test("Bolinha com posicao", function (assert) {
    bolinhaAzul = ModificarPosicao.adicionarPosicao(bolinhaAzul, 20, 30, 45);
    assert.equal(typeof bolinhaAzul.posicao, "object", "Passou");
    assert.equal(bolinhaAzul.posicao.posicaoX, 20, "posicao X 20");
    assert.equal(bolinhaAzul.posicao.posicaoY, 30, "posicao Y 30");
    assert.equal(bolinhaAzul.posicao.angulo, 45, "angulo 45");
});



QUnit.test("Tamanho da tela", function (assert) {
    assert.equal(VerificarColisao.origemMinX, 0, "origem X = 0");
    assert.equal(VerificarColisao.origemMinY, 0, "origem Y = 0");
    assert.equal(VerificarColisao.origemMaxX, 50, "max X = 50");
    assert.equal(VerificarColisao.origemMaxY, 30, "max Y = 30");
});

QUnit.test("Colisao na base da tela inversao de angulo 45 -> 135", function (assert) {
    bolinhaAzul = ModificarPosicao.adicionarPosicao(bolinhaAzul, 50, 15, 45);
    assert.equal(bolinhaAzul.posicao.angulo, 45, "angulo 45");
    bolinhaAzul = VerificarColisao.cenario(bolinhaAzul);
    assert.equal(bolinhaAzul.posicao.angulo, 135, "angulo = 135");
});

QUnit.test("Colisao na base da tela inversao de angulo 135 -> 45", function (assert) {
    bolinhaAzul = ModificarPosicao.adicionarPosicao(bolinhaAzul, 50, 15, 135);
    assert.equal(bolinhaAzul.posicao.angulo, 135, "angulo 135");
    bolinhaAzul = VerificarColisao.cenario(bolinhaAzul);
    assert.equal(bolinhaAzul.posicao.angulo, 45, "angulo = 45");
});

QUnit.test("Colisao na base da tela inversao de angulo 45 -> 315", function (assert) {
    bolinhaAzul = ModificarPosicao.adicionarPosicao(bolinhaAzul, 12, 30, 45);
    assert.equal(bolinhaAzul.posicao.angulo, 45, "angulo = 45");
    bolinhaAzul = VerificarColisao.cenario(bolinhaAzul);
    assert.equal(bolinhaAzul.posicao.angulo, 315, "angulo = 315");
});
QUnit.test("Colisao na base da tela inversao de angulo 315 -> 45", function (assert) {
    bolinhaAzul = ModificarPosicao.adicionarPosicao(bolinhaAzul, 12, 30, 315);
    assert.equal(bolinhaAzul.posicao.angulo, 315, "angulo = 315");
    bolinhaAzul = VerificarColisao.cenario(bolinhaAzul);
    assert.equal(bolinhaAzul.posicao.angulo, 45, "angulo = 45");
});


QUnit.test("Colisao na base da tela inversao de angulo 225 -> 315", function (assert) {
    bolinhaAzul = ModificarPosicao.adicionarPosicao(bolinhaAzul, 0, 15, 225);
    assert.equal(bolinhaAzul.posicao.angulo, 225, "angulo = 225");
    bolinhaAzul = VerificarColisao.cenario(bolinhaAzul);
    assert.equal(bolinhaAzul.posicao.angulo, 315, "angulo = 315");
});

QUnit.test("Colisao na base da tela inversao de angulo 315 -> 225", function (assert) {
    bolinhaAzul = ModificarPosicao.adicionarPosicao(bolinhaAzul, 0, 15, 315);
    assert.equal(bolinhaAzul.posicao.angulo, 315, "angulo = 315");
    bolinhaAzul = VerificarColisao.cenario(bolinhaAzul);
    assert.equal(bolinhaAzul.posicao.angulo, 225, "angulo = 225");
});


QUnit.test("Colisao na base da tela inversao de angulo 225 -> 135", function (assert) {
    bolinhaAzul = ModificarPosicao.adicionarPosicao(bolinhaAzul, 15, 30, 225);
    assert.equal(bolinhaAzul.posicao.angulo, 225, "angulo = 225");
    bolinhaAzul = VerificarColisao.cenario(bolinhaAzul);
    assert.equal(bolinhaAzul.posicao.angulo, 135, "angulo = 135");
});
QUnit.test("Colisao na base da tela inversao de angulo 135 -> 225", function (assert) {
    bolinhaAzul = ModificarPosicao.adicionarPosicao(bolinhaAzul, 15, 30, 135);
    assert.equal(bolinhaAzul.posicao.angulo, 135, "angulo = 135");
    bolinhaAzul = VerificarColisao.cenario(bolinhaAzul);
    assert.equal(bolinhaAzul.posicao.angulo, 225, "angulo = 225");
});

QUnit.test("Colisao na diagonal da tela inversao de angulo diagonal 45", function (assert) {
    bolinhaAzul = ModificarPosicao.adicionarPosicao(bolinhaAzul, 50, 0, 45);
    assert.equal(bolinhaAzul.posicao.angulo, 45, "angulo = 45");
    bolinhaAzul = VerificarColisao.cenario(bolinhaAzul);
    assert.equal(bolinhaAzul.posicao.angulo, 225, "angulo = 225");
});

QUnit.test("Colisao na diagonal da tela inversao de angulo diagonal 135", function (assert) {
    bolinhaAzul = ModificarPosicao.adicionarPosicao(bolinhaAzul, 0, 0, 135);
    assert.equal(bolinhaAzul.posicao.angulo, 135, "angulo = 135");
    bolinhaAzul = VerificarColisao.cenario(bolinhaAzul);
    assert.equal(bolinhaAzul.posicao.angulo, 315, "angulo = 315");
});
QUnit.test("Colisao na diagonal da tela inversao de angulo diagonal 225", function (assert) {
    bolinhaAzul = ModificarPosicao.adicionarPosicao(bolinhaAzul, 0, 0, 225);
    assert.equal(bolinhaAzul.posicao.angulo, 225, "angulo = 225");
    bolinhaAzul = VerificarColisao.cenario(bolinhaAzul);
    assert.equal(bolinhaAzul.posicao.angulo, 45, "angulo = 45");
});
QUnit.test("Colisao na diagonal da tela inversao de angulo diagonal 315", function (assert) {
    bolinhaAzul = ModificarPosicao.adicionarPosicao(bolinhaAzul, 0, 0, 315);
    assert.equal(bolinhaAzul.posicao.angulo, 315, "angulo = 315");
    bolinhaAzul = VerificarColisao.cenario(bolinhaAzul);
    assert.equal(bolinhaAzul.posicao.angulo, 135, "angulo = 135");
});