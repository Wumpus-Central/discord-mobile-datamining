// _runtime/metro/15541__.js
import _mod15542 from "15542__.js";

export default !_mod15542(
  () =>
    7 !==
    Object.defineProperty({}, 1, {
      get() {
        return 7;
      },
    })[1],
);
