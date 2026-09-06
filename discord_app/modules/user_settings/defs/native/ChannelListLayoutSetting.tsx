// === Module 15531: ChannelListLayoutSetting ===

// Module 15531 (ChannelListLayoutSetting)
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 1935 */;
import ChannelListLayoutTypes from "ChannelListLayoutTypes" /* 7879 */;
import SettingsConstants from "SettingsConstants" /* 7975 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
import size from "module_2" /* 2 */;

function useChannelListLayoutPredicate() {
  return false;
}
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.eY1X1e);
  },
  parent: SettingsConstants.MobileUserSettings.ADVANCED,
  useValue: UserSettings.ChannelListLayoutSetting.useSetting,
  onValueChange: function onChannelListLayoutValueChange(arg0) {
    const ChannelListLayoutSetting = UserSettings.ChannelListLayoutSetting;
    ChannelListLayoutSetting.updateSetting(arg0);
  },
  useOptions: function useChannelListLayoutOptions() {
    let obj = { label: null, value: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.T7G4Y0);
    obj.value = ChannelListLayoutTypes.ChannelListLayoutTypes.COZY;
    const items = [obj, ];
    obj = { label: null, value: null };
    const intl2 = util.intl;
    obj.label = intl2.string(util.t["7iegX4"]);
    obj.value = ChannelListLayoutTypes.ChannelListLayoutTypes.COMPACT;
    items[1] = obj;
    return items;
  },
  usePredicate: useChannelListLayoutPredicate
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ChannelListLayoutSetting.tsx");

export default radio;
export { useChannelListLayoutPredicate };