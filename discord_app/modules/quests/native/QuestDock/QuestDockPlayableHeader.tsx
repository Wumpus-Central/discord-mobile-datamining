// discord_app/modules/quests/native/QuestDock/QuestDockPlayableHeader.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import QuestTypes from "../../QuestTypes.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import QuestDisclosureModalActionCreatorsDefault from "../QuestDisclosureModal/QuestDisclosureModalActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const QuestConstants = fn(6901);
({ QuestDockMode: hasOwnProperty, QuestsExperimentLocations: metroRequire } = QuestConstants);
const QuestDockConstants = fn(17215);
({ QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_7 } = QuestDockConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const PX_32 = nativeDefault.space.PX_32;
const createStyles = fn(5141);
let obj = {
  wrapper: {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "row",
    gap: nativeDefault.space.PX_12,
    justifyContent: "flex-start",
    flex: 1,
    paddingLeft: nativeDefault.space.PX_12 - QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT,
  },
  productIcon: null,
  crossFadeWrapper: null,
  copy: null,
  promotedLabel: null,
  smokeArt: null,
  smokeArtFade: null,
  title: null,
};
let size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.sm,
  flexGrow: 0,
  flexShrink: 0,
  height: PX_32,
  width: PX_32,
};
obj.productIcon = size;
obj.crossFadeWrapper = { alignSelf: "stretch", flex: 1 };
obj.copy = { bottom: 0, justifyContent: "center", left: 0, position: "absolute", right: 0, top: 0 };
obj.promotedLabel = { bottom: 0, justifyContent: "center", left: 0, position: "absolute", top: 0 };
obj.smokeArt = { position: "absolute", left: -QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT, bottom: 0 };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.smokeArtFade = {};
obj.title = { lineHeight: 16 };
let closure_10 = createStyles.createStyles(obj);
let closure_11 = {
  code: "(function QuestDockPlayableHeaderTsx1(){let[withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED]=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};})",
};
let closure_12 = {
  code: "(function QuestDockPlayableHeaderTsx2(){let[withSpring,activeQuestDockMode,QuestDockMode,PROMOTED_LABEL_OPACITY,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED]=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?PROMOTED_LABEL_OPACITY:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};})",
};
let obj3 = {
  alignItems: "center",
  alignSelf: "stretch",
  display: "flex",
  flexDirection: "row",
  gap: nativeDefault.space.PX_12,
  justifyContent: "flex-start",
  flex: 1,
  paddingLeft: nativeDefault.space.PX_12 - QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT,
};
let obj4 = {};
size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockPlayableHeader.tsx");

