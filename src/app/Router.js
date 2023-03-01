import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./app-component/App";
import Countries from "./modules/pages/countries/countries-component/Countries";
import Dishes from "./modules/pages/dishes/dishes-component/Dishes";

const Router = () => (
    <BrowserRouter>
        <Routes>

            <Route
                exact path="/"
                element={<App />}
            />

            <Route 
                path="/platos"
                element={<Dishes />}
            />

            <Route 
                path="/platos/:id"
                element={<Dishes />}
            />

            <Route 
                path="/paises"
                element={<Countries />}
            />

        </Routes>
    </BrowserRouter>
)

export default Router;