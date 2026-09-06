// === Module 11410: ShowSafetyToast ===

// Module 11410 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4259 */;
import _modDef9401 from "module_9401" /* 9401 */;
import ShieldIcon from "ShieldIcon" /* 9402 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  const obj = { key: id, icon: _modDef9401, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: text };
  obj.open(obj);
};