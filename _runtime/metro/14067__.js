// _runtime/metro/14067__.js
import _mod14063 from "14063__.js";

export default !_mod14063(() => {
  const fn = () => {};
  const bindResult = fn.bind();
  let hasOwnPropertyResult = typeof bindResult !== "function";
  if (typeof bindResult === "function") {
    hasOwnPropertyResult = bindResult.hasOwnProperty("prototype");
  }
  return hasOwnPropertyResult;
});
