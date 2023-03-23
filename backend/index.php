<?php
require_once ('jpgraph/src/jpgraph.php');
require_once ('jpgraph/src/jpgraph_bar.php');


$labels = [];
$values = [];

foreach($_POST as $key => $val) {
    echo ($key."=".$val."<br/>");
    array_push($values, $val);
}

// Create the graph. Graph (w, h)
$graph = new Graph(350,220,'auto');
$graph->SetScale("textlin");

//$theme_class="DefaultTheme";
//$graph->SetTheme(new $theme_class());

// set major and minor tick positions manually
$graph->yaxis->SetTickPositions(array(0,30,60,90,120,150), array(15,45,75,105,135));
$graph->SetBox(false);

//$graph->ygrid->SetColor('gray');
$graph->ygrid->SetFill(false);
$graph->xaxis->SetTickLabels(array('A','B','C','D'));
$graph->yaxis->HideLine(false);
$graph->yaxis->HideTicks(false,false);

// Create the bar plots
$b1plot = new BarPlot($values);

// ...and add it to the graPH
$graph->Add($b1plot);


$b1plot->SetColor("white");
$b1plot->SetFillGradient("#4B0082","white",GRAD_LEFT_REFLECTION);
$b1plot->SetWidth(45);

// Display the graph
$graph->Stroke();

    
?>
