// === Module 10420: ShowSafetyToast ===

// Module 10420 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4766 */;
import ShieldIcon from "ShieldIcon" /* 10386 */;
import _modDef10387 from "module_10387" /* 10387 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: id, icon: _modDef10387, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: text });
};