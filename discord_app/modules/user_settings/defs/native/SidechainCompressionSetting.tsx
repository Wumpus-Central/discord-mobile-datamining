// discord_app/modules/user_settings/defs/native/SidechainCompressionSetting.tsx
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import { Features } from "DesktopSources";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["/jwMtn"]);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  usePredicate() {
    return _detectH265HardwareDecode.supports(Features.SIDECHAIN_COMPRESSION);
  },
  useValue: function useSidechainCompressionSettingValue() {
    const items = [_detectH265HardwareDecode];
    return require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => sidechainCompression.getSidechainCompression());
  },
  onValueChange(arg0) {
    return require("../../../../actions/AudioActionCreators.tsx").setSidechainCompression(arg0);
  },
  useDescription() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.zlA23F);
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("DesktopSources").fileFinishedImporting("modules/user_settings/defs/native/SidechainCompressionSetting.tsx");

export default createToggle;