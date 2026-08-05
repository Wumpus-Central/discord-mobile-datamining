// discord_app/modules/user_settings/defs/native/DmsMessagePreviewsSetting.tsx
import noop from "noop";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.OAOUoQ);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  useValue: function useDMsMessagePreviewsValue() {
    return require("../../../main_tabs_v2/useMessagePreviews.tsx") /* useMessagePreview */.useMessagePreviewSetting();
  },
  onValueChange: function onDMsMessagePreviewsValueChange(arg0) {
    const MessagePreviewSetting = require("../../UserSettings.tsx") /* explicitContentFromProto */.MessagePreviewSetting;
    MessagePreviewSetting.updateSetting(arg0);
  },
  useOptions: function useDMsMessagePreviewsOptions() {
    return React.useMemo(() => {
      let obj = { label: null, value: null };
      const intl = callback(1236).intl;
      obj[0] = intl.string(callback(1236).t["8K53DF"]);
      obj[1] = callback(3963).MessagePreviewTypes.ALL;
      const items = [obj, , ];
      obj = { label: null, value: null };
      const intl2 = callback(1236).intl;
      obj[0] = intl2.string(callback(1236).t.Gw11zg);
      obj[1] = callback(3963).MessagePreviewTypes.UNREADS;
      items[1] = obj;
      obj = { label: null, value: null };
      const intl3 = callback(1236).intl;
      obj[0] = intl3.string(callback(1236).t.R2Ok7F);
      obj[1] = callback(3963).MessagePreviewTypes.NONE;
      items[2] = obj;
      return items;
    }, []);
  }
};
createToggle = createToggle.createRadio(createToggle);
const result = require("useMessagePreview").fileFinishedImporting("modules/user_settings/defs/native/DmsMessagePreviewsSetting.tsx");

export default createToggle;