// === Module 17058: DirectMessageSpamFilterSetting ===

// Module 17058 (DirectMessageSpamFilterSetting)
import util from "util" /* 1113 */;
import UserSettings from "UserSettings" /* 4965 */;
import ModerationUtils from "ModerationUtils" /* 17059 */;
import noop from "module_19" /* 19 */;

require = fn;
const SettingBuilders = fn(11685);
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.tiCXaH);
  },
  parent: fn(8503).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useOptions: function useDmSpamFilterSettingOptions() {
    return noop.useMemo(() => {
      const dmSpamOptions = ModerationUtils.generateDmSpamOptions();
      return dmSpamOptions.map((value) => ({ value: value.value, label: value.name, subLabel: value.desc }));
    }, []);
  },
  useValue: fn(17061).useDerivedDmSpamFilterSettingValue,
  onValueChange: function onDmSpamFilterSettingValueChange(arg0) {
    const DmSpamFilterV2 = UserSettings.DmSpamFilterV2;
    DmSpamFilterV2.updateSetting(Number(arg0));
  },
  useSearchTerms() {
    const intl = util.intl;
    items = [intl.string(util.t.H9XOl3), ];
    const intl2 = util.intl;
    items[1] = intl2.string(util.t.k4W40P);
    return items;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DirectMessageSpamFilterSetting.tsx");

export default radio;