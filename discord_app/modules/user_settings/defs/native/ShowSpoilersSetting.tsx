// === Module 15552: ShowSpoilersSetting ===

// Module 15552 (ShowSpoilersSetting)
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 1935 */;
import noop from "module_19" /* 19 */;

require = fn;
const SpoilerRenderSetting = fn(1074).SpoilerRenderSetting;
fn(11540);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.QgwmVz);
  },
  parent: fn(8027).MobileUserSettings.CHAT,
  useValue: fn(1935).RenderSpoilers.useSetting,
  onValueChange: function onShowSpoilersChange(arg0) {
    const RenderSpoilers = UserSettings.RenderSpoilers;
    RenderSpoilers.updateSetting(arg0);
  },
  useOptions: function useShowSpoilersOptions() {
    return noop.useMemo(() => {
      let obj = { label: null, value: null };
      const intl = util.intl;
      obj.label = intl.string(util.t["KFH/me"]);
      obj.value = constants.ON_CLICK;
      const items = [obj, , ];
      obj = { label: null, value: null };
      const intl2 = util.intl;
      obj.label = intl2.string(util.t.Pe1RbL);
      obj.value = constants.ALWAYS;
      items[1] = obj;
      obj = { label: null, value: null };
      const intl3 = util.intl;
      obj.label = intl3.string(util.t.K5VTBE);
      obj.value = constants.IF_MODERATOR;
      items[2] = obj;
      return items;
    }, []);
  }
};
SettingBuilders = SettingBuilders.createRadio(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ShowSpoilersSetting.tsx");

export default SettingBuilders;