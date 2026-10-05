// === Module 870: vercelWaitUntil ===

// Module 870 (vercelWaitUntil)
import _mod697 from "module_697" /* 697 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const vercelWaitUntil = function vercelWaitUntil(arg0) {
  if (typeof globalThis.EdgeRuntime === "string") {
    const _Symbol = Symbol;
    const tmp7 = _mod697.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
    let value;
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
};