let productos = [
  { id: 1, nombre: "Montura Clásica Carey 01", categoria: "Oftálmicas", marca: "ZeissStyle", precio: 180000, stock: 12, color: "Carey", detalle: "Acetato liviano, calibre 52-18-145, ideal para lentes monofocales o progresivos." },
  { id: 2, nombre: "Montura Titanio Aero 02", categoria: "Oftálmicas", marca: "AeroFit", precio: 240000, stock: 8, color: "Grafito", detalle: "Aleación de titanio flexible con plaquetas antideslizantes y bisagra reforzada." },
  { id: 3, nombre: "Gafa de Sol Polarizada Aviador", categoria: "Sol", marca: "SolarPro", precio: 210000, stock: 15, color: "Dorado / Verde", detalle: "Protección UV400, lente polarizado antirreflejo para conducción diurna." },
  { id: 4, nombre: "Gafa de Sol Urbana Noir", categoria: "Sol", marca: "SolarPro", precio: 165000, stock: 10, color: "Negro Mate", detalle: "Diseño geométrico moderno con filtro solar categoría 3 y varillas ergonómicas." },
  { id: 5, nombre: "Lente Filtro Luz Azul ScreenPro", categoria: "Filtro Luz Azul", marca: "BlueGuard", precio: 145000, stock: 20, color: "Transparente / Negro", detalle: "Bloqueo selectivo de luz azul-violeta de pantallas para jornadas largas de cómputo." },
  { id: 6, nombre: "Montura Redonda Retro Óptica", categoria: "Oftálmicas", marca: "ZeissStyle", precio: 175000, stock: 9, color: "Ámbar", detalle: "Estilo clásico redondo con puente anatómico y alta resistencia a impactos." },
  { id: 7, nombre: "Gafa Deportiva Wrap Runner", categoria: "Deportivas", marca: "AeroFit", precio: 225000, stock: 7, color: "Azul Eléctrico", detalle: "Montura envolvente TR90 resistente al sudor con apoyo nasal de goma." },
  { id: 8, nombre: "Gafa de Sol Clásica Wayfarer", categoria: "Sol", marca: "SolarPro", precio: 190000, stock: 14, color: "Negro Brillo", detalle: "Diseño clásico con protección UV400 y acabado pulido de alta durabilidad." },
  { id: 9, nombre: "Lente Descanso Visual Office", categoria: "Filtro Luz Azul", marca: "BlueGuard", precio: 155000, stock: 11, color: "Carey Claro", detalle: "Reduce fatiga ocular frente a monitores con tratamiento antirreflejo suave." },
  { id: 10, nombre: "Montura Minimalista Rimless", categoria: "Oftálmicas", marca: "AeroFit", precio: 260000, stock: 6, color: "Plata", detalle: "Estructura ultraligera sin marco inferior para máxima discreción y comodidad." },
  { id: 11, nombre: "Gafa Deportiva Cycling Pro", categoria: "Deportivas", marca: "AeroFit", precio: 250000, stock: 9, color: "Rojo / Negro", detalle: "Amplio campo visual periférico y ventilación lateral anti-empañamiento." },
  { id: 12, nombre: "Gafa de Sol Oversize Glamour", categoria: "Sol", marca: "ZeissStyle", precio: 230000, stock: 8, color: "Borgoña", detalle: "Marco amplio con filtro solar UV400 y acabado elegante de acetato." },
  { id: 13, nombre: "Lente Gaming Anti-Fatiga", categoria: "Filtro Luz Azul", marca: "BlueGuard", precio: 170000, stock: 13, color: "Negro / Cian", detalle: "Diseñado para sesiones prolongadas de juego y edición con filtro de luz azul." },
  { id: 14, nombre: "Montura Ejecutiva Rectangular", categoria: "Oftálmicas", marca: "ZeissStyle", precio: 195000, stock: 11, color: "Azul Marino", detalle: "Líneas sobrias y precisas, apta para lentes oftálmicos de alto índice." },
  { id: 15, nombre: "Gafa de Sol Polarizada Sport", categoria: "Sol", marca: "AeroFit", precio: 205000, stock: 10, color: "Gris Humo", detalle: "Elimina reflejos en agua y asfalto manteniendo fidelidad cromática." },
  { id: 16, nombre: "Kit Limpieza Óptica Microfibra", categoria: "Accesorios", marca: "BlueGuard", precio: 35000, stock: 30, color: "Azul / Blanco", detalle: "Paño de microfibra de alta densidad y spray limpiador seguro para antirreflejos." },
  { id: 17, nombre: "Estuche Rígido Protector Gafas", categoria: "Accesorios", marca: "ZeissStyle", precio: 42000, stock: 25, color: "Negro", detalle: "Carcasa rígida con interior aterciopelado para proteger monturas de golpes." },
  { id: 18, nombre: "Cordón Deportivo Anticaída", categoria: "Accesorios", marca: "AeroFit", precio: 28000, stock: 22, color: "Negro / Dorado", detalle: "Sujeción ajustable de silicona para actividades físicas y movimiento." },
  { id: 19, nombre: "Montura Junior Resistente Flex", categoria: "Oftálmicas", marca: "BlueGuard", precio: 150000, stock: 12, color: "Verde Esmeralda", detalle: "Material flexible de alta resistencia pensado para uso diario activo." },
  { id: 20, nombre: "Gafa de Sol Clip-On Magnético", categoria: "Sol", marca: "SolarPro", precio: 220000, stock: 7, color: "Carey / Polarizado", detalle: "Montura oftálmica con clip solar polarizado desmontable de ajuste magnético." }
];

