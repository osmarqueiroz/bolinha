var cobra = new Cobra();
var comida = new Comida("Morango",1);
var localizacao = new Localizacao(comida);

QUnit.test("Cobra é objeto", function (assert) {
    assert.ok(typeof cobra === "object", "Passou");
    assert.ok(cobra.valor === 0, "Passou o valor base do array 0");
});

QUnit.test("Tamanho Cobra igual a zero", function (assert) {
    var tamanho = ManipularCobra.verificarTamanhoCobra(cobra);
    assert.ok(tamanho === 0, "Passou");
});

QUnit.test("Comida é objeto", function (assert) {
    assert.ok(typeof comida === "object", "Passou");
    assert.ok(comida.nome === "Morango", "O nome é Morango");
    assert.ok(comida.valor === 1, "O Valor é 1");
});

QUnit.test("Localizacao é objeto", function (assert) {
    assert.ok(typeof localizacao === "object", "Passou");
});

QUnit.test("Tamanho Cobra igual a 1", function (assert) {
    cobra = ManipularCobra.adicionarComida(cobra,comida);    
    var tamanho = ManipularCobra.verificarTamanhoCobra(cobra);
    assert.ok(tamanho === 1, "Passou");
});
