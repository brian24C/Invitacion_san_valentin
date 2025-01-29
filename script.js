document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    let isOpen = false;

    envelope.addEventListener('click', () => {
        if (!isOpen) {
            // Abrir sobre
            envelope.classList.add('opened');
            setTimeout(() => {
                letter.classList.add('visible');
            }, 400);
        } else {
            // Cerrar sobre
            letter.classList.remove('visible');
            setTimeout(() => {
                envelope.classList.remove('opened');
            }, 400);
        }
        isOpen = !isOpen;
    });
});

function createHeart() {
    const heartContainer = document.createElement('div');
    heartContainer.className = 'heart-container';
    
    const heart = document.createElement('div');
    heart.className = 'heart';
    
    const arrow = document.createElement('div');
    arrow.className = 'arrow';
    arrow.style.animation = 'arrowShoot 0.8s forwards ease-out';
    
    heartContainer.appendChild(heart);
    heartContainer.appendChild(arrow);
    document.body.appendChild(heartContainer);
    
    heartContainer.style.display = 'flex';
    
    // Remover el corazón y mostrar la invitación después de la animación
    setTimeout(() => {
        heartContainer.classList.add('fade-out');
        setTimeout(() => {
            heartContainer.style.display = 'none';
            document.getElementById('valentineInvitation').style.display = 'block';
        }, 1000);
    }, 3000);
}

document.getElementById('valentineButton').addEventListener('click', function() {
    createHeart();
});