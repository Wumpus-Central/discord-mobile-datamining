// === Module 14685: DiceRollBar ===

// Module 14685 (DiceRollBar)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5485 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;

const require = globalThis.__r;
const _modDef1652 = _mod1652;

require = fn;
const View = fn(17).View;
const useDiceRollState = fn(14461).useDiceRollState;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5243);
let obj2 = { animatedContainer: { overflow: "hidden" }, container: { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 8, gap: 12, borderTopWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH } };
let closure_9 = createStyles.createStyles(obj2);
let closure_10 = { code: "(function DiceRollBarTsx1(){let[useReducedMotion,height,opacity,withTiming,ANIMATION_DURATION_MS,DECELERATED_EASING]=this.__closure;if(useReducedMotion){return{height:height.get(),opacity:opacity.get()};}return{height:withTiming(height.get(),{duration:ANIMATION_DURATION_MS,easing:DECELERATED_EASING}),opacity:withTiming(opacity.get(),{duration:ANIMATION_DURATION_MS,easing:DECELERATED_EASING})};})" };
let closure_11 = { code: "(function DiceRollBarTsx2(){let[rotation]=this.__closure;return{transform:[{rotate:rotation.get()+\"deg\"}]};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/dice_roll/native/DiceRollBar.tsx");

export default function DiceRollBar(channelId) {
  _require = undefined;
  c5 = undefined;
  const tmp = closure_9();
  const tmp2 = useDiceRollState(channelId.channelId);
  items = [c5];
  const stateFromStores = require("initialize").useStateFromStores(items, () => easing.useReducedMotion);
  _require = stateFromStores;
  let obj = require("initialize");
  const sharedValue = require("module_1652").useSharedValue(0);
  importDefault = sharedValue;
  let obj2 = require("module_1652");
  const sharedValue1 = require("module_1652").useSharedValue(0);
  dependencyMap = sharedValue1;
  let obj3 = require("module_1652");
  const sharedValue2 = require("module_1652").useSharedValue(0);
  noop = sharedValue2;
  c4 = tmp9;
  let flag;
  if (tmp2 != null) {
    flag = tmp2.rolling;
  }
  if (flag == null) {
    flag = false;
  }
  const items1 = [null != tmp2 && !tmp2.dismissing, sharedValue, sharedValue1];
  const effect = noop.useEffect(() => {
    let num = 0;
    if (c4) {
      num = 56;
    }
    const result = _undefined2.set(num);
    let num2 = 0;
    if (c4) {
      num2 = 1;
    }
    const result1 = _undefined3.set(num2);
  }, items1);
  const items2 = [flag, stateFromStores, sharedValue2];
  const effect1 = noop.useEffect(() => {
    if (c5) {
      if (!c0) {
        const obj = _mod1652;
        const obj3 = { duration: 800, easing: _mod1652.Easing.linear };
        const result = _undefined4.set(obj.withRepeat(timing_timing.withTiming(360, obj3), -1, false));
      }
    }
    const result1 = _undefined4.set(0);
  }, items2);
  const obj4 = require("module_1652");
  const items3 = [closure_10, stateFromStores, sharedValue, sharedValue1, require("timing/timing").withTiming, 300, require("native").DECELERATED_EASING];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items3;
  class DiceRollBarTsx1 {
    constructor() {
      obj = { height: null, opacity: null };
      if (closure_0) {
        tmp7 = closure_1;
        obj.height = closure_1.get();
        tmp8 = closure_2;
        obj.opacity = closure_2.get();
        tmp6 = obj;
      } else {
        tmp = closure_3;
        tmp2 = closure_1;
        obj1 = { duration: null, easing: null };
        tmp3 = closure_4;
        obj1.duration = closure_4;
        tmp4 = closure_5;
        obj1.easing = closure_5;
        obj.height = closure_3(closure_1.get(), obj1);
        tmp5 = closure_2;
        obj4 = { duration: null, easing: null };
        obj4.duration = closure_4;
        obj4.easing = closure_5;
        obj.opacity = closure_3(closure_2.get(), obj4);
        tmp6 = obj;
      }
      return tmp6;
    }
  }
  const items4 = [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18];
  DiceRollBarTsx1.__closure = items4;
  DiceRollBarTsx1.__workletHash = 2869558544264;
  DiceRollBarTsx1.__initData = tmp12;
  const animatedStyle = require("module_1652").useAnimatedStyle(DiceRollBarTsx1);
  require("module_1652");
  const items5 = [closure_11, sharedValue2];
  _require = undefined;
  [tmp21, tmp22] = items5;
  class DiceRollBarTsx2 {
    constructor() {
      obj = { transform: null };
      obj1 = { rotate: "" + closure_0.get() + "deg" };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items6 = [tmp22];
  DiceRollBarTsx2.__closure = items6;
  DiceRollBarTsx2.__workletHash = 8268904051195;
  DiceRollBarTsx2.__initData = tmp21;
  if (null == tmp2) {
    return null;
  } else {
    const barText = tmp3(14686).getBarText(flag, tmp2.results);
    const obj5 = { style: null, children: null };
    const items7 = [animatedStyle, tmp.animatedContainer];
    obj5.style = items7;
    const obj6 = { style: tmp.container, children: null };
    const obj7 = { style: tmp23, children: closure_7(tmp3(9370).DiceIcon, { size: "md" }) };
    const items8 = [closure_7(_modDef1652.View, obj7), ];
    const obj8 = { variant: "body-sm/normal", color: "text-default", children: barText };
    items8[1] = closure_7(tmp3(5866).Text, obj8);
    obj6.children = items8;
    obj5.children = closure_8(c4, obj6);
    return closure_7(_modDef1652.View, obj5);
  }
  const tmp3Result = require("module_1652");
};