async function loadNotes(){

    const response = await fetch(
        "https://proud-wave-617f.williamwu0302.workers.dev/"
    );

    const notes = await response.json();


    document.getElementById("message").textContent =
        notes[0].content;
}


loadNotes();
