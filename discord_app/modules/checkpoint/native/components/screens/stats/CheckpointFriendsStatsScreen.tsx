// === Module 12771: CheckpointFriendsStatsScreen ===

// Module 12771 (CheckpointFriendsStatsScreen)
import nativeDefault from "native" /* 575 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4914 */;
import CheckpointStore from "CheckpointStore" /* 12128 */;

const require = fn;
const View = fn(17).View;
const CheckpointTransitionConstants = fn(12515);
({ CHECKPOINT_FRIENDS_CONTENT_FADE_OUT: closure_8, CHECKPOINT_SIDEKICK_CONTENT_FADE_IN: closure_9, CHECKPOINT_FRIENDS_CONTENT_FADE_IN: closure_10 } = CheckpointTransitionConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const PX_32 = nativeDefault.space.PX_32;
const createStyles = fn(4913);
let obj2 = { container: { width: "100%", flexGrow: 1, justifyContent: "flex-end", paddingBottom: nativeDefault.space.PX_64 }, animation: null, transition: null, sidekick: null, sidekickDetails: null, wideContainer: null, wideScenePane: null, wideCopy: null, wideTransition: null };
const rect = { position: "absolute", left: -nativeDefault.space.PX_24, right: -nativeDefault.space.PX_24 };
obj2.animation = rect;
obj2.transition = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center" };
let obj3 = { width: "100%", flexGrow: 1, justifyContent: "flex-end", paddingBottom: nativeDefault.space.PX_64 };
obj2.sidekick = { gap: nativeDefault.space.PX_32 };
let obj4 = { gap: nativeDefault.space.PX_32 };
obj2.sidekickDetails = { gap: nativeDefault.space.PX_24 };
let obj5 = { gap: nativeDefault.space.PX_24 };
obj2.wideContainer = { flexDirection: "row", alignItems: "center", alignSelf: "center", width: "100%", maxWidth: fn(12727).CHECKPOINT_WIDE_MAX_WIDTH };
obj2.wideScenePane = { width: "50%", alignSelf: "stretch", alignItems: "center", justifyContent: "center", paddingRight: PX_32 };
obj2.wideCopy = { width: "50%", paddingLeft: PX_32, paddingVertical: fn(5969).CHECKPOINT_NAV_HEIGHT };
obj2.wideTransition = { position: "absolute", top: 0, left: PX_32, right: 0, bottom: 0, justifyContent: "center" };
let closure_15 = createStyles.createStyles(obj2);
let size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointFriendsStatsScreen.tsx");

export default function CheckpointFriendsStatsScreen(arg0) {
  ({ route, onNextStep, onPreviousStep } = arg0);
  showsSidekickPair = undefined;
  let width;
  let height;
  _slicedToArray = undefined;
  let sidekickMessageInputKeyboardOffset;
  let animatedRef;
  let current;
  let ref;
  exit = undefined;
  enter = undefined;
  let tmp = closure_15();
  items = [ref];
  let stateFromStores = showsSidekickPair(height[11]).useStateFromStores(items, () => {
    const stats = ref.stats;
    let users;
    if (stats != null) {
      users = stats.users;
    }
    return users;
  });
  if (stateFromStores == null) {
    stateFromStores = [];
  }
  let obj = showsSidekickPair(height[11]);
  const tmp4 = ref;
  const items1 = [tmp4];
  const stateFromStores1 = showsSidekickPair(height[11]).useStateFromStores(items1, () => {
    const stats = ref.stats;
    let sidekick;
    if (stats != null) {
      sidekick = stats.sidekick;
    }
    return sidekick;
  });
  const tmp2Result = showsSidekickPair(height[11]);
  const items2 = [current];
  const stateFromStores2 = showsSidekickPair(height[11]).useStateFromStores(items2, () => current.useReducedMotion);
  const tmp2Result13 = showsSidekickPair(height[11]);
  const friendsAnimationState = showsSidekickPair(height[12]).useFriendsAnimationState(route, stateFromStores2);
  ({ animationState, isTransitioning, showsSidekickPair } = friendsAnimationState);
  const tmp2Result14 = showsSidekickPair(height[12]);
  const sidekickLeave = showsSidekickPair(height[13]).useSidekickLeave(route, stateFromStores2, onNextStep, onPreviousStep);
  const tmp2Result15 = showsSidekickPair(height[13]);
  let size = showsSidekickPair(height[14]).useCheckpointScreenFrame();
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
  const tmp2Result16 = showsSidekickPair(height[14]);
  [tmp12, tmp13] = stateFromStores;
  const tmp11 = _slicedToArray(stateFromStores, 2);
  let str = showsSidekickPair(height[15]).useName(tmp12);
  if (str == null) {
    str = "";
  }
  const tmp2Result17 = showsSidekickPair(height[15]);
  let str2 = showsSidekickPair(height[15]).useName(tmp13);
  if (str2 == null) {
    str2 = "";
  }
  const tmp2Result18 = showsSidekickPair(height[15]);
  let user;
  if (stateFromStores1 != null) {
    user = stateFromStores1.user;
  }
  let str3 = showsSidekickPair(height[15]).useName(user);
  if (str3 == null) {
    str3 = "";
  }
  let tmp15 = route === tmp2(tmp3[16]).CheckpointRoute.SIDEKICK || route === tmp2(tmp3[16]).CheckpointRoute.SIDEKICK_LEAVE;
  _slicedToArray = tmp15;
  const tmp2Result19 = showsSidekickPair(height[15]);
  sidekickMessageInputKeyboardOffset = showsSidekickPair(height[17]).useSidekickMessageInputKeyboardOffset();
  const tmp2Result20 = showsSidekickPair(height[17]);
  animatedRef = showsSidekickPair(height[18]).useAnimatedRef();
  const items4 = [tmp15, sidekickMessageInputKeyboardOffset, animatedRef];
  const memo1 = obj7.useMemo(() => {
    let tmp;
    if (closure_3) {
      const obj = { containerRef: animatedRef, bottomOffset: sidekickMessageInputKeyboardOffset };
      tmp = obj;
    }
    return tmp;
  }, items4);
  const tmp2Result21 = showsSidekickPair(height[18]);
  [tmp20, tmp21] = sidekickMessageInputKeyboardOffset.useState({ messageSent: false, isSending: false });
  const tmp23 = width(height[10])();
  current = tmp23;
  const tmp10Result = _slicedToArray(sidekickMessageInputKeyboardOffset.useState({ messageSent: false, isSending: false }), 2);
  const checkpointScreenContentHeight = showsSidekickPair(height[14]).useCheckpointScreenContentHeight(true);
  ref = obj7.useRef(null);
  const tmp2Result22 = showsSidekickPair(height[14]);
  [tmp27, c8] = sidekickMessageInputKeyboardOffset.useState(null);
  enter = obj7.useRef(tmp23);
  const items5 = [tmp23];
  const layoutEffect = obj7.useLayoutEffect(() => {
    closure_9.current = current;
  }, items5);
  const items6 = [tmp23];
  const callback = obj7.useCallback(() => {
    current = ref.current;
    if (current != null) {
      current.measureInWindow((x, y, width, height) => {
        if (ref.current === current) {
          const obj = { isWide: tmp, frame: null };
          const size = { x, y, width, height };
          obj.frame = size;
          closure_1_8(obj);
        }
      });
    }
  }, items6);
  let isWide;
  if (tmp27 != null) {
    isWide = tmp27.isWide;
  }
  let frame = null;
  if (isWide === tmp23) {
    frame = tmp27.frame;
  }
  let num = 0;
  if (null != frame) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.max(0, Math.min(frame.width - PX_32, checkpointScreenContentHeight));
  }
  let tmp34 = !tmp23;
  if (!tmp23) {
    tmp34 = width < width(tmp3[19])({ ignoreKeyboard: true }).width;
  }
  const obj2 = { isStepHeading: true, variant: "heading-lg/medium", children: null };
  const tmp10Result2 = _slicedToArray(sidekickMessageInputKeyboardOffset.useState(null), 2);
  const intl = tmp2(tmp3[22]).intl;
  obj2.children = intl.string(width(height[23])["6RSp5q"]);
  const tmp37 = closure_11(width(height[21]), obj2);
  const tmp22Result = width(height[21]);
  const tmp22Result9 = width(height[24]);
  const obj3 = { visible: route === showsSidekickPair(height[16]).CheckpointRoute.SQUAD && !isTransitioning, enter: enter2, exit, mountAfterDelay: true, children: null };
  const obj4 = { title: null, titleAccessibilityLabel: null, description: null };
  const tmp41 = route === showsSidekickPair(height[16]).CheckpointRoute.SQUAD && !isTransitioning;
  const tmp42 = exit;
  const intl2 = tmp2(tmp3[22]).intl;
  obj4.title = intl2.string(width(height[26]).OzY5Ns);
  const tmp22Result10 = width(height[25]);
  const items7 = [str3, str, str2];
  obj4.titleAccessibilityLabel = showsSidekickPair(height[25]).getSquadTitleAccessibilityLabel(items7);
  const intl3 = tmp2(tmp3[22]).intl;
  obj4.description = intl3.string(width(height[23]).EqdLDd);
  obj3.children = closure_11(tmp22Result10, obj4);
  const items8 = [closure_11(tmp22Result9, obj3), ];
  let tmp38Result = null != stateFromStores1;
  if (tmp38Result) {
    if (tmp15) {
      tmp15 = !isTransitioning;
    }
    const obj5 = { visible: tmp15, enter, exit: tmp42, mountAfterDelay: true, style: tmp.sidekick, children: null };
    const obj6 = { style: tmp.sidekickDetails, children: null };
    const obj8 = { title: null, titleAccessibilityLabel: null, description: null };
    const tmp22Result11 = tmp22(tmp3[24]);
    const intl4 = tmp2(tmp3[22]).intl;
    obj8.title = intl4.string(tmp22(tmp3[26])["+uwOHt"]);
    const tmp22Result12 = tmp22(tmp3[25]);
    obj8.titleAccessibilityLabel = tmp2(tmp3[25]).getSidekickTitleAccessibilityLabel(str3);
    const intl5 = tmp2(tmp3[22]).intl;
    obj8.description = intl5.string(tmp22(tmp3[23])["/ctmGw"]);
    const items9 = [closure_11(tmp22Result12, obj8), ];
    const obj9 = { sidekick: stateFromStores1 };
    items9[1] = closure_11(tmp22(tmp3[27]), obj9);
    obj6.children = items9;
    const items10 = [closure_12(animatedRef, obj6), ];
    const obj10 = { user: stateFromStores1.user, username: str3, containerRef: animatedRef, state: tmp20, setState: tmp21 };
    items10[1] = closure_11(tmp22(tmp3[17]), obj10);
    obj5.children = items10;
    tmp38Result = closure_12(tmp22Result11, obj5);
    const tmp2Result24 = tmp2(tmp3[25]);
  }
  items8[1] = tmp38Result;
  const tmp38Result2 = closure_12(closure_13, { children: items8 });
  const tmp2Result23 = showsSidekickPair(height[25]);
  if (tmp23) {
    const obj11 = { centered: true, keyboardInput: memo1, children: null };
    const obj12 = { style: null, children: null };
    const items11 = [tmp.wideContainer, ];
    const obj13 = { minHeight: checkpointScreenContentHeight };
    items11[1] = obj13;
    obj12.style = items11;
    const obj14 = { ref, style: tmp.wideScenePane, onLayout: callback, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
    let tmp35Result = null != frame && num > 0;
    if (tmp35Result) {
      const obj15 = { style: null, children: null };
      const size1 = { width: num, height: num };
      obj15.style = size1;
      const obj16 = { centerX: frame.x + (frame.width - PX_32) / 2, centerY: frame.y + frame.height / 2, size: num };
      const obj17 = { animationState, sidekickUser: null, firstUser: null, secondUser: null, twoFriends: null, isReducedMotion: null, artboardFrame: null };
      let user1;
      if (stateFromStores1 != null) {
        user1 = stateFromStores1.user;
      }
      obj17.sidekickUser = user1;
      obj17.firstUser = tmp12;
      obj17.secondUser = tmp13;
      obj17.twoFriends = stateFromStores.length < 2;
      obj17.isReducedMotion = stateFromStores2;
      obj17.artboardFrame = obj16;
      obj15.children = closure_11(tmp22(tmp3[20]), obj17);
      tmp35Result = closure_11(tmp62, obj15);
      const tmp22Result14 = tmp22(tmp3[20]);
    }
    obj14.children = tmp35Result;
    const items12 = [closure_11(animatedRef, obj14), ];
    const obj18 = { style: tmp.wideCopy, children: null };
    const items13 = [tmp38Result2, ];
    let tmp35Result5 = route === tmp2(tmp3[16]).CheckpointRoute.SQUAD_TRANSITION;
    if (tmp35Result5) {
      const obj19 = { style: tmp.wideTransition, children: tmp37 };
      tmp35Result5 = closure_11(tmp62, obj19);
    }
    items13[1] = tmp35Result5;
    obj18.children = items13;
    items12[1] = closure_12(animatedRef, obj18);
    obj12.children = items12;
    obj11.children = closure_12(animatedRef, obj12, "wide");
    let obj20 = obj11;
  } else {
    obj20 = { keyboardInput: memo1, children: null };
    const obj21 = { style: tmp.container, children: null };
    let tmp52;
    if (tmp34) {
      tmp52 = ref;
    }
    const obj22 = { ref: tmp52, style: null, onLayout: null, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
    const items14 = [tmp.animation, memo];
    obj22.style = items14;
    let tmp53;
    if (tmp34) {
      tmp53 = callback;
    }
    obj22.onLayout = tmp53;
    if (tmp34) {
      let tmp35Result6 = null != frame;
      if (tmp35Result6) {
        const obj23 = { centerX: frame.x + frame.width / 2, centerY: frame.y + frame.height / 2, size: null };
        const _Math3 = Math;
        obj23.size = Math.min(frame.width, frame.height);
        const obj24 = { animationState, sidekickUser: null, firstUser: null, secondUser: null, twoFriends: null, isReducedMotion: null, artboardFrame: null };
        let user2;
        if (stateFromStores1 != null) {
          user2 = stateFromStores1.user;
        }
        obj24.sidekickUser = user2;
        obj24.firstUser = tmp12;
        obj24.secondUser = tmp13;
        obj24.twoFriends = stateFromStores.length < 2;
        obj24.isReducedMotion = stateFromStores2;
        obj24.artboardFrame = obj23;
        tmp35Result6 = closure_11(tmp22(tmp3[20]), obj24);
        const tmp22Result15 = tmp22(tmp3[20]);
      }
      let tmp35Result7 = tmp35Result6;
    } else {
      const obj25 = { animationState, sidekickUser: null, firstUser: null, secondUser: null, twoFriends: null, isReducedMotion: null, artboardFrame: "disabled" };
      let user3;
      if (stateFromStores1 != null) {
        user3 = stateFromStores1.user;
      }
      obj25.sidekickUser = user3;
      obj25.firstUser = tmp12;
      obj25.secondUser = tmp13;
      obj25.twoFriends = stateFromStores.length < 2;
      obj25.isReducedMotion = stateFromStores2;
      tmp35Result7 = closure_11(tmp22(tmp3[20]), obj25);
      const tmp22Result16 = tmp22(tmp3[20]);
    }
    obj22.children = tmp35Result7;
    const items15 = [closure_11(animatedRef, obj22), , ];
    let tmp35Result8 = route === tmp2(tmp3[16]).CheckpointRoute.SQUAD_TRANSITION;
    if (tmp35Result8) {
      const obj26 = { style: tmp.transition, children: tmp37 };
      tmp35Result8 = closure_11(tmp51, obj26);
    }
    items15[1] = tmp35Result8;
    items15[2] = tmp38Result2;
    obj21.children = items15;
    obj20.children = closure_12(animatedRef, obj21, "narrow");
  }
  return closure_11(width(height[14]), obj20);
};