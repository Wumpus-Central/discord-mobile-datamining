// === Module 18183: useCardLayout ===

// Module 18183 (useCardLayout)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/hooks/useCardLayout.tsx");

export function useCardLayout() {
  _require = noop.useRef(null);
  const callback = noop.useCallback((getNativeScrollRef) => {
    let nativeScrollRef = getNativeScrollRef;
    if (null != getNativeScrollRef) {
      nativeScrollRef = getNativeScrollRef;
      if ("getNativeScrollRef" in getNativeScrollRef) {
        nativeScrollRef = getNativeScrollRef.getNativeScrollRef();
      }
    }
    closure_0.current = nativeScrollRef;
  }, []);
  [tmp3, dependencyMap] = noop.useState(() => ref(1493).getWindowDimensions().width);
  const layoutEffect = noop.useLayoutEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.measureInWindow((arg0, arg1, arg2) => {
        if (arg2 > 0) {
          dependencyMap(arg2);
        }
      });
    }
  }, []);
  const callback1 = noop.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    if (layout.width > 0) {
      dependencyMap(layout.width);
    }
  }, []);
  let num = 1;
  if (tmp3 >= 320) {
    num = 2;
  }
  if (num < 2) {
    const obj2 = { columns: num, cardWidth: "r", rowWidth: "isArray", ref: callback, onLayout: callback1 };
    return obj2;
  } else {
    let num2 = 2;
    if (tmp3 >= 768) {
      num2 = 4;
    }
    const result = require("CollectiblesShopCardV2").COLLECTIBLES_SHOP_CARD_WIDTH * num;
    const diff = num - 1;
    const diff1 = tmp3 - (result + require("CollectiblesShopCardV2").COLLECTIBLES_SHOP_CARD_GAP * diff);
    if (diff1 < 2 * require("CollectiblesShopCardV2").COLLECTIBLES_SHOP_CARD_GAP) {
      const _Math = Math;
      let bound = Math.max(4, diff1);
    } else {
      bound = 2 * tmp6(9540).COLLECTIBLES_SHOP_CARD_GAP;
    }
    const result1 = (tmp3 - (bound + tmp6(9540).COLLECTIBLES_SHOP_CARD_GAP * diff)) / num;
    let tmp15 = tmp6;
    let tmp16 = result1;
    let tmp17 = num;
    let tmp19 = tmp6;
    if (result1 > require("CollectiblesShopCardV2").COLLECTIBLES_SHOP_CARD_MAX_WIDTH) {
      let tmp24 = num;
      tmp15 = tmp6;
      tmp16 = result1;
      tmp19 = tmp6;
      tmp17 = num;
      if (num < num2) {
        const sum = tmp24 + 1;
        const result2 = (tmp3 - (bound + require("CollectiblesShopCardV2").COLLECTIBLES_SHOP_CARD_GAP * (sum - 1))) / sum;
        tmp15 = _require;
        tmp16 = result2;
        tmp17 = sum;
        tmp19 = _require;
        while (result2 > require("CollectiblesShopCardV2").COLLECTIBLES_SHOP_CARD_MAX_WIDTH) {
          tmp24 = sum;
          tmp15 = tmp21;
          tmp16 = result2;
          tmp19 = tmp21;
          tmp17 = sum;
          if (sum >= num2) {
            break;
          }
        }
      }
    }
    const _Math2 = Math;
    const _Math3 = Math;
    const bound1 = Math.max(tmp16, tmp19(9540).COLLECTIBLES_SHOP_CARD_WIDTH);
    const bound2 = Math.min(bound1, tmp19(9540).COLLECTIBLES_SHOP_CARD_MAX_WIDTH);
    const result3 = bound2 * tmp17;
    const diff2 = tmp17 - 1;
    if (result3 + (bound + tmp15(9540).COLLECTIBLES_SHOP_CARD_GAP * diff2) > tmp3) {
      if (1 < tmp17) {
        const obj3 = { columns: 1, cardWidth: "r", rowWidth: "channel", ref: callback, onLayout: callback1 };
        let obj = obj3;
      }
      return obj;
    }
    obj = { columns: tmp17, cardWidth: bound2, rowWidth: null, ref: null, onLayout: null };
    const result4 = bound2 * tmp17;
    obj.rowWidth = result4 + tmp19(9540).COLLECTIBLES_SHOP_CARD_GAP * diff2;
    obj.ref = callback;
    obj.onLayout = callback1;
  }
  const tmp2 = _slicedToArray(noop.useState(() => ref(1493).getWindowDimensions().width), 2);
}