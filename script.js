async function loadNotes(){

    const response = await fetch(
        "YOUR_WORKER_URL"
    );

    const notes = await response.json();


    document.getElementById("message").textContent =
        notes[0].content;
}


loadNotes();
