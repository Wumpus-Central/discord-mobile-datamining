// discord_app/modules/user_settings/premium/native/PremiumFeaturesTable.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import shared from "../../../../design/shared.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../../_runtime/04987_LinearGradient.js";
import _modDef13478 from "../../../../../_runtime/metro/13478__.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const _modDef13477 = tmp(13477);
require = fn;
function CheckIcon() {
  let obj = shared;
  const tmp3 = useThemeDefault();
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  const isThemeDarkResult = obj.isThemeDark(useThemeDefault());
  obj = {
    source: _modDef13477,
    color: obj.isThemeDark(useThemeDefault()) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_860,
    size: tmp4(1178).IconSizes.SMALL,
  };
  return closure_1_11(native.Icon, obj);
}
function CloseIcon() {
  const tmp = closure_16();
  return closure_1_11(native.Icon, { source: _modDef13478, style: closure_16().icon, size: native.IconSizes.SMALL });
}
function CellText(children) {
  return closure_1_11(Text_Text.Text, {
    variant: "text-md/medium",
    color: "mobile-text-heading-primary",
    children: children.text,
  });
}
function Row(withTopBorderRadius) {
  ({ column2, withBottomBorder } = withTopBorderRadius);
  ({ label, column1 } = withTopBorderRadius);
  if (withBottomBorder === undefined) {
    withBottomBorder = true;
  }
  let flag = withTopBorderRadius.withTopBorderRadius;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = withTopBorderRadius.withBottomBorderRadius;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ highlightColumn1, disableHighlightColumn2 } = withTopBorderRadius);
  if (disableHighlightColumn2 === undefined) {
    disableHighlightColumn2 = false;
  }
  let str = withTopBorderRadius.variant;
  if (str === undefined) {
    str = "default";
  }
  let flag3 = withTopBorderRadius.disableAccessibility;
  if (flag3 === undefined) {
    flag3 = false;
  }
  ({ rowName, column1AccessibilityLabel, column2AccessibilityLabel, rowNumber } = withTopBorderRadius);
  const tmp = closure_14();
  const tmp2 = _slicedToArray(noop.useState(0), 2);
  closure_0 = tmp2[1];
  let num = 0;
  if (withBottomBorder) {
    num = 1;
  }
  let num2 = 0;
  if (flag) {
    num2 = 2;
  }
  let num3 = 0;
  if (flag2) {
    num3 = 2;
  }
  const items = [tmp.row];
  if (withBottomBorder) {
    withBottomBorder = tmp.bottomBorder;
  }
  let obj = {
    style: items,
    onLayout(nativeEvent) {
      return closure_0(nativeEvent.nativeEvent.layout.height);
    },
    children: null,
  };
  items[1] = withBottomBorder;
  obj = { style: null, accessible: !flag3, accessibilityLabel: rowName, children: label };
  const items1 = [,];
  ({ labelCell: arr2[0], cell: arr2[1] } = tmp);
  obj.style = items1;
  const items2 = [closure_1_11(View, obj), ,];
  const items3 = [, , , ,];
  ({ cell: arr4[0], dataCell: arr4[1] } = tmp);
  let themedHighlightedCell = highlightColumn1;
  if (highlightColumn1) {
    themedHighlightedCell = tmp.themedHighlightedCell;
  }
  items3[2] = themedHighlightedCell;
  let topBorderRadius = flag;
  if (flag) {
    topBorderRadius = tmp.topBorderRadius;
  }
  items3[3] = topBorderRadius;
  let bottomBorderRadius = flag2;
  if (flag2) {
    bottomBorderRadius = tmp.bottomBorderRadius;
  }
  obj = { style: items3, accessibilityLabel: null, accessible: null, children: null };
  items3[4] = bottomBorderRadius;
  let formatToPlainStringResult;
  if (null != column1AccessibilityLabel) {
    const intl = util.intl;
    const intl2 = util.intl;
    const obj1 = {
      accessibilityLabel: column1AccessibilityLabel,
      rowNumber,
      rowName,
      columnNumber: 1,
      columnName: intl.string(util.t["t9uG/o"]),
    };
    formatToPlainStringResult = intl2.formatToPlainString(util.t.EZjXN3, obj1);
    const stringResult = intl.string(util.t["t9uG/o"]);
  }
  obj.accessibilityLabel = formatToPlainStringResult;
  obj.accessible = !flag3;
  obj.children = column1;
  items2[1] = closure_1_11(View, obj);
  if ("nitro_home" === str) {
    if (!highlightColumn1) {
      if (!disableHighlightColumn2) {
        let topBorderRadius2 = flag;
        if (flag) {
          topBorderRadius2 = tmp.topBorderRadius;
        }
        const items4 = [topBorderRadius2, , , , ,];
        let tmp10 = flag;
        if (flag) {
          const obj2 = { borderTopColor: rgba1846919305, borderTopWidth: 2 };
          tmp10 = obj2;
        }
        items4[1] = tmp10;
        let bottomBorderRadius2 = flag2;
        if (flag2) {
          bottomBorderRadius2 = tmp.bottomBorderRadius;
        }
        items4[2] = bottomBorderRadius2;
        let tmp12 = flag2;
        if (flag2) {
          const obj3 = { borderBottomColor: rgba1846919305, borderBottomWidth: 2 };
          tmp12 = obj3;
        }
        let obj4 = { style: null, accessibilityLabel: null, accessible: null, children: null };
        items4[3] = tmp12;
        items4[4] = tmp.nitroHomeHightlightedBorderLeftRight;
        items4[5] = { overflow: "hidden" };
        obj4.style = items4;
        let formatToPlainStringResult1;
        if (null != column2AccessibilityLabel) {
          const intl3 = util.intl;
          const intl4 = util.intl;
          const obj5 = {
            accessibilityLabel: column2AccessibilityLabel,
            rowNumber,
            rowName,
            columnNumber: 2,
            columnName: intl3.string(util.t.lG6a5x),
          };
          formatToPlainStringResult1 = intl4.formatToPlainString(util.t.EZjXN3, obj5);
          const stringResult1 = intl3.string(util.t.lG6a5x);
        }
        obj4.accessibilityLabel = formatToPlainStringResult1;
        obj4.accessible = !flag3;
        const sum = num + num2 + num3;
        const obj6 = { style: null, start: null, end: null, colors: null, children: null };
        const obj7 = { height: tmp2[0] - sum };
        const items5 = [obj7, tmp.dataCell];
        obj6.style = items5;
        ({ START: obj9.start, END: obj9.end } = HorizontalGradient);
        obj6.colors = ["rgba(133, 71, 198, 0.10)", "rgba(184, 69, 193, 0.10)", "rgba(171, 93, 138, 0.10)"];
        obj6.children = column2;
        obj4.children = tmp5(LinearGradientDefault, obj6);
      }
      items2[2] = tmp5(tmp4, obj4);
      obj.children = items2;
      return closure_1_12(tmp4, obj);
    }
  }
  const items6 = [, , , ,];
  ({ cell: arr7[0], dataCell: arr7[1] } = tmp);
  let themedHighlightedCell2 = !highlightColumn1;
  if (!highlightColumn1) {
    themedHighlightedCell2 = !disableHighlightColumn2;
  }
  if (themedHighlightedCell2) {
    themedHighlightedCell2 = tmp.themedHighlightedCell;
  }
  items6[2] = themedHighlightedCell2;
  if (flag) {
    flag = tmp.topBorderRadius;
  }
  items6[3] = flag;
  if (flag2) {
    flag2 = tmp.bottomBorderRadius;
  }
  const obj8 = { style: items6, accessibilityLabel: null, accessible: null, children: null };
  items6[4] = flag2;
  let formatToPlainStringResult2;
  if (null != column2AccessibilityLabel) {
    const intl5 = util.intl;
    const intl6 = util.intl;
    const obj9 = {
      accessibilityLabel: column2AccessibilityLabel,
      rowNumber,
      rowName,
      columnNumber: 2,
      columnName: intl5.string(util.t.lG6a5x),
    };
    formatToPlainStringResult2 = intl6.formatToPlainString(util.t.EZjXN3, obj9);
    const stringResult2 = intl5.string(util.t.lG6a5x);
  }
  obj8.accessibilityLabel = formatToPlainStringResult2;
  obj8.accessible = !flag3;
  obj8.children = column2;
  obj4 = obj8;
}
const View = fn(17).View;
const HorizontalGradient = fn(1074).HorizontalGradient;
const PremiumConstants = fn(1373);
({
  NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_7,
  PRICE_PLACEHOLDER: closure_8,
  PremiumTypes: closure_9,
  SubscriptionPlans: c10,
} = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let c13 = "rgba(184, 69, 193, 0.5)";
fn(4560);
let createStyles = {
  container: { display: "flex", flex: 1, width: "100%" },
  headerText: { textAlign: "center" },
  logo: { marginTop: 8, marginBottom: -6 },
  table: { marginTop: 16 },
  row: { display: "flex", flexDirection: "row" },
  bottomBorder: { borderBottomColor: "rgba(106, 116, 128, 0.24)", borderBottomWidth: 1 },
  topBorderRadius: null,
  bottomBorderRadius: null,
  cell: null,
  labelCell: null,
  dataCell: null,
  themedHighlightedCell: null,
  nitroHomeHightlightedBorderLeftRight: null,
  premiumGroupCard: null,
  priceContainer: null,
};
createStyles = { borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
createStyles.topBorderRadius = createStyles;
createStyles.bottomBorderRadius = {
  borderBottomLeftRadius: nativeDefault.radii.sm,
  borderBottomRightRadius: nativeDefault.radii.sm,
};
createStyles.cell = { paddingVertical: 12 };
createStyles.labelCell = { flex: 1, justifyContent: "flex-start" };
createStyles.dataCell = { flexDirection: "row", justifyContent: "center", alignItems: "center", width: 82 };
let obj1 = { borderBottomLeftRadius: nativeDefault.radii.sm, borderBottomRightRadius: nativeDefault.radii.sm };
createStyles.themedHighlightedCell = { backgroundColor: fn(5441).PREMIUM_FEATURES_TABLE_HIGHLIGHTED_CELL_BG };
createStyles.nitroHomeHightlightedBorderLeftRight = {
  borderLeftColor: "rgba(184, 69, 193, 0.5)",
  borderLeftWidth: 2,
  borderRightColor: "rgba(184, 69, 193, 0.5)",
  borderRightWidth: 2,
};
createStyles.premiumGroupCard = { marginTop: 16 };
createStyles.priceContainer = { alignItems: "center" };
let closure_14 = createStyles.createStyles(createStyles);
createStyles = fn(4560);
let obj3 = { icon: null };
let obj2 = { backgroundColor: fn(5441).PREMIUM_FEATURES_TABLE_HIGHLIGHTED_CELL_BG };
obj3.icon = { tintColor: nativeDefault.colors.TEXT_MUTED };
let closure_16 = createStyles.createStyles(obj3);
let size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesTable.tsx");

export default function PremiumFeaturesTable(highlightNitroBasic) {
  let flag = highlightNitroBasic.highlightNitroBasic;
  if (flag === undefined) {
    flag = false;
  }
  let str = highlightNitroBasic.variant;
  if (str === undefined) {
    str = "default";
  }
  ({ titleOverride, isFractionalOnly, isPremiumGroup } = highlightNitroBasic);
  if (isPremiumGroup === undefined) {
    isPremiumGroup = false;
  }
  const premiumGroupRole = highlightNitroBasic.premiumGroupRole;
  const tmp = closure_14();
  const tmp3 = isPremiumGroup;
  const tmp4 = str(isPremiumGroup[9])();
  const tmp5 = str(isPremiumGroup[17])(closure_10.PREMIUM_MONTH_TIER_0);
  const tmp6 = str(isPremiumGroup[17])(closure_10.PREMIUM_MONTH_TIER_2);
  let priceString;
  if (tmp5 != null) {
    priceString = tmp5.priceString;
  }
  if (priceString == null) {
    priceString = closure_8;
  }
  let priceString1;
  if (tmp6 != null) {
    priceString1 = tmp6.priceString;
  }
  if (priceString1 == null) {
    priceString1 = closure_8;
  }
  const tmp9 = flag;
  let obj = flag(tmp3[18]);
  const maxFileSizeForPremiumType = obj.getMaxFileSizeForPremiumType(closure_9.TIER_0);
  let obj1 = flag(tmp3[18]);
  const maxFileSizeForPremiumType1 = obj1.getMaxFileSizeForPremiumType(closure_9.TIER_2);
  obj = { column1: null, column2: null, withBottomBorder: false, disableAccessibility: true, hidden: !isPremiumGroup };
  const size = { style: tmp.logo, width: 48, height: 9 };
  obj.column1 = closure_11(str(tmp3[19]), size);
  const size1 = { style: tmp.logo, width: 50, height: 9 };
  obj.column2 = closure_11(str(tmp3[20]), size1);
  const items = [obj, , , , , , , , , ,];
  obj = { accessible: true, accessibilityLabel: null, style: null, source: null };
  let tmp2Result = tmp2(tmp3[21]);
  const intl = flag(tmp3[15]).intl;
  obj.accessibilityLabel = intl.string(flag(tmp3[15]).t["t9uG/o"]);
  obj.style = tmp.logo;
  let obj6 = flag(tmp3[10]);
  if (obj6.isThemeDark(tmp4)) {
    tmp2Result = tmp2(tmp3[22]);
  } else {
    tmp2Result = tmp2(tmp3[23]);
  }
  obj1 = {
    column1: tmp12(tmp2Result, obj),
    column2: null,
    withBottomBorder: false,
    withTopBorderRadius: true,
    disableAccessibility: true,
    hidden: null,
  };
  obj.source = tmp2Result;
  const obj2 = { accessible: true, accessibilityLabel: null, style: null, source: null };
  const intl2 = tmp9(tmp3[15]).intl;
  obj2.accessibilityLabel = intl2.string(tmp9(tmp3[15]).t.lG6a5x);
  obj2.style = tmp.logo;
  const tmp2Result1 = str(tmp3[21]);
  if (tmp9Result.isThemeDark(tmp4)) {
    let tmp2Result2 = tmp2(tmp3[24]);
  } else {
    tmp2Result2 = tmp2(tmp3[25]);
  }
  obj2.source = tmp2Result2;
  obj1.column2 = closure_11(tmp2Result1, obj2);
  obj1.hidden = isPremiumGroup;
  items[1] = obj1;
  const obj3 = {
    label: null,
    rowName: null,
    column1: null,
    column1AccessibilityLabel: null,
    column2: null,
    column2AccessibilityLabel: null,
  };
  const obj4 = { text: null };
  const intl3 = tmp9(tmp3[15]).intl;
  obj4.text = intl3.string(tmp9(tmp3[15]).t.LkKGZ2);
  obj3.label = closure_11(CellText, obj4);
  const intl4 = tmp9(tmp3[15]).intl;
  obj3.rowName = intl4.string(tmp9(tmp3[15]).t.LkKGZ2);
  const obj5 = { style: tmp.priceContainer, children: null };
  const parts = priceString.split(/ (?=\()/g);
  obj5.children = parts.map((text) => closure_1_11(CellText, { text }, text));
  obj3.column1 = closure_11(View, obj5);
  obj3.column1AccessibilityLabel = priceString;
  obj6 = { style: tmp.priceContainer, children: null };
  const parts1 = priceString1.split(/ (?=\()/g);
  obj6.children = parts1.map((text) => closure_1_11(CellText, { text }, text));
  obj3.column2 = closure_11(View, obj6);
  obj3.column2AccessibilityLabel = priceString1;
  items[2] = obj3;
  const obj7 = {
    label: null,
    rowName: null,
    column1: null,
    column1AccessibilityLabel: null,
    column2: null,
    column2AccessibilityLabel: null,
  };
  const obj8 = { text: null };
  const intl5 = tmp9(tmp3[15]).intl;
  obj8.text = intl5.string(tmp9(tmp3[15]).t.ORlUdL);
  obj7.label = closure_11(CellText, obj8);
  const intl6 = tmp9(tmp3[15]).intl;
  obj7.rowName = intl6.string(tmp9(tmp3[15]).t.ORlUdL);
  obj7.column1 = closure_11(CheckIcon, {});
  const intl7 = tmp9(tmp3[15]).intl;
  obj7.column1AccessibilityLabel = intl7.string(tmp9(tmp3[15]).t["tq+6t/"]);
  obj7.column2 = closure_11(CheckIcon, {});
  const intl8 = tmp9(tmp3[15]).intl;
  obj7.column2AccessibilityLabel = intl8.string(tmp9(tmp3[15]).t["tq+6t/"]);
  items[3] = obj7;
  const obj9 = {
    label: null,
    rowName: null,
    column1: null,
    column1AccessibilityLabel: null,
    column2: null,
    column2AccessibilityLabel: null,
  };
  const obj10 = { text: null };
  const intl9 = tmp9(tmp3[15]).intl;
  obj10.text = intl9.string(tmp9(tmp3[15]).t["ufhQC+"]);
  obj9.label = closure_11(CellText, obj10);
  const intl10 = tmp9(tmp3[15]).intl;
  obj9.rowName = intl10.string(tmp9(tmp3[15]).t["ufhQC+"]);
  obj9.column1 = closure_11(tmp9(tmp3[14]).Text, {
    variant: "text-md/medium",
    color: "mobile-text-heading-primary",
    children: maxFileSizeForPremiumType,
  });
  obj9.column1AccessibilityLabel = maxFileSizeForPremiumType;
  obj9.column2 = closure_11(tmp9(tmp3[14]).Text, {
    variant: "text-md/medium",
    color: "mobile-text-heading-primary",
    children: maxFileSizeForPremiumType1,
  });
  obj9.column2AccessibilityLabel = maxFileSizeForPremiumType1;
  items[4] = obj9;
  const obj11 = {
    label: null,
    rowName: null,
    column1: null,
    column1AccessibilityLabel: null,
    column2: null,
    column2AccessibilityLabel: null,
    hidden: null,
  };
  const obj12 = { text: null };
  const intl11 = tmp9(tmp3[15]).intl;
  obj12.text = intl11.string(tmp9(tmp3[15]).t["svn/YX"]);
  obj11.label = closure_11(CellText, obj12);
  const intl12 = tmp9(tmp3[15]).intl;
  obj11.rowName = intl12.string(tmp9(tmp3[15]).t["svn/YX"]);
  obj11.column1 = closure_11(CheckIcon, {});
  const intl13 = tmp9(tmp3[15]).intl;
  obj11.column1AccessibilityLabel = intl13.string(tmp9(tmp3[15]).t["tq+6t/"]);
  obj11.column2 = closure_11(CheckIcon, {});
  const intl14 = tmp9(tmp3[15]).intl;
  obj11.column2AccessibilityLabel = intl14.string(tmp9(tmp3[15]).t["tq+6t/"]);
  obj11.hidden = isFractionalOnly;
  items[5] = obj11;
  const obj13 = {
    label: null,
    rowName: null,
    column1: null,
    column1AccessibilityLabel: null,
    column2: null,
    column2AccessibilityLabel: null,
    hidden: null,
  };
  const obj14 = { text: null };
  const intl15 = tmp9(tmp3[15]).intl;
  obj14.text = intl15.formatToPlainString(tmp9(tmp3[15]).t.DbkNFj, { numBoosts });
  obj13.label = closure_11(CellText, obj14);
  const intl16 = tmp9(tmp3[15]).intl;
  obj13.rowName = intl16.formatToPlainString(tmp9(tmp3[15]).t.DbkNFj, { numBoosts });
  obj13.column1 = closure_11(CloseIcon, {});
  const intl17 = tmp9(tmp3[15]).intl;
  obj13.column1AccessibilityLabel = intl17.string(tmp9(tmp3[15]).t.l4qZrp);
  obj13.column2 = closure_11(CheckIcon, {});
  const intl18 = tmp9(tmp3[15]).intl;
  obj13.column2AccessibilityLabel = intl18.string(tmp9(tmp3[15]).t["tq+6t/"]);
  obj13.hidden = isFractionalOnly;
  items[6] = obj13;
  const obj17 = {
    label: null,
    rowName: null,
    column1: null,
    column1AccessibilityLabel: null,
    column2: null,
    column2AccessibilityLabel: null,
  };
  const obj18 = { text: null };
  const intl19 = tmp9(tmp3[15]).intl;
  obj18.text = intl19.string(tmp9(tmp3[15]).t["Gv/rQ6"]);
  obj17.label = closure_11(CellText, obj18);
  const intl20 = tmp9(tmp3[15]).intl;
  obj17.rowName = intl20.string(tmp9(tmp3[15]).t["Gv/rQ6"]);
  obj17.column1 = closure_11(CloseIcon, {});
  const intl21 = tmp9(tmp3[15]).intl;
  obj17.column1AccessibilityLabel = intl21.string(tmp9(tmp3[15]).t.l4qZrp);
  obj17.column2 = closure_11(CheckIcon, {});
  const intl22 = tmp9(tmp3[15]).intl;
  obj17.column2AccessibilityLabel = intl22.string(tmp9(tmp3[15]).t["tq+6t/"]);
  items[7] = obj17;
  const obj19 = {
    label: null,
    rowName: null,
    column1: null,
    column1AccessibilityLabel: null,
    column2: null,
    column2AccessibilityLabel: null,
  };
  const obj20 = { text: null };
  const intl23 = tmp9(tmp3[15]).intl;
  obj20.text = intl23.string(tmp9(tmp3[15]).t.myyAEr);
  obj19.label = closure_11(CellText, obj20);
  const intl24 = tmp9(tmp3[15]).intl;
  obj19.rowName = intl24.string(tmp9(tmp3[15]).t.myyAEr);
  obj19.column1 = closure_11(CloseIcon, {});
  const intl25 = tmp9(tmp3[15]).intl;
  obj19.column1AccessibilityLabel = intl25.string(tmp9(tmp3[15]).t.l4qZrp);
  obj19.column2 = closure_11(CheckIcon, {});
  const intl26 = tmp9(tmp3[15]).intl;
  obj19.column2AccessibilityLabel = intl26.string(tmp9(tmp3[15]).t["tq+6t/"]);
  items[8] = obj19;
  const obj21 = {
    label: null,
    rowName: null,
    column1: null,
    column1AccessibilityLabel: null,
    column2: null,
    column2AccessibilityLabel: null,
  };
  const obj22 = { text: null };
  const intl27 = tmp9(tmp3[15]).intl;
  obj22.text = intl27.string(tmp9(tmp3[15]).t.S6yQr8);
  obj21.label = closure_11(CellText, obj22);
  const intl28 = tmp9(tmp3[15]).intl;
  obj21.rowName = intl28.string(tmp9(tmp3[15]).t.S6yQr8);
  obj21.column1 = closure_11(CloseIcon, {});
  const intl29 = tmp9(tmp3[15]).intl;
  obj21.column1AccessibilityLabel = intl29.string(tmp9(tmp3[15]).t.l4qZrp);
  obj21.column2 = closure_11(CheckIcon, {});
  const intl30 = tmp9(tmp3[15]).intl;
  obj21.column2AccessibilityLabel = intl30.string(tmp9(tmp3[15]).t["tq+6t/"]);
  items[9] = obj21;
  items[10] = { withBottomBorder: false, withBottomBorderRadius: true, disableAccessibility: true };
  const found = items.filter((hidden) => null != hidden && !hidden.hidden);
  const obj23 = { style: null, children: null };
  const items1 = [tmp.container, highlightNitroBasic.style];
  obj23.style = items1;
  const obj24 = {
    style: tmp.headerText,
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    accessibilityRole: "header",
    children: null,
  };
  if (titleOverride == null) {
    const intl31 = tmp9(tmp3[15]).intl;
    titleOverride = intl31.string(tmp9(tmp3[15]).t.vLz3Zs);
  }
  obj24.children = titleOverride;
  const items2 = [closure_11(tmp9(tmp3[14]).Text, obj24), ,];
  if (isPremiumGroup) {
    isPremiumGroup = null != premiumGroupRole;
  }
  if (isPremiumGroup) {
    const obj25 = { style: tmp.premiumGroupCard, premiumGroupRole };
    isPremiumGroup = tmp12(tmp2(tmp3[26]), obj25);
  }
  items2[1] = isPremiumGroup;
  const obj15 = { numBoosts };
  const obj16 = { numBoosts };
  const tmp18 = closure_12;
  tmp9Result = tmp9(tmp3[10]);
  items2[2] = closure_11(View, {
    style: tmp.table,
    children: found.map((item, rowNumber) => {
      const obj = {};
      const merged = Object.assign(item);
      obj.highlightColumn1 = flag;
      obj.disableHighlightColumn2 = isPremiumGroup;
      obj.variant = str;
      obj.rowNumber = rowNumber;
      return closure_2_11(Row, obj, rowNumber);
    }),
  });
  obj23.children = items2;
  return tmp18(View, obj23);
}
