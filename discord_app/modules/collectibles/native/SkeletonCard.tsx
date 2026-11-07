// === Module 9665: SkeletonCard ===

// Module 9665 (SkeletonCard)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5370 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;
const _modDef1652 = _mod1652;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5140);
let closure_5 = createStyles.createStyles((width, height) => {
  const obj = { skeletonCard: null };
  const size = { width, height, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.sm };
  obj.skeletonCard = size;
  return obj;
});
let closure_6 = { code: "(function SkeletonCardTsx1(){let[opacity]=this.__closure;return{opacity:opacity.get()};})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/SkeletonCard.tsx");

export default function _default(width) {
  let COLLECTIBLES_SHOP_CARD_WIDTH = width.width;
  if (COLLECTIBLES_SHOP_CARD_WIDTH === undefined) {
    COLLECTIBLES_SHOP_CARD_WIDTH = require("CollectiblesShopCardV2").COLLECTIBLES_SHOP_CARD_WIDTH;
  }
  let COLLECTIBLES_SHOP_CARD_HEIGHT = width.height;
  _require = undefined;
  if (COLLECTIBLES_SHOP_CARD_HEIGHT == null) {
    COLLECTIBLES_SHOP_CARD_HEIGHT = require("CollectiblesShopCardV2").COLLECTIBLES_SHOP_CARD_HEIGHT;
  }
  const tmp3Result = closure_5(COLLECTIBLES_SHOP_CARD_WIDTH, COLLECTIBLES_SHOP_CARD_HEIGHT);
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
  [tmp10, tmp11] = items1;
  class SkeletonCardTsx1 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items2 = [tmp11];
  SkeletonCardTsx1.__closure = items2;
  SkeletonCardTsx1.__workletHash = 5075628150833;
  SkeletonCardTsx1.__initData = tmp10;
  const animatedStyle = require("module_1652").useAnimatedStyle(SkeletonCardTsx1);
  const obj3 = { style: null };
  const items3 = [tmp3Result.skeletonCard, width.style, animatedStyle];
  obj3.style = items3;
  return jsx(_modDef1652.View, { style: null });
};