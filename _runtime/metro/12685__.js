// _runtime/metro/12685__.js
import _mod12566 from "12566__.js";

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
