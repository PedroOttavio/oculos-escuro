
document.addEventListener('DOMContentLoaded', function() {

    // dados dos alunos
    const centrosData = [
        { id: 1, nome: 'Centro de Tecnologia' },
        { id: 2, nome: 'Centro de Ciências Sociais' },
        { id: 3, nome: 'Centro de Ciências da Saúde' },
        { id: 4, nome: 'Centro de Artes e Letras' }
    ];

    const cursosData = [
        { id: 101, nome: 'Engenharia de Software', centroId: 1 },
        { id: 102, nome: 'Sistemas de Informação', centroId: 1 },
        { id: 103, nome: 'Ciência da Computação', centroId: 1 },
        { id: 201, nome: 'Administração', centroId: 2 },
        { id: 202, nome: 'Economia', centroId: 2 },
        { id: 203, nome: 'Direito', centroId: 2 },
        { id: 301, nome: 'Medicina', centroId: 3 },
        { id: 302, nome: 'Enfermagem', centroId: 3 },
        { id: 303, nome: 'Fisioterapia', centroId: 3 },
        { id: 401, nome: 'Design Gráfico', centroId: 4 },
        { id: 402, nome: 'Letras', centroId: 4 }
    ];

    const alunosData = [
        { id: 1, nome: 'Ana Paula Silva', matricula: '2021001', cursoId: 101, probabilidadeEvasao: 0.15 },
        { id: 2, nome: 'Bruno C. Oliveira', matricula: '2021002', cursoId: 102, probabilidadeEvasao: 0.40 },
        { id: 3, nome: 'Carla Cristina Santos', matricula: '2021003', cursoId: 101, probabilidadeEvasao: 0.05 },
        { id: 4, nome: 'Daniel Mendes', matricula: '2021004', cursoId: 201, probabilidadeEvasao: 0.22 },
        { id: 5, nome: 'Eduarda Farias', matricula: '2021005', cursoId: 301, probabilidadeEvasao: 0.55 },
        { id: 6, nome: 'Fernando S. Souza', matricula: '2021006', cursoId: 103, probabilidadeEvasao: 0.08 },
        { id: 7, nome: 'Giovana Pereira', matricula: '2021007', cursoId: 202, probabilidadeEvasao: 0.30 },
        { id: 8, nome: 'Hugo Martins', matricula: '2021008', cursoId: 302, probabilidadeEvasao: 0.65 },
        { id: 9, nome: 'Isabela Rocha', matricula: '2021009', cursoId: 401, probabilidadeEvasao: 0.12 },
        { id: 10, nome: 'Juliana Lima', matricula: '2021010', cursoId: 101, probabilidadeEvasao: 0.70 },
        { id: 11, nome: 'Kleber Nogueira', matricula: '2021011', cursoId: 102, probabilidadeEvasao: 0.18 },
        { id: 12, nome: 'Larissa G. Costa', matricula: '2021012', cursoId: 203, probabilidadeEvasao: 0.28 },
        { id: 13, nome: 'Marcelo Pires', matricula: '2021013', cursoId: 303, probabilidadeEvasao: 0.45 },
        { id: 14, nome: 'Natalia Xavier', matricula: '2021014', cursoId: 103, probabilidadeEvasao: 0.03 },
        { id: 15, nome: 'Otavio Barros', matricula: '2021015', cursoId: 402, probabilidadeEvasao: 0.38 },
        { id: 16, nome: 'Pedro Henrique Silva', matricula: '2021016', cursoId: 101, probabilidadeEvasao: 0.10 },
        { id: 17, nome: 'Queila Roberta Alves', matricula: '2021017', cursoId: 102, probabilidadeEvasao: 0.50 },
        { id: 18, nome: 'Ricardo José Mendes', matricula: '2021018', cursoId: 103, probabilidadeEvasao: 0.07 },
        { id: 19, nome: 'Sofia Beatriz Costa', matricula: '2021019', cursoId: 201, probabilidadeEvasao: 0.33 },
        { id: 20, nome: 'Thiago Almeida Santos', matricula: '2021020', cursoId: 301, probabilidadeEvasao: 0.60 },
        { id: 21, nome: 'Úrsula Ribeiro Pires', matricula: '2021021', cursoId: 101, probabilidadeEvasao: 0.04 },
        { id: 22, nome: 'Victor Hugo Lima', matricula: '2021022', cursoId: 202, probabilidadeEvasao: 0.25 },
        { id: 23, nome: 'Waleska Martins Ferreira', matricula: '2021023', cursoId: 302, probabilidadeEvasao: 0.72 },
        { id: 24, nome: 'Xavier Nogueira Rocha', matricula: '2021024', cursoId: 401, probabilidadeEvasao: 0.09 },
        { id: 25, nome: 'Yasmin Oliveira Guimarães', matricula: '2021025', cursoId: 101, probabilidadeEvasao: 0.75 },
        { id: 26, nome: 'Zélia Paula Andrade', matricula: '2021026', cursoId: 102, probabilidadeEvasao: 0.16 },
        { id: 27, nome: 'Antônio Carlos Pereira', matricula: '2021027', cursoId: 203, probabilidadeEvasao: 0.35 },
        { id: 28, nome: 'Beatriz Gonçalves Costa', matricula: '2021028', cursoId: 303, probabilidadeEvasao: 0.48 },
        { id: 29, nome: 'Carlos Eduardo Ramos', matricula: '2021029', cursoId: 103, probabilidadeEvasao: 0.02 },
        { id: 30, nome: 'Diana Souza Lins', matricula: '2021030', cursoId: 402, probabilidadeEvasao: 0.42 },
        { id: 31, nome: 'Elias P. Rodrigues', matricula: '2021031', cursoId: 101, probabilidadeEvasao: 0.11 },
        { id: 32, nome: 'Fabiana Xavier Cruz', matricula: '2021032', cursoId: 102, probabilidadeEvasao: 0.52 },
        { id: 33, nome: 'Gustavo Torres Rocha', matricula: '2021033', cursoId: 103, probabilidadeEvasao: 0.06 },
        { id: 34, nome: 'Helena Vieira Santos', matricula: '2021034', cursoId: 201, probabilidadeEvasao: 0.28 },
        { id: 35, nome: 'Igor S. Pires', matricula: '2021035', cursoId: 301, probabilidadeEvasao: 0.68 },
        { id: 36, nome: 'Joana Martins Castro', matricula: '2021036', cursoId: 101, probabilidadeEvasao: 0.03 },
        { id: 37, nome: 'Leonardo Gomes Braga', matricula: '2021037', cursoId: 202, probabilidadeEvasao: 0.31 },
        { id: 38, nome: 'Mariana Duarte Mendes', matricula: '2021038', cursoId: 302, probabilidadeEvasao: 0.58 },
        { id: 39, nome: 'Nuno Fernandes Lopes', matricula: '2021039', cursoId: 401, probabilidadeEvasao: 0.14 },
        { id: 40, nome: 'Olívia Correia Pinto', matricula: '2021040', cursoId: 101, probabilidadeEvasao: 0.65 },
        { id: 41, nome: 'Paulo Roberto Dias', matricula: '2021041', cursoId: 102, probabilidadeEvasao: 0.20 },
        { id: 42, nome: 'Quitéria Lima Azevedo', matricula: '2021042', cursoId: 203, probabilidadeEvasao: 0.26 },
        { id: 43, nome: 'Rafael Barreto Nunes', matricula: '2021043', cursoId: 303, probabilidadeEvasao: 0.40 },
        { id: 44, nome: 'Sandra Mello Campos', matricula: '2021044', cursoId: 103, probabilidadeEvasao: 0.05 },
        { id: 45, nome: 'Tiago Rocha Viana', matricula: '2021045', cursoId: 402, probabilidadeEvasao: 0.30 },
        { id: 46, nome: 'Valéria Soares Brito', matricula: '2021046', cursoId: 101, probabilidadeEvasao: 0.09 },
        { id: 47, nome: 'Wagner Costa Freire', matricula: '2021047', cursoId: 102, probabilidadeEvasao: 0.44 },
        { id: 48, nome: 'Xena P. Nogueira', matricula: '2021048', cursoId: 201, probabilidadeEvasao: 0.19 },
        { id: 49, nome: 'Yuri G. Almeida', matricula: '2021049', cursoId: 301, probabilidadeEvasao: 0.53 },
        { id: 50, nome: 'Zeca Lemos Silveira', matricula: '2021050', cursoId: 103, probabilidadeEvasao: 0.10 }
    ];

    // --- Elementos do DOM ---
    const searchCentroInput = document.getElementById('searchCentro');
    const centroOptionsDiv = document.getElementById('centroOptions');
    const searchCursoInput = document.getElementById('searchCurso');
    const cursoOptionsDiv = document.getElementById('cursoOptions');
    const tabelaAlunosBody = document.getElementById('tabelaAlunosBody');
    const btnOrdenar = document.getElementById('btnOrdenar');
    const alunosAtivosChartCtx = document.getElementById('alunosAtivosChart');
    const alunosAtivosChartContainer = alunosAtivosChartCtx.parentNode; 
    const chanceEvasaoChartCtx = document.getElementById('chanceEvasaoChart');
    const chanceEvasaoChartContainer = chanceEvasaoChartCtx.parentNode; 


    // --- Variáveis de Estado ---
    let selectedCentroId = null;
    let selectedCursoId = null;
    let currentSortedColumn = null; // 'nome', 'matricula', 'curso', 'probabilidadeEvasao'
    let sortDirection = 'asc'; 

    // --- Funções de Renderização da Sidebar ---

    function renderCentros(filter = '') {
        centroOptionsDiv.innerHTML = ''; 
        const filteredCentros = centrosData.filter(centro =>
            centro.nome.toLowerCase().includes(filter.toLowerCase())
        );

        if (filteredCentros.length === 0 && filter.length > 0) {
             centroOptionsDiv.innerHTML = '<a href="#" class="list-group-item list-group-item-action disabled text-muted">Nenhum centro encontrado.</a>';
             return;
        }

        filteredCentros.forEach(centro => {
            const a = document.createElement('a');
            a.href = '#';
            a.classList.add('list-group-item', 'list-group-item-action');
            if (centro.id === selectedCentroId) {
                a.classList.add('active');
            }
            a.textContent = centro.nome;
            a.dataset.id = centro.id;
            a.addEventListener('click', (e) => {
                e.preventDefault();
                if (selectedCentroId === centro.id) {
                    selectedCentroId = null;
                    searchCentroInput.value = ''; 
                } else {
                    selectedCentroId = centro.id;
                    searchCentroInput.value = centro.nome; 
                }
                renderCentros(); // Re-renderiza para atualizar o estado 'active'
                renderCursos(); // Atualiza cursos baseados no centro
                filterAndRenderAlunos(); // Atualiza a tabela de alunos
            });
            centroOptionsDiv.appendChild(a);
        });
        if (selectedCentroId && !searchCentroInput.value) {
            const selectedCentro = centrosData.find(c => c.id === selectedCentroId);
            if (selectedCentro) searchCentroInput.value = selectedCentro.nome;
        }
    }

    function renderCursos(filter = '') {
        cursoOptionsDiv.innerHTML = ''; // Limpa as opções existentes
        let cursosFiltradosPorCentro = selectedCentroId
            ? cursosData.filter(curso => curso.centroId === selectedCentroId)
            : cursosData; // Se nenhum centro selecionado, mostra todos

        const filteredCursos = cursosFiltradosPorCentro.filter(curso =>
            curso.nome.toLowerCase().includes(filter.toLowerCase())
        );

        if (filteredCursos.length === 0 && filter.length > 0) {
             cursoOptionsDiv.innerHTML = '<a href="#" class="list-group-item list-group-item-action disabled text-muted">Nenhum curso encontrado.</a>';
             return;
        }
        if (filteredCursos.length === 0 && !selectedCentroId) {
             cursoOptionsDiv.innerHTML = '<a href="#" class="list-group-item list-group-item-action disabled text-muted">Selecione um centro para ver os cursos.</a>';
             return;
        }
        if (filteredCursos.length === 0 && selectedCentroId) {
            const centroNome = centrosData.find(c => c.id === selectedCentroId)?.nome || 'este centro';
            cursoOptionsDiv.innerHTML = `<a href="#" class="list-group-item list-group-item-action disabled text-muted">Nenhum curso encontrado para ${centroNome}.</a>`;
            return;
        }


        filteredCursos.forEach(curso => {
            const a = document.createElement('a');
            a.href = '#';
            a.classList.add('list-group-item', 'list-group-item-action');
            if (curso.id === selectedCursoId) {
                a.classList.add('active');
            }
            a.textContent = curso.nome;
            a.dataset.id = curso.id;
            a.addEventListener('click', (e) => {
                e.preventDefault();
                if (selectedCursoId === curso.id) {
                    selectedCursoId = null; // Desseleciona
                    searchCursoInput.value = '';
                } else {
                    selectedCursoId = curso.id;
                    searchCursoInput.value = curso.nome;
                }
                renderCursos();
                filterAndRenderAlunos(); 
            });
            cursoOptionsDiv.appendChild(a);
        });
        // Se houver um curso selecionado, mas ele não está no input de busca
        if (selectedCursoId && !searchCursoInput.value) {
            const selectedCurso = cursosData.find(c => c.id === selectedCursoId);
            if (selectedCurso) searchCursoInput.value = selectedCurso.nome;
        }
    }
    // --- Funções de Filtro e Renderização da Tabela de Alunos ---
    function getCursoNome(cursoId) {
        const curso = cursosData.find(c => c.id === cursoId);
        return curso ? curso.nome : 'N/A';
    }

    function getProbabilidadeClass(prob) {
        if (prob >= 0.50) return 'prob-evasao-alta';
        if (prob >= 0.20) return 'prob-evasao-media';
        return 'prob-evasao-baixa';
    }

    function filterAndRenderAlunos() {
        let filteredAlunos = [...alunosData]; // Copia para não modificar o original

        if (selectedCentroId) {
            const cursosNoCentro = cursosData.filter(curso => curso.centroId === selectedCentroId).map(c => c.id);
            filteredAlunos = filteredAlunos.filter(aluno => cursosNoCentro.includes(aluno.cursoId));
        }

        if (selectedCursoId) {
            filteredAlunos = filteredAlunos.filter(aluno => aluno.cursoId === selectedCursoId);
        }

        renderAlunosTable(filteredAlunos);
        updateCharts(filteredAlunos); // Atualiza os gráficos com os dados filtrados
    }

    function renderAlunosTable(alunosToRender) {
        tabelaAlunosBody.innerHTML = ''; // Limpa a tabela

        if (alunosToRender.length === 0) {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td colspan="4" class="text-center text-muted py-4">Nenhum aluno encontrado com os filtros selecionados.</td>`;
            tabelaAlunosBody.appendChild(tr);
            return;
        }

        alunosToRender.forEach(aluno => {
            const tr = document.createElement('tr');
            const probEvasaoFormatada = (aluno.probabilidadeEvasao * 100).toFixed(0) + '%';
            const probClass = getProbabilidadeClass(aluno.probabilidadeEvasao);

            tr.innerHTML = `
                <td><a href="../html/vizu-especifico.html" class="aluno-link">${aluno.nome}</a></td>
                <td>${aluno.matricula}</td>
                <td>${getCursoNome(aluno.cursoId)}</td>
                <td class="${probClass}">${probEvasaoFormatada}</td>
            `;
            tabelaAlunosBody.appendChild(tr);
        });
    }

    function sortAlunos(column) {
        // Se a coluna for a mesma, inverte a direção
        if (currentSortedColumn === column) {
            sortDirection = (sortDirection === 'asc') ? 'desc' : 'asc';
        } else {
            currentSortedColumn = column;
            sortDirection = 'asc'; // Volta para ascendente ao mudar de coluna
        }

        const sortedAlunos = [...alunosData]; // Começa com os dados originais para ordenar

        sortedAlunos.sort((a, b) => {
            let valA, valB;

            switch (column) {
                case 'nome':
                    valA = a.nome.toLowerCase();
                    valB = b.nome.toLowerCase();
                    break;
                case 'matricula':
                    valA = parseInt(a.matricula);
                    valB = parseInt(b.matricula);
                    break;
                case 'curso':
                    valA = getCursoNome(a.cursoId).toLowerCase();
                    valB = getCursoNome(b.cursoId).toLowerCase();
                    break;
                case 'probabilidadeEvasao':
                    valA = a.probabilidadeEvasao;
                    valB = b.probabilidadeEvasao;
                    break;
                default:
                    return 0;
            }

            if (valA < valB) {
                return sortDirection === 'asc' ? -1 : 1;
            }
            if (valA > valB) {
                return sortDirection === 'asc' ? 1 : -1;
            }
            return 0;
        });

        filterAndRenderAlunosFromSorted(sortedAlunos);
    }

    function filterAndRenderAlunosFromSorted(baseAlunos) {
        let displayAlunos = [...baseAlunos]; 

        if (selectedCentroId) {
            const cursosNoCentro = cursosData.filter(curso => curso.centroId === selectedCentroId).map(c => c.id);
            displayAlunos = displayAlunos.filter(aluno => cursosNoCentro.includes(aluno.cursoId));
        }

        if (selectedCursoId) {
            displayAlunos = displayAlunos.filter(aluno => aluno.cursoId === selectedCursoId);
        }
        renderAlunosTable(displayAlunos);
        updateCharts(displayAlunos);
    }

    let alunosAtivosChartInstance;
    let chanceEvasaoChartInstance;

    function createOrUpdateAlunosAtivosChart(currentAlunosData) {
        const alunosPorAno = {
            '2023': Math.floor(currentAlunosData.length * 0.8),
            '2024': Math.floor(currentAlunosData.length * 0.9),
            '2025': currentAlunosData.length
        };
        const alunosAtivosData = {
            labels: ['2023', '2024', '2025'],
            datasets: [{
                label: 'Número de Alunos Ativos',
                data: [alunosPorAno['2023'], alunosPorAno['2024'], alunosPorAno['2025']],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        };

        if (alunosAtivosChartInstance) {
            alunosAtivosChartInstance.data.datasets[0].data = alunosAtivosData.datasets[0].data;
            alunosAtivosChartInstance.update();
        } else {
            
            alunosAtivosChartInstance = new Chart(alunosAtivosChartCtx, {
                type: 'bar',
                data: alunosAtivosData,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Número de Alunos'
                            },
                            ticks: {
                                callback: function(value) {
                                    return Number.isInteger(value) ? value : null;
                                },
                                stepSize: 20 // Marcações de 0, 20, 40...
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });
        }
    }


    function createOrUpdateChanceEvasaoChart(currentAlunosData) {
        
        let altaEvasao = 0; // >= 50%
        let mediaEvasao = 0; // 20% to 49%
        let baixaEvasao = 0; // < 20%

        currentAlunosData.forEach(aluno => {
            if (aluno.probabilidadeEvasao >= 0.50) {
                altaEvasao++;
            } else if (aluno.probabilidadeEvasao >= 0.20) {
                mediaEvasao++;
            } else {
                baixaEvasao++;
            }
        });

        const chanceEvasaoData = {
            labels: ['Baixa Evasão (<20%)', 'Média Evasão (20-49%)', 'Alta Evasão (>=50%)'],
            datasets: [{
                data: [baixaEvasao, mediaEvasao, altaEvasao],
                backgroundColor: [
                    'rgba(40, 167, 69, 0.7)',
                    'rgba(255, 193, 7, 0.7)',
                    'rgba(220, 53, 69, 0.7)'
                ],
                borderColor: [
                    'rgba(40, 167, 69, 1)',
                    'rgba(255, 193, 7, 1)',
                    'rgba(220, 53, 69, 1)'
                ],
                borderWidth: 1
            }]
        };

        if (chanceEvasaoChartInstance) {
            chanceEvasaoChartInstance.data.datasets[0].data = chanceEvasaoData.datasets[0].data;
            chanceEvasaoChartInstance.update();
        } else {
            chanceEvasaoChartInstance = new Chart(chanceEvasaoChartCtx, {
                type: 'pie',
                data: chanceEvasaoData,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    let label = context.label || '';
                                    if (label) {
                                        label += ': ';
                                    }
                                    if (context.parsed !== null) {
                                        label += context.parsed + ' alunos';
                                    }
                                    return label;
                                }
                            }
                        }
                    }
                }
            });
        }
    }

    function updateCharts(currentAlunosData) {
        createOrUpdateAlunosAtivosChart(currentAlunosData);
        createOrUpdateChanceEvasaoChart(currentAlunosData);
    }

    searchCentroInput.addEventListener('input', (e) => {
        const filter = e.target.value;
        renderCentros(filter);
        
        if (filter === '' && selectedCentroId !== null) {
            selectedCentroId = null;
            selectedCursoId = null; 
            searchCursoInput.value = '';
            renderCursos();
            filterAndRenderAlunos();
        }
    });

    searchCursoInput.addEventListener('input', (e) => {
        const filter = e.target.value;
        renderCursos(filter);
        if (filter === '' && selectedCursoId !== null) {
            selectedCursoId = null;
            filterAndRenderAlunos();
        }
    });

    // Botão de Ordenar
    btnOrdenar.addEventListener('click', () => {
        const columns = ['nome', 'matricula', 'curso', 'probabilidadeEvasao'];
        let currentIndex = columns.indexOf(currentSortedColumn);
        let nextIndex = (currentIndex + 1) % columns.length;
        if (currentSortedColumn === null) nextIndex = 0; // Começa pelo nome
        sortAlunos(columns[nextIndex]);
    });

    renderCentros();
    renderCursos();
    filterAndRenderAlunos();

    const usuarioBotao = document.getElementById('usuarioBotao');
    const menuUsuario = document.querySelector('.menu-usuario');
    const usuarioMenuContainer = document.querySelector('.usuario-menu-container');

    if (usuarioBotao && menuUsuario && usuarioMenuContainer) {
        usuarioBotao.addEventListener('click', function(event) {
            event.stopPropagation();
            menuUsuario.classList.toggle('show');
            usuarioBotao.classList.toggle('ativo');
            usuarioMenuContainer.classList.toggle('ativo');
        });

        document.addEventListener('click', function(event) {
            if (!menuUsuario.contains(event.target) && !usuarioBotao.contains(event.target)) {
                menuUsuario.classList.remove('show');
                usuarioBotao.classList.remove('ativo');
                usuarioMenuContainer.classList.remove('ativo');
            }
        });
    }
});