let usuarios = JSON.parse(localStorage.getItem("tsp_optica_usuarios") || "[]");
let usuarioActual = JSON.parse(localStorage.getItem("tsp_optica_sesion") || "null");
let carrito = JSON.parse(localStorage.getItem("tsp_optica_carrito") || "[]");

const guardarEstado = () => {
  localStorage.setItem("tsp_optica_usuarios", JSON.stringify(usuarios));
  localStorage.setItem("tsp_optica_sesion", JSON.stringify(usuarioActual));
  localStorage.setItem("tsp_optica_carrito", JSON.stringify(carrito));
};

const actualizarSesionUI = () => {
  const el = document.getElementById("sesionEstado");
  const btnLogout = document.getElementById("btnLogout");
  if (usuarioActual) {
    el.textContent = `Sesión activa: ${usuarioActual.nombre} (${usuarioActual.correo})`;
    btnLogout.classList.remove("oculto");
  } else {
    el.textContent = "Invitado – Inicia sesión o regístrate para comprar";
    btnLogout.classList.add("oculto");
  }
};

const renderCatalogo = () => {
  const texto = document.getElementById("busquedaBasica").value.trim().toLowerCase();
  const cat = document.getElementById("filtroCategoria").value;
  const marca = document.getElementById("filtroMarca").value;
  const maxPrecio = Number(document.getElementById("filtroPrecioMax").value) || Infinity;

  const filtrados = productos.filter(p =>
    p.nombre.toLowerCase().includes(texto) &&
    (!cat || p.categoria === cat) &&
    (!marca || p.marca === marca) &&
    p.precio <= maxPrecio
  );

  const cont = document.getElementById("catalogo");
  const resumen = document.getElementById("resumenResultados");
  resumen.textContent = `Mostrando ${filtrados.length} de ${productos.length} artículos ópticos`;

  if (!filtrados.length) {
    cont.innerHTML = "<p>No se encontraron gafas con esos criterios. Prueba limpiar o cambiar los filtros.</p>";
    return;
  }

  cont.innerHTML = filtrados.map(p => `
    <article class="card">
      <div>
        <div class="thumb-box" onclick="abrirDetalle(${p.id})" title="Clic para ver descripción ampliada">
          <span class="thumb-tag">${p.categoria}</span>
          <span class="thumb-title">${p.nombre}</span>
        </div>
        <h3 onclick="abrirDetalle(${p.id})">${p.nombre}</h3>
        <p class="meta-prod">${p.categoria} · ${p.marca}</p>
        <p class="precio">$${p.precio.toLocaleString("es-CO")}</p>
        <p class="stock-txt">Stock disponible: <strong>${p.stock}</strong></p>
      </div>
      <div class="acciones-card">
        <input type="number" id="cant-${p.id}" min="1" max="${p.stock}" value="1" ${p.stock === 0 ? "disabled" : ""} />
        <button onclick="comprarDirecto(${p.id})" ${p.stock === 0 ? "disabled" : ""}>Comprar</button>
        <button onclick="agregarCarrito(${p.id})" ${p.stock === 0 ? "disabled" : ""}>+ Carrito</button>
      </div>
    </article>
  `).join("");
};

