// === Module 1340: ? ===

// Module 1340
import bind from "bind" /* 1321 */;

const call2 = bind.call;

export default typeof call2 === "unknown" ? bind(hasOwnProperty) : call2(call, hasOwnProperty);