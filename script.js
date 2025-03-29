function generateMeme() {
    // Get user input text
    let topText = document.getElementById("top-text").value;
    let bottomText = document.getElementById("bottom-text").value;

    // Find the text elements inside the meme
    let memeTextTop = document.getElementById("meme-text-top");
    let memeTextBottom = document.getElementById("meme-text-bottom");

    // Update the text in the meme
    memeTextTop.innerText = topText;
    memeTextBottom.innerText = bottomText;
}
