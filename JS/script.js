const usuario = {
    nombre: "",
    limiteGasto: 0,
    gastos: []
}
function iniciarGestor() {
    alert(`Se inicio el Gestor de gastos!`)
    usuario.nombre = prompt("Ingrese su nombre");
    alert(`Bienvenido ${usuario.nombre}`);
    usuario.limiteGasto = parseFloat(prompt(`${usuario.nombre} Ingrese el limite de gasto `));
    if (usuario.limiteGasto >= 0) {
        alert(`Has fijado el limite en ${usuario.limiteGasto}`)
    } else {
        alert(`el limite de gasto no puede ser 0`)
    }


}
function agregarGasto() {
    let continuar = true;
    class gastoNuevo {
        constructor(articulo, monto, categoria) {
            this.articulo = articulo;
            this.monto = parseFloat(monto);
            this.categoria = categoria;
        }
    }
    while (continuar) {
        let monto = prompt(`Cual fue el monto?`);
        monto=parseFloat(monto);
        if (monto <= 0 || monto === "") {
            alert(`El monto agregado no puede ser igual a 0. Ingrese Nuevamente `);
            continue;
        }
        let articulo = prompt(`Qué articulo compraste?`);
        let descripcion = prompt(`De que tipo es? (Comida, Bebida, Diverción, etc...)`);
        const gastoNew = new gastoNuevo(articulo, monto, descripcion);
        usuario.gastos.push(gastoNew);
        alert(`El gasto cargado es: ${articulo} por $${monto}, Categoría: ${descripcion}`);
        let confirmacion = prompt("Desea continuar si/no").toLowerCase()
        if (confirmacion === "si") {
            continuar = true
        } else {
            continuar = false
        }
    }
}
function calcularTotalGastos() {
    let totalAcumulado = 0;
    for (let i = 0; i < usuario.gastos.length; i++) {
        totalAcumulado = totalAcumulado + usuario.gastos[i].monto;
    }
    if (totalAcumulado>usuario.limiteGasto) {
        alert(` Has superado el límite de gasto de $${usuario.limiteGasto} el gasto total acumulado es de $${totalAcumulado} `);
    }else{
        alert(`Felicidades no superaste el limite $${usuario.limiteGasto} el gasto total acumulado es de $${totalAcumulado}`)
    }

}
iniciarGestor();
agregarGasto();
calcularTotalGastos();

