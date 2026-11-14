// _runtime/metro/01934__.js
function worklet(arg0) {
  let fn = arg0;
  if (arg0 == null) {
    fn = () => {

    };
  }
  fn.__workletHash = Math.random();
  return fn;
}

export { worklet };
export (__workletHash) => {
  if (typeof worklet === "function") {
    const fn = () => {

    };
    const _Math = Math;
    fn.__workletHash = Math.random();
    fn.__workletHash = __workletHash.__workletHash;
    if (undefined !== __workletHash.__closure) {
      items = [];
      HermesBuiltin.arraySpread(__workletHash.__closure, 0);
      fn.__closure = items;
    }
    return fn;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}