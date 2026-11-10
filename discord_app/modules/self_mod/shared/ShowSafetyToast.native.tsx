// === Module 11464: ShowSafetyToast ===

// Module 11464 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5839 */;
import ShieldIcon from "ShieldIcon" /* 11430 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  const obj = ToastActionCreatorsDefault;
  obj.open(id, { text, icon: ShieldIcon.ShieldIcon, iconColor: "text-brand" });
}