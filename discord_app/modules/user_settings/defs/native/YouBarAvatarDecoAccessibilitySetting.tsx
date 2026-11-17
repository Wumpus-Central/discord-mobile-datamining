// === Module 18075: YouBarAvatarDecoAccessibilitySetting ===

// Module 18075 (YouBarAvatarDecoAccessibilitySetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1113 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 16924 */;
import AccessibilityStore from "AccessibilityStore" /* 5311 */;

require = fn;
const SettingBuilders = fn(12612);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["34XN2f"]);
  },
  parent: fn(9213).MobileUserSettings.ACCESSIBILITY,
  useValue() {
    items = [AccessibilityStore];
    return initialize.useStateFromStores(items, () => AccessibilityStore.animateYouBarAvatarDeco);
  },
  onValueChange(animateAvatarDeco) {
    return AccessibilityActionCreators.setYouBarAnimations({ animateAvatarDeco });
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/YouBarAvatarDecoAccessibilitySetting.tsx");

export default toggle;