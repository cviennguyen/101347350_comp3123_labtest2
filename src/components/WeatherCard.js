import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBCard, MDBCardBody, MDBTypography } from "mdb-react-ui-kit";

export default function WeatherCard({ data }) {
  const imageCode = `http://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`;
  return (
    <MDBCard className="shadow-0 border">
      <MDBCardBody className="p-4">
        <MDBTypography tag="h4" className="mb-1 sfw-normal">
          {data?.name}, {data?.sys.country}
        </MDBTypography>
        <p className="mb-2">
          Current temperature:
          <strong>{Math.ceil(data?.main.temp - 273.15)} °C</strong>
        </p>
        <p>
          Feels like:
          <strong>{Math.ceil(data?.main.feels_like - 273.15)} °C</strong>
        </p>
        <p>
          Max:
          <strong>{Math.ceil(data?.main.temp_max - 273.15)} °C</strong>, Min:
          <strong>{Math.ceil(data?.main.temp_min - 273.15)} °C</strong>
        </p>
        <p>
          Humidity:
          <strong>{data?.main.humidity}%</strong>
        </p>
        <p>
          Wind speed:
          <strong>{data?.wind.speed} m/s</strong>
        </p>

        <div className="d-flex flex-row align-items-center">
          <p className="mb-0 me-4">{data?.weather[0].main}</p>
          <img src={imageCode} alt="weather icon" />
        </div>
      </MDBCardBody>
    </MDBCard>
  );
}
