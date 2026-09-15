// === Module 17551: RadioGroupActionComponent ===

// Module 17551 (RadioGroupActionComponent)
import spring from "spring" /* 5058 */;
import springPresets from "springPresets" /* 5062 */;
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
  let tmp5;
  if (null != memo) {
    const obj3 = { type, value: memo };
    tmp5 = obj3;
  }
  const componentState = type(required[2]).useComponentState(type, tmp5);
  const state = componentState.state;
  const executeStateUpdate = componentState.executeStateUpdate;
  const items1 = [state, type];
  const memo1 = ref.useMemo(() => {
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
  let obj2 = type(required[2]);
  const fn = function p() {
    let num = 0;
    if (closure_7) {
      num = 60;
    }
    const obj2 = { maxHeight: spring.withSpring(num, springPresets.SUBTLE_SPRING), marginTop: null, opacity: null };
    let num2 = 0;
    if (closure_7) {
      num2 = 8;
    }
    obj2.marginTop = spring.withSpring(num2, springPresets.SUBTLE_SPRING);
    const tmpResult = spring;
    let num3 = 0;
    if (closure_7) {
      num3 = 1;
    }
    obj2.opacity = spring.withSpring(num3, springPresets.SUBTLE_SPRING);
    return obj2;
  };
  const tmp3Result = type(required[3]);
  fn.__closure = { withSpring: type(required[4]).withSpring, hasValue: null != memo1, SUBTLE_SPRING: type(required[5]).SUBTLE_SPRING };
  fn.__workletHash = 1287549755250;
  fn.__initData = __initData;
  const animatedStyle = tmp3Result.useAnimatedStyle(fn);
  let str = memo1;
  if (memo1 == null) {
    str = "";
  }
  const obj4 = { withSpring: type(required[4]).withSpring, hasValue: null != memo1, SUBTLE_SPRING: type(required[5]).SUBTLE_SPRING };
  const tmp10 = memo1;
  const tmp11 = executeStateUpdate;
  const children = [
    state(type(required[6]).TableRadioGroup, {
      hasIcons: false,
      defaultValue: str,
      onChange(value) {
        if ("" !== value) {
          if (null == value) {
            const obj2 = { type, value: null };
            executeStateUpdate(obj2);
            const current = ref.current;
            if (current != null) {
              current.setValue("");
            }
          } else {
            const obj = { type, value };
            executeStateUpdate(obj);
          }
        }
      },
      groupRef: ref,
      children: options.map((label) => state(type(required[7]).TableRadioRow, { label: label.label, subLabel: label.description, value: label.value }, label.value))
    }),

  ];
  let tmp12Result = !required;
  if (!required) {
    const obj6 = { style: animatedStyle, accessibilityElementsHidden: !tmp8, importantForAccessibility: null, children: null };
    let str2 = "no-hide-descendants";
    if (tmp8) {
      str2 = "auto";
    }
    obj6.importantForAccessibility = str2;
    const obj7 = { icon: null, label: null, onPress: null, start: true, end: true };
    const obj8 = { IconComponent: tmp3(tmp4[9]).XSmallIcon };
    obj7.icon = tmp12(tmp3(tmp4[8]).TableRow.Icon, obj8);
    const intl = tmp3(tmp4[10]).intl;
    obj7.label = intl.string(tmp3(tmp4[10]).t["5uAtZN"]);
    obj7.onPress = function onPress() {
      executeStateUpdate({ type, value: null });
      const current = ref.current;
      if (current != null) {
        current.setValue("");
      }
    };
    obj6.children = tmp12(tmp3(tmp4[8]).TableRow, obj7);
    tmp12Result = tmp12(options(tmp4[3]).View, obj6);
  }
  children[1] = tmp12Result;
  return tmp10(tmp11, { children });
});