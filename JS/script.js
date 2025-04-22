const usuario = {
    nombre: "",
    limiteGasto: 0,
    gastos: []
};
window.addEventListener("DOMContentLoaded", () => {
    const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));
    const gastosGuardados = JSON.parse(localStorage.getItem("gastos"));

    if (usuarioGuardado && gastosGuardados) {
        usuario.nombre = usuarioGuardado.nombre;
        usuario.limiteGasto = usuarioGuardado.limiteGasto;
        usuario.gastos = gastosGuardados;

        document.getElementById("usuario-section").style.display = "none";
        document.getElementById("gasto-section").style.display = "block";
        document.getElementById("resultado-section").style.display = "block";

        mostrarGastos();
    }
});

const formUsuario = document.getElementById("form-usuario");
formUsuario.addEventListener("submit", (e) => {
    e.preventDefault();

    usuario.nombre = document.getElementById("nombre").value;
    usuario.limiteGasto = parseFloat(document.getElementById("limite").value);

    localStorage.setItem("usuario", JSON.stringify({ nombre: usuario.nombre, limiteGasto: usuario.limiteGasto }));

    document.getElementById("usuario-section").style.display = "none";
    document.getElementById("gasto-section").style.display = "block";
    document.getElementById("resultado-section").style.display = "block";
});

const formGasto = document.getElementById("form-gasto");
formGasto.addEventListener("submit", (e) => {
    e.preventDefault();

    const articulo = document.getElementById("articulo").value;
    const monto = parseFloat(document.getElementById("monto").value);
    const categoria = document.getElementById("categoria").value;

    if (monto <= 0) return;

    const nuevoGasto = { articulo, monto, categoria };
    usuario.gastos.push(nuevoGasto);
    localStorage.setItem("gastos", JSON.stringify(usuario.gastos));

    formGasto.reset();
    mostrarGastos();
});

document.getElementById("finalizar-btn").addEventListener("click", () => {
    document.getElementById("gasto-section").style.display = "none";
    mostrarGastos();
});

function mostrarGastos() {
    const contenedor = document.getElementById("cards-gastos");
    contenedor.innerHTML = "";
    let total = 0;

    usuario.gastos.forEach(gasto => {
        total += gasto.monto;
        const card = document.createElement("div");
        card.className = "card-gasto";
        card.innerHTML = `
            <div class="card-contenido">
                <h4>${gasto.articulo}</h4>
                <p><strong>Categoría:</strong> ${gasto.categoria}</p>
                <p class="monto">$${gasto.monto.toFixed(2)}</p>
            </div>`;
        contenedor.appendChild(card);
    });

    const totalTexto = document.getElementById("total-gasto");
    totalTexto.textContent = `Total gastado: $${total.toFixed(2)}`;

    if (total > usuario.limiteGasto) {
        totalTexto.style.color = "red";
        totalTexto.textContent += ` (¡Has superado tu límite de $${usuario.limiteGasto}!)`;
    } else {
        totalTexto.style.color = "green";
    }
}