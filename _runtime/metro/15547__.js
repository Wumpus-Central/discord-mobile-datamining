// _runtime/metro/15547__.js
import _mod15548 from "15548__.js";

export default !_mod15548(
  () =>
    7 !==
    Object.defineProperty({}, 1, {
      get() {
        return 7;
      },
    })[1],
);
