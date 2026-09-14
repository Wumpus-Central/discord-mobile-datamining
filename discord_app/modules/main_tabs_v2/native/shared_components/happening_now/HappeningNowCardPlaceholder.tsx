// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardPlaceholder.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const HAPPENING_NOW_CONTENT_HEIGHT = fn(15380).HAPPENING_NOW_CONTENT_HEIGHT;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4636);
let obj2 = {
  placeholderContainer: { flexDirection: "row", alignItems: "center" },
  placeholderIcon: null,
  placeholderContent: null,
  placeholderText: null,
  placeholderTextTop: null,
  placeholderTextBottom: null,
};
let size = {
  height: HAPPENING_NOW_CONTENT_HEIGHT,
  width: HAPPENING_NOW_CONTENT_HEIGHT,
  borderRadius: nativeDefault.radii.sm,
  marginRight: 12,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.placeholderIcon = size;
obj2.placeholderContent = { flex: 1 };
obj2.placeholderText = { height: 12, borderRadius: 5, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.placeholderTextTop = { width: "75%" };
obj2.placeholderTextBottom = { width: "50%", marginTop: 8 };
let closure_7 = createStyles.createStyles(obj2);
let closure_8 = {
  code: "function HappeningNowCardPlaceholderTsx1(){const{opacity,withRepeat,withTiming,endOpacity,duration,Easing}=this.__closure;opacity.set(withRepeat(withTiming(endOpacity,{duration:duration,easing:Easing.ease}),-1,true));}",
};
const __initData = {
  code: "function HappeningNowCardPlaceholderTsx2(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardPlaceholder.tsx",
);

export const HappeningNowCardPlaceholder = function HappeningNowCardPlaceholder(panelVariant) {
  let flag = panelVariant.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_7();
  _require = 1000;
  importDefault = 0.6;
  let sharedValue;
  sharedValue = require("ReanimatedRexport").useSharedValue(0.3);
  const items = [sharedValue, 1000, 0.6];
  const effect = noop.useEffect(() => {
    const fn = function t() {
      const obj = duration(sharedValue[6]);
      const obj2 = duration(sharedValue[7]);
      const result = closure_1_2.set(
        obj.withRepeat(
          obj2.withTiming(endOpacity, { duration, easing: duration(sharedValue[6]).Easing.ease }),
          -1,
          true,
        ),
      );
    };
    let obj = ReanimatedRexport;
    fn.__closure = {
      opacity: sharedValue,
      withRepeat: ReanimatedRexport.withRepeat,
      withTiming: timing.withTiming,
      endOpacity,
      duration,
      Easing: ReanimatedRexport.Easing,
    };
    fn.__workletHash = 14338250108016;
    fn.__initData = __initData;
    obj.runOnUI(fn)();
  }, items);
  let obj = require("ReanimatedRexport");
  const tmp2 = sharedValue;
  let fn = function c() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 17547739379389;
  fn.__initData = __initData;
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(fn);
  let str = "medium";
  let obj2 = require("ReanimatedRexport");
  const tmp7 = importDefault;
  if (panelVariant.fullWidth) {
    str = "full";
  }
  const obj3 = { width: str, panelVariant: flag, children: null };
  const obj4 = { style: null, children: null };
  const items1 = [animatedStyle, tmp.placeholderContainer];
  obj4.style = items1;
  const items2 = [closure_5(View, { style: tmp.placeholderIcon })];
  const obj6 = { style: tmp.placeholderContent, children: null };
  const obj7 = { style: null };
  const items3 = [,];
  ({ placeholderText: arr4[0], placeholderTextTop: arr4[1] } = tmp);
  obj7.style = items3;
  const items4 = [closure_5(View, obj7)];
  const obj8 = { style: null };
  const items5 = [,];
  ({ placeholderText: arr6[0], placeholderTextBottom: arr6[1] } = tmp);
  obj8.style = items5;
  items4[1] = closure_5(View, obj8);
  obj6.children = items4;
  items2[1] = closure_6(View, obj6);
  obj4.children = items2;
  obj3.children = closure_6(tmp7(tmp2[6]).View, obj4);
  return closure_5(require("HappeningNowCard"), obj3);
};
