// discord_app/components_native/chat/isAlertOrActionSheetOpen.tsx
import useAlertStore2 from "../../design/components/AlertModal/native/useAlertStore.native.tsx";
import closure_2 from "../../modules/action_sheet/native/ActionSheetStore.tsx";
import closure_3 from "../../stores/native/AlertStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("components_native/chat/isAlertOrActionSheetOpen.tsx");

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