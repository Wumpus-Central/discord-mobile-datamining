// === Module 15531: QuestDockBountyIllustration ===

// Module 15531 (QuestDockBountyIllustration)
import initialize from "initialize" /* 504 */;
import native from "native" /* 4533 */;
import FastImageDefault from "FastImage" /* 5890 */;
import APNGPlayer from "APNGPlayer" /* 9165 */;
import BountiesMobileQuestBarExperiment2 from "BountiesMobileQuestBarExperiment" /* 11626 */;
import QuestDockHooks from "QuestDockHooks" /* 15419 */;
import QuestDockVisibilityContextDefault from "QuestDockVisibilityContext" /* 15509 */;
import _modDef15532 from "module_15532" /* 15532 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4819 */;

require = fn;
function IllustrationFrame(arg0) {
  ({ style, children } = arg0);
  const obj = { style: null, pointerEvents: "none", accessible: false, importantForAccessibility: "no-hide-descendants", children: null };
  const items = [closure_8().frame, style];
  obj.style = items;
  obj.children = children;
  return <View style={null} pointerEvents="none" accessible={false} importantForAccessibility="no-hide-descendants">{null}</View>;
}
function QuestDock3DOrbsAPNGPlayer(shouldAnimate) {
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
  return jsx(APNGPlayer.APNGPlayer, { ref, url: _modDef15532, style: tmp.fill, autoplay: false });
}
function QuestDock3DOrbsIllustration() {
  const tmp = closure_8();
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let isVisibleToUser = noop.useContext(QuestDockVisibilityContextDefault).isVisibleToUser;
  if (isVisibleToUser) {
    isVisibleToUser = !obj2.useIsQuestDockExpanded();
  }
  if (isVisibleToUser) {
    isVisibleToUser = !stateFromStores;
  }
  obj2 = QuestDockHooks;
  if (tmp2Result.isAndroid()) {
    const obj3 = { shouldAnimate: isVisibleToUser };
    let tmp6Result = <QuestDock3DOrbsAPNGPlayer shouldAnimate={isVisibleToUser} />;
  } else {
    const obj4 = { source: null, style: null, resizeMode: "contain", enableAnimation: null, paused: null, accessible: false };
    const obj5 = { uri: _modDef15532 };
    obj4.source = obj5;
    obj4.style = tmp.fill;
    obj4.enableAnimation = !stateFromStores;
    obj4.paused = !isVisibleToUser;
    tmp6Result = jsx(FastImageDefault, { source: null, style: null, resizeMode: "contain", enableAnimation: null, paused: null, accessible: false });
    const tmp5Result = FastImageDefault;
  }
  return tmp6Result;
}
function QuestDock2DOrbsIllustration() {
  let isVisibleToUser = noop.useContext(QuestDockVisibilityContextDefault).isVisibleToUser;
  if (isVisibleToUser) {
    isVisibleToUser = !obj2.useIsQuestDockExpanded();
  }
  closure_1 = noop.useRef(null);
  closure_2 = noop.useRef(isVisibleToUser);
  const items = [isVisibleToUser];
  const effect = noop.useEffect(() => {
    closure_2.current = isVisibleToUser;
    const current = ref.current;
    if (isVisibleToUser) {
      if (current != null) {
        current.play();
      }
    } else if (current != null) {
      current.pause();
    }
  }, items);
  obj2 = QuestDockHooks;
  return jsx(native.QuestBar_2DOrbsRive, {
    ref: noop.useCallback((current) => {
      closure_1.current = current;
      if (null != current) {
        if (ref2.current) {
          current.play();
        } else {
          current.pause();
        }
      }
    }, []),
    stateMachine: "State Machine 1",
    fit: "contain"
  });
}
function QuestDockOrbHandsIllustration() {
  let isVisibleToUser = noop.useContext(QuestDockVisibilityContextDefault).isVisibleToUser;
  if (isVisibleToUser) {
    isVisibleToUser = !obj2.useIsQuestDockExpanded();
  }
  noop.useRef(null);
  noop.useRef(isVisibleToUser);
  const items = [isVisibleToUser];
  const effect = noop.useEffect(() => {
    closure_2.current = isVisibleToUser;
    const current = ref.current;
    if (isVisibleToUser) {
      if (current != null) {
        current.play();
      }
    } else if (current != null) {
      current.pause();
    }
  }, items);
  const ref = noop.useCallback((current) => {
    closure_1.current = current;
    if (null != current) {
      if (ref2.current) {
        current.play();
      } else {
        current.pause();
      }
    }
  }, []);
  return jsx(native.OrbsIllustration_HandsRive, { ref, stateMachine: "State Machine 1", fit: "contain" });
}
const View = fn(17).View;
const QuestsExperimentLocations = fn(5747).QuestsExperimentLocations;
const QuestDockConstants = fn(15422);
({ QUEST_DOCK_COLLAPSED_HEIGHT, QUEST_DOCK_COLLAPSED_HEADER_PADDING_RIGHT } = QuestDockConstants);
const jsx = fn(21).jsx;
const createStyles = fn(4827);
let obj = { frame: { marginRight: -QUEST_DOCK_COLLAPSED_HEADER_PADDING_RIGHT + 5 }, hands: null, orbs: null, fill: { flex: 1 } };
let size = { width: 124, height: QUEST_DOCK_COLLAPSED_HEIGHT, transform: null };
let items = [{ translateY: -2 }];
size.transform = items;
obj.hands = size;
const size1 = { width: 120, height: 70, marginBottom: QUEST_DOCK_COLLAPSED_HEIGHT - 70 };
obj.orbs = size1;
let closure_8 = createStyles.createStyles(obj);
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
    const obj4 = { style: tmp.orbs, children: <QuestDock3DOrbsIllustration /> };
    return <IllustrationFrame style={tmp.orbs}><QuestDock3DOrbsIllustration /></IllustrationFrame>;
  }
  const obj = { location: QuestsExperimentLocations.QUESTS_BAR_MOBILE };
});
export const QUEST_DOCK_BOUNTY_ILLUSTRATION_RESERVED_WIDTH = 95;