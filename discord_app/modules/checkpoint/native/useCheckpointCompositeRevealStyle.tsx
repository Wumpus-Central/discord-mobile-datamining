// discord_app/modules/checkpoint/native/useCheckpointCompositeRevealStyle.tsx
import timing_timing from "../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const CheckpointTransitionConstants = fn(12431);
({ CHECKPOINT_COMPOSITE_REVEAL_DURATION_MS: c3, CHECKPOINT_COMPOSITE_REVEAL_EASING } = CheckpointTransitionConstants);
const Easing = fn(1653).Easing;
let items = [...CHECKPOINT_COMPOSITE_REVEAL_EASING];
let closure_4 = Easing.bezier.apply(items);
let closure_5 = {
  code: "(function useCheckpointCompositeRevealStyleTsx1(){let[opacity]=this.__closure;return{opacity:opacity.get()};})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointCompositeRevealStyle.tsx");

export default function useCheckpointCompositeRevealStyle(status) {
  let sharedValue;
  noop = undefined;
  _require = tmp;
  let num = 0;
  if ("loading" !== status.status) {
    num = 1;
  }
  sharedValue = require("../../../../_runtime/metro/01653__.js").useSharedValue(num);
  noop = noop.useRef(tmp);
  items = ["loading" !== status.status, sharedValue];
  const effect = noop.useEffect(() => {
    if (ref.current !== current) {
      ref.current = current;
      let num = 0;
      if (current) {
        const obj2 = { duration, easing };
        num = timing_timing.withTiming(1, obj2);
      }
      const result = sharedValue.set(num);
    }
  }, items);
  let obj = require("../../../../_runtime/metro/01653__.js");
  const items1 = [closure_5, sharedValue];
  _require = undefined;
  [tmp6, tmp7] = items1;
  function useCheckpointCompositeRevealStyleTsx1() {
    return { opacity: _undefined.get() };
  }
  const items2 = [tmp7];
  useCheckpointCompositeRevealStyleTsx1.__closure = items2;
  useCheckpointCompositeRevealStyleTsx1.__workletHash = 13112346209478;
  useCheckpointCompositeRevealStyleTsx1.__initData = tmp6;
  return require("../../../../_runtime/metro/01653__.js").useAnimatedStyle(useCheckpointCompositeRevealStyleTsx1);
}
