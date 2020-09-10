import React, { useState, useEffect, useContext } from "react";
import "./DaftarBuah.css";
import Axios from "axios";
import { BuahContext } from "./BuahContext";

const BuahForm = () => {
  const [daftarBuah, setDaftarBuah] = useContext(BuahContext);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    Axios.get(`http://backendexample.sanbercloud.com/api/fruits`).then(
      (res) => {
        console.log(res.data);
        setDaftarBuah(res.data);
      }
    );
  };

  const [inputName, setInputName] = useState("");
  const [inputHarga, setInputHarga] = useState("");
  const [inputBerat, setInputBerat] = useState(0);
  const [indexOfForm, setIndexOfForm] = useState(-1);

  const handleDelete = (id) => {
    Axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${id}`).then(
      (res) => {
        console.log("ok");
        getData();
      }
    );
  };

  const handleEdit = (id) => {
    Axios.put(`http://backendexample.sanbercloud.com/api/fruits/${id}`, {
      name: inputName,
      price: inputHarga,
      weight: inputBerat,
    }).then((res) => {
      console.log("ok");
      getData();
    });
    getData();
  };

  const handleChange = (event) => {
    let typeOfInput = event.target.name;
    switch (typeOfInput) {
      case "name": {
        setInputName(event.target.value);
        break;
      }
      case "harga": {
        setInputHarga(event.target.value);
        break;
      }
      case "berat": {
        setInputBerat(event.target.value);
        break;
      }
      default: {
        break;
      }
    }
  };

  const handleSubmit = (event) => {
    // menahan submit
    event.preventDefault();
    console.log(inputName, inputHarga, inputBerat);
    let nama = inputName;
    let harga = inputHarga.toString();
    let berat = inputBerat;

    if (nama.replace(/\s/g, "") !== "" && harga.replace(/\s/g, "") !== "") {
      let newDaftarBuah = daftarBuah;
      let index = indexOfForm;

      if (index === -1) {
        newDaftarBuah = [
          ...newDaftarBuah,
          { name: nama, price: harga, weight: berat },
        ];
      } else {
        newDaftarBuah[index] = { nama, harga, berat };
      }

      console.log(newDaftarBuah);
      setInputName("");
      setInputHarga("");
      setInputBerat(0);

      Axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {
        name: nama,
        price: harga,
        weight: berat,
      }).then((res) => {
        getData();
        console.log("ok");
      });
    }
  };

  return (
    <>
      <h1>Daftar Harga Buah</h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Harga</th>
            <th>Berat</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {daftarBuah.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.weight / 1000} kg</td>
                <td>
                  <button onClick={() => handleEdit(item.id)} value={index}>
                    Edit
                  </button>
                  &nbsp;
                  <button onClick={() => handleDelete(item.id)} value={index}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* Form */}
      <h1>Form Daftar Harga Buah</h1>
      <div style={{ width: "50%", margin: "0 auto", display: "block" }}>
        <div style={{ border: "1px solid #aaa", padding: "20px" }}>
          <form onSubmit={handleSubmit}>
            <label style={{ float: "left" }}>Nama:</label>
            <input
              style={{ float: "right" }}
              type="text"
              name="name"
              value={inputName}
              onChange={handleChange}
            />
            <br />
            <br />
            <label style={{ float: "left" }}>Harga:</label>
            <input
              style={{ float: "right" }}
              type="text"
              name="harga"
              value={inputHarga}
              onChange={handleChange}
            />
            <br />
            <br />
            <label style={{ float: "left" }}>Berat (dalam gram):</label>
            <input
              style={{ float: "right" }}
              type="number"
              name="berat"
              value={inputBerat}
              onChange={handleChange}
            />
            <br />
            <br />
            <div style={{ width: "100%", paddingBottom: "20px" }}>
              <button style={{ float: "right" }}>submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BuahForm;
