// _runtime/00972_reportPageLoaded.js
import _mod693 from "metro/00693__.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const reportPageLoaded = function reportPageLoaded() {
  let client = arg0;
  if (arg0 === undefined) {
    const obj2 = _mod693;
    client = obj2.getClient();
  }
  if (client != null) {
    client.emit("endPageloadSpan");
  }
};
