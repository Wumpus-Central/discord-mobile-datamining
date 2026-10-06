// === Module 14082: ? ===

// Module 14082
import _mod14083 from "module_14083" /* 14083 */;


export default !_mod14083(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});