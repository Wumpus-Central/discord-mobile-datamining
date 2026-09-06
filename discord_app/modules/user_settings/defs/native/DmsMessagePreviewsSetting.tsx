// discord_app/modules/user_settings/defs/native/DmsMessagePreviewsSetting.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import explicitContentFromProto from "../../UserSettings.tsx";
import useMessagePreview from "../../../main_tabs_v2/useMessagePreviews.tsx";
import closure_2 from "../../../../../_runtime/00019_noop.js";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

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
      const intl = callback(1114).intl;
      obj[0] = intl.string(callback(1114).t["8K53DF"]);
      obj[1] = callback(7879).MessagePreviewTypes.ALL;
      const items = [obj, ,];
      obj = { label: null, value: null };
      const intl2 = callback(1114).intl;
      obj[0] = intl2.string(callback(1114).t.Gw11zg);
      obj[1] = callback(7879).MessagePreviewTypes.UNREADS;
      items[1] = obj;
      obj = { label: null, value: null };
      const intl3 = callback(1114).intl;
      obj[0] = intl3.string(callback(1114).t.R2Ok7F);
      obj[1] = callback(7879).MessagePreviewTypes.NONE;
      items[2] = obj;
      return items;
    }, []);
  },
};
createToggle = createToggle.createRadio(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/DmsMessagePreviewsSetting.tsx");

export default createToggle;
