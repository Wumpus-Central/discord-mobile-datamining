// === Module 9658: CollectiblesShopPricePlaceholder ===

// Module 9658 (CollectiblesShopPricePlaceholder)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5372 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;
const _modDef1652 = _mod1652;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5142);
const obj2 = { skeletonContainer: { height: 16, flex: 1, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND } };
let closure_5 = createStyles.createStyles(obj2);
let closure_6 = { code: "(function CollectiblesShopPricePlaceholderTsx1(){let[opacity]=this.__closure;return{opacity:opacity.get()};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopPricePlaceholder.tsx");

export function CollectiblesShopPricePlaceholder(style) {
  _require = undefined;
  const tmp = closure_5();
  const sharedValue = require("module_1652").useSharedValue(0.3);
  _require = sharedValue;
  items = [sharedValue];
  const effect = noop.useEffect(() => {
    const obj = _mod1652;
    const result = _undefined.set(obj.withRepeat(timing_timing.withTiming(1, { duration: 650 }), -1, true));
  }, items);
  let obj = require("module_1652");
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
  const animatedStyle = require("module_1652").useAnimatedStyle(CollectiblesShopPricePlaceholderTsx1);
  const obj3 = { style: null };
  const items3 = [tmp.skeletonContainer, style.style, animatedStyle];
  obj3.style = items3;
  return jsx(_modDef1652.View, { style: null });
}