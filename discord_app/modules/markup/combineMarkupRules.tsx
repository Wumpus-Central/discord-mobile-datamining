// === Module 4902: combineMarkupRules ===

// Module 4902 (combineMarkupRules)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/markup/combineMarkupRules.tsx");

export default function combineMarkupRules(arg0) {
  let obj = {};
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let tmp3 = nextResult;
    for (const key10012 in nextResult) {
      let tmp15 = key10012;
      let tmp16 = key10012;
      obj = {};
      if (key10012 in obj) {
        let tmp9 = tmp15;
        let tmp10 = obj;
        let merged = Object.assign(obj[tmp16]);
        let tmp12 = nextResult;
        let tmp13 = obj;
        let merged1 = Object.assign(tmp2[tmp16]);
        let tmp8 = obj;
      } else {
        let tmp4 = nextResult;
        let tmp5 = tmp15;
        let tmp6 = obj;
        let merged2 = Object.assign(tmp2[tmp16]);
        tmp8 = obj;
      }
      obj[key10012] = tmp8;
      continue;
    }
    continue;
  }
  return obj;
};