// === Module 15083: toggle ===

// Module 15083 (toggle)
import initialize from "initialize" /* 586 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import trackDeviceChangedDefault from "trackDeviceChanged" /* 9803 */;
import closure_3 from "_detectH265HardwareDecode" /* 4529 */;
import { Features } from "DesktopSources" /* 4542 */;
import createToggle from "createToggle" /* 11288 */;

require = arg1;
createToggle = {
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
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/SidechainCompressionSetting.tsx");

export default createToggle;