window.abrirDetalle = (id) => {
  const p = productos.find(item => item.id === id);
  if (!p) return;
  document.getElementById("contenidoDetalle").innerHTML = `
    <div class="thumb-box" style="height: 170px; margin-bottom: 14px; cursor: default;">
      <span class="thumb-tag">${p.categoria} · ${p.marca}</span>
      <span class="thumb-title">${p.nombre}</span>
    </div>
    <h2>${p.nombre}</h2>
    <p><strong>Categoría:</strong> ${p.categoria} | <strong>Marca:</strong> ${p.marca}</p>
    <p><strong>Color / Filtro:</strong> ${p.color} | <strong>Stock actual:</strong> ${p.stock}</p>
    <p><strong>Precio:</strong> $${p.precio.toLocaleString("es-CO")}</p>
    <p><strong>Descripción ampliada:</strong> ${p.detalle}</p>
  `;
  document.getElementById("modalDetalle").classList.remove("oculto");
};

const exigirSesion = () => {
  if (!usuarioActual) {
    alert("Debes iniciar sesión o registrarte para realizar compras.");
    document.getElementById("modalAuth").classList.remove("oculto");
    return false;
  }
  return true;
};

window.comprarDirecto = (id) => {
  if (!exigirSesion()) return;
  const p = productos.find(item => item.id === id);
  const cant = Number(document.getElementById(`cant-${id}`).value);
  if (!cant || cant < 1) return alert("Ingresa una cantidad válida.");
  if (cant > p.stock) return alert(`Stock insuficiente. Disponible: ${p.stock}`);
  p.stock -= cant;
  guardarEstado();
  renderCatalogo();
  alert(`Compra confirmada: ${cant} x ${p.nombre} por $${(cant * p.precio).toLocaleString("es-CO")}.`);
};

window.agregarCarrito = (id) => {
  const p = productos.find(item => item.id === id);
  const cant = Number(document.getElementById(`cant-${id}`).value);
  if (!cant || cant < 1) return alert("Ingresa una cantidad válida.");
  if (cant > p.stock) return alert(`No puedes agregar más del stock disponible (${p.stock}).`);
  const existente = carrito.find(i => i.id === id);
  if (existente) {
    if (existente.cantidad + cant > p.stock) return alert("La suma supera el stock disponible.");
    existente.cantidad += cant;
  } else {
    carrito.push({ id: p.id, nombre: p.nombre, precio: p.precio, cantidad: cant });
  }
  guardarEstado();
  renderCarritoBadge();
};

const renderCarritoBadge = () => {
  const totalUnidades = carrito.reduce((acc, i) => acc + i.cantidad, 0);
  document.getElementById("contadorCarrito").textContent = totalUnidades;
};

const renderCarritoModal = () => {
  const cont = document.getElementById("itemsCarrito");
  if (!carrito.length) {
    cont.innerHTML = "<p>Tu carrito está vacío.</p>";
    document.getElementById("totalCarrito").textContent = "0";
    return;
  }
  cont.innerHTML = carrito.map((item, idx) => `
    <div class="item-carrito">
      <span><strong>${item.nombre}</strong> ($${item.precio.toLocaleString("es-CO")})</span>
      <div>
        <button onclick="cambiarCantidadCarrito(${idx}, -1)">-</button>
        <span> ${item.cantidad} </span>
        <button onclick="cambiarCantidadCarrito(${idx}, 1)">+</button>
        <button onclick="eliminarItemCarrito(${idx})">Quitar</button>
      </div>
    </div>
  `).join("");
  const total = carrito.reduce((acc, i) => acc + i.precio * i.cantidad, 0);
  document.getElementById("totalCarrito").textContent = total.toLocaleString("es-CO");
};

