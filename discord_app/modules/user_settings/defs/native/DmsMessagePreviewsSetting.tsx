// === Module 16720: DmsMessagePreviewsSetting ===

// Module 16720 (DmsMessagePreviewsSetting)
import util from "util" /* 1112 */;
import UserSettings from "UserSettings" /* 4738 */;
import ChannelListLayoutTypes from "ChannelListLayoutTypes" /* 5574 */;
import useMessagePreviews from "useMessagePreviews" /* 16721 */;
import noop from "module_19" /* 19 */;

require = fn;
const SettingBuilders = fn(11937);
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.OAOUoQ);
  },
  parent: fn(8712).MobileUserSettings.APPEARANCE,
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
      items = [obj, , ];
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