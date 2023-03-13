import {CityType} from "./CityType";


export function demolishHousesOnTheStreet(city: CityType, street: string) {
        city.houses = city.houses.filter(h => h.address.street.title === "White street")
}