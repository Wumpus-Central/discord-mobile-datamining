// === Module 14648: StarfieldBackground ===

// Module 14648 (StarfieldBackground)
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 4896 */;
import VideoComponent from "VideoComponent" /* 8570 */;
import metadataDefault from "metadata" /* 14622 */;
import openBountiesNuxPromoSheetDefault from "openBountiesNuxPromoSheet" /* 14634 */;
import _modDef14651 from "module_14651" /* 14651 */;
import metadataDefault2 from "metadata" /* 14652 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_6 from "maybeApplyNoTextColorForLightCustomTheme" /* 4440 */;
import closure_7 from "getOrCreateSet" /* 14649 */;
import QuestsExperimentLocations from "QuestsExperimentLocations" /* 5355 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

require = arg1;
function StarfieldBackground() {
  let obj = initialize;
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  obj = { source: null, style: null, resizeMode: "cover", muted: true, disableFocus: true, paused: null, importantForAccessibility: "no-hide-descendants" };
  obj = { uri: metadataDefault };
  obj[0] = obj;
  obj[1] = absoluteFillObject.absoluteFillObject;
  obj[5] = stateFromStores;
  return callback(VideoComponent.VideoComponent, obj);
}
function StartEarningOrbsButton(arg0) {
  ({ variant, onPress } = arg0);
  const obj = { grow: true, size: "md", variant, text: null, onPress: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t["1kkbKw"]);
  obj[4] = onPress;
  return callback(Button.Button, obj);
}
function BountiesCtaDescription(arg0) {
  ({ isEmptyOrCompleted, inlineLearnMore } = arg0);
  if (inlineLearnMore === undefined) {
    inlineLearnMore = false;
  }
  const t = getSystemLocale.t;
  if (isEmptyOrCompleted) {
    let AZGGo1 = t.q4wlOE;
    let tmp5 = tmp2;
  } else {
    AZGGo1 = t.AZGGo1;
    tmp5 = tmp2;
  }
  let obj = { variant: "text-sm/medium", color: "text-subtle", children: null };
  const intl = tmp5(1236).intl;
  obj[2] = intl.string(AZGGo1);
  const tmp7 = callback(tmp5(4444).Text, obj);
  const intl2 = tmp5(1236).intl;
  obj = { onClick: openBountiesNuxPromoSheetDefault };
  const formatResult = intl2.format(tmp5(1236).t.fjSvsC, obj);
  if (!isEmptyOrCompleted) {
    if (!inlineLearnMore) {
      obj = { style: null, children: null };
      obj[0] = tmp.description;
      const items = [tmp7, ];
      obj1 = { variant: "text-sm/medium", children: null };
      obj1[1] = formatResult;
      items[1] = callback(tmp5(4444).Text, obj1);
      obj[1] = items;
      let tmp11 = callback2(closure_5, obj);
    }
    return tmp11;
  }
  const items1 = [tmp7, " ", formatResult];
  tmp11 = callback2(tmp5(4444).Text, { variant: "text-sm/medium", children: items1 });
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
  importDefault = undefined;
  const tmp = callback3();
  let tmp10Result = null != footer;
  let tmp12Result3 = !flag;
  let obj = bounties(14650);
  const bountiesEntryPointButtonVariant = obj.getBountiesEntryPointButtonVariant(shopCarouselButtonVariant);
  obj1 = bounties(589);
  const items = [closure_7];
  const items1 = [bounties];
  const stateFromStores = obj1.useStateFromStores(items, () => bounties.some((id) => !closure_7.hasSeen(callback(table[16]).AdCreativeType.BOUNTY, id.id)), items1);
  let obj2 = bounties(11081);
  const QuestContent = bounties(5358).QuestContent;
  const tmp8 = obj2.useBountiesExperience(constants2.QUEST_HOME_MOBILE).verticalScrollEnabled ? QuestContent.VIDEO_MODAL_MOBILE : QuestContent.QUEST_HOME_MOBILE_CAROUSEL;
  importDefault = tmp8;
  const items2 = [bounties, tmp8];
  const callback = importAllResult.useCallback(() => {
    let obj = bounties(closure_1_2[19]);
    obj = { adContentId: closure_1_9, adCreativeType: bounties(closure_1_2[16]).AdCreativeType.BOUNTY, questContent: bounties(closure_1_2[18]).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE, questContentCTA: bounties(closure_1_2[20]).QuestContentCTA.START_BOUNTY, sourceQuestContent: bounties(closure_1_2[18]).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE, questContentPosition: 0 };
    const result = obj.trackAdContentClicked(obj);
    obj = { bountyId: bounties[0].id, sourceQuestContent: callback };
    callback(closure_1_2[21]).showModal(obj);
  }, items2);
  obj = { ref: containerRef, style: tmp.container, children: null };
  const items3 = [tmp.bannerClip, ];
  let headerRoundedBottom = tmp13;
  if (!tmp10Result) {
    headerRoundedBottom = tmp.headerRoundedBottom;
  }
  obj = { style: items3, children: null };
  items3[1] = headerRoundedBottom;
  if (null != replaceHeaderMediaWith) {
    const items4 = [tmp.headerReplaceMedia, ];
    let headerRoundedBottom3 = tmp13;
    if (!tmp10Result) {
      headerRoundedBottom3 = tmp.headerRoundedBottom;
    }
    obj1 = { style: null, children: null };
    items4[1] = headerRoundedBottom3;
    obj1[0] = items4;
    const items5 = [tmp12(StarfieldBackground, {}), , , ];
    obj2 = { style: null, children: null };
    obj2[0] = tmp.headerTitleSection;
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.headerHeadingGroup;
    let tmp12Result = stateFromStores;
    if (stateFromStores) {
      ({ newPillInline: obj14[1], newPillText: obj14[2] } = tmp);
      tmp12Result = tmp12(tmp4(1297).NewTag, { variant: "text-xs/bold", containerStyle: null, textStyle: null });
      const obj4 = { variant: "text-xs/bold", containerStyle: null, textStyle: null };
    }
    const items6 = [tmp12Result, ];
    const obj5 = { variant: "text-lg/semibold", color: "text-strong", children: null };
    const intl2 = tmp4(1236).intl;
    obj5[2] = intl2.string(tmp4(1236).t.qetVDw);
    items6[1] = tmp12(tmp4(4444).Text, obj5);
    obj3[1] = items6;
    const items7 = [tmp10(tmp11, obj3), ];
    const obj6 = { isEmptyOrCompleted: null, inlineLearnMore: true };
    obj6[0] = flag;
    items7[1] = tmp12(BountiesCtaDescription, obj6);
    obj2[1] = items7;
    items5[1] = tmp10(tmp11, obj2);
    items5[2] = replaceHeaderMediaWith;
    tmp12Result = tmp12Result3;
    if (!flag) {
      tmp12Result = tmp13;
    }
    if (tmp12Result) {
      const obj7 = { style: null, children: null };
      obj7[0] = tmp.headerReplaceMediaCta;
      const obj8 = { variant: null, onPress: null };
      obj8[0] = bountiesEntryPointButtonVariant;
      obj8[1] = callback;
      obj7[1] = tmp12(StartEarningOrbsButton, obj8);
      tmp12Result = tmp12(tmp11, obj7);
    }
    items5[3] = tmp12Result;
    obj1[1] = items5;
    tmp10Result = tmp10(tmp11, obj1);
  } else {
    const obj9 = { uri: null, style: null, children: null };
    obj9[0] = metadataDefault2;
    const items8 = [tmp.header, ];
    let headerRoundedBottom2 = tmp13;
    if (!tmp10Result) {
      headerRoundedBottom2 = tmp.headerRoundedBottom;
    }
    items8[1] = headerRoundedBottom2;
    obj9[1] = items8;
    let tmp12Result1 = stateFromStores;
    if (stateFromStores) {
      ({ newPill: obj6[1], newPillText: obj6[2] } = tmp);
      tmp12Result1 = tmp12(tmp4(1297).NewTag, { variant: "text-xs/bold", containerStyle: null, textStyle: null });
      const obj10 = { variant: "text-xs/bold", containerStyle: null, textStyle: null };
    }
    const items9 = [tmp12Result1, ];
    const items10 = [tmp.headerTextBox, ];
    let headerTextBoxWithFooter = tmp10Result;
    if (tmp10Result) {
      headerTextBoxWithFooter = tmp.headerTextBoxWithFooter;
    }
    const obj11 = { style: null, children: null };
    items10[1] = headerTextBoxWithFooter;
    obj11[0] = items10;
    const obj12 = { variant: "text-lg/semibold", color: "text-strong", children: null };
    const intl = tmp4(1236).intl;
    obj12[2] = intl.string(tmp4(1236).t.qetVDw);
    const items11 = [tmp12(tmp4(4444).Text, obj12), , ];
    const obj13 = { isEmptyOrCompleted: null };
    obj13[0] = flag;
    items11[1] = tmp12(BountiesCtaDescription, obj13);
    let tmp12Result2 = tmp12Result3;
    if (!flag) {
      tmp12Result2 = tmp13;
    }
    if (tmp12Result2) {
      const obj14 = { variant: null, onPress: null };
      obj14[0] = bountiesEntryPointButtonVariant;
      obj14[1] = callback;
      tmp12Result2 = tmp12(StartEarningOrbsButton, obj14);
    }
    items11[2] = tmp12Result2;
    obj11[1] = items11;
    items9[1] = tmp10(tmp11, obj11);
    obj9[2] = items9;
    tmp10Result = tmp10(_modDef14651, obj9);
    const tmp27 = _modDef14651;
  }
  obj[1] = tmp10Result;
  const items12 = [closure_11(closure_5, obj), ];
  if (tmp10Result) {
    const obj15 = { style: null, children: null };
    obj15[0] = tmp.footerClip;
    const items13 = [tmp12(StarfieldBackground, {}), footer, ];
    if (!flag) {
      const obj16 = { style: null, children: null };
      obj16[0] = tmp.footerCta;
      const obj17 = { variant: null, onPress: null };
      obj17[0] = bountiesEntryPointButtonVariant;
      obj17[1] = callback;
      obj16[1] = tmp12(StartEarningOrbsButton, obj17);
      tmp12Result3 = tmp12(tmp11, obj16);
    }
    items13[2] = tmp12Result3;
    obj15[1] = items13;
    tmp10Result = tmp10(tmp11, obj15);
  }
  items12[1] = tmp10Result;
  obj[2] = items12;
  return closure_12(closure_5, obj);
}
let c3 = importAllResult;
({ StyleSheet: c4, View: c5 } = get_ActivityIndicator);
({ BountyCarouselEmptyStateReason: closure_8, DEFAULT_PLACEHOLDER_ENTRYPOINT_BOUNTY_ID: c9, QuestsExperimentLocations: c10 } = QuestsExperimentLocations);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let closure_13 = createCacheKey.createStyles(() => {
  let obj = { container: null, bannerClip: null, footerClip: null, header: null, headerReplaceMedia: null, headerTitleSection: null, headerHeadingGroup: null, headerReplaceMediaCta: null, headerRoundedBottom: null, newPill: null, newPillInline: null, newPillText: null, headerTextBox: null, headerTextBoxWithFooter: null, description: null, footerCta: null };
  obj = { width: "100%", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_MUTED, borderBottomLeftRadius: ThemesDefault.radii.xxl, borderBottomRightRadius: ThemesDefault.radii.xxl, overflow: "hidden" };
  obj[0] = obj;
  obj[1] = { overflow: "hidden" };
  obj = { overflow: "hidden", borderBottomLeftRadius: ThemesDefault.radii.xxl, borderBottomRightRadius: ThemesDefault.radii.xxl };
  obj[2] = obj;
  obj[3] = { width: "100%", minHeight: 296, justifyContent: "flex-end", overflow: "hidden", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
  obj[4] = { width: "100%", overflow: "hidden" };
  obj1 = { width: "100%", minHeight: 296, justifyContent: "flex-end", overflow: "hidden", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
  obj[5] = { paddingTop: ThemesDefault.space.PX_12, paddingBottom: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_20, gap: ThemesDefault.space.PX_8 };
  const obj2 = { paddingTop: ThemesDefault.space.PX_12, paddingBottom: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_20, gap: ThemesDefault.space.PX_8 };
  obj[6] = { gap: ThemesDefault.space.PX_20 };
  const obj3 = { gap: ThemesDefault.space.PX_20 };
  obj[7] = { paddingTop: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_24, paddingHorizontal: ThemesDefault.space.PX_20 };
  const obj4 = { paddingTop: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_24, paddingHorizontal: ThemesDefault.space.PX_20 };
  obj[8] = { borderBottomLeftRadius: ThemesDefault.radii.xxl, borderBottomRightRadius: ThemesDefault.radii.xxl };
  const obj5 = { borderBottomLeftRadius: ThemesDefault.radii.xxl, borderBottomRightRadius: ThemesDefault.radii.xxl };
  obj[9] = { position: "absolute", top: ThemesDefault.space.PX_12, left: ThemesDefault.space.PX_20, zIndex: 1, backgroundColor: ThemesDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, borderRadius: ThemesDefault.radii.round, paddingHorizontal: ThemesDefault.space.PX_8, paddingVertical: ThemesDefault.space.PX_4 };
  const obj6 = { position: "absolute", top: ThemesDefault.space.PX_12, left: ThemesDefault.space.PX_20, zIndex: 1, backgroundColor: ThemesDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, borderRadius: ThemesDefault.radii.round, paddingHorizontal: ThemesDefault.space.PX_8, paddingVertical: ThemesDefault.space.PX_4 };
  obj[10] = { alignSelf: "flex-start", backgroundColor: ThemesDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, borderRadius: ThemesDefault.radii.round, paddingHorizontal: ThemesDefault.space.PX_8, paddingVertical: ThemesDefault.space.PX_4 };
  const obj7 = { alignSelf: "flex-start", backgroundColor: ThemesDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, borderRadius: ThemesDefault.radii.round, paddingHorizontal: ThemesDefault.space.PX_8, paddingVertical: ThemesDefault.space.PX_4 };
  obj[11] = { color: ThemesDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  const obj8 = { color: ThemesDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  obj[12] = { paddingBottom: ThemesDefault.space.PX_24, paddingHorizontal: ThemesDefault.space.PX_20, gap: ThemesDefault.space.PX_8 };
  const obj9 = { paddingBottom: ThemesDefault.space.PX_24, paddingHorizontal: ThemesDefault.space.PX_20, gap: ThemesDefault.space.PX_8 };
  obj[13] = { paddingBottom: ThemesDefault.space.PX_12 };
  obj[14] = { marginBottom: 16 };
  const obj10 = { paddingBottom: ThemesDefault.space.PX_12 };
  obj[15] = { paddingBottom: ThemesDefault.space.PX_24, paddingHorizontal: ThemesDefault.space.PX_20 };
  return obj;
});
const memoResult = importAllResult.memo(function BountiesCtaHeader(isEmptyOrCompleted) {
  const _require = isEmptyOrCompleted;
  const tmp2 = containerRef(14647)();
  containerRef = tmp2.containerRef;
  isEmptyOrCompleted = isEmptyOrCompleted.isEmptyOrCompleted;
  let tmp3 = undefined !== isEmptyOrCompleted;
  if (tmp3) {
    tmp3 = isEmptyOrCompleted;
  }
  if (!tmp3) {
    let obj = _require(11303);
    const bountyCarouselEmptyStateAnalytics = obj.useBountyCarouselEmptyStateAnalytics(null);
    obj = { theme: null, children: null };
    obj[0] = _require(13024).ThemeTypes.DARKER;
    if (tmp3) {
      obj = {};
      let merged = Object.assign(isEmptyOrCompleted);
      obj.containerRef = containerRef;
      let tmp9Result = tmp9(BountiesCtaHeaderInner, obj);
    } else {
      obj1 = { adContentId: null, adCreativeType: null, questContent: null, questContentPosition: 0, overrideVisibility: null, sourceQuestContent: null, children: null };
      obj1[0] = closure_9;
      obj1[1] = tmp7(7414).AdCreativeType.BOUNTY;
      obj1[2] = tmp7(5358).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE;
      obj1[4] = tmp2.isInView;
      obj1[5] = tmp7(5358).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE;
      obj1[6] = function children() {
        const obj = {};
        const merged = Object.assign(closure_0);
        obj.containerRef = containerRef;
        return closure_1_11(closure_1_17, obj);
      };
      tmp9Result = tmp9(tmp7(11307).QuestContentImpressionTrackerNative, obj1);
    }
    obj[1] = tmp9Result;
    return closure_11(_require(4174).ThemeContextProvider, obj);
  } else if (0 === isEmptyOrCompleted.bounties.length) {
    let COMPLETED = constants.EMPTY;
  } else {
    COMPLETED = constants.COMPLETED;
  }
});
let result = require("set").fileFinishedImporting("modules/quests/native/BountiesCtaHeader.tsx");

export default memoResult;