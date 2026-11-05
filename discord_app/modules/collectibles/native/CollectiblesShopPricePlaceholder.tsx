// discord_app/modules/collectibles/native/CollectiblesShopPricePlaceholder.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _mod1652 from "../../../../_runtime/metro/01652__.js";
import timing_timing from "../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;
const _modDef1652 = _mod1652;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5143);
const obj2 = {
  skeletonContainer: {
    height: 16,
    flex: 1,
    borderRadius: nativeDefault.radii.xs,
    backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND,
  },
};
let closure_5 = createStyles.createStyles(obj2);
let closure_6 = {
  code: "(function CollectiblesShopPricePlaceholderTsx1(){let[opacity]=this.__closure;return{opacity:opacity.get()};})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopPricePlaceholder.tsx");

export function CollectiblesShopPricePlaceholder(style) {
  _require = undefined;
  const tmp = closure_5();
  const sharedValue = require("../../../../_runtime/metro/01652__.js").useSharedValue(0.3);
  _require = sharedValue;
  items = [sharedValue];
  const effect = noop.useEffect(() => {
    const obj = _mod1652;
    const result = _undefined.set(obj.withRepeat(timing_timing.withTiming(1, { duration: 650 }), -1, true));
  }, items);
  let obj = require("../../../../_runtime/metro/01652__.js");
  const items1 = [closure_6, sharedValue];
  _require = undefined;
  [tmp5, tmp6] = items1;
  class CollectiblesShopPricePlaceholderTsx1 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items2 = [tmp6];
  CollectiblesShopPricePlaceholderTsx1.__closure = items2;
  CollectiblesShopPricePlaceholderTsx1.__workletHash = 9548968657761;
  CollectiblesShopPricePlaceholderTsx1.__initData = tmp5;
  const animatedStyle = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    CollectiblesShopPricePlaceholderTsx1,
  );
  const obj3 = { style: null };
  const items3 = [tmp.skeletonContainer, style.style, animatedStyle];
  obj3.style = items3;
  return jsx(_modDef1652.View, { style: null });
}
