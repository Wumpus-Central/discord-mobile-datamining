// === Module 18008: RadioGroupActionComponent ===

// Module 18008 (RadioGroupActionComponent)
import spring from "spring" /* 5375 */;
import springPresets from "springPresets" /* 5379 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const __initData = { code: "function RadioGroupActionComponentTsx1(){const{withSpring,hasValue,SUBTLE_SPRING}=this.__closure;return{maxHeight:withSpring(hasValue?60:0,SUBTLE_SPRING),marginTop:withSpring(hasValue?8:0,SUBTLE_SPRING),opacity:withSpring(hasValue?1:0,SUBTLE_SPRING)};}" };
const __initData2 = { code: "function RadioGroupActionComponentTsx2(){const{withSpring,hasValue,SUBTLE_SPRING}=this.__closure;return{maxHeight:withSpring(hasValue?60:0,SUBTLE_SPRING),marginTop:withSpring(hasValue?8:0,SUBTLE_SPRING),opacity:withSpring(hasValue?1:0,SUBTLE_SPRING)};}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/native/actions/RadioGroupActionComponent.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function RadioGroupActionComponent(type) {
  const cResult = type(ref[3]).c(25);
  type = type.type;
  ({ options, required } = type);
  ref = executeStateUpdate.useRef(null);
  if (cResult[0] !== options) {
    const iter = options.find((item) => item.default);
    value = undefined;
    if (iter != null) {
      value = iter.value;
    }
    cResult[0] = options;
    cResult[1] = value;
    let tmp5 = value;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp5) {
    if (cResult[3] === type) {
      let tmp7 = cResult[4];
    }
    const componentState = tmp(tmp2[4]).useComponentState(type, tmp7);
    ({ state, executeStateUpdate } = componentState);
    let type1;
    if (state != null) {
      type1 = state.type;
    }
    let str = null;
    if (type1 === type) {
      str = state.value;
    }
    closure_5 = tmp12;
    let tmpResult = tmp(tmp2[4]);
    class I {
      constructor() {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[6]);
        tmp3 = closure_5;
        num = 0;
        if (closure_5) {
          num = 60;
        }
        obj1 = { maxHeight: obj.withSpring(num, tmp(tmp2[7]).SUBTLE_SPRING), marginTop: null, opacity: null };
        tmpResult = tmp(tmp2[6]);
        num2 = 0;
        if (tmp3) {
          num2 = 8;
        }
        obj1.marginTop = tmpResult.withSpring(num2, tmp(tmp2[7]).SUBTLE_SPRING);
        tmpResult1 = tmp(tmp2[6]);
        num3 = 0;
        if (tmp3) {
          num3 = 1;
        }
        obj1.opacity = tmpResult1.withSpring(num3, tmp(tmp2[7]).SUBTLE_SPRING);
        return obj1;
      }
    }
    let obj2 = { withSpring: tmp(tmp2[6]).withSpring, hasValue: null != str, SUBTLE_SPRING: tmp(tmp2[7]).SUBTLE_SPRING };
    I.__closure = obj2;
    I.__workletHash = 1287549755250;
    I.__initData = __initData;
    const animatedStyle = tmp(tmp2[5]).useAnimatedStyle(I);
    if (cResult[5] === executeStateUpdate) {
      if (cResult[6] === required) {
        if (cResult[7] === type) {
          if (cResult[8] === str) {
            let tmp15 = cResult[9];
          }
          closure_6 = tmp15;
          if (str == null) {
            str = "";
          }
          if (cResult[10] !== options) {
            const _Symbol = Symbol;
            if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
              class N {
                constructor(arg0) {
                  obj = { label: type.label, subLabel: type.description, value: type.value };
                  return value(type(closure_2[8]).TableRadioRow, obj, type.value);
                }
              }
              cResult[12] = N;
            } else {
              class N {
                constructor(arg0) {
                  obj = { label: type.label, subLabel: type.description, value: type.value };
                  return value(type(closure_2[8]).TableRadioRow, obj, type.value);
                }
              }
            }
            const mapped = options.map(N);
            cResult[10] = options;
            cResult[11] = mapped;
          } else {
            class N {
              constructor(arg0) {
                obj = { label: type.label, subLabel: type.description, value: type.value };
                return value(type(closure_2[8]).TableRadioRow, obj, type.value);
              }
            }
            if (cResult[13] === tmp15) {
              class N {
                constructor(arg0) {
                  obj = { label: type.label, subLabel: type.description, value: type.value };
                  return value(type(closure_2[8]).TableRadioRow, obj, type.value);
                }
              }
            }
            const obj3 = { hasIcons: false, defaultValue: str, onChange: tmp15, groupRef: ref, children: tmp16 };
            const tmp23 = str(tmp(tmp2[9]).TableRadioGroup, obj3);
            cResult[13] = tmp15;
            cResult[14] = str;
            class I {
              constructor() {
                tmp = closure_0;
                tmp2 = closure_2;
                obj = closure_0(closure_2[6]);
                tmp3 = closure_5;
                num = 0;
                if (closure_5) {
                  num = 60;
                }
                obj1 = { maxHeight: obj.withSpring(num, tmp(tmp2[7]).SUBTLE_SPRING), marginTop: null, opacity: null };
                tmpResult = tmp(tmp2[6]);
                num2 = 0;
                if (tmp3) {
                  num2 = 8;
                }
                obj1.marginTop = tmpResult.withSpring(num2, tmp(tmp2[7]).SUBTLE_SPRING);
                tmpResult1 = tmp(tmp2[6]);
                num3 = 0;
                if (tmp3) {
                  num3 = 1;
                }
                obj1.opacity = tmpResult1.withSpring(num3, tmp(tmp2[7]).SUBTLE_SPRING);
                return obj1;
              }
            }
            cResult[16] = tmp23;
          }
        }
      }
    }
    function onChange(value) {
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
    }
    cResult[5] = executeStateUpdate;
    cResult[6] = required;
    cResult[7] = type;
    cResult[8] = str;
    cResult[9] = onChange;
    tmp15 = onChange;
    const tmpResult2 = tmp(tmp2[5]);
  }
  let tmp8;
  if (null != tmp5) {
    class N {
      constructor(arg0) {
        obj = { label: type.label, subLabel: type.description, value: type.value };
        return value(type(closure_2[8]).TableRadioRow, obj, type.value);
      }
    }
    tmp9[0] = type;
    tmp9[1] = tmp5;
    tmp8 = tmp9;
  }
  cResult[2] = tmp5;
  cResult[3] = type;
  cResult[4] = tmp8;
  tmp7 = tmp8;
  let obj = type(ref[3]);
}) : (function RadioGroupActionComponent(type) {
  type = type.type;
  options = type.options;
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
  const componentState = type(required[4]).useComponentState(type, tmp5);
  state = componentState.state;
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
  closure_7 = tmp8;
  let obj2 = type(required[4]);
  const fn = function s() {
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
  const tmp3Result = type(required[5]);
  fn.__closure = { withSpring: type(required[6]).withSpring, hasValue: null != memo1, SUBTLE_SPRING: type(required[7]).SUBTLE_SPRING };
  fn.__workletHash = 9690732954129;
  fn.__initData = __initData2;
  const animatedStyle = tmp3Result.useAnimatedStyle(fn);
  let str = memo1;
  if (memo1 == null) {
    str = "";
  }
  const obj4 = { withSpring: type(required[6]).withSpring, hasValue: null != memo1, SUBTLE_SPRING: type(required[7]).SUBTLE_SPRING };
  const tmp10 = memo1;
  const tmp11 = executeStateUpdate;
  const children = [
    state(type(required[9]).TableRadioGroup, {
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
      children: options.map((label) => state(type(required[8]).TableRadioRow, { label: label.label, subLabel: label.description, value: label.value }, label.value))
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
    const obj8 = { IconComponent: tmp3(tmp4[11]).XSmallIcon };
    obj7.icon = tmp12(tmp3(tmp4[10]).TableRow.Icon, obj8);
    const intl = tmp3(tmp4[12]).intl;
    obj7.label = intl.string(tmp3(tmp4[12]).t["5uAtZN"]);
    obj7.onPress = function onPress() {
      executeStateUpdate({ type, value: null });
      const current = ref.current;
      if (current != null) {
        current.setValue("");
      }
    };
    obj6.children = tmp12(tmp3(tmp4[10]).TableRow, obj7);
    tmp12Result = tmp12(options(tmp4[5]).View, obj6);
  }
  children[1] = tmp12Result;
  return tmp10(tmp11, { children });
}));