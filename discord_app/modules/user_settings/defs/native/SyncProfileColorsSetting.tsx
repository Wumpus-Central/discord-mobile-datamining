// discord_app/modules/user_settings/defs/native/SyncProfileColorsSetting.tsx
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["sSY+mD"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCESSIBILITY,
  useValue: function useProfileColorsSettingValue() {
    const items = [maybeApplyNoTextColorForLightCustomTheme];
    return require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => obj.syncProfileThemeWithUserTheme);
  },
  onValueChange: require("setFontSize").toggleSyncProfileThemeWithUserTheme
};
createToggle = createToggle.createToggle(createToggle);
const result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/SyncProfileColorsSetting.tsx");

export default createToggle;