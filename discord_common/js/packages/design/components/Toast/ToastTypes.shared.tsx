// discord_common/js/packages/design/components/Toast/ToastTypes.shared.tsx
import size from "../../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "../discord_common/js/packages/design/components/Toast/ToastTypes.shared.tsx",
);

export const isToastEntity = function isToastEntity(icon) {
  let tmp = typeof icon === "object";
  if (typeof icon === "object") {
    tmp = null != icon;
  }
  if (tmp) {
    tmp = "type" in icon;
  }
  if (tmp) {
    tmp = typeof icon.type === "string";
  }
  return tmp;
};
