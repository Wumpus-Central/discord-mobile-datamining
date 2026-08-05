// discord_app/modules/user_settings/defs/native/DirectMessageSpamFilterSetting.tsx
import noop from "noop";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.tiCXaH);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useOptions: function useDmSpamFilterSettingOptions() {
    return React.useMemo(() => {
      const dmSpamOptions = callback(table[2]).generateDmSpamOptions();
      return dmSpamOptions.map((value) => ({ value: value.value, label: value.name, subLabel: value.desc }));
    }, []);
  },
  useValue: require("useDerivedDmSpamFilterSettingValue").useDerivedDmSpamFilterSettingValue,
  onValueChange: function onDmSpamFilterSettingValueChange(arg0) {
    const DmSpamFilterV2 = require("../../UserSettings.tsx") /* explicitContentFromProto */.DmSpamFilterV2;
    DmSpamFilterV2.updateSetting(Number(arg0));
  },
  useSearchTerms() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    const items = [intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.H9XOl3), ];
    const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    items[1] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.k4W40P);
    return items;
  }
};
createToggle = createToggle.createRadio(createToggle);
const result = require("mapColorToHighlightColor").fileFinishedImporting("modules/user_settings/defs/native/DirectMessageSpamFilterSetting.tsx");

export default createToggle;