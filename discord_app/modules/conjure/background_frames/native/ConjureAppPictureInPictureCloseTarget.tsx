// === Module 19114: ConjureAppPictureInPictureCloseTarget ===

// Module 19114 (ConjureAppPictureInPictureCloseTarget)
import nativeDefault from "native" /* 575 */;
import timing from "timing" /* 5254 */;
import spring from "spring" /* 5637 */;
import conjureAppPictureInPictureLayout from "conjureAppPictureInPictureLayout" /* 19113 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const SPRING = { mass: 0.4, damping: 18, stiffness: 300 };
const FADE = { duration: 150 };
const createStyles = fn(5014);
let obj2 = { target: null, fill: null };
let size = { position: "absolute", top: 0, left: 0, width: fn(19113).CLOSE_TARGET_SIZE, height: fn(19113).CLOSE_TARGET_SIZE, borderRadius: fn(19113).CLOSE_TARGET_SIZE / 2, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj2.target = size;
const rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, borderRadius: fn(19113).CLOSE_TARGET_SIZE / 2, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.STATUS_DANGER };
obj2.fill = rect;
let closure_7 = createStyles.createStyles(obj2);
const __initData = { code: "function ConjureAppPictureInPictureCloseTargetTsx1(){const{withTiming,shown,FADE,x,CLOSE_TARGET_SIZE,withSpring,y,SPRING,hovered,HOVERED_SCALE}=this.__closure;return{opacity:withTiming(shown.get()?1:0,FADE),transform:[{translateX:x-CLOSE_TARGET_SIZE/2},{translateY:withSpring(y-CLOSE_TARGET_SIZE/2+(shown.get()?0:CLOSE_TARGET_SIZE),SPRING)},{scale:withSpring(hovered.get()?HOVERED_SCALE:1,SPRING)}]};}" };
const __initData2 = { code: "function ConjureAppPictureInPictureCloseTargetTsx2(){const{withTiming,hovered,FADE}=this.__closure;return{opacity:withTiming(hovered.get()?1:0,FADE)};}" };
size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/background_frames/native/ConjureAppPictureInPictureCloseTarget.tsx");

export default function ConjureAppPictureInPictureCloseTarget(hovered) {
  ({ center, shown } = hovered);
  hovered = hovered.hovered;
  const tmp = closure_7();
  const x = center.x;
  dependencyMap = x;
  const y = center.y;
  closure_3 = y;
  const fn = function h() {
    let num = 0;
    if (shown.get()) {
      num = 1;
    }
    const obj3 = { opacity: timing.withTiming(num, closure_6), transform: null };
    const items = [{ translateX: closure_2 - conjureAppPictureInPictureLayout.CLOSE_TARGET_SIZE / 2 }, , ];
    const obj4 = { translateX: closure_2 - conjureAppPictureInPictureLayout.CLOSE_TARGET_SIZE / 2 };
    const diff = closure_3 - conjureAppPictureInPictureLayout.CLOSE_TARGET_SIZE / 2;
    let num2 = 0;
    if (!shown.get()) {
      num2 = conjureAppPictureInPictureLayout.CLOSE_TARGET_SIZE;
    }
    const tmpResult = spring;
    items[1] = { translateY: spring.withSpring(diff + num2, closure_5) };
    const obj5 = { translateY: spring.withSpring(diff + num2, closure_5) };
    let num3 = 1;
    if (hovered.get()) {
      num3 = 1.3;
    }
    const tmpResult2 = spring;
    items[2] = { scale: spring.withSpring(num3, closure_5) };
    obj3.transform = items;
    return obj3;
  };
  const point = { withTiming: shown(5254).withTiming, shown, FADE, x, CLOSE_TARGET_SIZE: shown(19113).CLOSE_TARGET_SIZE, withSpring: shown(5637).withSpring, y, SPRING, hovered, HOVERED_SCALE: 1.3 };
  fn.__closure = point;
  fn.__workletHash = 15134050536622;
  fn.__initData = __initData;
  const animatedStyle = shown(5095).useAnimatedStyle(fn);
  let obj = shown(5095);
  const fn2 = function u() {
    let num = 0;
    if (hovered.get()) {
      num = 1;
    }
    return { opacity: timing.withTiming(num, closure_6) };
  };
  let obj3 = shown(5095);
  fn2.__closure = { withTiming: shown(5254).withTiming, hovered, FADE };
  fn2.__workletHash = 1295924731740;
  fn2.__initData = __initData2;
  const animatedStyle1 = obj3.useAnimatedStyle(fn2);
  let obj4 = { style: null, pointerEvents: "none", importantForAccessibility: "no-hide-descendants", children: null };
  let items = [tmp.target, animatedStyle];
  obj4.style = items;
  const obj2 = { withTiming: shown(5254).withTiming, hovered, FADE };
  const items1 = [closure_3(shown(11883).DoorExitIcon, { size: "md", color: hovered(575).colors.ICON_STRONG }), ];
  const obj6 = { style: null, children: null };
  const items2 = [tmp.fill, animatedStyle1];
  obj6.style = items2;
  let obj5 = { size: "md", color: hovered(575).colors.ICON_STRONG };
  obj6.children = closure_3(shown(11883).DoorExitIcon, { size: "md", color: hovered(575).colors.WHITE });
  items1[1] = closure_3(hovered(5095).View, obj6);
  obj4.children = items1;
  return closure_4(hovered(5095).View, obj4);
};