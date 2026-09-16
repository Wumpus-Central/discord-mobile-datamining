// discord_app/modules/self_mod/shared/ShowSafetyToast.native.tsx
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import _modDef9544 from "../../../../_runtime/metro/09544__.js";
import ShieldIcon from "../../../design/components/Icon/native/redesign/generated/ShieldIcon.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  const obj = ToastActionCreatorsDefault;
  obj.open({
    key: id,
    icon: _modDef9544,
    IconComponent: ShieldIcon.ShieldIcon,
    iconColor: "text-brand",
    content: text,
  });
};
