// === Module 12685: ? ===

// Module 12685
import _mod12566 from "module_12566" /* 12566 */;


export const vercelWaitUntil = function vercelWaitUntil(arg0) {
  const obj = _mod12566.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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