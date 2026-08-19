// discord_app/modules/markup/combineMarkupRules.tsx
import obj132 from "../../../_runtime/00002_obj132.js";

const result = obj132.fileFinishedImporting("modules/markup/combineMarkupRules.tsx");

export default function combineMarkupRules(arg0) {
  let obj = {};
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    for (const key10012 in nextResult) {
      obj = {};
      if (key10012 in obj) {
        let merged = Object.assign(obj[key10012]);
        let merged1 = Object.assign(tmp2[key10012]);
        let tmp8 = obj;
      } else {
        let merged2 = Object.assign(tmp2[key10012]);
        tmp8 = obj;
      }
      obj[key10012] = tmp8;
      continue;
    }
    continue;
  }
  return obj;
};