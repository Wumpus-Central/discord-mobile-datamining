// === Module 15084: HappeningNowCardPlaceholder ===

// Module 15084 (HappeningNowCardPlaceholder)
import noop from "noop";
import { View } from "get ActivityIndicator";
import { HAPPENING_NOW_CONTENT_HEIGHT } from "HAPPENING_NOW_PANELS_CONTAINER_PADDING";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { placeholderContainer: { flexDirection: "row", alignItems: "center" }, placeholderIcon: null, placeholderContent: null, placeholderText: null, placeholderTextTop: null, placeholderTextBottom: null };
createCacheKey = { height: HAPPENING_NOW_CONTENT_HEIGHT, width: HAPPENING_NOW_CONTENT_HEIGHT, borderRadius: require("Themes").radii.sm, marginRight: 12, backgroundColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { flex: 1 };
createCacheKey[3] = { height: 12, borderRadius: 5, backgroundColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey[4] = { width: "75%" };
createCacheKey[5] = { width: "50%", marginTop: 8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_8 = { code: "function HappeningNowCardPlaceholderTsx1(){const{opacity,withRepeat,withTiming,endOpacity,duration,Easing}=this.__closure;opacity.set(withRepeat(withTiming(endOpacity,{duration:duration,easing:Easing.ease}),-1,true));}" };
let closure_9 = { code: "function HappeningNowCardPlaceholderTsx2(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let obj1 = { height: 12, borderRadius: 5, backgroundColor: require("Themes").colors.BORDER_SUBTLE };
let result = require("HAPPENING_NOW_PANELS_CONTAINER_PADDING").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardPlaceholder.tsx");

export const HappeningNowCardPlaceholder = function HappeningNowCardPlaceholder(panelVariant) {
  let flag = panelVariant.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = createCacheKey();
  const _require = 1000;
  const importDefault = 0.6;
  let sharedValue;
  let obj = _require(sharedValue[6]);
  sharedValue = obj.useSharedValue(0.3);
  const items = [sharedValue, 1000, 0.6];
  const effect = React.useEffect(() => {
    let obj = v1000(sharedValue[6]);
    const fn = function t() {
      let obj = outer1_0(outer1_2[6]);
      obj = { duration: closure_0, easing: outer1_0(outer1_2[6]).Easing.ease };
      const result = closure_2.set(obj.withRepeat(outer1_0(outer1_2[7]).withTiming(closure_1, obj), -1, true));
    };
    obj = { opacity: sharedValue, withRepeat: v1000(sharedValue[6]).withRepeat, withTiming: v1000(sharedValue[7]).withTiming, endOpacity: c1, duration: v1000, Easing: v1000(sharedValue[6]).Easing };
    fn.__closure = obj;
    fn.__workletHash = 14338250108016;
    fn.__initData = outer1_8;
    obj.runOnUI(fn)();
  }, items);
  let obj1 = _require(sharedValue[6]);
  let fn = function c() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 17547739379389;
  fn.__initData = closure_9;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  let str = "medium";
  if (panelVariant.fullWidth) {
    str = "full";
  }
  obj = { width: str, panelVariant: flag, children: null };
  obj = { style: items1, children: null };
  items1 = [animatedStyle, tmp.placeholderContainer];
  obj1 = { style: tmp.placeholderIcon };
  const items2 = [closure_5(View, obj1), ];
  const obj2 = { style: tmp.placeholderContent, children: null };
  const items3 = [, ];
  ({ placeholderText: arr4[0], placeholderTextTop: arr4[1] } = tmp);
  const items4 = [closure_5(View, { style: items3 }), ];
  const items5 = [, ];
  ({ placeholderText: arr6[0], placeholderTextBottom: arr6[1] } = tmp);
  items4[1] = closure_5(View, { style: items5 });
  obj2[1] = items4;
  items2[1] = callback(View, obj2);
  obj[1] = items2;
  obj[2] = callback(importDefault(sharedValue[6]).View, obj);
  return closure_5(importDefault(sharedValue[8]), obj);
};