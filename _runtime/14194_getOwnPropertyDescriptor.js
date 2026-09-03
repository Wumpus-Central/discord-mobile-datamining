// _runtime/14194_getOwnPropertyDescriptor.js
import _mod14195 from "metro/14195__.js";

export default !_mod14195(
  () =>
    7 !==
    Object.defineProperty({}, 1, {
      get() {
        return 7;
      },
    })[1],
);
