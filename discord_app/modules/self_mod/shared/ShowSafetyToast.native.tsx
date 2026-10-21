// === Module 10935: ShowSafetyToast ===

// Module 10935 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5645 */;
import ShieldIcon from "ShieldIcon" /* 10901 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  const obj = ToastActionCreatorsDefault;
  obj.open(id, { text, icon: ShieldIcon.ShieldIcon, iconColor: "text-brand" });
};