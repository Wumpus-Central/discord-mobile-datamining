import { getNative } from "00737_getNative.js";
// _runtime/00805_getNative.js

export default (() => {
  try {
    const _Object = Object;
    const tmp4 = getNative /* getNative */(Object, "defineProperty");
    tmp4({}, "", {});
    return tmp4;
  } catch (err) {
  }
})();