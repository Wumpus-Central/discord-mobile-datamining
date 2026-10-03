// === Module 9847: ShowSafetyToast ===

// Module 9847 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4568 */;
import _modDef8922 from "module_8922" /* 8922 */;
import ShieldIcon from "ShieldIcon" /* 8923 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: id, icon: _modDef8922, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: text });
};