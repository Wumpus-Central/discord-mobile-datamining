// === Module 11983: ? ===

// Module 11983
import ThemesDefault from "Themes" /* 576 */;
import importAllResult from "noop" /* 19 */;
import closure_4 from "setCooldown" /* 7687 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
let c3 = importAllResult;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { container: { alignItems: "center", flexDirection: "row" }, icon: null };
obj = { marginLeft: ThemesDefault.space.PX_4 };
obj[1] = obj;
let closure_7 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function SlowModeIndicator(channel) {
  channel = channel.channel;
  const hasTypingText = channel.hasTypingText;
  const slowmodeType = channel.slowmodeType;
  let stateFromStores;
  let canBypassSlowmode;
  const tmp = callback3();
  let obj = channel(slowmodeType[5]);
  const items = [canBypassSlowmode];
  stateFromStores = obj.useStateFromStores(items, () => canBypassSlowmode.getSlowmodeCooldownGuess(channel.id, slowmodeType));
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
    slowmodeIndicatorText = channel(slowmodeType[6]).getSlowmodeIndicatorText(stateFromStores, canBypassSlowmode);
  }, items1);
  const callback = stateFromStores.useCallback(() => {
    let obj = hasTypingText(slowmodeType[7]);
    obj = { key: "CHANNEL_SLOWMODE_INFO", IconComponent: channel(slowmodeType[8]).TimerIcon, content: channel(slowmodeType[6]).getSlowmodeDescription(channel.rateLimitPerUser) };
    obj.open(obj);
  }, items2);
  obj = { onPress: callback, style: tmp.container, children: null };
  const items3 = [callback(channel(slowmodeType[10]).Text, { lineClamp: 1, allowFontScaling: false, variant: "text-xs/medium", color: "interactive-text-default", children: memo }), ];
  obj = { style: tmp.icon, size: "xxs" };
  items3[1] = callback(channel(slowmodeType[8]).TimerIcon, obj);
  obj[2] = items3;
  return callback2(channel(slowmodeType[9]).PressableOpacity, obj);
});
const result = require("set").fileFinishedImporting("modules/chat/native/SlowModeIndicator.tsx");

export default memoResult;