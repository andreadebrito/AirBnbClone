const API_URL = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";

fetch(API_URL).then(response => response.text())
  .then(result => { 
    const data = JSON.parse(result);
     data.map(element => {
      const { photo, name ,price, property_type } = element;
      const row = document.getElementById("row");
      div.className = "col-md-4";
      const div = document.createElement("div");
      const card = document.createElement('card');
      card.className = "card mb-4 box-shadow";
      const image = document.createElement('img')
      image.className = "card-img-top";
      image.src = photo;
      const cardBody = document.createElement('div')
      cardBody.className = "card-body";
      const cardText = document.createElement('div')
      cardText.className = "card-text";
      const propertyType = document.createElement('p');
      propertyType.className = "property-type";
      propertyType.innerHTML = property_type;
      const propertyName = document.createElement('p');
      propertyName.className = "property-name";
      propertyName.innerHTML = name;
      const propertyPrice = document.createElement('p');
      propertyPrice.className = "property-price";
      propertyPrice.innerHTML = `Total de R$ ${price.toLocaleString("pt-br",{minimumFractionDigits: 2})}`;
      row.appendChild(div);
      div.appendChild(card);
      card.appendChild(image);
      card.appendChild(cardBody);
      cardBody.appendChild(cardText);
      cardText.appendChild(propertyType);
      cardText.appendChild(propertyName);
      cardText.appendChild(propertyPrice);
      
    });
  });
