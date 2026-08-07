async function loadMessage() {

    const response = await fetch(
        "https://proud-wave-617f.williamwu0302.workers.dev/"
    );

    const data = await response.json();

    document.getElementById("message").textContent =
        data.message;
}


loadMessage();
