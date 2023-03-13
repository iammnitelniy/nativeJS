import {CityType} from "./CityType";
import {demolishHousesOnTheStreet} from "./demolishHousesOnTheStreet";

let city: CityType;


beforeEach(() => {
    city = {
        title: "New York",
        houses: [{
            id: 1,
            builededAt: 2012, repaired: false,
            address: {number: 100, street: {title: "White street"}}
        },
            {
                id: 2,
                builededAt: 2000, repaired: false,
                address: {number: 100, street: {title: "Happy street"}}
            },
            {
                id: 3,
                builededAt: 2020, repaired: false,
                address: {number: 101, street: {title: "Happy street"}}
            }],
        governmentBuldings: [{
            title: "HOSPITAL", budget: 200000, statCount: 200,
            address:
                {
                    street:
                        {title: "Central Str"}
                }
        },
            {
                title: "FIRE-STATION", budget: 500000, statCount: 1000,
                address:
                    {
                        street:
                            {title: "South Str"}
                    }
            }],
        citizenNumber: 100000
    }
})

test("test city should work", () => {
    expect(city.governmentBuldings[0].address.street.title).toBe("Central Str")

})

test("Houses should be destroyed", () => {
    demolishHousesOnTheStreet(city, "Happy street");

    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(1)
})
