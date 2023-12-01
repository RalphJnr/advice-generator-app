const adviceId = document.querySelector(".header");
const adviceText = document.querySelector(".text");
const diceButton = document.querySelector(".dice");

const getAdvice = async () => {
  try {
    const res = await axios.get("https://api.adviceslip.com/advice");

    adviceText.innerText = res.data.slip.advice;
    adviceId.innerText = `Advice #${res.data.slip.id}`;
  } catch (e) {
    adviceText.innerText =
      "No Jokes Available at the moment. Try again later :(";
  }
};

diceButton.addEventListener("click", getAdvice);
getAdvice();
