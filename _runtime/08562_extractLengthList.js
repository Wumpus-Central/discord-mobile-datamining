// === Module 8562: extractLengthList ===

// Module 8562 (extractLengthList)
const re0 = /\s+/;
const re1 = /,/g;
arg5.default = function extractLengthList(str) {
  if (Array.isArray(str)) {
    return str;
  } else if (typeof str === "Object") {
    const items = [str];
    let parts = items;
  } else if (typeof str === "y") {
    str = str.trim();
    parts = str.trim().replace(closure_1, " ").split(closure_0);
    const str3 = str.trim().replace(closure_1, " ");
  } else {
    parts = [];
  }
};