// _runtime/00859_vercelWaitUntil.js
import _mod685 from "metro/00685__.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function vercelWaitUntil(arg0) {
  if (typeof globalThis.EdgeRuntime === "string") {
    const _Symbol = Symbol;
    const tmp7 = _mod685.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
    value = undefined;
    if (tmp7 != null) {
      const get = tmp7.get;
      if (get != null) {
        value = get();
      }
    }
    let waitUntil;
    if (value != null) {
      waitUntil = value.waitUntil;
    }
    if (waitUntil) {
      value.waitUntil(arg0);
    }
  }
}
