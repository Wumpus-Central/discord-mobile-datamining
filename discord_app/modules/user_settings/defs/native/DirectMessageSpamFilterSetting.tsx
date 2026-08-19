// discord_app/modules/user_settings/defs/native/DirectMessageSpamFilterSetting.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import explicitContentFromProto from "../../UserSettings.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import "createToggle";

require = fn;
let createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.tiCXaH);
  },
  parent: require("MobileUserSettings").MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useOptions: function useDmSpamFilterSettingOptions() {
    return React.useMemo(() => {
      const dmSpamOptions = callback(table[2]).generateDmSpamOptions();
      return dmSpamOptions.map((item, index) => ({ value: item.value, label: item.name, subLabel: item.desc }));
    }, []);
  },
  useValue: require("useDerivedDmSpamFilterSettingValue").useDerivedDmSpamFilterSettingValue,
  onValueChange: function onDmSpamFilterSettingValueChange(arg0) {
    const DmSpamFilterV2 = explicitContentFromProto.DmSpamFilterV2;
    DmSpamFilterV2.updateSetting(Number(arg0));
  },
  useSearchTerms() {
    const intl = getSystemLocale.intl;
    const items = [intl.string(getSystemLocale.t.H9XOl3), ];
    const intl2 = getSystemLocale.intl;
    items[1] = intl2.string(getSystemLocale.t.k4W40P);
    return items;
  }
};
createToggle = createToggle.createRadio(createToggle);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/DirectMessageSpamFilterSetting.tsx");

export default createToggle;