export default noop.memo(function QuestDockPlayableHeader() {
  const questDockPlayable = width(playableCreative[7]).useQuestDockPlayable();
  const tmp4 = closure_10();
  let str = questDockPlayable.productName;
  if (str == null) {
    str = "";
  }
  const activeQuestDockMode = noop.useContext(tmp(tmp2[8]).QuestDockGestureContext).activeQuestDockMode;
  let obj = width(playableCreative[7]);
  items = [closure_11, width(playableCreative[10]).withSpring, activeQuestDockMode, constants, closure_7];
  width = undefined;
  let height;
  playableCreative = undefined;
  noop = undefined;
  [tmp7, tmp8, tmp9, tmp10, tmp11] = items;
  class QuestDockPlayableHeaderTsx1 {
    constructor() {
      tmp = width;
      num = 1;
      if (height.get() === closure_2.EXPANDED) {
        num = 0;
      }
      obj = { opacity: tmp(num, closure_3) };
      return obj;
    }
  }
  const items1 = [tmp8, tmp9, tmp10, tmp11];
  QuestDockPlayableHeaderTsx1.__closure = items1;
  QuestDockPlayableHeaderTsx1.__workletHash = 6732714024545;
  QuestDockPlayableHeaderTsx1.__initData = tmp7;
  const animatedStyle = width(playableCreative[9]).useAnimatedStyle(QuestDockPlayableHeaderTsx1);
  const tmpResult = width(playableCreative[9]);
  const items2 = [closure_12, width(playableCreative[10]).withSpring, activeQuestDockMode, constants, 0.7, closure_7];
  width = undefined;
  height = undefined;
  playableCreative = undefined;
  noop = undefined;
  c4 = undefined;
  [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items2;
  class QuestDockPlayableHeaderTsx2 {
    constructor() {
      tmp = width;
      num = 0;
      if (height.get() === closure_2.EXPANDED) {
        num = closure_3;
      }
      obj = { opacity: tmp(num, closure_4) };
      return obj;
    }
  }
  const items3 = [tmp14, tmp15, tmp16, tmp17, tmp18];
  QuestDockPlayableHeaderTsx2.__closure = items3;
  QuestDockPlayableHeaderTsx2.__workletHash = 14094538632287;
  QuestDockPlayableHeaderTsx2.__initData = tmp13;
  const animatedStyle1 = width(playableCreative[9]).useAnimatedStyle(QuestDockPlayableHeaderTsx2);
  const tmpResult7 = width(playableCreative[9]);
  const tmp21 = height(playableCreative[11])(activeQuestDockMode);
  const isBountiesAndroidQuestBarSmokeAnimationEnabled = width(
    playableCreative[12],
  ).useIsBountiesAndroidQuestBarSmokeAnimationEnabled(constants.QUESTS_BAR_MOBILE);
  const tmpResult8 = width(playableCreative[12]);
  const tmpResult9 = width(playableCreative[13]);
  const tmp23 = width(playableCreative[13]).isAndroid() && isBountiesAndroidQuestBarSmokeAnimationEnabled;
  let size = width(playableCreative[14]).useSmokeArtSize();
  width = size.width;
  height = size.height;
  const items4 = [width, height];
  const memo = obj2.useMemo(() => {
    const size = { width, height };
    return size;
  }, items4);
  const tmpResult10 = width(playableCreative[14]);
  playableCreative = width(playableCreative[7]).usePlayableCreative(questDockPlayable);
  const tmpResult11 = width(playableCreative[7]);
  const items5 = [playableCreative];
  const tmpResult12 = width(playableCreative[15]);
  const callback = obj2.useCallback(() => {
    const obj2 = { creative: playableCreative, isTargetedDisclosure: true, trackingCtx: null };
    const obj = QuestDisclosureModalActionCreatorsDefault;
    obj2.trackingCtx = {
      content: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
      ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE,
      sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
    };
    obj.showModal(obj2);
  }, items5);
  const obj3 = {
    onSubmenuPress: width(playableCreative[15]).useActionSheetPressHandler(playableCreative),
    hideBlurWhenCollapsed: true,
    promotedLabelLeading: true,
    collapsedContent: null,
    secondaryContentWidth: null,
    children: null,
  };
  const actionSheetPressHandler = width(playableCreative[15]).useActionSheetPressHandler(playableCreative);
  obj3.collapsedContent = closure_8(height(playableCreative[20]), {});
  obj3.secondaryContentWidth = width(playableCreative[20]).QUEST_DOCK_BOUNTY_ILLUSTRATION_RESERVED_WIDTH;
  const obj4 = {
    style: null,
    pointerEvents: "none",
    accessible: false,
    importantForAccessibility: "no-hide-descendants",
    children: null,
  };
  const items6 = [tmp4.smokeArt, memo];
  obj4.style = items6;
  const obj5 = { style: null, needsOffscreenAlphaCompositing: tmp23, children: null };
  const items7 = [tmp4.smokeArtFade, animatedStyle];
  obj5.style = items7;
  const obj6 = { surface: null, paused: null };
  const tmp20Result = height(playableCreative[19]);
  obj6.surface = width(playableCreative[14]).QuestDockBountySmokeSurface.COLLAPSED;
  obj6.paused = tmp21 === constants.EXPANDED;
  obj5.children = closure_8(height(playableCreative[14]), obj6);
  obj4.children = closure_8(height(playableCreative[9]).View, obj5);
  const items8 = [closure_8(c4, obj4)];
  const obj7 = { style: tmp4.wrapper, children: null };
  let tmp31Result = null != questDockPlayable.productIcon;
  if (tmp31Result) {
    const obj8 = {
      style: tmp4.productIcon,
      source: null,
      resizeMode: "cover",
      accessible: false,
      importantForAccessibility: "no",
    };
    const obj9 = { uri: questDockPlayable.productIcon };
    obj8.source = obj9;
    tmp31Result = closure_8(tmp20(tmp2[21]), obj8);
  }
  const items9 = [tmp31Result];
  const obj10 = { style: tmp4.crossFadeWrapper, children: null };
  const obj11 = { style: null, children: null };
  const items10 = [tmp4.copy, animatedStyle];
  obj11.style = items10;
  const obj12 = {
    accessible: true,
    accessibilityRole: "text",
    accessibilityLabel: str,
    accessibilityElementsHidden: tmp21 === constants.EXPANDED,
    importantForAccessibility: null,
    children: null,
  };
  let str2 = "yes";
  if (tmp21 === constants.EXPANDED) {
    str2 = "no-hide-descendants";
  }
  obj12.importantForAccessibility = str2;
  obj12.children = closure_8(width(playableCreative[22]).Text, {
    variant: "text-sm/medium",
    color: "text-strong",
    lineClamp: 2,
    accessible: false,
    style: tmp4.title,
    children: str,
  });
  obj11.children = closure_8(c4, obj12);
  const items11 = [closure_8(height(playableCreative[9]).View, obj11)];
  const obj14 = { style: null, children: null };
  const items12 = [tmp4.promotedLabel, animatedStyle1];
  obj14.style = items12;
  let str3 = "none";
  if (tmp21 === constants.EXPANDED) {
    str3 = "auto";
  }
  const obj15 = {
    pointerEvents: str3,
    accessibilityElementsHidden: tmp21 !== constants.EXPANDED,
    importantForAccessibility: null,
    children: null,
  };
  let str4 = "no-hide-descendants";
  if (tmp21 === constants.EXPANDED) {
    str4 = "yes";
  }
  obj15.importantForAccessibility = str4;
  const obj16 = { onPress: callback, accessibilityRole: "button", children: null };
  const obj17 = { variant: "text-sm/medium", color: "text-default", children: null };
  const intl = tmp(tmp2[24]).intl;
  obj17.children = intl.string(width(playableCreative[24]).t.o6FLcF);
  obj16.children = closure_8(width(playableCreative[22]).Text, obj17);
  obj15.children = closure_8(width(playableCreative[23]).PressableOpacity, obj16);
  obj14.children = closure_8(c4, obj15);
  items11[1] = closure_8(height(playableCreative[9]).View, obj14);
  obj10.children = items11;
  items9[1] = closure_9(c4, obj10);
  obj7.children = items9;
  items8[1] = closure_9(c4, obj7);
  obj3.children = items8;
  return closure_9(tmp20Result, obj3);
});
