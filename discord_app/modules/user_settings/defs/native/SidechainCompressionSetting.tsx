// discord_app/modules/user_settings/defs/native/SidechainCompressionSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import AudioActionCreatorsDefault from "../../../../actions/AudioActionCreators.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";

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
  },
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SidechainCompressionSetting.tsx");

export default SettingBuilders;
