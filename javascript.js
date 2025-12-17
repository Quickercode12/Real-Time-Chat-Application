function sendMessage(sender) {
  const input =
    sender === "sonia"
      ? document.getElementById("sonia-input")
      : document.getElementById("gautam-input");

  const text = input.value.trim();
  if (text === "") return;

  const chat = document.querySelector(".chat-messages");

  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = (sender === "sonia" ? "Sonia: " : "Gautam: ") + text;

  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
  input.value = "";
}
