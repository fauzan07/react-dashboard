import React from 'react';
import './Tabledata.css';

function Tabledata(props) {

    return(
        <div className="container border rounded bg-white tablecontent my-4">
            <div className="row justify-content-center">
                <div className="col-md-12">
                <h5 className="py-3">Standard Table Design</h5>
                    <table className="table">
                    <thead className="thead-white">
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">User Type</th>
                        <th scope="col">Joined</th>
                        <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mike Bhand</td>
                            <td>Mikebhand@gmail.com</td>
                            <td>Admin</td>
                            <td>25 Apr,2018</td>
                            <td><button className="btn btn-pending tablerbtn text-white btn-sm">PENDING</button></td>
                        </tr>
                        <tr>
                            <td>Andrue hussy</td>
                            <td>andruehussy@gmail.com</td>
                            <td>Editor</td>
                            <td>25 Apr,2018</td>
                            <td><button className="btn btn-approved tablerbtn text-white btn-sm">APPROVED</button></td>
                        </tr>
                        <tr>
                            <td>John Smith</td>
                            <td>johnsmith@gmail.com</td>
                            <td>Subscriber</td>
                            <td>25 Apr,2018</td>
                            <td><button className="btn btn-approved tablerbtn text-white btn-sm">APPROVED</button></td>
                        </tr>
                        <tr>
                            <td>Mike Bhand</td>
                            <td>Mikebhand@gmail.com</td>
                            <td>Admin</td>
                            <td>25 Apr,2018</td>
                            <td><button className="btn btn-reject tablerbtn text-white btn-sm">REJECT</button></td>
                        </tr>
                        <tr>
                            <td>Mike Bhand</td>
                            <td>Mikebhand@gmail.com</td>
                            <td>Admin</td>
                            <td>25 Apr,2018</td>
                            <td><button className="btn btn-pending tablerbtn text-white btn-sm">PENDING</button></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}

export default Tabledata;