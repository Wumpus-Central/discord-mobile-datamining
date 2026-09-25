// === Module 10941: ShowSafetyToast ===

// Module 10941 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4525 */;
import _modDef8696 from "module_8696" /* 8696 */;
import ShieldIcon from "ShieldIcon" /* 8697 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: id, icon: _modDef8696, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: text });
};