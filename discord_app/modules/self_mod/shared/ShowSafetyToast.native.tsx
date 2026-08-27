// === Module 10964: showSafetyToast ===

// Module 10964 (showSafetyToast)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 4162 */;
import registerAssetDefault from "registerAsset" /* 8358 */;
import ShieldIcon from "ShieldIcon" /* 8359 */;

const result = set.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  let obj = dispatcherDefault;
  obj = { key: id, icon: registerAssetDefault, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: text };
  obj.open(obj);
};