$(document).ready(function () {
    console.log('hello world!');

    d3.xml("graphics/exemplumLogo.svg", function (xml) {
        var htmlSVG = document.getElementById('logoSVG');
        htmlSVG.appendChild(xml.documentElement.getElementById('all'));

        var plumTriangles = d3.select('#plumSkin');

        var singleTriangles = plumTriangles.selectAll('polygon');

        singleTriangles.on('mouseover', triangleHoverAction);
        singleTriangles.on('touchstart', triangleTapAction);

        singleTriangles.on('click', triangleClickAction);

        var greenFillNumber = 1;

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

        function triangleHoverAction() {
            var originalFill = d3.select(this).attr('fill');

            greenFill;

            d3.select(this)
                .style('fill', greenFill)
                .transition().duration(100)
                .transition().duration(500)
                .style('fill', originalFill);

            d3.select(this).style('cursor', 'pointer');
        };

        function triangleTapAction() {
            singleTriangles.each(function () {
                var randomDelay = Math.random() * 1000;

                var originalFill = d3.select(this).attr('fill');

                var singleTriangle = d3.select(this);

                singleTriangle.transition()
                    .delay(randomDelay)
                    .style('fill', greenFill)
                    .transition().duration(100)
                    .transition().duration(500)
                    .style('fill', originalFill);
            });
        };

        function triangleClickAction() {
            //fill the triangle you click on first
            d3.select(this).transition().style('fill', greenFill)
            //fill all triangles green permanently
            singleTriangles.each(function () {
                var randomDelay = Math.random() * 500;

                var singleTriangle = d3.select(this);

                singleTriangle.transition()
                    .delay(randomDelay)
                    //.style('fill', '#7fc88f');
                    .style('fill', greenFill);
            });
            //disable mouseover events during animation
            singleTriangles.on('mouseover', null);
            //hide logo and show content
            $('#logo').stop().delay(1000).fadeOut(200);
            $('#content').delay(1200).fadeIn(300);
        };
    });


});
