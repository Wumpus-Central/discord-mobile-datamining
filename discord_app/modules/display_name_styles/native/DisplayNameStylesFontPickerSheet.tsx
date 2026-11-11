// discord_app/modules/display_name_styles/native/DisplayNameStylesFontPickerSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3077 from "../intl/DisplayNameStyles.messages.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import DisplayNameStylesSheetHeaderDefault from "DisplayNameStylesSheetHeader.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: closure_6 } = get_ActivityIndicator);
const HexagonCampaignConstants = fn(5268);
const HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT = HexagonCampaignConstants.HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT;
({
  HEXAGON_CAMPAIGN_NON_PREMIUM_CUTOFF_AT_MS: closure_8,
  HEXAGON_CAMPAIGN_PREMIUM_CUTOFF_AT_MS: closure_9,
  HexagonCampaignPerk: closure_10,
} = HexagonCampaignConstants);
const Fonts = fn(1083).Fonts;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let result = 3 * nativeDefault.space.PX_8;
const createStyles = fn(5243);
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
  fontFamily: fn(10000).DISPLAY_NAME_STYLES_FONT_FAMILY_MAP[HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT],
};
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
  dependencyMap = undefined;
  _slicedToArray = undefined;
  first = undefined;
  closure_5 = undefined;
  closure_7 = undefined;
  const tmp = closure_14();
  importDefault = tmp;
  let obj = onSelectFont(8493);
  const hexagonCampaignFontPickerSection = onSelectFont(17845).useHexagonCampaignFontPickerSection(
    "DisplayNameStylesFontPickerSheet",
    isTryItOut,
  );
  ({ gridFontOrder, showCampaignSection, visibleFontOrder } = hexagonCampaignFontPickerSection);
  let obj2 = onSelectFont(17845);
  const displayNameStylesNewFonts = onSelectFont(17843).useDisplayNameStylesNewFonts(visibleFontOrder);
  ({ dotFontIds: c2, dismissFontDot: c3 } = displayNameStylesNewFonts);
  [first, closure_5] = first.useState(selectedFontId);
  let obj3 = onSelectFont(17843);
  const tmp8 = closure_7;
  const radioA11yNative = onSelectFont(5315).useRadioA11yNative({ selected: tmp9 });
  let obj4 = onSelectFont(5315);
  closure_6 = tmp12;
  const obj5 = onSelectFont(1393);
  closure_7 = first.useCallback((arg0) => {
    closure_5(arg0);
  }, []);
  items = [first !== selectedFontId, first, onSelectFont];
  const callback = first.useCallback(() => {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    if (closure_6) {
      onSelectFont(first);
    }
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  const obj6 = {
    ref: obj.useBottomSheetRef().bottomSheetRef,
    startExpanded: showCampaignSection,
    header: null,
    children: null,
  };
  const obj7 = { title: null, trailing: null };
  const hasNonLatinLettersResult = onSelectFont(1393).hasNonLatinLetters(displayName);
  let intl = onSelectFont(1113).intl;
  obj7.title = intl.string(_modDef3077["0JCuGm"]);
  const obj8 = { text: null, onPress: null, variant: "primary", size: "sm" };
  const intl2 = onSelectFont(1113).intl;
  obj8.text = intl2.string(onSelectFont(1113).t.XqMe3N);
  obj8.onPress = callback;
  obj7.trailing = closure_12(onSelectFont(5873).Button, obj8);
  obj6.header = closure_12(DisplayNameStylesSheetHeaderDefault, obj7);
  const obj9 = { style: tmp.container, children: null };
  const obj10 = { style: tmp.contentContainer, children: null };
  if (showCampaignSection) {
    const obj11 = { style: tmp.campaignSection, children: null };
    const obj12 = { style: tmp.campaignContent, children: null };
    const obj13 = { style: tmp.campaignHeader, children: null };
    const obj14 = { variant: "body-sm/semibold", color: "text-subtle", children: null };
    const intl3 = onSelectFont(1113).intl;
    obj14.children = intl3.string(tmp15(4464)["2UCcmW"]);
    let items1 = [closure_12(onSelectFont(5866).Text, obj14)];
    const obj15 = { perk: constants.DISPLAY_NAME_STYLE };
    items1[1] = closure_12(tmp15(16990), obj15);
    obj13.children = items1;
    let items2 = [closure_13(tmp17, obj13), ,];
    const obj16 = { theme: onSelectFont(16983).ThemeTypes.DARK, children: null };
    const obj17 = {
      onPress() {
        return closure_7(HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT);
      },
    };
    const merged = Object.assign(radioA11yNative);
    const intl4 = onSelectFont(1113).intl;
    obj17.accessibilityLabel = intl4.string(tmp15(16978)(tmp8));
    const items3 = [tmp.campaignCard];
    let campaignCardSelected = tmp9;
    if (tmp9) {
      campaignCardSelected = tmp.campaignCardSelected;
    }
    const obj18 = { style: null, children: null };
    items3[1] = campaignCardSelected;
    obj18.style = items3;
    const items4 = [closure_12(tmp15(16984), { angle: 166 }), , ,];
    const obj19 = { style: tmp.campaignLogoFrame, children: null };
    const obj20 = { source: tmp15(17847), style: tmp.campaignLogo, resizeMode: "contain", accessible: false };
    obj19.children = closure_12(tmp15(5957), obj20);
    items4[1] = closure_12(tmp17, obj19);
    const obj21 = {
      variant: "heading-xl/semibold",
      color: "text-default",
      style: tmp.campaignName,
      lineClamp: 1,
      children: displayName,
    };
    items4[2] = closure_12(onSelectFont(5866).Text, obj21);
    const obj22 = { selected: tmp9 };
    items4[3] = closure_12(onSelectFont(7682).FormRadio, obj22);
    obj18.children = items4;
    obj17.children = closure_13(tmp17, obj18);
    obj16.children = closure_12(closure_6, obj17);
    items2[1] = closure_12(onSelectFont(5314).ThemeContextProvider, obj16);
    const obj23 = { variant: "body-xs/medium", color: "text-muted", style: tmp.campaignLegal, children: null };
    const intl5 = onSelectFont(1113).intl;
    const obj24 = {
      nonPremiumEndDate,
      premiumEndDate,
      learnMoreHook(children, arg1) {
        return closure_1_12(
          onSelectFont(_undefined[22]).Text,
          {
            variant: "body-xs/medium",
            color: "text-link",
            accessibilityRole: "link",
            onPress: onSelectFont(_undefined[32]).openHexagonCampaignLearnMore,
            children,
          },
          arg1,
        );
      },
    };
    obj23.children = intl5.format(tmp15(4464).y2YmJv, obj24);
    items2[2] = closure_12(onSelectFont(5866).Text, obj23);
    obj12.children = items2;
    obj11.children = closure_13(tmp17, obj12);
    showCampaignSection = closure_12(tmp17, obj11);
    const tmp15Result = tmp15(5957);
  }
  let tmp18Result = first !== onSelectFont(1395).DisplayNameFont.DEFAULT;
  const items5 = [showCampaignSection, ,];
  items5[1] = closure_12(onSelectFont(6274).Stack, {
    direction: "horizontal",
    align: "center",
    justify: "center",
    spacing: 8,
    style: tmp.gridContainer,
    children: gridFontOrder.map((item) => {
      closure_0 = item;
      const intl = onSelectFont(_undefined[19]).intl;
      let PRIMARY_SEMIBOLD = onSelectFont(_undefined[6]).DISPLAY_NAME_STYLES_FONT_FAMILY_MAP[item];
      if (PRIMARY_SEMIBOLD == null) {
        PRIMARY_SEMIBOLD = constants.PRIMARY_SEMIBOLD;
      }
      let hasItem = _undefined.has(item);
      const obj = {
        onPress() {
          closure_7(closure_0);
          if (hasItem) {
            c3(closure_0);
          }
        },
        accessibilityRole: "button",
        accessibilityLabel: intl.string(closure_1(_undefined[27])(item)),
        accessibilityState: { selected: item === first },
        children: null,
      };
      items = [hasItem.fontCard];
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
      const obj3 = { variant: "body-lg/semibold", color: str, style: null, children: "Gg" };
      const items1 = [hasItem.fontText, { fontFamily: PRIMARY_SEMIBOLD }];
      obj3.style = items1;
      const items2 = [closure_1_12(onSelectFont(_undefined[22]).Text, obj3)];
      if (hasItem) {
        const obj4 = {
          style: tmp12.tileNewDot,
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants",
        };
        hasItem = closure_1_12(closure_5, obj4);
      }
      items2[1] = hasItem;
      obj2.children = items2;
      obj.children = closure_1_13(closure_5, obj2);
      return closure_1_12(closure_6, obj, item);
    }),
  });
  if (tmp18Result) {
    tmp18Result = hasNonLatinLettersResult;
  }
  if (tmp18Result) {
    const obj26 = { style: tmp.nonLatinDisclaimer, children: null };
    const items6 = [closure_12(onSelectFont(5974).CircleInformationIcon, { size: "sm" })];
    const obj27 = { variant: "body-xs/normal", color: "text-subtle", style: tmp.disclaimerText, children: null };
    const intl6 = onSelectFont(1113).intl;
    obj27.children = intl6.string(tmp15(3077)["+O1xL2"]);
    items6[1] = closure_12(onSelectFont(5866).Text, obj27);
    obj26.children = items6;
    tmp18Result = closure_13(tmp17, obj26);
  }
  items5[2] = tmp18Result;
  obj10.children = items5;
  obj9.children = closure_13(closure_5, obj10);
  obj6.children = closure_12(closure_5, obj9);
  return closure_12(onSelectFont(5503).BottomSheet, obj6);
}
