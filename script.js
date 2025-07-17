function showDone(button) {
    button.innerText = "✓ Done";
    button.disabled = true;
    button.style.backgroundColor = "#003300";
    console.log(`Prank activated: ${button.innerText}`);
}

window.onload = function () {
    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, 5000); // 5 seconds of fake hacking glory
}
