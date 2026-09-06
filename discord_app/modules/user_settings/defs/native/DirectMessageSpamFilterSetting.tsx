// discord_app/modules/user_settings/defs/native/DirectMessageSpamFilterSetting.tsx
import util from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import ModerationUtils from "../../../../utils/ModerationUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.tiCXaH);
  },
  parent: fn(7975).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useOptions: function useDmSpamFilterSettingOptions() {
    return noop.useMemo(() => {
      const dmSpamOptions = ModerationUtils.generateDmSpamOptions();
      return dmSpamOptions.map((value) => ({ value: value.value, label: value.name, subLabel: value.desc }));
    }, []);
  },
  useValue: fn(14839).useDerivedDmSpamFilterSettingValue,
  onValueChange: function onDmSpamFilterSettingValueChange(arg0) {
    const DmSpamFilterV2 = UserSettings.DmSpamFilterV2;
    DmSpamFilterV2.updateSetting(Number(arg0));
  },
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t.H9XOl3)];
    const intl2 = util.intl;
    items[1] = intl2.string(util.t.k4W40P);
    return items;
  },
};
SettingBuilders = SettingBuilders.createRadio(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DirectMessageSpamFilterSetting.tsx");

export default SettingBuilders;
