// discord_app/modules/display_name_styles/native/DisplayNameStylesFontPickerSheet.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import messagesProxyDefault from "../intl/DisplayNameStyles.messages.js";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { Fonts } from "../../../../discord_common/js/shared/Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ View: c5, Pressable: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = {
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
createCacheKey = { padding: ThemesDefault.space.PX_8, alignItems: "center" };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { flexWrap: "wrap", maxWidth: 350 };
createCacheKey[5] = {
  width: 79,
  height: 79,
  backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED,
  borderRadius: ThemesDefault.radii.sm,
  borderWidth: 1,
  borderColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE,
  justifyContent: "center",
  alignItems: "center",
};
let obj1 = {
  width: 79,
  height: 79,
  backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED,
  borderRadius: ThemesDefault.radii.sm,
  borderWidth: 1,
  borderColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE,
  justifyContent: "center",
  alignItems: "center",
};
createCacheKey[6] = { borderColor: ThemesDefault.colors.CONTROL_BRAND_FOREGROUND };
createCacheKey[7] = { fontSize: 24, lineHeight: 34, textAlign: "center", textAlignVertical: "center" };
let obj2 = { borderColor: ThemesDefault.colors.CONTROL_BRAND_FOREGROUND };
createCacheKey[8] = {
  position: "absolute",
  top: ThemesDefault.space.PX_8,
  right: ThemesDefault.space.PX_8,
  width: ThemesDefault.space.PX_8,
  height: ThemesDefault.space.PX_8,
  borderRadius: ThemesDefault.space.PX_8 / 2,
  backgroundColor: ThemesDefault.colors.BADGE_BACKGROUND_BRAND,
  shadowColor: ThemesDefault.colors.BADGE_BACKGROUND_BRAND,
  shadowRadius: ThemesDefault.space.PX_4,
  shadowOpacity: 1,
  elevation: 4,
};
let obj3 = {
  position: "absolute",
  top: ThemesDefault.space.PX_8,
  right: ThemesDefault.space.PX_8,
  width: ThemesDefault.space.PX_8,
  height: ThemesDefault.space.PX_8,
  borderRadius: ThemesDefault.space.PX_8 / 2,
  backgroundColor: ThemesDefault.colors.BADGE_BACKGROUND_BRAND,
  shadowColor: ThemesDefault.colors.BADGE_BACKGROUND_BRAND,
  shadowRadius: ThemesDefault.space.PX_4,
  shadowOpacity: 1,
  elevation: 4,
};
createCacheKey[9] = {
  flexDirection: "row",
  alignItems: "center",
  gap: ThemesDefault.space.PX_8,
  paddingHorizontal: ThemesDefault.space.PX_12,
  paddingVertical: ThemesDefault.space.PX_8,
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: ThemesDefault.radii.sm,
  marginTop: ThemesDefault.space.PX_16,
};
createCacheKey[10] = { flex: 1 };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let obj4 = {
  flexDirection: "row",
  alignItems: "center",
  gap: ThemesDefault.space.PX_8,
  paddingHorizontal: ThemesDefault.space.PX_12,
  paddingVertical: ThemesDefault.space.PX_8,
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: ThemesDefault.radii.sm,
  marginTop: ThemesDefault.space.PX_16,
};
let result = require("set").fileFinishedImporting(
  "modules/display_name_styles/native/DisplayNameStylesFontPickerSheet.tsx",
);

