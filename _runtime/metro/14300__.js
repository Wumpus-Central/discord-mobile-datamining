// _runtime/metro/14300__.js
import _mod14301 from "14301__.js";

export default !_mod14301(
  () =>
    7 !==
    Object.defineProperty({}, 1, {
      get() {
        return 7;
      },
    })[1],
);
