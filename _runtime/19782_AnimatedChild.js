// _runtime/19782_AnimatedChild.js
import _mod1652 from "metro/01652__.js";
import _slicedToArray from "metro/00032__.js";
import noop from "metro/00019__.js";

const require = globalThis.__r;
const _modDef1652 = _mod1652;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
let closure_8 = {
  code: "(function pnpm_indexTsx1(){let[index,textWidth,spacing,anim]=this.__closure;return{position:'absolute',left:index*(textWidth.value+spacing),transform:[{translateX:-(anim.value%(textWidth.value+spacing))}]};})",
};
function AnimatedChild(arg0) {
  ({ index, textWidth, spacing } = arg0);
  ({ children, anim } = arg0);
  items = [closure_8, index, textWidth, spacing, anim];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp2, tmp3, tmp4, tmp5, tmp6] = items;
  function pnpm_indexTsx1() {
    const obj = { position: "absolute", left: c0 * (_undefined.value + c2), transform: null };
    items = [{ translateX: -_undefined2.value % (_undefined.value + c2) }];
    obj.transform = items;
    return obj;
  }
  const items1 = [tmp3, tmp4, tmp5, tmp6];
  pnpm_indexTsx1.__closure = items1;
  pnpm_indexTsx1.__workletHash = 15509259112427;
  pnpm_indexTsx1.__initData = tmp2;
  const items2 = [index, spacing, textWidth];
  const style = _mod1652.useAnimatedStyle(pnpm_indexTsx1, items2);
  return timestampProducer(_modDef1652.View, { style, children });
}
let closure_10 = { code: "(function pnpm_indexTsx2(){let[anim,speed]=this.__closure;anim.value+=speed;})" };
let closure_11 = {
  code: "(function pnpm_indexTsx3(){let[textWidth,parentWidth]=this.__closure;if(textWidth.value===0||parentWidth.value===0){return 0;}return Math.round(parentWidth.value/textWidth.value)+1;})",
};
let closure_12 = {
  code: "(function pnpm_indexTsx4(v){let[runOnJS,setCloneTimes]=this.__closure;if(v===0){return;}runOnJS(setCloneTimes)(v*2);})",
};
const styles = StyleSheet.create({
  hidden: { opacity: 0, zIndex: -9999 },
  row: { flexDirection: "row", overflow: "hidden" },
});

export const Marquee = noop.memo((speed) => {
  let num = speed.speed;
  if (num === undefined) {
    num = 1;
  }
  const children = speed.children;
  _require = children;
  let num2 = speed.spacing;
  if (num2 === undefined) {
    num2 = 0;
  }
  let sharedValue;
  let sharedValue2;
  sharedValue = require("metro/01652__.js").useSharedValue(0);
  const obj = require("metro/01652__.js");
  const sharedValue1 = require("metro/01652__.js").useSharedValue(0);
  const obj2 = require("metro/01652__.js");
  [tmp6, tmp7] = sharedValue1(sharedValue2.useState(0), 2);
  const tmp5 = sharedValue1(sharedValue2.useState(0), 2);
  sharedValue2 = require("metro/01652__.js").useSharedValue(0);
  const obj3 = require("metro/01652__.js");
  items = [closure_10, sharedValue2, num];
  _require = undefined;
  [tmp9, tmp10, tmp11] = items;
  function pnpm_indexTsx2() {
    children.value = children.value + c1;
  }
  const items1 = [tmp10, tmp11];
  pnpm_indexTsx2.__closure = items1;
  pnpm_indexTsx2.__workletHash = 2177332576652;
  pnpm_indexTsx2.__initData = tmp9;
  require("metro/01652__.js").useFrameCallback(pnpm_indexTsx2, true);
  const obj4 = require("metro/01652__.js");
  const items2 = [closure_11, sharedValue1, sharedValue];
  _require = undefined;
  [tmp13, tmp14, tmp15] = items2;
  function pnpm_indexTsx3() {
    let num = 0;
    if (0 !== children.value) {
      num = 0;
      if (0 !== spacing.value) {
        const _Math = Math;
        num = Math.round(iter2.value / iter.value) + 1;
      }
    }
    return num;
  }
  const items3 = [tmp14, tmp15];
  pnpm_indexTsx3.__closure = items3;
  pnpm_indexTsx3.__workletHash = 1231095151188;
  pnpm_indexTsx3.__initData = tmp13;
  const items4 = [closure_12, require("metro/01652__.js").runOnJS, tmp7];
  _require = undefined;
  importDefault = undefined;
  [tmp16, tmp17, tmp18] = items4;
  function pnpm_indexTsx4(arg0) {
    if (0 !== arg0) {
      children(c1)(2 * arg0);
    }
  }
  const items5 = [tmp17, tmp18];
  pnpm_indexTsx4.__closure = items5;
  pnpm_indexTsx4.__workletHash = 8115678716387;
  pnpm_indexTsx4.__initData = tmp16;
  const animatedReaction = require("metro/01652__.js").useAnimatedReaction(pnpm_indexTsx3, pnpm_indexTsx4, []);
  const obj5 = {
    style: speed.style,
    onLayout(nativeEvent) {
      sharedValue.value = nativeEvent.nativeEvent.layout.width;
    },
    pointerEvents: "box-none",
    children: null,
  };
  const obj6 = { style: closure_13.row, pointerEvents: "box-none", children: null };
  const obj7 = {
    horizontal: true,
    style: closure_13.hidden,
    pointerEvents: "box-none",
    children: closure_6(View, {
      onLayout(nativeEvent) {
        sharedValue1.value = nativeEvent.nativeEvent.layout.width;
      },
      children,
    }),
  };
  const items6 = [closure_6(require("metro/01652__.js").ScrollView, obj7)];
  let mapped = tmp6 > 0;
  if (mapped) {
    const _Array = Array;
    const items7 = [];
    HermesBuiltin.arraySpread(Array(tmp6).keys(), 0);
    mapped = items7.map((item) =>
      timestampProducer(
        AnimatedChild,
        { index: item, anim: sharedValue2, textWidth: sharedValue1, spacing, children },
        "clone-" + item,
      ),
    );
    const ArrayResult = Array(tmp6);
  }
  items6[1] = mapped;
  obj6.children = items6;
  obj5.children = closure_7(require("metro/01652__.js").View, obj6);
  return closure_6(require("metro/01652__.js").View, obj5);
});
