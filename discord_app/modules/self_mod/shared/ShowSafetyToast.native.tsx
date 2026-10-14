// === Module 10453: ShowSafetyToast ===

// Module 10453 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4811 */;
import ShieldIcon from "ShieldIcon" /* 10419 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  const obj = ToastActionCreatorsDefault;
  obj.open(id, { text, icon: ShieldIcon.ShieldIcon, iconColor: "text-brand" });
};