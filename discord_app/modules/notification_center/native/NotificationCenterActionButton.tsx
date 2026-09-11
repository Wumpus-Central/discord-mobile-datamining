// === Module 16477: NotificationCenterActionButton ===

// Module 16477 (NotificationCenterActionButton)
import util from "util" /* 1114 */;
import IconButton from "IconButton" /* 8172 */;
import _modDef8764 from "module_8764" /* 8764 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/native/NotificationCenterActionButton.tsx");

export default function NotificationCenterActionButton() {
  const obj = {
    variant: "tertiary",
    size: "sm",
    icon: _modDef8764,
    onPress() {
      return require("ActionSheetActionCreators").openLazy(require("asyncRequireImpl")(paths[5], paths.paths), "NotificationCenterActionSheet");
    },
    accessibilityLabel: null,
    maxFontSizeMultiplier: 2
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t["UKOtz+"]);
  return jsx(IconButton.IconButton, {
    variant: "tertiary",
    size: "sm",
    icon: _modDef8764,
    onPress() {
      return require("ActionSheetActionCreators").openLazy(require("asyncRequireImpl")(paths[5], paths.paths), "NotificationCenterActionSheet");
    },
    accessibilityLabel: null,
    maxFontSizeMultiplier: 2
  });
};