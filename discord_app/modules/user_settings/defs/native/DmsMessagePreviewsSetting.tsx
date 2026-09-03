// === Module 15156: radio ===

// Module 15156 (radio)
import getSystemLocale from "getSystemLocale" /* 1233 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4166 */;
import useMessagePreview from "useMessagePreview" /* 15157 */;
import closure_2 from "noop" /* 19 */;
import createToggle from "createToggle" /* 11292 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.OAOUoQ);
  },
  parent: require("MobileUserSettings").MobileUserSettings.APPEARANCE,
  useValue: function useDMsMessagePreviewsValue() {
    return useMessagePreview.useMessagePreviewSetting();
  },
  onValueChange: function onDMsMessagePreviewsValueChange(arg0) {
    const MessagePreviewSetting = explicitContentFromProto.MessagePreviewSetting;
    MessagePreviewSetting.updateSetting(arg0);
  },
  useOptions: function useDMsMessagePreviewsOptions() {
    return React.useMemo(() => {
      let obj = { label: null, value: null };
      const intl = callback(1233).intl;
      obj[0] = intl.string(callback(1233).t["8K53DF"]);
      obj[1] = callback(4171).MessagePreviewTypes.ALL;
      const items = [obj, , ];
      obj = { label: null, value: null };
      const intl2 = callback(1233).intl;
      obj[0] = intl2.string(callback(1233).t.Gw11zg);
      obj[1] = callback(4171).MessagePreviewTypes.UNREADS;
      items[1] = obj;
      obj = { label: null, value: null };
      const intl3 = callback(1233).intl;
      obj[0] = intl3.string(callback(1233).t.R2Ok7F);
      obj[1] = callback(4171).MessagePreviewTypes.NONE;
      items[2] = obj;
      return items;
    }, []);
  }
};
createToggle = createToggle.createRadio(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/DmsMessagePreviewsSetting.tsx");

export default createToggle;