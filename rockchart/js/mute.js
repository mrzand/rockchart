 var audio = document.getElementById('song');
        document.getElementById('muted').addEventListener('click', function (e)
        {
          e = e || window.event;
          audio.muted = !audio.muted;
          e.preventDefault();
        }, false);