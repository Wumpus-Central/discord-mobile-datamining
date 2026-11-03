// === Module 19281: ConjureAppPictureInPictureCloseTarget ===

// Module 19281 (ConjureAppPictureInPictureCloseTarget)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5377 */;
import spring_spring from "spring/spring" /* 5757 */;
import DoorExitIcon from "DoorExitIcon" /* 12021 */;
import conjureAppPictureInPictureLayout from "conjureAppPictureInPictureLayout" /* 19278 */;
import noop from "module_19" /* 19 */;

const _modDef1652 = _mod1652;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let closure_5 = { mass: 0.4, damping: 18, stiffness: 300 };
let closure_6 = { duration: 150 };
const createStyles = fn(5141);
let obj2 = { target: null, fill: null };
let size = { position: "absolute", top: 0, left: 0, width: fn(19278).CLOSE_TARGET_SIZE, height: fn(19278).CLOSE_TARGET_SIZE, borderRadius: fn(19278).CLOSE_TARGET_SIZE / 2, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj2.target = size;
const rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, borderRadius: fn(19278).CLOSE_TARGET_SIZE / 2, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.STATUS_DANGER };
obj2.fill = rect;
let closure_7 = createStyles.createStyles(obj2);
let closure_8 = { code: "(function ConjureAppPictureInPictureCloseTargetTsx1(){let[withTiming,shown,FADE,x,CLOSE_TARGET_SIZE,withSpring,y,SPRING,hovered,HOVERED_SCALE]=this.__closure;return{opacity:withTiming(shown.get()?1:0,FADE),transform:[{translateX:x-CLOSE_TARGET_SIZE/2},{translateY:withSpring(y-CLOSE_TARGET_SIZE/2+(shown.get()?0:CLOSE_TARGET_SIZE),SPRING)},{scale:withSpring(hovered.get()?HOVERED_SCALE:1,SPRING)}]};})" };
let closure_9 = { code: "(function ConjureAppPictureInPictureCloseTargetTsx2(){let[withTiming,hovered,FADE]=this.__closure;return{opacity:withTiming(hovered.get()?1:0,FADE)};})" };
size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/background_frames/native/ConjureAppPictureInPictureCloseTarget.tsx");

export default function ConjureAppPictureInPictureCloseTarget(shown) {
  ({ center, hovered } = shown);
  const tmp = closure_7();
  ({ x, y } = center);
  items = [_undefined2, timing_timing.withTiming, shown.shown, closure_6, x, conjureAppPictureInPictureLayout.CLOSE_TARGET_SIZE, spring_spring.withSpring, y, _undefined2, hovered, 1.3];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15] = items;
  class ConjureAppPictureInPictureCloseTargetTsx1 {
    constructor() {
      obj = closure_1;
      tmp = closure_0;
      num = 0;
      if (closure_1.get()) {
        num = 1;
      }
      obj1 = { opacity: tmp(num, closure_2), transform: null };
      obj6 = { translateX: closure_3 - closure_4 / 2 };
      items = [, , ];
      items[0] = obj6;
      tmp3 = closure_5;
      tmp2 = closure_4;
      diff = closure_6 - closure_4 / 2;
      num2 = 0;
      if (!obj.get()) {
        num2 = tmp2;
      }
      obj7 = { translateY: tmp3(diff + num2, closure_7) };
      tmp5 = closure_7;
      items[1] = obj7;
      num3 = 1;
      if (closure_8.get()) {
        num3 = closure_9;
      }
      obj8 = { scale: tmp3(num3, tmp5) };
      items[2] = obj8;
      obj1.transform = items;
      return obj1;
    }
  }
  const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15];
  ConjureAppPictureInPictureCloseTargetTsx1.__closure = items1;
  ConjureAppPictureInPictureCloseTargetTsx1.__workletHash = 2190508399799;
  ConjureAppPictureInPictureCloseTargetTsx1.__initData = tmp5;
  const animatedStyle = _mod1652.useAnimatedStyle(ConjureAppPictureInPictureCloseTargetTsx1);
  const items2 = [closure_9, timing_timing.withTiming, hovered, closure_6];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp17, tmp18, tmp19, tmp20] = items2;
  class ConjureAppPictureInPictureCloseTargetTsx2 {
    constructor() {
      tmp = closure_0;
      num = 0;
      if (closure_1.get()) {
        num = 1;
      }
      obj = { opacity: tmp(num, closure_2) };
      return obj;
    }
  }
  const items3 = [tmp18, tmp19, tmp20];
  ConjureAppPictureInPictureCloseTargetTsx2.__closure = items3;
  ConjureAppPictureInPictureCloseTargetTsx2.__workletHash = 5767236237381;
  ConjureAppPictureInPictureCloseTargetTsx2.__initData = tmp17;
  const animatedStyle1 = _mod1652.useAnimatedStyle(ConjureAppPictureInPictureCloseTargetTsx2);
  let obj2 = { style: null, pointerEvents: "none", importantForAccessibility: "no-hide-descendants", children: null };
  const items4 = [tmp.target, animatedStyle];
  obj2.style = items4;
  const tmp2Result = _mod1652;
  const items5 = [React3(DoorExitIcon.DoorExitIcon, { size: "md", color: nativeDefault.colors.ICON_STRONG }), ];
  let obj4 = { style: null, children: null };
  const items6 = [tmp.fill, animatedStyle1];
  obj4.style = items6;
  let obj3 = { size: "md", color: nativeDefault.colors.ICON_STRONG };
  obj4.children = React3(DoorExitIcon.DoorExitIcon, { size: "md", color: nativeDefault.colors.WHITE });
  items5[1] = React3(_modDef1652.View, obj4);
  obj2.children = items5;
  return React4(_modDef1652.View, obj2);
};