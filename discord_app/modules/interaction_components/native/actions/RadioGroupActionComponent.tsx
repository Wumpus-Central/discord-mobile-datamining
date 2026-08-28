// === Module 16906: ? ===

// Module 16906
import importAllResult from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
let c3 = importAllResult;
({ jsx: c4, Fragment: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = { code: "function RadioGroupActionComponentTsx1(){const{withSpring,hasValue,SUBTLE_SPRING}=this.__closure;return{maxHeight:withSpring(hasValue?60:0,SUBTLE_SPRING),marginTop:withSpring(hasValue?8:0,SUBTLE_SPRING),opacity:withSpring(hasValue?1:0,SUBTLE_SPRING)};}" };
const memoResult = importAllResult.memo((type) => {
  type = type.type;
  const options = type.options;
  const required = type.required;
  let obj = ref;
  ref = ref.useRef(null);
  const items = [options];
  const memo = ref.useMemo(() => {
    let value;
    const iter = options.find((arg0) => arg0.default);
    if (iter != null) {
      value = iter.value;
    }
    return value;
  }, items);
  obj1 = type(required[2]);
  let tmp5;
  if (null != memo) {
    obj = { type: null, value: null };
    obj[0] = type;
    obj[1] = memo;
    tmp5 = obj;
  }
  const componentState = obj1.useComponentState(type, tmp5);
  const state = componentState.state;
  const executeStateUpdate = componentState.executeStateUpdate;
  const items1 = [state, type];
  const memo1 = obj.useMemo(() => {
    type = undefined;
    if (state != null) {
      type = iter.type;
    }
    let value = null;
    if (type === type) {
      value = iter.value;
    }
    return value;
  }, items1);
  closure_7 = tmp8;
  const fn = function p() {
    let obj = type(required[4]);
    let num = 0;
    if (closure_7) {
      num = 60;
    }
    obj = { maxHeight: obj.withSpring(num, tmp(tmp2[5]).SUBTLE_SPRING), marginTop: null, opacity: null };
    let tmpResult = tmp(tmp2[4]);
    let num2 = 0;
    if (closure_7) {
      num2 = 8;
    }
    obj[1] = tmpResult.withSpring(num2, type(required[5]).SUBTLE_SPRING);
    tmpResult = tmp(tmp2[4]);
    let num3 = 0;
    if (closure_7) {
      num3 = 1;
    }
    obj[2] = tmpResult.withSpring(num3, type(required[5]).SUBTLE_SPRING);
    return obj;
  };
  obj = { withSpring: tmp3(tmp4[4]).withSpring, hasValue: tmp8, SUBTLE_SPRING: tmp3(tmp4[5]).SUBTLE_SPRING };
  fn.__closure = obj;
  fn.__workletHash = 1287549755250;
  fn.__initData = closure_7;
  const animatedStyle = type(required[3]).useAnimatedStyle(fn);
  let str = memo1;
  if (memo1 == null) {
    str = "";
  }
  obj1 = {
    hasIcons: false,
    defaultValue: str,
    onChange(arg0) {
      if ("" !== arg0) {
        if (null == arg0) {
          let obj = { type: null, value: null };
          obj[0] = type;
          executeStateUpdate(obj);
          const current = ref.current;
          if (current != null) {
            current.setValue("");
          }
        } else {
          obj = { type: null, value: null };
          obj[0] = type;
          obj[1] = arg0;
          executeStateUpdate(obj);
        }
      }
    },
    groupRef: ref,
    children: options.map((label) => state(type(required[7]).TableRadioRow, { label: label.label, subLabel: label.description, value: label.value }, label.value))
  };
  const children = [state(type(required[6]).TableRadioGroup, obj1), ];
  let tmp12Result = !required;
  if (!required) {
    const obj2 = { style: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
    obj2[0] = animatedStyle;
    obj2[1] = !tmp8;
    let str2 = "no-hide-descendants";
    if (tmp8) {
      str2 = "auto";
    }
    obj2[2] = str2;
    const obj3 = { icon: null, label: null, onPress: null, start: true, end: true };
    const obj4 = { IconComponent: null };
    obj4[0] = tmp3(tmp4[9]).XSmallIcon;
    obj3[0] = tmp12(tmp3(tmp4[8]).TableRow.Icon, obj4);
    const intl = tmp3(tmp4[10]).intl;
    obj3[1] = intl.string(tmp3(tmp4[10]).t["5uAtZN"]);
    obj3[2] = function onPress() {
      executeStateUpdate({ type, value: null });
      const current = ref.current;
      if (current != null) {
        current.setValue("");
      }
    };
    obj2[3] = tmp12(tmp3(tmp4[8]).TableRow, obj3);
    tmp12Result = tmp12(options(tmp4[3]).View, obj2);
  }
  children[1] = tmp12Result;
  return memo1(executeStateUpdate, { children });
});
const result = require("set").fileFinishedImporting("modules/interaction_components/native/actions/RadioGroupActionComponent.tsx");

export default memoResult;