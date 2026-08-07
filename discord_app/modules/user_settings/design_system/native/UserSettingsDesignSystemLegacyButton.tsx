// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemLegacyButton.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import set from "jsxProd";
import { Stack } from "../../../../design/components/Stack/native/Stack.native.tsx";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { Button } from "../../../../design/void/native.tsx";

let c3;
let c4;
let c5;
let obj1;
const require = arg1;
function ComparisonRow(entry) {
  entry = entry.entry;
  const tmp = callback3();
  const hasItem = set.has(entry.color);
  const combined = "" + entry.color;
  let redesignVariant = null;
  if (entry.look !== Button.ButtonLooks.LINK) {
    redesignVariant = tmp4(1297).getRedesignVariant(entry.color);
    const tmp4Result = tmp4(1297);
  }
  const items = [tmp.comparisonRow, ];
  let darkBg = hasItem;
  if (hasItem) {
    darkBg = tmp.darkBg;
  }
  let obj = { style: items, children: null };
  items[1] = darkBg;
  let str = "text-muted";
  if (hasItem) {
    str = "text-default";
  }
  obj = { variant: "text-xs/medium", color: str, children: null };
  const items1 = [combined, " \u2192 ", ];
  let str2 = redesignVariant;
  if (redesignVariant == null) {
    str2 = "unmapped";
  }
  items1[2] = str2;
  obj[2] = items1;
  const items2 = [closure_4(Text.Text, obj), ];
  const obj1 = { style: tmp.comparisonButtons, children: null };
  const obj2 = { style: tmp.comparisonSide, children: null };
  const items3 = [callback2(Text.Text, { variant: "text-xxs/medium", color: "text-muted", children: "legacy" }), ];
  const obj3 = { look: entry.look, color: entry.color, size: null, shrink: true, text: null, textStyle: null, onPress: null };
  obj3[2] = Button.ButtonSizes.MEDIUM;
  obj3[4] = combined;
  let darkText = null;
  if (hasItem) {
    darkText = null;
    if (entry.look === tmp4(1297).ButtonLooks.FILLED) {
      darkText = tmp.darkText;
    }
  }
  obj3[5] = darkText;
  obj3[6] = function onPress() {

  };
  items3[1] = callback2(Button.Button, obj3);
  obj2[1] = items3;
  const items4 = [closure_4(closure_3, obj2), ];
  if (null != redesignVariant) {
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.comparisonSide;
    const items5 = [tmp9(tmp4(4298).Text, { variant: "text-xxs/medium", color: "text-muted", children: "mana" }), ];
    const obj5 = { variant: null, size: "md", text: null, onPress: null };
    obj5[0] = redesignVariant;
    obj5[2] = redesignVariant;
    obj5[3] = function onPress() {

    };
    items5[1] = tmp9(tmp4(4712).Button, obj5);
    obj4[1] = items5;
    let tmp9Result = tmp7(tmp8, obj4);
  } else {
    const obj6 = { style: null, children: null };
    obj6[0] = tmp.comparisonSide;
    obj6[1] = tmp9(tmp4(4298).Text, { variant: "text-xs/medium", color: "text-muted", children: "no mapping" });
    tmp9Result = tmp9(tmp8, obj6);
  }
  items4[1] = tmp9Result;
  obj1[1] = items4;
  items2[1] = closure_4(closure_3, obj1);
  obj[1] = items2;
  return closure_4(closure_3, obj);
}
function ComboRow(combo) {
  let color;
  let size;
  combo = combo.combo;
  const tmp = callback3();
  ({ color, size } = combo);
  let str = "";
  if (combo.shrink) {
    str = " / shrink";
  }
  const combined = "" + color + " / " + size + str;
  const hasItem = set.has(combo.color);
  const items = [tmp.comboRow, ];
  let darkBg = hasItem;
  if (hasItem) {
    darkBg = tmp.darkBg;
  }
  let obj = { style: items, children: null };
  items[1] = darkBg;
  let str2 = "text-muted";
  if (hasItem) {
    str2 = "text-default";
  }
  const items1 = [combined, " (", combo.count, ")"];
  const items2 = [closure_4(Text.Text, { variant: "text-xs/medium", color: str2, children: items1 }), ];
  obj = { look: combo.look, color: combo.color, size: combo.size, shrink: combo.shrink, text: combined, textStyle: null, onPress: null };
  let darkText = null;
  if (hasItem) {
    darkText = null;
    if (combo.look === tmp6(1297).ButtonLooks.FILLED) {
      darkText = tmp.darkText;
    }
  }
  obj[5] = darkText;
  obj[6] = function onPress() {

  };
  items2[1] = closure_5(Button.Button, obj);
  obj[1] = items2;
  return closure_4(closure_3, obj);
}
({ ScrollView: obj1, View: c3 } = get_ActivityIndicator);
({ jsxs: c4, jsx: c5 } = jsxProd);
let obj = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.BRAND, size: require("Button").ButtonSizes.LARGE, shrink: false, count: 1 };
let items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
obj = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.BRAND, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 116 };
items[1] = obj;
obj = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.BRAND, size: require("Button").ButtonSizes.MEDIUM, shrink: true, count: 12 };
items[2] = obj;
items[3] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.BRAND, size: require("Button").ButtonSizes.SMALL, shrink: false, count: 5 };
obj1 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.BRAND, size: require("Button").ButtonSizes.SMALL, shrink: false, count: 5 };
items[4] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.BRAND, size: require("Button").ButtonSizes.SMALL, shrink: true, count: 2 };
let obj2 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.BRAND, size: require("Button").ButtonSizes.SMALL, shrink: true, count: 2 };
items[5] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.BRAND, size: require("Button").ButtonSizes.XSMALL, shrink: false, count: 4 };
let obj3 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.BRAND, size: require("Button").ButtonSizes.XSMALL, shrink: false, count: 4 };
items[6] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.BRAND, size: require("Button").ButtonSizes.XSMALL, shrink: true, count: 1 };
let obj4 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.BRAND, size: require("Button").ButtonSizes.XSMALL, shrink: true, count: 1 };
items[7] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.GREEN, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 1 };
let obj5 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.GREEN, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 1 };
items[8] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.GREEN, size: require("Button").ButtonSizes.MEDIUM, shrink: true, count: 1 };
let obj6 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.GREEN, size: require("Button").ButtonSizes.MEDIUM, shrink: true, count: 1 };
items[9] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.GREEN, size: require("Button").ButtonSizes.SMALL, shrink: false, count: 1 };
const obj7 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.GREEN, size: require("Button").ButtonSizes.SMALL, shrink: false, count: 1 };
items[10] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.GREEN, size: require("Button").ButtonSizes.XSMALL, shrink: false, count: 1 };
const obj8 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.GREEN, size: require("Button").ButtonSizes.XSMALL, shrink: false, count: 1 };
items[11] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.GREY, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 10 };
const obj9 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.GREY, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 10 };
items[12] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.GREY, size: require("Button").ButtonSizes.MEDIUM, shrink: true, count: 1 };
const obj10 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.GREY, size: require("Button").ButtonSizes.MEDIUM, shrink: true, count: 1 };
items[13] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.GREY, size: require("Button").ButtonSizes.SMALL, shrink: false, count: 2 };
const obj11 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.GREY, size: require("Button").ButtonSizes.SMALL, shrink: false, count: 2 };
items[14] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.GREY, size: require("Button").ButtonSizes.SMALL, shrink: true, count: 1 };
const obj12 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.GREY, size: require("Button").ButtonSizes.SMALL, shrink: true, count: 1 };
items[15] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.GREY, size: require("Button").ButtonSizes.XSMALL, shrink: false, count: 1 };
const obj13 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.GREY, size: require("Button").ButtonSizes.XSMALL, shrink: false, count: 1 };
items[16] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.LIGHTGREY, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 2 };
const obj14 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.LIGHTGREY, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 2 };
items[17] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.LIGHTGREY, size: require("Button").ButtonSizes.XSMALL, shrink: false, count: 1 };
const obj15 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.LIGHTGREY, size: require("Button").ButtonSizes.XSMALL, shrink: false, count: 1 };
items[18] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.PRIMARY, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 2 };
const obj16 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.PRIMARY, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 2 };
items[19] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.PRIMARY, size: require("Button").ButtonSizes.SMALL, shrink: true, count: 2 };
const obj17 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.PRIMARY, size: require("Button").ButtonSizes.SMALL, shrink: true, count: 2 };
items[20] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.PRIMARY, size: require("Button").ButtonSizes.XSMALL, shrink: false, count: 2 };
const obj18 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.PRIMARY, size: require("Button").ButtonSizes.XSMALL, shrink: false, count: 2 };
items[21] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.RED, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 8 };
const obj19 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.RED, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 8 };
items[22] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.RED, size: require("Button").ButtonSizes.MEDIUM, shrink: true, count: 1 };
const obj20 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.RED, size: require("Button").ButtonSizes.MEDIUM, shrink: true, count: 1 };
items[23] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.RED, size: require("Button").ButtonSizes.XSMALL, shrink: false, count: 1 };
const obj21 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.RED, size: require("Button").ButtonSizes.XSMALL, shrink: false, count: 1 };
items[24] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.TRANSPARENT, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 8 };
const obj22 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.TRANSPARENT, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 8 };
items[25] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.TRANSPARENT, size: require("Button").ButtonSizes.MEDIUM, shrink: true, count: 3 };
const obj23 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.TRANSPARENT, size: require("Button").ButtonSizes.MEDIUM, shrink: true, count: 3 };
items[26] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.TRANSPARENT, size: require("Button").ButtonSizes.XSMALL, shrink: false, count: 1 };
const obj24 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.TRANSPARENT, size: require("Button").ButtonSizes.XSMALL, shrink: false, count: 1 };
items[27] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.TRANSPARENT, size: require("Button").ButtonSizes.XSMALL, shrink: true, count: 1 };
const obj25 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.TRANSPARENT, size: require("Button").ButtonSizes.XSMALL, shrink: true, count: 1 };
items[28] = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.WHITE, size: require("Button").ButtonSizes.SMALL, shrink: false, count: 1 };
const obj26 = { look: require("Button").ButtonLooks.FILLED, color: require("Button").ButtonColors.WHITE, size: require("Button").ButtonSizes.SMALL, shrink: false, count: 1 };
items[29] = { look: require("Button").ButtonLooks.LINK, color: require("Button").ButtonColors.BRAND, size: require("Button").ButtonSizes.XSMALL, shrink: true, count: 1 };
const obj27 = { look: require("Button").ButtonLooks.LINK, color: require("Button").ButtonColors.BRAND, size: require("Button").ButtonSizes.XSMALL, shrink: true, count: 1 };
items[30] = { look: require("Button").ButtonLooks.LINK, color: require("Button").ButtonColors.LINK, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 3 };
const obj28 = { look: require("Button").ButtonLooks.LINK, color: require("Button").ButtonColors.LINK, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 3 };
items[31] = { look: require("Button").ButtonLooks.LINK, color: require("Button").ButtonColors.LINK, size: require("Button").ButtonSizes.MEDIUM, shrink: true, count: 1 };
const obj29 = { look: require("Button").ButtonLooks.LINK, color: require("Button").ButtonColors.LINK, size: require("Button").ButtonSizes.MEDIUM, shrink: true, count: 1 };
items[32] = { look: require("Button").ButtonLooks.LINK, color: require("Button").ButtonColors.LINK, size: require("Button").ButtonSizes.SMALL, shrink: false, count: 2 };
const obj30 = { look: require("Button").ButtonLooks.LINK, color: require("Button").ButtonColors.LINK, size: require("Button").ButtonSizes.SMALL, shrink: false, count: 2 };
items[33] = { look: require("Button").ButtonLooks.LINK, color: require("Button").ButtonColors.LINK, size: require("Button").ButtonSizes.SMALL, shrink: true, count: 1 };
const obj31 = { look: require("Button").ButtonLooks.LINK, color: require("Button").ButtonColors.LINK, size: require("Button").ButtonSizes.SMALL, shrink: true, count: 1 };
items[34] = { look: require("Button").ButtonLooks.LINK, color: require("Button").ButtonColors.LINK, size: require("Button").ButtonSizes.XSMALL, shrink: false, count: 1 };
const obj32 = { look: require("Button").ButtonLooks.LINK, color: require("Button").ButtonColors.LINK, size: require("Button").ButtonSizes.XSMALL, shrink: false, count: 1 };
items[35] = { look: require("Button").ButtonLooks.LINK, color: require("Button").ButtonColors.TRANSPARENT, size: require("Button").ButtonSizes.XSMALL, shrink: false, count: 1 };
const obj33 = { look: require("Button").ButtonLooks.LINK, color: require("Button").ButtonColors.TRANSPARENT, size: require("Button").ButtonSizes.XSMALL, shrink: false, count: 1 };
items[36] = { look: require("Button").ButtonLooks.OUTLINED, color: require("Button").ButtonColors.BRAND, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 2 };
const obj34 = { look: require("Button").ButtonLooks.OUTLINED, color: require("Button").ButtonColors.BRAND, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 2 };
items[37] = { look: require("Button").ButtonLooks.OUTLINED, color: require("Button").ButtonColors.GREY, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 1 };
const obj35 = { look: require("Button").ButtonLooks.OUTLINED, color: require("Button").ButtonColors.GREY, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 1 };
items[38] = { look: require("Button").ButtonLooks.OUTLINED, color: require("Button").ButtonColors.PRIMARY, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 1 };
const obj36 = { look: require("Button").ButtonLooks.OUTLINED, color: require("Button").ButtonColors.PRIMARY, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 1 };
items[39] = { look: require("Button").ButtonLooks.OUTLINED, color: require("Button").ButtonColors.TRANSPARENT, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 1 };
const obj37 = { look: require("Button").ButtonLooks.OUTLINED, color: require("Button").ButtonColors.TRANSPARENT, size: require("Button").ButtonSizes.MEDIUM, shrink: false, count: 1 };
items[40] = { look: require("Button").ButtonLooks.OUTLINED, color: require("Button").ButtonColors.WHITE, size: require("Button").ButtonSizes.SMALL, shrink: false, count: 1 };
let items1 = [require("Button").ButtonColors.WHITE];
let set = new Set(items1);
const obj39 = { comboRow: null, darkText: null, darkBg: null, comparisonRow: null, comparisonButtons: null, comparisonSide: null, container: null, header: null };
const obj38 = { look: require("Button").ButtonLooks.OUTLINED, color: require("Button").ButtonColors.WHITE, size: require("Button").ButtonSizes.SMALL, shrink: false, count: 1 };
obj39[0] = { gap: 4, paddingHorizontal: require("Themes").space.PX_16, paddingVertical: require("Themes").space.PX_4 };
createCacheKey = { color: require("Themes").unsafe_rawColors.GREEN_360 };
obj39[1] = createCacheKey;
const obj40 = { gap: 4, paddingHorizontal: require("Themes").space.PX_16, paddingVertical: require("Themes").space.PX_4 };
obj39[2] = { backgroundColor: require("Themes").unsafe_rawColors.PRIMARY_600, borderRadius: require("Themes").radii.sm, marginHorizontal: require("Themes").space.PX_8, paddingHorizontal: require("Themes").space.PX_8, paddingVertical: require("Themes").space.PX_8 };
const obj42 = { backgroundColor: require("Themes").unsafe_rawColors.PRIMARY_600, borderRadius: require("Themes").radii.sm, marginHorizontal: require("Themes").space.PX_8, paddingHorizontal: require("Themes").space.PX_8, paddingVertical: require("Themes").space.PX_8 };
obj39[3] = { gap: 4, paddingHorizontal: require("Themes").space.PX_16, paddingVertical: require("Themes").space.PX_8 };
const obj43 = { gap: 4, paddingHorizontal: require("Themes").space.PX_16, paddingVertical: require("Themes").space.PX_8 };
obj39[4] = { flexDirection: "row", gap: require("Themes").space.PX_12, alignItems: "flex-end" };
obj39[5] = { flex: 1, gap: 2 };
const obj44 = { flexDirection: "row", gap: require("Themes").space.PX_12, alignItems: "flex-end" };
obj39[6] = { paddingBottom: require("Themes").space.PX_48 };
const obj45 = { paddingBottom: require("Themes").space.PX_48 };
obj39[7] = { paddingHorizontal: require("Themes").space.PX_16, paddingTop: require("Themes").space.PX_16, paddingBottom: require("Themes").space.PX_8 };
let closure_10 = createCacheKey.createStyles(obj39);
const result = set.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemLegacyButton.tsx");

