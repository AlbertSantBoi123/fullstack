const hacerAlgo = (c, d) => {
    // apunta al objeto global
    console.log(this);
    // la variables se convierten en globales
    this.a = c;
    this.b = d;
    // a
    console.log(a);
    // b
    console.log(b);
    }
    const resultado = hacerAlgo('a', 'b');
    // a
    console.log(a);
    // b
    console.log(b);
    // error
    console.log(c);
    // error
    console.log(d);
    