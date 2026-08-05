// discord_app/modules/user_settings/defs/native/TextAndMediaSyncSetting.tsx
import initialize from "initialize";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["3340dY"]);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue: function useTextAndMediaSyncSettingValue() {
    const items = [initialize];
    return require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => initialize.shouldSync("text"));
  },
  onValueChange: require("saveGuildFolders").setShouldSyncTextSettings
};
createToggle = createToggle.createToggle(createToggle);
const result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/TextAndMediaSyncSetting.tsx");

export default createToggle;