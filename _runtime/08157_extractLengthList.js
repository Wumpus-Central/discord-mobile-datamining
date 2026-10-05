// === Module 8157: extractLengthList ===

// Module 8157 (extractLengthList)
const re0 = /\s+/;
const re1 = /,/g;

export default function extractLengthList(num) {
  let tmp = num;
  if (!Array.isArray(num)) {
    let parts;
    if (typeof num === "number") {
      const items = [num];
      parts = items;
    } else if (typeof num === "string") {
      const str = num.trim();
      const str3 = str.replace(re1, " ");
      parts = str3.split(re0);
    } else {
      parts = [];
    }
    tmp = parts;
  }
  return tmp;
};