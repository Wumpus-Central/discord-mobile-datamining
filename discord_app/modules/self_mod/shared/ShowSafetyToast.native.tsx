// === Module 10954: ShowSafetyToast ===

// Module 10954 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import _modDef8704 from "module_8704" /* 8704 */;
import ShieldIcon from "ShieldIcon" /* 8705 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: id, icon: _modDef8704, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: text });
};