// _runtime/metro/12921__.js
import _mod12802 from "12802__.js";

require = arg1;
const dependencyMap = arg6;

export const vercelWaitUntil = function vercelWaitUntil(arg0) {
  let obj = _mod12802.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
