import sayHello from "../utils/helloworld.mjs";
import assert from "assert";

it("Should say Jordan", ()=>{

    const hello = sayHello();

    console.log('This test returns: ' + hello)

    assert.equal(hello,"Jordan");
})

