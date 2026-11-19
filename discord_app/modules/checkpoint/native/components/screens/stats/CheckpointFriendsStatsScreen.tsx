// discord_app/modules/checkpoint/native/components/screens/stats/CheckpointFriendsStatsScreen.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../../a11y/AccessibilityStore.tsx";
import CheckpointStore from "../../../../CheckpointStore.tsx";

const require = fn;
const View = fn(17).View;
const CheckpointTransitionConstants = fn(12423);
({
  CHECKPOINT_FRIENDS_CONTENT_FADE_OUT: closure_8,
  CHECKPOINT_SIDEKICK_CONTENT_FADE_IN: closure_9,
  CHECKPOINT_FRIENDS_CONTENT_FADE_IN: closure_10,
} = CheckpointTransitionConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4792);
let obj2 = {
  container: { width: "100%", flexGrow: 1, justifyContent: "flex-end", paddingBottom: nativeDefault.space.PX_64 },
  animation: null,
  transition: null,
  sidekick: null,
  sidekickDetails: null,
};
const rect = { position: "absolute", left: -nativeDefault.space.PX_24, right: -nativeDefault.space.PX_24 };
obj2.animation = rect;
obj2.transition = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center" };
let obj3 = { width: "100%", flexGrow: 1, justifyContent: "flex-end", paddingBottom: nativeDefault.space.PX_64 };
obj2.sidekick = { gap: nativeDefault.space.PX_32 };
let obj4 = { gap: nativeDefault.space.PX_32 };
obj2.sidekickDetails = { gap: nativeDefault.space.PX_24 };
let closure_13 = createStyles.createStyles(obj2);
let size = fn(2);
let result = size.fileFinishedImporting(
  "modules/checkpoint/native/components/screens/stats/CheckpointFriendsStatsScreen.tsx",
);

