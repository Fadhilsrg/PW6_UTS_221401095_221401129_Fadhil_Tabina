// membuat script ketika dipencet navbar href menunjukan tempat dimana section berada tanpa dipotong container header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(scroll) {
    scroll.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - document.querySelector('.header').offsetHeight - 32,
        behavior: 'smooth'
      });
    }
  });
});

const selectAlat = document.getElementById("selectAlat");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");

// menambahkan event listener untuk mengubah tampilan kartu saat opsi berubah
selectAlat.addEventListener("change", function () {
  if (selectAlat.value === "option1") {
    option1.style.display = "block";
    option2.style.display = "none";
    option3.style.display = "none";
  } else if (selectAlat.value === "option2") {
    option1.style.display = "none";
    option2.style.display = "block";
    option3.style.display = "none";
  } else if (selectAlat.value === "option3") {
    option1.style.display = "none";
    option2.style.display = "none";
    option3.style.display = "block";
  }
});