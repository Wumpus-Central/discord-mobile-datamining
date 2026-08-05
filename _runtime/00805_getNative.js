// _runtime/00805_getNative.js

export default (() => {
  try {
    const _Object = Object;
    const tmp4 = require("00737_getNative.js") /* getNative */(Object, "defineProperty");
    tmp4({}, "", {});
    return tmp4;
  } catch (err) {
  }
})();