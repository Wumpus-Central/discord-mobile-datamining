// === Module 10261: isAlertOrActionSheetOpen ===

// Module 10261 (isAlertOrActionSheetOpen)
import useAlertStore2 from "useAlertStore" /* 6094 */;
import ActionSheetStore from "ActionSheetStore" /* 5377 */;
import AlertStore from "AlertStore" /* 10262 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("components_native/chat/isAlertOrActionSheetOpen.tsx");

export function isAlertOrActionSheetOpen(selectedChannelId) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = ActionSheetStore;
  }
  let obj2 = arg2;
  if (arg2 === undefined) {
    obj2 = AlertStore;
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
}