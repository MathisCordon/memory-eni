function changerImage() {
    const select = document.getElementById("memorySelect");
    const image = document.getElementById("memoryImage");
    const value = select.value;

    if (value === "") {
        image.style.display = "none";
        image.src = "";
        image.alt = "";
        return;
    }

    const cheminImage = "ressources1/" + value + ".png";

    image.src = cheminImage;
    image.alt = "Image de " + value;
    image.style.display = "block";
}