// === Module 10826: PremiumGiftBackgroundSelect ===

// Module 10826 (PremiumGiftBackgroundSelect)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5377 */;
import NativeGiftContext from "NativeGiftContext" /* 10692 */;
import PremiumGiftBackgroundAnimationDefault from "PremiumGiftBackgroundAnimation" /* 10827 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const module_1652 = _mod1652;

require = fn;
class GiftBackgroundSelect {
  constructor(arg0) {
    flag = global.withConsistentHeight;
    if (flag === undefined) {
      flag = true;
    }
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    tmp = closure_9();
    tmp2 = closure_1;
    tmp3 = closure_2;
    tmp4 = closure_3(closure_4.useState(), 2);
    first = tmp4[0];
    closure_0 = first;
    closure_1 = tmp4[1];
    obj = closure_0(closure_2[4]);
    sharedValue = obj.useSharedValue(false);
    closure_2 = sharedValue;
    items = [, ];
    items[0] = first;
    items[1] = sharedValue;
    effect = closure_4.useEffect(() => {
      const result = _undefined2.set(null != c0);
    }, items);
    obj2 = closure_0(closure_2[4]);
    items1 = [, , , ];
    items1[0] = closure_10;
    items1[1] = closure_0(closure_2[8]).STANDARD_EASING;
    items1[2] = closure_0(closure_2[9]).withTiming;
    items1[3] = sharedValue;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    [tmp8, tmp9, tmp10, tmp11] = items1;
    class PremiumGiftBackgroundSelectTsx1 {
      constructor() {
        tmp = closure_1;
        num = 0;
        if (closure_2.get()) {
          num = 1;
        }
        obj = { opacity: null };
        obj1 = { easing: closure_0, duration: 100 };
        obj.opacity = tmp(num, obj1);
        return obj;
      }
    }
    items2 = [, , ];
    items2[0] = tmp9;
    items2[1] = tmp10;
    items2[2] = tmp11;
    PremiumGiftBackgroundSelectTsx1.__closure = items2;
    PremiumGiftBackgroundSelectTsx1.__workletHash = 9299891037117;
    PremiumGiftBackgroundSelectTsx1.__initData = tmp8;
    animatedStyle = obj2.useAnimatedStyle(PremiumGiftBackgroundSelectTsx1);
    tmp13 = jsxs;
    tmp14 = Fragment;
    tmp15 = jsx;
    items3 = [, ];
    items3[0] = jsx(tmp2(tmp3[10]), { giftStyle: global.giftStyle, withConsistentHeight: flag });
    obj1 = {
      onContentSizeChange(arg0) {
            if (null == c0) {
              _undefined(arg0);
            }
          },
      contentContainerStyle: null,
      style: null,
      horizontal: true,
      showsHorizontalScrollIndicator: false
    };
    items4 = [, ];
    items4[0] = tmp.contentContainer;
    obj6 = null != first;
    tmp16 = closure_8;
    if (obj6) {
      obj6 = first < closure_1(closure_2[7])().width;
    }
    if (obj6) {
      obj6 = { flex: 1 };
    }
    obj7 = { children: null };
    items4[1] = obj6;
    obj1.contentContainerStyle = items4;
    items5 = [, ];
    items5[0] = tmp.scrollView;
    items5[1] = animatedStyle;
    obj1.style = items5;
    items3[1] = tmp15(tmp16, obj1);
    obj7.children = items3;
    return tmp13(tmp14, obj7);
  }
}
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
let closure_8 = module_1652.createAnimatedComponent(fn(17).ScrollView);
const createStyles = fn(5141);
let obj = { scrollView: { flex: 1, marginTop: nativeDefault.space.PX_24 }, contentContainer: { justifyContent: "center" } };
const React7 = createStyles.createStyles(obj);
let closure_10 = { code: "(function PremiumGiftBackgroundSelectTsx1(){let[STANDARD_EASING,withTiming,visibility]=this.__closure;const animationSettings={easing:STANDARD_EASING,duration:100};return{opacity:withTiming(visibility.get()?1:0,animationSettings)};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftBackgroundSelect.tsx");

export default function PremiumGiftBackgroundSelect() {
  const nativeGiftContext = NativeGiftContext.useNativeGiftContext();
  return hasOwnProperty(GiftBackgroundSelect, { giftStyle: nativeGiftContext.giftStyle, setGiftStyle: nativeGiftContext.setGiftStyle });
};
export { GiftBackgroundSelect };