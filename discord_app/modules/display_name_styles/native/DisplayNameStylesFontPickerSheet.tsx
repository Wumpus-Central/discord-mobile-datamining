// discord_app/modules/display_name_styles/native/DisplayNameStylesFontPickerSheet.tsx
import _slicedToArray from "_slicedToArray";
import Stack from "Stack";
import get_ActivityIndicator from "messagesProxy";
import { Fonts } from "sum";
import jsxProd from "DISPLAY_NAME_STYLES_FONT_FAMILY_MAP";
import createCacheKey from "createCacheKey";
import { messagesProxy } from "../intl/DisplayNameStyles.messages.js";

let c5;
let c9;
let closure_6;
let metroImportAll;
const require = arg1;
({ View: c5, Pressable: closure_6 } = get_ActivityIndicator);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { header: { paddingTop: 4 }, headerTrailing: { justifyContent: "center", alignItems: "center" }, container: { flex: 1 }, contentContainer: null, gridContainer: null, fontCard: null, fontCardSelected: null, fontText: null, tileNewDot: null, nonLatinDisclaimer: null, disclaimerText: null };
createCacheKey = { padding: require("Themes").space.PX_8, alignItems: "center" };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { flexWrap: "wrap", maxWidth: 350 };
createCacheKey[5] = { width: 79, height: 79, backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED, borderRadius: require("Themes").radii.sm, borderWidth: 1, borderColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE, justifyContent: "center", alignItems: "center" };
let obj1 = { width: 79, height: 79, backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED, borderRadius: require("Themes").radii.sm, borderWidth: 1, borderColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE, justifyContent: "center", alignItems: "center" };
createCacheKey[6] = { borderColor: require("Themes").colors.CONTROL_BRAND_FOREGROUND };
createCacheKey[7] = { fontSize: 24, lineHeight: 34, textAlign: "center", textAlignVertical: "center" };
let obj2 = { borderColor: require("Themes").colors.CONTROL_BRAND_FOREGROUND };
createCacheKey[8] = { position: "absolute", top: require("Themes").space.PX_8, right: require("Themes").space.PX_8, width: require("Themes").space.PX_8, height: require("Themes").space.PX_8, borderRadius: require("Themes").space.PX_8 / 2, backgroundColor: require("Themes").colors.BADGE_BACKGROUND_BRAND, shadowColor: require("Themes").colors.BADGE_BACKGROUND_BRAND, shadowRadius: require("Themes").space.PX_4, shadowOpacity: 1, elevation: 4 };
let obj3 = { position: "absolute", top: require("Themes").space.PX_8, right: require("Themes").space.PX_8, width: require("Themes").space.PX_8, height: require("Themes").space.PX_8, borderRadius: require("Themes").space.PX_8 / 2, backgroundColor: require("Themes").colors.BADGE_BACKGROUND_BRAND, shadowColor: require("Themes").colors.BADGE_BACKGROUND_BRAND, shadowRadius: require("Themes").space.PX_4, shadowOpacity: 1, elevation: 4 };
createCacheKey[9] = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8, paddingHorizontal: require("Themes").space.PX_12, paddingVertical: require("Themes").space.PX_8, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("Themes").radii.sm, marginTop: require("Themes").space.PX_16 };
createCacheKey[10] = { flex: 1 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj4 = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8, paddingHorizontal: require("Themes").space.PX_12, paddingVertical: require("Themes").space.PX_8, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("Themes").radii.sm, marginTop: require("Themes").space.PX_16 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesFontPickerSheet.tsx");

export default function DisplayNameStylesFontPickerSheet(displayName) {
  let c2;
  let c3;
  let onSelectFont;
  let selectedFontId;
  ({ selectedFontId, onSelectFont } = displayName);
  let importDefault;
  let dependencyMap;
  let callback;
  let first;
  let closure_5;
  let c6;
  let closure_7;
  let tmp = createCacheKey();
  importDefault = tmp;
  let obj = onSelectFont(7449);
  let obj1 = onSelectFont(14647);
  const visibleFontOrder = obj1.useVisibleFontOrder();
  let obj2 = onSelectFont(14649);
  const displayNameStylesNewFonts = obj2.useDisplayNameStylesNewFonts(visibleFontOrder);
  ({ dotFontIds: c2, dismissFontDot: c3 } = displayNameStylesNewFonts);
  const tmp5 = callback(first.useState(selectedFontId), 2);
  first = tmp5[0];
  closure_5 = tmp5[1];
  let tmp14Result = first !== onSelectFont(1936).DisplayNameFont.DEFAULT;
  let obj3 = onSelectFont(1933);
  c6 = tmp9;
  closure_7 = first.useCallback((arg0) => {
    callback(arg0);
  }, []);
  let items = [first !== selectedFontId, first, onSelectFont];
  callback = first.useCallback(() => {
    const result = onSelectFont(_undefined2[12]).triggerHapticFeedback(onSelectFont(_undefined2[12]).HapticFeedbackTypes.IMPACT_MEDIUM);
    if (c6) {
      onSelectFont(first);
    }
    const obj = onSelectFont(_undefined2[12]);
    const tmp = _undefined2;
    _undefined(_undefined2[13]).hideActionSheet();
  }, items);
  obj = { ref: obj.useBottomSheetRef().bottomSheetRef, header: null, children: null };
  obj = { style: tmp.header, children: null };
  obj1 = { title: null, trailing: null };
  let intl = onSelectFont(1236).intl;
  obj1[0] = intl.string(messagesProxy["0JCuGm"]);
  obj2 = { style: tmp.headerTrailing, children: null };
  obj3 = { text: null, onPress: null, variant: "primary", size: "sm" };
  const intl2 = onSelectFont(1236).intl;
  obj3[0] = intl2.string(onSelectFont(1236).t.XqMe3N);
  obj3[1] = callback;
  obj2[1] = callback2(onSelectFont(4755).Button, obj3);
  obj1[1] = callback2(closure_5, obj2);
  obj[1] = callback2(onSelectFont(5436).BottomSheetTitleHeader, obj1);
  obj[1] = callback2(closure_5, obj);
  const obj4 = { style: tmp.container, children: null };
  const obj5 = { style: tmp.contentContainer, children: null };
  const obj6 = { direction: "horizontal", align: "center", justify: "center", spacing: 8, style: tmp.gridContainer, children: null };
  obj6[5] = visibleFontOrder.map((arg0) => {
    let closure_0 = arg0;
    const intl = onSelectFont(_undefined2[16]).intl;
    let PRIMARY_SEMIBOLD = onSelectFont(_undefined2[21]).DISPLAY_NAME_STYLES_FONT_FAMILY_MAP[arg0];
    if (PRIMARY_SEMIBOLD == null) {
      PRIMARY_SEMIBOLD = constants.PRIMARY_SEMIBOLD;
    }
    let hasItem = _undefined2.has(arg0);
    let obj = {
      onPress() {
        outer1_7(closure_0);
        if (hasItem) {
          outer1_3(closure_0);
        }
      },
      accessibilityRole: "button",
      accessibilityLabel: intl.string(_undefined(_undefined2[20])(arg0)),
      accessibilityState: { selected: tmp6 },
      children: null
    };
    const items = [hasItem.fontCard, ];
    let fontCardSelected = tmp6;
    if (arg0 === first) {
      fontCardSelected = tmp12.fontCardSelected;
    }
    obj = { style: items, children: null };
    items[1] = fontCardSelected;
    let str = "text-default";
    if (arg0 === first) {
      str = "mobile-text-heading-primary";
    }
    const items1 = [hasItem.fontText, { fontFamily: PRIMARY_SEMIBOLD }];
    const items2 = [outer1_8(onSelectFont(_undefined2[22]).Text, { variant: "text-lg/semibold", color: str, style: items1, children: "Gg" }), ];
    if (hasItem) {
      obj = { style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
      obj[0] = tmp12.tileNewDot;
      hasItem = tmp8(tmp11, obj);
    }
    items2[1] = hasItem;
    obj[1] = items2;
    obj[4] = outer1_9(closure_5, obj);
    return outer1_8(c6, obj, arg0);
  });
  let items1 = [callback2(onSelectFont(4753).Stack, obj6), ];
  if (tmp14Result) {
    tmp14Result = hasNonLatinLettersResult;
  }
  if (tmp14Result) {
    const obj7 = { style: null, children: null };
    obj7[0] = tmp.nonLatinDisclaimer;
    let items2 = [tmp11(tmp2(4298).CircleInformationIcon, { size: "sm" }), ];
    const obj8 = { variant: "text-xs/normal", color: "text-subtle", style: null, children: null };
    obj8[2] = tmp.disclaimerText;
    const intl3 = tmp2(1236).intl;
    obj8[3] = intl3.string(messagesProxy["+O1xL2"]);
    items2[1] = tmp11(tmp2(4338).Text, obj8);
    obj7[1] = items2;
    tmp14Result = tmp14(tmp12, obj7);
  }
  items1[1] = tmp14Result;
  obj5[1] = items1;
  obj4[1] = closure_9(closure_5, obj5);
  obj[2] = callback2(closure_5, obj4);
  return callback2(onSelectFont(5437).BottomSheet, obj);
};