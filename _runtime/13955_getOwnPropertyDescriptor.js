// _runtime/13955_getOwnPropertyDescriptor.js
import _mod13956 from "metro/13956__.js";

export default !_mod13956(
  () =>
    7 !==
    Object.defineProperty({}, 1, {
      get() {
        return 7;
      },
    })[1],
);
