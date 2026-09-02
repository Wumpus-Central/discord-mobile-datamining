// === Module 917: severityLevelFromString ===

// Module 917 (severityLevelFromString)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.severityLevelFromString = function severityLevelFromString(arg0) {
  let str = "warning";
  if ("warn" !== arg0) {
    const items = ["fatal", "error", "warning", "log", "info", "debug"];
    let str2 = "log";
    if (items.includes(arg0)) {
      str2 = arg0;
    }
    str = str2;
  }
  return str;
};