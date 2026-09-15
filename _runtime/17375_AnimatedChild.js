// === Module 17375: AnimatedChild ===

// Module 17375 (AnimatedChild)
import cancelAnimation from "cancelAnimation" /* 1637 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const cancelAnimationDefault = cancelAnimation;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const __initData = { code: "function pnpm_indexTsx1(){const{index,textWidth,spacing,anim}=this.__closure;return{position:'absolute',left:index*(textWidth.value+spacing),transform:[{translateX:-(anim.value%(textWidth.value+spacing))}]};}" };
function AnimatedChild(children) {
  const index = children.index;
  const anim = children.anim;
  const textWidth = children.textWidth;
  const spacing = children.spacing;
  const fn = function c() {
    const obj = { position: "absolute", left: index * (textWidth.value + spacing), transform: null };
    const items = [{ translateX: -anim.value % (textWidth.value + spacing) }];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { index, textWidth, spacing, anim };
  fn.__workletHash = 9107973864402;
  fn.__initData = __initData;
  let items = [index, spacing, textWidth];
  const style = cancelAnimation.useAnimatedStyle(fn, items);
  return timestampProducer(cancelAnimationDefault.View, { style, children: children.children });
}
const __initData2 = { code: "function pnpm_indexTsx2(){const{anim,speed}=this.__closure;anim.value+=speed;}" };
const __initData3 = { code: "function pnpm_indexTsx3(){const{textWidth,parentWidth}=this.__closure;if(textWidth.value===0||parentWidth.value===0){return 0;}return Math.round(parentWidth.value/textWidth.value)+1;}" };
const __initData4 = { code: "function pnpm_indexTsx4(v){const{runOnJS,setCloneTimes}=this.__closure;if(v===0){return;}runOnJS(setCloneTimes)(v*2);}" };
const styles = StyleSheet.create({ hidden: { opacity: 0, zIndex: -9999 }, row: { flexDirection: "row", overflow: "hidden" } });

export const Marquee = noop.memo((speed) => {
  let num = speed.speed;
  if (num === undefined) {
    num = 1;
  }
  const children = speed.children;
  let num2 = speed.spacing;
  if (num2 === undefined) {
    num2 = 0;
  }
  const sharedValue = num(num2[4]).useSharedValue(0);
  let obj = num(num2[4]);
  const sharedValue1 = num(num2[4]).useSharedValue(0);
  const obj2 = num(num2[4]);
  [tmp4, tmp5] = sharedValue(sharedValue1.useState(0), 2);
  c5 = tmp5;
  const tmp3 = sharedValue(sharedValue1.useState(0), 2);
  const sharedValue2 = num(num2[4]).useSharedValue(0);
  const obj3 = num(num2[4]);
  const fn = function w() {
    sharedValue2.value = sharedValue2.value + num;
  };
  fn.__closure = { anim: sharedValue2, speed: num };
  fn.__workletHash = 5612715942613;
  fn.__initData = __initData2;
  num(num2[4]).useFrameCallback(fn, true);
  const obj4 = num(num2[4]);
  class W {
    constructor() {
      num = 0;
      if (0 !== closure_4.value) {
        num = 0;
        if (0 !== closure_3.value) {
          tmp = globalThis;
          _Math = Math;
          num2 = 1;
          num = Math.round(iter2.value / iter.value) + 1;
        }
      }
      return num;
    }
  }
  W.__closure = { textWidth: sharedValue1, parentWidth: sharedValue };
  W.__workletHash = 4132969599661;
  W.__initData = __initData3;
  const fn2 = function y(arg0) {
    if (0 !== arg0) {
      cancelAnimation.runOnJS(c5)(2 * arg0);
    }
  };
  const obj5 = num(num2[4]);
  fn2.__closure = { runOnJS: num(num2[4]).runOnJS, setCloneTimes: tmp5 };
  fn2.__workletHash = 8842395428122;
  fn2.__initData = __initData4;
  const animatedReaction = obj5.useAnimatedReaction(W, fn2, []);
  const obj7 = {
    style: speed.style,
    onLayout(nativeEvent) {
      sharedValue.value = nativeEvent.nativeEvent.layout.width;
    },
    pointerEvents: "box-none",
    children: null
  };
  const obj8 = { style: closure_13.row, pointerEvents: "box-none", children: null };
  const obj9 = {
    horizontal: true,
    style: closure_13.hidden,
    pointerEvents: "box-none",
    children: sharedValue2(c5, {
      onLayout(nativeEvent) {
        sharedValue1.value = nativeEvent.nativeEvent.layout.width;
      },
      children
    })
  };
  const items = [sharedValue2(children(num2[4]).ScrollView, obj9), ];
  let mapped = tmp4 > 0;
  if (mapped) {
    const _Array = Array;
    const items1 = [];
    HermesBuiltin.arraySpread(Array(tmp4).keys(), 0);
    mapped = items1.map((item) => timestampProducer(AnimatedChild, { index: item, anim: sharedValue2, textWidth: sharedValue1, spacing: num2, children }, "clone-" + item));
    const ArrayResult = Array(tmp4);
  }
  items[1] = mapped;
  obj8.children = items;
  obj7.children = closure_7(children(num2[4]).View, obj8);
  return sharedValue2(children(num2[4]).View, obj7);
});