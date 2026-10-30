// _runtime/00958_reportPageLoaded.js
import _mod681 from "metro/00681__.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function reportPageLoaded() {
  let client = arg0;
  if (arg0 === undefined) {
    client = _mod681.getClient();
  }
  if (client != null) {
    client.emit("endPageloadSpan");
  }
}
