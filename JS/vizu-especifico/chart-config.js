const ctx = document.getElementById('graficoEvolucao').getContext('2d');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2023/1', '2023/2', '2024/1', '2024/2', '2025/1'],
        datasets: [{
            data: [60, 20, 20, 10, 5],
            borderColor: '#000000',         // Linha preta
            backgroundColor: '#000000',     // Pontos pretos
            fill: false,                    // Sem preenchimento
            tension: 0.3,
            pointRadius: 5,
            pointHoverRadius: 6,
            pointBackgroundColor: '#000000',
            pointBorderColor: '#000000'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 2.5,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Probabilidade',
                    color: '#000',
                    font: {
                        size: 14,
                        family: 'Arial'
                    }
                },
                ticks: {
                    color: '#000'
                },
                grid: {
                    color: '#ddd'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Semestre',
                    color: '#000',
                    font: {
                        size: 14,
                        family: 'Arial'
                    }
                },
                ticks: {
                    color: '#000'
                },
                grid: {
                    color: '#ddd'
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: true,
                backgroundColor: '#000',
                titleFont: { size: 12 },
                bodyFont: { size: 12 }
            }
        }
    }
});
