// === Module 17815: NotificationCenterActionButton ===

// Module 17815 (NotificationCenterActionButton)
import util from "util" /* 1128 */;
import IconButton from "IconButton" /* 7957 */;
import _modDef9138 from "module_9138" /* 9138 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/native/NotificationCenterActionButton.tsx");

export default function NotificationCenterActionButton() {
  const obj = {
    variant: "tertiary",
    size: "sm",
    icon: _modDef9138,
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
    icon: _modDef9138,
    onPress() {
      return require("ActionSheetActionCreators").openLazy(require("asyncRequireImpl")(paths[5], paths.paths), "NotificationCenterActionSheet");
    },
    accessibilityLabel: null,
    maxFontSizeMultiplier: 2
  });
};