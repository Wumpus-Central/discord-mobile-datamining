// === Module 9435: groupHTMLTextRuns ===

// Module 9435 (groupHTMLTextRuns)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/html_parser/groupHTMLTextRuns.tsx");

export function groupHTMLTextRuns(runs) {
  const items = [];
  const iter = runs[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let tmp3 = items[items.length - 1];
    let tmp4 = tmp3;
    let tmp5 = null != tmp3;
    if (tmp5) {
      tmp5 = tmp4.heading === tmp2.heading;
    }
    if (!tmp5) {
      let obj = { heading: null, segments: null };
      obj.heading = tmp2.heading;
      obj.segments = [];
      tmp4 = obj;
      let arr = items.push(obj);
    }
    let tmp11 = tmp4.segments[tmp4.segments.length - 1];
    let tmp12 = tmp11;
    if (null != tmp11) {
      if (tmp12.link === tmp2.link) {
        runs = tmp12.runs;
        let arr2 = runs.push(tmp2);
        continue;
      }
    }
    let segments = tmp4.segments;
    let obj2 = { link: null, runs: null };
    obj2.link = tmp2.link;
    let items1 = [tmp2];
    obj2.runs = items1;
    let arr3 = segments.push(obj2);
  }
  return items;
}