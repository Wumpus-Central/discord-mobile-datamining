// === Module 10442: ShowSafetyToast ===

// Module 10442 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import ShieldIcon from "ShieldIcon" /* 10408 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  const obj = ToastActionCreatorsDefault;
  obj.open(id, { text, icon: ShieldIcon.ShieldIcon, iconColor: "text-brand" });
};