import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
function Loginpage() {
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col col-md-3">
                        Column
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-head-card-header">
                                Featured
                            </div>
                            <div class="card-body">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div class="mb-3">

                                    <label for="exampleFormControlInput1" class="form-label">password</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your password" />
                                </div>
                                <div class="mb-3">

                                    <label for="exampleFormControlInput1" class="form-label">Confirm password</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your confirm password" />
                                </div>
                                <div className="btn-style">
                                    <button type="button" class="btn btn-success">Login</button>
                                </div>
                                <Link>/Have not account</Link>



                            </div>
                        </div>
                    </div>
                    <div class="col col-md-3">
                        Column
                    </div>
                </div>
            </div>
        </>
    )
}
export default Loginpage;