// _runtime/metro/15528__.js
import _mod15524 from "15524__.js";

export default !_mod15524(() => {
  const fn = () => {};
  const bindResult = fn.bind();
  let hasOwnPropertyResult = typeof bindResult !== "function";
  if (typeof bindResult === "function") {
    hasOwnPropertyResult = bindResult.hasOwnProperty("prototype");
  }
  return hasOwnPropertyResult;
});
