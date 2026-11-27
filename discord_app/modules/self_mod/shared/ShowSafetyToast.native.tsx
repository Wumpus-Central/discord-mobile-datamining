// === Module 11879: ShowSafetyToast ===

// Module 11879 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5725 */;
import ShieldIcon from "ShieldIcon" /* 10079 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  const obj = ToastActionCreatorsDefault;
  obj.open(id, { text, icon: ShieldIcon.ShieldIcon, iconColor: "text-brand" });
}