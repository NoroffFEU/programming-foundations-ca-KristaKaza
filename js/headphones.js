const headphones= {
    brand: "JBL",
    model: "JBL LIVE 660NC",
    weight: 265,
    price: 2300,
    bluetooth: false,
    microphone: true,
    color: ["Black", "White", "Red", "Blue"],
    ignition: function() {
      headphones.on = !headphones.on
    }
  }
  console.log (headphones);