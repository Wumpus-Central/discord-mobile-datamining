// discord_app/modules/user_settings/defs/native/EchoCancellationSetting.tsx
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.iWTwu6);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  useValue: function useEchoCancellationSettingValue() {
    const items = [_detectH265HardwareDecode];
    return require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => echoCancellation.getEchoCancellation());
  },
  onValueChange: require("handleAutomaticGainControlChange").handleEchoCancellationChange
};
createToggle = createToggle.createToggle(createToggle);
const result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/EchoCancellationSetting.tsx");

export default createToggle;