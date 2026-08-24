// === Module 10623: showSafetyToast ===

// Module 10623 (showSafetyToast)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 4094 */;
import ShieldIcon from "ShieldIcon" /* 9834 */;
import registerAssetDefault from "registerAsset" /* 9835 */;

const result = set.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  let obj = dispatcherDefault;
  obj = { key: id, icon: registerAssetDefault, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: text };
  obj.open(obj);
};