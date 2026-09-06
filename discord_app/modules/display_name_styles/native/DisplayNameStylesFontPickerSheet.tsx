// discord_app/modules/display_name_styles/native/DisplayNameStylesFontPickerSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef2786 from "../intl/DisplayNameStyles.messages.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire } = get_ActivityIndicator);
const Fonts = fn(1085).Fonts;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = {
  header: { paddingTop: 4 },
  headerTrailing: { justifyContent: "center", alignItems: "center" },
  container: { flex: 1 },
  contentContainer: null,
  gridContainer: null,
  fontCard: null,
  fontCardSelected: null,
  fontText: null,
  tileNewDot: null,
  nonLatinDisclaimer: null,
  disclaimerText: null,
};
createStyles = { padding: nativeDefault.space.PX_8, alignItems: "center" };
createStyles.contentContainer = createStyles;
createStyles.gridContainer = { flexWrap: "wrap", maxWidth: 350 };
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
createStyles.fontCard = size;
createStyles.fontCardSelected = { borderColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
createStyles.fontText = { fontSize: 24, lineHeight: 34, textAlign: "center", textAlignVertical: "center" };
const size1 = {
  position: "absolute",
  top: nativeDefault.space.PX_8,
  right: nativeDefault.space.PX_8,
  width: nativeDefault.space.PX_8,
  height: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.space.PX_8 / 2,
  backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND,
  shadowColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND,
  shadowRadius: nativeDefault.space.PX_4,
  shadowOpacity: 1,
  elevation: 4,
};
createStyles.tileNewDot = size1;
let obj1 = { borderColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
createStyles.nonLatinDisclaimer = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_12,
  paddingVertical: nativeDefault.space.PX_8,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.sm,
  marginTop: nativeDefault.space.PX_16,
};
createStyles.disclaimerText = { flex: 1 };
let closure_10 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesFontPickerSheet.tsx");

export default function DisplayNameStylesFontPickerSheet(displayName) {
  ({ selectedFontId, onSelectFont } = displayName);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let first;
  const tmp = closure_10();
  importDefault = tmp;
  let obj = onSelectFont(8170);
  let obj1 = onSelectFont(15337);
  const visibleFontOrder = obj1.useVisibleFontOrder();
  let obj2 = onSelectFont(15339);
  const displayNameStylesNewFonts = obj2.useDisplayNameStylesNewFonts(visibleFontOrder);
  ({ dotFontIds: c2, dismissFontDot: c3 } = displayNameStylesNewFonts);
  const tmp5 = _slicedToArray(first.useState(selectedFontId), 2);
  first = tmp5[0];
  closure_5 = tmp5[1];
  let tmp14Result = first !== onSelectFont(1391).DisplayNameFont.DEFAULT;
  onSelectFont(1388);
  closure_6 = tmp9;
  constants = first.useCallback((arg0) => {
    closure_5(arg0);
  }, []);
  let items = [first !== selectedFontId, first, onSelectFont];
  const callback = first.useCallback(() => {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    if (closure_6) {
      onSelectFont(first);
    }
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  obj = { ref: obj.useBottomSheetRef().bottomSheetRef, header: null, children: null };
  obj = { style: tmp.header, children: null };
  obj1 = { title: null, trailing: null };
  let intl = onSelectFont(1114).intl;
  obj1.title = intl.string(_modDef2786["0JCuGm"]);
  obj2 = { style: tmp.headerTrailing, children: null };
  const obj3 = { text: null, onPress: null, variant: "primary", size: "sm" };
  const intl2 = onSelectFont(1114).intl;
  obj3.text = intl2.string(onSelectFont(1114).t.XqMe3N);
  obj3.onPress = callback;
  obj2.children = closure_8(onSelectFont(4975).Button, obj3);
  obj1.trailing = closure_8(closure_5, obj2);
  obj.children = closure_8(onSelectFont(7149).BottomSheetTitleHeader, obj1);
  obj.header = closure_8(closure_5, obj);
  const obj4 = { style: tmp.container, children: null };
  const obj5 = { style: tmp.contentContainer, children: null };
  const hasNonLatinLettersResult = obj3.hasNonLatinLetters(displayName.displayName);
  let items1 = [
    closure_8(onSelectFont(4973).Stack, {
      direction: "horizontal",
      align: "center",
      justify: "center",
      spacing: 8,
      style: tmp.gridContainer,
      children: visibleFontOrder.map((item) => {
        closure_0 = item;
        const intl = onSelectFont(_undefined[16]).intl;
        let PRIMARY_SEMIBOLD = onSelectFont(_undefined[21]).DISPLAY_NAME_STYLES_FONT_FAMILY_MAP[item];
        if (PRIMARY_SEMIBOLD == null) {
          PRIMARY_SEMIBOLD = constants.PRIMARY_SEMIBOLD;
        }
        let hasItem = _undefined.has(item);
        let obj = {
          onPress() {
            closure_7(closure_0);
            if (hasItem) {
              c3(closure_0);
            }
          },
          accessibilityRole: "button",
          accessibilityLabel: intl.string(closure_1(_undefined[20])(item)),
          accessibilityState: { selected: tmp6 },
          children: null,
        };
        const items = [hasItem.fontCard];
        let fontCardSelected = tmp6;
        if (item === first) {
          fontCardSelected = tmp12.fontCardSelected;
        }
        obj = { style: items, children: null };
        items[1] = fontCardSelected;
        let str = "text-default";
        if (item === first) {
          str = "mobile-text-heading-primary";
        }
        obj = { variant: "text-lg/semibold", color: str, style: null, children: "Gg" };
        const items1 = [hasItem.fontText, { fontFamily: PRIMARY_SEMIBOLD }];
        obj.style = items1;
        const items2 = [closure_1_8(onSelectFont(_undefined[22]).Text, obj)];
        if (hasItem) {
          const obj1 = {
            style: tmp12.tileNewDot,
            accessibilityElementsHidden: true,
            importantForAccessibility: "no-hide-descendants",
          };
          hasItem = closure_1_8(closure_5, obj1);
        }
        items2[1] = hasItem;
        obj.children = items2;
        obj.children = closure_1_9(closure_5, obj);
        return closure_1_8(closure_6, obj, item);
      }),
    }),
  ];
  if (tmp14Result) {
    tmp14Result = hasNonLatinLettersResult;
  }
  if (tmp14Result) {
    const obj7 = { style: tmp.nonLatinDisclaimer, children: null };
    let items2 = [closure_8(onSelectFont(4515).CircleInformationIcon, { size: "sm" })];
    const obj8 = { variant: "text-xs/normal", color: "text-subtle", style: tmp.disclaimerText, children: null };
    const intl3 = onSelectFont(1114).intl;
    obj8.children = intl3.string(_modDef2786["+O1xL2"]);
    items2[1] = closure_8(onSelectFont(4556).Text, obj8);
    obj7.children = items2;
    tmp14Result = closure_9(tmp12, obj7);
  }
  items1[1] = tmp14Result;
  obj5.children = items1;
  obj4.children = closure_9(closure_5, obj5);
  obj.children = closure_8(closure_5, obj4);
  return closure_8(onSelectFont(7150).BottomSheet, obj);
}
