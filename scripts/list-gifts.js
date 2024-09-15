// Função principal que carrega o JSON e inicia a renderização
document.addEventListener("DOMContentLoaded", function () {
  fetch("data/gifts-down.json")
    .then((response) => response.json())
    .then((gifts) => {
      const giftList = document.getElementById("gift-list");
      giftList.classList.add("gift-list");

      gifts.gifts.forEach((gift) => {
        console.log(gift.name);
        const giftItem = document.createElement("div");
        giftItem.classList.add("gift-item");

        const img = document.createElement("img");
        img.src = gift.image;
        img.alt = gift.name;

        const title = document.createElement("p");
        title.textContent = gift.name;

        const giftContent = document.createElement("div");
        giftContent.classList.add("gift-content");

        const whatsappLink = document.createElement("a");
        whatsappLink.href = `https://wa.me/5584987446757?text=Olá%2C%20quero%20presentear%20com%20presente%20${encodeURIComponent(
          gift.name
        )} com valor de ${encodeURIComponent(gift.price)}!`;
        whatsappLink.target = "_blank";

        const price = document.createElement("span");
        price.classList.add("gift-value");
        price.textContent = `R$ ${gift.price.toFixed(2)}`;

        const cicle = document.createElement("span");
        cicle.classList.add("whatsapp-btn");

        const giftIcon = document.createElement("img");
        giftIcon.src = "images/gift-icon.svg";
        giftIcon.alt = "icone de presente";

        whatsappLink.appendChild(cicle);

        cicle.appendChild(giftIcon);

        giftContent.appendChild(whatsappLink);
        giftContent.appendChild(price);

        giftItem.appendChild(title);
        giftItem.appendChild(img);
        giftItem.appendChild(giftContent);

        giftList.appendChild(giftItem);
      });
    });
});