window.cambiarCantidadCarrito = (idx, delta) => {
  const item = carrito[idx];
  const prod = productos.find(p => p.id === item.id);
  const nuevaCant = item.cantidad + delta;
  if (nuevaCant <= 0) {
    carrito.splice(idx, 1);
  } else if (nuevaCant > prod.stock) {
    return alert(`Stock máximo disponible: ${prod.stock}`);
  } else {
    item.cantidad = nuevaCant;
  }
  guardarEstado();
  renderCarritoBadge();
  renderCarritoModal();
};

window.eliminarItemCarrito = (idx) => {
  carrito.splice(idx, 1);
  guardarEstado();
  renderCarritoBadge();
  renderCarritoModal();
};

document.getElementById("btnConfirmarCarrito").addEventListener("click", () => {
  if (!exigirSesion()) return;
  if (!carrito.length) return alert("El carrito está vacío.");
  for (const item of carrito) {
    const prod = productos.find(p => p.id === item.id);
    if (item.cantidad > prod.stock) return alert(`Sin stock suficiente para ${prod.nombre}.`);
  }
  let totalCompra = 0;
  for (const item of carrito) {
    const prod = productos.find(p => p.id === item.id);
    prod.stock -= item.cantidad;
    totalCompra += item.precio * item.cantidad;
  }
  carrito = [];
  guardarEstado();
  renderCatalogo();
  renderCarritoBadge();
  renderCarritoModal();
  document.getElementById("modalCarrito").classList.add("oculto");
  alert(`¡Pedido confirmado! Total pagado: $${totalCompra.toLocaleString("es-CO")}.`);
});

document.getElementById("formRegistro").addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("regNombre").value.trim();
  const correo = document.getElementById("regCorreo").value.trim().toLowerCase();
  const clave = document.getElementById("regClave").value;
  if (clave.length < 4) return alert("Usa al menos 4 caracteres en la contraseña.");
  if (usuarios.some(u => u.correo === correo)) return alert("Ese correo ya está registrado.");
  const nuevo = { nombre, correo, claveHash: btoa(clave) };
  usuarios.push(nuevo);
  usuarioActual = { nombre: nuevo.nombre, correo: nuevo.correo };
  guardarEstado();
  actualizarSesionUI();
  document.getElementById("mensajeAuth").textContent = "Cuenta creada y sesión iniciada.";
  e.target.reset();
});

document.getElementById("formLogin").addEventListener("submit", (e) => {
  e.preventDefault();
  const correo = document.getElementById("loginCorreo").value.trim().toLowerCase();
  const clave = document.getElementById("loginClave").value;
  const encontrado = usuarios.find(u => u.correo === correo && u.claveHash === btoa(clave));
  if (!encontrado) return alert("Credenciales inválidas.");
  usuarioActual = { nombre: encontrado.nombre, correo: encontrado.correo };
  guardarEstado();
  actualizarSesionUI();
  document.getElementById("mensajeAuth").textContent = "Sesión iniciada correctamente.";
  e.target.reset();
});

document.getElementById("btnLogout").addEventListener("click", () => {
  usuarioActual = null;
  guardarEstado();
  actualizarSesionUI();
  document.getElementById("mensajeAuth").textContent = "Sesión cerrada.";
});

document.getElementById("btnAuth").addEventListener("click", () => document.getElementById("modalAuth").classList.remove("oculto"));
document.getElementById("btnCarrito").addEventListener("click", () => {
  renderCarritoModal();
  document.getElementById("modalCarrito").classList.remove("oculto");
});
document.querySelectorAll("[data-cerrar]").forEach(btn => {
  btn.addEventListener("click", () => document.getElementById(btn.dataset.cerrar).classList.add("oculto"));
});
["busquedaBasica", "filtroCategoria", "filtroMarca", "filtroPrecioMax"].forEach(id => {
  document.getElementById(id).addEventListener("input", renderCatalogo);
  document.getElementById(id).addEventListener("change", renderCatalogo);
});
document.getElementById("btnLimpiar").addEventListener("click", () => {
  document.getElementById("busquedaBasica").value = "";
  document.getElementById("filtroCategoria").value = "";
  document.getElementById("filtroMarca").value = "";
  document.getElementById("filtroPrecioMax").value = "";
  renderCatalogo();
});

actualizarSesionUI();
renderCatalogo();
renderCarritoBadge();