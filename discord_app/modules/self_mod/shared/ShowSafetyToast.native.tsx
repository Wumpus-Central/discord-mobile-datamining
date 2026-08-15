// discord_app/modules/self_mod/shared/ShowSafetyToast.native.tsx
import { registerAsset } from "../../../../_runtime/09835_registerAsset.js";
import { ShieldIcon } from "../../../design/components/Icon/native/redesign/generated/ShieldIcon.tsx";
import { dispatcher } from "../../toast/native/ToastActionCreators.tsx";
const result = require("ShieldIcon").fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  let id;
  let text;
  ({ id, text } = arg0);
  let obj = dispatcher;
  obj = { key: id, icon: registerAsset, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: text };
  obj.open(obj);
};