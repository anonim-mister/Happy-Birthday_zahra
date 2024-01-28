document.addEventListener('click', function() {
    var audio = document.getElementById('myAudio');
    audio.play();
    // Hapus event listener agar tidak memulai pemutaran setiap kali ada klik
    document.removeEventListener('click', arguments.callee);
});