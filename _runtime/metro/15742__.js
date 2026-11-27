// _runtime/metro/15742__.js
import _mod15743 from "15743__.js";

export default !_mod15743(
  () =>
    7 !==
    Object.defineProperty({}, 1, {
      get() {
        return 7;
      },
    })[1],
);
