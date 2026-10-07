// === Module 15021: QuestDockBountySmokeLayer ===

// Module 15021 (QuestDockBountySmokeLayer)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import FastImageDefault from "FastImage" /* 5981 */;
import QuestDockUtils from "QuestDockUtils" /* 14911 */;
import QuestDockVisibilityContextDefault from "QuestDockVisibilityContext" /* 14999 */;
import BountiesAndroidQuestBarSmokeAnimationExperiment from "BountiesAndroidQuestBarSmokeAnimationExperiment" /* 15022 */;
import _modDef15023 from "module_15023" /* 15023 */;
import _modDef15024 from "module_15024" /* 15024 */;
import useIsQuestDockContentVisibleDefault from "useIsQuestDockContentVisible" /* 15025 */;
import _modDef15026 from "module_15026" /* 15026 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;

const _modDef15027 = tmp9(15027);
require = fn;
const StyleSheet = fn(17).StyleSheet;
const QuestsExperimentLocations = fn(5630).QuestsExperimentLocations;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
let c11 = 3.75;
const QuestDockBountySmokeSurface = { COLLAPSED: "collapsed", EXPANDED: "expanded" };
fn(558);
let ReactCompilerGating = fn(558);
let obj2 = { video: StyleSheet.absoluteFillObject, hiddenVideo: null };
let obj5 = {};
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const isBountiesAndroidQuestBarSmokeAnimationEnabled = BountiesAndroidQuestBarSmokeAnimationExperiment.useIsBountiesAndroidQuestBarSmokeAnimationEnabled(QuestsExperimentLocations.QUESTS_BAR_MOBILE);
  if (obj2.isAndroid()) {
    if (isBountiesAndroidQuestBarSmokeAnimationEnabled) {
      let tmp3 = _modDef15024;
    }
    return tmp3;
  }
  tmp3 = _modDef15023;
  obj2 = PlatformUtils;
}) : (() => {
  const isBountiesAndroidQuestBarSmokeAnimationEnabled = BountiesAndroidQuestBarSmokeAnimationExperiment.useIsBountiesAndroidQuestBarSmokeAnimationEnabled(QuestsExperimentLocations.QUESTS_BAR_MOBILE);
  if (obj2.isAndroid()) {
    if (isBountiesAndroidQuestBarSmokeAnimationEnabled) {
      let tmp3 = _modDef15024;
    }
    return tmp3;
  }
  tmp3 = _modDef15023;
  obj2 = PlatformUtils;
});
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj5.opacity = 0;
obj2.hiddenVideo = obj5;
const styles = StyleSheet.create(obj2);
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { source: null, style: null, resizeMode: "cover", accessible: false, importantForAccessibility: "no-hide-descendants" };
    const obj3 = { uri: _modDef15023 };
    obj2.source = obj3;
    obj2.style = StyleSheet.absoluteFillObject;
    const tmp8 = closure_1_8(FastImageDefault, obj2);
    cResult[0] = tmp8;
    let first = tmp8;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
  const obj = { source: null, style: null, resizeMode: "cover", accessible: false, importantForAccessibility: "no-hide-descendants" };
  const obj2 = { uri: _modDef15023 };
  obj.source = obj2;
  obj.style = StyleSheet.absoluteFillObject;
  return closure_1_8(FastImageDefault, obj);
});
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((paused) => {
  const cResult = c.c(14);
  paused = paused.paused;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function c() {
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
  const tmp10 = useIsQuestDockContentVisibleDefault();
  const tmpResult = initialize;
  [tmp12, tmp13] = noop.useState(false);
  const require = tmp13;
  const tmp14 = _slicedToArray(noop.useState(stateFromStores), 2);
  if (tmp14[0] !== stateFromStores) {
    tmp14[1](stateFromStores);
    let tmp16 = stateFromStores;
    if (stateFromStores) {
      tmp16 = tmp12;
    }
    if (tmp16) {
      tmp13(false);
    }
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function y() {
      tmp13(true);
    };
    cResult[2] = fn2;
    let tmp18 = fn2;
  } else {
    tmp18 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        tmp = closure_0(false);
        return;
      }
    }
    cResult[3] = O;
  } else {
    class O {
      constructor() {
        tmp = closure_0(false);
        return;
      }
    }
  }
  if (cResult[4] === tmp10) {
    class O {
      constructor() {
        tmp = closure_0(false);
        return;
      }
    }
  }
  let tmp21Result = !stateFromStores;
  if (!stateFromStores) {
    class O {
      constructor() {
        tmp = closure_0(false);
        return;
      }
    }
    const obj2 = { style: tmp12 ? closure_13.video : closure_13.hiddenVideo, source: null, resizeMode: "cover", paused: null, muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants", onReadyForDisplay: null, onError: null };
    const obj3 = { uri: _modDef15026 };
    obj2.source = obj3;
    if (!tmp4) {
      class O {
        constructor() {
          tmp = closure_0(false);
          return;
        }
      }
    }
    obj2.paused = tmp4;
    obj2.onReadyForDisplay = tmp18;
    obj2.onError = O;
    tmp21Result = tmp21(tmp(7993).VideoComponent, obj2);
  }
  cResult[4] = tmp10;
  cResult[5] = tmp12;
  cResult[6] = undefined !== paused && paused;
  cResult[7] = stateFromStores;
  cResult[8] = tmp21Result;
  const tmp11 = _slicedToArray(noop.useState(false), 2);
}) : ((paused) => {
  let flag = paused.paused;
  if (flag === undefined) {
    flag = false;
  }
  _require = undefined;
  const items = [AccessibilityStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj = require("initialize");
  const tmp = _require;
  const tmp5 = useIsQuestDockContentVisibleDefault();
  [tmp7, tmp8] = noop.useState(false);
  _require = tmp8;
  const tmp9 = _slicedToArray(noop.useState(stateFromStores), 2);
  if (tmp9[0] !== stateFromStores) {
    tmp9[1](stateFromStores);
    let tmp11 = stateFromStores;
    if (stateFromStores) {
      tmp11 = tmp7;
    }
    if (tmp11) {
      tmp8(false);
    }
  }
  const callback = noop.useCallback(() => {
    _undefined(true);
  }, []);
  let tmp18Result = !stateFromStores;
  if (!stateFromStores) {
    const obj3 = { style: tmp7 ? closure_13.video : closure_13.hiddenVideo, source: null, resizeMode: "cover", paused: null, muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants", onReadyForDisplay: null, onError: null };
    const obj4 = { uri: _modDef15026 };
    obj3.source = obj4;
    if (!flag) {
      flag = !tmp5;
    }
    obj3.paused = flag;
    obj3.onReadyForDisplay = callback;
    obj3.onError = tmp14;
    tmp18Result = closure_8(tmp(7993).VideoComponent, obj3);
  }
  const children = [tmp18Result, ];
  let tmp20 = !tmp7;
  if (!tmp7) {
    tmp20 = closure_8(closure_14, {});
  }
  children[1] = tmp20;
  return closure_10(closure_9, { children });
});
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((paused) => {
  const cResult = isRendered(576).c(19);
  paused = paused.paused;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function p() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const obj = isRendered(576);
  const stateFromStores = isRendered(504).useStateFromStores(tmp5, tmp6);
  const tmp10 = useIsQuestDockContentVisibleDefault();
  isRendered = noop.useContext(QuestDockVisibilityContextDefault).isRendered;
  const tmp11 = _slicedToArray;
  const tmpResult = isRendered(504);
  [tmp13, tmp14] = noop.useState(false);
  importDefault = tmp14;
  dependencyMap = noop.useRef(null);
  const tmp12 = _slicedToArray(noop.useState(false), 2);
  [tmp16, tmp17] = noop.useState(false);
  _slicedToArray = tmp17;
  const tmp18 = _slicedToArray(noop.useState(isRendered), 2);
  if (tmp18[0] !== isRendered) {
    tmp18[1](isRendered);
    let tmp20 = !isRendered;
    if (!isRendered) {
      tmp20 = tmp16;
    }
    if (tmp20) {
      tmp17(false);
    }
  }
  if (cResult[2] !== isRendered) {
    const fn2 = function h() {
      if (timeout) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => {
          closure_1_3(true);
        }, 600);
        return () => {
          clearTimeout(closure_0);
        };
      }
    };
    const items1 = [isRendered];
    cResult[2] = isRendered;
    cResult[3] = fn2;
    cResult[4] = items1;
    let tmp23 = items1;
    let tmp22 = fn2;
  } else {
    tmp22 = cResult[3];
    tmp23 = cResult[4];
  }
  const effect = noop.useEffect(tmp22, tmp23);
  let tmp9Result = null;
  if (!stateFromStores) {
    tmp9Result = null;
    if (tmp16) {
      tmp9Result = _modDef15027;
    }
  }
  const tmp11Result = tmp11(noop.useState(tmp9Result), 2);
  if (tmp11Result[0] !== tmp9Result) {
    tmp11Result[1](tmp9Result);
    if (tmp13) {
      tmp14(false);
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function x() {
      return () => {
        if (null != ref.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref.current);
          ref.current = null;
        }
      };
    };
    cResult[5] = fn3;
    let tmp29 = fn3;
  } else {
    tmp29 = cResult[5];
  }
  if (cResult[6] !== tmp9Result) {
    const items2 = [tmp9Result];
    cResult[6] = tmp9Result;
    cResult[7] = items2;
    let tmp30 = items2;
  } else {
    tmp30 = cResult[7];
  }
  const effect1 = noop.useEffect(tmp29, tmp30);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class U {
      constructor() {
        tmp = closure_2;
        if (null != closure_2.current) {
          tmp2 = globalThis;
          _clearTimeout = clearTimeout;
          clearTimeoutResult = clearTimeout(tmp.current);
        }
        tmp.current = setTimeout(() => {
          closure_1_1(true);
          ref.current = null;
        }, 150);
        return;
      }
    }
    cResult[8] = U;
  } else {
    class U {
      constructor() {
        tmp = closure_2;
        if (null != closure_2.current) {
          tmp2 = globalThis;
          _clearTimeout = clearTimeout;
          clearTimeoutResult = clearTimeout(tmp.current);
        }
        tmp.current = setTimeout(() => {
          closure_1_1(true);
          ref.current = null;
        }, 150);
        return;
      }
    }
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class U {
      constructor() {
        tmp = closure_2;
        if (null != closure_2.current) {
          tmp2 = globalThis;
          _clearTimeout = clearTimeout;
          clearTimeoutResult = clearTimeout(tmp.current);
        }
        tmp.current = setTimeout(() => {
          closure_1_1(true);
          ref.current = null;
        }, 150);
        return;
      }
    }
    cResult[9] = tmp34;
  } else {
    class U {
      constructor() {
        tmp = closure_2;
        if (null != closure_2.current) {
          tmp2 = globalThis;
          _clearTimeout = clearTimeout;
          clearTimeoutResult = clearTimeout(tmp.current);
        }
        tmp.current = setTimeout(() => {
          closure_1_1(true);
          ref.current = null;
        }, 150);
        return;
      }
    }
  }
  if (cResult[10] === tmp10) {
    class U {
      constructor() {
        tmp = closure_2;
        if (null != closure_2.current) {
          tmp2 = globalThis;
          _clearTimeout = clearTimeout;
          clearTimeoutResult = clearTimeout(tmp.current);
        }
        tmp.current = setTimeout(() => {
          closure_1_1(true);
          ref.current = null;
        }, 150);
        return;
      }
    }
  }
  let tmp36Result = null != tmp9Result;
  if (tmp36Result) {
    class U {
      constructor() {
        tmp = closure_2;
        if (null != closure_2.current) {
          tmp2 = globalThis;
          _clearTimeout = clearTimeout;
          clearTimeoutResult = clearTimeout(tmp.current);
        }
        tmp.current = setTimeout(() => {
          closure_1_1(true);
          ref.current = null;
        }, 150);
        return;
      }
    }
    const obj2 = { style: closure_13.video, source: null, resizeMode: "cover", paused: null, muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants", onLoad: null, onError: null };
    const obj4 = { uri: tmp9Result };
    obj2.source = obj4;
    if (!tmp4) {
      class U {
        constructor() {
          tmp = closure_2;
          if (null != closure_2.current) {
            tmp2 = globalThis;
            _clearTimeout = clearTimeout;
            clearTimeoutResult = clearTimeout(tmp.current);
          }
          tmp.current = setTimeout(() => {
            closure_1_1(true);
            ref.current = null;
          }, 150);
          return;
        }
      }
    }
    obj2.paused = tmp4;
    obj2.onLoad = U;
    obj2.onError = tmp34;
    tmp36Result = tmp36(tmp(7993).VideoComponent, obj2);
  }
  cResult[10] = tmp10;
  cResult[11] = undefined !== paused && paused;
  cResult[12] = tmp9Result;
  cResult[13] = tmp36Result;
  const tmp15 = _slicedToArray(noop.useState(false), 2);
}) : ((paused) => {
  let flag = paused.paused;
  if (flag === undefined) {
    flag = false;
  }
  let isRendered;
  _slicedToArray = undefined;
  const items = [AccessibilityStore];
  const stateFromStores = isRendered(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj = isRendered(504);
  const tmp = isRendered;
  isRendered = noop.useContext(QuestDockVisibilityContextDefault).isRendered;
  const tmp5 = useIsQuestDockContentVisibleDefault();
  const tmp6 = _slicedToArray;
  [tmp8, tmp9] = noop.useState(false);
  importDefault = tmp9;
  dependencyMap = noop.useRef(null);
  const tmp7 = _slicedToArray(noop.useState(false), 2);
  [tmp11, tmp12] = noop.useState(false);
  _slicedToArray = tmp12;
  const tmp13 = _slicedToArray(noop.useState(isRendered), 2);
  if (tmp13[0] !== isRendered) {
    tmp13[1](isRendered);
    let tmp15 = !isRendered;
    if (!isRendered) {
      tmp15 = tmp11;
    }
    if (tmp15) {
      tmp12(false);
    }
  }
  const items1 = [isRendered];
  const effect = noop.useEffect(() => {
    if (timeout) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        closure_1_3(true);
      }, 600);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, items1);
  let tmp4Result = null;
  if (!stateFromStores) {
    tmp4Result = null;
    if (tmp11) {
      tmp4Result = tmp4(15027);
    }
  }
  const tmp6Result = tmp6(noop.useState(tmp4Result), 2);
  if (tmp6Result[0] !== tmp4Result) {
    tmp6Result[1](tmp4Result);
    if (tmp8) {
      tmp9(false);
    }
  }
  const items2 = [tmp4Result];
  const effect1 = noop.useEffect(() => () => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
  }, items2);
  const callback = noop.useCallback(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
    }
    ref.current = setTimeout(() => {
      _undefined(true);
      ref.current = null;
    }, 150);
  }, []);
  let tmp28Result = null != tmp4Result;
  if (tmp28Result) {
    const obj3 = { style: closure_13.video, source: null, resizeMode: "cover", paused: null, muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants", onLoad: null, onError: null };
    const obj4 = { uri: tmp4Result };
    obj3.source = obj4;
    if (!flag) {
      flag = !tmp5;
    }
    obj3.paused = flag;
    obj3.onLoad = callback;
    obj3.onError = tmp24;
    tmp28Result = closure_8(tmp(7993).VideoComponent, obj3);
  }
  const children = [tmp28Result, ];
  let tmp30 = !tmp8;
  if (!tmp8) {
    const obj5 = { source: null, style: null, resizeMode: "cover", accessible: false, importantForAccessibility: "no-hide-descendants" };
    const obj6 = { uri: tmp4(15024) };
    obj5.source = obj6;
    obj5.style = StyleSheet.absoluteFillObject;
    tmp30 = closure_8(tmp4(5981), obj5);
    const tmp4Result2 = tmp4(5981);
  }
  children[1] = tmp30;
  return closure_10(closure_9, { children });
});
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((surface) => {
  const obj = c;
  const cResult = obj.c(3);
  if (obj2.useIsBountiesAndroidQuestBarSmokeAnimationEnabled(QuestsExperimentLocations.QUESTS_BAR_MOBILE)) {
    if (surface.surface !== obj.EXPANDED) {
      if (cResult[1] !== surface) {
        const obj3 = {};
        const merged = Object.assign(surface);
        const tmp14 = closure_1_8(closure_16, obj3);
        cResult[1] = surface;
        cResult[2] = tmp14;
      }
    }
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = closure_1_8(closure_14, {});
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : ((surface) => {
  const obj = BountiesAndroidQuestBarSmokeAnimationExperiment;
  if (obj.useIsBountiesAndroidQuestBarSmokeAnimationEnabled(QuestsExperimentLocations.QUESTS_BAR_MOBILE)) {
    if (surface.surface !== obj.EXPANDED) {
      const obj2 = {};
      const merged = Object.assign(surface);
      let tmp3 = closure_1_8(closure_16, obj2);
    }
    return tmp3;
  }
  tmp3 = closure_1_8(closure_14, {});
});
ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  ({ left, right } = useSafeAreaInsetsDefault());
  const tmp2 = useSafeAreaInsetsDefault();
  const questDockExpandedWidth = QuestDockUtils.getQuestDockExpandedWidth(useWindowDimensionsDefault().width, left, right);
  const result = questDockExpandedWidth / c11;
  if (cResult[0] === result) {
    if (cResult[1] === questDockExpandedWidth) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  const size = { width: questDockExpandedWidth, height: result };
  cResult[0] = result;
  cResult[1] = questDockExpandedWidth;
  cResult[2] = size;
  tmp5 = size;
}) : (() => {
  const width = left(right[12])().width;
  const rect = left(right[13])();
  left = rect.left;
  right = rect.right;
  const items = [width, left, right];
  return noop.useMemo(() => {
    const questDockExpandedWidth = QuestDockUtils.getQuestDockExpandedWidth(width, left, right);
    const size = { width: questDockExpandedWidth, height: questDockExpandedWidth / c11 };
    return size;
  }, items);
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountySmokeLayer.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(2);
  if (cResult[0] !== arg0) {
    if (tmpResult.isAndroid()) {
      const obj2 = {};
      const merged = Object.assign(arg0);
      let tmp4Result = closure_1_8(closure_17, obj2);
    } else {
      const obj3 = {};
      const merged1 = Object.assign(arg0);
      tmp4Result = closure_1_8(closure_15, obj3);
    }
    cResult[0] = arg0;
    cResult[1] = tmp4Result;
    tmpResult = PlatformUtils;
  } else {
    return cResult[1];
  }
}) : ((arg0) => {
  if (obj.isAndroid()) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    let tmpResult = closure_1_8(closure_17, obj2);
  } else {
    const obj3 = {};
    const merged1 = Object.assign(arg0);
    tmpResult = closure_1_8(closure_15, obj3);
  }
  return tmpResult;
}));
export const QUEST_DOCK_BOUNTY_SMOKE_ART_ASPECT_RATIO = 3.75;
export { QuestDockBountySmokeSurface };
export const useQuestDockBountySmokeCollapsedPlaceholderUrl = tmp3;
export const useSmokeArtSize = tmp4;