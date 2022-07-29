import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function BlogNew() {

    return (
        <>
            <div class="container-lg">
                <div class="mb-3"><br /></div>
                <div class="mb-3">
                    <h1> Nuevo blog</h1>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Titulo</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1"
                        placeholder="Titulo/Title"></input>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Texto / informacion</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="mb-3">
                    <label for="formFile" class="form-label">Imagen</label>
                    <input class="form-control" type="file" id="formFile"></input>
                </div>
                <div class="mb-3"><br /></div>
                <div class="mb-3">
                    <button class="btn btn-primary">Crear</button>
                    <button class="btn btn-primary">Cancelar</button>
                </div>
            </div>
        </>
    );
}

export default BlogNew;