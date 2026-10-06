// discord_app/modules/self_mod/shared/ShowSafetyToast.native.tsx
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import AssetRegistryDefault from "../../../../_runtime/08951_AssetRegistry.js";
import ShieldIcon from "../../../design/components/Icon/native/redesign/generated/ShieldIcon.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  let id;
  let text;
  ({ id, text } = arg0);
  const obj = ToastActionCreatorsDefault;
  const obj2 = {
    key: id,
    icon: AssetRegistryDefault,
    IconComponent: ShieldIcon.ShieldIcon,
    iconColor: "text-brand",
    content: text,
  };
  obj.open(obj2);
};
