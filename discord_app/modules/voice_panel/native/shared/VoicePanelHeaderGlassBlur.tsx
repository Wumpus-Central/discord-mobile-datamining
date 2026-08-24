// === Module 11498: StyleSheet ===

// Module 11498 (StyleSheet)
import useThemeDefault from "useTheme" /* 4314 */;
import animatedComponentDefault from "animatedComponent" /* 4729 */;
import setDefault from "set" /* 7228 */;
import setDefault2 from "set" /* 8164 */;
import { StyleSheet } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;
import set from "set" /* 500 */;
import importAllResult from "noop" /* 19 */;

const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { position: "absolute", left: 0, right: 0, bottom: -StyleSheet.hairlineWidth, height: StyleSheet.hairlineWidth };
obj = { height: StyleSheet.hairlineWidth, opacity: 0.15, backgroundColor: "white" };
createCacheKey = { height: StyleSheet.hairlineWidth, opacity: 0.8, backgroundColor: "black" };
let closure_6 = createCacheKey.createStyles({ blur: { position: "absolute", top: 0, left: 0, right: 0 }, strokeContainer: obj, stroke: obj, strokeAlt: createCacheKey, strokeAltLight: { height: StyleSheet.hairlineWidth, opacity: 0.2, backgroundColor: "black" } });
let closure_7 = set.isAndroid();
let closure_8 = { code: "function VoicePanelHeaderGlassBlurTsx1(){const{shown,IS_ANDROID}=this.__closure;return{opacity:shown.get()?IS_ANDROID?0.7:1:0};}" };
let closure_9 = { code: "function VoicePanelHeaderGlassBlurTsx2(){const{withSpring,shown}=this.__closure;return{blurAmount:withSpring(shown.get()?0.3:0)};}" };
let obj2 = { height: StyleSheet.hairlineWidth, opacity: 0.2, backgroundColor: "black" };
const result = set.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelHeaderGlassBlur.tsx");

export default importAllResult.memo(function HeaderGlassBlur(shown) {
  shown = shown.shown;
  ({ blurStyle, style } = shown);
  const tmp = callback();
  let obj = shown(4119);
  const fn = function k() {
    let opacity = 0;
    if (shown.get()) {
      let num2 = 1;
      if (closure_1_7) {
        num2 = 0.7;
      }
      opacity = num2;
    }
    return { opacity };
  };
  obj = { shown, IS_ANDROID: closure_7 };
  fn.__closure = obj;
  fn.__workletHash = 3451055086565;
  fn.__initData = closure_8;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj2 = shown(4119);
  const fn2 = function p() {
    let obj = shown(closure_1_2[6]);
    let num = 0;
    if (shown.get()) {
      num = 0.3;
    }
    obj = { blurAmount: obj.withSpring(num) };
    return obj;
  };
  obj = { withSpring: shown(4749).withSpring, shown };
  fn2.__closure = obj;
  fn2.__workletHash = 5642055202507;
  fn2.__initData = closure_9;
  const animatedProps = obj2.useAnimatedProps(fn2);
  const tmp7 = useThemeDefault();
  obj1 = { style: items, children: null };
  items = [tmp.blur, style, animatedStyle];
  const tmp2 = shown;
  const tmp9 = setDefault2;
  const tmp11 = animatedComponentDefault;
  let str = "light";
  if (obj6.isThemeDark(tmp7)) {
    str = "dark";
  }
  const items1 = [StyleSheet.absoluteFillObject, blurStyle];
  const items2 = [closure_4(tmp11, { blurStyle: "ultra-thin", blurTheme: str, style: items1, animatedProps }), ];
  obj2 = { style: tmp.strokeContainer, children: null };
  let tmp6Result = tmp6(7228);
  const items3 = [closure_4(setDefault, { style: tmp.stroke }), ];
  tmp6Result = tmp6(7228);
  const obj3 = { style: tmp.stroke };
  obj6 = shown(1363);
  const tmp2Result = tmp2(1363);
  items3[1] = closure_4(tmp6Result, { style: tmp2(1363).isThemeDark(tmp7) ? tmp.strokeAlt : tmp.strokeAltLight });
  obj2[1] = items3;
  items2[1] = closure_5(tmp6Result, obj2);
  obj1[1] = items2;
  return closure_5(tmp9, obj1);
});