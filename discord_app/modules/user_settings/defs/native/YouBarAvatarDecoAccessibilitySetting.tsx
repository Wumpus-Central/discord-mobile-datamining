// === Module 16761: YouBarAvatarDecoAccessibilitySetting ===

// Module 16761 (YouBarAvatarDecoAccessibilitySetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1128 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 15682 */;
import AccessibilityStore from "AccessibilityStore" /* 4972 */;

require = fn;
const SettingBuilders = fn(11205);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["34XN2f"]);
  },
  parent: fn(8332).MobileUserSettings.ACCESSIBILITY,
  useValue() {
    const items = [AccessibilityStore];
    return initialize.useStateFromStores(items, () => AccessibilityStore.animateYouBarAvatarDeco);
  },
  onValueChange(animateAvatarDeco) {
    return AccessibilityActionCreators.setYouBarAnimations({ animateAvatarDeco });
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/YouBarAvatarDecoAccessibilitySetting.tsx");

export default toggle;