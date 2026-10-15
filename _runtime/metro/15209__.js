// _runtime/metro/15209__.js
import _mod15210 from "15210__.js";

export default !_mod15210(
  () =>
    7 !==
    Object.defineProperty({}, 1, {
      get() {
        return 7;
      },
    })[1],
);
