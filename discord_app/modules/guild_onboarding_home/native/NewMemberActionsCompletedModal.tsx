// === Module 17547: NewMemberActionsCompletedModal ===

// Module 17547 (NewMemberActionsCompletedModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import timing from "timing" /* 4897 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;

let hasOwnProperty;
let metroRequire;
let obj2;
let size;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { screen: { flex: 1, position: "absolute", width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.8)", display: "flex", alignItems: "center", justifyContent: "center" }, text: { marginBottom: 16 }, progressBackground: size, progressForeground: obj2 };
size = { borderRadius: nativeDefault.radii.round, height: 8, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, width: "60%" };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_330, borderRadius: nativeDefault.radii.round, height: 8 };
let closure_7 = createStyles(obj);
const __initData = { code: "function NewMemberActionsCompletedModalTsx1(){const{withDelay,withTiming,barWidth}=this.__closure;return{width:withDelay(500,withTiming(barWidth.get()*100+\"%\",{duration:700}))};}" };
const __initData2 = { code: "function NewMemberActionsCompletedModalTsx2(){const{withDelay,withTiming,barWidth}=this.__closure;return{width:withDelay(500,withTiming(barWidth.get()*100+\"%\",{duration:700}))};}" };
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((numActions) => {
  let items2;
  let items3;
  let screen;
  let sharedValue;
  let text;
  let tmp11;
  let tmp6;
  let tmp7;
  const tmp = sharedValue;
  let obj = sharedValue(576);
  const cResult = obj.c(20);
  numActions = numActions.numActions;
  const initialPercent = numActions.initialPercent;
  const tmp4 = closure_7();
  let obj2 = sharedValue(4618);
  sharedValue = obj2.useSharedValue(initialPercent);
  if (cResult[0] !== sharedValue) {
    const fn = function h() {
      const result = sharedValue.set(1);
    };
    const items = [sharedValue];
    cResult[0] = sharedValue;
    cResult[1] = fn;
    cResult[2] = items;
    tmp7 = items;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const effect = react.useEffect(tmp6, tmp7);
  const tmpResult = tmp(4618);
  class T {
    constructor() {
      let obj2;
      let withDelay;
      const obj = { width: withDelay(500, obj2.withTiming(`${100 * sharedValue.get()}%`, { duration: 700 })) };
      withDelay = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      obj2 = timing;
      return obj;
    }
  }
  T.__closure = { withDelay: tmp(4618).withDelay, withTiming: tmp(4897).withTiming, barWidth: sharedValue };
  T.__workletHash = 7643178959760;
  T.__initData = __initData;
  ({ withDelay: tmp(4618).withDelay, withTiming: tmp(4897).withTiming, barWidth: sharedValue });
  const animatedStyle = tmpResult.useAnimatedStyle(T);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        timerId = setTimeout(() => {
          const obj = closure_1_1(closure_1_2[9]);
          return obj.popWithKey(sharedValue(closure_1_2[10]).NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY);
        }, 2500);
        return;
      }
    }
    const items1 = [];
    cResult[3] = E;
    cResult[4] = items1;
    tmp11 = items1;
  } else {
    class E {
      constructor() {
        timerId = setTimeout(() => {
          const obj = closure_1_1(closure_1_2[9]);
          return obj.popWithKey(sharedValue(closure_1_2[10]).NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY);
        }, 2500);
        return;
      }
    }
    tmp11 = cResult[4];
  }
  const effect1 = react.useEffect(E, tmp11);
  ({ screen, text } = tmp4);
  if (cResult[5] !== numActions) {
    class E {
      constructor() {
        timerId = setTimeout(() => {
          const obj = closure_1_1(closure_1_2[9]);
          return obj.popWithKey(sharedValue(closure_1_2[10]).NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY);
        }, 2500);
        return;
      }
    }
    const obj5 = { count: numActions };
    cResult[5] = numActions;
    cResult[6] = obj6.format(tmp(1126).t.pGj5u2, obj5);
    const formatResult = obj6.format(tmp(1126).t.pGj5u2, obj5);
  } else {
    class E {
      constructor() {
        timerId = setTimeout(() => {
          const obj = closure_1_1(closure_1_2[9]);
          return obj.popWithKey(sharedValue(closure_1_2[10]).NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY);
        }, 2500);
        return;
      }
    }
  }
  if (cResult[7] === tmp4.text) {
    class E {
      constructor() {
        timerId = setTimeout(() => {
          const obj = closure_1_1(closure_1_2[9]);
          return obj.popWithKey(sharedValue(closure_1_2[10]).NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY);
        }, 2500);
        return;
      }
    }
    if (cResult[10] === animatedStyle) {
      class E {
        constructor() {
          timerId = setTimeout(() => {
            const obj = closure_1_1(closure_1_2[9]);
            return obj.popWithKey(sharedValue(closure_1_2[10]).NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY);
          }, 2500);
          return;
        }
      }
      if (cResult[13] === tmp4.progressBackground) {
        class E {
          constructor() {
            timerId = setTimeout(() => {
              const obj = closure_1_1(closure_1_2[9]);
              return obj.popWithKey(sharedValue(closure_1_2[10]).NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY);
            }, 2500);
            return;
          }
        }
        if (cResult[16] === tmp4.screen) {
          class E {
            constructor() {
              timerId = setTimeout(() => {
                const obj = closure_1_1(closure_1_2[9]);
                return obj.popWithKey(sharedValue(closure_1_2[10]).NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY);
              }, 2500);
              return;
            }
          }
        }
        const obj7 = { style: screen, children: items2 };
        items2 = [tmp15, tmp21];
        cResult[16] = tmp4.screen;
        cResult[17] = tmp21;
        cResult[18] = tmp15;
        closure_6(View, obj7);
        class T {
          constructor() {
            let obj2;
            let withDelay;
            const obj = { width: withDelay(500, obj2.withTiming(`${100 * sharedValue.get()}%`, { duration: 700 })) };
            withDelay = ReanimatedRexport.withDelay;
            ReanimatedRexport;
            obj2 = timing;
            return obj;
          }
        }
      }
      const obj8 = { style: tmp4.progressBackground, children: tmp17 };
      cResult[13] = tmp4.progressBackground;
      cResult[14] = tmp17;
      cResult[15] = closure_5(View, obj8);
      const tmp24 = closure_5(View, obj8);
    }
    const obj9 = { style: items3 };
    items3 = [tmp4.progressForeground, animatedStyle];
    cResult[10] = animatedStyle;
    cResult[11] = tmp4.progressForeground;
    cResult[12] = closure_5(ReanimatedRexportDefault.View, obj9);
    const tmp20 = closure_5(ReanimatedRexportDefault.View, obj9);
  }
  cResult[7] = tmp4.text;
  cResult[8] = tmp13;
  cResult[9] = closure_5(tmp(4892).Text, { style: text, variant: "heading-xl/semibold", color: "text-overlay-light", children: tmp13 });
  const tmp16 = closure_5(tmp(4892).Text, { style: text, variant: "heading-xl/semibold", color: "text-overlay-light", children: tmp13 });
}) : ((arg0) => {
  let initialPercent;
  let intl;
  let items1;
  let items2;
  let numActions;
  let obj7;
  let sharedValue;
  ({ initialPercent, numActions } = arg0);
  const tmp = closure_7();
  let obj = sharedValue(4618);
  sharedValue = obj.useSharedValue(initialPercent);
  const items = [sharedValue];
  const effect = react.useEffect(() => {
    const result = sharedValue.set(1);
  }, items);
  let obj2 = sharedValue(4618);
  const fn = function y() {
    let obj2;
    let withDelay;
    const obj = { width: withDelay(500, obj2.withTiming(`${100 * sharedValue.get()}%`, { duration: 700 })) };
    withDelay = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    obj2 = timing;
    return obj;
  };
  fn.__closure = { withDelay: sharedValue(4618).withDelay, withTiming: sharedValue(4897).withTiming, barWidth: sharedValue };
  fn.__workletHash = 8771000018451;
  fn.__initData = __initData2;
  ({ withDelay: sharedValue(4618).withDelay, withTiming: sharedValue(4897).withTiming, barWidth: sharedValue });
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const effect1 = react.useEffect(() => {
    const timerId = setTimeout(() => {
      const obj = closure_1_1(closure_1_2[9]);
      return obj.popWithKey(sharedValue(closure_1_2[10]).NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY);
    }, 2500);
  }, []);
  const obj4 = { style: tmp.screen, children: items1 };
  const obj5 = { style: tmp.text, variant: "heading-xl/semibold", color: "text-overlay-light", children: intl.format(sharedValue(1126).t.pGj5u2, { count: numActions }) };
  const Text = sharedValue(4892).Text;
  intl = sharedValue(1126).intl;
  items1 = [closure_5(Text, obj5), ];
  const obj6 = { style: tmp.progressBackground, children: closure_5(ReanimatedRexportDefault.View, obj7) };
  obj7 = { style: items2 };
  items2 = [tmp.progressForeground, animatedStyle];
  items1[1] = closure_5(View, obj6);
  return closure_6(View, obj4);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_onboarding_home/native/NewMemberActionsCompletedModal.tsx");

export default tmp4;