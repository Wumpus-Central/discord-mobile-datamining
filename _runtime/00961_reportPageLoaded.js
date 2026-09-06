// _runtime/00961_reportPageLoaded.js
import _mod682 from "metro/00682__.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const reportPageLoaded = function reportPageLoaded() {
  let client = arg0;
  if (arg0 === undefined) {
    client = _mod682.getClient();
  }
  if (client != null) {
    client.emit("endPageloadSpan");
  }
};
