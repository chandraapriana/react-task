import React from "react";

class Tugas9 extends React.Component {
  render() {
    return (
      <div class="container">
        <h1>Form Pembelian Buah</h1>
        <table>
          <tr>
            <td>
              <b>Nama Pelanggan</b>
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td class="text-bottom">
              <b>Daftar Item</b>
            </td>
            <td>
              <input type="checkbox" /> Semangka <br />
              <input type="checkbox" /> Jeruk <br />
              <input type="checkbox" /> Nanas <br />
              <input type="checkbox" /> Salak <br />
              <input type="checkbox" /> Anggur <br />
            </td>
          </tr>
          <tr>
            <td>
              <button>Kirim</button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Tugas9;
