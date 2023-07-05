$(document).ready(function () {
    var audio1 = new Audio('sound/underwater.mp3');
    audio1.loop = true;
    audio1.play();

    var audio2 = new Audio('sound/abyss.mp3');
    audio2.loop = true;

    var isTransitioning = false;
    var isAudio2Playing = false;

    function startTransition() {
        isTransitioning = true;
        isAudio2Playing = true;

        var audio1FadeOutInterval;
        var audio2FadeInInterval;

        audio2.volume = 0;
        audio2.play();

        audio1FadeOutInterval = setInterval(function () {
            if (audio1.volume > 0.1) {
                audio1.volume -= 0.1;
            } else {
                clearInterval(audio1FadeOutInterval);
                audio1.pause();
                audio1.currentTime = 0;
                audio1.volume = 1;

                audio2FadeInInterval = setInterval(function () {
                    if (audio2.volume < 1) {
                        audio2.volume += 0.1;
                    } else {
                        clearInterval(audio2FadeInInterval);
                        isTransitioning = false;
                    }
                }, 200);
            }
        }, 200);
    }

    audio1.onloadedmetadata = function () {
        audio2.onloadedmetadata = function () {
            $(window).scroll(function () {
                var targetElement = $("#target-element");
                var targetPosition = targetElement.offset().top;
                var targetHeight = targetElement.height();
                var windowHeight = $(window).height();
                var scroll = $(window).scrollTop();
                var isVisible = targetPosition < scroll + windowHeight && targetPosition + targetHeight > scroll;

                if (isVisible && !isTransitioning && !isAudio2Playing) {
                    startTransition();
                }
            });
        };
    };
});


    const son = new Audio('../sound/sonar.mp3');

    son.loop=true;
    son.play();
