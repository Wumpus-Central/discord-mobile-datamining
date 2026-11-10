// discord_app/modules/quests/native/QuestDock/QuestDockBountyHeader.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import QuestTypes from "../../QuestTypes.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import QuestDisclosureModalActionCreatorsDefault from "../QuestDisclosureModal/QuestDisclosureModalActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const QuestDockMode = fn(6839).QuestDockMode;
const QuestDockConstants = fn(17420);
({ QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_6 } = QuestDockConstants);
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const PX_32 = nativeDefault.space.PX_32;
const createStyles = fn(5142);
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
let closure_9 = createStyles.createStyles(obj);
let closure_10 = {
  code: "(function QuestDockBountyHeaderTsx1(){let[withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED]=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};})",
};
let closure_11 = {
  code: "(function QuestDockBountyHeaderTsx2(){let[withSpring,activeQuestDockMode,QuestDockMode,PROMOTED_LABEL_OPACITY,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED]=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?PROMOTED_LABEL_OPACITY:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};})",
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
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyHeader.tsx");

export default noop.memo(function QuestDockBountyHeader() {
  const questDockBounty = width(bountyCreative[7]).useQuestDockBounty();
  const tmp4 = closure_9();
  let str = questDockBounty.productName;
  if (str == null) {
    str = "";
  }
  const activeQuestDockMode = noop.useContext(tmp(tmp2[8]).QuestDockGestureContext).activeQuestDockMode;
  let obj = width(bountyCreative[7]);
  items = [closure_10, width(bountyCreative[10]).withSpring, activeQuestDockMode, QuestDockMode, closure_6];
  width = undefined;
  let height;
  bountyCreative = undefined;
  noop = undefined;
  [tmp7, tmp8, tmp9, tmp10, tmp11] = items;
  class QuestDockBountyHeaderTsx1 {
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
  QuestDockBountyHeaderTsx1.__closure = items1;
  QuestDockBountyHeaderTsx1.__workletHash = 10424459914452;
  QuestDockBountyHeaderTsx1.__initData = tmp7;
  const animatedStyle = width(bountyCreative[9]).useAnimatedStyle(QuestDockBountyHeaderTsx1);
  const tmpResult = width(bountyCreative[9]);
  const items2 = [closure_11, width(bountyCreative[10]).withSpring, activeQuestDockMode, QuestDockMode, 0.7, closure_6];
  width = undefined;
  height = undefined;
  bountyCreative = undefined;
  noop = undefined;
  c4 = undefined;
  [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items2;
  class QuestDockBountyHeaderTsx2 {
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
  QuestDockBountyHeaderTsx2.__closure = items3;
  QuestDockBountyHeaderTsx2.__workletHash = 15710355794986;
  QuestDockBountyHeaderTsx2.__initData = tmp13;
  const animatedStyle1 = width(bountyCreative[9]).useAnimatedStyle(QuestDockBountyHeaderTsx2);
  const tmp21 = height(bountyCreative[11])(activeQuestDockMode) === QuestDockMode.EXPANDED;
  const tmpResult6 = width(bountyCreative[9]);
  let size = width(bountyCreative[12]).useSmokeArtSize();
  width = size.width;
  height = size.height;
  const items4 = [width, height];
  const memo = obj2.useMemo(() => {
    const size = { width, height };
    return size;
  }, items4);
  const tmpResult7 = width(bountyCreative[12]);
  bountyCreative = width(bountyCreative[7]).useBountyCreative(questDockBounty);
  const tmpResult8 = width(bountyCreative[7]);
  const items5 = [bountyCreative];
  const tmpResult9 = width(bountyCreative[13]);
  const callback = obj2.useCallback(() => {
    const obj2 = { creative: bountyCreative, isTargetedDisclosure: true, trackingCtx: null };
    const obj = QuestDisclosureModalActionCreatorsDefault;
    obj2.trackingCtx = {
      content: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
      ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE,
      sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
    };
    obj.showModal(obj2);
  }, items5);
  const obj3 = {
    onSubmenuPress: width(bountyCreative[13]).useActionSheetPressHandler(bountyCreative),
    hideBlurWhenCollapsed: true,
    promotedLabelLeading: true,
    collapsedContent: null,
    secondaryContentWidth: null,
    children: null,
  };
  const actionSheetPressHandler = width(bountyCreative[13]).useActionSheetPressHandler(bountyCreative);
  obj3.collapsedContent = closure_7(height(bountyCreative[18]), {});
  obj3.secondaryContentWidth = width(bountyCreative[18]).QUEST_DOCK_BOUNTY_ILLUSTRATION_RESERVED_WIDTH;
  const obj4 = {
    style: null,
    pointerEvents: "none",
    accessible: false,
    importantForAccessibility: "no-hide-descendants",
    children: null,
  };
  const items6 = [tmp4.smokeArt, memo];
  obj4.style = items6;
  const obj5 = { style: null, needsOffscreenAlphaCompositing: null, children: null };
  const items7 = [tmp4.smokeArtFade, animatedStyle];
  obj5.style = items7;
  const tmp27 = height(bountyCreative[17]);
  obj5.needsOffscreenAlphaCompositing = width(bountyCreative[19]).isAndroid();
  const obj6 = { surface: null, paused: null };
  const tmpResult10 = width(bountyCreative[19]);
  obj6.surface = width(bountyCreative[12]).QuestDockBountySmokeSurface.COLLAPSED;
  obj6.paused = tmp21;
  obj5.children = closure_7(height(bountyCreative[12]), obj6);
  obj4.children = closure_7(height(bountyCreative[9]).View, obj5);
  const items8 = [closure_7(c4, obj4)];
  const obj7 = { style: tmp4.wrapper, children: null };
  let tmp28Result = null != questDockBounty.productIcon;
  if (tmp28Result) {
    const obj8 = {
      style: tmp4.productIcon,
      source: null,
      resizeMode: "cover",
      accessible: false,
      importantForAccessibility: "no",
    };
    const obj9 = { uri: questDockBounty.productIcon };
    obj8.source = obj9;
    tmp28Result = closure_7(tmp20(tmp2[20]), obj8);
  }
  const items9 = [tmp28Result];
  const obj10 = { style: tmp4.crossFadeWrapper, children: null };
  const obj11 = { style: null, children: null };
  const items10 = [tmp4.copy, animatedStyle];
  obj11.style = items10;
  const obj12 = {
    accessible: true,
    accessibilityRole: "text",
    accessibilityLabel: str,
    accessibilityElementsHidden: tmp21,
    importantForAccessibility: null,
    children: null,
  };
  let str2 = "yes";
  if (tmp21) {
    str2 = "no-hide-descendants";
  }
  obj12.importantForAccessibility = str2;
  obj12.children = closure_7(width(bountyCreative[21]).Text, {
    variant: "body-sm/medium",
    color: "text-strong",
    lineClamp: 2,
    accessible: false,
    style: tmp4.title,
    children: str,
  });
  obj11.children = closure_7(c4, obj12);
  const items11 = [closure_7(height(bountyCreative[9]).View, obj11)];
  const obj14 = { style: null, children: null };
  const items12 = [tmp4.promotedLabel, animatedStyle1];
  obj14.style = items12;
  let str3 = "none";
  if (tmp21) {
    str3 = "auto";
  }
  const obj15 = {
    pointerEvents: str3,
    accessibilityElementsHidden: !tmp21,
    importantForAccessibility: null,
    children: null,
  };
  let str4 = "no-hide-descendants";
  if (tmp21) {
    str4 = "yes";
  }
  obj15.importantForAccessibility = str4;
  const obj16 = { onPress: callback, accessibilityRole: "button", children: null };
  const obj17 = { variant: "body-sm/medium", color: "text-default", children: null };
  const intl = tmp(tmp2[23]).intl;
  obj17.children = intl.string(width(bountyCreative[23]).t.o6FLcF);
  obj16.children = closure_7(width(bountyCreative[21]).Text, obj17);
  obj15.children = closure_7(width(bountyCreative[22]).PressableOpacity, obj16);
  obj14.children = closure_7(c4, obj15);
  items11[1] = closure_7(height(bountyCreative[9]).View, obj14);
  obj10.children = items11;
  items9[1] = closure_8(c4, obj10);
  obj7.children = items9;
  items8[1] = closure_8(c4, obj7);
  obj3.children = items8;
  return closure_8(tmp27, obj3);
});
