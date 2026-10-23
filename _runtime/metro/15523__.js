// _runtime/metro/15523__.js
import _mod15524 from "15524__.js";

export default !_mod15524(
  () =>
    7 !==
    Object.defineProperty({}, 1, {
      get() {
        return 7;
      },
    })[1],
);
