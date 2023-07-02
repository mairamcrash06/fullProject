const euro = document.querySelector('#euro'),
    som = document.querySelector('#som'),
    usd = document.querySelector('#usd')

const getVal = async () => {
    try {
        const response = await fetch(`../json/val.json`)
        return await response.json()
    }
    catch (error) {
        console.error(error)
    }
}

const convert = (currency, targetInput, targetInputSecond, isTrue) => {
    currency.oninput = async () => {
        const response = await getVal()

        if (currency === som) {
            targetInput.value = (currency.value / response.usd).toFixed(2);
            targetInputSecond.value = (currency.value / response.euro).toFixed(2)
        }
        else if (currency === usd) {
            targetInput.value = (currency.value * response.usd).toFixed(2);
            targetInputSecond.value = ((currency.value * response.usd) / response.euro).toFixed(2)
        }
        else {
            targetInput.value = (currency.value * response.euro).toFixed(2)
            targetInputSecond.value = ((currency.value * response.usd) / response.euro).toFixed(2)
        }
    }
}
convert(som, usd, euro, true);
convert(usd, som, euro, false);
convert(euro, som, usd, false);
