// === Module 9930: ? ===

// Module 9930
import _mod9811 from "module_9811" /* 9811 */;

require = arg1;
const dependencyMap = arg6;

export function vercelWaitUntil(arg0) {
  const obj = _mod9811.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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