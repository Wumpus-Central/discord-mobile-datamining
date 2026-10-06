// === Module 12700: ? ===

// Module 12700
import _mod12581 from "module_12581" /* 12581 */;


export const vercelWaitUntil = function vercelWaitUntil(arg0) {
  const obj = _mod12581.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
  if (obj) {
    if (obj.get) {
      let obj1;
      if (obj.get()) {
        obj1 = obj.get();
      }
      const tmp = obj1 && obj1.waitUntil;
      if (tmp) {
        obj1.waitUntil(arg0);
      }
    }
  }
  obj1 = {};
};