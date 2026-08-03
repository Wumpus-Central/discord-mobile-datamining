// === Module 12619: CheckIcon ===

// Module 12619 (CheckIcon)
import _slicedToArray from "_slicedToArray";
import PremiumTier0LogoSmall from "PremiumTier0LogoSmall";
import { View } from "usePremiumPlanPrice";
import { HorizontalGradient } from "ME";
import GuildFeatures from "GuildFeatures";
import jsxProd from "preload";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let closure_12;
let error;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function CheckIcon() {
  let obj = require(4101) /* AccessibilityAnnouncer */;
  const tmp = importDefault;
  const tmp3 = importDefault(4191)();
  const unsafe_rawColors = importDefault(712).unsafe_rawColors;
  const isThemeDarkResult = obj.isThemeDark(importDefault(4191)());
  obj = { source: null, color: null, size: null };
  obj[0] = tmp(12620);
  obj[1] = obj.isThemeDark(importDefault(4191)()) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_860;
  obj[2] = require(1297) /* Button */.IconSizes.SMALL;
  return callback2(require(1297) /* Button */.Icon, obj);
}
function CloseIcon() {
  const obj = { source: null, style: null, size: null };
  obj[0] = importDefault(12621);
  obj[1] = callback3().icon;
  obj[2] = require(1297) /* Button */.IconSizes.SMALL;
  return callback2(require(1297) /* Button */.Icon, obj);
}
function CellText(children) {
  return callback2(require(4251) /* Text */.Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: children.text });
}
function Row(withTopBorderRadius) {
  let column1;
  let column1AccessibilityLabel;
  let column2;
  let column2AccessibilityLabel;
  let disableHighlightColumn2;
  let highlightColumn1;
  let label;
  let rowName;
  let rowNumber;
  let withBottomBorder;
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
  let _require;
  const tmp = createCacheKey();
  const tmp2 = callback(React.useState(0), 2);
  _require = tmp2[1];
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
  const items = [tmp.row, ];
  if (withBottomBorder) {
    withBottomBorder = tmp.bottomBorder;
  }
  let obj = {
    style: items,
    onLayout(nativeEvent) {
      return callback(nativeEvent.nativeEvent.layout.height);
    },
    children: null
  };
  items[1] = withBottomBorder;
  obj = { style: items1, accessible: !flag3, accessibilityLabel: rowName, children: label };
  items1 = [, ];
  ({ labelCell: arr2[0], cell: arr2[1] } = tmp);
  const items2 = [callback2(View, obj), , ];
  const items3 = [, , , , ];
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
    const intl = _require(1236).intl;
    const intl2 = _require(1236).intl;
    const obj1 = { accessibilityLabel: null, rowNumber: null, rowName: null, columnNumber: 1, columnName: null };
    obj1[0] = column1AccessibilityLabel;
    obj1[1] = rowNumber;
    obj1[2] = rowName;
    obj1[4] = intl.string(_require(1236).t["t9uG/o"]);
    formatToPlainStringResult = intl2.formatToPlainString(_require(1236).t.EZjXN3, obj1);
    const stringResult = intl.string(_require(1236).t["t9uG/o"]);
  }
  obj[1] = formatToPlainStringResult;
  obj[2] = !flag3;
  obj[3] = column1;
  items2[1] = callback2(View, obj);
  if ("nitro_home" === str) {
    if (!highlightColumn1) {
      if (!disableHighlightColumn2) {
        let topBorderRadius2 = flag;
        if (flag) {
          topBorderRadius2 = tmp.topBorderRadius;
        }
        const items4 = [topBorderRadius2, , , , , ];
        let tmp10 = flag;
        if (flag) {
          const obj2 = { borderTopColor: null, borderTopWidth: 2 };
          obj2[0] = c13;
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
          const obj3 = { borderBottomColor: null, borderBottomWidth: 2 };
          obj3[0] = c13;
          tmp12 = obj3;
        }
        let obj4 = { style: null, accessibilityLabel: null, accessible: null, children: null };
        items4[3] = tmp12;
        items4[4] = tmp.nitroHomeHightlightedBorderLeftRight;
        items4[5] = { overflow: "hidden" };
        obj4[0] = items4;
        let formatToPlainStringResult1;
        if (null != column2AccessibilityLabel) {
          const intl3 = _require(1236).intl;
          const intl4 = _require(1236).intl;
          const obj5 = { accessibilityLabel: null, rowNumber: null, rowName: null, columnNumber: 2, columnName: null };
          obj5[0] = column2AccessibilityLabel;
          obj5[1] = rowNumber;
          obj5[2] = rowName;
          obj5[4] = intl3.string(_require(1236).t.lG6a5x);
          formatToPlainStringResult1 = intl4.formatToPlainString(_require(1236).t.EZjXN3, obj5);
          const stringResult1 = intl3.string(_require(1236).t.lG6a5x);
        }
        obj4[1] = formatToPlainStringResult1;
        obj4[2] = !flag3;
        const sum = num + num2 + num3;
        const obj6 = { style: null, start: null, end: null, colors: null, children: null };
        const obj7 = { height: null };
        obj7[0] = tmp2[0] - sum;
        const items5 = [obj7, tmp.dataCell];
        obj6[0] = items5;
        ({ START: obj9[1], END: obj9[2] } = HorizontalGradient);
        obj6[3] = ["rgba(133, 71, 198, 0.10)", "rgba(184, 69, 193, 0.10)", "rgba(171, 93, 138, 0.10)"];
        obj6[4] = column2;
        obj4[3] = tmp5(importDefault(4677), obj6);
      }
      items2[2] = tmp5(tmp4, obj4);
      obj[2] = items2;
      return closure_12(tmp4, obj);
    }
  }
  const items6 = [, , , , ];
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
    const intl5 = _require(1236).intl;
    const intl6 = _require(1236).intl;
    const obj9 = { accessibilityLabel: null, rowNumber: null, rowName: null, columnNumber: 2, columnName: null };
    obj9[0] = column2AccessibilityLabel;
    obj9[1] = rowNumber;
    obj9[2] = rowName;
    obj9[4] = intl5.string(_require(1236).t.lG6a5x);
    formatToPlainStringResult2 = intl6.formatToPlainString(_require(1236).t.EZjXN3, obj9);
    const stringResult2 = intl5.string(_require(1236).t.lG6a5x);
  }
  obj8[1] = formatToPlainStringResult2;
  obj8[2] = !flag3;
  obj8[3] = column2;
  obj4 = obj8;
}
({ NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: error, PRICE_PLACEHOLDER: metroImportAll, PremiumTypes: c9, SubscriptionPlans: c10 } = GuildFeatures);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let c13 = "rgba(184, 69, 193, 0.5)";
createCacheKey = { container: { display: "flex", flex: 1, width: "100%" }, headerText: { textAlign: "center" }, logo: { marginTop: 8, marginBottom: -6 }, table: { marginTop: 16 }, row: { display: "flex", flexDirection: "row" }, bottomBorder: { borderBottomColor: "rgba(106, 116, 128, 0.24)", borderBottomWidth: 1 }, topBorderRadius: null, bottomBorderRadius: null, cell: null, labelCell: null, dataCell: null, themedHighlightedCell: null, nitroHomeHightlightedBorderLeftRight: null, premiumGroupCard: null, priceContainer: null };
createCacheKey = { borderTopLeftRadius: require("Themes").radii.sm, borderTopRightRadius: require("Themes").radii.sm };
createCacheKey[6] = createCacheKey;
createCacheKey[7] = { borderBottomLeftRadius: require("Themes").radii.sm, borderBottomRightRadius: require("Themes").radii.sm };
createCacheKey[8] = { paddingVertical: 12 };
createCacheKey[9] = { flex: 1, justifyContent: "flex-start" };
createCacheKey[10] = { flexDirection: "row", justifyContent: "center", alignItems: "center", width: 82 };
let obj1 = { borderBottomLeftRadius: require("Themes").radii.sm, borderBottomRightRadius: require("Themes").radii.sm };
createCacheKey[11] = { backgroundColor: require("result").PREMIUM_FEATURES_TABLE_HIGHLIGHTED_CELL_BG };
createCacheKey[12] = { borderLeftColor: "rgba(184, 69, 193, 0.5)", borderLeftWidth: 2, borderRightColor: "rgba(184, 69, 193, 0.5)", borderRightWidth: 2 };
createCacheKey[13] = { marginTop: 16 };
createCacheKey[14] = { alignItems: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj3 = { icon: null };
let obj2 = { backgroundColor: require("result").PREMIUM_FEATURES_TABLE_HIGHLIGHTED_CELL_BG };
obj3[0] = { tintColor: require("Themes").colors.TEXT_MUTED };
let closure_16 = createCacheKey.createStyles(obj3);
let obj4 = { tintColor: require("Themes").colors.TEXT_MUTED };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesTable.tsx");

export default function PremiumFeaturesTable(highlightNitroBasic) {
  let isFractionalOnly;
  let isPremiumGroup;
  let titleOverride;
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
  const tmp = createCacheKey();
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
  obj = { column1: callback2(tmp2(tmp3[19]), obj), column2: callback2(tmp2(tmp3[20]), obj1), withBottomBorder: false, disableAccessibility: true, hidden: !isPremiumGroup };
  obj = { style: tmp.logo, width: 48, height: 9 };
  obj1 = { style: tmp.logo, width: 50, height: 9 };
  const items = [obj, , , , , , , , , , ];
  const obj2 = { accessible: true, accessibilityLabel: null, style: null, source: null };
  let tmp2Result = tmp2(tmp3[21]);
  const intl = flag(tmp3[15]).intl;
  obj2[1] = intl.string(flag(tmp3[15]).t["t9uG/o"]);
  obj2[2] = tmp.logo;
  let obj6 = flag(tmp3[10]);
  if (obj6.isThemeDark(tmp4)) {
    tmp2Result = tmp2(tmp3[22]);
  } else {
    tmp2Result = tmp2(tmp3[23]);
  }
  const obj3 = { column1: callback2(tmp2Result, obj2), column2: null, withBottomBorder: false, withTopBorderRadius: true, disableAccessibility: true, hidden: null };
  obj2[3] = tmp2Result;
  const obj4 = { accessible: true, accessibilityLabel: null, style: null, source: null };
  const intl2 = tmp9(tmp3[15]).intl;
  obj4[1] = intl2.string(tmp9(tmp3[15]).t.lG6a5x);
  obj4[2] = tmp.logo;
  const tmp2Result1 = str(tmp3[21]);
  if (tmp9Result.isThemeDark(tmp4)) {
    let tmp2Result2 = tmp2(tmp3[24]);
  } else {
    tmp2Result2 = tmp2(tmp3[25]);
  }
  obj4[3] = tmp2Result2;
  obj3[1] = callback2(tmp2Result1, obj4);
  obj3[5] = isPremiumGroup;
  items[1] = obj3;
  const obj5 = { label: null, rowName: null, column1: null, column1AccessibilityLabel: null, column2: null, column2AccessibilityLabel: null };
  obj6 = { text: null };
  const intl3 = tmp9(tmp3[15]).intl;
  obj6[0] = intl3.string(tmp9(tmp3[15]).t.LkKGZ2);
  obj5[0] = callback2(CellText, obj6);
  const intl4 = tmp9(tmp3[15]).intl;
  obj5[1] = intl4.string(tmp9(tmp3[15]).t.LkKGZ2);
  const obj7 = { style: tmp.priceContainer, children: null };
  const parts = priceString.split(/ (?=\()/g);
  obj7[1] = parts.map((text) => callback(closure_18, { text }, text));
  obj5[2] = callback2(View, obj7);
  obj5[3] = priceString;
  const obj8 = { style: tmp.priceContainer, children: null };
  const parts1 = priceString1.split(/ (?=\()/g);
  obj8[1] = parts1.map((text) => callback(closure_18, { text }, text));
  obj5[4] = callback2(View, obj8);
  obj5[5] = priceString1;
  items[2] = obj5;
  const obj9 = { label: null, rowName: null, column1: null, column1AccessibilityLabel: null, column2: null, column2AccessibilityLabel: null };
  const obj10 = { text: null };
  const intl5 = tmp9(tmp3[15]).intl;
  obj10[0] = intl5.string(tmp9(tmp3[15]).t.ORlUdL);
  obj9[0] = callback2(CellText, obj10);
  const intl6 = tmp9(tmp3[15]).intl;
  obj9[1] = intl6.string(tmp9(tmp3[15]).t.ORlUdL);
  obj9[2] = callback2(CheckIcon, {});
  const intl7 = tmp9(tmp3[15]).intl;
  obj9[3] = intl7.string(tmp9(tmp3[15]).t["tq+6t/"]);
  obj9[4] = callback2(CheckIcon, {});
  const intl8 = tmp9(tmp3[15]).intl;
  obj9[5] = intl8.string(tmp9(tmp3[15]).t["tq+6t/"]);
  items[3] = obj9;
  const obj11 = { label: null, rowName: null, column1: null, column1AccessibilityLabel: null, column2: null, column2AccessibilityLabel: null };
  const obj12 = { text: null };
  const intl9 = tmp9(tmp3[15]).intl;
  obj12[0] = intl9.string(tmp9(tmp3[15]).t["ufhQC+"]);
  obj11[0] = callback2(CellText, obj12);
  const intl10 = tmp9(tmp3[15]).intl;
  obj11[1] = intl10.string(tmp9(tmp3[15]).t["ufhQC+"]);
  obj11[2] = callback2(tmp9(tmp3[14]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: maxFileSizeForPremiumType });
  obj11[3] = maxFileSizeForPremiumType;
  obj11[4] = callback2(tmp9(tmp3[14]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: maxFileSizeForPremiumType1 });
  obj11[5] = maxFileSizeForPremiumType1;
  items[4] = obj11;
  const obj13 = { label: null, rowName: null, column1: null, column1AccessibilityLabel: null, column2: null, column2AccessibilityLabel: null, hidden: null };
  const obj14 = { text: null };
  const intl11 = tmp9(tmp3[15]).intl;
  obj14[0] = intl11.string(tmp9(tmp3[15]).t["svn/YX"]);
  obj13[0] = callback2(CellText, obj14);
  const intl12 = tmp9(tmp3[15]).intl;
  obj13[1] = intl12.string(tmp9(tmp3[15]).t["svn/YX"]);
  obj13[2] = callback2(CheckIcon, {});
  const intl13 = tmp9(tmp3[15]).intl;
  obj13[3] = intl13.string(tmp9(tmp3[15]).t["tq+6t/"]);
  obj13[4] = callback2(CheckIcon, {});
  const intl14 = tmp9(tmp3[15]).intl;
  obj13[5] = intl14.string(tmp9(tmp3[15]).t["tq+6t/"]);
  obj13[6] = isFractionalOnly;
  items[5] = obj13;
  const obj15 = { label: null, rowName: null, column1: null, column1AccessibilityLabel: null, column2: null, column2AccessibilityLabel: null, hidden: null };
  const obj16 = { text: null };
  const intl15 = tmp9(tmp3[15]).intl;
  obj16[0] = intl15.formatToPlainString(tmp9(tmp3[15]).t.DbkNFj, { numBoosts: closure_7 });
  obj15[0] = callback2(CellText, obj16);
  const intl16 = tmp9(tmp3[15]).intl;
  obj15[1] = intl16.formatToPlainString(tmp9(tmp3[15]).t.DbkNFj, { numBoosts: closure_7 });
  obj15[2] = callback2(CloseIcon, {});
  const intl17 = tmp9(tmp3[15]).intl;
  obj15[3] = intl17.string(tmp9(tmp3[15]).t.l4qZrp);
  obj15[4] = callback2(CheckIcon, {});
  const intl18 = tmp9(tmp3[15]).intl;
  obj15[5] = intl18.string(tmp9(tmp3[15]).t["tq+6t/"]);
  obj15[6] = isFractionalOnly;
  items[6] = obj15;
  const obj19 = { label: null, rowName: null, column1: null, column1AccessibilityLabel: null, column2: null, column2AccessibilityLabel: null };
  const obj20 = { text: null };
  const intl19 = tmp9(tmp3[15]).intl;
  obj20[0] = intl19.string(tmp9(tmp3[15]).t["Gv/rQ6"]);
  obj19[0] = callback2(CellText, obj20);
  const intl20 = tmp9(tmp3[15]).intl;
  obj19[1] = intl20.string(tmp9(tmp3[15]).t["Gv/rQ6"]);
  obj19[2] = callback2(CloseIcon, {});
  const intl21 = tmp9(tmp3[15]).intl;
  obj19[3] = intl21.string(tmp9(tmp3[15]).t.l4qZrp);
  obj19[4] = callback2(CheckIcon, {});
  const intl22 = tmp9(tmp3[15]).intl;
  obj19[5] = intl22.string(tmp9(tmp3[15]).t["tq+6t/"]);
  items[7] = obj19;
  const obj21 = { label: null, rowName: null, column1: null, column1AccessibilityLabel: null, column2: null, column2AccessibilityLabel: null };
  const obj22 = { text: null };
  const intl23 = tmp9(tmp3[15]).intl;
  obj22[0] = intl23.string(tmp9(tmp3[15]).t.myyAEr);
  obj21[0] = callback2(CellText, obj22);
  const intl24 = tmp9(tmp3[15]).intl;
  obj21[1] = intl24.string(tmp9(tmp3[15]).t.myyAEr);
  obj21[2] = callback2(CloseIcon, {});
  const intl25 = tmp9(tmp3[15]).intl;
  obj21[3] = intl25.string(tmp9(tmp3[15]).t.l4qZrp);
  obj21[4] = callback2(CheckIcon, {});
  const intl26 = tmp9(tmp3[15]).intl;
  obj21[5] = intl26.string(tmp9(tmp3[15]).t["tq+6t/"]);
  items[8] = obj21;
  const obj23 = { label: null, rowName: null, column1: null, column1AccessibilityLabel: null, column2: null, column2AccessibilityLabel: null };
  const obj24 = { text: null };
  const intl27 = tmp9(tmp3[15]).intl;
  obj24[0] = intl27.string(tmp9(tmp3[15]).t.S6yQr8);
  obj23[0] = callback2(CellText, obj24);
  const intl28 = tmp9(tmp3[15]).intl;
  obj23[1] = intl28.string(tmp9(tmp3[15]).t.S6yQr8);
  obj23[2] = callback2(CloseIcon, {});
  const intl29 = tmp9(tmp3[15]).intl;
  obj23[3] = intl29.string(tmp9(tmp3[15]).t.l4qZrp);
  obj23[4] = callback2(CheckIcon, {});
  const intl30 = tmp9(tmp3[15]).intl;
  obj23[5] = intl30.string(tmp9(tmp3[15]).t["tq+6t/"]);
  items[9] = obj23;
  items[10] = { withBottomBorder: false, withBottomBorderRadius: true, disableAccessibility: true };
  const found = items.filter((hidden) => null != hidden && !hidden.hidden);
  const obj25 = { style: items1, children: null };
  items1 = [tmp.container, highlightNitroBasic.style];
  const obj26 = { style: tmp.headerText, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: null };
  if (titleOverride == null) {
    const intl31 = tmp9(tmp3[15]).intl;
    titleOverride = intl31.string(tmp9(tmp3[15]).t.vLz3Zs);
  }
  obj26[4] = titleOverride;
  const items2 = [callback2(tmp9(tmp3[14]).Text, obj26), , ];
  if (isPremiumGroup) {
    isPremiumGroup = null != premiumGroupRole;
  }
  if (isPremiumGroup) {
    const obj27 = { style: null, premiumGroupRole: null };
    obj27[0] = tmp.premiumGroupCard;
    obj27[1] = premiumGroupRole;
    isPremiumGroup = tmp12(tmp2(tmp3[26]), obj27);
  }
  items2[1] = isPremiumGroup;
  const obj17 = { numBoosts: closure_7 };
  const obj18 = { numBoosts: closure_7 };
  const tmp18 = closure_12;
  tmp9Result = tmp9(tmp3[10]);
  items2[2] = callback2(View, {
    style: tmp.table,
    children: found.map((arg0, rowNumber) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.highlightColumn1 = flag;
      obj.disableHighlightColumn2 = isPremiumGroup;
      obj.variant = str;
      obj.rowNumber = rowNumber;
      return outer1_11(outer1_19, obj, rowNumber);
    })
  });
  obj25[1] = items2;
  return tmp18(View, obj25);
};