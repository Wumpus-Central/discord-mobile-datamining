// _runtime/metro/14382__.js
import _mod14378 from "14378__.js";

export default !_mod14378(() => {
  const fn = () => {};
  const bindResult = fn.bind();
  let hasOwnPropertyResult = typeof bindResult !== "function";
  if (typeof bindResult === "function") {
    hasOwnPropertyResult = bindResult.hasOwnProperty("prototype");
  }
  return hasOwnPropertyResult;
});
