// === Module 5296: combineMarkupRules ===

// Module 5296 (combineMarkupRules)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/combineMarkupRules.tsx");

export default function combineMarkupRules(items) {
  const obj = {};
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    for (const key10012 in nextResult) {
      let obj2 = {};
      if (key10012 in obj) {
        let merged = Object.assign(obj[key10012]);
        let merged1 = Object.assign(tmp2[key10012]);
        let tmp8 = obj2;
      } else {
        let merged2 = Object.assign(tmp2[key10012]);
        tmp8 = obj2;
      }
      obj[key10012] = tmp8;
      continue;
    }
    continue;
  }
  return obj;
};