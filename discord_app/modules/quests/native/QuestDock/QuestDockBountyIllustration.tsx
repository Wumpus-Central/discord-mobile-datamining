// === Module 15029: QuestDockBountyIllustration ===

// Module 15029 (QuestDockBountyIllustration)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import native from "native" /* 4595 */;
import FastImageDefault from "FastImage" /* 5981 */;
import APNGPlayer from "APNGPlayer" /* 8497 */;
import BountiesMobileQuestBarExperiment2 from "BountiesMobileQuestBarExperiment" /* 10011 */;
import useIsQuestDockContentVisibleDefault from "useIsQuestDockContentVisible" /* 15025 */;
import _modDef15030 from "module_15030" /* 15030 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;

require = fn;
const View = fn(17).View;
const QuestsExperimentLocations = fn(5630).QuestsExperimentLocations;
const QuestDockConstants = fn(14912);
({ QUEST_DOCK_COLLAPSED_HEIGHT, QUEST_DOCK_COLLAPSED_HEADER_PADDING_RIGHT } = QuestDockConstants);
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj = { frame: { marginRight: -QUEST_DOCK_COLLAPSED_HEADER_PADDING_RIGHT + 5 }, hands: null, orbs: null, fill: { flex: 1 } };
let size = { width: 124, height: QUEST_DOCK_COLLAPSED_HEIGHT, transform: null };
let items = [{ translateY: -2 }];
size.transform = items;
obj.hands = size;
const size1 = { width: 120, height: 70, marginBottom: QUEST_DOCK_COLLAPSED_HEIGHT - 70 };
obj.orbs = size1;
let closure_8 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp = useIsQuestDockContentVisibleDefault();
  if (tmp) {
    tmp = !obj.useIsQuestDockExpanded();
  }
  return tmp;
}) : (() => {
  let tmp = useIsQuestDockContentVisibleDefault();
  if (tmp) {
    tmp = !obj.useIsQuestDockExpanded();
  }
  return tmp;
});
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(7);
  const tmp2 = closure_9();
  let current = tmp2;
  noop.useRef(null);
  dependencyMap = noop.useRef(tmp2);
  noop.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      if (null != ref3.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref3.current);
        ref3.current = null;
      }
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp2) {
    const fn2 = function f() {
      closure_2.current = current;
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
    let tmp5 = items;
    let tmp4 = fn2;
  } else {
    tmp4 = cResult[2];
    tmp5 = cResult[3];
  }
  const effect = noop.useEffect(tmp4, tmp5);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function h() {
      return first;
    };
    const items1 = [first];
    cResult[4] = fn3;
    cResult[5] = items1;
    let tmp8 = items1;
    let tmp7 = fn3;
  } else {
    tmp7 = cResult[4];
    tmp8 = cResult[5];
  }
  const effect1 = noop.useEffect(tmp7, tmp8);
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
            closure_3.current = null;
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
            closure_3.current = null;
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
  let current = tmp;
  noop.useRef(null);
  noop.useRef(tmp);
  noop.useRef(null);
  const callback = noop.useCallback(() => {
    if (null != ref3.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref3.current);
      ref3.current = null;
    }
  }, []);
  const items = [tmp, callback];
  const effect = noop.useEffect(() => {
    closure_2.current = current;
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
  const effect1 = noop.useEffect(() => callback, items1);
  const items2 = [callback];
  return noop.useCallback((current) => {
    closure_1.current = current;
    callback();
    current = null == current;
    if (!current) {
      current = ref2.current;
    }
    if (!current) {
      const _setTimeout = setTimeout;
      closure_3.current = setTimeout(() => {
        closure_3.current = null;
        if (!ref.current) {
          current.pause();
        }
      }, 0);
    }
  }, items2);
});
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(6);
  ({ style, children } = arg0);
  const tmp2 = closure_8();
  if (cResult[0] === style) {
    if (cResult[1] === tmp2.frame) {
      let tmp3 = cResult[2];
    }
    if (cResult[3] === children) {
      if (cResult[4] === tmp3) {
        let tmp4 = cResult[5];
      }
      return tmp4;
    }
    const obj2 = { style: tmp3, pointerEvents: "none", accessible: false, importantForAccessibility: "no-hide-descendants", children };
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
  ({ style, children } = arg0);
  const obj = { style: null, pointerEvents: "none", accessible: false, importantForAccessibility: "no-hide-descendants", children: null };
  const items = [closure_8().frame, style];
  obj.style = items;
  obj.children = children;
  return <View style={null} pointerEvents="none" accessible={false} importantForAccessibility="no-hide-descendants">{null}</View>;
});
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((shouldAnimate) => {
  const cResult = c.c(6);
  shouldAnimate = shouldAnimate.shouldAnimate;
  const tmp4 = closure_8();
  const ref = noop.useRef(null);
  const aPNGPlayerControls = APNGPlayer.useAPNGPlayerControls(ref);
  if (cResult[0] === aPNGPlayerControls) {
    if (cResult[1] === shouldAnimate) {
      let tmp7 = cResult[2];
      let tmp8 = cResult[3];
    }
    const effect = noop.useEffect(tmp7, tmp8);
    if (cResult[4] !== tmp4.fill) {
      const obj4 = { ref, url: _modDef15030, style: tmp4.fill, autoplay: false };
      const tmp13 = jsx(APNGPlayer.APNGPlayer, { ref, url: _modDef15030, style: tmp4.fill, autoplay: false });
      cResult[4] = tmp4.fill;
      cResult[5] = tmp13;
      let tmp10 = tmp13;
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
  const ref = noop.useRef(null);
  const tmp = closure_8();
  const aPNGPlayerControls = APNGPlayer.useAPNGPlayerControls(ref);
  const items = [aPNGPlayerControls, shouldAnimate];
  const effect = noop.useEffect(() => {
    if (shouldAnimate) {
      aPNGPlayerControls.play();
    } else {
      aPNGPlayerControls.pause();
    }
  }, items);
  return jsx(APNGPlayer.APNGPlayer, { ref, url: _modDef15030, style: tmp.fill, autoplay: false });
});
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(9);
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
  const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
  const tmp9 = closure_9() && !stateFromStores;
  const tmpResult = initialize;
  if (tmpResult2.isAndroid()) {
    if (cResult[2] !== tmp9) {
      const obj2 = { shouldAnimate: tmp9 };
      const tmp21 = <closure_12 shouldAnimate={tmp9} />;
      cResult[2] = tmp9;
      cResult[3] = tmp21;
      let tmp18 = tmp21;
    } else {
      tmp18 = cResult[3];
    }
    return tmp18;
  } else {
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { uri: _modDef15030 };
      cResult[4] = obj3;
      let tmp10 = obj3;
    } else {
      tmp10 = cResult[4];
    }
    if (cResult[5] === tmp4.fill) {
      if (cResult[6] === tmp12) {
        if (cResult[7] === tmp13) {
          let tmp14 = cResult[8];
        }
        return tmp14;
      }
    }
    const obj4 = { source: tmp10, style: tmp4.fill, resizeMode: "contain", enableAnimation: !stateFromStores, paused: !tmp9, accessible: false };
    const tmp17 = jsx(FastImageDefault, { source: tmp10, style: tmp4.fill, resizeMode: "contain", enableAnimation: !stateFromStores, paused: !tmp9, accessible: false });
    cResult[5] = tmp4.fill;
    cResult[6] = !stateFromStores;
    cResult[7] = !tmp9;
    cResult[8] = tmp17;
    tmp14 = tmp17;
  }
  tmpResult2 = PlatformUtils;
}) : (() => {
  const tmp = closure_8();
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp5 = closure_9() && !stateFromStores;
  if (tmp2Result.isAndroid()) {
    const obj2 = { shouldAnimate: tmp5 };
    let tmp6Result = <closure_12 shouldAnimate={tmp5} />;
  } else {
    const obj3 = { source: null, style: null, resizeMode: "contain", enableAnimation: null, paused: null, accessible: false };
    const obj4 = { uri: _modDef15030 };
    obj3.source = obj4;
    obj3.style = tmp.fill;
    obj3.enableAnimation = !stateFromStores;
    obj3.paused = !tmp5;
    tmp6Result = jsx(FastImageDefault, { source: null, style: null, resizeMode: "contain", enableAnimation: null, paused: null, accessible: false });
  }
  return tmp6Result;
});
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const tmp4 = closure_10();
  if (cResult[0] !== tmp4) {
    const obj2 = { ref: tmp4, stateMachine: "State Machine 1", fit: "contain" };
    const tmp7 = jsx(native.QuestBar_2DOrbsRive, { ref: tmp4, stateMachine: "State Machine 1", fit: "contain" });
    cResult[0] = tmp4;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (() => jsx(native.QuestBar_2DOrbsRive, { ref: closure_10(), stateMachine: "State Machine 1", fit: "contain" }));
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const tmp4 = closure_10();
  if (cResult[0] !== tmp4) {
    const obj2 = { ref: tmp4, stateMachine: "State Machine 1", fit: "contain" };
    const tmp7 = jsx(native.OrbsIllustration_HandsRive, { ref: tmp4, stateMachine: "State Machine 1", fit: "contain" });
    cResult[0] = tmp4;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (() => jsx(native.OrbsIllustration_HandsRive, { ref: closure_10(), stateMachine: "State Machine 1", fit: "contain" }));
ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyIllustration.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(10);
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: QuestsExperimentLocations.QUESTS_BAR_MOBILE };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const BountiesMobileQuestBarExperiment = BountiesMobileQuestBarExperiment2.BountiesMobileQuestBarExperiment;
  const illustration = BountiesMobileQuestBarExperiment.useConfig(first).illustration;
  if (BountiesMobileQuestBarExperiment2.BountiesMobileQuestBarIllustration.ILLUSTRATION_2 === illustration) {
    const _Symbol3 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp26 = <closure_14 />;
      cResult[1] = tmp26;
      let tmp23 = tmp26;
    } else {
      tmp23 = cResult[1];
    }
    if (cResult[2] !== tmp4.orbs) {
      const obj3 = { style: tmp4.orbs, children: tmp23 };
      const tmp30 = <closure_11 style={tmp4.orbs}>{tmp23}</closure_11>;
      cResult[2] = tmp4.orbs;
      cResult[3] = tmp30;
      let tmp27 = tmp30;
    } else {
      tmp27 = cResult[3];
    }
    return tmp27;
  } else if (BountiesMobileQuestBarExperiment2.BountiesMobileQuestBarIllustration.ILLUSTRATION_3 === illustration) {
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp18 = <closure_15 />;
      cResult[4] = tmp18;
      let tmp15 = tmp18;
    } else {
      tmp15 = cResult[4];
    }
    if (cResult[5] !== tmp4.hands) {
      const obj4 = { style: tmp4.hands, children: tmp15 };
      const tmp22 = <closure_11 style={tmp4.hands}>{tmp15}</closure_11>;
      cResult[5] = tmp4.hands;
      cResult[6] = tmp22;
      let tmp19 = tmp22;
    } else {
      tmp19 = cResult[6];
    }
    return tmp19;
  } else if (BountiesMobileQuestBarExperiment2.BountiesMobileQuestBarIllustration.ILLUSTRATION_1 === illustration) {
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp10 = <closure_13 />;
      cResult[7] = tmp10;
      let tmp7 = tmp10;
    } else {
      tmp7 = cResult[7];
    }
    if (cResult[8] !== tmp4.orbs) {
      const obj5 = { style: tmp4.orbs, children: tmp7 };
      const tmp14 = <closure_11 style={tmp4.orbs}>{tmp7}</closure_11>;
      cResult[8] = tmp4.orbs;
      cResult[9] = tmp14;
      let tmp11 = tmp14;
    } else {
      tmp11 = cResult[9];
    }
    return tmp11;
  }
}) : (() => {
  const tmp = closure_8();
  const BountiesMobileQuestBarExperiment = BountiesMobileQuestBarExperiment2.BountiesMobileQuestBarExperiment;
  const illustration = BountiesMobileQuestBarExperiment.useConfig({ location: QuestsExperimentLocations.QUESTS_BAR_MOBILE }).illustration;
  if (BountiesMobileQuestBarExperiment2.BountiesMobileQuestBarIllustration.ILLUSTRATION_2 === illustration) {
    const obj2 = { style: tmp.orbs, children: <closure_14 /> };
    return <closure_11 style={tmp.orbs}><closure_14 /></closure_11>;
  } else if (BountiesMobileQuestBarExperiment2.BountiesMobileQuestBarIllustration.ILLUSTRATION_3 === illustration) {
    const obj3 = { style: tmp.hands, children: <closure_15 /> };
    return <closure_11 style={tmp.hands}><closure_15 /></closure_11>;
  } else if (BountiesMobileQuestBarExperiment2.BountiesMobileQuestBarIllustration.ILLUSTRATION_1 === illustration) {
    const obj4 = { style: tmp.orbs, children: <closure_13 /> };
    return <closure_11 style={tmp.orbs}><closure_13 /></closure_11>;
  }
  const obj = { location: QuestsExperimentLocations.QUESTS_BAR_MOBILE };
}));
export const QUEST_DOCK_BOUNTY_ILLUSTRATION_RESERVED_WIDTH = 95;