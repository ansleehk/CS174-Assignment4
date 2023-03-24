<?php if (!empty($_POST)) {
    $dataPoints = array(
        array("y" => $_POST["label1-value"], "label" => $_POST["label1-name"]),
        array("y" => $_POST["label2-value"], "label" => $_POST["label2-name"]),
        array("y" => $_POST["label3-value"], "label" => $_POST["label3-name"]),
        array("y" => $_POST["label4-value"], "label" => $_POST["label4-name"])
    );
    echo json_encode($dataPoints, JSON_NUMERIC_CHECK);
}
?>
