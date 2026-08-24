// discord_app/modules/user_settings/defs/native/SidechainCompressionSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import trackDeviceChangedDefault from "../../../../actions/AudioActionCreators.tsx";
import closure_3 from "../../../../stores/MediaEngineStore.tsx";
import { Features } from "../../../../../discord_common/js/packages/media-engine/Constants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

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