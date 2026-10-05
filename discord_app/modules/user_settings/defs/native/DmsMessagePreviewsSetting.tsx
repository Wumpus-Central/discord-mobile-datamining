// discord_app/modules/user_settings/defs/native/DmsMessagePreviewsSetting.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import intl4 from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import ChannelListLayoutTypes from "../../../main_tabs_v2/ChannelListLayoutTypes.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import useMessagePreviews from "../../../main_tabs_v2/useMessagePreviews.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
const fn = () => {
  const obj = useMessagePreviews;
  return obj.useMessagePreviewSetting();
};
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let intl;
      let intl2;
      let intl3;
      const obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { label: intl.string(intl4.t["8K53DF"]), value: ChannelListLayoutTypes.MessagePreviewTypes.ALL };
        intl = intl4.intl;
        const items = [obj2, ,];
        const obj3 = { label: intl2.string(intl4.t.Gw11zg), value: ChannelListLayoutTypes.MessagePreviewTypes.UNREADS };
        intl2 = intl4.intl;
        items[1] = obj3;
        const obj4 = { label: intl3.string(intl4.t.R2Ok7F), value: ChannelListLayoutTypes.MessagePreviewTypes.NONE };
        intl3 = intl4.intl;
        items[2] = obj4;
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () =>
      react.useMemo(() => {
        let intl;
        let intl2;
        let intl3;
        const obj = { label: intl.string(intl4.t["8K53DF"]), value: ChannelListLayoutTypes.MessagePreviewTypes.ALL };
        intl = intl4.intl;
        const items = [obj, ,];
        const obj2 = { label: intl2.string(intl4.t.Gw11zg), value: ChannelListLayoutTypes.MessagePreviewTypes.UNREADS };
        intl2 = intl4.intl;
        items[1] = obj2;
        const obj3 = { label: intl3.string(intl4.t.R2Ok7F), value: ChannelListLayoutTypes.MessagePreviewTypes.NONE };
        intl3 = intl4.intl;
        items[2] = obj3;
        return items;
      }, []);
let obj = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(intl4.t.OAOUoQ);
  },
  parent: MobileUserSettings.APPEARANCE,
  useValue: fn,
  onValueChange: function onDMsMessagePreviewsValueChange(arg0) {
    const MessagePreviewSetting = UserSettings.MessagePreviewSetting;
    MessagePreviewSetting.updateSetting(arg0);
  },
  useOptions: tmp3,
};
const radio = SettingBuilders.createRadio(obj);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/DmsMessagePreviewsSetting.tsx");

export default radio;
