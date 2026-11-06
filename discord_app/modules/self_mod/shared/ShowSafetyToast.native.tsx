// === Module 11473: ShowSafetyToast ===

// Module 11473 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5867 */;
import ShieldIcon from "ShieldIcon" /* 11439 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  const obj = ToastActionCreatorsDefault;
  obj.open(id, { text, icon: ShieldIcon.ShieldIcon, iconColor: "text-brand" });
}