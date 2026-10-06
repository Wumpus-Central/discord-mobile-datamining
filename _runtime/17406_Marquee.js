// === Module 17406: Marquee ===

// Module 17406 (Marquee)
import react_native from "react-native" /* 17 */;
import _mod1643 from "module_1643" /* 1643 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;

const _modDef1643 = _mod1643;

let metroImportDefault;
let metroRequire;
const StyleSheet = react_native.StyleSheet;
let View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const __initData = { code: "function pnpm_indexTsx1(){const{index,textWidth,spacing,anim}=this.__closure;return{position:'absolute',left:index*(textWidth.value+spacing),transform:[{translateX:-(anim.value%(textWidth.value+spacing))}]};}" };
function AnimatedChild(index) {
  index = index.index;
  const anim = index.anim;
  const textWidth = index.textWidth;
  const spacing = index.spacing;
  const children = index.children;
  let obj = _mod1643;
  const fn = function c() {
    let items;
    const obj = { position: "absolute", left: index * (textWidth.value + spacing), transform: items };
    items = [];
    const obj2 = { translateX: -anim.value % (textWidth.value + spacing) };
    items[0] = obj2;
    return obj;
  };
  fn.__closure = { index, textWidth, spacing, anim };
  fn.__workletHash = 9107973864402;
  fn.__initData = __initData;
  let items = [index, spacing, textWidth];
  const style = obj.useAnimatedStyle(fn, items);
  return metroRequire(_modDef1643.View, { style, children });
}
const __initData2 = { code: "function pnpm_indexTsx2(){const{anim,speed}=this.__closure;anim.value+=speed;}" };
const __initData3 = { code: "function pnpm_indexTsx3(){const{textWidth,parentWidth}=this.__closure;if(textWidth.value===0||parentWidth.value===0){return 0;}return Math.round(parentWidth.value/textWidth.value)+1;}" };
const __initData4 = { code: "function pnpm_indexTsx4(v){const{runOnJS,setCloneTimes}=this.__closure;if(v===0){return;}runOnJS(setCloneTimes)(v*2);}" };
const memoResult = react.memo((speed) => {
  let View2;
  let items;
  let obj10;
  let obj8;
  let tmp5;
  let tmp6;
  let num = speed.speed;
  if (num === undefined) {
    num = 1;
  }
  const children = speed.children;
  let num2 = speed.spacing;
  if (num2 === undefined) {
    num2 = 0;
  }
  const style = speed.style;
  let obj = num(num2[4]);
  const sharedValue = obj.useSharedValue(0);
  const obj2 = num(num2[4]);
  const sharedValue1 = obj2.useSharedValue(0);
  [tmp5, tmp6] = sharedValue(sharedValue1.useState(0), 2);
  let c5 = tmp6;
  const tmp4 = sharedValue(sharedValue1.useState(0), 2);
  const obj3 = num(num2[4]);
  const sharedValue2 = obj3.useSharedValue(0);
  const fn = function w() {
    sharedValue2.value = sharedValue2.value + num;
  };
  fn.__closure = { anim: sharedValue2, speed: num };
  fn.__workletHash = 5612715942613;
  fn.__initData = __initData2;
  const obj4 = num(num2[4]);
  obj4.useFrameCallback(fn, true);
  const obj5 = num(num2[4]);
  class W {
    constructor() {
      num = 0;
      if (0 !== sharedValue1.value) {
        num = 0;
        if (0 !== sharedValue.value) {
          const _Math = Math;
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
      const obj = _mod1643;
      obj.runOnJS(c5)(2 * arg0);
    }
  };
  fn2.__closure = { runOnJS: num(num2[4]).runOnJS, setCloneTimes: tmp6 };
  fn2.__workletHash = 8842395428122;
  fn2.__initData = __initData4;
  ({ runOnJS: num(num2[4]).runOnJS, setCloneTimes: tmp6 });
  const animatedReaction = obj5.useAnimatedReaction(W, fn2, []);
  const obj7 = {
    style,
    onLayout(nativeEvent) {
      sharedValue.value = nativeEvent.nativeEvent.layout.width;
    },
    pointerEvents: "box-none",
    children: closure_7(View2, obj8)
  };
  View = children(num2[4]).View;
  obj8 = { style: closure_13.row, pointerEvents: "box-none", children: items };
  View2 = children(num2[4]).View;
  const obj9 = { horizontal: true, style: closure_13.hidden, pointerEvents: "box-none", children: sharedValue2(c5, obj10) };
  obj10 = {
    onLayout(nativeEvent) {
      sharedValue1.value = nativeEvent.nativeEvent.layout.width;
    },
    children
  };
  const ScrollView = children(num2[4]).ScrollView;
  items = [sharedValue2(ScrollView, obj9), ];
  let mapped = tmp5 > 0;
  const tmp10 = sharedValue2;
  if (mapped) {
    const _Array = Array;
    const items1 = [];
    const ArrayResult = Array(tmp5);
    HermesBuiltin.arraySpread(items1, ArrayResult.keys(), 0);
    mapped = items1.map((item) => {
      const obj = { index: item, anim: sharedValue2, textWidth: sharedValue1, spacing: num2, children };
      return metroRequire(AnimatedChild, obj, "clone-" + item);
    });
  }
  items[1] = mapped;
  return tmp10(View, obj7);
});
const styles = StyleSheet.create({ hidden: { opacity: 0, zIndex: -9999 }, row: { flexDirection: "row", overflow: "hidden" } });

export const Marquee = memoResult;