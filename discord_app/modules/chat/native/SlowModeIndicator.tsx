// discord_app/modules/chat/native/SlowModeIndicator.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import SlowmodeUtils from "../SlowmodeUtils.tsx";
import TimerIcon from "../../../design/components/Icon/native/redesign/generated/TimerIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import SlowmodeStore from "../../../stores/SlowmodeStore.tsx";

require = fn;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let obj = { container: { alignItems: "center", flexDirection: "row" }, icon: null };
obj = { marginLeft: nativeDefault.space.PX_4 };
obj.icon = obj;
let closure_7 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/SlowModeIndicator.tsx");

export default noop.memo(function SlowModeIndicator(channel) {
  channel = channel.channel;
  const hasTypingText = channel.hasTypingText;
  const slowmodeType = channel.slowmodeType;
  let canBypassSlowmode;
  const tmp = closure_7();
  let obj = channel(slowmodeType[5]);
  const items = [canBypassSlowmode];
  const stateFromStores = obj.useStateFromStores(items, () =>
    SlowmodeStore.getSlowmodeCooldownGuess(channel.id, slowmodeType),
  );
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
    const obj = {
      key: "CHANNEL_SLOWMODE_INFO",
      IconComponent: TimerIcon.TimerIcon,
      content: SlowmodeUtils.getSlowmodeDescription(channel.rateLimitPerUser),
    };
    obj.open(obj);
  }, items2);
  obj = { onPress: callback, style: tmp.container, children: null };
  const items3 = [
    closure_5(channel(slowmodeType[10]).Text, {
      lineClamp: 1,
      allowFontScaling: false,
      variant: "text-xs/medium",
      color: "interactive-text-default",
      children: memo,
    }),
  ];
  obj = { style: tmp.icon, size: "xxs" };
  items3[1] = closure_5(channel(slowmodeType[8]).TimerIcon, obj);
  obj.children = items3;
  return closure_6(channel(slowmodeType[9]).PressableOpacity, obj);
});
