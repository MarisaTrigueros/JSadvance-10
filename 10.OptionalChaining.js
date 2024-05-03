const order = {
  customer: {
    name: "Señorita T.",
    address: {
      street: "Calle de la señorita",
      city: null,
    }
  }
};

if (!order?.customer?.address?.city) {
  console.log('City is required');
}
