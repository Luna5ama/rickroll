const msg = document.getElementById("msg");

switch(Math.floor(Math.random() * 26)) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
        msg.innerHTML = "Rickrolled!";
        window.location.href = "https://youtu.be/QDia3e12czc"; 
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
    case 15:
    case 16:
    case 17:
    case 18:
        msg.innerHTML = "Got Stick Bugged LOL!"
        window.location.href = "https://youtu.be/rsDTJpsjxgs";
        break;
    case 19:
    case 20:
        msg.innerHTML = "Got Whistle‘d!"
        window.location.href = "https://youtu.be/BbeeuzU5Qc8";
        break;
    default:
        msg.innerHTML = "IndiHomed!";
        window.location.href = "https://youtu.be/_IneeB-UDFA?t=60"; 
        break;
}

