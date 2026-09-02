// === Module 16531: getItemKey ===

// Module 16531 (getItemKey)
import ManaContext from "ManaContext" /* 4204 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
function getItemKey(items) {
  items = items.items;
  const mapped = items.map((id) => id.id);
  return mapped.join("-");
}
function AnimatedTabs(state) {
  state = state.state;
  let setting = state;
  const transitionState = state.transitionState;
  const cleanUp = state.cleanUp;
  let sharedValue;
  let context;
  let obj = setting(cleanUp[4]);
  let num = 0;
  if (transitionState === setting(cleanUp[5]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = obj.useSharedValue(num);
  let tmpResult = tmp(tmp2[4]);
  let fn = function f() {
    let obj = { opacity: null, position: null };
    const value = sharedValue.get();
    const fn = function t(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = closure_1 === closure_1_0(closure_1_2[5]).TransitionStates.YEETED;
      }
      if (tmp) {
        closure_1_0(closure_1_2[4]).runOnJS(closure_2)();
        const obj = closure_1_0(closure_1_2[4]);
      }
    };
    obj = { transitionState, TransitionStates: setting(cleanUp[5]).TransitionStates, runOnJS: setting(cleanUp[4]).runOnJS, cleanUp };
    fn.__closure = obj;
    fn.__workletHash = 15209468679721;
    fn.__initData = closure_1_7;
    obj[0] = setting(cleanUp[6]).withSpring(value, setting(cleanUp[7]).springStandard, "respect-motion-settings", fn);
    let str = "absolute";
    if (1 === sharedValue.get()) {
      str = "relative";
    }
    obj[1] = str;
    return obj;
  };
  obj = { withSpring: tmp(tmp2[6]).withSpring, opacity: sharedValue, springStandard: tmp(tmp2[7]).springStandard, transitionState, TransitionStates: tmp(tmp2[5]).TransitionStates, runOnJS: tmp(tmp2[4]).runOnJS, cleanUp };
  fn.__closure = obj;
  fn.__workletHash = 10740262883803;
  fn.__initData = closure_6;
  const items = [sharedValue, transitionState];
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  const effect = sharedValue.useEffect(() => {
    let num = 1;
    if (transitionState === setting(cleanUp[5]).TransitionStates.YEETED) {
      num = 0;
    }
    const result = sharedValue.set(num);
  }, items);
  setting = undefined;
  setting = setting(cleanUp[2]).SearchResultExactCountEnabled.useSetting();
  const items1 = [setting];
  const callback = sharedValue.useCallback((toLocaleString) => {
    if (!setting) {
      if (toLocaleString > 1000) {
        const _HermesInternal = HermesInternal;
        let combined = "(" + setting(cleanUp[3]).defaultCountFormatter(1000) + "+)";
        const obj = setting(cleanUp[3]);
      }
      return combined;
    }
    combined = "(" + setting(cleanUp[3]).defaultCountFormatter(toLocaleString) + ")";
  }, items1);
  context = sharedValue.useContext(tmp(tmp2[8]).SwipeForMemberListContext);
  const fn2 = function h() {
    if (context != null) {
      const disallowGesture = context.disallowGesture;
      const result = disallowGesture.set(false);
    }
  };
  fn2.__closure = { swipeForMemberListContext: context };
  fn2.__workletHash = 5080152010224;
  fn2.__initData = closure_8;
  const items2 = [context];
  const callback1 = sharedValue.useCallback(fn2, items2);
  tmpResult = tmp(tmp2[4]);
  class F {
    constructor() {
      scrollOffset = closure_0.scrollOffset;
      return scrollOffset.get() > 0;
    }
  }
  F.__closure = { state };
  F.__workletHash = 7791091456487;
  F.__initData = closure_9;
  const fn3 = function w(arg0, arg1) {
    if (arg0 !== arg1) {
      if (context != null) {
        const disallowGesture = context.disallowGesture;
        const result = disallowGesture.set(arg0);
      }
    }
  };
  fn3.__closure = { swipeForMemberListContext: context };
  fn3.__workletHash = 15386779064911;
  fn3.__initData = closure_10;
  const animatedReaction = tmpResult.useAnimatedReaction(F, fn3);
  obj = { style: animatedStyle, children: null };
  obj1 = { state, grow: false, formatCount: callback, simultaneousHandlers: null, onEndDrag: null };
  let gesture;
  if (context != null) {
    gesture = context.gesture;
  }
  obj1[3] = gesture;
  let tmp13;
  if (null != context) {
    tmp13 = callback1;
  }
  obj1[4] = tmp13;
  obj[1] = context(setting(cleanUp[9]).Tabs, obj1);
  return context(transitionState(cleanUp[4]).View, obj);
}
function renderItem(arg0, state, transitionState, cleanUp) {
  return <AnimatedTabs key={arg0} state={arg1} transitionState={arg2} cleanUp={arg3} />;
}
let closure_6 = { code: "function SearchTabsTransitionGroupTsx1(){const{withSpring,opacity,springStandard,transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,'respect-motion-settings',function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}}),position:opacity.get()===1?'relative':'absolute'};}" };
let closure_7 = { code: "function SearchTabsTransitionGroupTsx2(finished){const{transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
let closure_8 = { code: "function SearchTabsTransitionGroupTsx3(){const{swipeForMemberListContext}=this.__closure;var _swipeForMemberListCo;(_swipeForMemberListCo=swipeForMemberListContext)===null||_swipeForMemberListCo===void 0||_swipeForMemberListCo.disallowGesture.set(false);}" };
let closure_9 = { code: "function SearchTabsTransitionGroupTsx4(){const{state}=this.__closure;return state.scrollOffset.get()>0;}" };
let closure_10 = { code: "function SearchTabsTransitionGroupTsx5(isOffsetFromStart,prevIsOffsetFromStart){const{swipeForMemberListContext}=this.__closure;if(isOffsetFromStart!==prevIsOffsetFromStart){var _swipeForMemberListCo;(_swipeForMemberListCo=swipeForMemberListContext)===null||_swipeForMemberListCo===void 0||_swipeForMemberListCo.disallowGesture.set(isOffsetFromStart);}}" };
let result = require("set").fileFinishedImporting("modules/search/native/components/tabs/SearchTabsTransitionGroup.tsx");

export default function SearchTabsTransitionGroup(state) {
  const items = [state.state];
  return jsx(ManaContext.TransitionGroup, { items, getItemKey, renderItem });
};