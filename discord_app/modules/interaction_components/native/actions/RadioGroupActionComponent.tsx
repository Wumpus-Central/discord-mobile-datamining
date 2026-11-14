// === Module 20278: RadioGroupActionComponent ===

// Module 20278 (RadioGroupActionComponent)
import _modDef1655 from "module_1655" /* 1655 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: closure_6 } = jsxProd);
let closure_7 = { code: "(function RadioGroupActionComponentTsx1(){let[withSpring,hasValue,SUBTLE_SPRING]=this.__closure;return{maxHeight:withSpring(hasValue?60:0,SUBTLE_SPRING),marginTop:withSpring(hasValue?8:0,SUBTLE_SPRING),opacity:withSpring(hasValue?1:0,SUBTLE_SPRING)};})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/native/actions/RadioGroupActionComponent.tsx");

export default noop.memo(function RadioGroupActionComponent(type) {
  type = type.type;
  _require = type;
  const options = type.options;
  importDefault = options;
  const required = type.required;
  dependencyMap = required;
  ref = ref.useRef(null);
  items = [options];
  const memo = ref.useMemo(() => {
    value = undefined;
    const iter = _undefined.find((item) => item.default);
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
  const componentState = require("ComponentStateContext").useComponentState(type, tmp5);
  state = componentState.state;
  const executeStateUpdate = componentState.executeStateUpdate;
  const items1 = [state, type];
  const memo1 = ref.useMemo(() => {
    type = undefined;
    if (state != null) {
      type = state.type;
    }
    value = null;
    if (type === c0) {
      value = state.value;
    }
    return value;
  }, items1);
  let obj2 = require("ComponentStateContext");
  const items2 = [closure_7, require("spring/spring").withSpring, null != memo1, require("springPresets").SUBTLE_SPRING];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp9, tmp10, tmp11, tmp12] = items2;
  class RadioGroupActionComponentTsx1 {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_1;
      num = 0;
      if (closure_1) {
        num = 60;
      }
      obj = { maxHeight: tmp(num, closure_2), marginTop: null, opacity: null };
      tmp3 = closure_2;
      num2 = 0;
      if (tmp2) {
        num2 = 8;
      }
      obj.marginTop = tmp(num2, tmp3);
      num3 = 0;
      if (tmp2) {
        num3 = 1;
      }
      obj.opacity = tmp(num3, tmp3);
      return obj;
    }
  }
  const items3 = [tmp10, tmp11, tmp12];
  RadioGroupActionComponentTsx1.__closure = items3;
  RadioGroupActionComponentTsx1.__workletHash = 382181795595;
  RadioGroupActionComponentTsx1.__initData = tmp9;
  const animatedStyle = require("module_1655").useAnimatedStyle(RadioGroupActionComponentTsx1);
  let str = memo1;
  if (memo1 == null) {
    str = "";
  }
  const tmp14 = memo1;
  const tmp15 = executeStateUpdate;
  const tmp3Result = require("module_1655");
  const children = [
    state(require("TableRadioGroup").TableRadioGroup, {
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
      children: options.map((label) => state(type(_undefined2[7]).TableRadioRow, { label: label.label, subLabel: label.description, value: label.value }, label.value))
    }),

  ];
  let tmp16Result = !required;
  if (!required) {
    const obj5 = { style: animatedStyle, accessibilityElementsHidden: !tmp8, importantForAccessibility: null, children: null };
    let str2 = "no-hide-descendants";
    if (tmp8) {
      str2 = "auto";
    }
    obj5.importantForAccessibility = str2;
    const obj6 = { icon: null, label: null, onPress: null, start: true, end: true };
    const obj7 = { IconComponent: tmp3(7549).XSmallIcon };
    obj6.icon = tmp16(tmp3(7443).TableRow.Icon, obj7);
    const intl = tmp3(1113).intl;
    obj6.label = intl.string(tmp3(1113).t["5uAtZN"]);
    obj6.onPress = function onPress() {
      executeStateUpdate({ type, value: null });
      const current = ref.current;
      if (current != null) {
        current.setValue("");
      }
    };
    obj5.children = tmp16(tmp3(7443).TableRow, obj6);
    tmp16Result = tmp16(_modDef1655.View, obj5);
  }
  children[1] = tmp16Result;
  return tmp14(tmp15, { children });
});