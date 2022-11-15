//export directly from the declaration of the Object

export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2c77e5934amshed43ca9a79ddafcp1c9372jsneebd9302b664',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;
export const WEATHER_API_KEY = `8fa5742974698dc95bfadf742990f8bd`;