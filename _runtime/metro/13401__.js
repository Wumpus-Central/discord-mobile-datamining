// === Module 13401: ? ===

// Module 13401
import _mod13282 from "module_13282" /* 13282 */;

require = arg1;
const dependencyMap = arg6;

export function vercelWaitUntil(arg0) {
  const obj = _mod13282.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
}