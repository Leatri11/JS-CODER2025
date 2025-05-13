# 💰 Gestor de Gastos

## 📌 Descripción

Este proyecto es un **Gestor de Gastos Personales** desarrollado como entrega final del curso de JavaScript en Coderhouse. Permite a los usuarios registrar sus gastos, categorizarlos y verificar si han superado un límite de gasto previamente establecido. Además, guarda los datos localmente y simula la carga de información desde una fuente externa.

---

## 🛠️ Funcionalidades

- ✅ **Carga de Usuario**: Permite ingresar nombre y un límite de gasto personalizado.
- ✅ **Agregar Gastos**: Se pueden cargar múltiples gastos con artículo, monto y categoría.
- ✅ **Visualización Dinámica**: Cada gasto se muestra como una tarjeta generada desde JavaScript.
- ✅ **Resumen**: Se calcula el total gastado y se compara con el límite establecido.
- ✅ **Persistencia de Datos**: Guarda usuario y gastos en `localStorage`.
- ✅ **Carga de Datos Simulada**: Si no hay gastos previos, los carga automáticamente desde un archivo `gastos.json` usando `fetch`, `async/await` y `try/catch`.

---

## 🧰 Tecnologías Utilizadas

- **JavaScript (Vanilla)**: Lógica de negocio, interacción con DOM y manejo de eventos.
- **HTML + CSS**: Estructura y estilos.
- **JSON (simulado)**: Fuente de datos externa.
- **localStorage**: Persistencia local del navegador.

---

## ▶️ Cómo Usarlo

1. Cloná o descargá el repositorio
2. Abrí el archivo `index.html` en un navegador moderno
3. Ingresá tu nombre y límite de gasto
4. Agregá tantos gastos como desees
5. Presioná “Finalizar carga” para ver el resumen total

---

## 📦 Estructura del Proyecto

```
EntregaFinal-GestorGastos/
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── gastos.json
├── index.html
└── README.md
```

---

## 🧪 Requisitos

- Navegador moderno (Chrome, Firefox, Edge, etc.)
- No requiere servidor ni base de datos externa
