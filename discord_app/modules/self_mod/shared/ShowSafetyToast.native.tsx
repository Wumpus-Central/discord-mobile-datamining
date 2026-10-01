// === Module 11163: ShowSafetyToast ===

// Module 11163 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4557 */;
import _modDef8895 from "module_8895" /* 8895 */;
import ShieldIcon from "ShieldIcon" /* 8896 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: id, icon: _modDef8895, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: text });
};