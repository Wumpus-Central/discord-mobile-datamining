// discord_app/modules/search/native/components/tabs/SearchTabsTransitionGroup.tsx
import native from "../../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../../../design/animation/reanimated/spring/springPresets.tsx";
import Tabs from "../../../../../design/components/Tabs/native/Tabs.native.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function getItemKey(items) {
  items = items.items;
  const mapped = items.map((id) => id.id);
  return mapped.join("-");
}
function AnimatedTabs(state) {
  state = state.state;
  const transitionState = state.transitionState;
  const cleanUp = state.cleanUp;
  let sharedValue;
  let context;
  let obj = state(cleanUp[4]);
  let num = 0;
  if (transitionState === state(cleanUp[5]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = obj.useSharedValue(num);
  let tmpResult = tmp(tmp2[4]);
  let fn = function f() {
    let obj = { opacity: null, position: null };
    value = sharedValue.get();
    const fn = function t(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = transitionState === state(cleanUp[5]).TransitionStates.YEETED;
      }
      if (tmp) {
        state(cleanUp[4]).runOnJS(closure_1_2)();
        const obj = state(cleanUp[4]);
      }
    };
    obj = { transitionState, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
    fn.__closure = obj;
    fn.__workletHash = 15209468679721;
    fn.__initData = __initData;
    obj.opacity = spring.withSpring(value, springPresets.springStandard, "respect-motion-settings", fn);
    let str = "absolute";
    if (1 === sharedValue.get()) {
      str = "relative";
    }
    obj.position = str;
    return obj;
  };
  obj = {
    withSpring: tmp(tmp2[6]).withSpring,
    opacity: sharedValue,
    springStandard: tmp(tmp2[7]).springStandard,
    transitionState,
    TransitionStates: tmp(tmp2[5]).TransitionStates,
    runOnJS: tmp(tmp2[4]).runOnJS,
    cleanUp,
  };
  fn.__closure = obj;
  fn.__workletHash = 10740262883803;
  fn.__initData = __initData;
  const items = [sharedValue, transitionState];
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  const effect = sharedValue.useEffect(() => {
    let num = 1;
    if (transitionState === native.TransitionStates.YEETED) {
      num = 0;
    }
    const result = sharedValue.set(num);
  }, items);
  const setting = state(cleanUp[2]).SearchResultExactCountEnabled.useSetting();
  closure_129_0 = setting;
  const items1 = [setting];
  const callback = sharedValue.useCallback((toLocaleString) => {
    if (!state) {
      if (toLocaleString > 1000) {
        const _HermesInternal = HermesInternal;
        let combined = "(" + Tabs.defaultCountFormatter(1000) + "+)";
      }
      return combined;
    }
    combined = "(" + Tabs.defaultCountFormatter(toLocaleString) + ")";
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
  fn2.__initData = __initData2;
  const items2 = [context];
  const callback1 = sharedValue.useCallback(fn2, items2);
  tmpResult = tmp(tmp2[4]);
  class F {
    constructor() {
      scrollOffset = state.scrollOffset;
      return scrollOffset.get() > 0;
    }
  }
  F.__closure = { state };
  F.__workletHash = 7791091456487;
  F.__initData = __initData3;
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
  fn3.__initData = __initData4;
  const animatedReaction = tmpResult.useAnimatedReaction(F, fn3);
  obj = { style: animatedStyle, children: null };
  const obj1 = { state, grow: false, formatCount: callback, simultaneousHandlers: null, onEndDrag: null };
  let gesture;
  if (context != null) {
    gesture = context.gesture;
  }
  obj1.simultaneousHandlers = gesture;
  let tmp13;
  if (null != context) {
    tmp13 = callback1;
  }
  obj1.onEndDrag = tmp13;
  obj.children = context(state(cleanUp[9]).Tabs, obj1);
  return context(transitionState(cleanUp[4]).View, obj);
}
function renderItem(key, state, transitionState, cleanUp) {
  return <AnimatedTabs key={key} state={state} transitionState={transitionState} cleanUp={cleanUp} />;
}
const jsx = fn(21).jsx;
const __initData = {
  code: "function SearchTabsTransitionGroupTsx1(){const{withSpring,opacity,springStandard,transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,'respect-motion-settings',function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}}),position:opacity.get()===1?'relative':'absolute'};}",
};
let closure_7 = {
  code: "function SearchTabsTransitionGroupTsx2(finished){const{transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}}",
};
const __initData2 = {
  code: "function SearchTabsTransitionGroupTsx3(){const{swipeForMemberListContext}=this.__closure;var _swipeForMemberListCo;(_swipeForMemberListCo=swipeForMemberListContext)===null||_swipeForMemberListCo===void 0||_swipeForMemberListCo.disallowGesture.set(false);}",
};
const __initData3 = {
  code: "function SearchTabsTransitionGroupTsx4(){const{state}=this.__closure;return state.scrollOffset.get()>0;}",
};
const __initData4 = {
  code: "function SearchTabsTransitionGroupTsx5(isOffsetFromStart,prevIsOffsetFromStart){const{swipeForMemberListContext}=this.__closure;if(isOffsetFromStart!==prevIsOffsetFromStart){var _swipeForMemberListCo;(_swipeForMemberListCo=swipeForMemberListContext)===null||_swipeForMemberListCo===void 0||_swipeForMemberListCo.disallowGesture.set(isOffsetFromStart);}}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/tabs/SearchTabsTransitionGroup.tsx");

export default function SearchTabsTransitionGroup(state) {
  const obj = { items: null, getItemKey, renderItem };
  const items = [state.state];
  obj.items = items;
  return jsx(native.TransitionGroup, { items: null, getItemKey, renderItem });
}
