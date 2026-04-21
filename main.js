const citySelector = document.getElementById("citySelector")
citySelector.addEventListener("change", async function(){
    let city = citySelector.value
    const options = {
        method : "GET",
        url : "https://api.aladhan.com/v1/timingsByCity",
        params: {
            city : city,
            country : "Egypt",
            method : 5,
        }
    };
    try{
        const response = await axios.request(options);
        console.log(response.data.data.timings)
    }
    catch(error){
        console.log(error)
    }
})
