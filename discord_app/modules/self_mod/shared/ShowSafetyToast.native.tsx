// === Module 9860: ShowSafetyToast ===

// Module 9860 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4574 */;
import AssetRegistryDefault from "AssetRegistry" /* 8951 */;
import ShieldIcon from "ShieldIcon" /* 8952 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  let id;
  let text;
  ({ id, text } = arg0);
  const obj = ToastActionCreatorsDefault;
  const obj2 = { key: id, icon: AssetRegistryDefault, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: text };
  obj.open(obj2);
};