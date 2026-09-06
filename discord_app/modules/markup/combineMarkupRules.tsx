// discord_app/modules/markup/combineMarkupRules.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/markup/combineMarkupRules.tsx");

export default function combineMarkupRules(items) {
  let obj = {};
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    for (const key10012 in nextResult) {
      let tmp16 = key10012;
      obj = {};
      if (key10012 in obj) {
        let merged = Object.assign(obj[tmp16]);
        let merged1 = Object.assign(tmp2[tmp16]);
        let tmp8 = obj;
      } else {
        let merged2 = Object.assign(tmp2[tmp16]);
        tmp8 = obj;
      }
      obj[key10012] = tmp8;
      continue;
    }
    continue;
  }
  return obj;
}
