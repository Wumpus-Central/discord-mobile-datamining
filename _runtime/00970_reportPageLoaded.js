// _runtime/00970_reportPageLoaded.js
import _mod693 from "metro/00693__.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function reportPageLoaded() {
  let client = arg0;
  if (arg0 === undefined) {
    client = _mod693.getClient();
  }
  if (client != null) {
    client.emit("endPageloadSpan");
  }
}
