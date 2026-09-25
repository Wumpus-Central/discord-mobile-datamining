// === Module 16356: VibegrationsChatGrouping ===

// Module 16356 (VibegrationsChatGrouping)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsChatGrouping.tsx");

export const groupChatRows = function groupChatRows(arg0) {
  const items = [];
  actor = null;
  let flag = false;
  let flag2 = false;
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (null != nextResult.actor) {
      let tmp5 = !flag;
      if (flag) {
        tmp5 = actor !== tmp2.actor;
      }
      if (!tmp5) {
        tmp5 = authorId !== tmp2.authorId;
      }
      if (!tmp5) {
        tmp5 = tmp2.boundary !== boundary;
      }
      if (!tmp5) {
        tmp5 = true === tmp2.separate;
      }
      if (!tmp5) {
        tmp5 = flag2;
      }
      let tmp13 = tmp5;
      if (tmp5) {
        ({ actor, authorId } = tmp2);
        flag = true;
        flag2 = true === tmp2.separate;
        boundary = tmp2.boundary;
      }
      let arr = items.push(tmp13);
    } else {
      let arr3 = items.push(false);
      actor = null;
      flag = false;
      flag2 = false;
    }
    continue;
  }
  return items;
};