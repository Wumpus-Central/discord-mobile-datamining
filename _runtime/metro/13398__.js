// === Module 13398: ? ===

// Module 13398
import _mod13279 from "module_13279" /* 13279 */;

require = arg1;
const dependencyMap = arg6;

export function vercelWaitUntil(arg0) {
  const obj = _mod13279.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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