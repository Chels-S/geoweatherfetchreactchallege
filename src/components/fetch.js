import React, {Component} from 'react'

class WeatherFetch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lat: 0,
            long: 0,
            weather: ''
        }
    }


    // location(position){
    //     this.setState({
    //         lat: position.coords.latitude,
    //         long: position.coords.longitude})
    // }

    fetchWeather(){
        fetch(`api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}}&lon=${this.state.long}}&appid={1228d6e1564b13db516259d0a555d6e2}`, {
            method: 'GET'
        }).then (res => res.json())
        .then(res => {
            this.setState({
                weather: res
            })
        })
        .catch((error) => console.log(error))
    }

   


    componentDidMount(){
        navigator.geolocation.getCurrentPosition(
            function(position){
                // this.setState({lat: position.coords.latitude, long: position.coords.longit})
                console.log(position);
            },
            function(error){
                console.error("Error: " + error.code + "-" + error.message);
            })
    }

    render(){
        return(
            <div>
                {this.fetchWeather()}
                {this.state.weather}
            </div>
        )
    }
}

export default WeatherFetch;