// _runtime/metro/14096__.js
import _mod14065 from "14065__.js";
import _mod14097 from "14097__.js";
import getOwnPropertyDescriptor from "14064__.js";

const f66145 = () => {
  const obj = {
    get() {
      return 7;
    },
  };
  return 7 !== Object.defineProperty(_mod14097("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod14065(f66145);

export default !getOwnPropertyDescriptor && !_mod14065(f66145);
