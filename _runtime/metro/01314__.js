// === Module 1314: ? ===

// Module 1314
import bind from "bind" /* 1295 */;

const call2 = bind.call;

export default typeof call2 === "unknown" ? bind(hasOwnProperty) : call2(call, hasOwnProperty);