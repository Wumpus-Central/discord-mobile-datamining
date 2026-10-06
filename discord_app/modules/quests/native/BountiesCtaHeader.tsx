// === Module 14896: BountiesCtaHeader ===

// Module 14896 (BountiesCtaHeader)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import ButtonConstants from "ButtonConstants" /* 5607 */;
import QuestTypes from "QuestTypes" /* 5633 */;
import AdCreativeType from "AdCreativeType" /* 5637 */;
import AnalyticsActions from "AnalyticsActions" /* 7215 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7225 */;
import common_Video from "common/Video" /* 7993 */;
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators" /* 14827 */;
import BountiesModalTypes from "BountiesModalTypes" /* 14829 */;
import _modDef14876 from "module_14876" /* 14876 */;
import openBountiesNuxPromoSheetDefault from "openBountiesNuxPromoSheet" /* 14885 */;
import BountiesBannerBackgroundDefault from "BountiesBannerBackground" /* 14899 */;
import _modDef14900 from "module_14900" /* 14900 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import AdContentSeenStore from "AdContentSeenStore" /* 14897 */;
import QuestConstants from "QuestConstants" /* 5630 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let unpackModuleId;
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
({ BountyCarouselEmptyStateReason: metroImportAll, DEFAULT_PLACEHOLDER_ENTRYPOINT_BOUNTY_ID: c9 } = QuestConstants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const PX_16 = nativeDefault.space.PX_16;
const PX_20 = nativeDefault.space.PX_20;
const PX_202 = nativeDefault.space.PX_20;
const sum = 26 + nativeDefault.space.PX_8 + PX_16;
const minHeight = 472 - (sum + ButtonConstants.MEDIUM_BUTTON_HEIGHT + PX_20 + 170);
let closure_16 = createStyles.createStyles(() => {
  let obj5;
  let obj9;
  let rect;
  const obj = { container: { width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderBottomLeftRadius: nativeDefault.radii.xxl, borderBottomRightRadius: nativeDefault.radii.xxl, overflow: "hidden" }, bannerClip: { overflow: "hidden" }, footerClip: { overflow: "hidden", borderBottomLeftRadius: nativeDefault.radii.xxl, borderBottomRightRadius: nativeDefault.radii.xxl }, header: { width: "100%", minHeight: 296, justifyContent: "flex-end", overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, headerWithFooter: obj5, headerReplaceMedia: { width: "100%", overflow: "hidden" }, headerTitleSection: { paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_20 }, headerHeadingGroup: { gap: nativeDefault.space.PX_24 }, headerHeadingContent: { gap: nativeDefault.space.PX_4 }, headerReplaceMediaCta: obj9, headerRoundedBottom: { borderBottomLeftRadius: nativeDefault.radii.xxl, borderBottomRightRadius: nativeDefault.radii.xxl }, newPill: rect, newPillInline: { alignSelf: "flex-start", backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: 2 }, newPillText: { color: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT }, headerTextBox: { paddingBottom: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_20, gap: nativeDefault.space.PX_8 }, headerTextBoxWithFooter: { paddingBottom: nativeDefault.space.PX_12 }, description: { marginBottom: 16 }, footerCta: { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_20, paddingHorizontal: nativeDefault.space.PX_20 } };
  ({ width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderBottomLeftRadius: nativeDefault.radii.xxl, borderBottomRightRadius: nativeDefault.radii.xxl, overflow: "hidden" });
  ({ overflow: "hidden", borderBottomLeftRadius: nativeDefault.radii.xxl, borderBottomRightRadius: nativeDefault.radii.xxl });
  obj5 = { minHeight };
  ({ width: "100%", minHeight: 296, justifyContent: "flex-end", overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH });
  ({ paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_20 });
  ({ gap: nativeDefault.space.PX_24 });
  obj9 = { paddingTop: PX_16, paddingBottom: PX_20, paddingHorizontal: PX_202 };
  ({ gap: nativeDefault.space.PX_4 });
  ({ borderBottomLeftRadius: nativeDefault.radii.xxl, borderBottomRightRadius: nativeDefault.radii.xxl });
  rect = { position: "absolute", top: nativeDefault.space.PX_20, left: nativeDefault.space.PX_20, zIndex: 1, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: 2 };
  ({ alignSelf: "flex-start", backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: 2 });
  ({ color: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT });
  ({ paddingBottom: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_20, gap: nativeDefault.space.PX_8 });
  ({ paddingBottom: nativeDefault.space.PX_12 });
  ({ paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_20, paddingHorizontal: nativeDefault.space.PX_20 });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp10;
  let tmp4;
  let tmp5;
  let tmp8;
  let useReducedMotion;
  const obj = react2;
  const cResult = obj.c(5);
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
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { uri: _modDef14876 };
    cResult[2] = obj2;
    tmp8 = obj2;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== stateFromStores) {
    const obj3 = { source: tmp8, style: React3.absoluteFillObject, resizeMode: "cover", muted: true, disableFocus: true, paused: stateFromStores, importantForAccessibility: "no-hide-descendants" };
    const tmp13 = authStore(common_Video.VideoComponent, obj3);
    cResult[3] = stateFromStores;
    cResult[4] = tmp13;
    tmp10 = tmp13;
  } else {
    tmp10 = cResult[4];
  }
  return tmp10;
}) : (() => {
  let obj3;
  let useReducedMotion;
  const items = [AccessibilityStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = { source: obj3, style: React3.absoluteFillObject, resizeMode: "cover", muted: true, disableFocus: true, paused: stateFromStores, importantForAccessibility: "no-hide-descendants" };
  obj3 = { uri: _modDef14876 };
  const VideoComponent = common_Video.VideoComponent;
  return authStore(VideoComponent, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let onPress;
  let variant;
  const obj = react2;
  const cResult = obj.c(4);
  ({ variant, onPress } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl3.intl;
    const stringResult = intl.string(intl3.t["1kkbKw"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === onPress) {
    let tmp6;
    if (cResult[2] === variant) {
      tmp6 = cResult[3];
    }
    return tmp6;
  }
  const tmp7 = authStore(components_Button_Button.Button, { grow: true, size: "md", variant, text: first, onPress });
  cResult[1] = onPress;
  cResult[2] = variant;
  cResult[3] = tmp7;
  tmp6 = tmp7;
}) : ((arg0) => {
  let intl;
  let onPress;
  let variant;
  ({ variant, onPress } = arg0);
  const obj = { grow: true, size: "md", variant, text: intl.string(intl3.t["1kkbKw"]), onPress };
  const Button = components_Button_Button.Button;
  intl = intl3.intl;
  return authStore(Button, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let inlineLearnMore;
  let isEmptyOrCompleted;
  let items;
  let items1;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(12);
  ({ isEmptyOrCompleted, inlineLearnMore } = arg0);
  const tmp5 = closure_16();
  const t = intl3.t;
  const tmp6 = isEmptyOrCompleted ? t.q4wlOE : t.AZGGo1;
  let str = "text-subtle";
  if (undefined !== inlineLearnMore && inlineLearnMore) {
    str = "text-default";
  }
  if (cResult[0] !== tmp6) {
    const intl = intl3.intl;
    const stringResult = intl.string(tmp6);
    cResult[0] = tmp6;
    cResult[1] = stringResult;
    tmp7 = stringResult;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === str) {
    let tmp9;
    let tmp12;
    let tmp22;
    if (cResult[3] === tmp7) {
      tmp9 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = intl3.intl;
      const format = intl2.format;
      const obj2 = { onClick: openBountiesNuxPromoSheetDefault };
      const fjSvsC = intl3.t.fjSvsC;
      const formatResult = format(fjSvsC, obj2);
      cResult[5] = formatResult;
      tmp12 = formatResult;
    } else {
      tmp12 = cResult[5];
    }
    if (!isEmptyOrCompleted) {
      let tmp18;
      if (!(undefined !== inlineLearnMore && inlineLearnMore)) {
        let tmp15;
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { variant: "text-sm/medium", children: tmp12 };
          const tmp17 = authStore(Text_Text.Text, obj3);
          cResult[8] = tmp17;
          tmp15 = tmp17;
        } else {
          tmp15 = cResult[8];
        }
        if (cResult[9] === tmp9) {
          if (cResult[10] === tmp5.description) {
            tmp18 = cResult[11];
          }
        }
        const obj4 = { style: tmp5.description, children: items };
        items = [tmp9, tmp15];
        const tmp21 = unpackModuleId(hasOwnProperty, obj4);
        cResult[9] = tmp9;
        cResult[10] = tmp5.description;
        cResult[11] = tmp21;
        tmp18 = tmp21;
      }
      return tmp18;
    }
    if (cResult[6] !== tmp9) {
      const obj5 = { variant: "text-sm/medium", children: items1 };
      items1 = [tmp9, " ", tmp12];
      const tmp24 = unpackModuleId(Text_Text.Text, obj5);
      cResult[6] = tmp9;
      cResult[7] = tmp24;
      tmp22 = tmp24;
    } else {
      tmp22 = cResult[7];
    }
    tmp18 = tmp22;
  }
  const tmp10 = authStore(Text_Text.Text, { variant: "text-sm/medium", color: str, children: tmp7 });
  cResult[2] = str;
  cResult[3] = tmp7;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : ((arg0) => {
  let AZGGo1;
  let inlineLearnMore;
  let intl;
  let isEmptyOrCompleted;
  let items;
  let items1;
  let tmp5;
  ({ isEmptyOrCompleted, inlineLearnMore } = arg0);
  if (inlineLearnMore === undefined) {
    inlineLearnMore = false;
  }
  const tmp = closure_16();
  const t = intl3.t;
  if (isEmptyOrCompleted) {
    AZGGo1 = t.q4wlOE;
    tmp5 = require;
  } else {
    AZGGo1 = t.AZGGo1;
    tmp5 = require;
  }
  let str = "text-subtle";
  if (inlineLearnMore) {
    str = "text-default";
  }
  const obj = { variant: "text-sm/medium", color: str, children: intl.string(AZGGo1) };
  const Text = tmp5(4892).Text;
  intl = tmp5(1126).intl;
  const tmp7 = authStore(Text, obj);
  const intl2 = tmp5(1126).intl;
  const format = intl2.format;
  const obj2 = { onClick: openBountiesNuxPromoSheetDefault };
  const fjSvsC = tmp5(1126).t.fjSvsC;
  const formatResult = format(fjSvsC, obj2);
  if (!isEmptyOrCompleted) {
    let tmp11;
    if (!inlineLearnMore) {
      const obj3 = { style: tmp.description, children: items };
      items = [tmp7, ];
      const obj4 = { variant: "text-sm/medium", children: formatResult };
      items[1] = authStore(tmp5(4892).Text, obj4);
      tmp11 = unpackModuleId(hasOwnProperty, obj3);
    }
    return tmp11;
  }
  const obj5 = { variant: "text-sm/medium", children: items1 };
  items1 = [tmp7, " ", formatResult];
  tmp11 = unpackModuleId(tmp5(4892).Text, obj5);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((bounties) => {
  let containerRef;
  let footer;
  let isEmptyOrCompleted;
  let items3;
  let items4;
  let items5;
  let items6;
  let items8;
  let obj5;
  let obj7;
  let replaceHeaderMediaWith;
  let shopCarouselButtonVariant;
  let tmp10;
  let tmp13;
  let tmp8;
  let obj = bounties(576);
  const cResult = obj.c(48);
  bounties = bounties.bounties;
  ({ isEmptyOrCompleted, containerRef, footer, replaceHeaderMediaWith, shopCarouselButtonVariant } = bounties);
  let str = "default";
  if (undefined !== shopCarouselButtonVariant) {
    str = shopCarouselButtonVariant;
  }
  const tmp5 = closure_16();
  if (cResult[0] !== str) {
    const tmpResult = bounties(14898);
    const bountiesEntryPointButtonVariant = tmpResult.getBountiesEntryPointButtonVariant(str);
    cResult[0] = str;
    cResult[1] = bountiesEntryPointButtonVariant;
    tmp8 = bountiesEntryPointButtonVariant;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AdContentSeenStore];
    cResult[2] = items;
    tmp10 = items;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] !== bounties) {
    class I {
      constructor() {
        return bounties.some(() => { /* body not rendered: F144464 */ });
      }
    }
    const items1 = [bounties];
    cResult[3] = bounties;
    cResult[4] = I;
    cResult[5] = items1;
    tmp13 = items1;
  } else {
    class I {
      constructor() {
        return bounties.some(() => { /* body not rendered: F144464 */ });
      }
    }
    tmp13 = cResult[5];
  }
  const tmpResult2 = bounties(504);
  const stateFromStores = tmpResult2.useStateFromStores(tmp10, I, tmp13);
  if (cResult[6] !== bounties[0]) {
    class I {
      constructor() {
        return bounties.some(() => { /* body not rendered: F144464 */ });
      }
    }
    cResult[6] = bounties[0];
    cResult[7] = tmp16;
  } else {
    class I {
      constructor() {
        return bounties.some(() => { /* body not rendered: F144464 */ });
      }
    }
  }
  if (null == footer) {
    class I {
      constructor() {
        return bounties.some(() => { /* body not rendered: F144464 */ });
      }
    }
  }
  if (cResult[8] === tmp5.bannerClip) {
    let tmp39Result;
    class I {
      constructor() {
        return bounties.some(() => { /* body not rendered: F144464 */ });
      }
    }
    if (cResult[11] === tmp8) {
      class I {
        constructor() {
          return bounties.some(() => { /* body not rendered: F144464 */ });
        }
      }
    }
    if (null != replaceHeaderMediaWith) {
      class I {
        constructor() {
          return bounties.some(() => { /* body not rendered: F144464 */ });
        }
      }
      const items2 = [tmp5.headerReplaceMedia, ];
      if (null == footer) {
        class I {
          constructor() {
            return bounties.some(() => { /* body not rendered: F144464 */ });
          }
        }
      }
      let obj2 = { style: items2, children: items3 };
      items2[1] = null == footer;
      items3 = [closure_10(closure_17, {}), , , ];
      let obj3 = { style: tmp5.headerTitleSection, children: tmp28(closure_5, obj5) };
      let tmp31Result = stateFromStores;
      obj5 = { style: tmp5.headerHeadingGroup, children: items4 };
      if (tmp31Result) {
        class I {
          constructor() {
            return bounties.some(() => { /* body not rendered: F144464 */ });
          }
        }
        ({ newPillInline: tmp34[1], newPillText: tmp34[2] } = tmp5);
        tmp31Result = closure_10(tmp(1188).NewTag, tmp34);
      }
      items4 = [tmp31Result, ];
      const obj6 = { style: tmp5.headerHeadingContent, children: closure_10(closure_19, obj7) };
      obj7 = { isEmptyOrCompleted: undefined !== isEmptyOrCompleted && isEmptyOrCompleted, inlineLearnMore: true };
      items4[1] = closure_10(closure_5, obj6);
      items3[1] = closure_10(closure_5, obj3);
      items3[2] = replaceHeaderMediaWith;
      let tmp31Result2 = tmp7;
      if (!(undefined !== isEmptyOrCompleted && isEmptyOrCompleted)) {
        class I {
          constructor() {
            return bounties.some(() => { /* body not rendered: F144464 */ });
          }
        }
      }
      if (tmp31Result2) {
        class I {
          constructor() {
            return bounties.some(() => { /* body not rendered: F144464 */ });
          }
        }
        tmp37[0] = tmp5.headerReplaceMediaCta;
        const obj8 = { variant: tmp8, onPress: tmp16 };
        tmp37[1] = closure_10(closure_18, obj8);
        tmp31Result2 = closure_10(closure_5, tmp37);
      }
      items3[3] = tmp31Result2;
      tmp39Result = tmp28(closure_5, obj2);
    } else {
      class I {
        constructor() {
          return bounties.some(() => { /* body not rendered: F144464 */ });
        }
      }
      const obj9 = { uri: _modDef14900, style: items5, children: items6 };
      items5 = [tmp5.header, null != footer && tmp5.headerWithFooter, ];
      const tmp41 = BountiesBannerBackgroundDefault;
      if (null == footer) {
        class I {
          constructor() {
            return bounties.some(() => { /* body not rendered: F144464 */ });
          }
        }
      }
      items5[2] = null == footer;
      let tmp21 = stateFromStores;
      if (tmp21) {
        class I {
          constructor() {
            return bounties.some(() => { /* body not rendered: F144464 */ });
          }
        }
        const obj10 = { variant: "text-xs/bold", containerStyle: null, textStyle: null };
        ({ newPill: obj4.containerStyle, newPillText: obj4.textStyle } = tmp5);
        tmp21 = closure_10(tmp(1188).NewTag, obj10);
      }
      items6 = [tmp21, ];
      const items7 = [tmp5.headerTextBox, ];
      if (null != footer) {
        class I {
          constructor() {
            return bounties.some(() => { /* body not rendered: F144464 */ });
          }
        }
      }
      const obj11 = { style: items7, children: items8 };
      items7[1] = null != footer;
      const obj12 = { isEmptyOrCompleted: undefined !== isEmptyOrCompleted && isEmptyOrCompleted };
      items8 = [closure_10(closure_19, obj12), ];
      let tmp24Result = tmp7;
      if (!(undefined !== isEmptyOrCompleted && isEmptyOrCompleted)) {
        class I {
          constructor() {
            return bounties.some(() => { /* body not rendered: F144464 */ });
          }
        }
      }
      if (tmp24Result) {
        class I {
          constructor() {
            return bounties.some(() => { /* body not rendered: F144464 */ });
          }
        }
        const obj13 = { variant: tmp8, onPress: tmp16 };
        tmp24Result = closure_10(closure_18, obj13);
      }
      items8[1] = tmp24Result;
      items6[1] = tmp39(closure_5, obj11);
      tmp39Result = tmp39(tmp41, obj9);
    }
    cResult[11] = tmp8;
    cResult[12] = tmp16;
    cResult[13] = null != footer;
    cResult[14] = undefined !== isEmptyOrCompleted && isEmptyOrCompleted;
    cResult[15] = replaceHeaderMediaWith;
    cResult[16] = stateFromStores;
    cResult[17] = !(undefined !== isEmptyOrCompleted && isEmptyOrCompleted);
    cResult[18] = tmp5.header;
    cResult[19] = tmp5.headerHeadingContent;
    cResult[20] = tmp5.headerHeadingGroup;
    cResult[21] = tmp5.headerReplaceMedia;
    cResult[22] = tmp5.headerReplaceMediaCta;
    cResult[23] = tmp5.headerRoundedBottom;
    cResult[24] = tmp5.headerTextBox;
    cResult[25] = tmp5.headerTextBoxWithFooter;
    cResult[26] = tmp5.headerTitleSection;
    cResult[27] = tmp5.headerWithFooter;
    cResult[28] = tmp5.newPill;
    cResult[29] = tmp5.newPillInline;
    cResult[30] = tmp5.newPillText;
    cResult[31] = tmp39Result;
  }
  const items9 = [tmp5.bannerClip, null == footer];
  cResult[8] = tmp5.bannerClip;
  cResult[9] = null == footer;
  cResult[10] = items9;
}) : ((bounties) => {
  let containerRef;
  let footer;
  let items10;
  let items11;
  let items12;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj11;
  let obj14;
  let obj39;
  let obj8;
  let replaceHeaderMediaWith;
  let shopCarouselButtonVariant;
  let tmp9Result;
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
  let obj = bounties(14898);
  const bountiesEntryPointButtonVariant = obj.getBountiesEntryPointButtonVariant(shopCarouselButtonVariant);
  let obj2 = bounties(504);
  const items = [AdContentSeenStore];
  const items1 = [bounties];
  let stateFromStores = obj2.useStateFromStores(items, () => bounties.some((id) => !closure_1_7.hasSeen(bounties(closure_1_2[19]).AdCreativeType.BOUNTY, id.id)), items1);
  const items2 = [bounties];
  const callback = react.useCallback(() => {
    const first = bounties[0];
    const obj = AnalyticsActions;
    const obj2 = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, questContent: QuestTypes.QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE, questContentCTA: AnalyticsTypes.QuestContentCTA.START_BOUNTY, sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE, questContentPosition: 0 };
    const result = obj.trackAdContentClicked(obj2);
    const obj3 = BountiesModalActionCreatorsDefault;
    const obj4 = { bountyId: first.id, sourceQuestContent: QuestTypes.QuestContent.VIDEO_MODAL_MOBILE, variant: BountiesModalTypes.BountiesModalVariant.VERTICAL_SCROLL };
    obj3.showModal(obj4);
  }, items2);
  let obj3 = { ref: containerRef, style: tmp.container, children: items11 };
  const items3 = [tmp.bannerClip, ];
  let headerRoundedBottom = tmp12;
  if (!tmp9Result2) {
    headerRoundedBottom = tmp.headerRoundedBottom;
  }
  let obj4 = { style: items3, children: tmp9Result };
  items3[1] = headerRoundedBottom;
  if (null != replaceHeaderMediaWith) {
    const items4 = [tmp.headerReplaceMedia, ];
    let headerRoundedBottom3 = tmp12;
    if (!tmp9Result2) {
      headerRoundedBottom3 = tmp.headerRoundedBottom;
    }
    const obj6 = { style: items4, children: items5 };
    items4[1] = headerRoundedBottom3;
    items5 = [closure_10(closure_17, {}), , , ];
    const obj7 = { style: tmp.headerTitleSection, children: closure_11(closure_5, obj8) };
    obj8 = { style: tmp.headerHeadingGroup, children: items6 };
    if (stateFromStores) {
      const obj9 = { variant: "text-xs/bold", containerStyle: null, textStyle: null };
      ({ newPillInline: obj12.containerStyle, newPillText: obj12.textStyle } = tmp);
      stateFromStores = closure_10(tmp4(1188).NewTag, obj9);
    }
    items6 = [stateFromStores, ];
    const obj10 = { style: tmp.headerHeadingContent, children: closure_10(closure_19, obj11) };
    obj11 = { isEmptyOrCompleted: flag, inlineLearnMore: true };
    items6[1] = closure_10(closure_5, obj10);
    items5[1] = closure_10(closure_5, obj7);
    items5[2] = replaceHeaderMediaWith;
    let tmp11Result = tmp11Result6;
    if (!flag) {
      tmp11Result = tmp12;
    }
    if (tmp11Result) {
      const obj13 = { style: tmp.headerReplaceMediaCta, children: closure_10(closure_18, obj14) };
      obj14 = { variant: bountiesEntryPointButtonVariant, onPress: callback };
      tmp11Result = closure_10(closure_5, obj13);
    }
    items5[3] = tmp11Result;
    tmp9Result = closure_11(closure_5, obj6);
  } else {
    const obj15 = { uri: _modDef14900, style: items7, children: items8 };
    items7 = [tmp.header, tmp9Result2 && tmp.headerWithFooter, ];
    let headerRoundedBottom2 = tmp12;
    const tmp26 = BountiesBannerBackgroundDefault;
    if (!tmp9Result2) {
      headerRoundedBottom2 = tmp.headerRoundedBottom;
    }
    items7[2] = headerRoundedBottom2;
    let tmp11Result4 = stateFromStores;
    if (tmp11Result4) {
      const obj16 = { variant: "text-xs/bold", containerStyle: null, textStyle: null };
      ({ newPill: obj5.containerStyle, newPillText: obj5.textStyle } = tmp);
      tmp11Result4 = closure_10(tmp4(1188).NewTag, obj16);
    }
    items8 = [tmp11Result4, ];
    const items9 = [tmp.headerTextBox, ];
    const obj17 = { style: items9, children: items10 };
    const tmp14 = tmp9Result2 && tmp.headerTextBoxWithFooter;
    items9[1] = tmp14;
    const obj18 = { isEmptyOrCompleted: flag };
    items10 = [closure_10(closure_19, obj18), ];
    let tmp11Result5 = tmp11Result6;
    if (!flag) {
      tmp11Result5 = tmp12;
    }
    if (tmp11Result5) {
      const obj19 = { variant: bountiesEntryPointButtonVariant, onPress: callback };
      tmp11Result5 = closure_10(closure_18, obj19);
    }
    items10[1] = tmp11Result5;
    items8[1] = closure_11(closure_5, obj17);
    tmp9Result = closure_11(tmp26, obj15);
  }
  items11 = [closure_10(closure_5, obj4), ];
  if (tmp9Result2) {
    const obj20 = { style: tmp.footerClip, children: items12 };
    items12 = [closure_10(closure_17, {}), footer, ];
    if (!flag) {
      const obj38 = { style: tmp.footerCta, children: closure_10(closure_18, obj39) };
      obj39 = { variant: bountiesEntryPointButtonVariant, onPress: callback };
      tmp11Result6 = closure_10(closure_5, obj38);
    }
    items12[2] = tmp11Result6;
    tmp9Result2 = closure_11(closure_5, obj20);
  }
  items11[1] = tmp9Result2;
  return closure_11(closure_5, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((isEmptyOrCompleted) => {
  let containerRef;
  let tmp11Result;
  _require = isEmptyOrCompleted;
  let obj = require("react");
  const cResult = obj.c(5);
  const tmp4 = containerRef(14901)();
  containerRef = tmp4.containerRef;
  const isInView = tmp4.isInView;
  isEmptyOrCompleted = isEmptyOrCompleted.isEmptyOrCompleted;
  let tmp5 = undefined !== isEmptyOrCompleted;
  const bounties = isEmptyOrCompleted.bounties;
  if (tmp5) {
    tmp5 = isEmptyOrCompleted;
  }
  let tmp6 = null;
  if (tmp5) {
    let COMPLETED;
    if (0 === bounties.length) {
      COMPLETED = constants.EMPTY;
    } else {
      COMPLETED = constants.COMPLETED;
    }
    tmp6 = COMPLETED;
  }
  const tmpResult = require("AnalyticsHooks");
  const bountyCarouselEmptyStateAnalytics = tmpResult.useBountyCarouselEmptyStateAnalytics(tmp6);
  if (cResult[0] === containerRef) {
    if (cResult[1] === tmp5) {
      if (cResult[2] === isInView) {
        let tmp10;
        if (cResult[3] === isEmptyOrCompleted) {
          tmp10 = cResult[4];
        }
        return tmp10;
      }
    }
  }
  const obj2 = { theme: require("shared/ThemeTypes").ThemeTypes.DARK, children: tmp11Result };
  const ThemeContextProvider = tmp(4595).ThemeContextProvider;
  if (tmp5) {
    const obj3 = { containerRef };
    let merged = Object.assign(isEmptyOrCompleted);
    tmp11Result = closure_10(closure_20, obj3);
  } else {
    const obj4 = {
      adContentId,
      adCreativeType: require("AdCreativeType").AdCreativeType.BOUNTY,
      questContent: require("QuestTypes").QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE,
      questContentPosition: 0,
      overrideVisibility: isInView,
      sourceQuestContent: require("QuestTypes").QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE,
      children() {
          const obj = { containerRef };
          const merged = Object.assign(isEmptyOrCompleted);
          return authStore(closure_20, obj);
        }
    };
    const QuestContentImpressionTrackerNative = tmp(10971).QuestContentImpressionTrackerNative;
    tmp11Result = closure_10(QuestContentImpressionTrackerNative, obj4);
  }
  const tmp11Result2 = closure_10(ThemeContextProvider, obj2);
  cResult[0] = containerRef;
  cResult[1] = tmp5;
  cResult[2] = isInView;
  cResult[3] = isEmptyOrCompleted;
  cResult[4] = tmp11Result2;
  tmp10 = tmp11Result2;
}) : ((isEmptyOrCompleted) => {
  let containerRef;
  let tmp9Result;
  _require = isEmptyOrCompleted;
  const tmp2 = containerRef(14901)();
  containerRef = tmp2.containerRef;
  isEmptyOrCompleted = isEmptyOrCompleted.isEmptyOrCompleted;
  let tmp3 = undefined !== isEmptyOrCompleted;
  const isInView = tmp2.isInView;
  const bounties = isEmptyOrCompleted.bounties;
  if (tmp3) {
    tmp3 = isEmptyOrCompleted;
  }
  let tmp4 = null;
  if (tmp3) {
    let COMPLETED;
    if (0 === bounties.length) {
      COMPLETED = constants.EMPTY;
    } else {
      COMPLETED = constants.COMPLETED;
    }
    tmp4 = COMPLETED;
  }
  let obj = require("AnalyticsHooks");
  const bountyCarouselEmptyStateAnalytics = obj.useBountyCarouselEmptyStateAnalytics(tmp4);
  const obj2 = { theme: require("shared/ThemeTypes").ThemeTypes.DARK, children: tmp9Result };
  const ThemeContextProvider = require("native").ThemeContextProvider;
  if (tmp3) {
    const obj3 = { containerRef };
    let merged = Object.assign(isEmptyOrCompleted);
    tmp9Result = closure_10(closure_20, obj3);
  } else {
    const obj4 = {
      adContentId,
      adCreativeType: require("AdCreativeType").AdCreativeType.BOUNTY,
      questContent: require("QuestTypes").QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE,
      questContentPosition: 0,
      overrideVisibility: isInView,
      sourceQuestContent: require("QuestTypes").QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE,
      children() {
          const obj = { containerRef };
          const merged = Object.assign(isEmptyOrCompleted);
          return authStore(closure_20, obj);
        }
    };
    const QuestContentImpressionTrackerNative = tmp7(10971).QuestContentImpressionTrackerNative;
    tmp9Result = closure_10(QuestContentImpressionTrackerNative, obj4);
  }
  return closure_10(ThemeContextProvider, obj2);
}));
let result = size.fileFinishedImporting("modules/quests/native/BountiesCtaHeader.tsx");

export default memoResult;