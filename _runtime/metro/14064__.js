// _runtime/metro/14064__.js
import _mod14065 from "14065__.js";

export default !_mod14065(() => {
  const obj = {
    get() {
      return 7;
    },
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
