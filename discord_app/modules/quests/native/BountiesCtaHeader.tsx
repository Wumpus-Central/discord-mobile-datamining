// discord_app/modules/quests/native/BountiesCtaHeader.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import QuestTypes from "../QuestTypes.tsx";
import AdCreativeType from "../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import AnalyticsActions from "../lib/analytics/AnalyticsActions.tsx";
import AnalyticsTypes from "../lib/analytics/AnalyticsTypes.tsx";
import common_Video from "../../../components_native/common/Video.tsx";
import BountiesModalActionCreatorsDefault from "BountiesModal/BountiesModalActionCreators.tsx";
import BountiesModalTypes from "BountiesModal/BountiesModalTypes.tsx";
import _modDef17233 from "../../../../discord_assets/assets/quests/bounties/starfield_bg.mp4.js";
import openBountiesNuxPromoSheetDefault from "openBountiesNuxPromoSheet.tsx";
import BountiesBannerBackgroundDefault from "BountiesBannerBackground.tsx";
import _modDef17257 from "../../../../discord_assets/assets/quests/bounties/bounty_banner.mp4.js";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import AdContentSeenStore from "../AdContentSeenStore.tsx";

require = fn;
function StarfieldBackground() {
  items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = {
    source: null,
    style: null,
    resizeMode: "cover",
    muted: true,
    disableFocus: true,
    paused: null,
    importantForAccessibility: "no-hide-descendants",
  };
  obj2.source = { uri: _modDef17233 };
  obj2.style = timestampProducer.absoluteFillObject;
  obj2.paused = stateFromStores;
  return application_id(common_Video.VideoComponent, obj2);
}
function StartEarningOrbsButton(arg0) {
  ({ variant, onPress } = arg0);
  const obj = { grow: true, size: "md", variant, text: null, onPress: null };
  const intl = util.intl;
  obj.text = intl.string(util.t["1kkbKw"]);
  obj.onPress = onPress;
  return application_id(components_Button_Button.Button, obj);
}
function BountiesCtaDescription(inlineLearnMore) {
  let flag = inlineLearnMore.inlineLearnMore;
  if (flag === undefined) {
    flag = false;
  }
  let str = "text-subtle";
  if (flag) {
    str = "text-default";
  }
  const obj = { variant: "body-sm/medium", color: str, children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.AZGGo1);
  const tmp5 = application_id(Text_Text.Text, obj);
  const intl2 = util.intl;
  const tmp = closure_18();
  const formatResult = intl2.format(util.t.fjSvsC, { onClick: openBountiesNuxPromoSheetDefault });
  if (flag) {
    const obj3 = { variant: "body-sm/medium", children: null };
    items = [tmp5, " ", formatResult];
    obj3.children = items;
    let tmp7Result = state(Text_Text.Text, obj3);
  } else {
    const obj4 = { style: tmp.description, children: null };
    const items1 = [tmp5];
    const obj5 = { variant: "body-sm/medium", children: formatResult };
    items1[1] = application_id(Text_Text.Text, obj5);
    obj4.children = items1;
    tmp7Result = state(metroImportDefault, obj4);
  }
  return tmp7Result;
}
function BountiesEmptyCard(containerRef) {
  const tmp = closure_18();
  const obj = { ref: containerRef.containerRef, style: tmp.emptyCard, children: null };
  items = [application_id(StarfieldBackground, {}), , ,];
  const obj2 = { variant: "body-md/semibold", color: "text-strong", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.JALI2K);
  items[1] = application_id(Text_Text.Heading, obj2);
  const obj3 = { variant: "body-sm/medium", color: "text-default", children: null };
  const intl2 = util.intl;
  const items1 = [intl2.string(util.t.q4wlOE), " "];
  const obj4 = {
    variant: "body-sm/medium",
    color: "text-default",
    style: tmp.emptyLearnMore,
    accessible: true,
    accessibilityRole: "link",
    onPress: openBountiesNuxPromoSheetDefault,
    children: null,
  };
  const intl3 = util.intl;
  obj4.children = intl3.string(util.t.iiTtpJ);
  items1[2] = application_id(Text_Text.Text, obj4);
  obj3.children = items1;
  items[2] = state(Text_Text.Text, obj3);
  items[3] = application_id(metroImportDefault, { pointerEvents: "none", style: tmp.emptyCardBorder });
  obj.children = items;
  return state(metroImportDefault, obj);
}
function BountiesCtaHeaderInner(bounties) {
  bounties = bounties.bounties;
  ({ footer, replaceHeaderMediaWith, shopCarouselButtonVariant } = bounties);
  if (shopCarouselButtonVariant === undefined) {
    shopCarouselButtonVariant = "default";
  }
  const tmp = closure_18();
  let tmp8Result2 = null != footer;
  const bountiesEntryPointButtonVariant = bounties(17255).getBountiesEntryPointButtonVariant(shopCarouselButtonVariant);
  let obj = bounties(17255);
  items = [AdContentSeenStore];
  const items1 = [bounties];
  let stateFromStores = bounties(504).useStateFromStores(
    items,
    () => bounties.some((id) => !closure_1_9.hasSeen(bounties(closure_1_2[18]).AdCreativeType.BOUNTY, id.id)),
    items1,
  );
  const items2 = [bounties];
  const callback = noop.useCallback(() => {
    const obj = AnalyticsActions;
    const result = obj.trackAdContentClicked({
      adContentId,
      adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
      questContent: QuestTypes.QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE,
      questContentCTA: AnalyticsTypes.QuestContentCTA.START_BOUNTY,
      sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE,
      questContentPosition: 0,
    });
    const obj2 = {
      adContentId,
      adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
      questContent: QuestTypes.QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE,
      questContentCTA: AnalyticsTypes.QuestContentCTA.START_BOUNTY,
      sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE,
      questContentPosition: 0,
    };
    const obj3 = BountiesModalActionCreatorsDefault;
    obj3.showModal({
      bountyId: bounties[0].id,
      sourceQuestContent: QuestTypes.QuestContent.VIDEO_MODAL_MOBILE,
      variant: BountiesModalTypes.BountiesModalVariant.VERTICAL_SCROLL,
    });
  }, items2);
  let obj3 = { ref: bounties.containerRef, style: tmp.container, children: null };
  const items3 = [tmp.bannerClip];
  let tmp10Result = !tmp8Result2;
  let headerRoundedBottom = tmp10Result;
  if (!tmp8Result2) {
    headerRoundedBottom = tmp.headerRoundedBottom;
  }
  const obj4 = { style: items3, children: null };
  items3[1] = headerRoundedBottom;
  if (null != replaceHeaderMediaWith) {
    const items4 = [tmp.headerReplaceMedia];
    let headerRoundedBottom3 = tmp10Result;
    if (!tmp8Result2) {
      headerRoundedBottom3 = tmp.headerRoundedBottom;
    }
    const obj6 = { style: null, children: null };
    items4[1] = headerRoundedBottom3;
    obj6.style = items4;
    const items5 = [closure_12(StarfieldBackground, {}), , ,];
    const obj7 = { style: tmp.headerTitleSection, children: null };
    const obj8 = { style: tmp.headerHeadingGroup, children: null };
    if (stateFromStores) {
      ({ newPillInline: obj11.containerStyle, newPillText: obj11.textStyle } = tmp);
      stateFromStores = closure_12(tmp3(1187).NewTag, {
        variant: "body-xs/semibold",
        containerStyle: null,
        textStyle: null,
      });
      const obj9 = { variant: "body-xs/semibold", containerStyle: null, textStyle: null };
    }
    const items6 = [stateFromStores];
    const obj10 = {
      style: tmp.headerHeadingContent,
      children: closure_12(BountiesCtaDescription, { inlineLearnMore: true }),
    };
    items6[1] = closure_12(closure_7, obj10);
    obj8.children = items6;
    obj7.children = closure_13(closure_7, obj8);
    items5[1] = closure_12(closure_7, obj7);
    items5[2] = replaceHeaderMediaWith;
    if (!tmp8Result2) {
      const obj12 = { style: tmp.headerReplaceMediaCta, children: null };
      const obj13 = { variant: bountiesEntryPointButtonVariant, onPress: callback };
      obj12.children = closure_12(StartEarningOrbsButton, obj13);
      tmp10Result = closure_12(closure_7, obj12);
    }
    items5[3] = tmp10Result;
    obj6.children = items5;
    let tmp8Result = closure_13(closure_7, obj6);
  } else {
    const obj14 = { uri: _modDef17257, style: null, children: null };
    const items7 = [tmp.header, ,];
    let headerWithFooter = tmp8Result2;
    if (tmp8Result2) {
      headerWithFooter = tmp.headerWithFooter;
    }
    items7[1] = headerWithFooter;
    let headerRoundedBottom2 = tmp10Result;
    if (!tmp8Result2) {
      headerRoundedBottom2 = tmp.headerRoundedBottom;
    }
    items7[2] = headerRoundedBottom2;
    obj14.style = items7;
    let tmp10Result3 = stateFromStores;
    if (stateFromStores) {
      ({ newPill: obj5.containerStyle, newPillText: obj5.textStyle } = tmp);
      tmp10Result3 = closure_12(tmp3(1187).NewTag, {
        variant: "body-xs/semibold",
        containerStyle: null,
        textStyle: null,
      });
      const obj15 = { variant: "body-xs/semibold", containerStyle: null, textStyle: null };
    }
    const items8 = [tmp10Result3];
    const items9 = [tmp.headerTextBox];
    let headerTextBoxWithFooter = tmp8Result2;
    if (tmp8Result2) {
      headerTextBoxWithFooter = tmp.headerTextBoxWithFooter;
    }
    const obj16 = { style: null, children: null };
    items9[1] = headerTextBoxWithFooter;
    obj16.style = items9;
    const items10 = [closure_12(BountiesCtaDescription, {})];
    let tmp10Result4 = tmp10Result;
    if (!tmp8Result2) {
      const obj17 = { variant: bountiesEntryPointButtonVariant, onPress: callback };
      tmp10Result4 = closure_12(StartEarningOrbsButton, obj17);
    }
    items10[1] = tmp10Result4;
    obj16.children = items10;
    items8[1] = closure_13(closure_7, obj16);
    obj14.children = items8;
    tmp8Result = closure_13(BountiesBannerBackgroundDefault, obj14);
  }
  obj4.children = tmp8Result;
  const items11 = [closure_12(closure_7, obj4)];
  if (tmp8Result2) {
    const obj18 = { style: tmp.footerClip, children: null };
    const items12 = [closure_12(StarfieldBackground, {}), footer];
    const obj34 = { style: tmp.footerCta, children: null };
    const obj35 = { variant: bountiesEntryPointButtonVariant, onPress: callback };
    obj34.children = closure_12(StartEarningOrbsButton, obj35);
    items12[2] = closure_12(closure_7, obj34);
    obj18.children = items12;
    tmp8Result2 = closure_13(closure_7, obj18);
  }
  items11[1] = tmp8Result2;
  obj3.children = items11;
  return closure_13(closure_7, obj3);
}
let closure_3 = ["bounties", "isEmptyOrCompleted"];
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_6, View: metroImportDefault } = get_ActivityIndicator);
const QuestConstants = fn(6861);
({ BountyCarouselEmptyStateReason: closure_10, DEFAULT_PLACEHOLDER_ENTRYPOINT_BOUNTY_ID: closure_11 } = QuestConstants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
const PX_20 = nativeDefault.space.PX_20;
const sum = 26 + nativeDefault.space.PX_8 + PX_16;
const minHeight = 472 - (sum + fn(5794).MEDIUM_BUTTON_HEIGHT + PX_20 + 170);
const createStyles = fn(5170);
let closure_18 = createStyles.createStyles(() => {
  const obj = {
    container: {
      width: "100%",
      backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderBottomWidth: 1,
      borderColor: nativeDefault.colors.BORDER_MUTED,
      borderBottomLeftRadius: nativeDefault.radii.xxl,
      borderBottomRightRadius: nativeDefault.radii.xxl,
      overflow: "hidden",
    },
    emptyCard: null,
    emptyCardBorder: null,
    emptyLearnMore: null,
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
  const obj2 = {
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
  obj.emptyCard = {
    marginTop: nativeDefault.space.PX_8,
    marginHorizontal: nativeDefault.space.PX_8,
    padding: nativeDefault.space.PX_16,
    gap: nativeDefault.space.PX_8,
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    borderRadius: nativeDefault.radii.lg,
    overflow: "hidden",
  };
  const obj4 = {};
  const merged = Object.assign(timestampProducer.absoluteFillObject);
  obj4.borderWidth = 1;
  obj4.borderColor = nativeDefault.colors.BORDER_MUTED;
  obj4.borderRadius = nativeDefault.radii.lg;
  obj.emptyCardBorder = obj4;
  obj.emptyLearnMore = { textDecorationLine: "underline" };
  obj.bannerClip = { overflow: "hidden" };
  const obj3 = {
    marginTop: nativeDefault.space.PX_8,
    marginHorizontal: nativeDefault.space.PX_8,
    padding: nativeDefault.space.PX_16,
    gap: nativeDefault.space.PX_8,
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    borderRadius: nativeDefault.radii.lg,
    overflow: "hidden",
  };
  obj.footerClip = {
    overflow: "hidden",
    borderBottomLeftRadius: nativeDefault.radii.xxl,
    borderBottomRightRadius: nativeDefault.radii.xxl,
  };
  const obj5 = {
    overflow: "hidden",
    borderBottomLeftRadius: nativeDefault.radii.xxl,
    borderBottomRightRadius: nativeDefault.radii.xxl,
  };
  obj.header = {
    width: "100%",
    minHeight: 296,
    justifyContent: "flex-end",
    overflow: "hidden",
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  };
  obj.headerWithFooter = { minHeight };
  obj.headerReplaceMedia = { width: "100%", overflow: "hidden" };
  const obj6 = {
    width: "100%",
    minHeight: 296,
    justifyContent: "flex-end",
    overflow: "hidden",
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  };
  const obj7 = { minHeight };
  obj.headerTitleSection = {
    paddingTop: nativeDefault.space.PX_12,
    paddingBottom: nativeDefault.space.PX_16,
    paddingHorizontal: nativeDefault.space.PX_20,
  };
  const obj8 = {
    paddingTop: nativeDefault.space.PX_12,
    paddingBottom: nativeDefault.space.PX_16,
    paddingHorizontal: nativeDefault.space.PX_20,
  };
  obj.headerHeadingGroup = { gap: nativeDefault.space.PX_24 };
  const obj9 = { gap: nativeDefault.space.PX_24 };
  obj.headerHeadingContent = { gap: nativeDefault.space.PX_4 };
  obj.headerReplaceMediaCta = { paddingTop: PX_16, paddingBottom: PX_20, paddingHorizontal: PX_20 };
  const obj10 = { gap: nativeDefault.space.PX_4 };
  const obj11 = { paddingTop: PX_16, paddingBottom: PX_20, paddingHorizontal: PX_20 };
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
  const obj12 = { borderBottomLeftRadius: nativeDefault.radii.xxl, borderBottomRightRadius: nativeDefault.radii.xxl };
  obj.newPillInline = {
    alignSelf: "flex-start",
    backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT,
    borderRadius: nativeDefault.radii.round,
    paddingHorizontal: nativeDefault.space.PX_8,
    paddingVertical: 2,
  };
  const obj13 = {
    alignSelf: "flex-start",
    backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT,
    borderRadius: nativeDefault.radii.round,
    paddingHorizontal: nativeDefault.space.PX_8,
    paddingVertical: 2,
  };
  obj.newPillText = { color: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  const obj14 = { color: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  obj.headerTextBox = {
    paddingBottom: nativeDefault.space.PX_24,
    paddingHorizontal: nativeDefault.space.PX_20,
    gap: nativeDefault.space.PX_8,
  };
  const obj15 = {
    paddingBottom: nativeDefault.space.PX_24,
    paddingHorizontal: nativeDefault.space.PX_20,
    gap: nativeDefault.space.PX_8,
  };
  obj.headerTextBoxWithFooter = { paddingBottom: nativeDefault.space.PX_12 };
  obj.description = { marginBottom: 16 };
  const obj16 = { paddingBottom: nativeDefault.space.PX_12 };
  obj.footerCta = {
    paddingTop: nativeDefault.space.PX_16,
    paddingBottom: nativeDefault.space.PX_20,
    paddingHorizontal: nativeDefault.space.PX_20,
  };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesCtaHeader.tsx");

export default noop.memo(function BountiesCtaHeader(bounties) {
  const tmp2 = bounties(17258)();
  const containerRef = tmp2.containerRef;
  bounties = bounties.bounties;
  const isEmptyOrCompleted = bounties.isEmptyOrCompleted;
  let tmp3 = undefined !== isEmptyOrCompleted;
  if (tmp3) {
    tmp3 = isEmptyOrCompleted;
  }
  dependencyMap = _objectWithoutProperties(bounties, closure_3);
  if (!tmp3) {
    const bountyCarouselEmptyStateAnalytics = containerRef(17259).useBountyCarouselEmptyStateAnalytics(null);
    const obj2 = { theme: containerRef(16736).ThemeTypes.DARK, children: null };
    if (tmp3) {
      const obj3 = { containerRef };
      let tmp9Result = closure_12(BountiesEmptyCard, obj3);
    } else {
      const obj4 = {
        adContentId,
        adCreativeType: tmp7(6868).AdCreativeType.BOUNTY,
        questContent: tmp7(6864).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE,
        questContentPosition: 0,
        overrideVisibility: tmp2.isInView,
        sourceQuestContent: tmp7(6864).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE,
        children() {
          const obj = {};
          const merged = Object.assign(closure_2);
          obj.bounties = bounties;
          obj.containerRef = containerRef;
          return application_id(BountiesCtaHeaderInner, obj);
        },
      };
      tmp9Result = closure_12(tmp7(14901).QuestContentImpressionTrackerNative, obj4);
    }
    obj2.children = tmp9Result;
    return closure_12(containerRef(5229).ThemeContextProvider, obj2);
  } else if (0 === bounties.length) {
    let COMPLETED = constants.EMPTY;
  } else {
    COMPLETED = constants.COMPLETED;
  }
});
