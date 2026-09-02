// _runtime/metro/14183__.js
import _mod14179 from "14179__.js";

export default !_mod14179(() => {
  const fn = () => {};
  const bindResult = fn.bind();
  let hasOwnPropertyResult = typeof bindResult !== "function";
  if (typeof bindResult === "function") {
    hasOwnPropertyResult = bindResult.hasOwnProperty("prototype");
  }
  return hasOwnPropertyResult;
});
