// discord_app/modules/chat/native/ChatChangesetUpdateTracker.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";

const weakMap = new WeakMap();
let result = obj132.fileFinishedImporting("modules/chat/native/ChatChangesetUpdateTracker.tsx");

export const getAndIncrementChangesetIdForChat = function getAndIncrementChangesetIdForChat(arg0) {
  let num = weakMap.get(arg0);
  if (num == null) {
    num = 0;
  }
  const sum = num + 1;
  const result = weakMap.set(arg0, sum);
  return sum;
};
export const getChangesetIdForChat = function getChangesetIdForChat(current) {
  let num = 0;
  if (null != current) {
    let num2 = weakMap.get(current);
    if (num2 == null) {
      num2 = 0;
    }
    num = num2;
  }
  return num;
};