<html>

<head>
    <link rel="stylesheet" type="text/css" href="main.css">
    <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
    <script src="formHandler.js" type="module"></script>
    <script src="exception.js" type="module"></script>
    <script src="apiRequest.js" type="module"></script>
    <script src="chart.js" type="module"></script>
</head>

<body>
    <h1>Survey System</h1>
    <div id="survey-form-container">
        <h2>Survey Form</h2>
        <form name="survey-form" id="survey-form">
            <label for="label1-name">Name for Label 1:</label>
            <input type="text" name="label1-name" id="label1-name" placeholder="Name"><br>
            <label for="label1-value">Value for Label 1:</label>
            <input type="text" name="label1-value" id="label1-value" placeholder="Value"><br>
            <label for="label2-name">Name for Label 2:</label>
            <input type="text" name="label2-name" id="label2-name" placeholder="Name"><br>
            <label for="label2-value">Value for Label 2:</label>
            <input type="text" name="label2-value" id="label2-value" placeholder="Value"><br>
            <label for="label3-name">Name for Label 3:</label>
            <input type="text" name="label3-name" id="label3-name" placeholder="Name"><br>
            <label for="label3-value">Value for Label 3:</label>
            <input type="text" name="label3-value" id="label3-value" placeholder="Value"><br>
            <label for="label4-name">Name for Label 4:</label>
            <input type="text" name="label4-name" id="label4-name" placeholder="Name"><br>
            <label for="label4-value">Value for Label 4:</label>
            <input type="text" name="label4-value" id="label4-value" placeholder="Value"><br>
            <input type="submit" value="Submit" onclick="(new FormHandler(event));">
        </form>
    </div>
    <div id="survey-result-container">
        <h2>Survey Result</h2>
        <div id="survey-result">

        </div>
    </div>
</body>

</html>