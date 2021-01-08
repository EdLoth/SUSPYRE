import React from 'react';
import './Show.css';

import {Link} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export default function Show() {
    return (
        <>
            <div className="content-page-show" >
                <div className="row">
                    <br />
                    <Link to="/" type="button" id="button-return" >
                        <FiArrowLeft width="40px" class="icon-button"/>
                         Retornar
                        </Link>
                    <h1>Patient List</h1><br/>
                    <div className="hr"></div>
            </div>
                    <div className="row">
                        <div className="container">
                            <div className="col-12">
                            <table class="table table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Nº</th>
                                    <th scope="col">Primeiro Nome</th>
                                    <th scope="col">Ultimo Nome</th>
                                    <th scope="col">Doença</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td><button type="button" class="btn btn-outline-info">Edit</button></td>
                                    <td><button type="button" class="btn btn-outline-danger">Delete</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td><button type="button" class="btn btn-outline-info">Edit</button></td>
                                    <td><button type="button" class="btn btn-outline-danger">Delete</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td><button type="button" class="btn btn-outline-info">Edit</button></td>
                                    <td><button type="button" class="btn btn-outline-danger">Delete</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td><button type="button" class="btn btn-outline-info">Edit</button></td>
                                    <td><button type="button" class="btn btn-outline-danger">Delete</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td><button type="button" class="btn btn-outline-info">Edit</button></td>
                                    <td><button type="button" class="btn btn-outline-danger">Delete</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td><button type="button" class="btn btn-outline-info">Edit</button></td>
                                    <td><button type="button" class="btn btn-outline-danger">Delete</button></td>
                                </tr>
                            </tbody>
                        </table>
                            </div>
                        </div>
                        
                    </div>
            </div>
        </>
    );
}