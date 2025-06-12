const imagens = [
  { src: "imagens-img7.jpg", frase: "Feliz dia dos namorados" },
  { src: "imagens-img6.jpg", frase: "Primeira foto" },
  { src: "imagens-img8.jpg", frase: "Primeira vez na sua casa" },
  { src: "imagens-img9.jpg", frase: "Isso aqui você lembra né..." },
  { src: "imagens-img2.jpg", frase: "O nosso amor é igual música clichê, cheio de história, carinho e melodias" },
  { src: "imagens-img3.jpg", frase: "Em 1 ano eu não saberia descrever o que sinto por você..." },
  { src: "imagens-img4.jpg", frase: "Em 12 meses não saberia explicar a razão de não conseguir viver sem ti..." },
  { src: "imagens-img5.jpg", frase: "365 dias é pouco para te amar. Eu quero você para vida toda." },
  { src: "imagens-img1.jpg", frase: "Eu te amo meu amor" }
];

let i = -1; 

const video = document.getElementById("slide-video");
const img = document.getElementById("slide-img");
const caption = document.getElementById("caption");

document.body.addEventListener("click", () => {
  i++;

  if (i === 0) {
    video.currentTime = 0;
    video.style.display = "block";
    img.style.display = "none";
    caption.textContent = "07/07/2024 ❤️";

    video.load();
    video.play().catch((e) => {
      console.error("Erro ao tocar o vídeo:", e);
    });

  } else if (i <= imagens.length) {
    const index = i - 1;

    video.pause();
    video.style.display = "none";
    img.style.display = "block";
    img.src = imagens[index].src;
    caption.textContent = imagens[index].frase;

  } else {
    i = -1;
    caption.textContent = "Clique";
    img.style.display = "none";
    video.currentTime = 0;
    video.style.display = "block";
  }
});

