// discord_app/modules/quests/native/QuestDock/QuestDockBountySmokeLayer.tsx
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import QuestDockUtils from "QuestDockUtils.tsx";
import QuestDockVisibilityContextDefault from "QuestDockVisibilityContext.tsx";
import _modDef17806 from "../../../../../discord_assets/assets/quests/bounties/BG_Smoke_Baked_Android_Frame0.png.js";
import _modDef17807 from "../../../../../discord_assets/assets/quests/bounties/BG_Smoke_Full_FigmaMatched_Frame0.png.js";
import useIsQuestDockContentVisibleDefault from "useIsQuestDockContentVisible.tsx";
import _modDef17809 from "../../../../../discord_assets/assets/quests/bounties/BG_Smoke_Full_FigmaMatched.mov.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
function QuestDockBountySmokePlaceholder() {
  const obj = {
    source: null,
    style: null,
    resizeMode: "cover",
    accessible: false,
    importantForAccessibility: "no-hide-descendants",
  };
  const obj2 = { uri: _modDef17807 };
  obj.source = obj2;
  obj.style = StyleSheet.absoluteFillObject;
  return metroImportDefault(FastImageDefault, obj);
}
function QuestDockBountySmokeLayerIOS(paused) {
  let flag = paused.paused;
  if (flag === undefined) {
    flag = false;
  }
  _require = undefined;
  items = [AccessibilityStore];
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
    const obj3 = {
      style: tmp7 ? video.video : video.hiddenVideo,
      source: null,
      resizeMode: "cover",
      paused: null,
      muted: true,
      disableFocus: true,
      preventsDisplaySleepDuringVideoPlayback: false,
      importantForAccessibility: "no-hide-descendants",
      onReadyForDisplay: null,
      onError: null,
    };
    const obj4 = { uri: _modDef17809 };
    obj3.source = obj4;
    if (!flag) {
      flag = !tmp5;
    }
    obj3.paused = flag;
    obj3.onReadyForDisplay = callback;
    obj3.onError = tmp14;
    tmp18Result = closure_7(tmp(9730).VideoComponent, obj3);
  }
  const children = [tmp18Result];
  let tmp20 = !tmp7;
  if (!tmp7) {
    tmp20 = closure_7(QuestDockBountySmokePlaceholder, {});
  }
  children[1] = tmp20;
  return closure_9(closure_8, { children });
}
function QuestDockBountySmokeLayerAndroidAnimated(paused) {
  let flag = paused.paused;
  if (flag === undefined) {
    flag = false;
  }
  let isRendered;
  _slicedToArray = undefined;
  items = [AccessibilityStore];
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
      tmp4Result = tmp4(17810);
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
  const effect1 = noop.useEffect(
    () => () => {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
        ref.current = null;
      }
    },
    items2,
  );
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
    const obj3 = {
      style: video.video,
      source: null,
      resizeMode: "cover",
      paused: null,
      muted: true,
      disableFocus: true,
      preventsDisplaySleepDuringVideoPlayback: false,
      importantForAccessibility: "no-hide-descendants",
      onLoad: null,
      onError: null,
    };
    const obj4 = { uri: tmp4Result };
    obj3.source = obj4;
    if (!flag) {
      flag = !tmp5;
    }
    obj3.paused = flag;
    obj3.onLoad = callback;
    obj3.onError = tmp24;
    tmp28Result = closure_7(tmp(9730).VideoComponent, obj3);
  }
  const children = [tmp28Result];
  let tmp30 = !tmp8;
  if (!tmp8) {
    const obj5 = {
      source: null,
      style: null,
      resizeMode: "cover",
      accessible: false,
      importantForAccessibility: "no-hide-descendants",
    };
    const obj6 = { uri: tmp4(17806) };
    obj5.source = obj6;
    obj5.style = StyleSheet.absoluteFillObject;
    tmp30 = closure_7(tmp4(6020), obj5);
    const tmp4Result2 = tmp4(6020);
  }
  children[1] = tmp30;
  return closure_9(closure_8, { children });
}
function QuestDockBountySmokeLayerAndroid(surface) {
  if (surface.surface === obj.EXPANDED) {
    let tmp6 = metroImportDefault(QuestDockBountySmokePlaceholder, {});
  } else {
    obj = {};
    const merged = Object.assign(surface);
    tmp6 = metroImportDefault(QuestDockBountySmokeLayerAndroidAnimated, obj);
  }
  return tmp6;
}
const StyleSheet = fn(17).StyleSheet;
const jsxProd = fn(21);
({ jsx: metroImportDefault, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
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
    let tmpResult = metroImportDefault(QuestDockBountySmokeLayerAndroid, obj2);
  } else {
    const obj3 = {};
    const merged1 = Object.assign(arg0);
    tmpResult = metroImportDefault(QuestDockBountySmokeLayerIOS, obj3);
  }
  return tmpResult;
});
export const QUEST_DOCK_BOUNTY_SMOKE_ART_ASPECT_RATIO = 3.75;
export { QuestDockBountySmokeSurface };
export function getQuestDockBountySmokeCollapsedPlaceholderUrl() {
  if (obj.isAndroid()) {
    let tmp2Result = _modDef17806;
  } else {
    tmp2Result = _modDef17807;
  }
  return tmp2Result;
}
export function useSmokeArtSize() {
  const width = left(right[8])().width;
  const rect = left(right[9])();
  left = rect.left;
  right = rect.right;
  items = [width, left, right];
  return noop.useMemo(() => {
    const questDockExpandedWidth = QuestDockUtils.getQuestDockExpandedWidth(width, left, right);
    const size = { width: questDockExpandedWidth, height: questDockExpandedWidth / 3.75 };
    return size;
  }, items);
}
