// _runtime/metro/14069__.js
import _mod14065 from "14065__.js";

export default !_mod14065(() => {
  const fn = () => {};
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
