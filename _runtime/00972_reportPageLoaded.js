// _runtime/00972_reportPageLoaded.js
import _mod693 from "metro/00693__.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const reportPageLoaded = function reportPageLoaded() {
  let client = arg0;
  if (arg0 === undefined) {
    client = _mod693.getClient();
  }
  if (client != null) {
    client.emit("endPageloadSpan");
  }
};
