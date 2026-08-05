// _runtime/08458_extractLengthList.js
const re0 = /\s+/;
const re1 = /,/g;
arg5.default = function extractLengthList(num) {
  if (Array.isArray(num)) {
    return num;
  } else if (typeof num === "number") {
    const items = [num];
    let parts = items;
  } else if (typeof num === "string") {
    const str = num.trim();
    parts = num.trim().replace(closure_1, " ").split(closure_0);
    const str3 = num.trim().replace(closure_1, " ");
  } else {
    parts = [];
  }
};