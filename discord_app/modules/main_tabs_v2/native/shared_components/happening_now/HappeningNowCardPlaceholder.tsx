// === Module 16069: HappeningNowCardPlaceholder ===

// Module 16069 (HappeningNowCardPlaceholder)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import timing from "timing" /* 4561 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const HAPPENING_NOW_CONTENT_HEIGHT = fn(15294).HAPPENING_NOW_CONTENT_HEIGHT;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { placeholderContainer: { flexDirection: "row", alignItems: "center" }, placeholderIcon: null, placeholderContent: null, placeholderText: null, placeholderTextTop: null, placeholderTextBottom: null };
let size = { height: HAPPENING_NOW_CONTENT_HEIGHT, width: HAPPENING_NOW_CONTENT_HEIGHT, borderRadius: nativeDefault.radii.sm, marginRight: 12, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles.placeholderIcon = size;
createStyles.placeholderContent = { flex: 1 };
createStyles = { height: 12, borderRadius: 5, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles.placeholderText = createStyles;
createStyles.placeholderTextTop = { width: "75%" };
createStyles.placeholderTextBottom = { width: "50%", marginTop: 8 };
let closure_7 = createStyles.createStyles(createStyles);
let closure_8 = { code: "function HappeningNowCardPlaceholderTsx1(){const{opacity,withRepeat,withTiming,endOpacity,duration,Easing}=this.__closure;opacity.set(withRepeat(withTiming(endOpacity,{duration:duration,easing:Easing.ease}),-1,true));}" };
const __initData = { code: "function HappeningNowCardPlaceholderTsx2(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardPlaceholder.tsx");

export const HappeningNowCardPlaceholder = function HappeningNowCardPlaceholder(panelVariant) {
  let flag = panelVariant.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_7();
  _require = 1000;
  importDefault = 0.6;
  let sharedValue;
  let obj = require("ReanimatedRexport");
  sharedValue = obj.useSharedValue(0.3);
  const items = [sharedValue, 1000, 0.6];
  const effect = noop.useEffect(() => {
    const fn = function t() {
      duration(sharedValue[6]);
      const obj = { duration, easing: duration(sharedValue[6]).Easing.ease };
      const result = closure_1_2.set(obj.withRepeat(duration(sharedValue[7]).withTiming(endOpacity, obj), -1, true));
    };
    let obj = { opacity: sharedValue, withRepeat: ReanimatedRexport.withRepeat, withTiming: timing.withTiming, endOpacity, duration, Easing: ReanimatedRexport.Easing };
    fn.__closure = obj;
    fn.__workletHash = 14338250108016;
    fn.__initData = __initData;
    obj.runOnUI(fn)();
  }, items);
  let obj1 = require("ReanimatedRexport");
  let fn = function c() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 17547739379389;
  fn.__initData = __initData;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  let str = "medium";
  if (panelVariant.fullWidth) {
    str = "full";
  }
  obj = { width: str, panelVariant: flag, children: null };
  obj = { style: null, children: null };
  const items1 = [animatedStyle, tmp.placeholderContainer];
  obj.style = items1;
  obj1 = { style: tmp.placeholderIcon };
  const items2 = [closure_5(View, obj1), ];
  const obj2 = { style: tmp.placeholderContent, children: null };
  const obj3 = { style: null };
  const items3 = [, ];
  ({ placeholderText: arr4[0], placeholderTextTop: arr4[1] } = tmp);
  obj3.style = items3;
  const items4 = [closure_5(View, obj3), ];
  const obj4 = { style: null };
  const items5 = [, ];
  ({ placeholderText: arr6[0], placeholderTextBottom: arr6[1] } = tmp);
  obj4.style = items5;
  items4[1] = closure_5(View, obj4);
  obj2.children = items4;
  items2[1] = closure_6(View, obj2);
  obj.children = items2;
  obj.children = closure_6(require("ReanimatedRexport").View, obj);
  return closure_5(require("HappeningNowCard"), obj);
};