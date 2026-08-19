// discord_app/modules/user_settings/defs/native/VoiceSetting.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import _detectH265HardwareDecode from "../../../../stores/MediaEngineStore.tsx";
import ME from "../../../../Constants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { KrispLogo } from "../../voice/native/SettingsVoiceScreen.tsx";

require = fn;
({ InputModes: c3, UserSettingsSections } = ME);
{
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.K3lovD);
  },
  parent: null,
  IconComponent: require("MicrophoneIcon").MicrophoneIcon,
  useTrailing: function useVoiceSettingTrailing() {
    const items = [closure_2];
    if (obj.useStateFromStores(items, () => mode.getMode()) === constants.PUSH_TO_TALK) {
      const intl2 = getSystemLocale.intl;
      let stringResult = intl2.string(getSystemLocale.t.Q8gkVL);
    } else {
      const intl = getSystemLocale.intl;
      stringResult = intl.string(getSystemLocale.t.cHCEOJ);
    }
    return stringResult;
  },
  screen: createToggle,
  useSearchTerms() {
    const intl = getSystemLocale.intl;
    const items = [intl.string(getSystemLocale.t.nuFtHH)];
    return items;
  }
};
createToggle = {
  route: UserSettingsSections.VOICE,
  getComponent() {
    return KrispLogo /* KrispLogo */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/VoiceSetting.tsx");

export default createToggle;