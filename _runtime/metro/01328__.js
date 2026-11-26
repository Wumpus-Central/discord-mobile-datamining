// === Module 1328: ? ===

// Module 1328
import bind from "bind" /* 1309 */;

const call2 = bind.call;

export default typeof call2 === "unknown" ? bind(hasOwnProperty) : call2(call, hasOwnProperty);