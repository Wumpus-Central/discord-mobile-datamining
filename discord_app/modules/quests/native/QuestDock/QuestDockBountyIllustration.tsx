// === Module 15014: QuestDockBountyIllustration ===

// Module 15014 (QuestDockBountyIllustration)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import native from "native" /* 4589 */;
import QuestConstants from "QuestConstants" /* 5623 */;
import FastImageDefault from "FastImage" /* 5974 */;
import APNGPlayer2 from "APNGPlayer" /* 8464 */;
import BountiesMobileQuestBarExperiment2 from "BountiesMobileQuestBarExperiment" /* 9998 */;
import QuestDockHooks from "QuestDockHooks" /* 14893 */;
import useIsQuestDockContentVisibleDefault from "useIsQuestDockContentVisible" /* 15010 */;
import _modDef15015 from "module_15015" /* 15015 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import QuestDockConstants from "QuestDockConstants" /* 14896 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let current, dependencyMap, num, shouldAnimate;

let QUEST_DOCK_COLLAPSED_HEADER_PADDING_RIGHT;
let QUEST_DOCK_COLLAPSED_HEIGHT;
let items;
let obj2;
let size;
let size1;
const View = react_native.View;
const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
({ QUEST_DOCK_COLLAPSED_HEIGHT, QUEST_DOCK_COLLAPSED_HEADER_PADDING_RIGHT } = QuestDockConstants);
const jsx = Fragment.jsx;
let obj = { frame: obj2, hands: size, orbs: size1, fill: { flex: 1 } };
obj2 = { marginRight: -QUEST_DOCK_COLLAPSED_HEADER_PADDING_RIGHT + 5 };
size = { width: 124, height: QUEST_DOCK_COLLAPSED_HEIGHT, transform: items };
items = [{ translateY: -2 }];
size1 = { width: 120, height: 70, marginBottom: QUEST_DOCK_COLLAPSED_HEIGHT - 70 };
let closure_8 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp = useIsQuestDockContentVisibleDefault();
  const obj = QuestDockHooks;
  if (tmp) {
    tmp = !obj.useIsQuestDockExpanded();
  }
  return tmp;
}) : (() => {
  let tmp = useIsQuestDockContentVisibleDefault();
  const obj = QuestDockHooks;
  if (tmp) {
    tmp = !obj.useIsQuestDockExpanded();
  }
  return tmp;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp4;
  let tmp5;
  let tmp7;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(7);
  const tmp2 = closure_9();
  let closure_0 = tmp2;
  let closure_1 = react.useRef(null);
  dependencyMap = react.useRef(tmp2);
  let closure_3 = react.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      if (null != ref3.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref3.current);
        ref3.current = null;
      }
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp2) {
    const fn2 = function f() {
      ref2.current = current;
      if (current) {
        first();
        const current2 = ref.current;
        if (current2 != null) {
          current2.play();
        }
      } else {
        current = ref.current;
        if (current != null) {
          current.pause();
        }
      }
    };
    const items = [tmp2, first];
    cResult[1] = tmp2;
    cResult[2] = fn2;
    cResult[3] = items;
    tmp5 = items;
    tmp4 = fn2;
  } else {
    tmp4 = cResult[2];
    tmp5 = cResult[3];
  }
  const effect = react.useEffect(tmp4, tmp5);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function h() {
      return first;
    };
    const items1 = [first];
    cResult[4] = fn3;
    cResult[5] = items1;
    tmp8 = items1;
    tmp7 = fn3;
  } else {
    tmp7 = cResult[4];
    tmp8 = cResult[5];
  }
  const effect1 = react.useEffect(tmp7, tmp8);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor(arg0) {
        closure_0 = arg0;
        closure_1.current = arg0;
        tmp = closure_4();
        current = null == arg0;
        if (!current) {
          tmp2 = closure_2;
          current = closure_2.current;
        }
        if (!current) {
          tmp3 = closure_3;
          tmp4 = globalThis;
          _setTimeout = setTimeout;
          num = 0;
          closure_3.current = setTimeout(() => {
            ref3.current = null;
            if (!ref.current) {
              current.pause();
            }
          }, 0);
        }
        return;
      }
    }
    cResult[6] = E;
  } else {
    class E {
      constructor(arg0) {
        closure_0 = arg0;
        closure_1.current = arg0;
        tmp = closure_4();
        current = null == arg0;
        if (!current) {
          tmp2 = closure_2;
          current = closure_2.current;
        }
        if (!current) {
          tmp3 = closure_3;
          tmp4 = globalThis;
          _setTimeout = setTimeout;
          num = 0;
          closure_3.current = setTimeout(() => {
            ref3.current = null;
            if (!ref.current) {
              current.pause();
            }
          }, 0);
        }
        return;
      }
    }
  }
  return E;
}) : (() => {
  const tmp = closure_9();
  let closure_0 = tmp;
  let closure_1 = react.useRef(null);
  let closure_2 = react.useRef(tmp);
  let closure_3 = react.useRef(null);
  const callback = react.useCallback(() => {
    if (null != ref3.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref3.current);
      ref3.current = null;
    }
  }, []);
  const items = [tmp, callback];
  const effect = react.useEffect(() => {
    ref2.current = current;
    if (current) {
      callback();
      const current2 = ref.current;
      if (current2 != null) {
        current2.play();
      }
    } else {
      current = ref.current;
      if (current != null) {
        current.pause();
      }
    }
  }, items);
  const items1 = [callback];
  const effect1 = react.useEffect(() => callback, items1);
  const items2 = [callback];
  return react.useCallback((current) => {
    closure_1.current = current;
    callback();
    current = null == current || ref2.current;
    if (!current) {
      const _setTimeout = setTimeout;
      closure_3.current = setTimeout(() => {
        ref3.current = null;
        if (!ref.current) {
          current.pause();
        }
      }, 0);
    }
  }, items2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let style;
  const obj = react2;
  const cResult = obj.c(6);
  ({ style, children } = arg0);
  const tmp2 = closure_8();
  if (cResult[0] === style) {
    let tmp3;
    if (cResult[1] === tmp2.frame) {
      tmp3 = cResult[2];
    }
    if (cResult[3] === children) {
      let tmp4;
      if (cResult[4] === tmp3) {
        tmp4 = cResult[5];
      }
      return tmp4;
    }
    const tmp7 = <View style={tmp3} pointerEvents="none" accessible={false} importantForAccessibility="no-hide-descendants">{children}</View>;
    cResult[3] = children;
    cResult[4] = tmp3;
    cResult[5] = tmp7;
    tmp4 = tmp7;
  }
  const items = [tmp2.frame, style];
  cResult[0] = style;
  cResult[1] = tmp2.frame;
  cResult[2] = items;
  tmp3 = items;
}) : ((arg0) => {
  let children;
  let style;
  ({ style, children } = arg0);
  const items = [closure_8().frame, style];
  return <View style={items} pointerEvents="none" accessible={false} importantForAccessibility="no-hide-descendants">{children}</View>;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((shouldAnimate) => {
  const obj = react2;
  const cResult = obj.c(6);
  shouldAnimate = shouldAnimate.shouldAnimate;
  const tmp4 = closure_8();
  const ref = react.useRef(null);
  const obj3 = APNGPlayer2;
  const aPNGPlayerControls = obj3.useAPNGPlayerControls(ref);
  if (cResult[0] === aPNGPlayerControls) {
    let tmp7;
    let tmp8;
    let tmp10;
    if (cResult[1] === shouldAnimate) {
      tmp7 = cResult[2];
      tmp8 = cResult[3];
    }
    const effect = react.useEffect(tmp7, tmp8);
    if (cResult[4] !== tmp4.fill) {
      const APNGPlayer = APNGPlayer2.APNGPlayer;
      const tmp13 = <APNGPlayer ref={ref} url={_modDef15015} style={tmp4.fill} autoplay={false} />;
      cResult[4] = tmp4.fill;
      cResult[5] = tmp13;
      tmp10 = tmp13;
    } else {
      tmp10 = cResult[5];
    }
    return tmp10;
  }
  const fn = function s() {
    if (shouldAnimate) {
      aPNGPlayerControls.play();
    } else {
      aPNGPlayerControls.pause();
    }
  };
  const items = [aPNGPlayerControls, shouldAnimate];
  cResult[0] = aPNGPlayerControls;
  cResult[1] = shouldAnimate;
  cResult[2] = fn;
  cResult[3] = items;
  tmp8 = items;
  tmp7 = fn;
}) : ((shouldAnimate) => {
  shouldAnimate = shouldAnimate.shouldAnimate;
  const tmp = closure_8();
  const ref = react.useRef(null);
  const obj = APNGPlayer2;
  const aPNGPlayerControls = obj.useAPNGPlayerControls(ref);
  const items = [aPNGPlayerControls, shouldAnimate];
  const effect = react.useEffect(() => {
    if (shouldAnimate) {
      aPNGPlayerControls.play();
    } else {
      aPNGPlayerControls.pause();
    }
  }, items);
  const APNGPlayer = APNGPlayer2.APNGPlayer;
  return <APNGPlayer ref={ref} url={_modDef15015} style={tmp.fill} autoplay={false} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp5;
  let tmp6;
  let useReducedMotion;
  const obj = react2;
  const cResult = obj.c(9);
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function n() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const tmp9 = closure_9() && !stateFromStores;
  const tmpResult2 = PlatformUtils;
  if (tmpResult2.isAndroid()) {
    let tmp18;
    if (cResult[2] !== tmp9) {
      const tmp21 = <closure_12 shouldAnimate={tmp9} />;
      cResult[2] = tmp9;
      cResult[3] = tmp21;
      tmp18 = tmp21;
    } else {
      tmp18 = cResult[3];
    }
    return tmp18;
  } else {
    let tmp10;
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { uri: _modDef15015 };
      cResult[4] = obj3;
      tmp10 = obj3;
    } else {
      tmp10 = cResult[4];
    }
    if (cResult[5] === tmp4.fill) {
      if (cResult[6] === !stateFromStores) {
        let tmp14;
        if (cResult[7] === !tmp9) {
          tmp14 = cResult[8];
        }
        return tmp14;
      }
    }
    const tmp17 = jsx(FastImageDefault, { source: tmp10, style: tmp4.fill, resizeMode: "contain", enableAnimation: !stateFromStores, paused: !tmp9, accessible: false });
    cResult[5] = tmp4.fill;
    cResult[6] = !stateFromStores;
    cResult[7] = !tmp9;
    cResult[8] = tmp17;
    tmp14 = tmp17;
  }
}) : (() => {
  let tmp6Result;
  let useReducedMotion;
  const items = [AccessibilityStore];
  const tmp = closure_8();
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp5 = closure_9() && !stateFromStores;
  const tmp2Result = PlatformUtils;
  if (tmp2Result.isAndroid()) {
    tmp6Result = <closure_12 shouldAnimate={tmp5} />;
  } else {
    const obj4 = { uri: _modDef15015 };
    FastImageDefault;
    tmp6Result = <tmp8 source={obj4} style={tmp.fill} resizeMode="contain" enableAnimation={!stateFromStores} paused={!tmp5} accessible={false} />;
  }
  return tmp6Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp4 = closure_10();
  if (cResult[0] !== tmp4) {
    const tmp7 = jsx(native.QuestBar_2DOrbsRive, { ref: tmp4, stateMachine: "State Machine 1", fit: "contain" });
    cResult[0] = tmp4;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (() => {
  const ref = closure_10();
  return jsx(native.QuestBar_2DOrbsRive, { ref, stateMachine: "State Machine 1", fit: "contain" });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp4 = closure_10();
  if (cResult[0] !== tmp4) {
    const tmp7 = jsx(native.OrbsIllustration_HandsRive, { ref: tmp4, stateMachine: "State Machine 1", fit: "contain" });
    cResult[0] = tmp4;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (() => {
  const ref = closure_10();
  return jsx(native.OrbsIllustration_HandsRive, { ref, stateMachine: "State Machine 1", fit: "contain" });
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react2;
  const cResult = obj.c(10);
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: QuestsExperimentLocations.QUESTS_BAR_MOBILE };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const BountiesMobileQuestBarExperiment = BountiesMobileQuestBarExperiment2.BountiesMobileQuestBarExperiment;
  const illustration = BountiesMobileQuestBarExperiment.useConfig(first).illustration;
  if (BountiesMobileQuestBarExperiment2.BountiesMobileQuestBarIllustration.ILLUSTRATION_2 === illustration) {
    let tmp23;
    let tmp27;
    const _Symbol3 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp26 = <closure_14 />;
      cResult[1] = tmp26;
      tmp23 = tmp26;
    } else {
      tmp23 = cResult[1];
    }
    if (cResult[2] !== tmp4.orbs) {
      const tmp30 = <closure_11 style={tmp4.orbs}>{tmp23}</closure_11>;
      cResult[2] = tmp4.orbs;
      cResult[3] = tmp30;
      tmp27 = tmp30;
    } else {
      tmp27 = cResult[3];
    }
    return tmp27;
  } else if (BountiesMobileQuestBarExperiment2.BountiesMobileQuestBarIllustration.ILLUSTRATION_3 === illustration) {
    let tmp15;
    let tmp19;
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp18 = <closure_15 />;
      cResult[4] = tmp18;
      tmp15 = tmp18;
    } else {
      tmp15 = cResult[4];
    }
    if (cResult[5] !== tmp4.hands) {
      const tmp22 = <closure_11 style={tmp4.hands}>{tmp15}</closure_11>;
      cResult[5] = tmp4.hands;
      cResult[6] = tmp22;
      tmp19 = tmp22;
    } else {
      tmp19 = cResult[6];
    }
    return tmp19;
  } else if (BountiesMobileQuestBarExperiment2.BountiesMobileQuestBarIllustration.ILLUSTRATION_1 === illustration) {
    let tmp7;
    let tmp11;
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp10 = <closure_13 />;
      cResult[7] = tmp10;
      tmp7 = tmp10;
    } else {
      tmp7 = cResult[7];
    }
    if (cResult[8] !== tmp4.orbs) {
      const tmp14 = <closure_11 style={tmp4.orbs}>{tmp7}</closure_11>;
      cResult[8] = tmp4.orbs;
      cResult[9] = tmp14;
      tmp11 = tmp14;
    } else {
      tmp11 = cResult[9];
    }
    return tmp11;
  }
}) : (() => {
  const tmp = closure_8();
  const BountiesMobileQuestBarExperiment = BountiesMobileQuestBarExperiment2.BountiesMobileQuestBarExperiment;
  const obj = { location: QuestsExperimentLocations.QUESTS_BAR_MOBILE };
  const illustration = BountiesMobileQuestBarExperiment.useConfig(obj).illustration;
  if (BountiesMobileQuestBarExperiment2.BountiesMobileQuestBarIllustration.ILLUSTRATION_2 === illustration) {
    return <closure_11 style={tmp.orbs}><closure_14 /></closure_11>;
  } else if (BountiesMobileQuestBarExperiment2.BountiesMobileQuestBarIllustration.ILLUSTRATION_3 === illustration) {
    return <closure_11 style={tmp.hands}><closure_15 /></closure_11>;
  } else if (BountiesMobileQuestBarExperiment2.BountiesMobileQuestBarIllustration.ILLUSTRATION_1 === illustration) {
    return <closure_11 style={tmp.orbs}><closure_13 /></closure_11>;
  }
}));
size = size_mod;
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyIllustration.tsx");

export default memoResult;
export const QUEST_DOCK_BOUNTY_ILLUSTRATION_RESERVED_WIDTH = 95;