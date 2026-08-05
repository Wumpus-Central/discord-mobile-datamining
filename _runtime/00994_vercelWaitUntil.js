// _runtime/00994_vercelWaitUntil.js
import { 00821__ } from "metro/00821__.js";
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.vercelWaitUntil = function vercelWaitUntil(arg0) {
  if (typeof globalThis.EdgeRuntime === "string") {
    const _Symbol = Symbol;
    const tmp7 = 00821__.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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