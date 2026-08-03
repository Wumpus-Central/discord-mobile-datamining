// === Module 9669: isAlertOrActionSheetOpen ===

// Module 9669 (isAlertOrActionSheetOpen)
import setContent from "setContent";
import getAlert from "getAlert";

const require = arg1;
const result = require("useAlertStore").fileFinishedImporting("components_native/chat/isAlertOrActionSheetOpen.tsx");

export const isAlertOrActionSheetOpen = function isAlertOrActionSheetOpen(selectedChannelId) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = setContent;
  }
  let obj2 = arg2;
  if (arg2 === undefined) {
    obj2 = getAlert;
  }
  let tmp = null != obj.getContent();
  const useAlertStore = require(4596) /* useAlertStore */.useAlertStore;
  const tmp2 = null != obj2.getAlert();
  if (!tmp) {
    tmp = tmp2;
  }
  if (!tmp) {
    tmp = tmp3;
  }
  return tmp;
};