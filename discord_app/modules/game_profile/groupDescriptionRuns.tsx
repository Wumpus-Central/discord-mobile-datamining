// discord_app/modules/game_profile/groupDescriptionRuns.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/game_profile/groupDescriptionRuns.tsx");

export const GAME_DESCRIPTION_HEADING_VARIANTS = {
  h1: "heading-lg/bold",
  h2: "heading-md/bold",
  h3: "heading-sm/bold",
  h4: "heading-sm/semibold",
};
export function groupDescriptionRuns(runs) {
  const items = [];
  const iter = runs[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let tmp3 = items[items.length - 1];
    let tmp4 = tmp3;
    if (null != tmp3) {
      if (tmp4.heading === tmp2.heading) {
        runs = tmp4.runs;
        let arr = runs.push(tmp2);
        continue;
      }
    }
    let obj = { heading: null, runs: null };
    obj.heading = tmp2.heading;
    let items1 = [tmp2];
    obj.runs = items1;
    let arr2 = items.push(obj);
  }
  return items;
}
