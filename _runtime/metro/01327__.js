// === Module 1327: ? ===

// Module 1327
import bind from "bind" /* 1308 */;

const call2 = bind.call;

export default typeof call2 === "unknown" ? bind(hasOwnProperty) : call2(call, hasOwnProperty);