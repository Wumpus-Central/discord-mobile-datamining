// === Module 11564: ShowSafetyToast ===

// Module 11564 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4338 */;
import _modDef9555 from "module_9555" /* 9555 */;
import ShieldIcon from "ShieldIcon" /* 9556 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: id, icon: _modDef9555, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: text });
};