// === Module 11442: ShowSafetyToast ===

// Module 11442 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4272 */;
import _modDef9433 from "module_9433" /* 9433 */;
import ShieldIcon from "ShieldIcon" /* 9434 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  const obj = { key: id, icon: _modDef9433, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: text };
  obj.open(obj);
};