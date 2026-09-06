// === Module 1315: ? ===

// Module 1315
import bind from "bind" /* 1296 */;

const call2 = bind.call;

export default typeof call2 === "unknown" ? bind(hasOwnProperty) : call2(call, hasOwnProperty);