// discord_app/modules/user_settings/defs/native/VoiceSetting.tsx
import util from "../../../../intl/index.native.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";

require = fn;
const Constants = fn(1074);
({ InputModes: c3, UserSettingsSections } = Constants);
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.K3lovD);
  },
  parent: null,
  IconComponent: fn(10005).MicrophoneIcon,
  useTrailing: function useVoiceSettingTrailing() {
    const items = [MediaEngineStore];
    if (obj.useStateFromStores(items, () => mode.getMode()) === constants.PUSH_TO_TALK) {
      const intl2 = tmp(1114).intl;
      let stringResult = intl2.string(tmp(1114).t.Q8gkVL);
    } else {
      const intl = tmp(1114).intl;
      stringResult = intl.string(tmp(1114).t.cHCEOJ);
    }
    return stringResult;
  },
  screen: {
    route: UserSettingsSections.VOICE,
    getComponent() {
      return require("SettingsVoiceScreen").default;
    },
  },
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t.nuFtHH)];
    return items;
  },
};
SettingBuilders = SettingBuilders.createRoute(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/VoiceSetting.tsx");

export default SettingBuilders;
