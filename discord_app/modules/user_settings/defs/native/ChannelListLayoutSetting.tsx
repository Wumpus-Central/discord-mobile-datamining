// === Module 15058: ChannelListLayoutSetting ===

// Module 15058 (ChannelListLayoutSetting)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 2020 */;
import ChannelListLayoutTypes from "ChannelListLayoutTypes" /* 7299 */;
import SettingsConstants from "SettingsConstants" /* 7412 */;
import SettingBuilders from "SettingBuilders" /* 10993 */;
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
    const obj = { label: null, value: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.T7G4Y0);
    obj.value = ChannelListLayoutTypes.ChannelListLayoutTypes.COZY;
    const items = [obj, ];
    const obj2 = { label: null, value: null };
    const intl2 = util.intl;
    obj2.label = intl2.string(util.t["7iegX4"]);
    obj2.value = ChannelListLayoutTypes.ChannelListLayoutTypes.COMPACT;
    items[1] = obj2;
    return items;
  },
  usePredicate: useChannelListLayoutPredicate
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ChannelListLayoutSetting.tsx");

export default radio;
export { useChannelListLayoutPredicate };