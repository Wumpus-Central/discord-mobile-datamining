// _runtime/08474_extractLengthList.js
const re0 = /\s+/;
const re1 = /,/g;

export default function extractLengthList(num) {
  if (Array.isArray(num)) {
    return num;
  } else if (typeof num === "number") {
    const items = [num];
    let parts = items;
  } else if (typeof num === "string") {
    const str = num.trim();
    parts = num.trim().replace(re1, " ").split(re0);
    const str3 = num.trim().replace(re1, " ");
  } else {
    parts = [];
  }
}
