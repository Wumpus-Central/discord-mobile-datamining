// discord_app/modules/user_settings/defs/native/DmsMessagePreviewsSetting.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import ChannelListLayoutTypes from "../../../main_tabs_v2/ChannelListLayoutTypes.tsx";
import useMessagePreviews from "../../../main_tabs_v2/useMessagePreviews.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
function useDMsMessagePreviewsValue() {
  return useMessagePreviews.useMessagePreviewSetting();
}
const SettingBuilders = fn(10629);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useDMsMessagePreviewsOptions() {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { label: null, value: null };
        const intl = util.intl;
        obj2.label = intl.string(util.t["8K53DF"]);
        obj2.value = ChannelListLayoutTypes.MessagePreviewTypes.ALL;
        const items = [obj2, ,];
        const obj3 = { label: null, value: null };
        const intl2 = util.intl;
        obj3.label = intl2.string(util.t.Gw11zg);
        obj3.value = ChannelListLayoutTypes.MessagePreviewTypes.UNREADS;
        items[1] = obj3;
        const obj4 = { label: null, value: null };
        const intl3 = util.intl;
        obj4.label = intl3.string(util.t.R2Ok7F);
        obj4.value = ChannelListLayoutTypes.MessagePreviewTypes.NONE;
        items[2] = obj4;
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : function useDMsMessagePreviewsOptions() {
      return noop.useMemo(() => {
        const obj = { label: null, value: null };
        const intl = util.intl;
        obj.label = intl.string(util.t["8K53DF"]);
        obj.value = ChannelListLayoutTypes.MessagePreviewTypes.ALL;
        const items = [obj, ,];
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
    };
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.OAOUoQ);
  },
  parent: fn(7974).MobileUserSettings.APPEARANCE,
  useValue: useDMsMessagePreviewsValue,
  onValueChange: function onDMsMessagePreviewsValueChange(arg0) {
    const MessagePreviewSetting = UserSettings.MessagePreviewSetting;
    MessagePreviewSetting.updateSetting(arg0);
  },
  useOptions: ReactCompilerGating.isReactCompilerEnabled()
    ? function useDMsMessagePreviewsOptions() {
        const cResult = c.c(1);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { label: null, value: null };
          const intl = util.intl;
          obj2.label = intl.string(util.t["8K53DF"]);
          obj2.value = ChannelListLayoutTypes.MessagePreviewTypes.ALL;
          const items = [obj2, ,];
          const obj3 = { label: null, value: null };
          const intl2 = util.intl;
          obj3.label = intl2.string(util.t.Gw11zg);
          obj3.value = ChannelListLayoutTypes.MessagePreviewTypes.UNREADS;
          items[1] = obj3;
          const obj4 = { label: null, value: null };
          const intl3 = util.intl;
          obj4.label = intl3.string(util.t.R2Ok7F);
          obj4.value = ChannelListLayoutTypes.MessagePreviewTypes.NONE;
          items[2] = obj4;
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        return first;
      }
    : function useDMsMessagePreviewsOptions() {
        return noop.useMemo(() => {
          const obj = { label: null, value: null };
          const intl = util.intl;
          obj.label = intl.string(util.t["8K53DF"]);
          obj.value = ChannelListLayoutTypes.MessagePreviewTypes.ALL;
          const items = [obj, ,];
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
      },
});
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/DmsMessagePreviewsSetting.tsx");

export default radio;
