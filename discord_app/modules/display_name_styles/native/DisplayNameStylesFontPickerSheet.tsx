// discord_app/modules/display_name_styles/native/DisplayNameStylesFontPickerSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: closure_6 } = get_ActivityIndicator);
const HexagonCampaignConstants = fn(4819);
const HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT = HexagonCampaignConstants.HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT;
({
  HEXAGON_CAMPAIGN_NON_PREMIUM_CUTOFF_AT_MS: closure_8,
  HEXAGON_CAMPAIGN_PREMIUM_CUTOFF_AT_MS: closure_9,
  HexagonCampaignPerk: closure_10,
} = HexagonCampaignConstants);
const Fonts = fn(1082).Fonts;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let result = 3 * nativeDefault.space.PX_8;
const createStyles = fn(4794);
let obj2 = {
  container: { flex: 1 },
  contentContainer: { padding: nativeDefault.space.PX_8, alignItems: "center" },
  gridContainer: { flexWrap: "wrap", maxWidth: 350 },
  fontCard: null,
  fontCardSelected: null,
  fontText: null,
  campaignSection: null,
  campaignContent: null,
  campaignHeader: null,
  campaignCard: null,
  campaignCardSelected: null,
  campaignLogoFrame: null,
  campaignLogo: null,
  campaignName: null,
  campaignNameFallback: null,
  campaignLegal: null,
  tileNewDot: null,
  nonLatinDisclaimer: null,
  disclaimerText: null,
};
let size = {
  width: 79,
  height: 79,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  justifyContent: "center",
  alignItems: "center",
};
obj2.fontCard = size;
let obj3 = { padding: nativeDefault.space.PX_8, alignItems: "center" };
obj2.fontCardSelected = { borderColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
obj2.fontText = { fontSize: 24, lineHeight: 34, textAlign: "center", textAlignVertical: "center" };
let obj4 = { borderColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
obj2.campaignSection = {
  alignSelf: "stretch",
  alignItems: "center",
  paddingTop: nativeDefault.space.PX_8,
  paddingBottom: nativeDefault.space.PX_16,
  marginBottom: nativeDefault.space.PX_20,
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_MUTED,
};
let obj5 = {
  alignSelf: "stretch",
  alignItems: "center",
  paddingTop: nativeDefault.space.PX_8,
  paddingBottom: nativeDefault.space.PX_16,
  marginBottom: nativeDefault.space.PX_20,
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_MUTED,
};
obj2.campaignContent = { width: "100%", maxWidth: 316 + result, gap: nativeDefault.space.PX_8 };
let obj6 = { width: "100%", maxWidth: 316 + result, gap: nativeDefault.space.PX_8 };
obj2.campaignHeader = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
  paddingHorizontal: 2,
};
let obj7 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: 2 };
obj2.campaignCard = {
  height: 64,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
  paddingLeft: nativeDefault.space.PX_8,
  paddingRight: nativeDefault.space.PX_16,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_STRONG,
  overflow: "hidden",
};
let obj8 = {
  height: 64,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
  paddingLeft: nativeDefault.space.PX_8,
  paddingRight: nativeDefault.space.PX_16,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_STRONG,
  overflow: "hidden",
};
obj2.campaignCardSelected = { borderColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
obj2.campaignLogoFrame = { width: 48, height: 48, alignItems: "center", justifyContent: "center" };
obj2.campaignLogo = { width: 32, height: 24 };
obj2.campaignName = {
  flex: 1,
  fontFamily: fn(9336).DISPLAY_NAME_STYLES_FONT_FAMILY_MAP[HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT],
};
obj2.campaignNameFallback = { fontFamily: Fonts.PRIMARY_SEMIBOLD };
obj2.campaignLegal = { paddingHorizontal: 2 };
const size1 = {
  position: "absolute",
  top: nativeDefault.space.PX_8,
  right: nativeDefault.space.PX_8,
  width: nativeDefault.space.PX_8,
  height: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.space.PX_8 / 2,
  backgroundColor: nativeDefault.colors.BADGE_PRIMARY_BACKGROUND,
  shadowColor: nativeDefault.colors.BADGE_PRIMARY_BACKGROUND,
  shadowRadius: nativeDefault.space.PX_4,
  shadowOpacity: 1,
  elevation: 4,
};
obj2.tileNewDot = size1;
let obj9 = { borderColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
obj2.nonLatinDisclaimer = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_12,
  paddingVertical: nativeDefault.space.PX_8,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.sm,
  marginTop: nativeDefault.space.PX_16,
};
obj2.disclaimerText = { flex: 1 };
let closure_14 = createStyles.createStyles(obj2);
size = fn(2);
const result1 = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesFontPickerSheet.tsx");

export default function DisplayNameStylesFontPickerSheet(arg0) {
  ({ selectedFontId, onSelectFont } = arg0);
  ({ displayName, isTryItOut } = arg0);
  if (isTryItOut === undefined) {
    isTryItOut = false;
  }
  let displayNameFontsAvailable;
  _slicedToArray = undefined;
  noop = undefined;
  first = undefined;
  closure_6 = undefined;
  closure_7 = undefined;
  const tmp = closure_14();
  importDefault = tmp;
  displayNameFontsAvailable = onSelectFont(displayNameFontsAvailable[9]).useDisplayNameFontsAvailable();
  let obj = onSelectFont(displayNameFontsAvailable[9]);
  let obj2 = onSelectFont(displayNameFontsAvailable[10]);
  const hexagonCampaignFontPickerSection = onSelectFont(
    displayNameFontsAvailable[11],
  ).useHexagonCampaignFontPickerSection("DisplayNameStylesFontPickerSheet", isTryItOut);
  ({ gridFontOrder, showCampaignSection, visibleFontOrder } = hexagonCampaignFontPickerSection);
  let obj3 = onSelectFont(displayNameFontsAvailable[11]);
  const displayNameStylesNewFonts = onSelectFont(displayNameFontsAvailable[12]).useDisplayNameStylesNewFonts(
    visibleFontOrder,
  );
  ({ dotFontIds: c3, dismissFontDot: c4 } = displayNameStylesNewFonts);
  [first, closure_6] = noop.useState(selectedFontId);
  let obj4 = onSelectFont(displayNameFontsAvailable[12]);
  const tmp9 = closure_7;
  const radioA11yNative = onSelectFont(displayNameFontsAvailable[13]).useRadioA11yNative({ selected: tmp10 });
  const obj5 = onSelectFont(displayNameFontsAvailable[13]);
  closure_7 = tmp13;
  const obj6 = onSelectFont(displayNameFontsAvailable[15]);
  nonPremiumEndDate = noop.useCallback((arg0) => {
    closure_6(arg0);
  }, []);
  items = [first !== selectedFontId, first, onSelectFont];
  const callback = noop.useCallback(() => {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    if (closure_7) {
      onSelectFont(first);
    }
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  const obj7 = {
    ref: obj2.useBottomSheetRef().bottomSheetRef,
    startExpanded: showCampaignSection,
    header: null,
    children: null,
  };
  const obj8 = { title: null, trailing: null };
  const hasNonLatinLettersResult = onSelectFont(displayNameFontsAvailable[15]).hasNonLatinLetters(displayName);
  let intl = onSelectFont(displayNameFontsAvailable[20]).intl;
  obj8.title = intl.string(require("../intl/DisplayNameStyles.messages.js")["0JCuGm"]);
  const obj9 = { text: null, onPress: null, variant: "primary", size: "sm" };
  const intl2 = onSelectFont(displayNameFontsAvailable[20]).intl;
  obj9.text = intl2.string(onSelectFont(displayNameFontsAvailable[20]).t.XqMe3N);
  obj9.onPress = callback;
  obj8.trailing = closure_12(onSelectFont(displayNameFontsAvailable[22]).Button, obj9);
  obj7.header = closure_12(require("DisplayNameStylesSheetHeader"), obj8);
  const obj10 = { style: tmp.container, children: null };
  const obj11 = { style: tmp.contentContainer, children: null };
  if (showCampaignSection) {
    const obj12 = { style: tmp.campaignSection, children: null };
    const obj13 = { style: tmp.campaignContent, children: null };
    const obj14 = { style: tmp.campaignHeader, children: null };
    const obj15 = { variant: "body-sm/semibold", color: "text-subtle", children: null };
    const intl3 = onSelectFont(tmp3[20]).intl;
    obj15.children = intl3.string(tmp16(tmp3[24])["2UCcmW"]);
    let items1 = [closure_12(onSelectFont(tmp3[23]).Text, obj15)];
    const obj16 = { perk: constants.DISPLAY_NAME_STYLE };
    items1[1] = closure_12(tmp16(tmp3[25]), obj16);
    obj14.children = items1;
    let items2 = [closure_13(tmp18, obj14), ,];
    const obj17 = { theme: onSelectFont(tmp3[27]).ThemeTypes.DARK, children: null };
    const obj18 = {
      onPress() {
        return closure_8(HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT);
      },
    };
    const merged = Object.assign(radioA11yNative);
    const intl4 = onSelectFont(tmp3[20]).intl;
    obj18.accessibilityLabel = intl4.string(tmp16(tmp3[28])(tmp9));
    const items3 = [tmp.campaignCard];
    let campaignCardSelected = tmp10;
    if (tmp10) {
      campaignCardSelected = tmp.campaignCardSelected;
    }
    const obj19 = { style: null, children: null };
    items3[1] = campaignCardSelected;
    obj19.style = items3;
    const items4 = [closure_12(tmp16(tmp3[29]), { angle: 166 }), , ,];
    const obj20 = { style: tmp.campaignLogoFrame, children: null };
    const obj21 = { source: tmp16(tmp3[31]), style: tmp.campaignLogo, resizeMode: "contain", accessible: false };
    obj20.children = closure_12(tmp16(tmp3[30]), obj21);
    items4[1] = closure_12(tmp18, obj20);
    const items5 = [tmp.campaignName];
    let campaignNameFallback = !displayNameFontsAvailable;
    if (!displayNameFontsAvailable) {
      campaignNameFallback = tmp.campaignNameFallback;
    }
    const obj22 = { variant: "heading-xl/semibold", color: "text-default", style: null, lineClamp: 1, children: null };
    items5[1] = campaignNameFallback;
    obj22.style = items5;
    obj22.children = displayName;
    items4[2] = closure_12(onSelectFont(tmp3[23]).Text, obj22);
    const obj23 = { selected: tmp10 };
    items4[3] = closure_12(onSelectFont(tmp3[32]).FormRadio, obj23);
    obj19.children = items4;
    obj18.children = closure_13(tmp18, obj19);
    obj17.children = closure_12(closure_6, obj18);
    items2[1] = closure_12(onSelectFont(tmp3[26]).ThemeContextProvider, obj17);
    const obj24 = { variant: "body-xs/medium", color: "text-muted", style: tmp.campaignLegal, children: null };
    const intl5 = onSelectFont(tmp3[20]).intl;
    const obj25 = {
      nonPremiumEndDate,
      premiumEndDate,
      learnMoreHook(children, arg1) {
        return closure_1_12(
          onSelectFont(displayNameFontsAvailable[23]).Text,
          {
            variant: "body-xs/medium",
            color: "text-link",
            accessibilityRole: "link",
            onPress: onSelectFont(displayNameFontsAvailable[33]).openHexagonCampaignLearnMore,
            children,
          },
          arg1,
        );
      },
    };
    obj24.children = intl5.format(tmp16(tmp3[24]).y2YmJv, obj25);
    items2[2] = closure_12(onSelectFont(tmp3[23]).Text, obj24);
    obj13.children = items2;
    obj12.children = closure_13(tmp18, obj13);
    showCampaignSection = closure_12(tmp18, obj12);
    const tmp16Result = tmp16(tmp3[30]);
  }
  let tmp19Result = first !== onSelectFont(displayNameFontsAvailable[14]).DisplayNameFont.DEFAULT;
  const items6 = [showCampaignSection, ,];
  const tmp17 = require("DisplayNameStylesSheetHeader");
  items6[1] = closure_12(onSelectFont(displayNameFontsAvailable[34]).Stack, {
    direction: "horizontal",
    align: "center",
    justify: "center",
    spacing: 8,
    style: tmp.gridContainer,
    children: gridFontOrder.map((item) => {
      closure_0 = item;
      const intl = onSelectFont(displayNameFontsAvailable[20]).intl;
      let PRIMARY_SEMIBOLD = null;
      if (displayNameFontsAvailable) {
        PRIMARY_SEMIBOLD = onSelectFont(displayNameFontsAvailable[6]).DISPLAY_NAME_STYLES_FONT_FAMILY_MAP[item];
      }
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
        accessibilityLabel: intl.string(closure_1(displayNameFontsAvailable[28])(item)),
        accessibilityState: { selected: item === first },
        children: null,
      };
      items = [hasItem.fontCard];
      let fontCardSelected = tmp7;
      if (item === first) {
        fontCardSelected = tmp13.fontCardSelected;
      }
      const obj2 = { style: items, children: null };
      items[1] = fontCardSelected;
      let str = "text-default";
      if (item === first) {
        str = "mobile-text-heading-primary";
      }
      const obj3 = { variant: "body-lg/semibold", color: str, style: null, children: "Gg" };
      const items1 = [hasItem.fontText, { fontFamily: PRIMARY_SEMIBOLD }];
      obj3.style = items1;
      const items2 = [closure_1_12(onSelectFont(displayNameFontsAvailable[23]).Text, obj3)];
      if (hasItem) {
        const obj4 = {
          style: tmp13.tileNewDot,
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants",
        };
        hasItem = closure_1_12(first, obj4);
      }
      items2[1] = hasItem;
      obj2.children = items2;
      obj.children = closure_1_13(first, obj2);
      return closure_1_12(closure_6, obj, item);
    }),
  });
  if (tmp19Result) {
    tmp19Result = hasNonLatinLettersResult;
  }
  if (tmp19Result) {
    const obj27 = { style: tmp.nonLatinDisclaimer, children: null };
    const items7 = [closure_12(onSelectFont(tmp3[35]).CircleInformationIcon, { size: "sm" })];
    const obj28 = { variant: "body-xs/normal", color: "text-subtle", style: tmp.disclaimerText, children: null };
    const intl6 = onSelectFont(tmp3[20]).intl;
    obj28.children = intl6.string(tmp16(tmp3[21])["+O1xL2"]);
    items7[1] = closure_12(onSelectFont(tmp3[23]).Text, obj28);
    obj27.children = items7;
    tmp19Result = closure_13(tmp18, obj27);
  }
  items6[2] = tmp19Result;
  obj11.children = items6;
  obj10.children = closure_13(first, obj11);
  obj7.children = closure_12(first, obj10);
  return closure_12(onSelectFont(displayNameFontsAvailable[18]).BottomSheet, obj7);
}
