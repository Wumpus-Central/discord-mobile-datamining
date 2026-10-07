// === Module 17547: NewMemberActionsCompletedModal ===

// Module 17547 (NewMemberActionsCompletedModal)
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import timing from "timing" /* 4897 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4896);
let obj2 = { screen: { flex: 1, position: "absolute", width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.8)", display: "flex", alignItems: "center", justifyContent: "center" }, text: { marginBottom: 16 }, progressBackground: null, progressForeground: null };
let size = { borderRadius: nativeDefault.radii.round, height: 8, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, width: "60%" };
obj2.progressBackground = size;
obj2.progressForeground = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_330, borderRadius: nativeDefault.radii.round, height: 8 };
let closure_7 = createStyles.createStyles(obj2);
const __initData = { code: "function NewMemberActionsCompletedModalTsx1(){const{withDelay,withTiming,barWidth}=this.__closure;return{width:withDelay(500,withTiming(barWidth.get()*100+\"%\",{duration:700}))};}" };
const __initData2 = { code: "function NewMemberActionsCompletedModalTsx2(){const{withDelay,withTiming,barWidth}=this.__closure;return{width:withDelay(500,withTiming(barWidth.get()*100+\"%\",{duration:700}))};}" };
const ReactCompilerGating = fn(558);
const obj3 = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_330, borderRadius: nativeDefault.radii.round, height: 8 };
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_onboarding_home/native/NewMemberActionsCompletedModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((numActions) => {
  const cResult = sharedValue(576).c(20);
  numActions = numActions.numActions;
  const tmp4 = closure_7();
  let obj = sharedValue(576);
  sharedValue = sharedValue(4618).useSharedValue(numActions.initialPercent);
  if (cResult[0] !== sharedValue) {
    const fn = function h() {
      const result = sharedValue.set(1);
    };
    const items = [sharedValue];
    cResult[0] = sharedValue;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp7 = items;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const effect = noop.useEffect(tmp6, tmp7);
  let obj2 = sharedValue(4618);
  class T {
    constructor() {
      obj = { width: null };
      obj2 = closure_0(closure_2[7]);
      obj3 = closure_0(closure_2[8]);
      obj.width = obj2.withDelay(500, obj3.withTiming(`${100 * closure_0.get()}%`, { duration: 700 }));
      return obj;
    }
  }
  const tmpResult = sharedValue(4618);
  T.__closure = { withDelay: sharedValue(4618).withDelay, withTiming: sharedValue(4897).withTiming, barWidth: sharedValue };
  T.__workletHash = 7643178959760;
  T.__initData = __initData;
  const animatedStyle = tmpResult.useAnimatedStyle(T);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        timerId = setTimeout(() => closure_1_1(5099).popWithKey(sharedValue(7533).NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY), 2500);
        return;
      }
    }
    const items1 = [];
    cResult[3] = E;
    cResult[4] = items1;
    let tmp11 = items1;
  } else {
    class E {
      constructor() {
        timerId = setTimeout(() => closure_1_1(5099).popWithKey(sharedValue(7533).NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY), 2500);
        return;
      }
    }
    tmp11 = cResult[4];
  }
  const effect1 = noop.useEffect(E, tmp11);
  ({ screen, text } = tmp4);
  if (cResult[5] !== numActions) {
    class E {
      constructor() {
        timerId = setTimeout(() => closure_1_1(5099).popWithKey(sharedValue(7533).NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY), 2500);
        return;
      }
    }
    const obj5 = { count: numActions };
    const formatResult = obj6.format(tmp(1126).t.pGj5u2, obj5);
    cResult[5] = numActions;
    cResult[6] = formatResult;
  } else {
    class E {
      constructor() {
        timerId = setTimeout(() => closure_1_1(5099).popWithKey(sharedValue(7533).NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY), 2500);
        return;
      }
    }
  }
  if (cResult[7] === tmp4.text) {
    class E {
      constructor() {
        timerId = setTimeout(() => closure_1_1(5099).popWithKey(sharedValue(7533).NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY), 2500);
        return;
      }
    }
    if (cResult[10] === animatedStyle) {
      class E {
        constructor() {
          timerId = setTimeout(() => closure_1_1(5099).popWithKey(sharedValue(7533).NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY), 2500);
          return;
        }
      }
      if (cResult[13] === tmp4.progressBackground) {
        class E {
          constructor() {
            timerId = setTimeout(() => closure_1_1(5099).popWithKey(sharedValue(7533).NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY), 2500);
            return;
          }
        }
        if (cResult[16] === tmp4.screen) {
          class E {
            constructor() {
              timerId = setTimeout(() => closure_1_1(5099).popWithKey(sharedValue(7533).NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY), 2500);
              return;
            }
          }
        }
        const obj7 = { style: screen, children: null };
        const items2 = [tmp15, tmp21];
        obj7.children = items2;
        cResult[16] = tmp4.screen;
        cResult[17] = tmp21;
        cResult[18] = tmp15;
        class T {
          constructor() {
            obj = { width: null };
            obj2 = closure_0(closure_2[7]);
            obj3 = closure_0(closure_2[8]);
            obj.width = obj2.withDelay(500, obj3.withTiming(`${100 * closure_0.get()}%`, { duration: 700 }));
            return obj;
          }
        }
        const tmp28 = closure_6(View, obj7);
      }
      const obj8 = { style: tmp4.progressBackground, children: tmp17 };
      const tmp24 = closure_5(View, obj8);
      cResult[13] = tmp4.progressBackground;
      cResult[14] = tmp17;
      cResult[15] = tmp24;
    }
    const obj9 = { style: null };
    const items3 = [tmp4.progressForeground, animatedStyle];
    obj9.style = items3;
    const tmp20 = closure_5(ReanimatedRexportDefault.View, obj9);
    cResult[10] = animatedStyle;
    cResult[11] = tmp4.progressForeground;
    cResult[12] = tmp20;
  }
  const tmp16 = closure_5(sharedValue(4892).Text, { style: text, variant: "heading-xl/semibold", color: "text-overlay-light", children: tmp13 });
  cResult[7] = tmp4.text;
  cResult[8] = tmp13;
  cResult[9] = tmp16;
  const obj4 = { withDelay: sharedValue(4618).withDelay, withTiming: sharedValue(4897).withTiming, barWidth: sharedValue };
}) : ((arg0) => {
  let sharedValue;
  ({ initialPercent, numActions } = arg0);
  const tmp = closure_7();
  sharedValue = sharedValue(4618).useSharedValue(initialPercent);
  const items = [sharedValue];
  const effect = noop.useEffect(() => {
    const result = sharedValue.set(1);
  }, items);
  let obj = sharedValue(4618);
  const fn = function y() {
    const obj = { width: null };
    const obj2 = ReanimatedRexport;
    obj.width = obj2.withDelay(500, timing.withTiming(`${100 * sharedValue.get()}%`, { duration: 700 }));
    return obj;
  };
  let obj2 = sharedValue(4618);
  fn.__closure = { withDelay: sharedValue(4618).withDelay, withTiming: sharedValue(4897).withTiming, barWidth: sharedValue };
  fn.__workletHash = 8771000018451;
  fn.__initData = __initData2;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const effect1 = noop.useEffect(() => {
    const timerId = setTimeout(() => closure_1_1(5099).popWithKey(sharedValue(7533).NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY), 2500);
  }, []);
  const obj4 = { style: tmp.screen, children: null };
  const obj5 = { style: tmp.text, variant: "heading-xl/semibold", color: "text-overlay-light", children: null };
  const intl = sharedValue(1126).intl;
  obj5.children = intl.format(sharedValue(1126).t.pGj5u2, { count: numActions });
  const items1 = [closure_5(sharedValue(4892).Text, obj5), ];
  const obj6 = { style: tmp.progressBackground, children: null };
  const obj7 = { style: null };
  const items2 = [tmp.progressForeground, animatedStyle];
  obj7.style = items2;
  obj6.children = closure_5(ReanimatedRexportDefault.View, obj7);
  items1[1] = closure_5(View, obj6);
  obj4.children = items1;
  return closure_6(View, obj4);
});