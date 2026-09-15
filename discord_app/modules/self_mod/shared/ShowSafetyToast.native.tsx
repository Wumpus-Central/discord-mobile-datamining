// === Module 11548: ShowSafetyToast ===

// Module 11548 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4338 */;
import _modDef9533 from "module_9533" /* 9533 */;
import ShieldIcon from "ShieldIcon" /* 9534 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: id, icon: _modDef9533, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: text });
};