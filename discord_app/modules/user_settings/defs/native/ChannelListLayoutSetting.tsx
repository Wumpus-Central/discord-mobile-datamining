// discord_app/modules/user_settings/defs/native/ChannelListLayoutSetting.tsx
import util from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import ChannelListLayoutTypes from "../../../main_tabs_v2/ChannelListLayoutTypes.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
    const items = [obj];
    obj = { label: null, value: null };
    const intl2 = util.intl;
    obj.label = intl2.string(util.t["7iegX4"]);
    obj.value = ChannelListLayoutTypes.ChannelListLayoutTypes.COMPACT;
    items[1] = obj;
    return items;
  },
  usePredicate: useChannelListLayoutPredicate,
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ChannelListLayoutSetting.tsx");

export default radio;
export { useChannelListLayoutPredicate };