export default function CheckpointFriendsStatsScreen(arg0) {
  ({ route, onNextStep, onPreviousStep } = arg0);
  showsSidekickPair = undefined;
  let width;
  let height;
  _slicedToArray = undefined;
  let sidekickMessageInputKeyboardOffset;
  let animatedRef;
  let tmp = closure_13();
  items = [CheckpointStore];
  let stateFromStores = showsSidekickPair(height[9]).useStateFromStores(items, () => {
    const stats = CheckpointStore.stats;
    let users;
    if (stats != null) {
      users = stats.users;
    }
    return users;
  });
  if (stateFromStores == null) {
    stateFromStores = [];
  }
  let obj = showsSidekickPair(height[9]);
  const items1 = [CheckpointStore];
  const stateFromStores1 = showsSidekickPair(height[9]).useStateFromStores(items1, () => {
    const stats = CheckpointStore.stats;
    let sidekick;
    if (stats != null) {
      sidekick = stats.sidekick;
    }
    return sidekick;
  });
  const tmp2Result = showsSidekickPair(height[9]);
  const items2 = [AccessibilityStore];
  const stateFromStores2 = showsSidekickPair(height[9]).useStateFromStores(
    items2,
    () => useReducedMotion.useReducedMotion,
  );
  const tmp2Result12 = showsSidekickPair(height[9]);
  const friendsAnimationState = showsSidekickPair(height[10]).useFriendsAnimationState(route, stateFromStores2);
  ({ isTransitioning, showsSidekickPair } = friendsAnimationState);
  const tmp2Result13 = showsSidekickPair(height[10]);
  const sidekickLeave = showsSidekickPair(height[11]).useSidekickLeave(
    route,
    stateFromStores2,
    onNextStep,
    onPreviousStep,
  );
  const tmp2Result14 = showsSidekickPair(height[11]);
  const size = showsSidekickPair(height[12]).useCheckpointScreenFrame();
  width = size.width;
  height = size.height;
  const items3 = [showsSidekickPair, height, width];
  const memo = sidekickMessageInputKeyboardOffset.useMemo(() => {
    let num = 0;
    const result = -height / 2;
    if (showsSidekickPair) {
      num = nativeDefault.space.PX_48;
    }
    return { top: result - num, height: width + height };
  }, items3);
  const obj7 = sidekickMessageInputKeyboardOffset;
  const tmp2Result15 = showsSidekickPair(height[12]);
  [tmp11, tmp12] = stateFromStores;
  const tmp10 = _slicedToArray(stateFromStores, 2);
  let str = showsSidekickPair(height[13]).useName(tmp11);
  if (str == null) {
    str = "";
  }
  const tmp2Result16 = showsSidekickPair(height[13]);
  let str2 = showsSidekickPair(height[13]).useName(tmp12);
  if (str2 == null) {
    str2 = "";
  }
  const tmp2Result17 = showsSidekickPair(height[13]);
  let user;
  if (stateFromStores1 != null) {
    user = stateFromStores1.user;
  }
  let str3 = showsSidekickPair(height[13]).useName(user);
  if (str3 == null) {
    str3 = "";
  }
  let tmp14 =
    route === tmp2(tmp3[14]).CheckpointRoute.SIDEKICK || route === tmp2(tmp3[14]).CheckpointRoute.SIDEKICK_LEAVE;
  _slicedToArray = tmp14;
  const tmp2Result18 = showsSidekickPair(height[13]);
  sidekickMessageInputKeyboardOffset = showsSidekickPair(height[15]).useSidekickMessageInputKeyboardOffset();
  const tmp2Result19 = showsSidekickPair(height[15]);
  animatedRef = showsSidekickPair(height[16]).useAnimatedRef();
  const items4 = [tmp14, sidekickMessageInputKeyboardOffset, animatedRef];
  const memo1 = obj7.useMemo(() => {
    let tmp;
    if (closure_3) {
      const obj = { containerRef: animatedRef, bottomOffset: sidekickMessageInputKeyboardOffset };
      tmp = obj;
    }
    return tmp;
  }, items4);
  const obj2 = { keyboardInput: memo1, children: null };
  const obj3 = { style: tmp.container, children: null };
  const obj4 = {
    style: null,
    pointerEvents: "none",
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: null,
  };
  const items5 = [tmp.animation, memo];
  obj4.style = items5;
  const tmp2Result20 = showsSidekickPair(height[16]);
  const obj5 = {
    animationState: friendsAnimationState.animationState,
    sidekickUser: null,
    firstUser: null,
    secondUser: null,
    twoFriends: null,
    isReducedMotion: null,
  };
  let user1;
  const tmp20 = width(height[12]);
  if (stateFromStores1 != null) {
    user1 = stateFromStores1.user;
  }
  obj5.sidekickUser = user1;
  obj5.firstUser = tmp11;
  obj5.secondUser = tmp12;
  obj5.twoFriends = stateFromStores.length < 2;
  obj5.isReducedMotion = stateFromStores2;
  obj4.children = closure_11(width(height[17]), obj5);
  const items6 = [closure_11(animatedRef, obj4), , ,];
  let tmp18Result = route === tmp2(tmp3[14]).CheckpointRoute.SQUAD_TRANSITION;
  if (tmp18Result) {
    const obj6 = { style: tmp.transition, children: null };
    const obj8 = { isStepHeading: true, variant: "heading-lg/medium", children: null };
    const intl = tmp2(tmp3[19]).intl;
    obj8.children = intl.string(tmp19(tmp3[20])["6RSp5q"]);
    obj6.children = closure_11(tmp19(tmp3[18]), obj8);
    tmp18Result = closure_11(tmp22, obj6);
    const tmp19Result = tmp19(tmp3[18]);
  }
  items6[1] = tmp18Result;
  const tmp23 = width(height[17]);
  const tmp19Result5 = width(height[21]);
  const obj9 = {
    visible: route === showsSidekickPair(height[14]).CheckpointRoute.SQUAD && !isTransitioning,
    enter: enter2,
    exit,
    mountAfterDelay: true,
    children: null,
  };
  const obj10 = { title: null, titleAccessibilityLabel: null, description: null };
  const tmp28 = route === showsSidekickPair(height[14]).CheckpointRoute.SQUAD && !isTransitioning;
  const intl2 = tmp2(tmp3[19]).intl;
  obj10.title = intl2.string(width(height[23]).OzY5Ns);
  const tmp19Result6 = width(height[22]);
  const items7 = [str3, str, str2];
  obj10.titleAccessibilityLabel = showsSidekickPair(height[22]).getSquadTitleAccessibilityLabel(items7);
  const intl3 = tmp2(tmp3[19]).intl;
  obj10.description = intl3.string(width(height[20]).EqdLDd);
  obj9.children = closure_11(tmp19Result6, obj10);
  items6[2] = closure_11(tmp19Result5, obj9);
  let tmp21Result = null != stateFromStores1;
  if (tmp21Result) {
    if (tmp14) {
      tmp14 = !isTransitioning;
    }
    const obj11 = { visible: tmp14, enter, exit, mountAfterDelay: true, style: tmp.sidekick, children: null };
    const obj12 = { style: tmp.sidekickDetails, children: null };
    const obj13 = { title: null, titleAccessibilityLabel: null, description: null };
    const tmp19Result7 = tmp19(tmp3[21]);
    const intl4 = tmp2(tmp3[19]).intl;
    obj13.title = intl4.string(tmp19(tmp3[23])["+uwOHt"]);
    const tmp19Result8 = tmp19(tmp3[22]);
    obj13.titleAccessibilityLabel = tmp2(tmp3[22]).getSidekickTitleAccessibilityLabel(str3);
    const intl5 = tmp2(tmp3[19]).intl;
    obj13.description = intl5.string(tmp19(tmp3[20])["/ctmGw"]);
    const items8 = [closure_11(tmp19Result8, obj13)];
    const obj14 = { sidekick: stateFromStores1 };
    items8[1] = closure_11(tmp19(tmp3[24]), obj14);
    obj12.children = items8;
    const items9 = [closure_12(tmp22, obj12)];
    const obj15 = { user: stateFromStores1.user, username: str3, containerRef: animatedRef };
    items9[1] = closure_11(tmp19(tmp3[15]), obj15);
    obj11.children = items9;
    tmp21Result = closure_12(tmp19Result7, obj11);
    const tmp2Result22 = tmp2(tmp3[22]);
  }
  items6[3] = tmp21Result;
  obj3.children = items6;
  obj2.children = closure_12(animatedRef, obj3);
  return closure_11(tmp20, obj2);
}
