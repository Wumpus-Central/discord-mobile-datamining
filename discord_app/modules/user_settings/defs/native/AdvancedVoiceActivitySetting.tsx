// discord_app/modules/user_settings/defs/native/AdvancedVoiceActivitySetting.tsx
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.BbESsg);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  useValue: function useAdvancedVoiceActivitySettingValue() {
    const items = [_detectH265HardwareDecode];
    return require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => modeOptions.getModeOptions().vadUseKrisp);
  },
  onValueChange: function onAdvancedVoiceActivitySettingValueChange(vadUseKrisp) {
    mode = mode.getMode();
    let obj = require("../../../../actions/AudioActionCreators.tsx");
    obj = { vadUseKrisp };
    obj.setMode(mode, obj);
  },
  useDescription: function useAdvancedVoiceActivitySettingDescription() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.LoOB1F);
  },
  usePredicate: function useHasAdvancedVoiceActivitySetting() {
    const items = [_detectH265HardwareDecode];
    return require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => advancedVoiceActivitySupported.isAdvancedVoiceActivitySupported());
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/AdvancedVoiceActivitySetting.tsx");

export default createToggle;