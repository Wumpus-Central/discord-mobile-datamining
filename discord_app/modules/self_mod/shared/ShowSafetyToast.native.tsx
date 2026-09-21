// === Module 11673: ShowSafetyToast ===

// Module 11673 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4454 */;
import _modDef9515 from "module_9515" /* 9515 */;
import ShieldIcon from "ShieldIcon" /* 9516 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: id, icon: _modDef9515, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: text });
};