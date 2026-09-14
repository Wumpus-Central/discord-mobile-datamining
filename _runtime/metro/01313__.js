// _runtime/metro/01313__.js
import bind from "../01294_bind.js";

const call2 = bind.call;

export default typeof call2 === "unknown" ? bind(hasOwnProperty) : call2(call, hasOwnProperty);
