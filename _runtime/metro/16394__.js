// === Module 16394: ? ===

// Module 16394
import _mod16390 from "module_16390" /* 16390 */;


export default !_mod16390(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  let hasOwnPropertyResult = typeof bindResult !== "function";
  if (typeof bindResult === "function") {
    hasOwnPropertyResult = bindResult.hasOwnProperty("prototype");
  }
  return hasOwnPropertyResult;
});