// === Module 15472: YouBarAvatarDecoAccessibilitySetting ===

// Module 15472 (YouBarAvatarDecoAccessibilitySetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14490 */;
import AccessibilityStore from "AccessibilityStore" /* 4598 */;

require = fn;
fn(11562);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["34XN2f"]);
  },
  parent: fn(8049).MobileUserSettings.ACCESSIBILITY,
  useValue() {
    const items = [AccessibilityStore];
    return initialize.useStateFromStores(items, () => AccessibilityStore.animateYouBarAvatarDeco);
  },
  onValueChange(animateAvatarDeco) {
    const obj = { animateAvatarDeco };
    return obj.setYouBarAnimations(obj);
  }
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/YouBarAvatarDecoAccessibilitySetting.tsx");

export default SettingBuilders;