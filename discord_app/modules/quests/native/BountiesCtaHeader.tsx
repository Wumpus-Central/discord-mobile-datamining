// discord_app/modules/quests/native/BountiesCtaHeader.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import QuestTypes from "../QuestTypes.tsx";
import AdCreativeType from "../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import AnalyticsActions from "../lib/analytics/AnalyticsActions.tsx";
import AnalyticsTypes from "../lib/analytics/AnalyticsTypes.tsx";
import common_Video from "../../../components_native/common/Video.tsx";
import BountiesModalActionCreatorsDefault from "BountiesModal/BountiesModalActionCreators.tsx";
import _modDef15052 from "../../../../discord_assets/assets/quests/bounties/starfield_bg.mp4.js";
import openBountiesNuxPromoSheetDefault from "openBountiesNuxPromoSheet.tsx";
import BountiesBannerBackgroundDefault from "BountiesBannerBackground.tsx";
import _modDef15083 from "../../../../discord_assets/assets/quests/bounties/bounty_banner.mp4.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import AdContentSeenStore from "../AdContentSeenStore.tsx";

require = fn;
function StarfieldBackground() {
  let obj = initialize;
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  obj = {
    source: null,
    style: null,
    resizeMode: "cover",
    muted: true,
    disableFocus: true,
    paused: null,
    importantForAccessibility: "no-hide-descendants",
  };
  obj = { uri: _modDef15052 };
  obj.source = obj;
  obj.style = absoluteFillObject.absoluteFillObject;
  obj.paused = stateFromStores;
  return closure_1_11(common_Video.VideoComponent, obj);
}
function StartEarningOrbsButton(arg0) {
  ({ variant, onPress } = arg0);
  const obj = { grow: true, size: "md", variant, text: null, onPress: null };
  const intl = util.intl;
  obj.text = intl.string(util.t["1kkbKw"]);
  obj.onPress = onPress;
  return closure_1_11(components_Button_Button.Button, obj);
}
function BountiesCtaDescription(arg0) {
  ({ isEmptyOrCompleted, inlineLearnMore } = arg0);
  if (inlineLearnMore === undefined) {
    inlineLearnMore = false;
  }
  const t = util.t;
  if (isEmptyOrCompleted) {
    let AZGGo1 = t.q4wlOE;
    let tmp5 = tmp2;
  } else {
    AZGGo1 = t.AZGGo1;
    tmp5 = tmp2;
  }
  let str = "text-subtle";
  if (inlineLearnMore) {
    str = "text-default";
  }
  let obj = { variant: "text-sm/medium", color: str, children: null };
  const intl = tmp5(1114).intl;
  obj.children = intl.string(AZGGo1);
  const tmp7 = closure_1_11(tmp5(4556).Text, obj);
  const intl2 = tmp5(1114).intl;
  obj = { onClick: openBountiesNuxPromoSheetDefault };
  const formatResult = intl2.format(tmp5(1114).t.fjSvsC, obj);
  if (!isEmptyOrCompleted) {
    if (!inlineLearnMore) {
      obj = { style: tmp.description, children: null };
      const items = [tmp7];
      const obj1 = { variant: "text-sm/medium", children: formatResult };
      items[1] = closure_1_11(tmp5(4556).Text, obj1);
      obj.children = items;
      let tmp11 = closure_1_12(hasOwnProperty, obj);
    }
    return tmp11;
  }
  const obj2 = { variant: "text-sm/medium", children: null };
  const items1 = [tmp7, " ", formatResult];
  obj2.children = items1;
  tmp11 = closure_1_12(tmp5(4556).Text, obj2);
}
function BountiesCtaHeaderInner(bounties) {
  bounties = bounties.bounties;
  let flag = bounties.isEmptyOrCompleted;
  if (flag === undefined) {
    flag = false;
  }
  ({ footer, replaceHeaderMediaWith, shopCarouselButtonVariant, containerRef } = bounties);
  if (shopCarouselButtonVariant === undefined) {
    shopCarouselButtonVariant = "default";
  }
  const tmp = closure_17();
  let tmp10Result = null != footer;
  let tmp12Result3 = !flag;
  let obj = bounties(15081);
  const bountiesEntryPointButtonVariant = obj.getBountiesEntryPointButtonVariant(shopCarouselButtonVariant);
  let obj1 = bounties(504);
  const items = [AdContentSeenStore];
  const items1 = [bounties];
  const stateFromStores = obj1.useStateFromStores(
    items,
    () => bounties.some((id) => !closure_1_7.hasSeen(bounties(closure_1_2[17]).AdCreativeType.BOUNTY, id.id)),
    items1,
  );
  let obj2 = bounties(11520);
  const QuestContent = bounties(5447).QuestContent;
  const tmp8 = obj2.useBountiesExperience(constants2.QUEST_HOME_MOBILE).verticalScrollEnabled
    ? QuestContent.VIDEO_MODAL_MOBILE
    : QuestContent.QUEST_HOME_MOBILE_CAROUSEL;
  importDefault = tmp8;
  const items2 = [bounties, tmp8];
  const callback = noop.useCallback(() => {
    let obj = {
      adContentId,
      adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
      questContent: QuestTypes.QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE,
      questContentCTA: AnalyticsTypes.QuestContentCTA.START_BOUNTY,
      sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE,
      questContentPosition: 0,
    };
    const result = obj.trackAdContentClicked(obj);
    obj = { bountyId: bounties[0].id, sourceQuestContent };
    BountiesModalActionCreatorsDefault.showModal(obj);
  }, items2);
  obj = { ref: containerRef, style: tmp.container, children: null };
  const items3 = [tmp.bannerClip];
  let headerRoundedBottom = tmp13;
  if (!tmp10Result) {
    headerRoundedBottom = tmp.headerRoundedBottom;
  }
  obj = { style: items3, children: null };
  items3[1] = headerRoundedBottom;
  if (null != replaceHeaderMediaWith) {
    const items4 = [tmp.headerReplaceMedia];
    let headerRoundedBottom3 = tmp13;
    if (!tmp10Result) {
      headerRoundedBottom3 = tmp.headerRoundedBottom;
    }
    obj1 = { style: null, children: null };
    items4[1] = headerRoundedBottom3;
    obj1.style = items4;
    const items5 = [tmp12(StarfieldBackground, {}), , ,];
    obj2 = { style: tmp.headerTitleSection, children: null };
    const obj3 = { style: tmp.headerHeadingGroup, children: null };
    let tmp12Result = stateFromStores;
    if (stateFromStores) {
      ({ newPillInline: obj14.containerStyle, newPillText: obj14.textStyle } = tmp);
      tmp12Result = tmp12(tmp4(1178).NewTag, { variant: "text-xs/bold", containerStyle: null, textStyle: null });
      const obj4 = { variant: "text-xs/bold", containerStyle: null, textStyle: null };
    }
    const items6 = [tmp12Result];
    const obj5 = { style: tmp.headerHeadingContent, children: null };
    const obj6 = { variant: "text-lg/semibold", color: "text-strong", children: null };
    const intl2 = tmp4(1114).intl;
    obj6.children = intl2.string(tmp4(1114).t.qetVDw);
    const items7 = [tmp12(tmp4(4556).Text, obj6)];
    const obj7 = { isEmptyOrCompleted: flag, inlineLearnMore: true };
    items7[1] = tmp12(BountiesCtaDescription, obj7);
    obj5.children = items7;
    items6[1] = tmp10(tmp11, obj5);
    obj3.children = items6;
    obj2.children = tmp10(tmp11, obj3);
    items5[1] = tmp12(tmp11, obj2);
    items5[2] = replaceHeaderMediaWith;
    tmp12Result = tmp12Result3;
    if (!flag) {
      tmp12Result = tmp13;
    }
    if (tmp12Result) {
      const obj8 = { style: tmp.headerReplaceMediaCta, children: null };
      const obj9 = { variant: bountiesEntryPointButtonVariant, onPress: callback };
      obj8.children = tmp12(StartEarningOrbsButton, obj9);
      tmp12Result = tmp12(tmp11, obj8);
    }
    items5[3] = tmp12Result;
    obj1.children = items5;
    tmp10Result = tmp10(tmp11, obj1);
  } else {
    const obj10 = { uri: _modDef15083, style: null, children: null };
    const items8 = [tmp.header, ,];
    let headerWithFooter = tmp10Result;
    if (tmp10Result) {
      headerWithFooter = tmp.headerWithFooter;
    }
    items8[1] = headerWithFooter;
    let headerRoundedBottom2 = tmp13;
    if (!tmp10Result) {
      headerRoundedBottom2 = tmp.headerRoundedBottom;
    }
    items8[2] = headerRoundedBottom2;
    obj10.style = items8;
    let tmp12Result1 = stateFromStores;
    if (stateFromStores) {
      ({ newPill: obj6.containerStyle, newPillText: obj6.textStyle } = tmp);
      tmp12Result1 = tmp12(tmp4(1178).NewTag, { variant: "text-xs/bold", containerStyle: null, textStyle: null });
      const obj11 = { variant: "text-xs/bold", containerStyle: null, textStyle: null };
    }
    const items9 = [tmp12Result1];
    const items10 = [tmp.headerTextBox];
    let headerTextBoxWithFooter = tmp10Result;
    if (tmp10Result) {
      headerTextBoxWithFooter = tmp.headerTextBoxWithFooter;
    }
    const obj12 = { style: null, children: null };
    items10[1] = headerTextBoxWithFooter;
    obj12.style = items10;
    const obj13 = { variant: "text-lg/semibold", color: "text-strong", children: null };
    const intl = tmp4(1114).intl;
    obj13.children = intl.string(tmp4(1114).t.qetVDw);
    const items11 = [tmp12(tmp4(4556).Text, obj13), ,];
    const obj14 = { isEmptyOrCompleted: flag };
    items11[1] = tmp12(BountiesCtaDescription, obj14);
    let tmp12Result2 = tmp12Result3;
    if (!flag) {
      tmp12Result2 = tmp13;
    }
    if (tmp12Result2) {
      const obj15 = { variant: bountiesEntryPointButtonVariant, onPress: callback };
      tmp12Result2 = tmp12(StartEarningOrbsButton, obj15);
    }
    items11[2] = tmp12Result2;
    obj12.children = items11;
    items9[1] = tmp10(tmp11, obj12);
    obj10.children = items9;
    tmp10Result = tmp10(BountiesBannerBackgroundDefault, obj10);
  }
  obj.children = tmp10Result;
  const items12 = [closure_11(closure_5, obj)];
  if (tmp10Result) {
    const obj16 = { style: tmp.footerClip, children: null };
    const items13 = [tmp12(StarfieldBackground, {}), footer];
    if (!flag) {
      const obj17 = { style: tmp.footerCta, children: null };
      const obj18 = { variant: bountiesEntryPointButtonVariant, onPress: callback };
      obj17.children = tmp12(StartEarningOrbsButton, obj18);
      tmp12Result3 = tmp12(tmp11, obj17);
    }
    items13[2] = tmp12Result3;
    obj16.children = items13;
    tmp10Result = tmp10(tmp11, obj16);
  }
  items12[1] = tmp10Result;
  obj.children = items12;
  return closure_12(closure_5, obj);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const QuestConstants = fn(5444);
({
  BountyCarouselEmptyStateReason: closure_8,
  DEFAULT_PLACEHOLDER_ENTRYPOINT_BOUNTY_ID: closure_9,
  QuestsExperimentLocations: c10,
} = QuestConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
const PX_20 = nativeDefault.space.PX_20;
const sum = 26 + nativeDefault.space.PX_8 + PX_16;
const minHeight = 472 - (sum + fn(4980).MEDIUM_BUTTON_HEIGHT + PX_20 + 170);
const createStyles = fn(4560);
let closure_17 = createStyles.createStyles(() => {
  let obj = {
    container: null,
    bannerClip: null,
    footerClip: null,
    header: null,
    headerWithFooter: null,
    headerReplaceMedia: null,
    headerTitleSection: null,
    headerHeadingGroup: null,
    headerHeadingContent: null,
    headerReplaceMediaCta: null,
    headerRoundedBottom: null,
    newPill: null,
    newPillInline: null,
    newPillText: null,
    headerTextBox: null,
    headerTextBoxWithFooter: null,
    description: null,
    footerCta: null,
  };
  obj = {
    width: "100%",
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: nativeDefault.colors.BORDER_MUTED,
    borderBottomLeftRadius: nativeDefault.radii.xxl,
    borderBottomRightRadius: nativeDefault.radii.xxl,
    overflow: "hidden",
  };
  obj.container = obj;
  obj.bannerClip = { overflow: "hidden" };
  obj = {
    overflow: "hidden",
    borderBottomLeftRadius: nativeDefault.radii.xxl,
    borderBottomRightRadius: nativeDefault.radii.xxl,
  };
  obj.footerClip = obj;
  obj.header = {
    width: "100%",
    minHeight: 296,
    justifyContent: "flex-end",
    overflow: "hidden",
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  };
  obj.headerWithFooter = { minHeight };
  obj.headerReplaceMedia = { width: "100%", overflow: "hidden" };
  const obj1 = {
    width: "100%",
    minHeight: 296,
    justifyContent: "flex-end",
    overflow: "hidden",
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  };
  const obj2 = { minHeight };
  obj.headerTitleSection = {
    paddingTop: nativeDefault.space.PX_12,
    paddingBottom: nativeDefault.space.PX_16,
    paddingHorizontal: nativeDefault.space.PX_20,
  };
  const obj3 = {
    paddingTop: nativeDefault.space.PX_12,
    paddingBottom: nativeDefault.space.PX_16,
    paddingHorizontal: nativeDefault.space.PX_20,
  };
  obj.headerHeadingGroup = { gap: nativeDefault.space.PX_24 };
  const obj4 = { gap: nativeDefault.space.PX_24 };
  obj.headerHeadingContent = { gap: nativeDefault.space.PX_4 };
  obj.headerReplaceMediaCta = { paddingTop: PX_16, paddingBottom: PX_20, paddingHorizontal: PX_20 };
  const obj5 = { gap: nativeDefault.space.PX_4 };
  const obj6 = { paddingTop: PX_16, paddingBottom: PX_20, paddingHorizontal: PX_20 };
  obj.headerRoundedBottom = {
    borderBottomLeftRadius: nativeDefault.radii.xxl,
    borderBottomRightRadius: nativeDefault.radii.xxl,
  };
  const rect = {
    position: "absolute",
    top: nativeDefault.space.PX_20,
    left: nativeDefault.space.PX_20,
    zIndex: 1,
    backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT,
    borderRadius: nativeDefault.radii.round,
    paddingHorizontal: nativeDefault.space.PX_8,
    paddingVertical: 2,
  };
  obj.newPill = rect;
  const obj7 = { borderBottomLeftRadius: nativeDefault.radii.xxl, borderBottomRightRadius: nativeDefault.radii.xxl };
  obj.newPillInline = {
    alignSelf: "flex-start",
    backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT,
    borderRadius: nativeDefault.radii.round,
    paddingHorizontal: nativeDefault.space.PX_8,
    paddingVertical: 2,
  };
  const obj8 = {
    alignSelf: "flex-start",
    backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT,
    borderRadius: nativeDefault.radii.round,
    paddingHorizontal: nativeDefault.space.PX_8,
    paddingVertical: 2,
  };
  obj.newPillText = { color: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  const obj9 = { color: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  obj.headerTextBox = {
    paddingBottom: nativeDefault.space.PX_24,
    paddingHorizontal: nativeDefault.space.PX_20,
    gap: nativeDefault.space.PX_8,
  };
  const obj10 = {
    paddingBottom: nativeDefault.space.PX_24,
    paddingHorizontal: nativeDefault.space.PX_20,
    gap: nativeDefault.space.PX_8,
  };
  obj.headerTextBoxWithFooter = { paddingBottom: nativeDefault.space.PX_12 };
  obj.description = { marginBottom: 16 };
  const obj11 = { paddingBottom: nativeDefault.space.PX_12 };
  obj.footerCta = {
    paddingTop: nativeDefault.space.PX_16,
    paddingBottom: nativeDefault.space.PX_20,
    paddingHorizontal: nativeDefault.space.PX_20,
  };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesCtaHeader.tsx");

export default noop.memo(function BountiesCtaHeader(isEmptyOrCompleted) {
  _require = isEmptyOrCompleted;
  const tmp2 = containerRef(15078)();
  containerRef = tmp2.containerRef;
  isEmptyOrCompleted = isEmptyOrCompleted.isEmptyOrCompleted;
  let tmp3 = undefined !== isEmptyOrCompleted;
  if (tmp3) {
    tmp3 = isEmptyOrCompleted;
  }
  if (!tmp3) {
    let obj = require("AnalyticsHooks");
    const bountyCarouselEmptyStateAnalytics = obj.useBountyCarouselEmptyStateAnalytics(null);
    obj = { theme: require("shared/ThemeTypes").ThemeTypes.DARKER, children: null };
    if (tmp3) {
      obj = {};
      let merged = Object.assign(isEmptyOrCompleted);
      obj.containerRef = containerRef;
      let tmp9Result = tmp9(BountiesCtaHeaderInner, obj);
    } else {
      const obj1 = {
        adContentId,
        adCreativeType: tmp7(5451).AdCreativeType.BOUNTY,
        questContent: tmp7(5447).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE,
        questContentPosition: 0,
        overrideVisibility: tmp2.isInView,
        sourceQuestContent: tmp7(5447).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE,
        children() {
          const obj = {};
          const merged = Object.assign(closure_0);
          obj.containerRef = containerRef;
          return closure_2_11(BountiesCtaHeaderInner, obj);
        },
      };
      tmp9Result = tmp9(tmp7(11778).QuestContentImpressionTrackerNative, obj1);
    }
    obj.children = tmp9Result;
    return closure_11(require("native").ThemeContextProvider, obj);
  } else if (0 === isEmptyOrCompleted.bounties.length) {
    let COMPLETED = constants.EMPTY;
  } else {
    COMPLETED = constants.COMPLETED;
  }
});
