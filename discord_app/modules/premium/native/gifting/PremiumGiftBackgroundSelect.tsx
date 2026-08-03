import _slicedToArray from "_slicedToArray";
import noop from "noop";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importDefaultResult from "module_4116";

let c5;
let closure_6;
let error;
const require = arg1;
class GiftBackgroundSelect {
  constructor(arg0) {
    flag = global.withConsistentHeight;
    if (flag === undefined) {
      flag = true;
    }
    useState = undefined;
    c1 = undefined;
    c2 = undefined;
    tmp = createAnimatedComponent();
    tmp2 = _slicedToArray(noop.useState(), 2);
    first = tmp2[0];
    useState = first;
    c1 = tmp2[1];
    obj = require("module_4116");
    sharedValue = obj.useSharedValue(false);
    c2 = sharedValue;
    items = [, ];
    items[0] = first;
    items[1] = sharedValue;
    effect = noop.useEffect(() => {
      const result = sharedValue.set(null != first);
    }, items);
    obj2 = require("module_4116");
    class N {
      constructor() {
        tmp = useState;
        tmp2 = c2;
        obj = require("CONFIG_NEVER_ANIMATE_TIMING");
        num = 0;
        if (c2.get()) {
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
    N.__initData = createAnimatedComponent;
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
    tmp10 = createAnimatedComponent;
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
let closure_8 = require("module_4116").createAnimatedComponent(require("get ActivityIndicator").ScrollView);
let obj = { scrollView: null, contentContainer: null };
obj = { flex: 1, marginTop: require("Themes").space.PX_24 };
obj[0] = obj;
obj[1] = { justifyContent: "center" };
let closure_9 = createCacheKey.createStyles(obj);
let closure_10 = { code: "function PremiumGiftBackgroundSelectTsx1(){const{STANDARD_EASING,withTiming,visibility}=this.__closure;const animationSettings={easing:STANDARD_EASING,duration:100};return{opacity:withTiming(visibility.get()?1:0,animationSettings)};}" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftBackgroundSelect.tsx");

export default function PremiumGiftBackgroundSelect() {
  let obj = require(8990) /* NativeGiftContextProvider */;
  const nativeGiftContext = obj.useNativeGiftContext();
  obj = { giftStyle: nativeGiftContext.giftStyle, setGiftStyle: nativeGiftContext.setGiftStyle };
  return callback2(GiftBackgroundSelect, obj);
};
export { GiftBackgroundSelect };