export default function DisplayNameStylesFontPickerSheet(displayName) {
  ({ selectedFontId, onSelectFont } = displayName);
  importDefault = undefined;
  dependencyMap = undefined;
  let callback;
  let first;
  closure_5 = undefined;
  closure_6 = undefined;
  closure_7 = undefined;
  let tmp = callback3();
  importDefault = tmp;
  let obj = onSelectFont(8080);
  obj1 = onSelectFont(14933);
  const visibleFontOrder = obj1.useVisibleFontOrder();
  let obj2 = onSelectFont(14935);
  const displayNameStylesNewFonts = obj2.useDisplayNameStylesNewFonts(visibleFontOrder);
  ({ dotFontIds: c2, dismissFontDot: c3 } = displayNameStylesNewFonts);
  const tmp5 = callback(first.useState(selectedFontId), 2);
  first = tmp5[0];
  closure_5 = tmp5[1];
  let tmp14Result = first !== onSelectFont(1941).DisplayNameFont.DEFAULT;
  let obj3 = onSelectFont(1938);
  closure_6 = tmp9;
  closure_7 = first.useCallback((arg0) => {
    callback2(arg0);
  }, []);
  let items = [first !== selectedFontId, first, onSelectFont];
  callback = first.useCallback(() => {
    const result = onSelectFont(_undefined[12]).triggerHapticFeedback(
      onSelectFont(_undefined[12]).HapticFeedbackTypes.IMPACT_MEDIUM,
    );
    if (closure_6) {
      onSelectFont(first);
    }
    const obj = onSelectFont(_undefined[12]);
    const tmp = _undefined;
    callback(_undefined[13]).hideActionSheet();
  }, items);
  obj = { ref: obj.useBottomSheetRef().bottomSheetRef, header: null, children: null };
  obj = { style: tmp.header, children: null };
  obj1 = { title: null, trailing: null };
  let intl = onSelectFont(1236).intl;
  obj1[0] = intl.string(messagesProxyDefault["0JCuGm"]);
  obj2 = { style: tmp.headerTrailing, children: null };
  obj3 = { text: null, onPress: null, variant: "primary", size: "sm" };
  const intl2 = onSelectFont(1236).intl;
  obj3[0] = intl2.string(onSelectFont(1236).t.XqMe3N);
  obj3[1] = callback;
  obj2[1] = callback2(onSelectFont(4928).Button, obj3);
  obj1[1] = callback2(closure_5, obj2);
  obj[1] = callback2(onSelectFont(5621).BottomSheetTitleHeader, obj1);
  obj[1] = callback2(closure_5, obj);
  const obj4 = { style: tmp.container, children: null };
  const obj5 = { style: tmp.contentContainer, children: null };
  const hasNonLatinLettersResult = obj3.hasNonLatinLetters(displayName.displayName);
  const tmp13 = importDefault;
  let items1 = [
    callback2(onSelectFont(4926).Stack, {
      direction: "horizontal",
      align: "center",
      justify: "center",
      spacing: 8,
      style: tmp.gridContainer,
      children: visibleFontOrder.map((arg0) => {
        closure_0 = arg0;
        const intl = onSelectFont(_undefined[16]).intl;
        let PRIMARY_SEMIBOLD = onSelectFont(_undefined[21]).DISPLAY_NAME_STYLES_FONT_FAMILY_MAP[arg0];
        if (PRIMARY_SEMIBOLD == null) {
          PRIMARY_SEMIBOLD = constants.PRIMARY_SEMIBOLD;
        }
        let hasItem = _undefined.has(arg0);
        let obj = {
          onPress() {
            closure_1_7(closure_0);
            if (hasItem) {
              closure_1_3(closure_0);
            }
          },
          accessibilityRole: "button",
          accessibilityLabel: intl.string(callback(_undefined[20])(arg0)),
          accessibilityState: { selected: tmp6 },
          children: null,
        };
        const items = [hasItem.fontCard];
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
        const items2 = [
          closure_1_8(onSelectFont(_undefined[22]).Text, {
            variant: "text-lg/semibold",
            color: str,
            style: items1,
            children: "Gg",
          }),
        ];
        if (hasItem) {
          obj = { style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
          obj[0] = tmp12.tileNewDot;
          hasItem = tmp8(tmp11, obj);
        }
        items2[1] = hasItem;
        obj[1] = items2;
        obj[4] = closure_1_9(closure_5, obj);
        return closure_1_8(closure_6, obj, arg0);
      }),
    }),
  ];
  if (tmp14Result) {
    tmp14Result = hasNonLatinLettersResult;
  }
  if (tmp14Result) {
    const obj7 = { style: null, children: null };
    obj7[0] = tmp.nonLatinDisclaimer;
    let items2 = [tmp11(tmp2(4433).CircleInformationIcon, { size: "sm" })];
    const obj8 = { variant: "text-xs/normal", color: "text-subtle", style: null, children: null };
    obj8[2] = tmp.disclaimerText;
    const intl3 = tmp2(1236).intl;
    obj8[3] = intl3.string(messagesProxyDefault["+O1xL2"]);
    items2[1] = tmp11(tmp2(4474).Text, obj8);
    obj7[1] = items2;
    tmp14Result = tmp14(tmp12, obj7);
  }
  items1[1] = tmp14Result;
  obj5[1] = items1;
  obj4[1] = closure_9(closure_5, obj5);
  obj[2] = callback2(closure_5, obj4);
  return callback2(onSelectFont(5622).BottomSheet, obj);
}
