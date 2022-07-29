import React from "react";
import './App.css';

export default function (props) {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Usuario</label>
              <input
                type="user"
                className="form-control mt-1"
                placeholder="Ingresar usuario"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Ingresar password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Aceptar
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Olvidaste tu <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    )
  }