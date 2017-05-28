$(document).ready(function () {
    console.log('hello world!');
    
    d3.xml("graphics/exemplumBanner.svg", function (xml) {
        var htmlSVG = document.getElementById('logoSVG');
        htmlSVG.appendChild(xml.documentElement.getElementById('all'));
        
        var plumTriangles = d3.select('#plumSkin');
        //plumTriangles.transition().duration(1000).style('opacity', '0.4')
        /*plumTriangles.each(function () {
            d3.select(this).transition().duration(1000).style('opacity', '0.4');
        });*/
        
        d3.select('#plumLetters').style('opacity', '0')
        
        var singleTriangles = plumTriangles.selectAll('polygon');
        
        singleTriangles.on('mouseover', triangleSelectedAction);
        
        function triangleSelectedAction() {
            console.log('click');
            d3.select(this).style('opacity', '0').transition().duration(100).transition().duration(500).style('opacity','1');
        }
    });
});
