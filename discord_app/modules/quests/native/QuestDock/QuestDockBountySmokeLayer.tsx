// === Module 14735: QuestDockBountySmokeLayer ===

// Module 14735 (QuestDockBountySmokeLayer)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import FastImageDefault from "FastImage" /* 5899 */;
import QuestDockUtils from "QuestDockUtils" /* 14623 */;
import QuestDockVisibilityContextDefault from "QuestDockVisibilityContext" /* 14713 */;
import BountiesAndroidQuestBarSmokeAnimationExperiment from "BountiesAndroidQuestBarSmokeAnimationExperiment" /* 14736 */;
import _modDef14737 from "module_14737" /* 14737 */;
import _modDef14738 from "module_14738" /* 14738 */;
import useIsQuestDockContentVisibleDefault from "useIsQuestDockContentVisible" /* 14739 */;
import _modDef14740 from "module_14740" /* 14740 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;

require = fn;
function QuestDockBountySmokePlaceholder() {
  const obj = { source: null, style: null, resizeMode: "cover", accessible: false, importantForAccessibility: "no-hide-descendants" };
  const obj2 = { uri: _modDef14737 };
  obj.source = obj2;
  obj.style = StyleSheet.absoluteFillObject;
  return React6(FastImageDefault, obj);
}
function QuestDockBountySmokeLayerIOS(paused) {
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
    const obj3 = { style: tmp7 ? video.video : video.hiddenVideo, source: null, resizeMode: "cover", paused: null, muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants", onLoad: null, onError: null };
    const obj4 = { uri: _modDef14740 };
    obj3.source = obj4;
    if (!flag) {
      flag = !tmp5;
    }
    obj3.paused = flag;
    obj3.onLoad = callback;
    obj3.onError = tmp14;
    tmp18Result = closure_8(tmp(7755).VideoComponent, obj3);
  }
  const children = [tmp18Result, ];
  let tmp20 = !tmp7;
  if (!tmp7) {
    tmp20 = closure_8(QuestDockBountySmokePlaceholder, {});
  }
  children[1] = tmp20;
  return closure_10(closure_9, { children });
}
function QuestDockBountySmokeLayerAndroidAnimated(paused) {
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
      tmp4Result = tmp4(14741);
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
    const obj3 = { style: video.video, source: null, resizeMode: "cover", paused: null, muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants", onLoad: null, onError: null };
    const obj4 = { uri: tmp4Result };
    obj3.source = obj4;
    if (!flag) {
      flag = !tmp5;
    }
    obj3.paused = flag;
    obj3.onLoad = callback;
    obj3.onError = tmp24;
    tmp28Result = closure_8(tmp(7755).VideoComponent, obj3);
  }
  const children = [tmp28Result, ];
  let tmp30 = !tmp8;
  if (!tmp8) {
    const obj5 = { source: null, style: null, resizeMode: "cover", accessible: false, importantForAccessibility: "no-hide-descendants" };
    const obj6 = { uri: tmp4(14738) };
    obj5.source = obj6;
    obj5.style = StyleSheet.absoluteFillObject;
    tmp30 = closure_8(tmp4(5899), obj5);
    const tmp4Result2 = tmp4(5899);
  }
  children[1] = tmp30;
  return closure_10(closure_9, { children });
}
function QuestDockBountySmokeLayerAndroid(surface) {
  const obj = BountiesAndroidQuestBarSmokeAnimationExperiment;
  if (obj.useIsBountiesAndroidQuestBarSmokeAnimationEnabled(QuestsExperimentLocations.QUESTS_BAR_MOBILE)) {
    if (surface.surface !== obj.EXPANDED) {
      const obj2 = {};
      const merged = Object.assign(surface);
      let tmp3 = React6(QuestDockBountySmokeLayerAndroidAnimated, obj2);
    }
    return tmp3;
  }
  tmp3 = React6(QuestDockBountySmokePlaceholder, {});
}
const StyleSheet = fn(17).StyleSheet;
const QuestsExperimentLocations = fn(5756).QuestsExperimentLocations;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const QuestDockBountySmokeSurface = { COLLAPSED: "collapsed", EXPANDED: "expanded" };
let obj2 = { video: StyleSheet.absoluteFillObject, hiddenVideo: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.opacity = 0;
obj2.hiddenVideo = obj3;
const video = StyleSheet.create(obj2);
let size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountySmokeLayer.tsx");

export default noop.memo(function QuestDockBountySmokeLayer(arg0) {
  if (obj.isAndroid()) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    let tmpResult = React6(QuestDockBountySmokeLayerAndroid, obj2);
  } else {
    const obj3 = {};
    const merged1 = Object.assign(arg0);
    tmpResult = React6(QuestDockBountySmokeLayerIOS, obj3);
  }
  return tmpResult;
});
export const QUEST_DOCK_BOUNTY_SMOKE_ART_ASPECT_RATIO = 3.75;
export { QuestDockBountySmokeSurface };
export const useQuestDockBountySmokeCollapsedPlaceholderUrl = function useQuestDockBountySmokeCollapsedPlaceholderUrl() {
  const isBountiesAndroidQuestBarSmokeAnimationEnabled = BountiesAndroidQuestBarSmokeAnimationExperiment.useIsBountiesAndroidQuestBarSmokeAnimationEnabled(QuestsExperimentLocations.QUESTS_BAR_MOBILE);
  if (obj2.isAndroid()) {
    if (isBountiesAndroidQuestBarSmokeAnimationEnabled) {
      let tmp3 = _modDef14738;
    }
    return tmp3;
  }
  tmp3 = _modDef14737;
  obj2 = PlatformUtils;
};
export const useSmokeArtSize = function useSmokeArtSize() {
  const width = left(right[10])().width;
  const rect = left(right[11])();
  left = rect.left;
  right = rect.right;
  const items = [width, left, right];
  return noop.useMemo(() => {
    const questDockExpandedWidth = QuestDockUtils.getQuestDockExpandedWidth(width, left, right);
    const size = { width: questDockExpandedWidth, height: questDockExpandedWidth / 3.75 };
    return size;
  }, items);
};