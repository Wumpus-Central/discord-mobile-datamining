// === Module 15258: SidechainCompressionSetting ===

// Module 15258 (SidechainCompressionSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9089 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;

require = fn;
const Features = fn(4585).Features;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["/jwMtn"]);
  },
  parent: fn(7975).MobileUserSettings.VOICE,
  usePredicate() {
    return MediaEngineStore.supports(Features.SIDECHAIN_COMPRESSION);
  },
  useValue: function useSidechainCompressionSettingValue() {
    const items = [MediaEngineStore];
    return initialize.useStateFromStores(items, () => sidechainCompression.getSidechainCompression());
  },
  onValueChange(arg0) {
    return AudioActionCreatorsDefault.setSidechainCompression(arg0);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.zlA23F);
  }
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SidechainCompressionSetting.tsx");

export default SettingBuilders;