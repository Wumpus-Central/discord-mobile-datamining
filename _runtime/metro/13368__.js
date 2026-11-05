// _runtime/metro/13368__.js

export function severityLevelFromString(level) {
  let str = "warning";
  if ("warn" !== level) {
    items = ["fatal", "error", "warning", "log", "info", "debug"];
    let str2 = "log";
    if (items.includes(level)) {
      str2 = level;
    }
    str = str2;
  }
  return str;
}
export const validSeverityLevels = ["fatal", "error", "warning", "log", "info", "debug"];
