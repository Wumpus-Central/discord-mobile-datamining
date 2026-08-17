// _runtime/00573_bind.js
import bind from "bind" /* 554 */;

const call2 = bind.call;

export default typeof call2 === "unknown" ? bind(hasOwnProperty) : call2(call, hasOwnProperty);