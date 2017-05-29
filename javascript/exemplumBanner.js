$(document).ready(function () {
    console.log('hello world!');

    d3.xml("graphics/exemplumLogo.svg", function (xml) {
        var htmlSVG = document.getElementById('logoSVG');
        htmlSVG.appendChild(xml.documentElement.getElementById('all'));

        var plumTriangles = d3.select('#plumSkin');

        var singleTriangles = plumTriangles.selectAll('polygon');

        singleTriangles.on('mouseover', triangleHoverAction);

        singleTriangles.on('click', triangleClickAction);

        var greenFillNumber = 1;

        function triangleHoverAction() {

            var originalFill = d3.select(this).attr('fill');

            function greenFill() {
                //increment through integers 1 to 10
                if (greenFillNumber < 2) {
                    greenFillNumber++;
                } else {
                    greenFillNumber = 1;
                };
                console.log(greenFillNumber);
                
                //alternate between green fills
                if (greenFillNumber % 2 >= 1) {
                    return '#95ce95'
                } else {
                    return '#7fc88f'
                }
            };

            d3.select(this)
                .style('fill', greenFill)
                .transition().duration(100)
                .transition().duration(500)
                .style('fill', originalFill);

            d3.select(this).style('cursor', 'pointer');
        };

        ;
    });

    function triangleClickAction() {
        $('#logo').hide();
        $('#content').show();
    };
});
