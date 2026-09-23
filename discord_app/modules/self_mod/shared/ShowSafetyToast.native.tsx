// === Module 11753: ShowSafetyToast ===

// Module 11753 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4521 */;
import _modDef9594 from "module_9594" /* 9594 */;
import ShieldIcon from "ShieldIcon" /* 9595 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: id, icon: _modDef9594, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: text });
};