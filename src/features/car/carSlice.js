import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: ["AMG GT 2021 Model", "EQS 2021 Model", "Dodge 2019 Model", "BMW i8 2020 Model"]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.cars

export default carSlice.reducer