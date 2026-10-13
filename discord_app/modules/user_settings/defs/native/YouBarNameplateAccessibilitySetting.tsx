// === Module 16019: YouBarNameplateAccessibilitySetting ===

// Module 16019 (YouBarNameplateAccessibilitySetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1126 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 15014 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;

require = fn;
const SettingBuilders = fn(10663);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.EEms8K);
  },
  parent: fn(7993).MobileUserSettings.ACCESSIBILITY,
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