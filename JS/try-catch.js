try {
    // adddlert('a');
    let variable=0;
    console.log(variable);
    throw 'La función probada no es correcta, o no existe';
    }
    catch (err) {
        // ReferenceError: adddlert is not defined
        alert(err);
    }
        // lanzar excepción personalizada
        