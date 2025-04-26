function predict(color) {
  const result = ["Red", "Green", "Violet"];
  const random = result[Math.floor(Math.random() * result.length)];
  if (random === color) {
    document.getElementById("result").innerText = "🎉 You Won! Color: " + random;
  } else {
    document.getElementById("result").innerText = "😢 You Lost! Color was: " + random;
  }
}
