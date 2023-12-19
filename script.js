const msg = document.getElementById("msg");

switch(Math.floor(Math.random() * 7)) {
    case 0:
    case 1:
    case 2:
        msg.innerHTML = "Rickrolled!";
        window.location.href = "https://youtu.be/mx86-rTclzA"; 
        break;
    case 3:
    case 4:
        msg.innerHTML = "Coconut malled!";
        window.location.href = "https://youtu.be/cGw-8FrRT1E"; 
        break;
    case 5:
        msg.innerHTML = "Trolled!"
        window.location.href = "https://youtu.be/gkTb9GP9lVI?t=4";
        break;
    default:
        msg.innerHTML = "IndiHomed!";
        window.location.href = "https://youtu.be/_IneeB-UDFA?t=60"; 
        break;
}
