// === Module 11449: StyleSheet ===

// Module 11449 (StyleSheet)
import useThemeDefault from "useTheme" /* 4310 */;
import animatedComponentDefault from "animatedComponent" /* 4724 */;
import obj132Default from "obj132" /* 7190 */;
import obj132Default2 from "obj132" /* 8125 */;
import { StyleSheet } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";
import obj132 from "obj132" /* 500 */;
import importAllResult from "noop" /* 19 */;

const require = fn;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { height: StyleSheet.hairlineWidth, opacity: 0.15, backgroundColor: "white" };
const createCacheKey = { height: StyleSheet.hairlineWidth, opacity: 0.8, backgroundColor: "black" };
let closure_6 = createCacheKey.createStyles({ blur: { position: "absolute", top: 0, left: 0, right: 0 }, strokeContainer: obj, stroke: obj, strokeAlt: createCacheKey, strokeAltLight: { height: StyleSheet.hairlineWidth, opacity: 0.2, backgroundColor: "black" } });
let closure_7 = obj132.isAndroid();
let closure_8 = { code: "function VoicePanelHeaderGlassBlurTsx1(){const{shown,IS_ANDROID}=this.__closure;return{opacity:shown.get()?IS_ANDROID?0.7:1:0};}" };
let closure_9 = { code: "function VoicePanelHeaderGlassBlurTsx2(){const{withSpring,shown}=this.__closure;return{blurAmount:withSpring(shown.get()?0.3:0)};}" };
const result = obj132.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelHeaderGlassBlur.tsx");

export default importAllResult.memo(function HeaderGlassBlur(shown) {
  shown = shown.shown;
  ({ blurStyle, style } = shown);
  const tmp = callback();
  shown(4115);
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
  let obj = { shown, IS_ANDROID: closure_7 };
  fn.__closure = obj;
  fn.__workletHash = 3451055086565;
  fn.__initData = closure_8;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj2 = shown(4115);
  const fn2 = function p() {
    let obj = shown(dependencyMap[6]);
    let num = 0;
    if (shown.get()) {
      num = 0.3;
    }
    obj = { blurAmount: obj.withSpring(num) };
    return obj;
  };
  obj = { withSpring: shown(4744).withSpring, shown };
  fn2.__closure = obj;
  fn2.__workletHash = 5642055202507;
  fn2.__initData = closure_9;
  const animatedProps = obj2.useAnimatedProps(fn2);
  const tmp7 = useThemeDefault();
  obj1 = { style: items, children: null };
  items = [tmp.blur, style, animatedStyle];
  const tmp2 = shown;
  const tmp9 = obj132Default2;
  const tmp11 = animatedComponentDefault;
  let str = "light";
  if (obj6.isThemeDark(tmp7)) {
    str = "dark";
  }
  const items1 = [StyleSheet.absoluteFillObject, blurStyle];
  const items2 = [callback(tmp11, { blurStyle: "ultra-thin", blurTheme: str, style: items1, animatedProps }), ];
  obj2 = { style: tmp.strokeContainer, children: null };
  const items3 = [callback(obj132Default, { style: tmp.stroke }), ];
  const tmp6Result = obj132Default;
  obj6 = shown(1363);
  const tmp2Result = tmp2(1363);
  items3[1] = callback(tmp6Result, { style: tmp2(1363).isThemeDark(tmp7) ? tmp.strokeAlt : tmp.strokeAltLight });
  obj2[1] = items3;
  items2[1] = callback2(tmp6Result, obj2);
  obj1[1] = items2;
  return callback2(tmp9, obj1);
});