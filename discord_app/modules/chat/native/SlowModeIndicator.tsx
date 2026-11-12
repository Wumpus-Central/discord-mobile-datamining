// === Module 14483: SlowModeIndicator ===

// Module 14483 (SlowModeIndicator)
import nativeDefault from "native" /* 575 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5952 */;
import SlowmodeUtils from "SlowmodeUtils" /* 8726 */;
import TimerIcon from "TimerIcon" /* 12459 */;
import noop from "module_19" /* 19 */;
import SlowmodeStore from "SlowmodeStore" /* 8725 */;

require = fn;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5243);
let obj = { container: { alignItems: "center", flexDirection: "row" }, icon: { marginLeft: nativeDefault.space.PX_4 } };
let closure_7 = createStyles.createStyles(obj);
let obj3 = { marginLeft: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/SlowModeIndicator.tsx");

export default noop.memo(function SlowModeIndicator(channel) {
  channel = channel.channel;
  const hasTypingText = channel.hasTypingText;
  const slowmodeType = channel.slowmodeType;
  let canBypassSlowmode;
  const tmp = closure_7();
  items = [canBypassSlowmode];
  const stateFromStores = channel(slowmodeType[5]).useStateFromStores(items, () => SlowmodeStore.getSlowmodeCooldownGuess(channel.id, slowmodeType));
  let obj = channel(slowmodeType[5]);
  canBypassSlowmode = channel(slowmodeType[6]).useCanBypassSlowmode(channel);
  const items1 = [hasTypingText, canBypassSlowmode, stateFromStores];
  const items2 = [channel.rateLimitPerUser];
  const memo = stateFromStores.useMemo(() => {
    if (hasTypingText) {
      if (!canBypassSlowmode) {
        let slowmodeIndicatorText = null;
      }
      return slowmodeIndicatorText;
    }
    slowmodeIndicatorText = SlowmodeUtils.getSlowmodeIndicatorText(stateFromStores, canBypassSlowmode);
  }, items1);
  const callback = stateFromStores.useCallback(() => {
    const obj2 = { text: null, icon: null };
    const obj = ToastActionCreatorsDefault;
    obj2.text = SlowmodeUtils.getSlowmodeDescription(channel.rateLimitPerUser);
    obj2.icon = TimerIcon.TimerIcon;
    obj.open("CHANNEL_SLOWMODE_INFO", obj2);
  }, items2);
  const obj3 = { onPress: callback, style: tmp.container, children: null };
  const items3 = [closure_5(channel(slowmodeType[10]).Text, { lineClamp: 1, allowFontScaling: false, variant: "body-xs/medium", color: "interactive-text-default", children: memo }), closure_5(channel(slowmodeType[8]).TimerIcon, { style: tmp.icon, size: "xxs" })];
  obj3.children = items3;
  return closure_6(channel(slowmodeType[9]).PressableOpacity, obj3);
});