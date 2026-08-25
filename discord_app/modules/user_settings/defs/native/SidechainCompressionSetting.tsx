// === Module 14702: toggle ===

// Module 14702 (toggle)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import trackDeviceChangedDefault from "trackDeviceChanged" /* 9303 */;
import closure_3 from "_detectH265HardwareDecode" /* 4431 */;
import { Features } from "DesktopSources" /* 4444 */;
import createToggle from "createToggle" /* 10516 */;

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