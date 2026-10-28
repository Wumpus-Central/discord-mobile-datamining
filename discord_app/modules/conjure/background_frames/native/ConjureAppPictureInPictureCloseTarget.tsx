// === Module 18737: ConjureAppPictureInPictureCloseTarget ===

// Module 18737 (ConjureAppPictureInPictureCloseTarget)
import nativeDefault from "native" /* 587 */;
import timing from "timing" /* 5242 */;
import spring from "spring" /* 5283 */;
import conjureAppPictureInPictureLayout from "conjureAppPictureInPictureLayout" /* 18736 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let c5 = 1.3;
const SPRING = { mass: 0.4, damping: 18, stiffness: 300 };
const FADE = { duration: 150 };
const createStyles = fn(5004);
let obj2 = { target: null, fill: null };
let size = { position: "absolute", top: 0, left: 0, width: fn(18736).CLOSE_TARGET_SIZE, height: fn(18736).CLOSE_TARGET_SIZE, borderRadius: fn(18736).CLOSE_TARGET_SIZE / 2, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj2.target = size;
const rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, borderRadius: fn(18736).CLOSE_TARGET_SIZE / 2, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.STATUS_DANGER };
obj2.fill = rect;
let closure_8 = createStyles.createStyles(obj2);
const __initData = { code: "function ConjureAppPictureInPictureCloseTargetTsx1(){const{withTiming,shown,FADE,x,CLOSE_TARGET_SIZE,withSpring,y,SPRING,hovered,HOVERED_SCALE}=this.__closure;return{opacity:withTiming(shown.get()?1:0,FADE),transform:[{translateX:x-CLOSE_TARGET_SIZE/2},{translateY:withSpring(y-CLOSE_TARGET_SIZE/2+(shown.get()?0:CLOSE_TARGET_SIZE),SPRING)},{scale:withSpring(hovered.get()?HOVERED_SCALE:1,SPRING)}]};}" };
const __initData2 = { code: "function ConjureAppPictureInPictureCloseTargetTsx2(){const{withTiming,hovered,FADE}=this.__closure;return{opacity:withTiming(hovered.get()?1:0,FADE)};}" };
const __initData3 = { code: "function ConjureAppPictureInPictureCloseTargetTsx3(){const{withTiming,shown,FADE,x,CLOSE_TARGET_SIZE,withSpring,y,SPRING,hovered,HOVERED_SCALE}=this.__closure;return{opacity:withTiming(shown.get()?1:0,FADE),transform:[{translateX:x-CLOSE_TARGET_SIZE/2},{translateY:withSpring(y-CLOSE_TARGET_SIZE/2+(shown.get()?0:CLOSE_TARGET_SIZE),SPRING)},{scale:withSpring(hovered.get()?HOVERED_SCALE:1,SPRING)}]};}" };
const __initData4 = { code: "function ConjureAppPictureInPictureCloseTargetTsx4(){const{withTiming,hovered,FADE}=this.__closure;return{opacity:withTiming(hovered.get()?1:0,FADE)};}" };
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/background_frames/native/ConjureAppPictureInPictureCloseTarget.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAppPictureInPictureCloseTarget(hovered) {
  const cResult = shown(576).c(13);
  ({ center, shown } = hovered);
  hovered = hovered.hovered;
  const tmp4 = closure_8();
  const x = center.x;
  dependencyMap = x;
  const y = center.y;
  closure_3 = y;
  let obj = shown(576);
  class T {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[8]);
      obj2 = shown;
      num = 0;
      if (shown.get()) {
        num = 1;
      }
      obj1 = { opacity: obj.withTiming(num, closure_7), transform: null };
      obj9 = { translateX: closure_2 - tmp(tmp2[3]).CLOSE_TARGET_SIZE / 2 };
      items = [, , ];
      items[0] = obj9;
      tmpResult = tmp(tmp2[9]);
      diff = closure_3 - tmp(tmp2[3]).CLOSE_TARGET_SIZE / 2;
      num2 = 0;
      if (!obj2.get()) {
        num2 = tmp(tmp2[3]).CLOSE_TARGET_SIZE;
      }
      obj10 = { translateY: tmpResult.withSpring(diff + num2, closure_6) };
      tmp4 = closure_6;
      items[1] = obj10;
      tmpResult1 = tmp(tmp2[9]);
      num3 = 1;
      if (hovered.get()) {
        num3 = c5;
      }
      obj11 = { scale: tmpResult1.withSpring(num3, tmp4) };
      items[2] = obj11;
      obj1.transform = items;
      return obj1;
    }
  }
  const point = { withTiming: shown(5242).withTiming, shown, FADE, x, CLOSE_TARGET_SIZE: shown(18736).CLOSE_TARGET_SIZE, withSpring: shown(5283).withSpring, y, SPRING, hovered, HOVERED_SCALE };
  T.__closure = point;
  T.__workletHash = 15134050536622;
  T.__initData = __initData;
  const animatedStyle = shown(5085).useAnimatedStyle(T);
  const obj2 = shown(5085);
  const fn = function h() {
    let num = 0;
    if (hovered.get()) {
      num = 1;
    }
    return { opacity: timing.withTiming(num, closure_7) };
  };
  let obj4 = shown(5085);
  fn.__closure = { withTiming: shown(5242).withTiming, hovered, FADE };
  fn.__workletHash = 1295924731740;
  fn.__initData = __initData2;
  const animatedStyle1 = obj4.useAnimatedStyle(fn);
  if (cResult[0] === tmp4.target) {
    if (cResult[1] === animatedStyle) {
      let tmp7 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      let obj5 = { size: "md", color: hovered(587).colors.ICON_STRONG };
      const tmp12 = closure_3(shown(11578).DoorExitIcon, obj5);
      cResult[3] = tmp12;
      let tmp9 = tmp12;
    } else {
      tmp9 = cResult[3];
    }
    if (cResult[4] === animatedStyle1) {
      if (cResult[5] === tmp4.fill) {
        let tmp13 = cResult[6];
      }
      const _Symbol2 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = { size: "md", color: hovered(587).colors.WHITE };
        const tmp17 = closure_3(shown(11578).DoorExitIcon, obj6);
        cResult[7] = tmp17;
        let tmp14 = tmp17;
      } else {
        tmp14 = cResult[7];
      }
      if (cResult[8] !== tmp13) {
        const obj7 = { style: tmp13, children: tmp14 };
        const tmp21 = closure_3(hovered(5085).View, obj7);
        cResult[8] = tmp13;
        cResult[9] = tmp21;
        let tmp18 = tmp21;
      } else {
        tmp18 = cResult[9];
      }
      if (cResult[10] === tmp7) {
        if (cResult[11] === tmp18) {
          let tmp22 = cResult[12];
        }
        return tmp22;
      }
      const obj8 = { style: tmp7, pointerEvents: "none", importantForAccessibility: "no-hide-descendants", children: null };
      let items = [tmp9, tmp18];
      obj8.children = items;
      const tmp25 = closure_4(hovered(5085).View, obj8);
      cResult[10] = tmp7;
      cResult[11] = tmp18;
      class T {
        constructor() {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[8]);
          obj2 = shown;
          num = 0;
          if (shown.get()) {
            num = 1;
          }
          obj1 = { opacity: obj.withTiming(num, closure_7), transform: null };
          obj9 = { translateX: closure_2 - tmp(tmp2[3]).CLOSE_TARGET_SIZE / 2 };
          items = [, , ];
          items[0] = obj9;
          tmpResult = tmp(tmp2[9]);
          diff = closure_3 - tmp(tmp2[3]).CLOSE_TARGET_SIZE / 2;
          num2 = 0;
          if (!obj2.get()) {
            num2 = tmp(tmp2[3]).CLOSE_TARGET_SIZE;
          }
          obj10 = { translateY: tmpResult.withSpring(diff + num2, closure_6) };
          tmp4 = closure_6;
          items[1] = obj10;
          tmpResult1 = tmp(tmp2[9]);
          num3 = 1;
          if (hovered.get()) {
            num3 = c5;
          }
          obj11 = { scale: tmpResult1.withSpring(num3, tmp4) };
          items[2] = obj11;
          obj1.transform = items;
          return obj1;
        }
      }
      cResult[12] = tmp25;
      tmp22 = tmp25;
    }
    const items1 = [tmp4.fill, animatedStyle1];
    cResult[4] = animatedStyle1;
    cResult[5] = tmp4.fill;
    cResult[6] = items1;
    tmp13 = items1;
  }
  const items2 = [tmp4.target, animatedStyle];
  cResult[0] = tmp4.target;
  cResult[1] = animatedStyle;
  cResult[2] = items2;
  tmp7 = items2;
  let obj3 = { withTiming: shown(5242).withTiming, hovered, FADE };
}) : (function ConjureAppPictureInPictureCloseTarget(hovered) {
  ({ center, shown } = hovered);
  hovered = hovered.hovered;
  const tmp = closure_8();
  const x = center.x;
  dependencyMap = x;
  const y = center.y;
  closure_3 = y;
  const fn = function u() {
    let num = 0;
    if (shown.get()) {
      num = 1;
    }
    const obj3 = { opacity: timing.withTiming(num, closure_7), transform: null };
    const items = [{ translateX: closure_2 - conjureAppPictureInPictureLayout.CLOSE_TARGET_SIZE / 2 }, , ];
    const obj4 = { translateX: closure_2 - conjureAppPictureInPictureLayout.CLOSE_TARGET_SIZE / 2 };
    const diff = closure_3 - conjureAppPictureInPictureLayout.CLOSE_TARGET_SIZE / 2;
    let num2 = 0;
    if (!shown.get()) {
      num2 = conjureAppPictureInPictureLayout.CLOSE_TARGET_SIZE;
    }
    const tmpResult = spring;
    items[1] = { translateY: spring.withSpring(diff + num2, closure_6) };
    const obj5 = { translateY: spring.withSpring(diff + num2, closure_6) };
    let num3 = 1;
    if (hovered.get()) {
      num3 = c5;
    }
    const tmpResult2 = spring;
    items[2] = { scale: spring.withSpring(num3, closure_6) };
    obj3.transform = items;
    return obj3;
  };
  const point = { withTiming: shown(5242).withTiming, shown, FADE, x, CLOSE_TARGET_SIZE: shown(18736).CLOSE_TARGET_SIZE, withSpring: shown(5283).withSpring, y, SPRING, hovered, HOVERED_SCALE };
  fn.__closure = point;
  fn.__workletHash = 15877568301676;
  fn.__initData = __initData3;
  const animatedStyle = shown(5085).useAnimatedStyle(fn);
  let obj = shown(5085);
  class A {
    constructor() {
      obj = closure_0(closure_2[8]);
      num = 0;
      if (hovered.get()) {
        num = 1;
      }
      obj1 = { opacity: obj.withTiming(num, closure_7) };
      return obj1;
    }
  }
  let obj3 = shown(5085);
  A.__closure = { withTiming: shown(5242).withTiming, hovered, FADE };
  A.__workletHash = 2190356029722;
  A.__initData = __initData4;
  const animatedStyle1 = obj3.useAnimatedStyle(A);
  let obj4 = { style: null, pointerEvents: "none", importantForAccessibility: "no-hide-descendants", children: null };
  let items = [tmp.target, animatedStyle];
  obj4.style = items;
  const obj2 = { withTiming: shown(5242).withTiming, hovered, FADE };
  const items1 = [closure_3(shown(11578).DoorExitIcon, { size: "md", color: hovered(587).colors.ICON_STRONG }), ];
  const obj6 = { style: null, children: null };
  const items2 = [tmp.fill, animatedStyle1];
  obj6.style = items2;
  let obj5 = { size: "md", color: hovered(587).colors.ICON_STRONG };
  obj6.children = closure_3(shown(11578).DoorExitIcon, { size: "md", color: hovered(587).colors.WHITE });
  items1[1] = closure_3(hovered(5085).View, obj6);
  obj4.children = items1;
  return closure_4(hovered(5085).View, obj4);
});