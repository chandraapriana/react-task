import React from "react";
import "./../App.css";

let dataHargaBuah = [
  { nama: "Semangka", harga: 10000, berat: 1000 },
  { nama: "Anggur", harga: 40000, berat: 500 },
  { nama: "Strawberry", harga: 30000, berat: 400 },
  { nama: "Jeruk", harga: 30000, berat: 1000 },
  { nama: "Mangga", harga: 30000, berat: 500 },
];

class Row extends React.Component {
  render() {
    return (
      <tr>
        <td className="buah nama">{this.props.nama}</td>
        <td className="buah harga">{this.props.harga}</td>
        <td className="buah berat">{this.props.berat} kg</td>
      </tr>
    );
  }
}

class Judul extends React.Component {
  render() {
    return <h1>Tabel Harga Buah</h1>;
  }
}

class Table extends React.Component {
  render() {
    return (
      <table className="table">
        <tr>
          <th>Nama</th>
          <th>Harga</th>
          <th>Berat</th>
        </tr>
        {dataHargaBuah.map((el) => {
          return <Row nama={el.nama} harga={el.harga} berat={el.berat} />;
        })}
      </table>
    );
  }
}

class Tugas10 extends React.Component {
  render() {
    return (
      <>
        <div className="container-buah">
          <Judul></Judul>
          <Table></Table>
        </div>
      </>
    );
  }
}

export default Tugas10;
