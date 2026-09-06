// discord_app/modules/notification_center/native/NotificationCenterActionButton.tsx
import util from "../../../intl/index.native.tsx";
import IconButton from "../../../design/components/Button/native/IconButton.native.tsx";
import _modDef8673 from "../../../../_runtime/metro/08673__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/native/NotificationCenterActionButton.tsx");

export default function NotificationCenterActionButton() {
  const obj = {
    variant: "tertiary",
    size: "sm",
    icon: _modDef8673,
    onPress() {
      return require("ActionSheetActionCreators").openLazy(
        require("asyncRequireImpl")(paths[5], paths.paths),
        "NotificationCenterActionSheet",
      );
    },
    accessibilityLabel: null,
    maxFontSizeMultiplier: 2,
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t["UKOtz+"]);
  return jsx(IconButton.IconButton, {
    variant: "tertiary",
    size: "sm",
    icon: _modDef8673,
    onPress() {
      return require("ActionSheetActionCreators").openLazy(
        require("asyncRequireImpl")(paths[5], paths.paths),
        "NotificationCenterActionSheet",
      );
    },
    accessibilityLabel: null,
    maxFontSizeMultiplier: 2,
  });
}
