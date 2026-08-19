// === Module 14592: route ===

// Module 14592 (route)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import _detectH265HardwareDecode from "_detectH265HardwareDecode" /* 4497 */;
import ME from "ME" /* 676 */;
import createToggle from "createToggle" /* 10669 */;

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
    return require(14593) /* KrispLogo */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/VoiceSetting.tsx");

export default createToggle;