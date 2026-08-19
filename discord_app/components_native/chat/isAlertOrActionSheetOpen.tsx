// discord_app/components_native/chat/isAlertOrActionSheetOpen.tsx
import useAlertStore2 from "../../design/components/AlertModal/native/useAlertStore.native.tsx";
import setContent from "../../modules/action_sheet/native/ActionSheetStore.tsx";
import getAlert from "../../stores/native/AlertStore.tsx";

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