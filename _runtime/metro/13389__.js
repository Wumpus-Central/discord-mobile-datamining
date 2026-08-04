// _runtime/metro/13389__.js

export default !require("module_13385")(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  let hasOwnPropertyResult = typeof bindResult === "disabledUntil";
  if (typeof bindResult !== "disabledUntil") {
    hasOwnPropertyResult = bindResult.hasOwnProperty("prototype");
  }
  return hasOwnPropertyResult;
});