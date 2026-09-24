// === Module 15540: QuestDockBountySmokeLayer ===

// Module 15540 (QuestDockBountySmokeLayer)
import FastImageDefault from "FastImage" /* 5892 */;
import QuestDockUtils from "QuestDockUtils" /* 15430 */;
import useIsQuestDockContentVisibleDefault from "useIsQuestDockContentVisible" /* 15541 */;
import _modDef15542 from "module_15542" /* 15542 */;
import _modDef15543 from "module_15543" /* 15543 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4821 */;

const require = globalThis.__r;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
let obj = { video: StyleSheet.absoluteFillObject, hiddenVideo: null };
const obj2 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.opacity = 0;
obj.hiddenVideo = obj2;
const styles = StyleSheet.create(obj);
let size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountySmokeLayer.tsx");

export default noop.memo(function QuestDockBountySmokeLayer(paused) {
  let flag = paused.paused;
  if (flag === undefined) {
    flag = false;
  }
  _require = undefined;
  const items = [AccessibilityStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj = require("initialize");
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
  const callback1 = noop.useCallback(() => {
    _undefined(false);
  }, []);
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  let tmp18Result = require("PlatformUtils").isIOS() && !stateFromStores;
  if (tmp18Result) {
    const obj3 = { style: tmp7 ? closure_10.video : closure_10.hiddenVideo, source: null, resizeMode: "cover", paused: null, muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants", onLoad: null, onError: null };
    const obj4 = { uri: _modDef15542 };
    obj3.source = obj4;
    if (!flag) {
      flag = !tmp5;
    }
    obj3.paused = flag;
    obj3.onLoad = callback;
    obj3.onError = callback1;
    tmp18Result = closure_7(tmp(8657).VideoComponent, obj3);
  }
  const children = [tmp18Result, ];
  let tmp20 = !tmp7;
  if (!tmp7) {
    const obj5 = { source: null, style: null, resizeMode: "cover", accessible: false, importantForAccessibility: "no-hide-descendants" };
    const obj6 = { uri: _modDef15543 };
    obj5.source = obj6;
    obj5.style = StyleSheet.absoluteFillObject;
    tmp20 = closure_7(FastImageDefault, obj5);
    const tmp4Result = FastImageDefault;
  }
  children[1] = tmp20;
  return closure_9(closure_8, { children });
});
export const QUEST_DOCK_BOUNTY_SMOKE_STILL_ART_URL = _modDef15543;
export const QUEST_DOCK_BOUNTY_SMOKE_ART_ASPECT_RATIO = 3.75;
export const useSmokeArtSize = function useSmokeArtSize() {
  const width = left(right[5])().width;
  const rect = left(right[6])();
  left = rect.left;
  right = rect.right;
  const items = [width, left, right];
  return noop.useMemo(() => {
    const questDockExpandedWidth = QuestDockUtils.getQuestDockExpandedWidth(width, left, right);
    const size = { width: questDockExpandedWidth, height: questDockExpandedWidth / 3.75 };
    return size;
  }, items);
};