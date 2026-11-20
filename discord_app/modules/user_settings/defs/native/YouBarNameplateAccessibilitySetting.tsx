// === Module 16693: YouBarNameplateAccessibilitySetting ===

// Module 16693 (YouBarNameplateAccessibilitySetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1112 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 15524 */;
import AccessibilityStore from "AccessibilityStore" /* 4795 */;

require = fn;
const SettingBuilders = fn(11817);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.EEms8K);
  },
  parent: fn(8592).MobileUserSettings.ACCESSIBILITY,
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