<?php if(!empty($_POST)) { 
    $dataPoints = array(
	    array("y"=> $_POST["label1-value"], "label"=> $_POST["label1-name"]),
	    array("y"=> $_POST["label2-value"], "label"=> $_POST["label2-name"]),
	    array("y"=> $_POST["label3-value"], "label"=> $_POST["label3-name"]),
	    array("y"=> $_POST["label4-value"], "label"=> $_POST["label4-name"])    
);}
?>

<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="../frontend/main.css">
    <script src="./formHandler.js" type="module"></script>
    <script src="./exception.js" type="module"></script>
    <script src="./apiRequest.js" type="module"></script>

<script>
    window.onload = function charts() {
 
        var chart = new CanvasJS.Chart("survey-result-container", {
	        animationEnabled: true,
	        exportEnabled: true,
	        theme: "light1", 
	        title:{
		        text: "Survey Result"
	        },
	        axisY:{
		        includeZero: true
	        },
	        data: [{
		        type: "column", 
                yValueFormatString: "#,##0.## tonnes",
		        dataPoints: <?php echo json_encode($dataPoints, JSON_NUMERIC_CHECK); ?>
	        }]
        });
        chart.render();
    }
</script>
</head>

<body>
    <h1>Survey System</h1>
    <div id="survey-form-container">
        <h2>Survey Form</h2>
        <form name="survey-form" action="" id="survey-form" onsubmit="charts()" method="post">
            <label for="label1-name">Name for Label 1:</label>
            <input type="text" name="label1-name" id="label1-name" placeholder="Name" required><br>
            <label for="label1-value">Value for Label 1:</label>
            <input type="text" name="label1-value" id="label1-value" placeholder="Value" required><br>
            <label for="label2-name">Name for Label 2:</label>
            <input type="text" name="label2-name" id="label2-name" placeholder="Name" required><br>
            <label for="label2-value">Value for Label 2:</label>
            <input type="text" name="label2-value" id="label2-value" placeholder="Value" required><br>
            <label for="label3-name">Name for Label 3:</label>
            <input type="text" name="label3-name" id="label3-name" placeholder="Name" required><br>
            <label for="label3-value">Value for Label 3:</label>
            <input type="text" name="label3-value" id="label3-value" placeholder="Value" required><br>
            <label for="label4-name">Name for Label 4:</label>
            <input type="text" name="label4-name" id="label4-name" placeholder="Name" required><br>
            <label for="label4-value">Value for Label 4:</label>
            <input type="text" name="label4-value" id="label4-value" placeholder="Value" required><br>
            <input type="submit" value="Submit" onclick="(new FormHandler(event));">
        </form>
    </div>

    <div id="survey-result-container"></div>
    <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
</body>
</html>