// === Module 1338: ? ===

// Module 1338
import bind from "bind" /* 1319 */;

const call2 = bind.call;

export default typeof call2 === "unknown" ? bind(hasOwnProperty) : call2(call, hasOwnProperty);