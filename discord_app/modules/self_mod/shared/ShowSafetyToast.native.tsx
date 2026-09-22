// === Module 11677: ShowSafetyToast ===

// Module 11677 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4455 */;
import _modDef9521 from "module_9521" /* 9521 */;
import ShieldIcon from "ShieldIcon" /* 9522 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: id, icon: _modDef9521, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: text });
};