// === Module 15679: DisplayNameStylesFontPickerSheet ===

// Module 15679 (DisplayNameStylesFontPickerSheet)
import nativeDefault from "native" /* 576 */;
import _modDef2874 from "module_2874" /* 2874 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4794 */;
import HapticUtils from "HapticUtils" /* 4795 */;
import DisplayNameStylesSheetHeaderDefault from "DisplayNameStylesSheetHeader" /* 15680 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire } = get_ActivityIndicator);
const Fonts = fn(1085).Fonts;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4827);
let obj2 = { container: { flex: 1 }, contentContainer: { padding: nativeDefault.space.PX_8, alignItems: "center" }, gridContainer: { flexWrap: "wrap", maxWidth: 350 }, fontCard: null, fontCardSelected: null, fontText: null, tileNewDot: null, nonLatinDisclaimer: null, disclaimerText: null };
let size = { width: 79, height: 79, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, justifyContent: "center", alignItems: "center" };
obj2.fontCard = size;
let obj3 = { padding: nativeDefault.space.PX_8, alignItems: "center" };
obj2.fontCardSelected = { borderColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
obj2.fontText = { fontSize: 24, lineHeight: 34, textAlign: "center", textAlignVertical: "center" };
const size1 = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8, width: nativeDefault.space.PX_8, height: nativeDefault.space.PX_8, borderRadius: nativeDefault.space.PX_8 / 2, backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND, shadowColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND, shadowRadius: nativeDefault.space.PX_4, shadowOpacity: 1, elevation: 4 };
obj2.tileNewDot = size1;
let obj4 = { borderColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
obj2.nonLatinDisclaimer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.sm, marginTop: nativeDefault.space.PX_16 };
obj2.disclaimerText = { flex: 1 };
let closure_10 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesFontPickerSheet.tsx");

export default function DisplayNameStylesFontPickerSheet(displayName) {
  ({ selectedFontId, onSelectFont } = displayName);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  first = undefined;
  closure_5 = undefined;
  const tmp = closure_10();
  importDefault = tmp;
  let obj = onSelectFont(8514);
  const visibleFontOrder = onSelectFont(15674).useVisibleFontOrder();
  let obj2 = onSelectFont(15674);
  const displayNameStylesNewFonts = onSelectFont(15676).useDisplayNameStylesNewFonts(visibleFontOrder);
  ({ dotFontIds: c2, dismissFontDot: c3 } = displayNameStylesNewFonts);
  [first, closure_5] = first.useState(selectedFontId);
  let tmp15Result = first !== onSelectFont(1392).DisplayNameFont.DEFAULT;
  let obj3 = onSelectFont(15676);
  closure_6 = tmp9;
  let obj4 = onSelectFont(1389);
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
  const obj5 = { ref: obj.useBottomSheetRef().bottomSheetRef, header: null, children: null };
  const obj6 = { title: null, trailing: null };
  const hasNonLatinLettersResult = onSelectFont(1389).hasNonLatinLetters(displayName.displayName);
  let intl = onSelectFont(1115).intl;
  obj6.title = intl.string(_modDef2874["0JCuGm"]);
  const obj7 = { text: null, onPress: null, variant: "primary", size: "sm" };
  const intl2 = onSelectFont(1115).intl;
  obj7.text = intl2.string(onSelectFont(1115).t.XqMe3N);
  obj7.onPress = callback;
  obj6.trailing = closure_8(onSelectFont(5271).Button, obj7);
  obj5.header = closure_8(DisplayNameStylesSheetHeaderDefault, obj6);
  const obj8 = { style: tmp.container, children: null };
  const obj9 = { style: tmp.contentContainer, children: null };
  let items1 = [
    closure_8(onSelectFont(5269).Stack, {
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
        const obj = {
          onPress() {
            closure_7(closure_0);
            if (hasItem) {
              c3(closure_0);
            }
          },
          accessibilityRole: "button",
          accessibilityLabel: intl.string(closure_1(_undefined[20])(item)),
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
        const items2 = [closure_1_8(onSelectFont(_undefined[22]).Text, obj3), ];
        if (hasItem) {
          const obj4 = { style: tmp12.tileNewDot, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
          hasItem = closure_1_8(closure_5, obj4);
        }
        items2[1] = hasItem;
        obj2.children = items2;
        obj.children = closure_1_9(closure_5, obj2);
        return closure_1_8(closure_6, obj, item);
      })
    }),

  ];
  if (tmp15Result) {
    tmp15Result = hasNonLatinLettersResult;
  }
  if (tmp15Result) {
    const obj11 = { style: tmp.nonLatinDisclaimer, children: null };
    let items2 = [closure_8(onSelectFont(4781).CircleInformationIcon, { size: "sm" }), ];
    const obj12 = { variant: "text-xs/normal", color: "text-subtle", style: tmp.disclaimerText, children: null };
    const intl3 = onSelectFont(1115).intl;
    obj12.children = intl3.string(_modDef2874["+O1xL2"]);
    items2[1] = closure_8(onSelectFont(4823).Text, obj12);
    obj11.children = items2;
    tmp15Result = closure_9(tmp14, obj11);
  }
  items1[1] = tmp15Result;
  obj9.children = items1;
  obj8.children = closure_9(closure_5, obj9);
  obj5.children = closure_8(closure_5, obj8);
  return closure_8(onSelectFont(7481).BottomSheet, obj5);
};