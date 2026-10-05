// discord_app/modules/interaction_components/native/actions/RadioGroupActionComponent.tsx
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../../design/animation/reanimated/spring/springPresets.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let type;

let closure_4;
let hasOwnProperty;
let metroRequire;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
const __initData = {
  code: "function RadioGroupActionComponentTsx1(){const{withSpring,hasValue,SUBTLE_SPRING}=this.__closure;return{maxHeight:withSpring(hasValue?60:0,SUBTLE_SPRING),marginTop:withSpring(hasValue?8:0,SUBTLE_SPRING),opacity:withSpring(hasValue?1:0,SUBTLE_SPRING)};}",
};
const __initData2 = {
  code: "function RadioGroupActionComponentTsx2(){const{withSpring,hasValue,SUBTLE_SPRING}=this.__closure;return{maxHeight:withSpring(hasValue?60:0,SUBTLE_SPRING),marginTop:withSpring(hasValue?8:0,SUBTLE_SPRING),opacity:withSpring(hasValue?1:0,SUBTLE_SPRING)};}",
};
let memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (type) => {
        let executeStateUpdate;
        let options;
        let ref;
        let required;
        let state;
        let tmp5;
        let obj = type(ref[3]);
        const cResult = obj.c(25);
        type = type.type;
        ({ options, required } = type);
        ref = executeStateUpdate.useRef(null);
        if (cResult[0] !== options) {
          const iter = options.find((item) => item.default);
          let value;
          if (iter != null) {
            value = iter.value;
          }
          let num = 0;
          cResult[0] = options;
          let num2 = 1;
          cResult[1] = value;
          tmp5 = value;
        } else {
          tmp5 = cResult[1];
        }
        if (cResult[2] === tmp5) {
          let tmp7;
          if (cResult[3] === type) {
            tmp7 = cResult[4];
          }
          const tmpResult = tmp(tmp2[4]);
          const componentState = tmpResult.useComponentState(type, tmp7);
          ({ state, executeStateUpdate } = componentState);
          let type1;
          if (state != null) {
            type1 = state.type;
          }
          let str = null;
          if (type1 === type) {
            str = state.value;
          }
          let closure_5 = tmp12;
          const tmpResult2 = tmp(tmp2[5]);
          class I {
            constructor() {
              let num2;
              let num3;
              let withSpring2;
              let withSpring3;
              let num = 0;
              const withSpring = spring.withSpring;
              spring;
              if (closure_5) {
                num = 60;
              }
              const obj = {
                maxHeight: withSpring(num, springPresets.SUBTLE_SPRING),
                marginTop: withSpring2(num2, springPresets.SUBTLE_SPRING),
                opacity: withSpring3(num3, springPresets.SUBTLE_SPRING),
              };
              num2 = 0;
              withSpring2 = spring.withSpring;
              spring;
              if (closure_5) {
                num2 = 8;
              }
              num3 = 0;
              withSpring3 = spring.withSpring;
              spring;
              if (closure_5) {
                num3 = 1;
              }
              return obj;
            }
          }
          let obj2 = {
            withSpring: tmp(ref[6]).withSpring,
            hasValue: null != str,
            SUBTLE_SPRING: tmp(ref[7]).SUBTLE_SPRING,
          };
          const useAnimatedStyle = tmpResult2.useAnimatedStyle;
          I.__closure = obj2;
          let num3 = 1287549755250;
          I.__workletHash = 1287549755250;
          I.__initData = __initData;
          const animatedStyle = useAnimatedStyle(I);
          if (cResult[5] === executeStateUpdate) {
            if (cResult[6] === required) {
              if (cResult[7] === type) {
                let tmp16;
                if (cResult[8] === str) {
                  tmp16 = cResult[9];
                }
                let closure_6 = tmp16;
                if (str == null) {
                  str = "";
                }
                if (cResult[10] !== options) {
                  const _Symbol = Symbol;
                  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                    class N {
                      constructor(label) {
                        const obj = { label: label.label, subLabel: label.description, value: label.value };
                        return str(type(ref[8]).TableRadioRow, obj, label.value);
                      }
                    }
                    cResult[12] = N;
                  } else {
                    class N {
                      constructor(label) {
                        const obj = { label: label.label, subLabel: label.description, value: label.value };
                        return str(type(ref[8]).TableRadioRow, obj, label.value);
                      }
                    }
                  }
                  const mapped = options.map(N);
                  cResult[10] = options;
                  cResult[11] = mapped;
                } else {
                  class N {
                    constructor(label) {
                      const obj = { label: label.label, subLabel: label.description, value: label.value };
                      return str(type(ref[8]).TableRadioRow, obj, label.value);
                    }
                  }
                }
                if (cResult[13] === tmp16) {
                  class N {
                    constructor(label) {
                      const obj = { label: label.label, subLabel: label.description, value: label.value };
                      return str(type(ref[8]).TableRadioRow, obj, label.value);
                    }
                  }
                }
                const obj3 = { hasIcons: false, defaultValue: str, onChange: tmp16, groupRef: ref, children: tmp17 };
                cResult[13] = tmp16;
                const tmp23 = str(type(ref[9]).TableRadioGroup, obj3);
                class I {
                  constructor() {
                    let num2;
                    let num3;
                    let withSpring2;
                    let withSpring3;
                    let num = 0;
                    const withSpring = spring.withSpring;
                    spring;
                    if (closure_5) {
                      num = 60;
                    }
                    const obj = {
                      maxHeight: withSpring(num, springPresets.SUBTLE_SPRING),
                      marginTop: withSpring2(num2, springPresets.SUBTLE_SPRING),
                      opacity: withSpring3(num3, springPresets.SUBTLE_SPRING),
                    };
                    num2 = 0;
                    withSpring2 = spring.withSpring;
                    spring;
                    if (closure_5) {
                      num2 = 8;
                    }
                    num3 = 0;
                    withSpring3 = spring.withSpring;
                    spring;
                    if (closure_5) {
                      num3 = 1;
                    }
                    return obj;
                  }
                }
                cResult[14] = str;
                cResult[15] = tmp17;
                cResult[16] = tmp23;
              }
            }
          }
          const fn = function v(value) {
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
          };
          cResult[5] = executeStateUpdate;
          cResult[6] = required;
          cResult[7] = type;
          cResult[8] = str;
          cResult[9] = fn;
          tmp16 = fn;
        }
        let tmp8;
        if (null != tmp5) {
          class N {
            constructor(label) {
              const obj = { label: label.label, subLabel: label.description, value: label.value };
              return str(type(ref[8]).TableRadioRow, obj, label.value);
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
      }
    : (type) => {
        let Icon;
        let TableRow;
        let intl;
        let obj6;
        let obj7;
        let ref;
        let str2;
        type = type.type;
        const options = type.options;
        const required = type.required;
        let obj = ref;
        ref = ref.useRef(null);
        const items = [options];
        const memo = ref.useMemo(() => {
          let value;
          const iter = options.find((item) => item.default);
          if (iter != null) {
            value = iter.value;
          }
          return value;
        }, items);
        const tmp3 = type;
        let tmp6;
        const useComponentState = type(required[4]).useComponentState;
        type(required[4]);
        if (null != memo) {
          let obj2 = { type, value: memo };
          tmp6 = obj2;
        }
        const componentState = useComponentState(type, tmp6);
        const state = componentState.state;
        const executeStateUpdate = componentState.executeStateUpdate;
        const items1 = [state, type];
        const memo1 = obj.useMemo(() => {
          type = undefined;
          if (state != null) {
            type = state.type;
          }
          let value = null;
          if (type === type) {
            value = state.value;
          }
          return value;
        }, items1);
        let closure_7 = tmp9;
        const fn = function s() {
          let num2;
          let num3;
          let withSpring2;
          let withSpring3;
          let num = 0;
          const withSpring = spring.withSpring;
          spring;
          if (closure_7) {
            num = 60;
          }
          const obj = {
            maxHeight: withSpring(num, springPresets.SUBTLE_SPRING),
            marginTop: withSpring2(num2, springPresets.SUBTLE_SPRING),
            opacity: withSpring3(num3, springPresets.SUBTLE_SPRING),
          };
          num2 = 0;
          withSpring2 = spring.withSpring;
          spring;
          if (closure_7) {
            num2 = 8;
          }
          num3 = 0;
          withSpring3 = spring.withSpring;
          spring;
          if (closure_7) {
            num3 = 1;
          }
          return obj;
        };
        const tmp3Result = tmp3(required[5]);
        fn.__closure = {
          withSpring: tmp3(required[6]).withSpring,
          hasValue: null != memo1,
          SUBTLE_SPRING: tmp3(required[7]).SUBTLE_SPRING,
        };
        fn.__workletHash = 9690732954129;
        fn.__initData = __initData2;
        ({
          withSpring: tmp3(required[6]).withSpring,
          hasValue: null != memo1,
          SUBTLE_SPRING: tmp3(required[7]).SUBTLE_SPRING,
        });
        const animatedStyle = tmp3Result.useAnimatedStyle(fn);
        let str = memo1;
        const TableRadioGroup = tmp3(tmp4[9]).TableRadioGroup;
        const tmp11 = memo1;
        const tmp12 = executeStateUpdate;
        if (memo1 == null) {
          str = "";
        }
        const children = [,];
        const obj4 = {
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
          children: options.map((label) => {
            const obj = { label: label.label, subLabel: label.description, value: label.value };
            return state(type(required[8]).TableRadioRow, obj, label.value);
          }),
        };
        children[0] = state(TableRadioGroup, obj4);
        let tmp13Result = !required;
        if (tmp13Result) {
          const obj5 = {
            style: animatedStyle,
            accessibilityElementsHidden: null == memo1,
            importantForAccessibility: str2,
            children: state(TableRow, obj6),
          };
          str2 = "no-hide-descendants";
          const View = options(tmp4[5]).View;
          if (null != memo1) {
            str2 = "auto";
          }
          obj6 = {
            icon: state(Icon, obj7),
            label: intl.string(tmp3(required[12]).t["5uAtZN"]),
            onPress() {
              const obj = { type, value: null };
              executeStateUpdate(obj);
              const current = ref.current;
              if (current != null) {
                current.setValue("");
              }
            },
            start: true,
            end: true,
          };
          TableRow = tmp3(tmp4[10]).TableRow;
          obj7 = { IconComponent: tmp3(required[11]).XSmallIcon };
          Icon = tmp3(tmp4[10]).TableRow.Icon;
          intl = tmp3(tmp4[12]).intl;
          tmp13Result = tmp13(View, obj5);
        }
        children[1] = tmp13Result;
        return tmp11(tmp12, { children });
      },
);
const result = size.fileFinishedImporting(
  "modules/interaction_components/native/actions/RadioGroupActionComponent.tsx",
);

export default memoResult;
