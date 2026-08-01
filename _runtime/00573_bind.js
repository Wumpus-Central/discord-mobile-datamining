// === Module 573: bind ===

// Module 573 (bind)
import bind from "bind";

const call2 = bind.call;

export default typeof call2 === "unknown" ? bind(hasOwnProperty) : call2(call, hasOwnProperty);