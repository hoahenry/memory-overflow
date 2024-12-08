const message = "Nhớ nhớ nhớ em!";
let intervalID, btn = document.querySelector('button'), Audio = document.querySelector('.audioPlayer');

function genarateRandomWindows() {
    Audio.play();
    btn.style.display = 'none';
    intervalID = setInterval(function () {
        const windows = document.createElement('div');
        windows.className = 'window';

        windows.innerHTML = `
            <div class="window-header">
                <button class="close-btn" onClick="closeWindows(this)">x</button>
                <span>Tràn ngập bộ nhớ</span>
            </div>
            <p>${message}</p>
        `;
        const x = Math.floor(Math.random() * (window.innerWidth - 240)), y = Math.floor(Math.random() * (window.innerHeight - 160));
        windows.style.left = `${x}px`;
        windows.style.top = `${y}px`;

        document.body.appendChild(windows);
    }, 100);
}

function closeWindows(btn) {
    const windows = btn.closest('.window');
    windows.parentNode.removeChild(windows);
}

btn.addEventListener('click', genarateRandomWindows);
Audio.addEventListener('ended', Audio.play);
