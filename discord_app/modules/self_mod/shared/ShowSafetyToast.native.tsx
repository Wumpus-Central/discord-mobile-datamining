// === Module 9860: ShowSafetyToast ===

// Module 9860 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4574 */;
import _modDef8951 from "module_8951" /* 8951 */;
import ShieldIcon from "ShieldIcon" /* 8952 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: id, icon: _modDef8951, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: text });
};