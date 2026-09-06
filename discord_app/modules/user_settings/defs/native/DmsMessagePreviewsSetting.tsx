// === Module 15316: DmsMessagePreviewsSetting ===

// Module 15316 (DmsMessagePreviewsSetting)
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 1935 */;
import ChannelListLayoutTypes from "ChannelListLayoutTypes" /* 7879 */;
import useMessagePreviews from "useMessagePreviews" /* 15317 */;
import noop from "module_19" /* 19 */;

require = fn;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.OAOUoQ);
  },
  parent: fn(7975).MobileUserSettings.APPEARANCE,
  useValue: function useDMsMessagePreviewsValue() {
    return useMessagePreviews.useMessagePreviewSetting();
  },
  onValueChange: function onDMsMessagePreviewsValueChange(arg0) {
    const MessagePreviewSetting = UserSettings.MessagePreviewSetting;
    MessagePreviewSetting.updateSetting(arg0);
  },
  useOptions: function useDMsMessagePreviewsOptions() {
    return noop.useMemo(() => {
      let obj = { label: null, value: null };
      const intl = util.intl;
      obj.label = intl.string(util.t["8K53DF"]);
      obj.value = ChannelListLayoutTypes.MessagePreviewTypes.ALL;
      const items = [obj, , ];
      obj = { label: null, value: null };
      const intl2 = util.intl;
      obj.label = intl2.string(util.t.Gw11zg);
      obj.value = ChannelListLayoutTypes.MessagePreviewTypes.UNREADS;
      items[1] = obj;
      obj = { label: null, value: null };
      const intl3 = util.intl;
      obj.label = intl3.string(util.t.R2Ok7F);
      obj.value = ChannelListLayoutTypes.MessagePreviewTypes.NONE;
      items[2] = obj;
      return items;
    }, []);
  }
};
SettingBuilders = SettingBuilders.createRadio(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DmsMessagePreviewsSetting.tsx");

export default SettingBuilders;