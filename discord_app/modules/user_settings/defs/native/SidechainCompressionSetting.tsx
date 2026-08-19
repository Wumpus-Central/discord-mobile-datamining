// === Module 14604: toggle ===

// Module 14604 (toggle)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import trackDeviceChangedDefault from "trackDeviceChanged" /* 9654 */;
import _detectH265HardwareDecode from "_detectH265HardwareDecode" /* 4497 */;
import { Features } from "DesktopSources" /* 4529 */;
import "createToggle";

require = fn;
let createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["/jwMtn"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.VOICE,
  usePredicate() {
    return closure_3.supports(Features.SIDECHAIN_COMPRESSION);
  },
  useValue: function useSidechainCompressionSettingValue() {
    const items = [closure_3];
    return initialize.useStateFromStores(items, () => sidechainCompression.getSidechainCompression());
  },
  onValueChange(arg0) {
    return trackDeviceChangedDefault.setSidechainCompression(arg0);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.zlA23F);
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/SidechainCompressionSetting.tsx");

export default createToggle;