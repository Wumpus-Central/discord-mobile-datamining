// === Module 10409: ShowSafetyToast ===

// Module 10409 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4768 */;
import ShieldIcon from "ShieldIcon" /* 10375 */;
import _modDef10376 from "module_10376" /* 10376 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: id, icon: _modDef10376, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: text });
};