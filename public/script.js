const app = {
  state: {
    user: null, // null, 'parent', 'professional'
    patients: [
      { name: "Lucas M.", age: 8, imc: 26.5, risk: "alto" },
      { name: "Ana R.", age: 10, imc: 19.2, risk: "normal" },
      { name: "Pedro S.", age: 7, imc: 23.0, risk: "medio" },
    ],
  },

  // Navegación SPA
  navigate: (viewId) => {
    // Ocultar todas las secciones
    document
      .querySelectorAll(".view-section")
      .forEach((el) => el.classList.remove("active"));

    // Mapear viewId a ID de sección real
    const map = {
      landing: "view-landing",
      login: "view-auth",
      register: "view-auth",
      "dashboard-parent": "view-dashboard-parent",
      "dashboard-pro": "view-dashboard-pro",
      forum: "view-forum",
      videos: "view-videos",
    };

    const target = document.getElementById(map[viewId] || "view-landing");
    if (target) target.classList.add("active");

    // Ajustar título de auth si es registro o login
    if (viewId === "register") {
      document.getElementById("auth-title").innerText = "Crear Cuenta Nueva";
    } else if (viewId === "login") {
      document.getElementById("auth-title").innerText = "Iniciar Sesión";
    }
  },

  // Manejo de Login/Registro simulado
  handleAuth: (e) => {
    e.preventDefault();
    const role = document.getElementById("user-role").value;
    const name = document.getElementById("auth-name").value;

    app.state.user = { name, role };

    // Actualizar UI
    document.getElementById("auth-buttons").style.display = "none";
    document.getElementById("user-profile").style.display = "flex";
    document.getElementById("user-name").textContent = name;

    // Redirigir según rol
    if (role === "professional" || role === "authority") {
      document.querySelector(".pro-name").textContent = name;
      app.renderPatients();
      app.navigate("dashboard-pro");
    } else {
      document.querySelector(".parent-name").textContent = name;
      app.navigate("dashboard-parent");
    }
  },

  logout: () => {
    app.state.user = null;
    document.getElementById("auth-buttons").style.display = "flex";
    document.getElementById("user-profile").style.display = "none";
    app.navigate("landing");
  },

  // Renderizado de Pacientes (Dashboard Pro)
  renderPatients: (filter = "all") => {
    const tbody = document.getElementById("patient-list");
    tbody.innerHTML = "";

    app.state.patients.forEach((p) => {
      if (filter === "all" || p.risk === filter) {
        const tr = document.createElement("tr");
        let tagClass = p.risk;

        tr.innerHTML = `
                  <td>${p.name}</td>
                  <td>${p.age} años</td>
                  <td>${p.imc}</td>
                  <td><span class="tag ${tagClass}">${p.risk.toUpperCase()}</span></td>
                  <td>
                      <button class="btn outline" style="color:var(--primary-blue); padding: 2px 8px; border:1px solid #ccc;">
                          <i class="fas fa-eye"></i>
                      </button>
                  </td>
              `;
        tbody.appendChild(tr);
      }
    });
  },

  filterPatients: (val) => {
    app.renderPatients(val);
  },

  showModal: (type) => {
    if (type === "modal-imc") {
      const peso = prompt("Ingresa el peso (kg):");
      const talla = prompt("Ingresa la talla (cm):");
      if (peso && talla) {
        const imc = (peso / (talla / 100) ** 2).toFixed(2);
        alert(
          `El IMC calculado es: ${imc}\nClasificación: ${
            imc > 25 ? "Sobrepeso" : "Normal"
          }`
        );
      }
    } else if (type === "modal-meal") {
      alert("Formulario de registro de comida guardado (US09)");
    }
  },
};

// Inicializar navegación
document.addEventListener("DOMContentLoaded", () => {
  // Cargar contenido inicial si fuera necesario
});
