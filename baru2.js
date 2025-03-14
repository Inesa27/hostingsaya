function uploadTugas() {
    const fileInput = document.getElementById("upload");
    const tugasList = document.getElementById("listTugas");

    if (fileInput.files.length === 0) {
        alert("Pilih file terlebih dahulu!");
        return;
    }

    const fileName = fileInput.files[0].name;
    const listItem = document.createElement("li");
    listItem.textContent = fileName;
    tugasList.appendChild(listItem);

    fileInput.value = "";
    alert("Tugas berhasil diunggah!");
}
