// === Module 17616: BountiesCtaHeader ===

// Module 17616 (BountiesCtaHeader)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import QuestTypes from "QuestTypes" /* 5341 */;
import AdCreativeType from "AdCreativeType" /* 5345 */;
import Text_Text from "Text/Text" /* 5929 */;
import components_Button_Button from "components/Button/Button" /* 5936 */;
import AnalyticsActions from "AnalyticsActions" /* 8825 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8834 */;
import common_Video from "common/Video" /* 9730 */;
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators" /* 17542 */;
import BountiesModalTypes from "BountiesModalTypes" /* 17544 */;
import _modDef17595 from "module_17595" /* 17595 */;
import openBountiesNuxPromoSheetDefault from "openBountiesNuxPromoSheet" /* 17603 */;
import BountiesBannerBackgroundDefault from "BountiesBannerBackground" /* 17618 */;
import _modDef17619 from "module_17619" /* 17619 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;
import AdContentSeenStore from "AdContentSeenStore" /* 10513 */;

require = fn;
function StarfieldBackground() {
  items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = { source: null, style: null, resizeMode: "cover", muted: true, disableFocus: true, paused: null, importantForAccessibility: "no-hide-descendants" };
  obj2.source = { uri: _modDef17595 };
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
function BountiesCtaDescription(embedded) {
  let flag = embedded.embedded;
  if (flag === undefined) {
    flag = false;
  }
  let description = !flag;
  if (!flag) {
    description = closure_18().description;
  }
  const obj = { style: description, children: null };
  let str = "text-subtle";
  if (flag) {
    str = "text-default";
  }
  const obj2 = { variant: "body-sm/medium", color: str, children: null };
  const intl = util.intl;
  obj2.children = intl.format(util.t["FlR14/"], {
    learnMoreHook(children, arg1) {
      return closure_1_12(require("Text/Text").Text, { variant: "body-sm/medium", color: "text-link", accessible: true, accessibilityRole: "link", onPress: openBountiesNuxPromoSheetDefault, children }, arg1);
    }
  });
  obj.children = application_id(Text_Text.Text, obj2);
  return application_id(metroImportDefault, obj);
}
function BountiesEmptyCard(containerRef) {
  const tmp = closure_18();
  _require = tmp;
  const obj = { ref: containerRef.containerRef, style: tmp.emptyCard, children: null };
  items = [closure_12(StarfieldBackground, {}), , , ];
  const obj2 = { variant: "body-md/semibold", color: "text-strong", children: null };
  const intl = require("util").intl;
  obj2.children = intl.string(require("util").t["4nwvXG"]);
  items[1] = closure_12(require("Text/Text").Heading, obj2);
  const obj3 = { variant: "body-sm/medium", color: "text-default", children: null };
  const intl2 = require("util").intl;
  obj3.children = intl2.format(require("util").t.PfRDXa, {
    learnMoreHook(children, arg1) {
      return application_id(Text_Text.Text, { variant: "body-sm/medium", color: "text-default", style: emptyLearnMore.emptyLearnMore, accessible: true, accessibilityRole: "link", onPress: openBountiesNuxPromoSheetDefault, children }, arg1);
    }
  });
  items[2] = closure_12(require("Text/Text").Text, obj3);
  items[3] = closure_12(closure_7, { pointerEvents: "none", style: tmp.emptyCardBorder });
  obj.children = items;
  return closure_13(closure_7, obj);
}
function BountiesCtaHeaderInner(bounties) {
  bounties = bounties.bounties;
  ({ footer, replaceHeaderMediaWith, shopCarouselButtonVariant } = bounties);
  if (shopCarouselButtonVariant === undefined) {
    shopCarouselButtonVariant = "default";
  }
  const tmp = closure_18();
  let tmp8Result2 = null != footer;
  const bountiesEntryPointButtonVariant = bounties(17617).getBountiesEntryPointButtonVariant(shopCarouselButtonVariant);
  let obj = bounties(17617);
  items = [AdContentSeenStore];
  const items1 = [bounties];
  const stateFromStores = bounties(504).useStateFromStores(items, () => bounties.some((id) => !closure_1_9.hasSeen(bounties(closure_1_2[18]).AdCreativeType.BOUNTY, id.id)), items1);
  const items2 = [bounties];
  const callback = noop.useCallback(() => {
    const obj = AnalyticsActions;
    const result = obj.trackAdContentClicked({ adContentId, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, questContent: QuestTypes.QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE, questContentCTA: AnalyticsTypes.QuestContentCTA.START_BOUNTY, sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE, questContentPosition: 0 });
    const obj2 = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, questContent: QuestTypes.QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE, questContentCTA: AnalyticsTypes.QuestContentCTA.START_BOUNTY, sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE, questContentPosition: 0 };
    const obj3 = BountiesModalActionCreatorsDefault;
    obj3.showModal({ bountyId: bounties[0].id, sourceQuestContent: QuestTypes.QuestContent.VIDEO_MODAL_MOBILE, variant: BountiesModalTypes.BountiesModalVariant.VERTICAL_SCROLL });
  }, items2);
  let obj3 = { ref: bounties.containerRef, style: tmp.container, children: null };
  const items3 = [tmp.bannerClip, ];
  let tmp10Result4 = !tmp8Result2;
  let headerRoundedBottom = tmp10Result4;
  if (!tmp8Result2) {
    headerRoundedBottom = tmp.headerRoundedBottom;
  }
  const obj4 = { style: items3, children: null };
  items3[1] = headerRoundedBottom;
  if (null != replaceHeaderMediaWith) {
    const items4 = [tmp.headerReplaceMedia, ];
    let headerRoundedBottom3 = tmp10Result4;
    if (!tmp8Result2) {
      headerRoundedBottom3 = tmp.headerRoundedBottom;
    }
    const obj6 = { style: null, children: null };
    items4[1] = headerRoundedBottom3;
    obj6.style = items4;
    const items5 = [closure_12(StarfieldBackground, {}), , , ];
    const obj7 = { style: tmp.headerTitleSection, children: null };
    const obj8 = { style: tmp.headerHeadingGroup, children: null };
    let tmp10Result = stateFromStores;
    if (stateFromStores) {
      ({ newPillInline: obj12.containerStyle, newPillText: obj12.textStyle } = tmp);
      tmp10Result = closure_12(tmp3(1187).NewTag, { variant: "body-xs/semibold", containerStyle: null, textStyle: null });
      const obj9 = { variant: "body-xs/semibold", containerStyle: null, textStyle: null };
    }
    const items6 = [tmp10Result, ];
    const obj10 = { style: tmp.headerHeadingContent, children: null };
    const obj11 = { variant: "body-lg/semibold", color: "text-strong", children: null };
    const intl2 = tmp3(1113).intl;
    obj11.children = intl2.string(tmp3(1113).t["4nwvXG"]);
    const items7 = [closure_12(tmp3(5929).Heading, obj11), closure_12(BountiesCtaDescription, { embedded: true })];
    obj10.children = items7;
    items6[1] = closure_13(closure_7, obj10);
    obj8.children = items6;
    obj7.children = closure_13(closure_7, obj8);
    items5[1] = closure_12(closure_7, obj7);
    items5[2] = replaceHeaderMediaWith;
    if (!tmp8Result2) {
      const obj13 = { style: tmp.headerReplaceMediaCta, children: null };
      const obj14 = { variant: bountiesEntryPointButtonVariant, onPress: callback };
      obj13.children = closure_12(StartEarningOrbsButton, obj14);
      tmp10Result4 = closure_12(closure_7, obj13);
    }
    items5[3] = tmp10Result4;
    obj6.children = items5;
    let tmp8Result = closure_13(closure_7, obj6);
  } else {
    const obj15 = { uri: _modDef17619, style: null, children: null };
    const items8 = [tmp.header, , ];
    let headerWithFooter = tmp8Result2;
    if (tmp8Result2) {
      headerWithFooter = tmp.headerWithFooter;
    }
    items8[1] = headerWithFooter;
    let headerRoundedBottom2 = tmp10Result4;
    if (!tmp8Result2) {
      headerRoundedBottom2 = tmp.headerRoundedBottom;
    }
    items8[2] = headerRoundedBottom2;
    obj15.style = items8;
    let tmp10Result5 = stateFromStores;
    if (stateFromStores) {
      ({ newPill: obj5.containerStyle, newPillText: obj5.textStyle } = tmp);
      tmp10Result5 = closure_12(tmp3(1187).NewTag, { variant: "body-xs/semibold", containerStyle: null, textStyle: null });
      const obj16 = { variant: "body-xs/semibold", containerStyle: null, textStyle: null };
    }
    const items9 = [tmp10Result5, ];
    const items10 = [tmp.headerTextBox, ];
    let headerTextBoxWithFooter = tmp8Result2;
    if (tmp8Result2) {
      headerTextBoxWithFooter = tmp.headerTextBoxWithFooter;
    }
    const obj17 = { style: null, children: null };
    items10[1] = headerTextBoxWithFooter;
    obj17.style = items10;
    const obj18 = { variant: "body-lg/semibold", color: "text-strong", children: null };
    const intl = tmp3(1113).intl;
    obj18.children = intl.string(tmp3(1113).t["4nwvXG"]);
    const items11 = [closure_12(tmp3(5929).Heading, obj18), closure_12(BountiesCtaDescription, {}), ];
    let tmp10Result6 = tmp10Result4;
    if (!tmp8Result2) {
      const obj19 = { variant: bountiesEntryPointButtonVariant, onPress: callback };
      tmp10Result6 = closure_12(StartEarningOrbsButton, obj19);
    }
    items11[2] = tmp10Result6;
    obj17.children = items11;
    items9[1] = closure_13(closure_7, obj17);
    obj15.children = items9;
    tmp8Result = closure_13(BountiesBannerBackgroundDefault, obj15);
  }
  obj4.children = tmp8Result;
  const items12 = [closure_12(closure_7, obj4), ];
  if (tmp8Result2) {
    const obj20 = { style: tmp.footerClip, children: null };
    const items13 = [closure_12(StarfieldBackground, {}), footer, ];
    const obj38 = { style: tmp.footerCta, children: null };
    const obj39 = { variant: bountiesEntryPointButtonVariant, onPress: callback };
    obj38.children = closure_12(StartEarningOrbsButton, obj39);
    items13[2] = closure_12(closure_7, obj38);
    obj20.children = items13;
    tmp8Result2 = closure_13(closure_7, obj20);
  }
  items12[1] = tmp8Result2;
  obj3.children = items12;
  return closure_13(closure_7, obj3);
}
let closure_3 = ["bounties", "isEmptyOrCompleted"];
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_6, View: metroImportDefault } = get_ActivityIndicator);
const QuestConstants = fn(5338);
({ BountyCarouselEmptyStateReason: closure_10, DEFAULT_PLACEHOLDER_ENTRYPOINT_BOUNTY_ID: closure_11 } = QuestConstants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
const PX_20 = nativeDefault.space.PX_20;
const sum = 26 + nativeDefault.space.PX_8 + PX_16;
const minHeight = 472 - (sum + fn(5942).MEDIUM_BUTTON_HEIGHT + PX_20 + 170);
const createStyles = fn(5306);
let closure_18 = createStyles.createStyles(() => {
  const obj = { container: { width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderBottomLeftRadius: nativeDefault.radii.xxl, borderBottomRightRadius: nativeDefault.radii.xxl, overflow: "hidden" }, emptyCard: null, emptyCardBorder: null, emptyLearnMore: null, bannerClip: null, footerClip: null, header: null, headerWithFooter: null, headerReplaceMedia: null, headerTitleSection: null, headerHeadingGroup: null, headerHeadingContent: null, headerReplaceMediaCta: null, headerRoundedBottom: null, newPill: null, newPillInline: null, newPillText: null, headerTextBox: null, headerTextBoxWithFooter: null, description: null, footerCta: null };
  const obj2 = { width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderBottomLeftRadius: nativeDefault.radii.xxl, borderBottomRightRadius: nativeDefault.radii.xxl, overflow: "hidden" };
  obj.emptyCard = { marginTop: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
  const obj4 = {};
  const merged = Object.assign(timestampProducer.absoluteFillObject);
  obj4.borderWidth = 1;
  obj4.borderColor = nativeDefault.colors.BORDER_MUTED;
  obj4.borderRadius = nativeDefault.radii.lg;
  obj.emptyCardBorder = obj4;
  obj.emptyLearnMore = { textDecorationLine: "underline" };
  obj.bannerClip = { overflow: "hidden" };
  const obj3 = { marginTop: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
  obj.footerClip = { overflow: "hidden", borderBottomLeftRadius: nativeDefault.radii.xxl, borderBottomRightRadius: nativeDefault.radii.xxl };
  const obj5 = { overflow: "hidden", borderBottomLeftRadius: nativeDefault.radii.xxl, borderBottomRightRadius: nativeDefault.radii.xxl };
  obj.header = { width: "100%", minHeight: 296, justifyContent: "flex-end", overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
  obj.headerWithFooter = { minHeight };
  obj.headerReplaceMedia = { width: "100%", overflow: "hidden" };
  const obj6 = { width: "100%", minHeight: 296, justifyContent: "flex-end", overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
  const obj7 = { minHeight };
  obj.headerTitleSection = { paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_20 };
  const obj8 = { paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_20 };
  obj.headerHeadingGroup = { gap: nativeDefault.space.PX_24 };
  const obj9 = { gap: nativeDefault.space.PX_24 };
  obj.headerHeadingContent = { gap: nativeDefault.space.PX_4 };
  obj.headerReplaceMediaCta = { paddingTop: PX_16, paddingBottom: PX_20, paddingHorizontal: PX_20 };
  const obj10 = { gap: nativeDefault.space.PX_4 };
  const obj11 = { paddingTop: PX_16, paddingBottom: PX_20, paddingHorizontal: PX_20 };
  obj.headerRoundedBottom = { borderBottomLeftRadius: nativeDefault.radii.xxl, borderBottomRightRadius: nativeDefault.radii.xxl };
  const rect = { position: "absolute", top: nativeDefault.space.PX_20, left: nativeDefault.space.PX_20, zIndex: 1, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: 2 };
  obj.newPill = rect;
  const obj12 = { borderBottomLeftRadius: nativeDefault.radii.xxl, borderBottomRightRadius: nativeDefault.radii.xxl };
  obj.newPillInline = { alignSelf: "flex-start", backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: 2 };
  const obj13 = { alignSelf: "flex-start", backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: 2 };
  obj.newPillText = { color: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  const obj14 = { color: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  obj.headerTextBox = { paddingBottom: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_20, gap: nativeDefault.space.PX_8 };
  const obj15 = { paddingBottom: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_20, gap: nativeDefault.space.PX_8 };
  obj.headerTextBoxWithFooter = { paddingBottom: nativeDefault.space.PX_12 };
  obj.description = { marginBottom: 16 };
  const obj16 = { paddingBottom: nativeDefault.space.PX_12 };
  obj.footerCta = { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_20, paddingHorizontal: nativeDefault.space.PX_20 };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesCtaHeader.tsx");

export default noop.memo(function BountiesCtaHeader(bounties) {
  const tmp2 = bounties(17620)();
  const containerRef = tmp2.containerRef;
  bounties = bounties.bounties;
  const isEmptyOrCompleted = bounties.isEmptyOrCompleted;
  let tmp3 = undefined !== isEmptyOrCompleted;
  if (tmp3) {
    tmp3 = isEmptyOrCompleted;
  }
  dependencyMap = _objectWithoutProperties(bounties, closure_3);
  if (!tmp3) {
    const bountyCarouselEmptyStateAnalytics = containerRef(17621).useBountyCarouselEmptyStateAnalytics(null);
    const obj2 = { theme: containerRef(17101).ThemeTypes.DARK, children: null };
    if (tmp3) {
      const obj3 = { containerRef };
      let tmp9Result = closure_12(BountiesEmptyCard, obj3);
    } else {
      const obj4 = {
        adContentId,
        adCreativeType: tmp7(5345).AdCreativeType.BOUNTY,
        questContent: tmp7(5341).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE,
        questContentPosition: 0,
        overrideVisibility: tmp2.isInView,
        sourceQuestContent: tmp7(5341).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE,
        children() {
              const obj = {};
              const merged = Object.assign(closure_2);
              obj.bounties = bounties;
              obj.containerRef = containerRef;
              return application_id(BountiesCtaHeaderInner, obj);
            }
      };
      tmp9Result = closure_12(tmp7(15264).QuestContentImpressionTrackerNative, obj4);
    }
    obj2.children = tmp9Result;
    return closure_12(containerRef(5377).ThemeContextProvider, obj2);
  } else if (0 === bounties.length) {
    let COMPLETED = constants.EMPTY;
  } else {
    COMPLETED = constants.COMPLETED;
  }
});