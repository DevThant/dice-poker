const roll = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const animateDice = (color) => {
  const dices = document.querySelectorAll(`.Die-${color} img`);
  console.log(dices);
  dices.forEach((e) => {
    e.classList.add("Die-roll");
  });
  setTimeout(() => {
    dices.forEach((e) => {
      e.classList.remove("Die-roll");
    });
  }, 500);
};
export { roll, animateDice };
