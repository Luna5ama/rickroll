const msg = document.getElementById("msg");

switch(Math.floor(Math.random() * 20)) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
        msg.innerHTML = "Rickrolled!";
        window.location.href = "https://youtu.be/mx86-rTclzA"; 
        break;
    case 5:
    case 6:
    case 7:
    case 8:
        msg.innerHTML = "Coconut malled!";
        window.location.href = "https://youtu.be/cGw-8FrRT1E"; 
        break;
    case 9:
    case 10:
    case 11:
    case 12:
        msg.innerHTML = "Trolled!"
        window.location.href = "https://youtu.be/gkTb9GP9lVI?t=4";
        break;
    case 13:
    case 14:
        msg.innerHTML = "Pull up!"
        window.location.href = "https://youtu.be/oLsVrshvOaI?t=10";
        break;
    default:
        msg.innerHTML = "IndiHomed!";
        window.location.href = "https://youtu.be/_IneeB-UDFA?t=60"; 
        break;
}
