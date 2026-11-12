// discord_app/modules/search/native/components/tabs/SearchTabsTransitionGroup.tsx
import _modDef1652 from "../../../../../../_runtime/metro/01652__.js";
import native from "../../../../../../discord_common/js/packages/design/native.tsx";
import Tabs_Tabs from "../../../../../design/components/Tabs/native/Tabs.native.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function getItemKey(items) {
  items = items.items;
  const mapped = items.map((id) => id.id);
  return mapped.join("-");
}
function AnimatedTabs(cleanUp) {
  ({ state, transitionState } = cleanUp);
  _require = transitionState;
  importDefault = undefined;
  let num = 0;
  if (transitionState === require("native").TransitionStates.MOUNTED) {
    num = 1;
  }
  const sharedValue = require("../../../../../../_runtime/metro/01652__.js").useSharedValue(num);
  let obj = require("../../../../../../_runtime/metro/01652__.js");
  items = [
    c7,
    require("spring/spring").withSpring,
    sharedValue,
    require("springPresets").springStandard,
    c6,
    transitionState,
    require("native").TransitionStates,
    require("../../../../../../_runtime/metro/01705__.js").scheduleOnRN,
    cleanUp.cleanUp,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  jsx = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
  class SearchTabsTransitionGroupTsx2 {
    constructor() {
      obj = closure_1;
      tmp = closure_0;
      value = closure_1.get();
      tmp3 = closure_2;
      items = [, , , ,];
      items[0] = closure_3;
      items[1] = closure_4;
      items[2] = closure_5;
      items[3] = closure_6;
      items[4] = closure_7;
      closure_0 = undefined;
      closure_1 = undefined;
      closure_2 = undefined;
      closure_3 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8] = items;
      obj1 = { opacity: null, position: null };
      class SearchTabsTransitionGroupTsx1 {
        constructor(arg0) {
          tmp = cleanUp;
          if (cleanUp) {
            tmp2 = closure_0;
            tmp3 = closure_1;
            tmp = closure_0 === closure_1.YEETED;
          }
          if (tmp) {
            tmp4 = closure_2;
            tmp5 = closure_3;
            tmp6 = closure_2(closure_3);
          }
          return;
        }
      }
      items1 = [, , ,];
      items1[0] = tmp5;
      items1[1] = tmp6;
      items1[2] = tmp7;
      items1[3] = tmp8;
      SearchTabsTransitionGroupTsx1.__closure = items1;
      SearchTabsTransitionGroupTsx1.__workletHash = 537193228402;
      SearchTabsTransitionGroupTsx1.__initData = tmp4;
      obj1.opacity = tmp(value, tmp3, "respect-motion-settings", SearchTabsTransitionGroupTsx1);
      str = "absolute";
      if (1 === obj.get()) {
        str = "relative";
      }
      obj1.position = str;
      return obj1;
    }
  }
  let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
  SearchTabsTransitionGroupTsx2.__closure = items1;
  SearchTabsTransitionGroupTsx2.__workletHash = 1226548959062;
  SearchTabsTransitionGroupTsx2.__initData = tmp4;
  const items2 = [sharedValue, transitionState];
  const animatedStyle = require("../../../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    SearchTabsTransitionGroupTsx2,
  );
  const effect = noop.useEffect(() => {
    let num = 1;
    if (c0 === native.TransitionStates.YEETED) {
      num = 0;
    }
    const result = _undefined2.set(num);
  }, items2);
  const tmpResult = require("../../../../../../_runtime/metro/01652__.js");
  const setting = require("UserSettings").SearchResultExactCountEnabled.useSetting();
  closure_129_0 = setting;
  const items3 = [setting];
  const callback = noop.useCallback((toLocaleString) => {
    if (!c0) {
      if (toLocaleString > 1000) {
        const _HermesInternal = HermesInternal;
        let combined = "(" + Tabs_Tabs.defaultCountFormatter(1000) + "+)";
      }
      return combined;
    }
    combined = "(" + Tabs_Tabs.defaultCountFormatter(toLocaleString) + ")";
  }, items3);
  const context = noop.useContext(tmp(14737).SwipeForMemberListContext);
  const items4 = [closure_8, context];
  _require = undefined;
  [tmp19, tmp20] = items4;
  class SearchTabsTransitionGroupTsx3 {
    constructor() {
      if (closure_0 != null) {
        disallowGesture = closure_0.disallowGesture;
        flag = false;
        result = disallowGesture.set(false);
      }
      return;
    }
  }
  const items5 = [tmp20];
  SearchTabsTransitionGroupTsx3.__closure = items5;
  SearchTabsTransitionGroupTsx3.__workletHash = 14662172823401;
  SearchTabsTransitionGroupTsx3.__initData = tmp19;
  const items6 = [context];
  const callback1 = noop.useCallback(SearchTabsTransitionGroupTsx3, items6);
  const SearchResultExactCountEnabled = require("UserSettings").SearchResultExactCountEnabled;
  const items7 = [closure_9, state];
  _require = undefined;
  [tmp22, tmp23] = items7;
  class SearchTabsTransitionGroupTsx4 {
    constructor() {
      scrollOffset = closure_0.scrollOffset;
      return scrollOffset.get() > 0;
    }
  }
  const items8 = [tmp23];
  SearchTabsTransitionGroupTsx4.__closure = items8;
  SearchTabsTransitionGroupTsx4.__workletHash = 470062012350;
  SearchTabsTransitionGroupTsx4.__initData = tmp22;
  const items9 = [closure_10, context];
  _require = undefined;
  [tmp24, tmp25] = items9;
  class SearchTabsTransitionGroupTsx5 {
    constructor(arg0, arg1) {
      if (cleanUp !== arg1) {
        tmp = null;
        if (closure_0 != null) {
          disallowGesture = closure_0.disallowGesture;
          result = disallowGesture.set(cleanUp);
        }
      }
      return;
    }
  }
  const items10 = [tmp25];
  SearchTabsTransitionGroupTsx5.__closure = items10;
  SearchTabsTransitionGroupTsx5.__workletHash = 15943463641590;
  SearchTabsTransitionGroupTsx5.__initData = tmp24;
  const animatedReaction = require("../../../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    SearchTabsTransitionGroupTsx4,
    SearchTabsTransitionGroupTsx5,
  );
  let obj2 = { style: animatedStyle, children: null };
  const obj3 = { state, grow: false, formatCount: callback, simultaneousHandlers: null, onEndDrag: null };
  gesture = undefined;
  if (context != null) {
    gesture = context.gesture;
  }
  obj3.simultaneousHandlers = gesture;
  let tmp29;
  if (null != context) {
    tmp29 = callback1;
  }
  obj3.onEndDrag = tmp29;
  obj2.children = jsx(require("Tabs/Tabs").Tabs, obj3);
  return jsx(_modDef1652.View, obj2);
}
function renderItem(key, state, transitionState, cleanUp) {
  return <AnimatedTabs key={key} state={state} transitionState={transitionState} cleanUp={cleanUp} />;
}
let jsx = fn(21).jsx;
let closure_6 = {
  code: "(function SearchTabsTransitionGroupTsx1(finished){let[transitionState,TransitionStates,scheduleOnRN,cleanUp]=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){scheduleOnRN(cleanUp);}})",
};
let closure_7 = {
  code: "(function SearchTabsTransitionGroupTsx2(){let[withSpring,opacity,springStandard,_worklet_537193228402_init_data,transitionState,TransitionStates,scheduleOnRN,cleanUp]=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,'respect-motion-settings',function SearchTabsTransitionGroupTsx1Factory([_worklet_537193228402_init_data,transitionState,TransitionStates,scheduleOnRN,cleanUp]){const SearchTabsTransitionGroupTsx1=function(finished){if(finished&&transitionState===TransitionStates.YEETED){scheduleOnRN(cleanUp);}};SearchTabsTransitionGroupTsx1.__closure=[transitionState,TransitionStates,scheduleOnRN,cleanUp];SearchTabsTransitionGroupTsx1.__workletHash=537193228402;SearchTabsTransitionGroupTsx1.__initData=_worklet_537193228402_init_data;return SearchTabsTransitionGroupTsx1;}([_worklet_537193228402_init_data,transitionState,TransitionStates,scheduleOnRN,cleanUp])),position:opacity.get()===1?'relative':'absolute'};})",
};
let closure_8 = {
  code: "(function SearchTabsTransitionGroupTsx3(){let[swipeForMemberListContext]=this.__closure;var _swipeForMemberListCo;(_swipeForMemberListCo=swipeForMemberListContext)===null||_swipeForMemberListCo===void 0||_swipeForMemberListCo.disallowGesture.set(false);})",
};
let closure_9 = {
  code: "(function SearchTabsTransitionGroupTsx4(){let[state]=this.__closure;return state.scrollOffset.get()>0;})",
};
let closure_10 = {
  code: "(function SearchTabsTransitionGroupTsx5(isOffsetFromStart,prevIsOffsetFromStart){let[swipeForMemberListContext]=this.__closure;if(isOffsetFromStart!==prevIsOffsetFromStart){var _swipeForMemberListCo;(_swipeForMemberListCo=swipeForMemberListContext)===null||_swipeForMemberListCo===void 0||_swipeForMemberListCo.disallowGesture.set(isOffsetFromStart);}})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/tabs/SearchTabsTransitionGroup.tsx");

export default function SearchTabsTransitionGroup(state) {
  const obj = { items: null, getItemKey, renderItem };
  items = [state.state];
  obj.items = items;
  return jsx(native.TransitionGroup, { items: null, getItemKey, renderItem });
}
