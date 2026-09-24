// === Module 11759: ShowSafetyToast ===

// Module 11759 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4523 */;
import _modDef9598 from "module_9598" /* 9598 */;
import ShieldIcon from "ShieldIcon" /* 9599 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: id, icon: _modDef9598, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: text });
};