// === Module 16661: DisplayNameStylesFontPickerSheet ===

// Module 16661 (DisplayNameStylesFontPickerSheet)
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5208 */;
import HapticUtils from "HapticUtils" /* 5210 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire } = get_ActivityIndicator);
let HEXAGON_CAMPAIGN_FONTS = fn(1410).HEXAGON_CAMPAIGN_FONTS;
const HexagonCampaignConstants = fn(4994);
const HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT = HexagonCampaignConstants.HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT;
({ HEXAGON_CAMPAIGN_NON_PREMIUM_CUTOFF_AT_MS: closure_9, HEXAGON_CAMPAIGN_PREMIUM_CUTOFF_AT_MS: c10, HexagonCampaignPerk: closure_11, HexagonCampaignPerkAvailability: closure_12 } = HexagonCampaignConstants);
const Fonts = fn(1098).Fonts;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let result = 3 * nativeDefault.space.PX_8;
const createStyles = fn(4969);
let obj2 = { container: { flex: 1 }, contentContainer: { padding: nativeDefault.space.PX_8, alignItems: "center" }, gridContainer: { flexWrap: "wrap", maxWidth: 350 }, fontCard: null, fontCardSelected: null, fontText: null, campaignSection: null, campaignContent: null, campaignHeader: null, campaignCard: null, campaignCardSelected: null, campaignLogoFrame: null, campaignLogo: null, campaignName: null, campaignLegal: null, tileNewDot: null, nonLatinDisclaimer: null, disclaimerText: null };
let size = { width: 79, height: 79, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, justifyContent: "center", alignItems: "center" };
obj2.fontCard = size;
let obj3 = { padding: nativeDefault.space.PX_8, alignItems: "center" };
obj2.fontCardSelected = { borderColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
obj2.fontText = { fontSize: 24, lineHeight: 34, textAlign: "center", textAlignVertical: "center" };
let obj4 = { borderColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
obj2.campaignSection = { alignSelf: "stretch", alignItems: "center", paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_20, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_MUTED };
let obj5 = { alignSelf: "stretch", alignItems: "center", paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_20, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_MUTED };
obj2.campaignContent = { width: "100%", maxWidth: 316 + result, gap: nativeDefault.space.PX_8 };
let obj6 = { width: "100%", maxWidth: 316 + result, gap: nativeDefault.space.PX_8 };
obj2.campaignHeader = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: 2 };
let obj7 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: 2 };
obj2.campaignCard = { height: 64, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingLeft: nativeDefault.space.PX_8, paddingRight: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG, overflow: "hidden" };
let obj8 = { height: 64, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingLeft: nativeDefault.space.PX_8, paddingRight: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG, overflow: "hidden" };
obj2.campaignCardSelected = { borderColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
obj2.campaignLogoFrame = { width: 48, height: 48, alignItems: "center", justifyContent: "center" };
obj2.campaignLogo = { width: 32, height: 24 };
obj2.campaignName = { flex: 1, fontFamily: fn(9220).DISPLAY_NAME_STYLES_FONT_FAMILY_MAP[HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT] };
obj2.campaignLegal = { paddingHorizontal: 2 };
const size1 = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8, width: nativeDefault.space.PX_8, height: nativeDefault.space.PX_8, borderRadius: nativeDefault.space.PX_8 / 2, backgroundColor: nativeDefault.colors.BADGE_PRIMARY_BACKGROUND, shadowColor: nativeDefault.colors.BADGE_PRIMARY_BACKGROUND, shadowRadius: nativeDefault.space.PX_4, shadowOpacity: 1, elevation: 4 };
obj2.tileNewDot = size1;
let obj9 = { borderColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
obj2.nonLatinDisclaimer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.sm, marginTop: nativeDefault.space.PX_16 };
obj2.disclaimerText = { flex: 1 };
let closure_16 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj10 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.sm, marginTop: nativeDefault.space.PX_16 };
size = fn(2);
const result1 = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesFontPickerSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function DisplayNameStylesFontPickerSheet(displayName) {
  const cResult = onSelectFont(dotFontIds[11]).c(73);
  ({ selectedFontId, onSelectFont } = displayName);
  displayName = displayName.displayName;
  let obj = onSelectFont(dotFontIds[11]);
  closure_1 = closure_16();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    function learnMoreHook(children, arg1) {
      return closure_1_14(onSelectFont(dotFontIds[12]).Text, { variant: "text-xs/medium", color: "text-link", accessibilityRole: "link", onPress: onSelectFont(dotFontIds[13]).openHexagonCampaignLearnMore, children }, arg1);
    }
    cResult[0] = learnMoreHook;
    let first = learnMoreHook;
  } else {
    first = cResult[0];
  }
  const tmp4 = closure_16();
  const bottomSheetRef = onSelectFont(dotFontIds[14]).useBottomSheetRef().bottomSheetRef;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { includeCampaignFonts: true };
    cResult[1] = obj2;
    let tmp6 = obj2;
  } else {
    tmp6 = cResult[1];
  }
  const tmpResult = onSelectFont(dotFontIds[14]);
  const visibleFontOrder = onSelectFont(dotFontIds[15]).useVisibleFontOrder(tmp6);
  const tmpResult5 = onSelectFont(dotFontIds[15]);
  const displayNameStylesNewFonts = onSelectFont(dotFontIds[16]).useDisplayNameStylesNewFonts(visibleFontOrder);
  dotFontIds = displayNameStylesNewFonts.dotFontIds;
  const dismissFontDot = displayNameStylesNewFonts.dismissFontDot;
  const tmpResult6 = onSelectFont(dotFontIds[16]);
  const tmp8 = onSelectFont(dotFontIds[17]).useHexagonCampaignPerkAvailability(constants.DISPLAY_NAME_STYLE, "DisplayNameStylesFontPickerSheet") === constants2.SELECTABLE;
  if (cResult[2] === tmp8) {
    if (cResult[5] !== visibleFontOrder) {
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor(arg0) {
            return !closure_7.includes(displayName);
          }
        }
        cResult[7] = B;
      } else {
        class B {
          constructor(arg0) {
            return !closure_7.includes(displayName);
          }
        }
      }
      const found = visibleFontOrder.filter(B);
      cResult[5] = visibleFontOrder;
      cResult[6] = found;
    } else {
      class B {
        constructor(arg0) {
          return !closure_7.includes(displayName);
        }
      }
      const tmp16 = dismissFontDot(first1.useState(selectedFontId), 2);
      first1 = tmp16[0];
      closure_5 = tmp16[1];
      if (cResult[8] !== (first1 === HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT)) {
        class B {
          constructor(arg0) {
            return !closure_7.includes(displayName);
          }
        }
        tmp21[0] = tmp19;
        cResult[8] = tmp19;
        cResult[9] = tmp21;
      } else {
        class B {
          constructor(arg0) {
            return !closure_7.includes(displayName);
          }
        }
      }
      const radioA11yNative = onSelectFont(tmp2[18]).useRadioA11yNative(tmp21);
      const DEFAULT = onSelectFont(tmp2[19]).DisplayNameFont.DEFAULT;
      if (cResult[10] !== displayName) {
        class B {
          constructor(arg0) {
            return !closure_7.includes(displayName);
          }
        }
        const hasNonLatinLettersResult = obj8.hasNonLatinLetters(displayName);
        cResult[10] = displayName;
        cResult[11] = hasNonLatinLettersResult;
      } else {
        class B {
          constructor(arg0) {
            return !closure_7.includes(displayName);
          }
        }
      }
      closure_6 = tmp25;
      const _Symbol2 = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor(arg0) {
            return !closure_7.includes(displayName);
          }
        }
        cResult[12] = tmp27;
      } else {
        class B {
          constructor(arg0) {
            return !closure_7.includes(displayName);
          }
        }
      }
      HEXAGON_CAMPAIGN_FONTS = tmp27;
      if (cResult[13] === first1 !== selectedFontId) {
        class B {
          constructor(arg0) {
            return !closure_7.includes(displayName);
          }
        }
      }
      const fn = function $() {
        const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
        if (closure_6) {
          onSelectFont(first1);
        }
        ActionSheetActionCreatorsDefault.hideActionSheet();
      };
      cResult[13] = first1 !== selectedFontId;
      cResult[14] = first1;
      cResult[15] = onSelectFont;
      cResult[16] = fn;
      const tmpResult8 = onSelectFont(tmp2[18]);
    }
  }
  let hasItem = tmp8;
  if (tmp8) {
    class B {
      constructor(arg0) {
        return !closure_7.includes(displayName);
      }
    }
    hasItem = visibleFontOrder.includes(HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT);
  }
  cResult[2] = tmp8;
  cResult[3] = visibleFontOrder;
  cResult[4] = hasItem;
  const tmpResult7 = onSelectFont(dotFontIds[17]);
}) : (function DisplayNameStylesFontPickerSheet(displayName) {
  ({ selectedFontId, onSelectFont } = displayName);
  displayName = displayName.displayName;
  let visibleFontOrder;
  _slicedToArray = undefined;
  noop = undefined;
  first = undefined;
  closure_6 = undefined;
  closure_7 = undefined;
  closure_8 = undefined;
  const tmp = closure_16();
  importDefault = tmp;
  let obj = onSelectFont(visibleFontOrder[14]);
  visibleFontOrder = onSelectFont(visibleFontOrder[15]).useVisibleFontOrder({ includeCampaignFonts: true });
  let obj2 = onSelectFont(visibleFontOrder[15]);
  const displayNameStylesNewFonts = onSelectFont(visibleFontOrder[16]).useDisplayNameStylesNewFonts(visibleFontOrder);
  ({ dotFontIds: c3, dismissFontDot: c4 } = displayNameStylesNewFonts);
  let obj4 = onSelectFont(visibleFontOrder[16]);
  let hasItem = onSelectFont(visibleFontOrder[17]).useHexagonCampaignPerkAvailability(constants.DISPLAY_NAME_STYLE, "DisplayNameStylesFontPickerSheet") === constants2.SELECTABLE;
  if (hasItem) {
    hasItem = visibleFontOrder.includes(closure_8);
  }
  let items = [visibleFontOrder];
  const memo = noop.useMemo(() => visibleFontOrder.filter((item) => !closure_1_7.includes(item)), items);
  [first, closure_6] = noop.useState(selectedFontId);
  const obj5 = onSelectFont(visibleFontOrder[17]);
  const tmp10 = closure_8;
  const radioA11yNative = onSelectFont(visibleFontOrder[18]).useRadioA11yNative({ selected: tmp11 });
  const tmp2Result = onSelectFont(visibleFontOrder[18]);
  closure_7 = tmp14;
  const tmp2Result2 = onSelectFont(visibleFontOrder[20]);
  closure_8 = noop.useCallback((arg0) => {
    closure_6(arg0);
  }, []);
  let items1 = [first !== selectedFontId, first, onSelectFont];
  const callback = noop.useCallback(() => {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    if (closure_7) {
      onSelectFont(first);
    }
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items1);
  let obj3 = { ref: obj.useBottomSheetRef().bottomSheetRef, startExpanded: hasItem, header: null, children: null };
  const obj6 = { title: null, trailing: null };
  const hasNonLatinLettersResult = onSelectFont(visibleFontOrder[20]).hasNonLatinLetters(displayName);
  let intl = onSelectFont(tmp3[23]).intl;
  obj6.title = intl.string(require("module_2928")["0JCuGm"]);
  const obj7 = { text: null, onPress: null, variant: "primary", size: "sm" };
  const intl2 = onSelectFont(tmp3[23]).intl;
  obj7.text = intl2.string(onSelectFont(visibleFontOrder[23]).t.XqMe3N);
  obj7.onPress = callback;
  obj6.trailing = closure_14(onSelectFont(visibleFontOrder[26]).Button, obj7);
  obj3.header = closure_14(require("DisplayNameStylesSheetHeader"), obj6);
  const obj8 = { style: tmp.container, children: null };
  const obj9 = { style: tmp.contentContainer, children: null };
  if (hasItem) {
    const obj10 = { style: tmp.campaignSection, children: null };
    const obj11 = { style: tmp.campaignContent, children: null };
    const obj12 = { style: tmp.campaignHeader, children: null };
    const obj13 = { variant: "text-sm/semibold", color: "text-subtle", children: null };
    const intl3 = onSelectFont(tmp3[23]).intl;
    obj13.children = intl3.string(onSelectFont(tmp3[23]).t["2UCcmW"]);
    let items2 = [closure_14(onSelectFont(tmp3[12]).Text, obj13), ];
    const obj14 = { perk: constants.DISPLAY_NAME_STYLE };
    items2[1] = closure_14(tmp17(tmp3[27]), obj14);
    obj12.children = items2;
    const items3 = [closure_15(tmp19, obj12), , ];
    const obj15 = { theme: onSelectFont(tmp3[29]).ThemeTypes.DARK, children: null };
    const obj16 = {
      onPress() {
          return closure_8(HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT);
        }
    };
    const merged = Object.assign(radioA11yNative);
    const intl4 = onSelectFont(tmp3[23]).intl;
    obj16.accessibilityLabel = intl4.string(tmp17(tmp3[30])(tmp10));
    const items4 = [tmp.campaignCard, ];
    let campaignCardSelected = tmp11;
    if (tmp11) {
      campaignCardSelected = tmp.campaignCardSelected;
    }
    const obj17 = { style: null, children: null };
    items4[1] = campaignCardSelected;
    obj17.style = items4;
    const items5 = [closure_14(tmp17(tmp3[31]), { angle: 166 }), , , ];
    const obj18 = { style: tmp.campaignLogoFrame, children: null };
    const obj19 = { source: tmp17(tmp3[33]), style: tmp.campaignLogo, resizeMode: "contain", accessible: false };
    obj18.children = closure_14(tmp17(tmp3[32]), obj19);
    items5[1] = closure_14(tmp19, obj18);
    const obj20 = { variant: "heading-xl/semibold", color: "text-default", style: tmp.campaignName, lineClamp: 1, children: displayName };
    items5[2] = closure_14(onSelectFont(tmp3[12]).Text, obj20);
    const obj21 = { selected: tmp11 };
    items5[3] = closure_14(onSelectFont(tmp3[34]).FormRadio, obj21);
    obj17.children = items5;
    obj16.children = closure_15(tmp19, obj17);
    obj15.children = closure_14(closure_6, obj16);
    items3[1] = closure_14(onSelectFont(tmp3[28]).ThemeContextProvider, obj15);
    const obj22 = { variant: "text-xs/medium", color: "text-muted", style: tmp.campaignLegal, children: null };
    const intl5 = onSelectFont(tmp3[23]).intl;
    const obj23 = {
      nonPremiumEndDate,
      premiumEndDate,
      learnMoreHook(children, arg1) {
          return closure_1_14(onSelectFont(visibleFontOrder[12]).Text, { variant: "text-xs/medium", color: "text-link", accessibilityRole: "link", onPress: onSelectFont(visibleFontOrder[13]).openHexagonCampaignLearnMore, children }, arg1);
        }
    };
    obj22.children = intl5.format(onSelectFont(tmp3[23]).t.y2YmJv, obj23);
    items3[2] = closure_14(onSelectFont(tmp3[12]).Text, obj22);
    obj11.children = items3;
    obj10.children = closure_15(tmp19, obj11);
    hasItem = closure_14(tmp19, obj10);
    const tmp17Result = tmp17(tmp3[32]);
  }
  let tmp20Result = first !== onSelectFont(tmp3[19]).DisplayNameFont.DEFAULT;
  const items6 = [hasItem, , ];
  const tmp18 = require("DisplayNameStylesSheetHeader");
  items6[1] = closure_14(onSelectFont(visibleFontOrder[35]).Stack, {
    direction: "horizontal",
    align: "center",
    justify: "center",
    spacing: 8,
    style: tmp.gridContainer,
    children: memo.map((item) => {
      closure_0 = item;
      const intl = onSelectFont(visibleFontOrder[23]).intl;
      let PRIMARY_SEMIBOLD = onSelectFont(visibleFontOrder[7]).DISPLAY_NAME_STYLES_FONT_FAMILY_MAP[item];
      if (PRIMARY_SEMIBOLD == null) {
        PRIMARY_SEMIBOLD = constants.PRIMARY_SEMIBOLD;
      }
      let hasItem = _undefined.has(item);
      const obj = {
        onPress() {
          closure_8(closure_0);
          if (hasItem) {
            c4(closure_0);
          }
        },
        accessibilityRole: "button",
        accessibilityLabel: intl.string(closure_1(visibleFontOrder[30])(item)),
        accessibilityState: { selected: item === first },
        children: null
      };
      const items = [hasItem.fontCard, ];
      let fontCardSelected = tmp6;
      if (item === first) {
        fontCardSelected = tmp12.fontCardSelected;
      }
      const obj2 = { style: items, children: null };
      items[1] = fontCardSelected;
      let str = "text-default";
      if (item === first) {
        str = "mobile-text-heading-primary";
      }
      const obj3 = { variant: "text-lg/semibold", color: str, style: null, children: "Gg" };
      const items1 = [hasItem.fontText, { fontFamily: PRIMARY_SEMIBOLD }];
      obj3.style = items1;
      const items2 = [closure_1_14(onSelectFont(visibleFontOrder[12]).Text, obj3), ];
      if (hasItem) {
        const obj4 = { style: tmp12.tileNewDot, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
        hasItem = closure_1_14(first, obj4);
      }
      items2[1] = hasItem;
      obj2.children = items2;
      obj.children = closure_1_15(first, obj2);
      return closure_1_14(closure_6, obj, item);
    })
  });
  if (tmp20Result) {
    tmp20Result = hasNonLatinLettersResult;
  }
  if (tmp20Result) {
    const obj25 = { style: tmp.nonLatinDisclaimer, children: null };
    const items7 = [closure_14(onSelectFont(tmp3[36]).CircleInformationIcon, { size: "sm" }), ];
    const obj26 = { variant: "text-xs/normal", color: "text-subtle", style: tmp.disclaimerText, children: null };
    const intl6 = onSelectFont(tmp3[23]).intl;
    obj26.children = intl6.string(tmp17(tmp3[24])["+O1xL2"]);
    items7[1] = closure_14(onSelectFont(tmp3[12]).Text, obj26);
    obj25.children = items7;
    tmp20Result = closure_15(tmp19, obj25);
  }
  items6[2] = tmp20Result;
  obj9.children = items6;
  obj8.children = closure_15(first, obj9);
  obj3.children = closure_14(first, obj8);
  return closure_14(onSelectFont(visibleFontOrder[37]).BottomSheet, obj3);
});