export default function UserSettingsDesignSystemLegacyButton() {
  const tmp = callback3();
  let tmp2 = (function groupByLook(items) {
    const obj = {};
    const iter = items[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let look = nextResult.look;
      let tmp3 = look;
      let tmp2 = nextResult;
      if (null == obj[look]) {
        let tmp4 = look;
        obj[tmp3] = [];
      }
      let tmp5 = look;
      let arr = obj[tmp3];
      let tmp6 = nextResult;
      arr = arr.push(tmp2);
      continue;
    }
    return obj;
  })(items);
  let obj = {};
  let iter = (function getUniqueComparisons() {
    const set = new Set();
    const items = [];
    const iter = dependencyMap2[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let _HermesInternal = HermesInternal;
      let combined = "" + nextResult.look + "/" + nextResult.color;
      let tmp5 = combined;
      if (!set.has(combined)) {
        let tmp6 = combined;
        let addResult = set.add(tmp5);
        let obj = { look: null, color: null };
        let tmp8 = nextResult;
        ({ look: obj2[0], color: obj2[1] } = tmp3);
        let arr = items.push(obj);
      }
      continue;
    }
    return items;
  })()[Symbol.iterator]();
  let nextResult = iter.next();
  while (iter !== undefined) {
    let tmp5 = nextResult;
    if (null == obj[nextResult.look]) {
      let tmp6 = nextResult;
      obj[tmp5.look] = [];
    }
    let tmp7 = nextResult;
    let arr = obj[tmp5.look];
    arr = arr.push(tmp5);
    continue;
  }
  obj = { style: tmp.container, children: null };
  obj = { spacing: 4, style: tmp.header, children: null };
  items = [callback2(Text.Text, { variant: "heading-xl/bold", children: "Migration Mapping" }), callback2(Text.Text, { variant: "text-sm/normal", color: "text-muted", children: "Legacy (uikit-native) \u2192 Mana side-by-side" })];
  obj[2] = items;
  const items1 = [callback(Stack.Stack, obj), , , ];
  const entries = Object.entries(obj);
  items1[1] = entries.map((arg0) => {
    let arr;
    let tmp;
    [tmp, arr] = arg0;
    const obj = { title: tmp, children: null };
    obj[1] = arr.map((entry) => callback(closure_8, { entry }, arg1));
    return callback2(callback(7907).FormSection, obj, "cmp-" + tmp);
  });
  const obj1 = { spacing: 4, style: tmp.header, children: null };
  const items2 = [callback2(Text.Text, { variant: "heading-xl/bold", children: "Legacy Button Audit" }), callback2(Text.Text, { variant: "text-sm/normal", color: "text-muted", children: "41 combinations across 185 importers" })];
  obj1[2] = items2;
  items1[2] = callback(Stack.Stack, obj1);
  const entries1 = Object.entries(tmp2);
  items1[3] = entries1.map((arg0) => {
    let arr;
    let tmp;
    [tmp, arr] = arg0;
    const obj = { title: null, children: null };
    obj[0] = "" + tmp + " (" + arr.reduce((arg0, count) => arg0 + count.count, 0) + " usages)";
    obj[1] = arr.map((combo) => callback(closure_9, { combo }, arg1));
    return callback2(callback(7907).FormSection, obj, tmp);
  });
  obj[1] = items1;
  return callback(closure_2, obj);
};