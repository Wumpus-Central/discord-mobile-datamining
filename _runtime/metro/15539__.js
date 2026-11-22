// _runtime/metro/15539__.js
import _mod15540 from "15540__.js";

export default !_mod15540(
  () =>
    7 !==
    Object.defineProperty({}, 1, {
      get() {
        return 7;
      },
    })[1],
);
