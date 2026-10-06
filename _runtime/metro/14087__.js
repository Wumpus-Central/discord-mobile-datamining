// _runtime/metro/14087__.js
import _mod14083 from "14083__.js";

export default !_mod14083(() => {
  const fn = () => {};
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
