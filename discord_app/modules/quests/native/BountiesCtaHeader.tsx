// === Module 15079: StarfieldBackground ===

// Module 15079 (StarfieldBackground)
import initialize from "initialize" /* 504 */;
import ThemesDefault from "Themes" /* 576 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import Button from "Button" /* 4975 */;
import VideoComponent from "VideoComponent" /* 8307 */;
import metadataDefault from "metadata" /* 15052 */;
import openBountiesNuxPromoSheetDefault from "openBountiesNuxPromoSheet" /* 15065 */;
import _modDef15082 from "module_15082" /* 15082 */;
import metadataDefault2 from "metadata" /* 15083 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_6 from "maybeApplyNoTextColorForLightCustomTheme" /* 4552 */;
import closure_7 from "getOrCreateSet" /* 15080 */;
import QuestsExperimentLocations from "QuestsExperimentLocations" /* 5444 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

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
  let str = "text-subtle";
  if (inlineLearnMore) {
    str = "text-default";
  }
  let obj = { variant: "text-sm/medium", color: str, children: null };
  const intl = tmp5(1114).intl;
  obj[2] = intl.string(AZGGo1);
  const tmp7 = callback(tmp5(4556).Text, obj);
  const intl2 = tmp5(1114).intl;
  obj = { onClick: openBountiesNuxPromoSheetDefault };
  const formatResult = intl2.format(tmp5(1114).t.fjSvsC, obj);
  if (!isEmptyOrCompleted) {
    if (!inlineLearnMore) {
      obj = { style: null, children: null };
      obj[0] = tmp.description;
      const items = [tmp7, ];
      obj1 = { variant: "text-sm/medium", children: null };
      obj1[1] = formatResult;
      items[1] = callback(tmp5(4556).Text, obj1);
      obj[1] = items;
      let tmp11 = callback2(closure_5, obj);
    }
    return tmp11;
  }
  const items1 = [tmp7, " ", formatResult];
  tmp11 = callback2(tmp5(4556).Text, { variant: "text-sm/medium", children: items1 });
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
  let obj = bounties(15081);
  const bountiesEntryPointButtonVariant = obj.getBountiesEntryPointButtonVariant(shopCarouselButtonVariant);
  obj1 = bounties(504);
  const items = [closure_7];
  const items1 = [bounties];
  const stateFromStores = obj1.useStateFromStores(items, () => bounties.some((id) => !closure_7.hasSeen(callback(table[17]).AdCreativeType.BOUNTY, id.id)), items1);
  let obj2 = bounties(11520);
  const QuestContent = bounties(5447).QuestContent;
  const tmp8 = obj2.useBountiesExperience(constants2.QUEST_HOME_MOBILE).verticalScrollEnabled ? QuestContent.VIDEO_MODAL_MOBILE : QuestContent.QUEST_HOME_MOBILE_CAROUSEL;
  importDefault = tmp8;
  const items2 = [bounties, tmp8];
  const callback = importAllResult.useCallback(() => {
    let obj = bounties(closure_1_2[20]);
    obj = { adContentId: closure_1_9, adCreativeType: bounties(closure_1_2[17]).AdCreativeType.BOUNTY, questContent: bounties(closure_1_2[19]).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE, questContentCTA: bounties(closure_1_2[21]).QuestContentCTA.START_BOUNTY, sourceQuestContent: bounties(closure_1_2[19]).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE, questContentPosition: 0 };
    const result = obj.trackAdContentClicked(obj);
    obj = { bountyId: bounties[0].id, sourceQuestContent: callback };
    callback(closure_1_2[22]).showModal(obj);
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
      tmp12Result = tmp12(tmp4(1178).NewTag, { variant: "text-xs/bold", containerStyle: null, textStyle: null });
      const obj4 = { variant: "text-xs/bold", containerStyle: null, textStyle: null };
    }
    const items6 = [tmp12Result, ];
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.headerHeadingContent;
    const obj6 = { variant: "text-lg/semibold", color: "text-strong", children: null };
    const intl2 = tmp4(1114).intl;
    obj6[2] = intl2.string(tmp4(1114).t.qetVDw);
    const items7 = [tmp12(tmp4(4556).Text, obj6), ];
    const obj7 = { isEmptyOrCompleted: null, inlineLearnMore: true };
    obj7[0] = flag;
    items7[1] = tmp12(BountiesCtaDescription, obj7);
    obj5[1] = items7;
    items6[1] = tmp10(tmp11, obj5);
    obj3[1] = items6;
    obj2[1] = tmp10(tmp11, obj3);
    items5[1] = tmp12(tmp11, obj2);
    items5[2] = replaceHeaderMediaWith;
    tmp12Result = tmp12Result3;
    if (!flag) {
      tmp12Result = tmp13;
    }
    if (tmp12Result) {
      const obj8 = { style: null, children: null };
      obj8[0] = tmp.headerReplaceMediaCta;
      const obj9 = { variant: null, onPress: null };
      obj9[0] = bountiesEntryPointButtonVariant;
      obj9[1] = callback;
      obj8[1] = tmp12(StartEarningOrbsButton, obj9);
      tmp12Result = tmp12(tmp11, obj8);
    }
    items5[3] = tmp12Result;
    obj1[1] = items5;
    tmp10Result = tmp10(tmp11, obj1);
  } else {
    const obj10 = { uri: null, style: null, children: null };
    obj10[0] = metadataDefault2;
    const items8 = [tmp.header, , ];
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
    obj10[1] = items8;
    let tmp12Result1 = stateFromStores;
    if (stateFromStores) {
      ({ newPill: obj6[1], newPillText: obj6[2] } = tmp);
      tmp12Result1 = tmp12(tmp4(1178).NewTag, { variant: "text-xs/bold", containerStyle: null, textStyle: null });
      const obj11 = { variant: "text-xs/bold", containerStyle: null, textStyle: null };
    }
    const items9 = [tmp12Result1, ];
    const items10 = [tmp.headerTextBox, ];
    let headerTextBoxWithFooter = tmp10Result;
    if (tmp10Result) {
      headerTextBoxWithFooter = tmp.headerTextBoxWithFooter;
    }
    const obj12 = { style: null, children: null };
    items10[1] = headerTextBoxWithFooter;
    obj12[0] = items10;
    const obj13 = { variant: "text-lg/semibold", color: "text-strong", children: null };
    const intl = tmp4(1114).intl;
    obj13[2] = intl.string(tmp4(1114).t.qetVDw);
    const items11 = [tmp12(tmp4(4556).Text, obj13), , ];
    const obj14 = { isEmptyOrCompleted: null };
    obj14[0] = flag;
    items11[1] = tmp12(BountiesCtaDescription, obj14);
    let tmp12Result2 = tmp12Result3;
    if (!flag) {
      tmp12Result2 = tmp13;
    }
    if (tmp12Result2) {
      const obj15 = { variant: null, onPress: null };
      obj15[0] = bountiesEntryPointButtonVariant;
      obj15[1] = callback;
      tmp12Result2 = tmp12(StartEarningOrbsButton, obj15);
    }
    items11[2] = tmp12Result2;
    obj12[1] = items11;
    items9[1] = tmp10(tmp11, obj12);
    obj10[2] = items9;
    tmp10Result = tmp10(_modDef15082, obj10);
    const tmp27 = _modDef15082;
  }
  obj[1] = tmp10Result;
  const items12 = [closure_11(closure_5, obj), ];
  if (tmp10Result) {
    const obj16 = { style: null, children: null };
    obj16[0] = tmp.footerClip;
    const items13 = [tmp12(StarfieldBackground, {}), footer, ];
    if (!flag) {
      const obj17 = { style: null, children: null };
      obj17[0] = tmp.footerCta;
      const obj18 = { variant: null, onPress: null };
      obj18[0] = bountiesEntryPointButtonVariant;
      obj18[1] = callback;
      obj17[1] = tmp12(StartEarningOrbsButton, obj18);
      tmp12Result3 = tmp12(tmp11, obj17);
    }
    items13[2] = tmp12Result3;
    obj16[1] = items13;
    tmp10Result = tmp10(tmp11, obj16);
  }
  items12[1] = tmp10Result;
  obj[2] = items12;
  return closure_12(closure_5, obj);
}
let c3 = importAllResult;
({ StyleSheet: c4, View: c5 } = get_ActivityIndicator);
({ BountyCarouselEmptyStateReason: closure_8, DEFAULT_PLACEHOLDER_ENTRYPOINT_BOUNTY_ID: c9, QuestsExperimentLocations: c10 } = QuestsExperimentLocations);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
const PX_16 = ThemesDefault.space.PX_16;
let PX_20 = ThemesDefault.space.PX_20;
PX_20 = ThemesDefault.space.PX_20;
const sum = 26 + ThemesDefault.space.PX_8 + PX_16;
let closure_16 = 472 - (sum + require("MINIMUM_HIT_AREA").MEDIUM_BUTTON_HEIGHT + PX_20 + 170);
let closure_17 = createCacheKey.createStyles(() => {
  let obj = { container: null, bannerClip: null, footerClip: null, header: null, headerWithFooter: null, headerReplaceMedia: null, headerTitleSection: null, headerHeadingGroup: null, headerHeadingContent: null, headerReplaceMediaCta: null, headerRoundedBottom: null, newPill: null, newPillInline: null, newPillText: null, headerTextBox: null, headerTextBoxWithFooter: null, description: null, footerCta: null };
  obj = { width: "100%", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, borderColor: ThemesDefault.colors.BORDER_MUTED, borderBottomLeftRadius: ThemesDefault.radii.xxl, borderBottomRightRadius: ThemesDefault.radii.xxl, overflow: "hidden" };
  obj[0] = obj;
  obj[1] = { overflow: "hidden" };
  obj = { overflow: "hidden", borderBottomLeftRadius: ThemesDefault.radii.xxl, borderBottomRightRadius: ThemesDefault.radii.xxl };
  obj[2] = obj;
  obj[3] = { width: "100%", minHeight: 296, justifyContent: "flex-end", overflow: "hidden", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
  obj[4] = { minHeight: closure_16 };
  obj[5] = { width: "100%", overflow: "hidden" };
  obj1 = { width: "100%", minHeight: 296, justifyContent: "flex-end", overflow: "hidden", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
  const obj2 = { minHeight: closure_16 };
  obj[6] = { paddingTop: ThemesDefault.space.PX_12, paddingBottom: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_20 };
  const obj3 = { paddingTop: ThemesDefault.space.PX_12, paddingBottom: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_20 };
  obj[7] = { gap: ThemesDefault.space.PX_24 };
  const obj4 = { gap: ThemesDefault.space.PX_24 };
  obj[8] = { gap: ThemesDefault.space.PX_4 };
  obj[9] = { paddingTop: PX_16, paddingBottom: PX_20, paddingHorizontal: PX_20 };
  const obj5 = { gap: ThemesDefault.space.PX_4 };
  const obj6 = { paddingTop: PX_16, paddingBottom: PX_20, paddingHorizontal: PX_20 };
  obj[10] = { borderBottomLeftRadius: ThemesDefault.radii.xxl, borderBottomRightRadius: ThemesDefault.radii.xxl };
  const obj7 = { borderBottomLeftRadius: ThemesDefault.radii.xxl, borderBottomRightRadius: ThemesDefault.radii.xxl };
  obj[11] = { position: "absolute", top: ThemesDefault.space.PX_20, left: ThemesDefault.space.PX_20, zIndex: 1, backgroundColor: ThemesDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, borderRadius: ThemesDefault.radii.round, paddingHorizontal: ThemesDefault.space.PX_8, paddingVertical: 2 };
  const obj8 = { position: "absolute", top: ThemesDefault.space.PX_20, left: ThemesDefault.space.PX_20, zIndex: 1, backgroundColor: ThemesDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, borderRadius: ThemesDefault.radii.round, paddingHorizontal: ThemesDefault.space.PX_8, paddingVertical: 2 };
  obj[12] = { alignSelf: "flex-start", backgroundColor: ThemesDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, borderRadius: ThemesDefault.radii.round, paddingHorizontal: ThemesDefault.space.PX_8, paddingVertical: 2 };
  const obj9 = { alignSelf: "flex-start", backgroundColor: ThemesDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, borderRadius: ThemesDefault.radii.round, paddingHorizontal: ThemesDefault.space.PX_8, paddingVertical: 2 };
  obj[13] = { color: ThemesDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  const obj10 = { color: ThemesDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  obj[14] = { paddingBottom: ThemesDefault.space.PX_24, paddingHorizontal: ThemesDefault.space.PX_20, gap: ThemesDefault.space.PX_8 };
  const obj11 = { paddingBottom: ThemesDefault.space.PX_24, paddingHorizontal: ThemesDefault.space.PX_20, gap: ThemesDefault.space.PX_8 };
  obj[15] = { paddingBottom: ThemesDefault.space.PX_12 };
  obj[16] = { marginBottom: 16 };
  const obj12 = { paddingBottom: ThemesDefault.space.PX_12 };
  obj[17] = { paddingTop: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_20, paddingHorizontal: ThemesDefault.space.PX_20 };
  return obj;
});
const memoResult = importAllResult.memo(function BountiesCtaHeader(isEmptyOrCompleted) {
  const _require = isEmptyOrCompleted;
  const tmp2 = containerRef(15078)();
  containerRef = tmp2.containerRef;
  isEmptyOrCompleted = isEmptyOrCompleted.isEmptyOrCompleted;
  let tmp3 = undefined !== isEmptyOrCompleted;
  if (tmp3) {
    tmp3 = isEmptyOrCompleted;
  }
  if (!tmp3) {
    let obj = _require(11774);
    const bountyCarouselEmptyStateAnalytics = obj.useBountyCarouselEmptyStateAnalytics(null);
    obj = { theme: null, children: null };
    obj[0] = _require(13396).ThemeTypes.DARKER;
    if (tmp3) {
      obj = {};
      let merged = Object.assign(isEmptyOrCompleted);
      obj.containerRef = containerRef;
      let tmp9Result = tmp9(BountiesCtaHeaderInner, obj);
    } else {
      obj1 = { adContentId: null, adCreativeType: null, questContent: null, questContentPosition: 0, overrideVisibility: null, sourceQuestContent: null, children: null };
      obj1[0] = closure_9;
      obj1[1] = tmp7(5451).AdCreativeType.BOUNTY;
      obj1[2] = tmp7(5447).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE;
      obj1[4] = tmp2.isInView;
      obj1[5] = tmp7(5447).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE;
      obj1[6] = function children() {
        const obj = {};
        const merged = Object.assign(closure_0);
        obj.containerRef = containerRef;
        return closure_1_11(closure_1_21, obj);
      };
      tmp9Result = tmp9(tmp7(11778).QuestContentImpressionTrackerNative, obj1);
    }
    obj[1] = tmp9Result;
    return closure_11(_require(4271).ThemeContextProvider, obj);
  } else if (0 === isEmptyOrCompleted.bounties.length) {
    let COMPLETED = constants.EMPTY;
  } else {
    COMPLETED = constants.COMPLETED;
  }
});
let result = require("set").fileFinishedImporting("modules/quests/native/BountiesCtaHeader.tsx");

export default memoResult;