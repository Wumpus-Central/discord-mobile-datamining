// === Module 10736: isAlertOrActionSheetOpen ===

// Module 10736 (isAlertOrActionSheetOpen)
import useAlertStore2 from "useAlertStore" /* 4657 */;
import setContent from "setContent" /* 4086 */;
import getAlert from "getAlert" /* 10737 */;

require = fn;
const result = require("obj132").fileFinishedImporting("components_native/chat/isAlertOrActionSheetOpen.tsx");

export const isAlertOrActionSheetOpen = function isAlertOrActionSheetOpen(selectedChannelId) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = closure_2;
  }
  let obj2 = arg2;
  if (arg2 === undefined) {
    obj2 = closure_3;
  }
  let tmp = null != obj.getContent();
  const useAlertStore = useAlertStore2.useAlertStore;
  const tmp2 = null != obj2.getAlert();
  if (!tmp) {
    tmp = tmp2;
  }
  if (!tmp) {
    tmp = tmp3;
  }
  return tmp;
};