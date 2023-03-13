export type StreetType = {
    title: string
}


export type HouseType = {
    builededAt: number,
    repaired: false,
    address: AddressType
}

export type AddressType = {
    number?: number,
    street: StreetType
}
export type GovermentBUildingType = {
    title: "HOSPITAL" | "FIRE-STATION"
    budget: number
    statCount: number
    address: AddressType
}


export type CityType = {
    title: string,
    houses: Array <HouseType>,
    governmentBuldings: Array<GovermentBUildingType>,
    citizenNumber: number
}
