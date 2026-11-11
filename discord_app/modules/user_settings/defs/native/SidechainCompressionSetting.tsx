// === Module 17762: SidechainCompressionSetting ===

// Module 17762 (SidechainCompressionSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1113 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 6162 */;
import MediaEngineStore from "MediaEngineStore" /* 2130 */;

require = fn;
const Features = fn(6012).Features;
const SettingBuilders = fn(12317);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["/jwMtn"]);
  },
  parent: fn(9136).MobileUserSettings.VOICE,
  usePredicate() {
    return MediaEngineStore.supports(Features.SIDECHAIN_COMPRESSION);
  },
  useValue: function useSidechainCompressionSettingValue() {
    items = [MediaEngineStore];
    return initialize.useStateFromStores(items, () => sidechainCompression.getSidechainCompression());
  },
  onValueChange(arg0) {
    return AudioActionCreatorsDefault.setSidechainCompression(arg0);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.zlA23F);
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SidechainCompressionSetting.tsx");

export default toggle;