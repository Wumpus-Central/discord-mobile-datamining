// === Module 13170: ? ===

// Module 13170
import _mod13051 from "module_13051" /* 13051 */;

require = arg1;
const dependencyMap = arg6;

export const vercelWaitUntil = function vercelWaitUntil(arg0) {
  const obj = _mod13051.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
  if (obj) {
    if (obj.get) {
      if (obj.get()) {
        let obj1 = obj.get();
      }
      let waitUntil = obj1;
      if (obj1) {
        waitUntil = obj1.waitUntil;
      }
      if (waitUntil) {
        obj1.waitUntil(arg0);
      }
    }
  }
  obj1 = {};
};