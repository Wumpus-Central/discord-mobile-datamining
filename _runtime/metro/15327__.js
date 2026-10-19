// _runtime/metro/15327__.js
import _mod15328 from "15328__.js";

export default !_mod15328(
  () =>
    7 !==
    Object.defineProperty({}, 1, {
      get() {
        return 7;
      },
    })[1],
);
