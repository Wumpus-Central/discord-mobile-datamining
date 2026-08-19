// discord_app/modules/self_mod/shared/ShowSafetyToast.native.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import dispatcherDefault from "../../toast/native/ToastActionCreators.tsx";
import ShieldIcon from "../../../design/components/Icon/native/redesign/generated/ShieldIcon.tsx";
import registerAssetDefault from "../../../../_runtime/09835_registerAsset.js";

const result = obj132.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  const obj = { key: id, icon: registerAssetDefault, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: text };
  obj.open(obj);
};