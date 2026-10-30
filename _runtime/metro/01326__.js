// _runtime/metro/01326__.js
import bind from "../01307_bind.js";

const call2 = bind.call;

export default typeof call2 === "unknown" ? bind(hasOwnProperty) : call2(call, hasOwnProperty);
