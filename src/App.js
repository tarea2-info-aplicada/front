import React, { useState } from "react";
import Select from "react-select";
import {gender, month, weight, year} from "./OptionSelect"

function App() {


  const [data, setData] = useState([]);

  const handleChangeSelect = (event, name) => { 
    const value = event.value;

    console.log("name: ", name);
    console.log("value: ", value);

    setData({ ...data, [name]: value });
  }

  const submitForm = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(data))
  }

const customStyle = {
  control: (provided) => ({
    ...provided,

    border: "0px",
    borderColor: "#AEBDCA",
    boxShadow: "0 0 0 0.1rem  #AEBDCA",
  }),
};
  
 
  return (
    <>
      <div className="container-fluid">
        <div className="col-sm-12 col-md-8 col-lg-4 mx-auto mt-5">
          <div className="card">
            <div className="card-body p-5">
              <h1 className=" cattle-title text-center">CATTLE</h1>
              <form onSubmit={submitForm}>
                <div className="select">
                  <label>Año</label>
                  <Select
                    name="year"
                    styles={customStyle}
                    placeholder="Seleccione el año..."
                    options={year}
                    onChange={(event) => handleChangeSelect(event, "year")}
                  />
                </div>

                <div className="select">
                  <label>Mes</label>
                  <Select
                    name="month"
                    styles={customStyle}
                    placeholder="Seleccione el mes..."
                    options={month}
                    onChange={(event) => handleChangeSelect(event, "month")}
                  />
                </div>

                <div className="select">
                  <label>Genero</label>
                  <Select
                    name="gender"
                    styles={customStyle}
                    placeholder="Seleccione el genero..."
                    options={gender}
                    onChange={(event) => handleChangeSelect(event, "gender")}
                  />
                </div>

                <button className="btn btn-aqua mt-3">
                  Buscar
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
              <hr></hr>
              <p>{JSON.stringify(data)}</p>
              <hr></hr>

              <div className="mt-2">
                <label>Resultado de la aproximación</label>
                <input
                  disabled
                  style={{ backgroundColor: "white" }}
                  styles={customStyle}
                  className="form-control "
                  type="text"
                  placeholder="Resultado"
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
