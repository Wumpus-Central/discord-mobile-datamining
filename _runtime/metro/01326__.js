// === Module 1326: ? ===

// Module 1326
import bind from "bind" /* 1307 */;

const call2 = bind.call;

export default typeof call2 === "unknown" ? bind(hasOwnProperty) : call2(call, hasOwnProperty);