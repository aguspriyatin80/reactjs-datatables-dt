import React from 'react';
import './App.css';
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
// import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-select-dt/js/select.dataTables"
import "datatables.net-select-dt/css/select.dataTables.css"
import "datatables.net-dt/css/jquery.dataTables.min.css"
// import "datatables.net-responsive-dt/js/responsive.dataTables"
// import "datatables.net-responsive-dt/css/responsive.dataTables.css"

import $ from 'jquery';
import { Button } from 'bootstrap';
class App extends React.Component {
  componentDidMount() {
    //initialize datatable
    $(document).ready(function () {
      var t = $('#example').DataTable({
        "columnDefs": [{
          "searchable": false,
          "orderable": false,
          "targets": 0,
        }],
        "order": [[1, 'asc']]
      });

      t.on('order.dt search.dt', function () {
        t.column(0, { search: 'applied', order: 'applied' }).nodes().each(function (cell, i) {
          cell.innerHTML = i + 1;
        });
      }).draw();


    });
  }
  render() {
    //Datatable HTML
    return (
      <div className="MainDiv">
        <div class="jumbotron text-center bg-sky">
          <h3>Therichpost.com</h3> <button className="btn btn-primary">Submit</button>
        </div>

        <div className="container">

          <table id="example" className="display">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Garrett Winters</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>63</td>
                <td>2011/07/25</td>
                <td>$170,750</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Ashton Cox</td>
                <td>Junior Technical Author</td>
                <td>San Francisco</td>
                <td>66</td>
                <td>2009/01/12</td>
                <td>$86,000</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Cedric Kelly</td>
                <td>Senior Javascript Developer</td>
                <td>Edinburgh</td>
                <td>22</td>
                <td>2012/03/29</td>
                <td>$433,060</td>
              </tr>

            </tbody>
            <tfoot>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
              </tr>
            </tfoot>
          </table>

        </div>
      </div>
    );
  }
}
export default App;