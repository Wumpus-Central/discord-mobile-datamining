// === Module 10829: PremiumGiftBackgroundSelect ===

// Module 10829 (PremiumGiftBackgroundSelect)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import timing from "timing" /* 4561 */;
import NativeGiftContext from "NativeGiftContext" /* 10699 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;

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
    tmp2 = closure_3(closure_4.useState(), 2);
    first = tmp2[0];
    closure_0 = first;
    closure_1 = tmp2[1];
    obj = closure_0(closure_2[4]);
    sharedValue = obj.useSharedValue(false);
    closure_2 = sharedValue;
    items = [, ];
    items[0] = first;
    items[1] = sharedValue;
    effect = closure_4.useEffect(() => {
      const result = sharedValue.set(null != first);
    }, items);
    obj2 = closure_0(closure_2[4]);
    class N {
      constructor() {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[8]);
        num = 0;
        if (closure_2.get()) {
          num = 1;
        }
        obj = { opacity: null };
        obj1 = { easing: tmp(tmp2[9]).STANDARD_EASING, duration: 100 };
        obj.opacity = obj.withTiming(num, obj1);
        return obj;
      }
    }
    obj = { STANDARD_EASING: closure_0(closure_2[9]).STANDARD_EASING, withTiming: closure_0(closure_2[8]).withTiming, visibility: sharedValue };
    N.__closure = obj;
    N.__workletHash = 5743780040676;
    N.__initData = closure_10;
    animatedStyle = obj2.useAnimatedStyle(N);
    tmp7 = jsxs;
    tmp8 = Fragment;
    tmp9 = jsx;
    items1 = [, ];
    items1[0] = jsx(closure_1(closure_2[10]), { giftStyle: global.giftStyle, withConsistentHeight: flag });
    obj1 = {
      onContentSizeChange(arg0) {
            if (null == first) {
              closure_1(arg0);
            }
          },
      contentContainerStyle: null,
      style: null,
      horizontal: true,
      showsHorizontalScrollIndicator: false
    };
    items2 = [, ];
    items2[0] = tmp.contentContainer;
    obj2 = null != first;
    tmp10 = closure_8;
    if (obj2) {
      obj2 = first < closure_1(closure_2[7])().width;
    }
    if (obj2) {
      obj2 = { flex: 1 };
    }
    obj3 = { children: null };
    items2[1] = obj2;
    obj1.contentContainerStyle = items2;
    items3 = [, ];
    items3[0] = tmp.scrollView;
    items3[1] = animatedStyle;
    obj1.style = items3;
    items1[1] = tmp9(tmp10, obj1);
    obj3.children = items1;
    return tmp7(tmp8, obj3);
  }
}
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
let closure_8 = ReanimatedRexport.createAnimatedComponent(fn(17).ScrollView);
const createStyles = fn(4560);
let obj = { scrollView: null, contentContainer: null };
obj = { flex: 1, marginTop: nativeDefault.space.PX_24 };
obj.scrollView = obj;
obj.contentContainer = { justifyContent: "center" };
const React7 = createStyles.createStyles(obj);
const __initData = { code: "function PremiumGiftBackgroundSelectTsx1(){const{STANDARD_EASING,withTiming,visibility}=this.__closure;const animationSettings={easing:STANDARD_EASING,duration:100};return{opacity:withTiming(visibility.get()?1:0,animationSettings)};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftBackgroundSelect.tsx");

export default function PremiumGiftBackgroundSelect() {
  let obj = NativeGiftContext;
  const nativeGiftContext = obj.useNativeGiftContext();
  obj = { giftStyle: nativeGiftContext.giftStyle, setGiftStyle: nativeGiftContext.setGiftStyle };
  return hasOwnProperty(GiftBackgroundSelect, obj);
};
export { GiftBackgroundSelect };