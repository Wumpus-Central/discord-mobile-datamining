// === Module 9731: GiftBackgroundSelect ===

// Module 9731 (GiftBackgroundSelect)
import ThemesDefault from "Themes" /* 712 */;
import NativeGiftContextProvider from "NativeGiftContextProvider" /* 9758 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;
import importDefaultResult from "module_4120" /* 4120 */;

require = arg1;
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
    obj = require("module_4120");
    sharedValue = obj.useSharedValue(false);
    closure_2 = sharedValue;
    items = [, ];
    items[0] = first;
    items[1] = sharedValue;
    effect = closure_4.useEffect(() => {
      const result = sharedValue.set(null != first);
    }, items);
    obj2 = require("module_4120");
    class N {
      constructor() {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = require("CONFIG_NEVER_ANIMATE_TIMING");
        num = 0;
        if (closure_2.get()) {
          num = 1;
        }
        obj = { opacity: null };
        obj1 = { easing: require("Button").STANDARD_EASING, duration: 100 };
        obj[0] = obj.withTiming(num, obj1);
        return obj;
      }
    }
    obj = { STANDARD_EASING: require("Button").STANDARD_EASING, withTiming: require("CONFIG_NEVER_ANIMATE_TIMING").withTiming, visibility: sharedValue };
    N.__closure = obj;
    N.__workletHash = 5743780040676;
    N.__initData = closure_10;
    animatedStyle = obj2.useAnimatedStyle(N);
    tmp7 = jsxs;
    tmp8 = Fragment;
    tmp9 = jsx;
    items1 = [, ];
    items1[0] = jsx(require("PremiumGiftBackgroundAnimation"), { giftStyle: global.giftStyle, withConsistentHeight: flag });
    obj1 = {
      onContentSizeChange(arg0) {
            if (null == first) {
              callback(arg0);
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
      obj2 = first < require("useWindowDimensions")().width;
    }
    if (obj2) {
      obj2 = { flex: 1 };
    }
    obj3 = { children: null };
    items2[1] = obj2;
    obj1[1] = items2;
    items3 = [, ];
    items3[0] = tmp.scrollView;
    items3[1] = animatedStyle;
    obj1[2] = items3;
    items1[1] = tmp9(tmp10, obj1);
    obj3[0] = items1;
    return tmp7(tmp8, obj3);
  }
}
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
let closure_8 = importDefaultResult.createAnimatedComponent(require("get ActivityIndicator").ScrollView);
let obj = { scrollView: null, contentContainer: null };
obj = { flex: 1, marginTop: ThemesDefault.space.PX_24 };
obj[0] = obj;
obj[1] = { justifyContent: "center" };
let closure_9 = createCacheKey.createStyles(obj);
let closure_10 = { code: "function PremiumGiftBackgroundSelectTsx1(){const{STANDARD_EASING,withTiming,visibility}=this.__closure;const animationSettings={easing:STANDARD_EASING,duration:100};return{opacity:withTiming(visibility.get()?1:0,animationSettings)};}" };
let result = require("set").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftBackgroundSelect.tsx");

export default function PremiumGiftBackgroundSelect() {
  let obj = NativeGiftContextProvider;
  const nativeGiftContext = obj.useNativeGiftContext();
  obj = { giftStyle: nativeGiftContext.giftStyle, setGiftStyle: nativeGiftContext.setGiftStyle };
  return callback2(GiftBackgroundSelect, obj);
};
export { GiftBackgroundSelect };