// === Module 16880: SearchTabsTransitionGroup ===

// Module 16880 (SearchTabsTransitionGroup)
import c from "c" /* 576 */;
import native from "native" /* 4589 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import spring from "spring" /* 5597 */;
import springPresets from "springPresets" /* 5598 */;
import Tabs_Tabs from "Tabs/Tabs" /* 12282 */;
import noop from "module_19" /* 19 */;

require = fn;
function getItemKey(items) {
  items = items.items;
  const mapped = items.map((id) => id.id);
  return mapped.join("-");
}
function renderItem(key, state, transitionState, cleanUp) {
  return <closure_17 key={key} state={state} transitionState={transitionState} cleanUp={cleanUp} />;
}
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = setting(576).c(2);
  let obj = setting(576);
  setting = setting(2028).SearchResultExactCountEnabled.useSetting();
  if (cResult[0] !== setting) {
    const fn = function t(toLocaleString) {
      if (!setting) {
        if (toLocaleString > 1000) {
          const _HermesInternal = HermesInternal;
          let combined = "(" + Tabs_Tabs.defaultCountFormatter(1000) + "+)";
        }
        return combined;
      }
      combined = "(" + Tabs_Tabs.defaultCountFormatter(toLocaleString) + ")";
    };
    cResult[0] = setting;
    cResult[1] = fn;
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => {
  setting = setting(2028).SearchResultExactCountEnabled.useSetting();
  const items = [setting];
  return noop.useCallback((toLocaleString) => {
    if (!setting) {
      if (toLocaleString > 1000) {
        const _HermesInternal = HermesInternal;
        let combined = "(" + Tabs_Tabs.defaultCountFormatter(1000) + "+)";
      }
      return combined;
    }
    combined = "(" + Tabs_Tabs.defaultCountFormatter(toLocaleString) + ")";
  }, items);
});
const __initData = { code: "function SearchTabsTransitionGroupTsx1(){const{withSpring,opacity,springStandard,transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,\"respect-motion-settings\",function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}}),position:opacity.get()===1?\"relative\":\"absolute\"};}" };
let closure_8 = { code: "function SearchTabsTransitionGroupTsx2(finished){const{transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
const __initData2 = { code: "function SearchTabsTransitionGroupTsx3(){const{swipeForMemberListContext}=this.__closure;var _swipeForMemberListCo;(_swipeForMemberListCo=swipeForMemberListContext)===null||_swipeForMemberListCo===void 0||_swipeForMemberListCo.disallowGesture.set(false);}" };
const __initData3 = { code: "function SearchTabsTransitionGroupTsx4(){const{state}=this.__closure;return state.scrollOffset.get()>0;}" };
const __initData4 = { code: "function SearchTabsTransitionGroupTsx5(isOffsetFromStart,prevIsOffsetFromStart){const{swipeForMemberListContext}=this.__closure;if(isOffsetFromStart!==prevIsOffsetFromStart){var _swipeForMemberListCo;(_swipeForMemberListCo=swipeForMemberListContext)===null||_swipeForMemberListCo===void 0||_swipeForMemberListCo.disallowGesture.set(isOffsetFromStart);}}" };
const __initData5 = { code: "function SearchTabsTransitionGroupTsx6(){const{withSpring,opacity,springStandard,transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,'respect-motion-settings',function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}}),position:opacity.get()===1?'relative':'absolute'};}" };
let closure_13 = { code: "function SearchTabsTransitionGroupTsx7(finished){const{transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
const __initData6 = { code: "function SearchTabsTransitionGroupTsx8(){const{swipeForMemberListContext}=this.__closure;var _swipeForMemberListCo;(_swipeForMemberListCo=swipeForMemberListContext)===null||_swipeForMemberListCo===void 0||_swipeForMemberListCo.disallowGesture.set(false);}" };
const __initData7 = { code: "function SearchTabsTransitionGroupTsx9(){const{state}=this.__closure;return state.scrollOffset.get()>0;}" };
const __initData8 = { code: "function SearchTabsTransitionGroupTsx10(isOffsetFromStart,prevIsOffsetFromStart){const{swipeForMemberListContext}=this.__closure;if(isOffsetFromStart!==prevIsOffsetFromStart){var _swipeForMemberListCo;(_swipeForMemberListCo=swipeForMemberListContext)===null||_swipeForMemberListCo===void 0||_swipeForMemberListCo.disallowGesture.set(isOffsetFromStart);}}" };
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((state) => {
  const cResult = state(cleanUp[3]).c(14);
  state = state.state;
  const transitionState = state.transitionState;
  cleanUp = state.cleanUp;
  let obj = state(cleanUp[3]);
  let num = 0;
  if (transitionState === state(cleanUp[7]).TransitionStates.MOUNTED) {
    num = 1;
  }
  const sharedValue = state(cleanUp[6]).useSharedValue(num);
  let obj2 = state(cleanUp[6]);
  let fn = function _() {
    let obj = { opacity: null, position: null };
    value = sharedValue.get();
    const fn = function t(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = transitionState === state(cleanUp[7]).TransitionStates.YEETED;
      }
      if (tmp) {
        state(cleanUp[6]).runOnJS(closure_1_2)();
        const obj = state(cleanUp[6]);
      }
    };
    const obj2 = spring;
    fn.__closure = { transitionState, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
    fn.__workletHash = 15209468679721;
    fn.__initData = __initData;
    obj.opacity = obj2.withSpring(value, springPresets.springStandard, "respect-motion-settings", fn);
    let str = "absolute";
    if (1 === sharedValue.get()) {
      str = "relative";
    }
    obj.position = str;
    return obj;
  };
  const tmpResult = state(cleanUp[6]);
  fn.__closure = { withSpring: state(cleanUp[8]).withSpring, opacity: sharedValue, springStandard: state(cleanUp[9]).springStandard, transitionState, TransitionStates: state(cleanUp[7]).TransitionStates, runOnJS: state(cleanUp[6]).runOnJS, cleanUp };
  fn.__workletHash = 7055696500315;
  fn.__initData = __initData;
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  if (cResult[0] === sharedValue) {
    if (cResult[1] === transitionState) {
      let tmp6 = cResult[2];
      let tmp7 = cResult[3];
    }
    const effect = sharedValue.useEffect(tmp6, tmp7);
    const tmp11 = closure_5();
    const context = sharedValue.useContext(tmp(tmp2[10]).SwipeForMemberListContext);
    let disallowGesture;
    if (context != null) {
      disallowGesture = context.disallowGesture;
    }
    if (cResult[4] !== disallowGesture) {
      const fn3 = function v() {
        if (context != null) {
          const disallowGesture = context.disallowGesture;
          const result = disallowGesture.set(false);
        }
      };
      const obj4 = { swipeForMemberListContext: context };
      fn3.__closure = obj4;
      fn3.__workletHash = 5080152010224;
      fn3.__initData = __initData2;
      let disallowGesture1;
      if (context != null) {
        disallowGesture1 = context.disallowGesture;
      }
      cResult[4] = disallowGesture1;
      cResult[5] = fn3;
      class G {
        constructor() {
          scrollOffset = state.scrollOffset;
          return scrollOffset.get() > 0;
        }
      }
    } else {
      const tmp15 = cResult[5];
    }
    class G {
      constructor() {
        scrollOffset = state.scrollOffset;
        return scrollOffset.get() > 0;
      }
    }
    const obj5 = { state };
    G.__closure = obj5;
    G.__workletHash = 7791091456487;
    G.__initData = __initData3;
    class L {
      constructor(arg0, arg1) {
        if (state !== arg1) {
          tmp = null;
          if (closure_4 != null) {
            disallowGesture = closure_4.disallowGesture;
            result = disallowGesture.set(state);
          }
        }
        return;
      }
    }
    const obj6 = { swipeForMemberListContext: context };
    L.__closure = obj6;
    L.__workletHash = 15386779064911;
    L.__initData = __initData4;
    const animatedReaction = tmp(tmp2[6]).useAnimatedReaction(G, L);
    let gesture;
    if (context != null) {
      gesture = context.gesture;
    }
    let tmp22;
    if (null != context) {
      tmp22 = tmp15;
    }
    if (cResult[6] === tmp11) {
      if (cResult[7] === state) {
        if (cResult[8] === gesture) {
          if (cResult[9] === tmp22) {
            let tmp23 = cResult[10];
          }
          if (cResult[11] === animatedStyle) {
            if (cResult[12] === tmp23) {
              const tmp26 = cResult[13];
            }
            return tmp26;
          }
          const obj7 = { style: animatedStyle, children: tmp23 };
          cResult[11] = animatedStyle;
          cResult[12] = tmp23;
          cResult[13] = context(transitionState(tmp2[6]).View, obj7);
          class G {
            constructor() {
              scrollOffset = state.scrollOffset;
              return scrollOffset.get() > 0;
            }
          }
          const tmp29 = context(transitionState(tmp2[6]).View, obj7);
        }
      }
    }
    const obj8 = { state, grow: false, formatCount: tmp11, simultaneousHandlers: gesture, onEndDrag: tmp22 };
    const tmp25 = context(tmp(tmp2[5]).Tabs, obj8);
    cResult[6] = tmp11;
    cResult[7] = state;
    cResult[8] = gesture;
    cResult[9] = tmp22;
    cResult[10] = tmp25;
    tmp23 = tmp25;
    const tmpResult2 = tmp(tmp2[6]);
  }
  const fn2 = function f() {
    let num = 1;
    if (transitionState === native.TransitionStates.YEETED) {
      num = 0;
    }
    const result = sharedValue.set(num);
  };
  const items = [sharedValue, transitionState];
  cResult[0] = sharedValue;
  cResult[1] = transitionState;
  cResult[2] = fn2;
  cResult[3] = items;
  tmp7 = items;
  tmp6 = fn2;
  const obj3 = { withSpring: state(cleanUp[8]).withSpring, opacity: sharedValue, springStandard: state(cleanUp[9]).springStandard, transitionState, TransitionStates: state(cleanUp[7]).TransitionStates, runOnJS: state(cleanUp[6]).runOnJS, cleanUp };
}) : ((state) => {
  state = state.state;
  const transitionState = state.transitionState;
  const cleanUp = state.cleanUp;
  let sharedValue;
  let context;
  let num = 0;
  if (transitionState === state(cleanUp[7]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = state(cleanUp[6]).useSharedValue(num);
  let obj = state(cleanUp[6]);
  let fn = function l() {
    let obj = { opacity: null, position: null };
    value = sharedValue.get();
    const fn = function t(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = transitionState === state(cleanUp[7]).TransitionStates.YEETED;
      }
      if (tmp) {
        state(cleanUp[6]).runOnJS(closure_1_2)();
        const obj = state(cleanUp[6]);
      }
    };
    const obj2 = spring;
    fn.__closure = { transitionState, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
    fn.__workletHash = 14638126185804;
    fn.__initData = __initData;
    obj.opacity = obj2.withSpring(value, springPresets.springStandard, "respect-motion-settings", fn);
    let str = "absolute";
    if (1 === sharedValue.get()) {
      str = "relative";
    }
    obj.position = str;
    return obj;
  };
  const tmpResult = state(cleanUp[6]);
  fn.__closure = { withSpring: state(cleanUp[8]).withSpring, opacity: sharedValue, springStandard: state(cleanUp[9]).springStandard, transitionState, TransitionStates: state(cleanUp[7]).TransitionStates, runOnJS: state(cleanUp[6]).runOnJS, cleanUp };
  fn.__workletHash = 2171925322300;
  fn.__initData = __initData5;
  const items = [sharedValue, transitionState];
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  const effect = sharedValue.useEffect(() => {
    let num = 1;
    if (transitionState === native.TransitionStates.YEETED) {
      num = 0;
    }
    const result = sharedValue.set(num);
  }, items);
  let obj2 = { withSpring: state(cleanUp[8]).withSpring, opacity: sharedValue, springStandard: state(cleanUp[9]).springStandard, transitionState, TransitionStates: state(cleanUp[7]).TransitionStates, runOnJS: state(cleanUp[6]).runOnJS, cleanUp };
  context = sharedValue.useContext(tmp(tmp2[10]).SwipeForMemberListContext);
  const fn2 = function h() {
    if (context != null) {
      const disallowGesture = context.disallowGesture;
      const result = disallowGesture.set(false);
    }
  };
  fn2.__closure = { swipeForMemberListContext: context };
  fn2.__workletHash = 6218655540507;
  fn2.__initData = __initData6;
  const items1 = [context];
  const callback = sharedValue.useCallback(fn2, items1);
  const tmp6 = closure_5();
  class F {
    constructor() {
      scrollOffset = state.scrollOffset;
      return scrollOffset.get() > 0;
    }
  }
  F.__closure = { state };
  F.__workletHash = 6546228134666;
  F.__initData = __initData7;
  class C {
    constructor(arg0, arg1) {
      if (state !== arg1) {
        tmp = null;
        if (closure_4 != null) {
          disallowGesture = closure_4.disallowGesture;
          result = disallowGesture.set(state);
        }
      }
      return;
    }
  }
  C.__closure = { swipeForMemberListContext: context };
  C.__workletHash = 16575969521243;
  C.__initData = __initData8;
  const animatedReaction = state(cleanUp[6]).useAnimatedReaction(F, C);
  const obj3 = { style: animatedStyle, children: null };
  const obj4 = { state, grow: false, formatCount: tmp6, simultaneousHandlers: null, onEndDrag: null };
  let gesture;
  if (context != null) {
    gesture = context.gesture;
  }
  obj4.simultaneousHandlers = gesture;
  let tmp12;
  if (null != context) {
    tmp12 = callback;
  }
  obj4.onEndDrag = tmp12;
  obj3.children = context(state(cleanUp[5]).Tabs, obj4);
  return context(transitionState(cleanUp[6]).View, obj3);
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/tabs/SearchTabsTransitionGroup.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((state) => {
  const cResult = c.c(2);
  state = state.state;
  if (cResult[0] !== state) {
    const obj2 = { items: null, getItemKey: null, renderItem: null };
    const items = [state];
    obj2.items = items;
    obj2.getItemKey = getItemKey;
    obj2.renderItem = renderItem;
    const tmp8 = jsx(native.TransitionGroup, { items: null, getItemKey: null, renderItem: null });
    cResult[0] = state;
    cResult[1] = tmp8;
    let tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : ((state) => {
  const obj = { items: null, getItemKey, renderItem };
  const items = [state.state];
  obj.items = items;
  return jsx(native.TransitionGroup, { items: null, getItemKey, renderItem });
});