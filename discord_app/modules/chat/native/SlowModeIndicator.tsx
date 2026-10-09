// === Module 11611: SlowModeIndicator ===

// Module 11611 (SlowModeIndicator)
import nativeDefault from "native" /* 587 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4768 */;
import SlowmodeUtils from "SlowmodeUtils" /* 7369 */;
import TimerIcon from "TimerIcon" /* 10728 */;
import noop from "module_19" /* 19 */;
import SlowmodeStore from "SlowmodeStore" /* 7368 */;

require = fn;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5091);
let obj = { container: { alignItems: "center", flexDirection: "row" }, icon: { marginLeft: nativeDefault.space.PX_4 } };
let closure_7 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { marginLeft: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/SlowModeIndicator.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function SlowModeIndicator(channel) {
  const cResult = channel(576).c(18);
  channel = channel.channel;
  const slowmodeType = channel.slowmodeType;
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SlowmodeStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channel.id) {
    if (cResult[2] === slowmodeType) {
      let tmp7 = cResult[3];
    }
    const stateFromStores = tmp(504).useStateFromStores(first, tmp7);
    const tmpResult = tmp(504);
    const canBypassSlowmode = tmp(7369).useCanBypassSlowmode(channel);
    if (channel.hasTypingText) {
      if (!canBypassSlowmode) {
        if (stateFromStores <= 0) {
          if (cResult[7] !== channel.rateLimitPerUser) {
            const fn2 = function f() {
              const obj2 = { key: "CHANNEL_SLOWMODE_INFO", IconComponent: TimerIcon.TimerIcon, content: null };
              const obj = ToastActionCreatorsDefault;
              obj2.content = SlowmodeUtils.getSlowmodeDescription(channel.rateLimitPerUser);
              obj.open(obj2);
            };
            cResult[7] = channel.rateLimitPerUser;
            cResult[8] = fn2;
            let tmp14 = fn2;
          } else {
            tmp14 = cResult[8];
          }
          if (cResult[9] !== null) {
            let obj2 = { lineClamp: 1, allowFontScaling: false, variant: "text-xs/medium", color: "interactive-text-default", children: null };
            const tmp17 = closure_5(tmp(5087).Text, obj2);
            cResult[9] = null;
            cResult[10] = tmp17;
            let tmp15 = tmp17;
          } else {
            tmp15 = cResult[10];
          }
          if (cResult[11] !== tmp4.icon) {
            const obj3 = { style: tmp4.icon, size: "xxs" };
            const tmp20 = closure_5(tmp(10728).TimerIcon, obj3);
            cResult[11] = tmp4.icon;
            cResult[12] = tmp20;
            let tmp18 = tmp20;
          } else {
            tmp18 = cResult[12];
          }
          if (cResult[13] === tmp14) {
            if (cResult[14] === tmp4.container) {
              if (cResult[15] === tmp15) {
                if (cResult[16] === tmp18) {
                  let tmp21 = cResult[17];
                }
                return tmp21;
              }
            }
          }
          const obj4 = { onPress: tmp14, style: tmp4.container, children: null };
          const items1 = [tmp15, tmp18];
          obj4.children = items1;
          const tmp23 = closure_6(tmp(6191).PressableOpacity, obj4);
          cResult[13] = tmp14;
          cResult[14] = tmp4.container;
          cResult[15] = tmp15;
          cResult[16] = tmp18;
          cResult[17] = tmp23;
          tmp21 = tmp23;
        }
      }
    }
    if (cResult[4] === canBypassSlowmode) {
    }
    const tmpResult3 = tmp(7369);
    const slowmodeIndicatorText = tmp(7369).getSlowmodeIndicatorText(stateFromStores, canBypassSlowmode);
    cResult[4] = canBypassSlowmode;
    cResult[5] = stateFromStores;
    cResult[6] = slowmodeIndicatorText;
    const tmpResult4 = tmp(7369);
  }
  const fn = function u() {
    return SlowmodeStore.getSlowmodeCooldownGuess(channel.id, slowmodeType);
  };
  cResult[1] = channel.id;
  cResult[2] = slowmodeType;
  cResult[3] = fn;
  tmp7 = fn;
  let obj = channel(576);
}) : (function SlowModeIndicator(channel) {
  channel = channel.channel;
  const hasTypingText = channel.hasTypingText;
  const slowmodeType = channel.slowmodeType;
  let canBypassSlowmode;
  const tmp = closure_7();
  const items = [canBypassSlowmode];
  const stateFromStores = channel(slowmodeType[7]).useStateFromStores(items, () => SlowmodeStore.getSlowmodeCooldownGuess(channel.id, slowmodeType));
  let obj = channel(slowmodeType[7]);
  canBypassSlowmode = channel(slowmodeType[8]).useCanBypassSlowmode(channel);
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
  const items3 = [closure_5(channel(slowmodeType[11]).Text, { lineClamp: 1, allowFontScaling: false, variant: "text-xs/medium", color: "interactive-text-default", children: memo }), closure_5(channel(slowmodeType[10]).TimerIcon, { style: tmp.icon, size: "xxs" })];
  obj3.children = items3;
  return closure_6(channel(slowmodeType[12]).PressableOpacity, obj3);
}));