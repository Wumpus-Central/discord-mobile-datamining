// discord_app/modules/user_settings/defs/native/SidechainCompressionSetting.tsx
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import { Features } from "DesktopSources";
import createToggle from "createToggle";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { trackDeviceChanged } from "../../../../actions/AudioActionCreators.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["/jwMtn"]);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  usePredicate() {
    return _detectH265HardwareDecode.supports(Features.SIDECHAIN_COMPRESSION);
  },
  useValue: function useSidechainCompressionSettingValue() {
    const items = [_detectH265HardwareDecode];
    return initialize /* initialize */.useStateFromStores(items, () => sidechainCompression.getSidechainCompression());
  },
  onValueChange(arg0) {
    return trackDeviceChanged.setSidechainCompression(arg0);
  },
  useDescription() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.zlA23F);
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("DesktopSources").fileFinishedImporting("modules/user_settings/defs/native/SidechainCompressionSetting.tsx");

export default createToggle;