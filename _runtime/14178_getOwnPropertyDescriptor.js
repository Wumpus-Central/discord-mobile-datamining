// _runtime/14178_getOwnPropertyDescriptor.js
import _mod14179 from "metro/14179__.js";

export default !_mod14179(
  () =>
    7 !==
    Object.defineProperty({}, 1, {
      get() {
        return 7;
      },
    })[1],
);
