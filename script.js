const threads = [
  document.getElementById("thread1"),
  document.getElementById("thread2"),
  document.getElementById("thread3"),
  document.getElementById("thread4"),
];

function interpolatePath(progress, index) {
  const baseAmplitude = 30;
  const threadOffset = index * 10; 

  const amplitude = baseAmplitude + progress * 50; 
  const controlPointY = 50 + threadOffset + progress * 100; 
  const controlPointX = 50;

  return `M10,10 Q${controlPointX},${controlPointY} 90,10`;
}

function updatePaths() {
  const scrollPosition = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const progress = scrollPosition / maxScroll; 

  threads.forEach((thread, index) => {
    thread.setAttribute("d", interpolatePath(progress, index));
  });
}

window.addEventListener("scroll", updatePaths);

updatePaths();
