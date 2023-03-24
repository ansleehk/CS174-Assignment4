
export function displayChart(dataPoints) {
    const RESULT_DISPLAY_CONTAINER_ID = "survey-result-container";
    const chart = new CanvasJS.Chart(RESULT_DISPLAY_CONTAINER_ID, {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light1",
        title: {
            text: "Survey Result"
        },
        axisY: {
            includeZero: true
        },
        data: [{
            type: "column",
            yValueFormatString: "#,##0.## tonnes",
            dataPoints: dataPoints
        }]
    });
    chart.render();
}
