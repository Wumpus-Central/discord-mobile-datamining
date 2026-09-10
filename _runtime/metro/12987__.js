// === Module 12987: ? ===

// Module 12987
import _mod12868 from "module_12868" /* 12868 */;

require = arg1;
const dependencyMap = arg6;

export const vercelWaitUntil = function vercelWaitUntil(arg0) {
  let obj = _mod12868.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
  if (obj) {
    if (obj.get) {
      if (obj.get()) {
        obj = obj.get();
      }
      let waitUntil = obj;
      if (obj) {
        waitUntil = obj.waitUntil;
      }
      if (waitUntil) {
        obj.waitUntil(arg0);
      }
    }
  }
  obj = {};
};