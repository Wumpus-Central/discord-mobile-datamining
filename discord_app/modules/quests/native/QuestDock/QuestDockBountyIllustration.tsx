// === Module 17794: QuestDockBountyIllustration ===

// Module 17794 (QuestDockBountyIllustration)
import initialize from "initialize" /* 504 */;
import native from "native" /* 5367 */;
import FastImageDefault from "FastImage" /* 6010 */;
import BountiesMobileQuestBarExperiment2 from "BountiesMobileQuestBarExperiment" /* 10141 */;
import QuestDockHooks from "QuestDockHooks" /* 17695 */;
import useIsQuestDockContentVisibleDefault from "useIsQuestDockContentVisible" /* 17795 */;
import _modDef17796 from "module_17796" /* 17796 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;

require = fn;
function useRivePlaybackGateRef() {
  let tmp = useIsQuestDockContentVisibleDefault();
  if (tmp) {
    tmp = !obj.useIsQuestDockExpanded();
  }
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
  items = [tmp, callback];
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
}
function IllustrationFrame(arg0) {
  ({ style, children } = arg0);
  const obj = { style: null, pointerEvents: "none", accessible: false, importantForAccessibility: "no-hide-descendants", children: null };
  items = [closure_8().frame, style];
  obj.style = items;
  obj.children = children;
  return <View style={null} pointerEvents="none" accessible={false} importantForAccessibility="no-hide-descendants">{null}</View>;
}
function QuestDock3DOrbsIllustration() {
  const tmp = closure_8();
  items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp5 = useIsQuestDockContentVisibleDefault();
  let tmp6 = tmp5;
  if (tmp5) {
    tmp6 = !obj2.useIsQuestDockExpanded();
  }
  const obj3 = { source: null, style: null, resizeMode: "contain", enableAnimation: null, paused: null, accessible: false };
  const obj4 = { uri: null };
  obj2 = QuestDockHooks;
  obj4.uri = _modDef17796;
  obj3.source = obj4;
  obj3.style = tmp.fill;
  obj3.enableAnimation = !stateFromStores;
  if (tmp6) {
    tmp6 = !stateFromStores;
  }
  obj3.paused = !tmp6;
  return jsx(FastImageDefault, { source: null, style: null, resizeMode: "contain", enableAnimation: null, paused: null, accessible: false });
}
function QuestDock2DOrbsIllustration() {
  return jsx(native.QuestBar_2DOrbsRive, { ref: useRivePlaybackGateRef(), stateMachine: "State Machine 1", fit: "contain" });
}
function QuestDockOrbHandsIllustration() {
  return jsx(native.OrbsIllustration_HandsRive, { ref: useRivePlaybackGateRef(), stateMachine: "State Machine 1", fit: "contain" });
}
class QuestDockBountyOrbIllustration {
  constructor() {
    obj = { style: closure_8().orbs, children: jsx(QuestDock3DOrbsIllustration, {}) };
    return jsx(IllustrationFrame, obj);
  }
}
const View = fn(17).View;
const QuestsExperimentLocations = fn(6954).QuestsExperimentLocations;
const QuestDockConstants = fn(17698);
({ QUEST_DOCK_COLLAPSED_HEIGHT, QUEST_DOCK_COLLAPSED_HEADER_PADDING_RIGHT } = QuestDockConstants);
const jsx = fn(21).jsx;
const createStyles = fn(5306);
let obj = { frame: { marginRight: -QUEST_DOCK_COLLAPSED_HEADER_PADDING_RIGHT + 5 }, hands: null, orbs: null, fill: { flex: 1 } };
let size = { width: 124, height: QUEST_DOCK_COLLAPSED_HEIGHT, transform: null };
let items = [{ translateY: -2 }];
size.transform = items;
obj.hands = size;
const size1 = { width: 120, height: 70, marginBottom: QUEST_DOCK_COLLAPSED_HEIGHT - 70 };
obj.orbs = size1;
const React5 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyIllustration.tsx");

export default noop.memo(function QuestDockBountyIllustration() {
  const tmp = closure_8();
  const BountiesMobileQuestBarExperiment = BountiesMobileQuestBarExperiment2.BountiesMobileQuestBarExperiment;
  const illustration = BountiesMobileQuestBarExperiment.useConfig({ location: QuestsExperimentLocations.QUESTS_BAR_MOBILE }).illustration;
  if (BountiesMobileQuestBarExperiment2.BountiesMobileQuestBarIllustration.ILLUSTRATION_2 === illustration) {
    const obj2 = { style: tmp.orbs, children: <QuestDock2DOrbsIllustration /> };
    return <IllustrationFrame style={tmp.orbs}><QuestDock2DOrbsIllustration /></IllustrationFrame>;
  } else if (BountiesMobileQuestBarExperiment2.BountiesMobileQuestBarIllustration.ILLUSTRATION_3 === illustration) {
    const obj3 = { style: tmp.hands, children: <QuestDockOrbHandsIllustration /> };
    return <IllustrationFrame style={tmp.hands}><QuestDockOrbHandsIllustration /></IllustrationFrame>;
  } else if (BountiesMobileQuestBarExperiment2.BountiesMobileQuestBarIllustration.ILLUSTRATION_1 === illustration) {
    return <QuestDockBountyOrbIllustration />;
  }
  const obj = { location: QuestsExperimentLocations.QUESTS_BAR_MOBILE };
});
export const QUEST_DOCK_BOUNTY_ILLUSTRATION_RESERVED_WIDTH = 95;
export { QuestDockBountyOrbIllustration };