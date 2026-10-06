// _runtime/metro/14082__.js
import _mod14083 from "14083__.js";

export default !_mod14083(() => {
  const obj = {
    get() {
      return 7;
    },
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
