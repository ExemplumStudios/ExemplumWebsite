$(document).ready(function () {
    console.log('hello world!');
    
    d3.xml("graphics/exemplumLogo.svg", function (xml) {
        var htmlSVG = document.getElementById('logoSVG');
        htmlSVG.appendChild(xml.documentElement.getElementById('all'));
        
        var plumTriangles = d3.select('#plumSkin');
        
        //d3.select('#plumLetters').style('opacity', '0')
        
        var singleTriangles = plumTriangles.selectAll('polygon');
        
        singleTriangles.on('mouseover', triangleHoverAction);
        
        function triangleHoverAction() {
            //console.log('click');
            d3.select(this).style('opacity', '0.7').transition().duration(100).transition().duration(500).style('opacity','1');
            
            d3.select(this).style('cursor', 'pointer');
        }
    });
});
