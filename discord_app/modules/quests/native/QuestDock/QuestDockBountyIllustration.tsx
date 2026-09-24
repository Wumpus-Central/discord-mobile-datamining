// discord_app/modules/quests/native/QuestDock/QuestDockBountyIllustration.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import APNGPlayer from "../../../image/native/APNGPlayer.android.tsx";
import BountiesMobileQuestBarExperiment2 from "../../experiments/BountiesMobileQuestBarExperiment.tsx";
import QuestDockHooks from "QuestDockHooks.tsx";
import useIsQuestDockContentVisibleDefault from "useIsQuestDockContentVisible.tsx";
import _modDef15546 from "../../../../../discord_assets/assets/quests/bounties/QuestBar_3DOrbs_2X.png.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

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
}
function IllustrationFrame(arg0) {
  ({ style, children } = arg0);
  const obj = {
    style: null,
    pointerEvents: "none",
    accessible: false,
    importantForAccessibility: "no-hide-descendants",
    children: null,
  };
  const items = [closure_8().frame, style];
  obj.style = items;
  obj.children = children;
  return (
    <View style={null} pointerEvents="none" accessible={false} importantForAccessibility="no-hide-descendants">
      {null}
    </View>
  );
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
  return jsx(APNGPlayer.APNGPlayer, { ref, url: _modDef15546, style: tmp.fill, autoplay: false });
}
function QuestDock3DOrbsIllustration() {
  const tmp = closure_8();
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp6 = useIsQuestDockContentVisibleDefault();
  let tmp7 = tmp6;
  if (tmp6) {
    tmp7 = !obj2.useIsQuestDockExpanded();
  }
  if (tmp7) {
    tmp7 = !stateFromStores;
  }
  obj2 = QuestDockHooks;
  if (tmp2Result.isAndroid()) {
    const obj3 = { shouldAnimate: tmp7 };
    let tmp8Result = <QuestDock3DOrbsAPNGPlayer shouldAnimate={tmp7} />;
  } else {
    const obj4 = {
      source: null,
      style: null,
      resizeMode: "contain",
      enableAnimation: null,
      paused: null,
      accessible: false,
    };
    const obj5 = { uri: _modDef15546 };
    obj4.source = obj5;
    obj4.style = tmp.fill;
    obj4.enableAnimation = !stateFromStores;
    obj4.paused = !tmp7;
    tmp8Result = jsx(FastImageDefault, {
      source: null,
      style: null,
      resizeMode: "contain",
      enableAnimation: null,
      paused: null,
      accessible: false,
    });
    const tmp5Result = FastImageDefault;
  }
  return tmp8Result;
}
function QuestDock2DOrbsIllustration() {
  return jsx(native.QuestBar_2DOrbsRive, {
    ref: useRivePlaybackGateRef(),
    stateMachine: "State Machine 1",
    fit: "contain",
  });
}
function QuestDockOrbHandsIllustration() {
  return jsx(native.OrbsIllustration_HandsRive, {
    ref: useRivePlaybackGateRef(),
    stateMachine: "State Machine 1",
    fit: "contain",
  });
}
const View = fn(17).View;
const QuestsExperimentLocations = fn(5749).QuestsExperimentLocations;
const QuestDockConstants = fn(15431);
({ QUEST_DOCK_COLLAPSED_HEIGHT, QUEST_DOCK_COLLAPSED_HEADER_PADDING_RIGHT } = QuestDockConstants);
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let obj = {
  frame: { marginRight: -QUEST_DOCK_COLLAPSED_HEADER_PADDING_RIGHT + 5 },
  hands: null,
  orbs: null,
  fill: { flex: 1 },
};
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
  const illustration = BountiesMobileQuestBarExperiment.useConfig({
    location: QuestsExperimentLocations.QUESTS_BAR_MOBILE,
  }).illustration;
  if (BountiesMobileQuestBarExperiment2.BountiesMobileQuestBarIllustration.ILLUSTRATION_2 === illustration) {
    const obj2 = { style: tmp.orbs, children: <QuestDock2DOrbsIllustration /> };
    return (
      <IllustrationFrame style={tmp.orbs}>
        <QuestDock2DOrbsIllustration />
      </IllustrationFrame>
    );
  } else if (BountiesMobileQuestBarExperiment2.BountiesMobileQuestBarIllustration.ILLUSTRATION_3 === illustration) {
    const obj3 = { style: tmp.hands, children: <QuestDockOrbHandsIllustration /> };
    return (
      <IllustrationFrame style={tmp.hands}>
        <QuestDockOrbHandsIllustration />
      </IllustrationFrame>
    );
  } else if (BountiesMobileQuestBarExperiment2.BountiesMobileQuestBarIllustration.ILLUSTRATION_1 === illustration) {
    const obj4 = { style: tmp.orbs, children: <QuestDock3DOrbsIllustration /> };
    return (
      <IllustrationFrame style={tmp.orbs}>
        <QuestDock3DOrbsIllustration />
      </IllustrationFrame>
    );
  }
  const obj = { location: QuestsExperimentLocations.QUESTS_BAR_MOBILE };
});
export const QUEST_DOCK_BOUNTY_ILLUSTRATION_RESERVED_WIDTH = 95;
