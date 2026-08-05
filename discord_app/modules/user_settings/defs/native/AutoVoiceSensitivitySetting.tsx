// discord_app/modules/user_settings/defs/native/AutoVoiceSensitivitySetting.tsx
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import createToggle from "createToggle";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { trackDeviceChanged } from "../../../../actions/AudioActionCreators.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.Z4oaN0);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  useValue: function useAutoVoiceSensitivitySettingValue() {
    const items = [_detectH265HardwareDecode];
    return initialize /* initialize */.useStateFromStores(items, () => modeOptions.getModeOptions().autoThreshold);
  },
  onValueChange: function onAutoVoiceSensitivitySettingValueChange(autoThreshold) {
    mode = mode.getMode();
    let obj = trackDeviceChanged;
    obj = { autoThreshold };
    obj.setMode(mode, obj);
  },
  useSearchTerms() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    const items = [intl.string(getSystemLocale /* getSystemLocale */.t.nuFtHH)];
    return items;
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/AutoVoiceSensitivitySetting.tsx");

export default createToggle;