// === Module 16876: SidechainCompressionSetting ===

// Module 16876 (SidechainCompressionSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1112 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 5996 */;
import MediaEngineStore from "MediaEngineStore" /* 2132 */;

require = fn;
const Features = fn(5855).Features;
const SettingBuilders = fn(11970);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["/jwMtn"]);
  },
  parent: fn(9556).MobileUserSettings.VOICE,
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