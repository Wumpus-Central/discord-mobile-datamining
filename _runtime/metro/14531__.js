// _runtime/metro/14531__.js
import _mod14532 from "14532__.js";

export default !_mod14532(
  () =>
    7 !==
    Object.defineProperty({}, 1, {
      get() {
        return 7;
      },
    })[1],
);
