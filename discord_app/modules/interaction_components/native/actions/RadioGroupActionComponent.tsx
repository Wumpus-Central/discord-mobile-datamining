// === Module 17397: RadioGroupActionComponent ===

// Module 17397 (RadioGroupActionComponent)
import spring from "spring" /* 4974 */;
import springPresets from "springPresets" /* 4978 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let __initData = { code: "function RadioGroupActionComponentTsx1(){const{withSpring,hasValue,SUBTLE_SPRING}=this.__closure;return{maxHeight:withSpring(hasValue?60:0,SUBTLE_SPRING),marginTop:withSpring(hasValue?8:0,SUBTLE_SPRING),opacity:withSpring(hasValue?1:0,SUBTLE_SPRING)};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/native/actions/RadioGroupActionComponent.tsx");

export default noop.memo((type) => {
  type = type.type;
  const options = type.options;
  const required = type.required;
  let obj = ref;
  ref = ref.useRef(null);
  const items = [options];
  const memo = ref.useMemo(() => {
    value = undefined;
    const iter = options.find((item) => item.default);
    if (iter != null) {
      value = iter.value;
    }
    return value;
  }, items);
  let obj1 = type(required[2]);
  let tmp5;
  if (null != memo) {
    obj = { type, value: memo };
    tmp5 = obj;
  }
  const componentState = obj1.useComponentState(type, tmp5);
  const state = componentState.state;
  const executeStateUpdate = componentState.executeStateUpdate;
  const items1 = [state, type];
  const memo1 = obj.useMemo(() => {
    type = undefined;
    if (state != null) {
      type = state.type;
    }
    value = null;
    if (type === type) {
      value = state.value;
    }
    return value;
  }, items1);
  __initData = tmp8;
  const fn = function p() {
    let obj = spring;
    let num = 0;
    if (closure_7) {
      num = 60;
    }
    obj = { maxHeight: obj.withSpring(num, springPresets.SUBTLE_SPRING), marginTop: null, opacity: null };
    let tmpResult = spring;
    let num2 = 0;
    if (closure_7) {
      num2 = 8;
    }
    obj.marginTop = tmpResult.withSpring(num2, springPresets.SUBTLE_SPRING);
    tmpResult = spring;
    let num3 = 0;
    if (closure_7) {
      num3 = 1;
    }
    obj.opacity = tmpResult.withSpring(num3, springPresets.SUBTLE_SPRING);
    return obj;
  };
  obj = { withSpring: tmp3(tmp4[4]).withSpring, hasValue: tmp8, SUBTLE_SPRING: tmp3(tmp4[5]).SUBTLE_SPRING };
  fn.__closure = obj;
  fn.__workletHash = 1287549755250;
  fn.__initData = __initData;
  const animatedStyle = type(required[3]).useAnimatedStyle(fn);
  let str = memo1;
  if (memo1 == null) {
    str = "";
  }
  obj1 = {
    hasIcons: false,
    defaultValue: str,
    onChange(value) {
      if ("" !== value) {
        if (null == value) {
          let obj = { type, value: null };
          executeStateUpdate(obj);
          const current = ref.current;
          if (current != null) {
            current.setValue("");
          }
        } else {
          obj = { type, value };
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
    const obj2 = { style: animatedStyle, accessibilityElementsHidden: !tmp8, importantForAccessibility: null, children: null };
    let str2 = "no-hide-descendants";
    if (tmp8) {
      str2 = "auto";
    }
    obj2.importantForAccessibility = str2;
    const obj3 = { icon: null, label: null, onPress: null, start: true, end: true };
    const obj4 = { IconComponent: tmp3(tmp4[9]).XSmallIcon };
    obj3.icon = tmp12(tmp3(tmp4[8]).TableRow.Icon, obj4);
    const intl = tmp3(tmp4[10]).intl;
    obj3.label = intl.string(tmp3(tmp4[10]).t["5uAtZN"]);
    obj3.onPress = function onPress() {
      executeStateUpdate({ type, value: null });
      const current = ref.current;
      if (current != null) {
        current.setValue("");
      }
    };
    obj2.children = tmp12(tmp3(tmp4[8]).TableRow, obj3);
    tmp12Result = tmp12(options(tmp4[3]).View, obj2);
  }
  children[1] = tmp12Result;
  return memo1(executeStateUpdate, { children });
});