// _runtime/metro/15450__.js
import _mod15446 from "15446__.js";

export default !_mod15446(() => {
  const fn = () => {};
  const bindResult = fn.bind();
  let hasOwnPropertyResult = typeof bindResult !== "function";
  if (typeof bindResult === "function") {
    hasOwnPropertyResult = bindResult.hasOwnProperty("prototype");
  }
  return hasOwnPropertyResult;
});
