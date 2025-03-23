function generateQRCode() {
    const qrCode = 'QR-' + Math.random().toString(36).substring(2, 10).toUpperCase();
    document.getElementById("qrcode").innerHTML = `Your QR Code: ${qrCode}`;
}
