const msg = document.getElementById("msg");

switch(Math.floor(Math.random() * 3)) {
	case 0:
		msg.innerHTML = "Rickrolled!";
		window.location.href = "https://youtu.be/a3Z7zEc7AXQ"; 
		break;
	case 1:
		msg.innerHTML = "Coconut malled!";
		window.location.href = "https://youtu.be/cGw-8FrRT1E"; 
		break;
	default:
		msg.innerHTML = "Trolled!"
		window.location.href = "https://youtu.be/gkTb9GP9lVI?t=4";
		break;
}
