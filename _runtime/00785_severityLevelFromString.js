// _runtime/00785_severityLevelFromString.js
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const severityLevelFromString = function severityLevelFromString(level) {
  let str = "warning";
  if ("warn" !== level) {
    const items = ["fatal", "error", "warning", "log", "info", "debug"];
    let str2 = "log";
    if (items.includes(level)) {
      str2 = level;
    }
    str = str2;
  }
  return str;
};
