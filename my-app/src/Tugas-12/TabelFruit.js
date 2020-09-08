import React from "react";
import "./../App.css";

// let dataHargaBuah = [
//   { nama: "Semangka", harga: 10000, berat: 1000 },
//   { nama: "Anggur", harga: 40000, berat: 500 },
//   { nama: "Strawberry", harga: 30000, berat: 400 },
//   { nama: "Jeruk", harga: 30000, berat: 1000 },
//   { nama: "Mangga", harga: 30000, berat: 500 },
// ];

class Row extends React.Component {
  render() {
    return (
      <tr>
        <td className="buah nama">{this.props.nama}</td>
        <td className="buah harga">{this.props.harga}</td>
        <td className="buah berat">{this.props.berat} kg</td>
        <td>
          <a href="">Edit</a>
          <button key={this.props.name} onClick={this.delete}>
            Delete
          </button>
        </td>
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
  constructor(props) {
    super(props);
    this.state = {
      dataHargaBuah: [
        { nama: "Semangka", harga: 10000, berat: 1000 },
        { nama: "Anggur", harga: 40000, berat: 500 },
        { nama: "Strawberry", harga: 30000, berat: 400 },
        { nama: "Jeruk", harga: 30000, berat: 1000 },
        { nama: "Mangga", harga: 30000, berat: 500 },
      ],
      inputName: "",
      inputPrice: 0,
      inputWeight: 0,
    };
    this.handleName = this.handleName.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleWeight = this.handleWeight.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(event) {
    console.log(event.target.value);
    this.setState({
      inputName: event.target.value,
    });
  }

  handlePrice(event) {
    console.log(event.target.value);
    this.setState({
      inputPrice: event.target.value,
    });
  }
  handleWeight(event) {
    console.log(event.target.value);
    this.setState({
      inputWeight: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.setState({
      dataHargaBuah: this.state.dataHargaBuah.concat({
        nama: this.state.inputName,
        harga: this.state.inputPrice,
        berat: this.state.inputWeight,
      }),
      // inputName: "",
      // inputPrice: 0,
      // inputWeight: 0,
    });
  }

  delete(key) {
    const dataHargaBuah = this.state.dataHargaBuah.filter(
      (buah) => buah.nama !== key.nama
    );
    this.setState({ dataHargaBuah });
  }

  render() {
    console.log(this.state.dataHargaBuah);
    return (
      <>
        <table className="table">
          <tr>
            <th>Nama</th>
            <th>Harga</th>
            <th>Berat</th>
            <th>Action</th>
          </tr>
          {this.state.dataHargaBuah.map((el) => {
            return (
              <Row
                key={el.nama}
                id={el.nama}
                nama={el.nama}
                harga={el.harga}
                berat={el.berat}
              />
            );
          })}
        </table>

        <form onSubmit={this.handleSubmit}>
          <label>Nama Buah:</label>
          <input
            type="text"
            name="inputName"
            value={this.state.inputName}
            onChange={this.handleName}
          />
          <br />
          <label>Harga Buah:</label>
          <input
            type="text"
            name="inputPrice"
            value={this.state.inputPrice}
            onChange={this.handlePrice}
          />
          <br />
          <label>Berat Buah:</label>
          <input
            type="text"
            name="inputWeight"
            value={this.state.inputWeight}
            onChange={this.handleWeight}
          />
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

class TabelFruit extends React.Component {
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

export default TabelFruit;
