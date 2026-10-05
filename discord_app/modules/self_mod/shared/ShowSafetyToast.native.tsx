// === Module 9847: ShowSafetyToast ===

// Module 9847 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4568 */;
import AssetRegistryDefault from "AssetRegistry" /* 8922 */;
import ShieldIcon from "ShieldIcon" /* 8923 */;
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