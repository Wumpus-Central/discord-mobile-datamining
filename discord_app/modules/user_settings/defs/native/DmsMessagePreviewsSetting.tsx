// === Module 14860: radio ===

// Module 14860 (radio)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4134 */;
import useMessagePreview from "useMessagePreview" /* 14861 */;
import closure_2 from "noop" /* 19 */;
import createToggle from "createToggle" /* 10988 */;

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
      const intl = callback(1236).intl;
      obj[0] = intl.string(callback(1236).t["8K53DF"]);
      obj[1] = callback(4139).MessagePreviewTypes.ALL;
      const items = [obj, , ];
      obj = { label: null, value: null };
      const intl2 = callback(1236).intl;
      obj[0] = intl2.string(callback(1236).t.Gw11zg);
      obj[1] = callback(4139).MessagePreviewTypes.UNREADS;
      items[1] = obj;
      obj = { label: null, value: null };
      const intl3 = callback(1236).intl;
      obj[0] = intl3.string(callback(1236).t.R2Ok7F);
      obj[1] = callback(4139).MessagePreviewTypes.NONE;
      items[2] = obj;
      return items;
    }, []);
  }
};
createToggle = createToggle.createRadio(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/DmsMessagePreviewsSetting.tsx");

export default createToggle;