// discord_app/modules/quests/native/BountiesCtaHeader.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import QuestTypes from "../QuestTypes.tsx";
import AdCreativeType from "../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import AnalyticsActions from "../lib/analytics/AnalyticsActions.tsx";
import AnalyticsTypes from "../lib/analytics/AnalyticsTypes.tsx";
import common_Video from "../../../components_native/common/Video.tsx";
import BountiesModalActionCreatorsDefault from "BountiesModal/BountiesModalActionCreators.tsx";
import BountiesModalTypes from "BountiesModal/BountiesModalTypes.tsx";
import _modDef15138 from "../../../../discord_assets/assets/quests/bounties/starfield_bg.mp4.js";
import openBountiesNuxPromoSheetDefault from "openBountiesNuxPromoSheet.tsx";
import BountiesBannerBackgroundDefault from "BountiesBannerBackground.tsx";
import _modDef15162 from "../../../../discord_assets/assets/quests/bounties/bounty_banner.mp4.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import AdContentSeenStore from "../AdContentSeenStore.tsx";

const require = globalThis.__r;

const Text_Text = Text(5086);
require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const QuestConstants = fn(5977);
({ BountyCarouselEmptyStateReason: closure_8, DEFAULT_PLACEHOLDER_ENTRYPOINT_BOUNTY_ID: closure_9 } = QuestConstants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
const PX_20 = nativeDefault.space.PX_20;
const sum = 26 + nativeDefault.space.PX_8 + PX_16;
const minHeight = 472 - (sum + fn(5380).MEDIUM_BUTTON_HEIGHT + PX_20 + 170);
const createStyles = fn(5090);
let closure_16 = createStyles.createStyles(() => {
  const obj = { container: { width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderBottomLeftRadius: nativeDefault.radii.xxl, borderBottomRightRadius: nativeDefault.radii.xxl, overflow: "hidden" }, bannerClip: { overflow: "hidden" }, footerClip: null, header: null, headerWithFooter: null, headerReplaceMedia: null, headerTitleSection: null, headerHeadingGroup: null, headerHeadingContent: null, headerReplaceMediaCta: null, headerRoundedBottom: null, newPill: null, newPillInline: null, newPillText: null, headerTextBox: null, headerTextBoxWithFooter: null, description: null, footerCta: null };
  const obj2 = { width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderBottomLeftRadius: nativeDefault.radii.xxl, borderBottomRightRadius: nativeDefault.radii.xxl, overflow: "hidden" };
  obj.footerClip = { overflow: "hidden", borderBottomLeftRadius: nativeDefault.radii.xxl, borderBottomRightRadius: nativeDefault.radii.xxl };
  const obj3 = { overflow: "hidden", borderBottomLeftRadius: nativeDefault.radii.xxl, borderBottomRightRadius: nativeDefault.radii.xxl };
  obj.header = { width: "100%", minHeight: 296, justifyContent: "flex-end", overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
  obj.headerWithFooter = { minHeight };
  obj.headerReplaceMedia = { width: "100%", overflow: "hidden" };
  const obj4 = { width: "100%", minHeight: 296, justifyContent: "flex-end", overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
  const obj5 = { minHeight };
  obj.headerTitleSection = { paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_20 };
  const obj6 = { paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_20 };
  obj.headerHeadingGroup = { gap: nativeDefault.space.PX_24 };
  const obj7 = { gap: nativeDefault.space.PX_24 };
  obj.headerHeadingContent = { gap: nativeDefault.space.PX_4 };
  obj.headerReplaceMediaCta = { paddingTop: PX_16, paddingBottom: PX_20, paddingHorizontal: PX_20 };
  const obj8 = { gap: nativeDefault.space.PX_4 };
  const obj9 = { paddingTop: PX_16, paddingBottom: PX_20, paddingHorizontal: PX_20 };
  obj.headerRoundedBottom = { borderBottomLeftRadius: nativeDefault.radii.xxl, borderBottomRightRadius: nativeDefault.radii.xxl };
  const rect = { position: "absolute", top: nativeDefault.space.PX_20, left: nativeDefault.space.PX_20, zIndex: 1, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: 2 };
  obj.newPill = rect;
  const obj10 = { borderBottomLeftRadius: nativeDefault.radii.xxl, borderBottomRightRadius: nativeDefault.radii.xxl };
  obj.newPillInline = { alignSelf: "flex-start", backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: 2 };
  const obj11 = { alignSelf: "flex-start", backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: 2 };
  obj.newPillText = { color: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  const obj12 = { color: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  obj.headerTextBox = { paddingBottom: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_20, gap: nativeDefault.space.PX_8 };
  const obj13 = { paddingBottom: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_20, gap: nativeDefault.space.PX_8 };
  obj.headerTextBoxWithFooter = { paddingBottom: nativeDefault.space.PX_12 };
  obj.description = { marginBottom: 16 };
  const obj14 = { paddingBottom: nativeDefault.space.PX_12 };
  obj.footerCta = { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_20, paddingHorizontal: nativeDefault.space.PX_20 };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function StarfieldBackground() {
  const cResult = c.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function n() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { uri: _modDef15138 };
    cResult[2] = obj2;
    let tmp8 = obj2;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== stateFromStores) {
    const obj3 = { source: tmp8, style: React4.absoluteFillObject, resizeMode: "cover", muted: true, disableFocus: true, paused: stateFromStores, importantForAccessibility: "no-hide-descendants" };
    const tmp13 = collapsed(common_Video.VideoComponent, obj3);
    cResult[3] = stateFromStores;
    cResult[4] = tmp13;
    let tmp10 = tmp13;
  } else {
    tmp10 = cResult[4];
  }
  return tmp10;
}) : (function StarfieldBackground() {
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = { source: null, style: null, resizeMode: "cover", muted: true, disableFocus: true, paused: null, importantForAccessibility: "no-hide-descendants" };
  obj2.source = { uri: _modDef15138 };
  obj2.style = React4.absoluteFillObject;
  obj2.paused = stateFromStores;
  return collapsed(common_Video.VideoComponent, obj2);
});
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function StartEarningOrbsButton(arg0) {
  const cResult = c.c(4);
  ({ variant, onPress } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["1kkbKw"]);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === onPress) {
    if (cResult[2] === variant) {
      let tmp6 = cResult[3];
    }
    return tmp6;
  }
  const tmp7 = collapsed(components_Button_Button.Button, { grow: true, size: "md", variant, text: first, onPress });
  cResult[1] = onPress;
  cResult[2] = variant;
  cResult[3] = tmp7;
  tmp6 = tmp7;
}) : (function StartEarningOrbsButton(arg0) {
  ({ variant, onPress } = arg0);
  const obj = { grow: true, size: "md", variant, text: null, onPress: null };
  const intl = util.intl;
  obj.text = intl.string(util.t["1kkbKw"]);
  obj.onPress = onPress;
  return collapsed(components_Button_Button.Button, obj);
});
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function BountiesCtaDescription(arg0) {
  let Text = require;
  let tmp = dependencyMap;
  const cResult = c.c(12);
  ({ isEmptyOrCompleted, inlineLearnMore } = arg0);
  const tmp4 = closure_16();
  const t = util.t;
  const tmp5 = isEmptyOrCompleted ? t.q4wlOE : t.AZGGo1;
  let str = "text-subtle";
  if (undefined !== inlineLearnMore && inlineLearnMore) {
    str = "text-default";
  }
  if (cResult[0] !== tmp5) {
    const intl = util.intl;
    const stringResult = intl.string(tmp5);
    cResult[0] = tmp5;
    cResult[1] = stringResult;
    let tmp6 = stringResult;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === str) {
    if (cResult[3] === tmp6) {
      let tmp8 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = util.intl;
      const obj2 = { onClick: openBountiesNuxPromoSheetDefault };
      const formatResult = intl2.format(util.t.fjSvsC, obj2);
      cResult[5] = formatResult;
      let tmp11 = formatResult;
    } else {
      tmp11 = cResult[5];
    }
    if (!isEmptyOrCompleted) {
      if (!tmp3) {
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { variant: "text-sm/medium", children: tmp11 };
          const tmp16 = collapsed(Text_Text.Text, obj3);
          cResult[8] = tmp16;
          let tmp14 = tmp16;
        } else {
          tmp14 = cResult[8];
        }
        if (cResult[9] === tmp8) {
          if (cResult[10] === tmp4.description) {
            let tmp17 = cResult[11];
          }
          return tmp17;
        }
        const obj4 = { style: tmp4.description, children: null };
        const items = [tmp8, tmp14];
        obj4.children = items;
        const tmp20 = closure_1_11(hasOwnProperty, obj4);
        cResult[9] = tmp8;
        cResult[10] = tmp4.description;
        cResult[11] = tmp20;
        tmp17 = tmp20;
      }
    }
    if (cResult[6] !== tmp8) {
      Text = Text_Text.Text;
      const obj5 = { variant: "text-sm/medium", children: null };
      const items1 = [tmp8, " ", tmp11];
      obj5.children = items1;
      tmp = closure_1_11(Text, obj5);
      cResult[6] = tmp8;
      cResult[7] = tmp;
    }
  }
  const tmp9 = collapsed(Text_Text.Text, { variant: "text-sm/medium", color: str, children: tmp6 });
  cResult[2] = str;
  cResult[3] = tmp6;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : (function BountiesCtaDescription(arg0) {
  ({ isEmptyOrCompleted, inlineLearnMore } = arg0);
  if (inlineLearnMore === undefined) {
    inlineLearnMore = false;
  }
  const t = util.t;
  if (isEmptyOrCompleted) {
    let AZGGo1 = t.q4wlOE;
    let tmp5 = require;
  } else {
    AZGGo1 = t.AZGGo1;
    tmp5 = require;
  }
  let str = "text-subtle";
  if (inlineLearnMore) {
    str = "text-default";
  }
  const obj = { variant: "text-sm/medium", color: str, children: null };
  const intl = tmp5(1126).intl;
  obj.children = intl.string(AZGGo1);
  const tmp7 = collapsed(tmp5(5086).Text, obj);
  const intl2 = tmp5(1126).intl;
  const tmp = closure_16();
  const formatResult = intl2.format(tmp5(1126).t.fjSvsC, { onClick: openBountiesNuxPromoSheetDefault });
  if (!isEmptyOrCompleted) {
    if (!inlineLearnMore) {
      const obj3 = { style: tmp.description, children: null };
      const items = [tmp7, ];
      const obj4 = { variant: "text-sm/medium", children: formatResult };
      items[1] = collapsed(tmp5(5086).Text, obj4);
      obj3.children = items;
      let tmp11 = closure_1_11(hasOwnProperty, obj3);
    }
    return tmp11;
  }
  const obj5 = { variant: "text-sm/medium", children: null };
  const items1 = [tmp7, " ", formatResult];
  obj5.children = items1;
  tmp11 = closure_1_11(tmp5(5086).Text, obj5);
  const obj2 = { onClick: openBountiesNuxPromoSheetDefault };
});
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function BountiesCtaHeaderInner(bounties) {
  let tmp = bounties;
  let items4 = dependencyMap;
  const cResult = bounties(576).c(48);
  bounties = bounties.bounties;
  ({ isEmptyOrCompleted, containerRef, footer, replaceHeaderMediaWith, shopCarouselButtonVariant } = bounties);
  let str = "default";
  if (undefined !== shopCarouselButtonVariant) {
    str = shopCarouselButtonVariant;
  }
  const tmp4 = closure_16();
  if (cResult[0] !== str) {
    const bountiesEntryPointButtonVariant = tmp(15160).getBountiesEntryPointButtonVariant(str);
    cResult[0] = str;
    cResult[1] = bountiesEntryPointButtonVariant;
    let tmp7 = bountiesEntryPointButtonVariant;
    const tmpResult = tmp(15160);
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AdContentSeenStore];
    cResult[2] = items;
    let tmp9 = items;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== bounties) {
    class I {
      constructor() {
        return bounties.some(() => { ... });
      }
    }
    const items1 = [bounties];
    cResult[3] = bounties;
    cResult[4] = I;
    cResult[5] = items1;
    let tmp12 = items1;
  } else {
    class I {
      constructor() {
        return bounties.some(() => { ... });
      }
    }
    tmp12 = cResult[5];
  }
  let obj = bounties(576);
  newPillText = tmp(504).useStateFromStores(tmp9, I, tmp12);
  if (cResult[6] !== bounties[0]) {
    class I {
      constructor() {
        return bounties.some(() => { ... });
      }
    }
    cResult[6] = bounties[0];
    cResult[7] = tmp14;
  } else {
    class I {
      constructor() {
        return bounties.some(() => { ... });
      }
    }
  }
  if (null == footer) {
    class I {
      constructor() {
        return bounties.some(() => { ... });
      }
    }
  }
  if (cResult[8] === tmp4.bannerClip) {
    class I {
      constructor() {
        return bounties.some(() => { ... });
      }
    }
    if (cResult[11] === tmp7) {
      class I {
        constructor() {
          return bounties.some(() => { ... });
        }
      }
    }
    if (null != replaceHeaderMediaWith) {
      class I {
        constructor() {
          return bounties.some(() => { ... });
        }
      }
      const items2 = [tmp4.headerReplaceMedia, ];
      if (!tmp5) {
        class I {
          constructor() {
            return bounties.some(() => { ... });
          }
        }
      }
      let obj2 = { style: null, children: null };
      items2[1] = tmp15;
      obj2.style = items2;
      const items3 = [closure_10(closure_17, {}), , , ];
      let obj3 = { style: tmp4.headerTitleSection, children: null };
      const obj5 = { style: tmp4.headerHeadingGroup, children: null };
      let tmp29Result = newPillText;
      if (newPillText) {
        class I {
          constructor() {
            return bounties.some(() => { ... });
          }
        }
        ({ newPillInline: tmp32[1], newPillText: tmp32[2] } = tmp4);
        tmp29Result = closure_10(tmp(1200).NewTag, tmp32);
      }
      items4 = [tmp29Result, ];
      const obj6 = { style: tmp4.headerHeadingContent, children: null };
      const obj7 = { isEmptyOrCompleted: tmp3, inlineLearnMore: true };
      tmp = closure_10(closure_19, obj7);
      obj6.children = tmp;
      items4[1] = closure_10(closure_5, obj6);
      obj5.children = items4;
      obj3.children = tmp26(closure_5, obj5);
      items3[1] = closure_10(closure_5, obj3);
      items3[2] = replaceHeaderMediaWith;
      let tmp29Result2 = tmp6;
      if (!tmp3) {
        class I {
          constructor() {
            return bounties.some(() => { ... });
          }
        }
      }
      if (tmp29Result2) {
        class I {
          constructor() {
            return bounties.some(() => { ... });
          }
        }
        tmp35[0] = tmp4.headerReplaceMediaCta;
        const obj8 = { variant: tmp7, onPress: tmp14 };
        items4 = closure_10(closure_18, obj8);
        tmp35[1] = items4;
        tmp29Result2 = closure_10(closure_5, tmp35);
      }
      items3[3] = tmp29Result2;
      obj2.children = items3;
      let tmp38Result = tmp26(closure_5, obj2);
    } else {
      class I {
        constructor() {
          return bounties.some(() => { ... });
        }
      }
      const obj9 = { uri: _modDef15162, style: null, children: null };
      const items5 = [tmp4.header, , ];
      if (tmp5) {
        class I {
          constructor() {
            return bounties.some(() => { ... });
          }
        }
      }
      items5[1] = tmp5;
      if (!tmp5) {
        class I {
          constructor() {
            return bounties.some(() => { ... });
          }
        }
      }
      items5[2] = tmp15;
      obj9.style = items5;
      let tmp19 = newPillText;
      if (newPillText) {
        class I {
          constructor() {
            return bounties.some(() => { ... });
          }
        }
        ({ newPill: obj4.containerStyle, newPillText: obj4.textStyle } = tmp4);
        tmp19 = closure_10(tmp(1200).NewTag, { variant: "text-xs/bold", containerStyle: null, textStyle: null });
        const obj10 = { variant: "text-xs/bold", containerStyle: null, textStyle: null };
      }
      const items6 = [tmp19, ];
      const items7 = [tmp4.headerTextBox, ];
      if (tmp5) {
        class I {
          constructor() {
            return bounties.some(() => { ... });
          }
        }
      }
      const obj11 = { style: null, children: null };
      items7[1] = tmp5;
      obj11.style = items7;
      const obj12 = { isEmptyOrCompleted: tmp3 };
      const items8 = [closure_10(closure_19, obj12), ];
      let tmp22Result = tmp6;
      if (!tmp3) {
        class I {
          constructor() {
            return bounties.some(() => { ... });
          }
        }
      }
      if (tmp22Result) {
        class I {
          constructor() {
            return bounties.some(() => { ... });
          }
        }
        const obj13 = { variant: tmp7, onPress: tmp14 };
        tmp22Result = closure_10(closure_18, obj13);
      }
      items8[1] = tmp22Result;
      obj11.children = items8;
      items6[1] = tmp38(closure_5, obj11);
      obj9.children = items6;
      tmp38Result = tmp38(BountiesBannerBackgroundDefault, obj9);
    }
    cResult[11] = tmp7;
    cResult[12] = tmp14;
    cResult[13] = tmp5;
    cResult[14] = tmp3;
    cResult[15] = replaceHeaderMediaWith;
    cResult[16] = newPillText;
    cResult[17] = tmp6;
    cResult[18] = tmp4.header;
    cResult[19] = tmp4.headerHeadingContent;
    cResult[20] = tmp4.headerHeadingGroup;
    cResult[21] = tmp4.headerReplaceMedia;
    cResult[22] = tmp4.headerReplaceMediaCta;
    cResult[23] = tmp4.headerRoundedBottom;
    cResult[24] = tmp4.headerTextBox;
    cResult[25] = tmp4.headerTextBoxWithFooter;
    cResult[26] = tmp4.headerTitleSection;
    cResult[27] = tmp4.headerWithFooter;
    cResult[28] = tmp4.newPill;
    ({ newPillInline: tmp2[29], newPillText } = tmp4);
    cResult[30] = newPillText;
    cResult[31] = tmp38Result;
  }
  const items9 = [tmp4.bannerClip, null == footer];
  cResult[8] = tmp4.bannerClip;
  cResult[9] = null == footer;
  cResult[10] = items9;
  const tmpResult2 = tmp(504);
}) : (function BountiesCtaHeaderInner(bounties) {
  bounties = bounties.bounties;
  let flag = bounties.isEmptyOrCompleted;
  if (flag === undefined) {
    flag = false;
  }
  ({ footer, replaceHeaderMediaWith, shopCarouselButtonVariant, containerRef } = bounties);
  if (shopCarouselButtonVariant === undefined) {
    shopCarouselButtonVariant = "default";
  }
  const tmp = closure_16();
  let tmp9Result2 = null != footer;
  let tmp11Result6 = !flag;
  const bountiesEntryPointButtonVariant = bounties(15160).getBountiesEntryPointButtonVariant(shopCarouselButtonVariant);
  let obj = bounties(15160);
  const items = [AdContentSeenStore];
  const items1 = [bounties];
  let stateFromStores = bounties(504).useStateFromStores(items, () => bounties.some((id) => !closure_1_7.hasSeen(bounties(closure_1_2[19]).AdCreativeType.BOUNTY, id.id)), items1);
  const items2 = [bounties];
  const callback = noop.useCallback(() => {
    const obj = AnalyticsActions;
    const result = obj.trackAdContentClicked({ adContentId, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, questContent: QuestTypes.QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE, questContentCTA: AnalyticsTypes.QuestContentCTA.START_BOUNTY, sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE, questContentPosition: 0 });
    const obj2 = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, questContent: QuestTypes.QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE, questContentCTA: AnalyticsTypes.QuestContentCTA.START_BOUNTY, sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE, questContentPosition: 0 };
    const obj3 = BountiesModalActionCreatorsDefault;
    obj3.showModal({ bountyId: bounties[0].id, sourceQuestContent: QuestTypes.QuestContent.VIDEO_MODAL_MOBILE, variant: BountiesModalTypes.BountiesModalVariant.VERTICAL_SCROLL });
  }, items2);
  let obj3 = { ref: containerRef, style: tmp.container, children: null };
  const items3 = [tmp.bannerClip, ];
  let headerRoundedBottom = tmp12;
  if (!tmp9Result2) {
    headerRoundedBottom = tmp.headerRoundedBottom;
  }
  const obj4 = { style: items3, children: null };
  items3[1] = headerRoundedBottom;
  if (null != replaceHeaderMediaWith) {
    const items4 = [tmp.headerReplaceMedia, ];
    let headerRoundedBottom3 = tmp12;
    if (!tmp9Result2) {
      headerRoundedBottom3 = tmp.headerRoundedBottom;
    }
    const obj6 = { style: null, children: null };
    items4[1] = headerRoundedBottom3;
    obj6.style = items4;
    const items5 = [closure_10(closure_17, {}), , , ];
    const obj7 = { style: tmp.headerTitleSection, children: null };
    const obj8 = { style: tmp.headerHeadingGroup, children: null };
    if (stateFromStores) {
      ({ newPillInline: obj12.containerStyle, newPillText: obj12.textStyle } = tmp);
      stateFromStores = closure_10(tmp4(1200).NewTag, { variant: "text-xs/bold", containerStyle: null, textStyle: null });
      const obj9 = { variant: "text-xs/bold", containerStyle: null, textStyle: null };
    }
    const items6 = [stateFromStores, ];
    const obj10 = { style: tmp.headerHeadingContent, children: null };
    const obj11 = { isEmptyOrCompleted: flag, inlineLearnMore: true };
    obj10.children = closure_10(closure_19, obj11);
    items6[1] = closure_10(closure_5, obj10);
    obj8.children = items6;
    obj7.children = closure_11(closure_5, obj8);
    items5[1] = closure_10(closure_5, obj7);
    items5[2] = replaceHeaderMediaWith;
    let tmp11Result = tmp11Result6;
    if (!flag) {
      tmp11Result = tmp12;
    }
    if (tmp11Result) {
      const obj13 = { style: tmp.headerReplaceMediaCta, children: null };
      const obj14 = { variant: bountiesEntryPointButtonVariant, onPress: callback };
      obj13.children = closure_10(closure_18, obj14);
      tmp11Result = closure_10(closure_5, obj13);
    }
    items5[3] = tmp11Result;
    obj6.children = items5;
    let tmp9Result = closure_11(closure_5, obj6);
  } else {
    const obj15 = { uri: _modDef15162, style: null, children: null };
    const items7 = [tmp.header, , ];
    let headerWithFooter = tmp9Result2;
    if (tmp9Result2) {
      headerWithFooter = tmp.headerWithFooter;
    }
    items7[1] = headerWithFooter;
    let headerRoundedBottom2 = tmp12;
    if (!tmp9Result2) {
      headerRoundedBottom2 = tmp.headerRoundedBottom;
    }
    items7[2] = headerRoundedBottom2;
    obj15.style = items7;
    let tmp11Result4 = stateFromStores;
    if (stateFromStores) {
      ({ newPill: obj5.containerStyle, newPillText: obj5.textStyle } = tmp);
      tmp11Result4 = closure_10(tmp4(1200).NewTag, { variant: "text-xs/bold", containerStyle: null, textStyle: null });
      const obj16 = { variant: "text-xs/bold", containerStyle: null, textStyle: null };
    }
    const items8 = [tmp11Result4, ];
    const items9 = [tmp.headerTextBox, ];
    let headerTextBoxWithFooter = tmp9Result2;
    if (tmp9Result2) {
      headerTextBoxWithFooter = tmp.headerTextBoxWithFooter;
    }
    const obj17 = { style: null, children: null };
    items9[1] = headerTextBoxWithFooter;
    obj17.style = items9;
    const obj18 = { isEmptyOrCompleted: flag };
    const items10 = [closure_10(closure_19, obj18), ];
    let tmp11Result5 = tmp11Result6;
    if (!flag) {
      tmp11Result5 = tmp12;
    }
    if (tmp11Result5) {
      const obj19 = { variant: bountiesEntryPointButtonVariant, onPress: callback };
      tmp11Result5 = closure_10(closure_18, obj19);
    }
    items10[1] = tmp11Result5;
    obj17.children = items10;
    items8[1] = closure_11(closure_5, obj17);
    obj15.children = items8;
    tmp9Result = closure_11(BountiesBannerBackgroundDefault, obj15);
  }
  obj4.children = tmp9Result;
  const items11 = [closure_10(closure_5, obj4), ];
  if (tmp9Result2) {
    const obj20 = { style: tmp.footerClip, children: null };
    const items12 = [closure_10(closure_17, {}), footer, ];
    if (!flag) {
      const obj38 = { style: tmp.footerCta, children: null };
      const obj39 = { variant: bountiesEntryPointButtonVariant, onPress: callback };
      obj38.children = closure_10(closure_18, obj39);
      tmp11Result6 = closure_10(closure_5, obj38);
    }
    items12[2] = tmp11Result6;
    obj20.children = items12;
    tmp9Result2 = closure_11(closure_5, obj20);
  }
  items11[1] = tmp9Result2;
  obj3.children = items11;
  return closure_11(closure_5, obj3);
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesCtaHeader.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function BountiesCtaHeader(isEmptyOrCompleted) {
  _require = isEmptyOrCompleted;
  const cResult = require("c").c(5);
  const tmp4 = containerRef(15163)();
  containerRef = tmp4.containerRef;
  const isInView = tmp4.isInView;
  isEmptyOrCompleted = isEmptyOrCompleted.isEmptyOrCompleted;
  let tmp5 = undefined !== isEmptyOrCompleted;
  if (tmp5) {
    tmp5 = isEmptyOrCompleted;
  }
  if (!tmp5) {
    const bountyCarouselEmptyStateAnalytics = tmp(11160).useBountyCarouselEmptyStateAnalytics(null);
    if (cResult[0] === containerRef) {
      if (cResult[1] === tmp5) {
        if (cResult[2] === isInView) {
          if (cResult[3] === isEmptyOrCompleted) {
            return cResult[4];
          }
        }
      }
    }
    let obj2 = { theme: tmp(15141).ThemeTypes.DARK, children: null };
    if (tmp5) {
      const obj3 = {};
      let merged = Object.assign(isEmptyOrCompleted);
      obj3.containerRef = containerRef;
      let tmp10Result = closure_10(closure_20, obj3);
    } else {
      const obj4 = {
        adContentId,
        adCreativeType: tmp(5984).AdCreativeType.BOUNTY,
        questContent: tmp(5980).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE,
        questContentPosition: 0,
        overrideVisibility: isInView,
        sourceQuestContent: tmp(5980).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE,
        children() {
              const obj = {};
              const merged = Object.assign(closure_0);
              obj.containerRef = containerRef;
              return collapsed(closure_20, obj);
            }
      };
      tmp10Result = closure_10(tmp(11164).QuestContentImpressionTrackerNative, obj4);
    }
    obj2.children = tmp10Result;
    obj2 = closure_10(tmp(4787).ThemeContextProvider, obj2);
    cResult[0] = containerRef;
    cResult[1] = tmp5;
    cResult[2] = isInView;
    cResult[3] = isEmptyOrCompleted;
    cResult[4] = obj2;
    const tmpResult = tmp(11160);
  } else if (0 === isEmptyOrCompleted.bounties.length) {
    let COMPLETED = constants.EMPTY;
  } else {
    COMPLETED = constants.COMPLETED;
  }
  let obj = require("c");
}) : (function BountiesCtaHeader(isEmptyOrCompleted) {
  _require = isEmptyOrCompleted;
  const tmp2 = containerRef(15163)();
  containerRef = tmp2.containerRef;
  isEmptyOrCompleted = isEmptyOrCompleted.isEmptyOrCompleted;
  let tmp3 = undefined !== isEmptyOrCompleted;
  if (tmp3) {
    tmp3 = isEmptyOrCompleted;
  }
  if (!tmp3) {
    const bountyCarouselEmptyStateAnalytics = require("AnalyticsHooks").useBountyCarouselEmptyStateAnalytics(null);
    const obj2 = { theme: require("shared/ThemeTypes").ThemeTypes.DARK, children: null };
    if (tmp3) {
      const obj3 = {};
      let merged = Object.assign(isEmptyOrCompleted);
      obj3.containerRef = containerRef;
      let tmp9Result = closure_10(closure_20, obj3);
    } else {
      const obj4 = {
        adContentId,
        adCreativeType: tmp7(5984).AdCreativeType.BOUNTY,
        questContent: tmp7(5980).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE,
        questContentPosition: 0,
        overrideVisibility: tmp2.isInView,
        sourceQuestContent: tmp7(5980).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE,
        children() {
              const obj = {};
              const merged = Object.assign(closure_0);
              obj.containerRef = containerRef;
              return collapsed(closure_20, obj);
            }
      };
      tmp9Result = closure_10(tmp7(11164).QuestContentImpressionTrackerNative, obj4);
    }
    obj2.children = tmp9Result;
    return closure_10(require("native").ThemeContextProvider, obj2);
  } else if (0 === isEmptyOrCompleted.bounties.length) {
    let COMPLETED = constants.EMPTY;
  } else {
    COMPLETED = constants.COMPLETED;
  }
}));