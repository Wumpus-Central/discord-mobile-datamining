// discord_app/modules/self_mod/shared/ShowSafetyToast.native.tsx
import set from "../../../../_runtime/00002_set.js";
import dispatcherDefault from "../../toast/native/ToastActionCreators.tsx";
import registerAssetDefault from "../../../../_runtime/08439_registerAsset.js";
import ShieldIcon from "../../../design/components/Icon/native/redesign/generated/ShieldIcon.tsx";

const result = set.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  let obj = dispatcherDefault;
  obj = {
    key: id,
    icon: registerAssetDefault,
    IconComponent: ShieldIcon.ShieldIcon,
    iconColor: "text-brand",
    content: text,
  };
  obj.open(obj);
};
