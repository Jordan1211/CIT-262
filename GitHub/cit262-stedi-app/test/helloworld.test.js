import sayHello from "../utils/helloworld.mjs";
import assert from "assert";

it("Tests Hellow World", ()=>{

    const hello = sayHello();

    console.log('This test returns: ' + hello)

    assert.equal(hello,"hello");
})

