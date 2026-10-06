// === Module 14114: ? ===

// Module 14114
import _mod14083 from "module_14083" /* 14083 */;
import _mod14115 from "module_14115" /* 14115 */;
import getOwnPropertyDescriptor from "module_14082" /* 14082 */;

const f66212 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod14115("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod14083(f66212);

export default !getOwnPropertyDescriptor && !_mod14083(f66212);