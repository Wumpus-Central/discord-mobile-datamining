// discord_app/components_native/chat/isAlertOrActionSheetOpen.tsx
import useAlertStore2 from "../../design/components/AlertModal/native/useAlertStore.native.tsx";
import ActionSheetStore from "../../modules/action_sheet/native/ActionSheetStore.tsx";
import AlertStore from "../../stores/native/AlertStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("components_native/chat/isAlertOrActionSheetOpen.tsx");

export const isAlertOrActionSheetOpen = function isAlertOrActionSheetOpen(selectedChannelId) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = ActionSheetStore;
  }
  let obj2 = arg2;
  if (arg2 === undefined) {
    obj2 = AlertStore;
  }
  let tmp = null != obj.getContent();
  const tmp2 = null != obj2.getAlert();
  const useAlertStore = useAlertStore2.useAlertStore;
  const tmp3 = useAlertStore.getState().alerts.length > 0;
  if (!tmp) {
    tmp = tmp2;
  }
  if (!tmp) {
    tmp = tmp3;
  }
  return tmp;
};
