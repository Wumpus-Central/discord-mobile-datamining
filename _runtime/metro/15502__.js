// _runtime/metro/15502__.js
import _mod15503 from "15503__.js";

export default !_mod15503(
  () =>
    7 !==
    Object.defineProperty({}, 1, {
      get() {
        return 7;
      },
    })[1],
);
