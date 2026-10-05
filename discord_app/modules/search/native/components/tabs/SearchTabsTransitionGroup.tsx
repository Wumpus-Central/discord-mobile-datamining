// discord_app/modules/search/native/components/tabs/SearchTabsTransitionGroup.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import native from "../../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../../../design/animation/reanimated/spring/springPresets.tsx";
import Tabs2 from "../../../../../design/components/Tabs/native/Tabs.native.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let set;

function getItemKey(items) {
  items = items.items;
  const mapped = items.map((id) => id.id);
  return mapped.join("-");
}
function renderItem(key, state, transitionState, cleanUp) {
  return <closure_17 key={key} state={state} transitionState={transitionState} cleanUp={cleanUp} />;
}
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let setting;
      let tmp3;
      let obj = setting(576);
      const cResult = obj.c(2);
      const SearchResultExactCountEnabled = setting(2028).SearchResultExactCountEnabled;
      setting = SearchResultExactCountEnabled.useSetting();
      if (cResult[0] !== setting) {
        const fn = function t(toLocaleString) {
          if (!setting) {
            let combined;
            if (toLocaleString > 1000) {
              const _HermesInternal = HermesInternal;
              const obj = Tabs2;
              combined = "(" + obj.defaultCountFormatter(1000) + "+)";
            }
            return combined;
          }
          const obj2 = Tabs2;
          combined = "(" + obj2.defaultCountFormatter(toLocaleString) + ")";
        };
        cResult[0] = setting;
        cResult[1] = fn;
        tmp3 = fn;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : () => {
      let setting;
      const SearchResultExactCountEnabled = setting(2028).SearchResultExactCountEnabled;
      setting = SearchResultExactCountEnabled.useSetting();
      const items = [setting];
      return react.useCallback((toLocaleString) => {
        if (!setting) {
          let combined;
          if (toLocaleString > 1000) {
            const _HermesInternal = HermesInternal;
            const obj = Tabs2;
            combined = "(" + obj.defaultCountFormatter(1000) + "+)";
          }
          return combined;
        }
        const obj2 = Tabs2;
        combined = "(" + obj2.defaultCountFormatter(toLocaleString) + ")";
      }, items);
    };
const __initData = {
  code: 'function SearchTabsTransitionGroupTsx1(){const{withSpring,opacity,springStandard,transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,"respect-motion-settings",function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}}),position:opacity.get()===1?"relative":"absolute"};}',
};
let closure_8 = {
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
const __initData5 = {
  code: "function SearchTabsTransitionGroupTsx6(){const{withSpring,opacity,springStandard,transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,'respect-motion-settings',function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}}),position:opacity.get()===1?'relative':'absolute'};}",
};
let closure_13 = {
  code: "function SearchTabsTransitionGroupTsx7(finished){const{transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}}",
};
const __initData6 = {
  code: "function SearchTabsTransitionGroupTsx8(){const{swipeForMemberListContext}=this.__closure;var _swipeForMemberListCo;(_swipeForMemberListCo=swipeForMemberListContext)===null||_swipeForMemberListCo===void 0||_swipeForMemberListCo.disallowGesture.set(false);}",
};
const __initData7 = {
  code: "function SearchTabsTransitionGroupTsx9(){const{state}=this.__closure;return state.scrollOffset.get()>0;}",
};
const __initData8 = {
  code: "function SearchTabsTransitionGroupTsx10(isOffsetFromStart,prevIsOffsetFromStart){const{swipeForMemberListContext}=this.__closure;if(isOffsetFromStart!==prevIsOffsetFromStart){var _swipeForMemberListCo;(_swipeForMemberListCo=swipeForMemberListContext)===null||_swipeForMemberListCo===void 0||_swipeForMemberListCo.disallowGesture.set(isOffsetFromStart);}}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (state) => {
      let cleanUp;
      let tmp = state;
      let obj = state(cleanUp[3]);
      const cResult = obj.c(14);
      state = state.state;
      const transitionState = state.transitionState;
      cleanUp = state.cleanUp;
      const useSharedValue = state(cleanUp[6]).useSharedValue;
      let num = 0;
      state(cleanUp[6]);
      if (transitionState === state(cleanUp[7]).TransitionStates.MOUNTED) {
        num = 1;
      }
      const sharedValue = useSharedValue(num);
      let fn = function _() {
        let fn;
        let springStandard;
        let str;
        let value;
        let withSpring;
        let obj = { opacity: withSpring(value, springStandard, "respect-motion-settings", fn), position: str };
        let tmp = spring;
        withSpring = tmp.withSpring;
        value = sharedValue.get();
        fn = function t(arg0) {
          const tmp = arg0 && transitionState === state(cleanUp[7]).TransitionStates.YEETED;
          if (tmp) {
            const obj = state(cleanUp[6]);
            obj.runOnJS(closure_1_2)();
          }
        };
        const obj2 = {
          transitionState,
          TransitionStates: native.TransitionStates,
          runOnJS: ReanimatedRexport.runOnJS,
          cleanUp,
        };
        springStandard = springPresets.springStandard;
        fn.__closure = obj2;
        fn.__workletHash = 15209468679721;
        fn.__initData = __initData;
        str = "absolute";
        if (1 === sharedValue.get()) {
          str = "relative";
        }
        return obj;
      };
      const tmpResult = tmp(cleanUp[6]);
      let obj2 = {
        withSpring: tmp(tmp2[8]).withSpring,
        opacity: sharedValue,
        springStandard: tmp(tmp2[9]).springStandard,
        transitionState,
        TransitionStates: tmp(tmp2[7]).TransitionStates,
        runOnJS: tmp(tmp2[6]).runOnJS,
        cleanUp,
      };
      fn.__closure = obj2;
      fn.__workletHash = 7055696500315;
      fn.__initData = __initData;
      const animatedStyle = tmpResult.useAnimatedStyle(fn);
      if (cResult[0] === sharedValue) {
        let tmp7;
        let tmp8;
        let tmp17;
        if (cResult[1] === transitionState) {
          tmp7 = cResult[2];
          tmp8 = cResult[3];
        }
        const effect = sharedValue.useEffect(tmp7, tmp8);
        const tmp12 = closure_5();
        const context = sharedValue.useContext(tmp(tmp2[10]).SwipeForMemberListContext);
        let disallowGesture;
        const tmp14 = cResult[4];
        if (context != null) {
          disallowGesture = context.disallowGesture;
        }
        if (tmp14 !== disallowGesture) {
          const fn3 = function v() {
            if (context != null) {
              const disallowGesture = context.disallowGesture;
              const result = disallowGesture.set(false);
            }
          };
          const obj3 = { swipeForMemberListContext: context };
          fn3.__closure = obj3;
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
              const scrollOffset = state.scrollOffset;
              return scrollOffset.get() > 0;
            }
          }
        } else {
          tmp17 = cResult[5];
        }
        const tmpResult2 = tmp(cleanUp[6]);
        class G {
          constructor() {
            const scrollOffset = state.scrollOffset;
            return scrollOffset.get() > 0;
          }
        }
        const obj4 = { state };
        G.__closure = obj4;
        G.__workletHash = 7791091456487;
        G.__initData = __initData3;
        class L {
          constructor(arg0, arg1) {
            if (arg0 !== arg1) {
              if (context != null) {
                const disallowGesture = context.disallowGesture;
                const result = disallowGesture.set(arg0);
              }
            }
          }
        }
        const obj5 = { swipeForMemberListContext: context };
        L.__closure = obj5;
        L.__workletHash = 15386779064911;
        L.__initData = __initData4;
        const animatedReaction = tmpResult2.useAnimatedReaction(G, L);
        let gesture;
        if (context != null) {
          gesture = context.gesture;
        }
        let tmp24;
        if (null != context) {
          tmp24 = tmp17;
        }
        if (cResult[6] === tmp12) {
          if (cResult[7] === state) {
            if (cResult[8] === gesture) {
              let tmp25;
              if (cResult[9] === tmp24) {
                tmp25 = cResult[10];
              }
              if (cResult[11] === animatedStyle) {
                let tmp28;
                if (cResult[12] === tmp25) {
                  tmp28 = cResult[13];
                }
                return tmp28;
              }
              const obj6 = { style: animatedStyle, children: tmp25 };
              cResult[11] = animatedStyle;
              cResult[12] = tmp25;
              cResult[13] = context(transitionState(cleanUp[6]).View, obj6);
              context(transitionState(cleanUp[6]).View, obj6);
              class G {
                constructor() {
                  const scrollOffset = state.scrollOffset;
                  return scrollOffset.get() > 0;
                }
              }
            }
          }
        }
        const obj7 = { state, grow: false, formatCount: tmp12, simultaneousHandlers: gesture, onEndDrag: tmp24 };
        const tmp27 = context(tmp(cleanUp[5]).Tabs, obj7);
        cResult[6] = tmp12;
        cResult[7] = state;
        cResult[8] = gesture;
        cResult[9] = tmp24;
        cResult[10] = tmp27;
        tmp25 = tmp27;
      }
      const fn2 = function f() {
        let num = 1;
        set = sharedValue.set;
        if (transitionState === native.TransitionStates.YEETED) {
          num = 0;
        }
        const result = set(num);
      };
      const items = [sharedValue, transitionState];
      cResult[0] = sharedValue;
      cResult[1] = transitionState;
      cResult[2] = fn2;
      cResult[3] = items;
      tmp8 = items;
      tmp7 = fn2;
    }
  : (state) => {
      let Tabs;
      let gesture;
      let obj3;
      let tmp13;
      state = state.state;
      const transitionState = state.transitionState;
      const cleanUp = state.cleanUp;
      let sharedValue;
      let context;
      let tmp = state;
      const useSharedValue = state(cleanUp[6]).useSharedValue;
      let num = 0;
      state(cleanUp[6]);
      if (transitionState === state(cleanUp[7]).TransitionStates.MOUNTED) {
        num = 1;
      }
      sharedValue = useSharedValue(num);
      let fn = function l() {
        let fn;
        let springStandard;
        let str;
        let value;
        let withSpring;
        let obj = { opacity: withSpring(value, springStandard, "respect-motion-settings", fn), position: str };
        let tmp = spring;
        withSpring = tmp.withSpring;
        value = sharedValue.get();
        fn = function t(arg0) {
          const tmp = arg0 && transitionState === state(cleanUp[7]).TransitionStates.YEETED;
          if (tmp) {
            const obj = state(cleanUp[6]);
            obj.runOnJS(closure_1_2)();
          }
        };
        const obj2 = {
          transitionState,
          TransitionStates: native.TransitionStates,
          runOnJS: ReanimatedRexport.runOnJS,
          cleanUp,
        };
        springStandard = springPresets.springStandard;
        fn.__closure = obj2;
        fn.__workletHash = 14638126185804;
        fn.__initData = __initData;
        str = "absolute";
        if (1 === sharedValue.get()) {
          str = "relative";
        }
        return obj;
      };
      const tmpResult = tmp(cleanUp[6]);
      let obj = {
        withSpring: tmp(tmp2[8]).withSpring,
        opacity: sharedValue,
        springStandard: tmp(tmp2[9]).springStandard,
        transitionState,
        TransitionStates: tmp(tmp2[7]).TransitionStates,
        runOnJS: tmp(tmp2[6]).runOnJS,
        cleanUp,
      };
      fn.__closure = obj;
      fn.__workletHash = 2171925322300;
      fn.__initData = __initData5;
      const items = [sharedValue, transitionState];
      const animatedStyle = tmpResult.useAnimatedStyle(fn);
      const effect = sharedValue.useEffect(() => {
        let num = 1;
        set = sharedValue.set;
        if (transitionState === native.TransitionStates.YEETED) {
          num = 0;
        }
        const result = set(num);
      }, items);
      const tmp7 = closure_5();
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
      const tmpResult2 = tmp(cleanUp[6]);
      class F {
        constructor() {
          const scrollOffset = state.scrollOffset;
          return scrollOffset.get() > 0;
        }
      }
      F.__closure = { state };
      F.__workletHash = 6546228134666;
      F.__initData = __initData7;
      class C {
        constructor(arg0, arg1) {
          if (arg0 !== arg1) {
            if (context != null) {
              const disallowGesture = context.disallowGesture;
              const result = disallowGesture.set(arg0);
            }
          }
        }
      }
      C.__closure = { swipeForMemberListContext: context };
      C.__workletHash = 16575969521243;
      C.__initData = __initData8;
      const animatedReaction = tmpResult2.useAnimatedReaction(F, C);
      let obj2 = { style: animatedStyle, children: context(Tabs, obj3) };
      const View = transitionState(tmp2[6]).View;
      obj3 = { state, grow: false, formatCount: tmp7, simultaneousHandlers: gesture, onEndDrag: tmp13 };
      gesture = undefined;
      Tabs = tmp(tmp2[5]).Tabs;
      if (context != null) {
        gesture = context.gesture;
      }
      tmp13 = undefined;
      if (null != context) {
        tmp13 = callback;
      }
      return context(View, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (state) => {
      let tmp4;
      const obj = react2;
      const cResult = obj.c(2);
      state = state.state;
      if (cResult[0] !== state) {
        const items = [state];
        const tmp8 = jsx(native.TransitionGroup, { items, getItemKey, renderItem });
        cResult[0] = state;
        cResult[1] = tmp8;
        tmp4 = tmp8;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : (state) => {
      const items = [state.state];
      return jsx(native.TransitionGroup, { items, getItemKey, renderItem });
    };
let result = size.fileFinishedImporting("modules/search/native/components/tabs/SearchTabsTransitionGroup.tsx");

export default tmp2;
