import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  MDBCol,
  MDBContainer,
  MDBInputGroup,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import WeatherCard from "./WeatherCard";

export default function Weather() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    try {
      await axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${data.city}&appid=dee1bc09f0a980d2c648665e45241d49`
        )
        .then((res) => {
          setData(res.data);
        });
    } catch (err) {
      setData(null);
      setError(err.response.data.message);
    }
  };

  return (
    <>
      <section className="vh-100">
        <MDBContainer
          className="h-100 py-5"
          style={{ backgroundColor: "lightblue" }}
        >
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBTypography tag="h3" className="mb-4 pb-2 fw-bold text-center">
              Check the weather forecast
            </MDBTypography>
            <MDBCol md="8" lg="6" xl="4">
              <MDBInputGroup className="mb-3">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="input-group">
                    <input
                      {...register("city", { required: true })}
                      type="search"
                      className="form-control rounded border-0"
                      placeholder="Type a city name"
                      aria-label="Search"
                      aria-describedby="search-addon"
                    />
                    <button type="submit" className="btn btn-outline-primary">
                      Search
                    </button>
                  </div>
                  {errors.city && (
                    <p style={{ color: "red" }}>This field is required</p>
                  )}
                </form>
              </MDBInputGroup>
              {data ? <WeatherCard data={data} /> : <h2>{error}</h2>}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}
