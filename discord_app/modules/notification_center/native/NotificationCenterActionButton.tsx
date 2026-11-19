// === Module 18090: NotificationCenterActionButton ===

// Module 18090 (NotificationCenterActionButton)
import util from "util" /* 1113 */;
import _modDef6904 from "module_6904" /* 6904 */;
import IconButton from "IconButton" /* 7472 */;
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
    icon: _modDef6904,
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
    icon: _modDef6904,
    onPress() {
      return require("ActionSheetActionCreators").openLazy(require("asyncRequireImpl")(paths[5], paths.paths), "NotificationCenterActionSheet");
    },
    accessibilityLabel: null,
    maxFontSizeMultiplier: 2
  });
};