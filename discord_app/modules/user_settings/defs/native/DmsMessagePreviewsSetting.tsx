// === Module 15132: DmsMessagePreviewsSetting ===

// Module 15132 (DmsMessagePreviewsSetting)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import UserSettings from "UserSettings" /* 2028 */;
import ChannelListLayoutTypes from "ChannelListLayoutTypes" /* 7514 */;
import useMessagePreviews from "useMessagePreviews" /* 15133 */;
import noop from "module_19" /* 19 */;

require = fn;
let ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
fn = () => useMessagePreviews.useMessagePreviewSetting();
const SettingBuilders = fn(11129);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { label: null, value: null };
    const intl = util.intl;
    obj2.label = intl.string(util.t["8K53DF"]);
    obj2.value = ChannelListLayoutTypes.MessagePreviewTypes.ALL;
    const items = [obj2, , ];
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
}) : (() => noop.useMemo(() => {
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
}, []));
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.OAOUoQ);
  },
  parent: fn(7634).MobileUserSettings.APPEARANCE,
  useValue: fn,
  onValueChange: function onDMsMessagePreviewsValueChange(arg0) {
    const MessagePreviewSetting = UserSettings.MessagePreviewSetting;
    MessagePreviewSetting.updateSetting(arg0);
  },
  useOptions: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(1);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { label: null, value: null };
      const intl = util.intl;
      obj2.label = intl.string(util.t["8K53DF"]);
      obj2.value = ChannelListLayoutTypes.MessagePreviewTypes.ALL;
      const items = [obj2, , ];
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
  }) : (() => noop.useMemo(() => {
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
  }, []))
});
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/DmsMessagePreviewsSetting.tsx");

export default radio;