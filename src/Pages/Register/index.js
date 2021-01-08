import React from 'react';
import {Link} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './Register.css';

export default function Register() {
    return (
        <>
            <div className="content-register-page">
                <div className="row">
                    <div className="content-form-register">
                        <h1>Register New Patient</h1>
                        <form>
                            <div class="row">
                                <div class="col">
                                    Primeiro Nome*
                                    <input type="text" class="form-control" placeholder="First name" />
                                </div>
                                <div class="col">
                                    Ultimo Nome*
                                    <input type="text" class="form-control" placeholder="Last name" />
                                </div>
                            </div>
                            <div id="group-input-register" class="form-group">
                                <label for="inputAddress2">Endereço*</label>
                                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                            </div>
                            <div id="group-input-register" class="form-row">
                                <div class="form-group col-md-3">
                                    <label for="inputBirth">Birth</label>
                                    <input type="date" class="form-control" id="inputBirth" />
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="inputCity">City</label>
                                    <input type="text" class="form-control" id="inputCity" placeholder="Your City"/>
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="inputState">State</label>
                                    <select id="inputState" class="form-control">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="inputZip">Zip</label>
                                    <input type="text" class="form-control" id="inputZip" placeholder="Code Zip"/>
                                </div>
                            </div>
                            <div id="group-input-register">
                            <Link id="button-return-register" to="/"><FiArrowLeft color=" #A71930" />Retornar</Link>
                            <button type="button" class="btn btn-outline-success">Register!</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    );
}