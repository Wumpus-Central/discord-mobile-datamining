// === Module 11662: ShowSafetyToast ===

// Module 11662 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4420 */;
import _modDef9639 from "module_9639" /* 9639 */;
import ShieldIcon from "ShieldIcon" /* 9640 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: id, icon: _modDef9639, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: text });
};