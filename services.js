document.addEventListener("DOMContentLoaded", () => {

  const categoryIconMap = {
    'Todos': 'folder-open',
    'Instalação e Configuração': 'sys-enter-2',
    'Estrutura Organizacional': 'organizational-chart',
    'Dados Mestres de Materiais': 'object-identifier',
    'Compras & Aquisição': 'shopping-cart',
    'Gestão de Estoque & Movimentação': 'inventory',
    'LOF – Opções de Fornecimento': 'decision',
    'Mestre de Serviços': 'service'
  };

  const sapServiceGroups = [
    {
      category: 'Instalação e Configuração',
      services: [
        {
          name: 'Instalar e configurar SAP GUI', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/22d98e9e851e80918ee2c92d22fc57b6',
          icon: 'sap-machine'
        }
      ]
    },
    {
      category: 'Estrutura Organizacional',
      services: [
        {
          name: 'Mandante', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e807ca7a4e896de2ccb0c',
          icon: 'company-view'
        },
        {
          name: 'Empresa', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e8058808cfc40dd064cd0',
          icon: 'building'
        },
        {
          name: 'Organização de Compras', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e800698fbf9613e632291',
          icon: 'company-view'
        },
        {
          name: 'Grupo de Compradores', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e800eb927e130739272a1',
          icon: 'group'
        },
        {
          name: 'Centro', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e80e7ad87e2dbda8d2333',
          icon: 'map-2'
        },
        {
          name: 'Depósito', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e8076b1cecfdbaf1e1a9f',
          icon: 'sap-box'
        },
        {
          name: 'Atribuir Depósito ao Centro', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e80ae9c30eb8e1b553964',
          icon: 'transfer'
        }
      ]
    },
    {
      category: 'Dados Mestres de Materiais',
      services: [
        {
          name: 'Tipos de Materiais', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e803e9e62e7de52f8c027',
          icon: 'categories'
        },
        {
          name: 'Criando Material (MM01)', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e80ae9f76c2c0f5ed0dda',
          icon: 'add-document'
        },
        {
          name: 'Alterando Material (MM02)', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e80b0ba28e8eddab2f01d',
          icon: 'edit'
        },
        {
          name: 'Visualizando Material (MM03)', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e806d8894c47b93299f41',
          icon: 'search'
        },
        {
          name: 'Erro ao atribuir Centro', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e80b986d5f973125ab66b',
          icon: 'error'
        },
        {
          name: 'Consultar por Centro', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e801bab42fb20af66d1d9',
          icon: 'search-magnifier'
        },
        {
          name: 'Consultar por Depósito', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e80dd95f0e75320c50ddf',
          icon: 'search'
        },
        {
          name: 'Expandindo visão de material', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e80f39708eff668492272',
          icon: 'expand'
        },
        {
          name: 'Criar Fornecedor', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e80af9b4bf63da5e51ea6',
          icon: 'supplier'
        },
        {
          name: 'Criar Registro Info', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e806c8795f1f548822c31',
          icon: 'document-text'
        },
        {
          name: 'Correção de Erros na Visão', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e80608e13e463453b7da0',
          icon: 'edit'
        },
        {
          name: 'Criar Planejador', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e8059b2adc61d0ddcb586',
          icon: 'planner'
        },
        {
          name: 'Adicionar Planejador em MRP', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e8056969ae411355b8e10',
          icon: 'add-planner'
        }
      ]
    },
    {
      category: 'Compras & Aquisição',
      services: [
        {
          name: 'Visualizar Tipos de Contratos', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e80a58b52de5f535061f9',
          icon: 'contract'
        },
        {
          name: 'Criar Contrato (ME31K)', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e803c9449ec6876c45127',
          icon: 'create-form'
        },
        {
          name: 'Visualizar Contrato', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e80508881cabd451f77e4',
          icon: 'document'
        },
        {
          name: 'Tipos de Requisições', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e801aae65c82494f90384',
          icon: 'list'
        },
        {
          name: 'Criar Requisição', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e8093b1b7f6e9cb793c84',
          icon: 'add-document'
        },
        {
          name: 'Atualizar Intervalos de Pedido', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e802fbd14c24a0410bc67',
          icon: 'settings'
        },
        {
          name: 'Definir Tipos de Documento', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e8016a876c3ee4737132a',
          icon: 'document-text'
        },
        {
          name: 'Criar Pedido (ME21N)', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e80c2b752fbda9396927c',
          icon: 'cart'
        },
        {
          name: 'Copiar Pedido Existente', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e80519f51c7d3b01d3617',
          icon: 'copy'
        },
        {
          name: 'PO a partir de PR', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e808e875cd0eaa4889d22',
          icon: 'share'
        },
        {
          name: 'PO AUTO 1: Habilitar Pedido Automático', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24698e9e851e80738019f05a68a1f0e1',
          icon: 'automation'
        },

        {
          name: 'PO AUTO 2: Geração Automática', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24698e9e851e8016a267dbbc04fe2e44',
          icon: 'automation'
        },
        {
          name: 'PO AUTO 3: Fonte de Suprimento', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24698e9e851e80d0b5dfef83ac49ddf7',
          icon: 'source'
        },
        {
          name: 'Criar ME59N', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24698e9e851e802d86aed6106993d0d8',
          icon: 'process'
        },
        {
          name: 'Envio de Pedido Automático', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24698e9e851e802aa596fc614741bd67',
          icon: 'send'
        },
        {
          name: 'Gerar PDF do Pedido', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24698e9e851e80a2b6f0ee1b031c9144',
          icon: 'pdf-attachment'
        },
        {
          name: 'Pedido Direto (Centro Custo)', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e801a950af9117efc2259',
          icon: 'financial-document'
        }
      ]
    },
    {
      category: 'Gestão de Estoque & Movimentação',
      services: [
        {
          name: 'Tipos de Movimentos', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e8079b2cde370f62e040d',
          icon: 'movement'
        },
        {
          name: 'MIGO', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e80e6833fc2a63e1b6af0',
          icon: 'process'
        },
        {
          name: 'Recebimento VL31N', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e80c38427c49f87b6dd76',
          icon: 'download'
        },
        {
          name: 'Nota Fiscal (MIRO)', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e80fdb66efda695b7dd68',
          icon: 'invoice'
        },
        {
          name: 'Fluxo PEDIDO > MIGO > MIRO', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e801a8dc9dc429e3c78b5',
          icon: 'workflow'
        },
        {
          name: 'Fluxo MIRO > MIGO > PEDIDO', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e806aa2b8d68711a6a5d1',
          icon: 'workflow'
        },
        {
          name: 'Reservas', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e807aa25bddc7222fb5fb',
          icon: 'reservation'
        },
        {
          name: 'Exibir Lista de Reservas', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e802b9e1fe6ff7f6849e3',
          icon: 'search-magnifier'
        }
      ]
    },
    {
      category: 'LOF – Opções de Fornecimento',
      services: [
        {
          name: 'Cadastrar LOF (Lista de Opções…)', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e8067bda3e6e8b1a41775',
          icon: 'settings'
        },
        {
          name: 'Ativar LOF (Nível Usuário)', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e80d7a720d710ae8e2bd2',
          icon: 'activate'
        },
        {
          name: 'Obrigatoriedade da LOF (Global)', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e80ea8e57fd81e7f41ca4',
          icon: 'mandatory'
        }
      ]
    },
    {
      category: 'Mestre de Serviços',
      services: [
        {
          name: 'Criar Número de Serviço', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e805da69bd50ec9463e30',
          icon: 'service'
        },
        {
          name: 'Cadastrar Aquisição de Serviço', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e80099bd8f7331fb34cfb',
          icon: 'task'
        },
        {
          name: 'Registro de Serviço', description: '',
          url: 'https://ismael-jefte.notion.site/ebd/24598e9e851e80a3a7c9f5ad9817aca7',
          icon: 'service-journey'
        }
      ]
    }
  ];

  const pdfModal = document.getElementById('pdfModal');
  const pdfWindow = document.getElementById('pdfWindow');
  const openBtn = document.getElementById('openPdf');
  const closeBtn = document.getElementById('closePdf');
  const maximizeBtn = document.getElementById('maximize');
  const minimizeBtn = document.getElementById('minimize');
  let activeCategory = 'Todos';
  const container = document.getElementById("services-grid");
  const searchInput = document.getElementById("search");
  const categoryMenu = document.getElementById("categoryMenu");
  const mobileMenu = document.getElementById("mobileCategoryMenu");
  const senhaCodificada = "c2FwYWdlMjAyNQ==";
  const overlay = document.getElementById("loginOverlay");
  const senhaInput = document.getElementById("senhaInput");
  const btnEntrar = document.getElementById("btnEntrar");
  const erro = document.getElementById("erroSenha");

  function desbloquearSite() {
    overlay.remove();
  }

  btnEntrar.onclick = () => {
    const senhaDigitada = senhaInput.value;
    const senhaCorreta = atob(senhaCodificada);
    if (senhaDigitada === senhaCorreta) {
      desbloquearSite();
    } else {
      erro.classList.remove("hidden");
    }
  };

  senhaInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") btnEntrar.click();
  });

  let acessoLiberado = false;

  function inicializarSite() {
    if (!acessoLiberado) return;

    renderCards(sapServiceGroups);
    renderCategoryMenu();
    renderMobileCategoryMenu();
  }

  function desbloquearSite() {
    acessoLiberado = true;
    document.getElementById("loginOverlay")?.remove();
    inicializarSite();
  }

  const observer = new MutationObserver(() => {
    const modalExiste = document.getElementById("loginOverlay");
    if (!modalExiste && !acessoLiberado) {
      document.body.innerHTML = `<div class="min-h-screen flex items-center justify-center bg-black text-white text-xl font-bold">⛔ Acesso não autorizado.</div>`;
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  document.addEventListener("DOMContentLoaded", () => {
    if (!acessoLiberado) {
      console.warn("🔒 Conteúdo bloqueado - login não autorizado");
      return;
    }
    inicializarSite();
  });
  
  const toggleSearchBtn = document.getElementById("toggleSearch");
  const searchOptions = document.getElementById("searchOptions");

  if (toggleSearchBtn) {
    toggleSearchBtn.addEventListener("click", () => {
      searchOptions.classList.toggle("active");
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        searchOptions.classList.remove("active");
        searchOptions.classList.remove("hidden");
      } else {
        searchOptions.classList.add("hidden");
      }
    });
  }

  openBtn.onclick = () => {
    pdfModal.classList.remove('hidden');
  };
  closeBtn.onclick = () => pdfModal.classList.add('hidden');
  maximizeBtn.onclick = () => {
    pdfWindow.classList.replace('w-[600px]', 'w-[90%]');
    pdfWindow.classList.replace('h-[400px]', 'h-[90%]');
  };
  minimizeBtn.onclick = () => {
    pdfWindow.classList.replace('w-[90%]', 'w-[600px]');
    pdfWindow.classList.replace('h-[90%]', 'h-[400px]');
  };

  document.getElementById("toggle-dark").addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");

    const icon = document.getElementById("dark-icon");
    const isDark = document.documentElement.classList.contains("dark");

    icon.textContent = isDark ? "🌕" : "🌙";
  });


  document.getElementById("openMenu").addEventListener("click", () => {
    document.getElementById("mobileMenu").classList.remove("-translate-x-full");
  });

  document.getElementById("closeMenu").addEventListener("click", () => {
    document.getElementById("mobileMenu").classList.add("-translate-x-full");
  });

  document.getElementById("resetHome").addEventListener("click", e => {
    e.preventDefault();
    document.getElementById("search").value = '';
    window.inicializarSite();
  });

  
  function isDesktop() {
    return window.innerWidth >= 768;
  }

  function handleSidebarToggle() {
    const sidebar = document.getElementById("desktopSidebar");
    if (isDesktop()) {
      sidebar.classList.toggle("sidebar-hidden");
    }
  }

  document.getElementById("toggleSidebar").addEventListener("click", handleSidebarToggle);

  window.addEventListener("resize", () => {
    const sidebar = document.getElementById("desktopSidebar");
    if (isDesktop()) {
      sidebar.classList.remove("sidebar-hidden");
    } else {
      sidebar.classList.add("sidebar-hidden");
    }
  });

  function renderCategoryMenu() {
    const cats = ['Todos', ...sapServiceGroups.map(g => g.category)];
    categoryMenu.innerHTML = '';
    cats.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = `
        flex items-center gap-2 px-3 py-2 text-left rounded-lg text-sm transition
        ${cat === activeCategory
          ? 'bg-yellow-100 dark:bg-yellow-700 text-yellow-900 dark:text-white font-semibold'
          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}
      `;
      btn.innerHTML = `
        <ui5-icon name="${categoryIconMap[cat]}" class="w-5 h-5"></ui5-icon>
        <span>${cat}</span>
      `;
      btn.onclick = () => {
        activeCategory = cat;
        renderCategoryMenu();
        renderMobileCategoryMenu();
        renderCards();
        if (window.innerWidth < 768) document.getElementById("mobileMenu").classList.add("-translate-x-full");
      };
      categoryMenu.appendChild(btn);
    });
  }

  function renderMobileCategoryMenu() {
    mobileMenu.innerHTML = '';
    ['Todos', ...sapServiceGroups.map(g => g.category)].forEach(cat => {
      const btn = document.createElement('button');
      btn.className = `
        flex items-center gap-2 w-full px-3 py-2 text-left rounded-lg text-sm transition
        ${cat === activeCategory
          ? 'bg-yellow-100 dark:bg-yellow-700 text-yellow-900 dark:text-white font-semibold'
          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}
      `;
      btn.innerHTML = `<span>${cat}</span>`;
      btn.onclick = () => {
        activeCategory = cat;
        renderCategoryMenu();
        renderMobileCategoryMenu();
        renderCards();
        document.getElementById("mobileMenu").classList.add("-translate-x-full");
      };
      mobileMenu.appendChild(btn);
    });
  }

  function renderCards(groups = sapServiceGroups) {
    container.innerHTML = '';
    const groupsToShow = activeCategory === 'Todos'
      ? groups
      : groups.filter(g => g.category === activeCategory);

    groupsToShow.forEach(group => {
      const section = document.createElement('section');
      section.className = 'mb-10';
      section.innerHTML = `
        <h3 class="text-xl font-bold mb-4 text-yellow-600 dark:text-yellow-400
                   border-b pb-1 border-yellow-300 dark:border-yellow-700">
          ${group.category}
        </h3>
        <div class="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-6">
          ${group.services.map(s => `
            <a href="${s.url}" target="_blank" aria-label="${s.name}"
               class="bg-white dark:bg-gray-800 p-4 border rounded-xl shadow
                      hover:shadow-lg hover:-translate-y-1 transition-all duration-200
                      flex flex-col items-center text-center focus:outline-none focus:ring-2 focus:ring-yellow-500">
              <ui5-icon name="${s.icon}" class="h-12 w-12 mb-3"></ui5-icon>
              <div class="font-semibold text-sm text-gray-800 dark:text-white">${s.name}</div>
              <div class="text-xs text-gray-500 dark:text-gray-300">${s.description}</div>
            </a>
          `).join('')}
        </div>
      `;
      container.appendChild(section);
    });
  }

  function applySearch(term) {
    const filtered = sapServiceGroups
      .map(g => ({
        category: g.category,
        services: g.services.filter(s =>
          s.name.toLowerCase().includes(term) ||
          s.description.toLowerCase().includes(term)
        )
      }))
      .filter(g => g.services.length > 0);

    renderCards(filtered);
  }

  searchInput.addEventListener("input", e => {
    const term = e.target.value.trim().toLowerCase();

    activeCategory = 'Todos';
    renderCategoryMenu();
    renderMobileCategoryMenu();

    if (term === '') {
      renderCards();
    } else {
      applySearch(term);
    }
  });

  document.getElementById("resetHome").addEventListener("click", e => {
    e.preventDefault();
    searchInput.value = '';
    renderCategoryMenu();
    renderMobileCategoryMenu();
    renderCards();
  });

  renderCategoryMenu();
  renderMobileCategoryMenu();
  renderCards();

  window.inicializarSite = () => {
    activeCategory = 'Todos';
    renderCategoryMenu();
    renderMobileCategoryMenu();
    renderCards();
  };

});
