// === Module 15756: ShowSpoilersSetting ===

// Module 15756 (ShowSpoilersSetting)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 2020 */;
import noop from "module_19" /* 19 */;

require = fn;
const SpoilerRenderSetting = fn(1074).SpoilerRenderSetting;
const SettingBuilders = fn(11729);
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.QgwmVz);
  },
  parent: fn(8237).MobileUserSettings.CHAT,
  useValue: fn(2020).RenderSpoilers.useSetting,
  onValueChange: function onShowSpoilersChange(arg0) {
    const RenderSpoilers = UserSettings.RenderSpoilers;
    RenderSpoilers.updateSetting(arg0);
  },
  useOptions: function useShowSpoilersOptions() {
    return noop.useMemo(() => {
      const obj = { label: null, value: null };
      const intl = util.intl;
      obj.label = intl.string(util.t["KFH/me"]);
      obj.value = constants.ON_CLICK;
      const items = [obj, , ];
      const obj2 = { label: null, value: null };
      const intl2 = util.intl;
      obj2.label = intl2.string(util.t.Pe1RbL);
      obj2.value = constants.ALWAYS;
      items[1] = obj2;
      const obj3 = { label: null, value: null };
      const intl3 = util.intl;
      obj3.label = intl3.string(util.t.K5VTBE);
      obj3.value = constants.IF_MODERATOR;
      items[2] = obj3;
      return items;
    }, []);
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ShowSpoilersSetting.tsx");

export default radio;