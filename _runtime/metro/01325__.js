// === Module 1325: ? ===

// Module 1325
import bind from "bind" /* 1306 */;

const call2 = bind.call;

export default typeof call2 === "unknown" ? bind(hasOwnProperty) : call2(call, hasOwnProperty);