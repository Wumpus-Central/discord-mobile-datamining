// === Module 18074: YouBarNameplateAccessibilitySetting ===

// Module 18074 (YouBarNameplateAccessibilitySetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1113 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 16924 */;
import AccessibilityStore from "AccessibilityStore" /* 5311 */;

require = fn;
const SettingBuilders = fn(12612);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.EEms8K);
  },
  parent: fn(9213).MobileUserSettings.ACCESSIBILITY,
  useValue() {
    items = [AccessibilityStore];
    return initialize.useStateFromStores(items, () => AccessibilityStore.animateYouBarNameplate);
  },
  onValueChange(animateNameplate) {
    return AccessibilityActionCreators.setYouBarAnimations({ animateNameplate });
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/YouBarNameplateAccessibilitySetting.tsx");

export default toggle;