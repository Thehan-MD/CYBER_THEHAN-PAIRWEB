function generatePairCode() {
    const code = 'PAIR-' + Math.random().toString(36).substring(2, 10).toUpperCase();
    document.getElementById("pairCode").innerText = `Your Pair Code: ${code}`;
}
