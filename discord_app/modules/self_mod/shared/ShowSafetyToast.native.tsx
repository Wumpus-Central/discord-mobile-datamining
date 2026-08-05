// discord_app/modules/self_mod/shared/ShowSafetyToast.native.tsx
const result = require("ShieldIcon").fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  let id;
  let text;
  ({ id, text } = arg0);
  let obj = require("../../toast/native/ToastActionCreators.tsx");
  obj = { key: id, icon: require("../../../../_runtime/10147_registerAsset.js"), IconComponent: require("../../../design/components/Icon/native/redesign/generated/ShieldIcon.tsx") /* ShieldIcon */.ShieldIcon, iconColor: "text-brand", content: text };
  obj.open(obj);
};