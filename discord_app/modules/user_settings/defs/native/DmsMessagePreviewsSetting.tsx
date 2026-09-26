// === Module 14865: DmsMessagePreviewsSetting ===

// Module 14865 (DmsMessagePreviewsSetting)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 2021 */;
import ChannelListLayoutTypes from "ChannelListLayoutTypes" /* 7304 */;
import useMessagePreviews from "useMessagePreviews" /* 14866 */;
import noop from "module_19" /* 19 */;

require = fn;
const SettingBuilders = fn(11006);
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.OAOUoQ);
  },
  parent: fn(7417).MobileUserSettings.APPEARANCE,
  useValue: function useDMsMessagePreviewsValue() {
    return useMessagePreviews.useMessagePreviewSetting();
  },
  onValueChange: function onDMsMessagePreviewsValueChange(arg0) {
    const MessagePreviewSetting = UserSettings.MessagePreviewSetting;
    MessagePreviewSetting.updateSetting(arg0);
  },
  useOptions: function useDMsMessagePreviewsOptions() {
    return noop.useMemo(() => {
      const obj = { label: null, value: null };
      const intl = util.intl;
      obj.label = intl.string(util.t["8K53DF"]);
      obj.value = ChannelListLayoutTypes.MessagePreviewTypes.ALL;
      const items = [obj, , ];
      const obj2 = { label: null, value: null };
      const intl2 = util.intl;
      obj2.label = intl2.string(util.t.Gw11zg);
      obj2.value = ChannelListLayoutTypes.MessagePreviewTypes.UNREADS;
      items[1] = obj2;
      const obj3 = { label: null, value: null };
      const intl3 = util.intl;
      obj3.label = intl3.string(util.t.R2Ok7F);
      obj3.value = ChannelListLayoutTypes.MessagePreviewTypes.NONE;
      items[2] = obj3;
      return items;
    }, []);
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DmsMessagePreviewsSetting.tsx");

export default radio;