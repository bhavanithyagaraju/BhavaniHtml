function onInput(input) {
    locations = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
    filteredLocations: [];
    console.log("onInput called :"+input.value)
    if (input.value) {
      filteredLocations = locations.filter(location =>
        location.toLowerCase().includes(input.value.toLowerCase())
      );
    } else {
      filteredLocations = [];
    }

    headers={
      "Access-Control-Allow-Origin":"*"
    }
    // fetch("https://maps.googleapis.com/maps/api/place/queryautocomplete/json?input="+input.value+"&key=AIzaSyDUBXDBxk0U-i2Wu_oRgktuV7TWKSQ4Mf4",{headers}).
    // then(response=>{
    //   console.log("result from api:"+response)
    // })
    fetch(`https://maps.googleapis.com/maps/api/place/queryautocomplete/json?input=${input.value}&key=AIzaSyDUBXDBxk0U-i2Wu_oRgktuV7TWKSQ4Mf4`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Data received:', data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });

}

  function selectLocation(location) {
    this.searchText = location;
    this.filteredLocations = [];
  }