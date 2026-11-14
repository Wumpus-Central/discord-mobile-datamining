// === Module 14595: SlowModeIndicator ===

// Module 14595 (SlowModeIndicator)
import nativeDefault from "native" /* 575 */;
import SlowmodeUtils from "SlowmodeUtils" /* 8793 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SlowmodeStore from "SlowmodeStore" /* 8792 */;

require = fn;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5306);
let obj = { container: { alignItems: "center", flexDirection: "row" }, icon: { marginLeft: nativeDefault.space.PX_4 } };
let closure_7 = createStyles.createStyles(obj);
const obj3 = { marginLeft: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/SlowModeIndicator.tsx");

export default noop.memo(function SlowModeIndicator(channel) {
  channel = channel.channel;
  const hasTypingText = channel.hasTypingText;
  const slowmodeType = channel.slowmodeType;
  let visible;
  const tmp = closure_7();
  const ref = visible.useRef(null);
  const tmp3 = slowmodeType(visible.useState(false), 2);
  visible = tmp3[0];
  closure_4 = tmp3[1];
  items = [closure_4];
  const stateFromStores = channel(hasTypingText[6]).useStateFromStores(items, () => SlowmodeStore.getSlowmodeCooldownGuess(channel.id, slowmodeType));
  let obj = channel(hasTypingText[6]);
  const canBypassSlowmode = channel(hasTypingText[7]).useCanBypassSlowmode(channel);
  const items1 = [hasTypingText, canBypassSlowmode, stateFromStores];
  const items2 = [channel.rateLimitPerUser, visible];
  const memo = visible.useMemo(() => {
    if (hasTypingText) {
      if (!canBypassSlowmode) {
        let slowmodeIndicatorText = null;
      }
      return slowmodeIndicatorText;
    }
    slowmodeIndicatorText = SlowmodeUtils.getSlowmodeIndicatorText(stateFromStores, canBypassSlowmode);
  }, items1);
  const memo1 = visible.useMemo(() => {
    const obj = {
      label: SlowmodeUtils.getSlowmodeTooltipLabel(channel.rateLimitPerUser),
      position: "top",
      visible,
      onPress() {
        return closure_1_4(false);
      }
    };
    return obj;
  }, items2);
  const obj2 = channel(hasTypingText[7]);
  const tooltip = channel(hasTypingText[8]).useTooltip(ref, memo1);
  const callback = visible.useCallback(() => {
    closure_4((arg0) => !arg0);
  }, []);
  const obj4 = { ref, onPress: callback, style: tmp.container, children: null };
  const items3 = [stateFromStores(channel(hasTypingText[10]).Text, { lineClamp: 1, allowFontScaling: false, variant: "body-xs/medium", color: "interactive-text-default", children: memo }), stateFromStores(channel(hasTypingText[11]).TimerIcon, { style: tmp.icon, size: "xxs" })];
  obj4.children = items3;
  return canBypassSlowmode(channel(hasTypingText[9]).PressableOpacity, obj4);
});