// === Module 17262: DisplayNameStylesFontPickerSheet ===

// Module 17262 (DisplayNameStylesFontPickerSheet)
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import HapticUtils from "HapticUtils" /* 5255 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire } = get_ActivityIndicator);
const HEXAGON_CAMPAIGN_FONTS = fn(1402).HEXAGON_CAMPAIGN_FONTS;
const HexagonCampaignConstants = fn(5034);
const HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT = HexagonCampaignConstants.HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT;
({ HEXAGON_CAMPAIGN_NON_PREMIUM_CUTOFF_AT_MS: closure_9, HEXAGON_CAMPAIGN_PREMIUM_CUTOFF_AT_MS: c10, HexagonCampaignPerk: closure_11, HexagonCampaignPerkAvailability: closure_12 } = HexagonCampaignConstants);
const Fonts = fn(1083).Fonts;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let result = 3 * nativeDefault.space.PX_8;
const createStyles = fn(5009);
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
obj2.campaignName = { flex: 1, fontFamily: fn(9271).DISPLAY_NAME_STYLES_FONT_FAMILY_MAP[HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT] };
obj2.campaignLegal = { paddingHorizontal: 2 };
const size1 = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8, width: nativeDefault.space.PX_8, height: nativeDefault.space.PX_8, borderRadius: nativeDefault.space.PX_8 / 2, backgroundColor: nativeDefault.colors.BADGE_PRIMARY_BACKGROUND, shadowColor: nativeDefault.colors.BADGE_PRIMARY_BACKGROUND, shadowRadius: nativeDefault.space.PX_4, shadowOpacity: 1, elevation: 4 };
obj2.tileNewDot = size1;
let obj9 = { borderColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
obj2.nonLatinDisclaimer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.sm, marginTop: nativeDefault.space.PX_16 };
obj2.disclaimerText = { flex: 1 };
let closure_16 = createStyles.createStyles(obj2);
size = fn(2);
const result1 = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesFontPickerSheet.tsx");

export default function DisplayNameStylesFontPickerSheet(arg0) {
  ({ selectedFontId, onSelectFont } = arg0);
  ({ displayName, isTryItOut } = arg0);
  if (isTryItOut === undefined) {
    isTryItOut = false;
  }
  let visibleFontOrder;
  _slicedToArray = undefined;
  noop = undefined;
  first = undefined;
  closure_6 = undefined;
  closure_7 = undefined;
  closure_8 = undefined;
  const tmp = closure_16();
  importDefault = tmp;
  let obj = onSelectFont(visibleFontOrder[10]);
  visibleFontOrder = onSelectFont(visibleFontOrder[11]).useVisibleFontOrder({ includeCampaignFonts: true });
  let obj2 = onSelectFont(visibleFontOrder[11]);
  const displayNameStylesNewFonts = onSelectFont(visibleFontOrder[12]).useDisplayNameStylesNewFonts(visibleFontOrder);
  ({ dotFontIds: c3, dismissFontDot: c4 } = displayNameStylesNewFonts);
  let obj4 = onSelectFont(visibleFontOrder[12]);
  let hasItem = onSelectFont(visibleFontOrder[13]).useHexagonCampaignPerkAvailability(constants.DISPLAY_NAME_STYLE, "DisplayNameStylesFontPickerSheet") === constants2.SELECTABLE;
  if (hasItem) {
    hasItem = visibleFontOrder.includes(closure_8);
  }
  const obj5 = onSelectFont(visibleFontOrder[13]);
  let tmp8 = hasItem;
  if (hasItem) {
    tmp8 = !isTryItOut;
  }
  const trackHexagonCampaignContentViewed = onSelectFont(visibleFontOrder[14]).useTrackHexagonCampaignContentViewed(onSelectFont(tmp3[15]).QuestContent.DISPLAY_NAME_STYLES_SETTINGS, onSelectFont(tmp3[14]).HexagonCampaignContentSurface.FONT_PICKER, tmp8);
  let items = [visibleFontOrder];
  const memo = noop.useMemo(() => visibleFontOrder.filter((item) => !closure_1_7.includes(item)), items);
  [first, closure_6] = noop.useState(selectedFontId);
  const tmp12 = closure_8;
  const tmp2Result = onSelectFont(visibleFontOrder[14]);
  const radioA11yNative = onSelectFont(visibleFontOrder[16]).useRadioA11yNative({ selected: tmp13 });
  const tmp2Result3 = onSelectFont(visibleFontOrder[16]);
  closure_7 = tmp16;
  const tmp2Result4 = onSelectFont(visibleFontOrder[18]);
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
  const hasNonLatinLettersResult = onSelectFont(visibleFontOrder[18]).hasNonLatinLetters(displayName);
  let intl = onSelectFont(tmp3[23]).intl;
  obj6.title = intl.string(require("module_2931")["0JCuGm"]);
  const obj7 = { text: null, onPress: null, variant: "primary", size: "sm" };
  const intl2 = onSelectFont(tmp3[23]).intl;
  obj7.text = intl2.string(onSelectFont(visibleFontOrder[23]).t.XqMe3N);
  obj7.onPress = callback;
  obj6.trailing = closure_14(onSelectFont(visibleFontOrder[25]).Button, obj7);
  obj3.header = closure_14(require("DisplayNameStylesSheetHeader"), obj6);
  const obj8 = { style: tmp.container, children: null };
  const obj9 = { style: tmp.contentContainer, children: null };
  if (hasItem) {
    const obj10 = { style: tmp.campaignSection, children: null };
    const obj11 = { style: tmp.campaignContent, children: null };
    const obj12 = { style: tmp.campaignHeader, children: null };
    const obj13 = { variant: "text-sm/semibold", color: "text-subtle", children: null };
    const intl3 = onSelectFont(tmp3[23]).intl;
    obj13.children = intl3.string(tmp19(tmp3[27])["2UCcmW"]);
    let items2 = [closure_14(onSelectFont(tmp3[26]).Text, obj13), ];
    const obj14 = { perk: constants.DISPLAY_NAME_STYLE };
    items2[1] = closure_14(tmp19(tmp3[28]), obj14);
    obj12.children = items2;
    const items3 = [closure_15(tmp21, obj12), , ];
    const obj15 = { theme: onSelectFont(tmp3[30]).ThemeTypes.DARK, children: null };
    const obj16 = {
      onPress() {
          return closure_8(HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT);
        }
    };
    const merged = Object.assign(radioA11yNative);
    const intl4 = onSelectFont(tmp3[23]).intl;
    obj16.accessibilityLabel = intl4.string(tmp19(tmp3[31])(tmp12));
    const items4 = [tmp.campaignCard, ];
    let campaignCardSelected = tmp13;
    if (tmp13) {
      campaignCardSelected = tmp.campaignCardSelected;
    }
    const obj17 = { style: null, children: null };
    items4[1] = campaignCardSelected;
    obj17.style = items4;
    const items5 = [closure_14(tmp19(tmp3[32]), { angle: 166 }), , , ];
    const obj18 = { style: tmp.campaignLogoFrame, children: null };
    const obj19 = { source: tmp19(tmp3[34]), style: tmp.campaignLogo, resizeMode: "contain", accessible: false };
    obj18.children = closure_14(tmp19(tmp3[33]), obj19);
    items5[1] = closure_14(tmp21, obj18);
    const obj20 = { variant: "heading-xl/semibold", color: "text-default", style: tmp.campaignName, lineClamp: 1, children: displayName };
    items5[2] = closure_14(onSelectFont(tmp3[26]).Text, obj20);
    const obj21 = { selected: tmp13 };
    items5[3] = closure_14(onSelectFont(tmp3[35]).FormRadio, obj21);
    obj17.children = items5;
    obj16.children = closure_15(tmp21, obj17);
    obj15.children = closure_14(closure_6, obj16);
    items3[1] = closure_14(onSelectFont(tmp3[29]).ThemeContextProvider, obj15);
    const obj22 = { variant: "text-xs/medium", color: "text-muted", style: tmp.campaignLegal, children: null };
    const intl5 = onSelectFont(tmp3[23]).intl;
    const obj23 = {
      nonPremiumEndDate,
      premiumEndDate,
      learnMoreHook(children, arg1) {
          return closure_1_14(onSelectFont(visibleFontOrder[26]).Text, { variant: "text-xs/medium", color: "text-link", accessibilityRole: "link", onPress: onSelectFont(visibleFontOrder[36]).openHexagonCampaignLearnMore, children }, arg1);
        }
    };
    obj22.children = intl5.format(tmp19(tmp3[27]).y2YmJv, obj23);
    items3[2] = closure_14(onSelectFont(tmp3[26]).Text, obj22);
    obj11.children = items3;
    obj10.children = closure_15(tmp21, obj11);
    hasItem = closure_14(tmp21, obj10);
    const tmp19Result = tmp19(tmp3[33]);
  }
  let tmp22Result = first !== onSelectFont(tmp3[17]).DisplayNameFont.DEFAULT;
  const items6 = [hasItem, , ];
  const tmp20 = require("DisplayNameStylesSheetHeader");
  items6[1] = closure_14(onSelectFont(visibleFontOrder[37]).Stack, {
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
        accessibilityLabel: intl.string(closure_1(visibleFontOrder[31])(item)),
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
      const items2 = [closure_1_14(onSelectFont(visibleFontOrder[26]).Text, obj3), ];
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
  if (tmp22Result) {
    tmp22Result = hasNonLatinLettersResult;
  }
  if (tmp22Result) {
    const obj25 = { style: tmp.nonLatinDisclaimer, children: null };
    const items7 = [closure_14(onSelectFont(tmp3[38]).CircleInformationIcon, { size: "sm" }), ];
    const obj26 = { variant: "text-xs/normal", color: "text-subtle", style: tmp.disclaimerText, children: null };
    const intl6 = onSelectFont(tmp3[23]).intl;
    obj26.children = intl6.string(tmp19(tmp3[24])["+O1xL2"]);
    items7[1] = closure_14(onSelectFont(tmp3[26]).Text, obj26);
    obj25.children = items7;
    tmp22Result = closure_15(tmp21, obj25);
  }
  items6[2] = tmp22Result;
  obj9.children = items6;
  obj8.children = closure_15(first, obj9);
  obj3.children = closure_14(first, obj8);
  return closure_14(onSelectFont(visibleFontOrder[21]).BottomSheet, obj3);
};