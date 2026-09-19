// === Module 12234: SlowModeIndicator ===

// Module 12234 (SlowModeIndicator)
import nativeDefault from "native" /* 576 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4454 */;
import SlowmodeUtils from "SlowmodeUtils" /* 7922 */;
import TimerIcon from "TimerIcon" /* 11854 */;
import noop from "module_19" /* 19 */;
import SlowmodeStore from "SlowmodeStore" /* 7921 */;

require = fn;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4756);
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
  const items = [canBypassSlowmode];
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
    const obj2 = { key: "CHANNEL_SLOWMODE_INFO", IconComponent: TimerIcon.TimerIcon, content: null };
    const obj = ToastActionCreatorsDefault;
    obj2.content = SlowmodeUtils.getSlowmodeDescription(channel.rateLimitPerUser);
    obj.open(obj2);
  }, items2);
  const obj3 = { onPress: callback, style: tmp.container, children: null };
  const items3 = [closure_5(channel(slowmodeType[10]).Text, { lineClamp: 1, allowFontScaling: false, variant: "text-xs/medium", color: "interactive-text-default", children: memo }), closure_5(channel(slowmodeType[8]).TimerIcon, { style: tmp.icon, size: "xxs" })];
  obj3.children = items3;
  return closure_6(channel(slowmodeType[9]).PressableOpacity, obj3);
});