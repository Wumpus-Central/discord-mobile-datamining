// === Module 16765: YouBarNameplateAccessibilitySetting ===

// Module 16765 (YouBarNameplateAccessibilitySetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1128 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 15687 */;
import AccessibilityStore from "AccessibilityStore" /* 4972 */;

require = fn;
const SettingBuilders = fn(11209);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.EEms8K);
  },
  parent: fn(8332).MobileUserSettings.ACCESSIBILITY,
  useValue() {
    const items = [AccessibilityStore];
    return initialize.useStateFromStores(items, () => AccessibilityStore.animateYouBarNameplate);
  },
  onValueChange(animateNameplate) {
    return AccessibilityActionCreators.setYouBarAnimations({ animateNameplate });
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/YouBarNameplateAccessibilitySetting.tsx");

export default toggle;