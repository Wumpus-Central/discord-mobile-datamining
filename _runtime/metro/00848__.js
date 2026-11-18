// === Module 848: ? ===

// Module 848
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function getBreadcrumbLogLevelFromHttpStatusCode(status_code) {
  let tmp;
  if (undefined !== status_code) {
    if (status_code < 400) {
      let str2;
      if (status_code >= 500) {
        str2 = "error";
      }
      let str = str2;
    } else {
      str = "warning";
    }
    tmp = str;
  }
  return tmp;
}