import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { KrispLogo } from "../../voice/native/SettingsVoiceScreen.tsx";
// discord_app/modules/user_settings/defs/native/VoiceSetting.tsx
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import ME from "ME";
import createToggle from "createToggle";

let UserSettingsSections;
let c3;
const require = arg1;
({ InputModes: c3, UserSettingsSections } = ME);
createToggle = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.K3lovD);
  },
  parent: null,
  IconComponent: require("MicrophoneIcon").MicrophoneIcon,
  useTrailing: function useVoiceSettingTrailing() {
    const items = [_detectH265HardwareDecode];
    if (obj.useStateFromStores(items, () => mode.getMode()) === constants.PUSH_TO_TALK) {
      const intl2 = tmp(1236).intl;
      let stringResult = intl2.string(tmp(1236).t.Q8gkVL);
    } else {
      const intl = tmp(1236).intl;
      stringResult = intl.string(tmp(1236).t.cHCEOJ);
    }
    return stringResult;
  },
  screen: createToggle,
  useSearchTerms() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    const items = [intl.string(getSystemLocale /* getSystemLocale */.t.nuFtHH)];
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
const result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/VoiceSetting.tsx");

export default createToggle;