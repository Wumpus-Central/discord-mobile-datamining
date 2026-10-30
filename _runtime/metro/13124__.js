// === Module 13124: ? ===

// Module 13124
import _mod13005 from "module_13005" /* 13005 */;

require = arg1;
const dependencyMap = arg6;

export function vercelWaitUntil(arg0) {
  const obj = _mod13005.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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