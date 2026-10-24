// _runtime/metro/15543__.js
import _mod15544 from "15544__.js";

export default !_mod15544(
  () =>
    7 !==
    Object.defineProperty({}, 1, {
      get() {
        return 7;
      },
    })[1],
);
