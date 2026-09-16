// === Module 15881: UserSettingsDesignSystemLegacyButton ===

// Module 15881 (UserSettingsDesignSystemLegacyButton)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4634 */;
import Stack_Stack from "Stack/Stack" /* 5058 */;
import components_Button_Button from "components/Button/Button" /* 5060 */;
import Form from "Form" /* 8728 */;
import noop from "module_19" /* 19 */;

require = fn;
function ComparisonRow(entry) {
  entry = entry.entry;
  const tmp = closure_10();
  const hasItem = set.has(entry.color);
  const combined = "" + entry.color;
  let redesignVariant = null;
  if (entry.look !== native.ButtonLooks.LINK) {
    redesignVariant = native.getRedesignVariant(entry.color);
    const tmp4Result = native;
  }
  items = [tmp.comparisonRow, ];
  let darkBg = hasItem;
  if (hasItem) {
    darkBg = tmp.darkBg;
  }
  const obj = { style: items, children: null };
  items[1] = darkBg;
  let str = "text-muted";
  if (hasItem) {
    str = "text-default";
  }
  const obj2 = { variant: "text-xs/medium", color: str, children: null };
  const items1 = [combined, " \u2192 ", ];
  let str2 = redesignVariant;
  if (redesignVariant == null) {
    str2 = "unmapped";
  }
  items1[2] = str2;
  obj2.children = items1;
  const items2 = [React4(Text_Text.Text, obj2), ];
  const obj3 = { style: tmp.comparisonButtons, children: null };
  const obj4 = { style: tmp.comparisonSide, children: null };
  const items3 = [hasOwnProperty(Text_Text.Text, { variant: "text-xxs/medium", color: "text-muted", children: "legacy" }), ];
  const obj5 = { look: entry.look, color: entry.color, size: native.ButtonSizes.MEDIUM, shrink: true, text: combined, textStyle: null, onPress: null };
  let darkText = null;
  if (hasItem) {
    darkText = null;
    if (entry.look === native.ButtonLooks.FILLED) {
      darkText = tmp.darkText;
    }
  }
  obj5.textStyle = darkText;
  obj5.onPress = function onPress() {

  };
  items3[1] = hasOwnProperty(native.Button, obj5);
  obj4.children = items3;
  const items4 = [React4(React3, obj4), ];
  if (null != redesignVariant) {
    const obj6 = { style: tmp.comparisonSide, children: null };
    const items5 = [hasOwnProperty(Text_Text.Text, { variant: "text-xxs/medium", color: "text-muted", children: "mana" }), ];
    const obj7 = {
      variant: redesignVariant,
      size: "md",
      text: redesignVariant,
      onPress() {

        }
    };
    items5[1] = hasOwnProperty(components_Button_Button.Button, obj7);
    obj6.children = items5;
    let tmp9Result = React4(React3, obj6);
  } else {
    const obj8 = { style: tmp.comparisonSide, children: hasOwnProperty(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", children: "no mapping" }) };
    tmp9Result = hasOwnProperty(React3, obj8);
  }
  items4[1] = tmp9Result;
  obj3.children = items4;
  items2[1] = React4(React3, obj3);
  obj.children = items2;
  return React4(React3, obj);
}
function ComboRow(combo) {
  combo = combo.combo;
  const tmp = closure_10();
  ({ color, size } = combo);
  let str = "";
  if (combo.shrink) {
    str = " / shrink";
  }
  const combined = "" + color + " / " + size + str;
  const hasItem = set.has(combo.color);
  items = [tmp.comboRow, ];
  let darkBg = hasItem;
  if (hasItem) {
    darkBg = tmp.darkBg;
  }
  const obj = { style: items, children: null };
  items[1] = darkBg;
  let str2 = "text-muted";
  if (hasItem) {
    str2 = "text-default";
  }
  const obj2 = { variant: "text-xs/medium", color: str2, children: null };
  const items1 = [combined, " (", combo.count, ")"];
  obj2.children = items1;
  const items2 = [React4(Text_Text.Text, obj2), ];
  const obj3 = { look: combo.look, color: combo.color, size: combo.size, shrink: combo.shrink, text: combined, textStyle: null, onPress: null };
  let darkText = null;
  if (hasItem) {
    darkText = null;
    if (combo.look === native.ButtonLooks.FILLED) {
      darkText = tmp.darkText;
    }
  }
  obj3.textStyle = darkText;
  obj3.onPress = function onPress() {

  };
  items2[1] = hasOwnProperty(native.Button, obj3);
  obj.children = items2;
  return React4(React3, obj);
}
get_ActivityIndicator = fn(17);
({ ScrollView: c2, View: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsxs: closure_4, jsx: hasOwnProperty } = jsxProd);
let items = [{ look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.BRAND, size: fn(1177).ButtonSizes.LARGE, shrink: false, count: 1 }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
let obj = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.BRAND, size: fn(1177).ButtonSizes.LARGE, shrink: false, count: 1 };
items[1] = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.BRAND, size: fn(1177).ButtonSizes.MEDIUM, shrink: false, count: 116 };
let obj2 = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.BRAND, size: fn(1177).ButtonSizes.MEDIUM, shrink: false, count: 116 };
items[2] = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.BRAND, size: fn(1177).ButtonSizes.MEDIUM, shrink: true, count: 12 };
let obj3 = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.BRAND, size: fn(1177).ButtonSizes.MEDIUM, shrink: true, count: 12 };
items[3] = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.BRAND, size: fn(1177).ButtonSizes.SMALL, shrink: false, count: 5 };
let obj4 = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.BRAND, size: fn(1177).ButtonSizes.SMALL, shrink: false, count: 5 };
items[4] = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.BRAND, size: fn(1177).ButtonSizes.SMALL, shrink: true, count: 2 };
let obj5 = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.BRAND, size: fn(1177).ButtonSizes.SMALL, shrink: true, count: 2 };
items[5] = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.BRAND, size: fn(1177).ButtonSizes.XSMALL, shrink: false, count: 4 };
let obj6 = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.BRAND, size: fn(1177).ButtonSizes.XSMALL, shrink: false, count: 4 };
items[6] = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.BRAND, size: fn(1177).ButtonSizes.XSMALL, shrink: true, count: 1 };
let obj7 = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.BRAND, size: fn(1177).ButtonSizes.XSMALL, shrink: true, count: 1 };
items[7] = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.GREEN, size: fn(1177).ButtonSizes.MEDIUM, shrink: false, count: 1 };
let obj8 = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.GREEN, size: fn(1177).ButtonSizes.MEDIUM, shrink: false, count: 1 };
items[8] = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.GREEN, size: fn(1177).ButtonSizes.MEDIUM, shrink: true, count: 1 };
const obj9 = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.GREEN, size: fn(1177).ButtonSizes.MEDIUM, shrink: true, count: 1 };
items[9] = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.GREEN, size: fn(1177).ButtonSizes.SMALL, shrink: false, count: 1 };
const obj10 = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.GREEN, size: fn(1177).ButtonSizes.SMALL, shrink: false, count: 1 };
items[10] = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.GREEN, size: fn(1177).ButtonSizes.XSMALL, shrink: false, count: 1 };
const obj11 = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.GREEN, size: fn(1177).ButtonSizes.XSMALL, shrink: false, count: 1 };
items[11] = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.GREY, size: fn(1177).ButtonSizes.MEDIUM, shrink: false, count: 10 };
const obj12 = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.GREY, size: fn(1177).ButtonSizes.MEDIUM, shrink: false, count: 10 };
items[12] = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.GREY, size: fn(1177).ButtonSizes.MEDIUM, shrink: true, count: 1 };
const obj13 = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.GREY, size: fn(1177).ButtonSizes.MEDIUM, shrink: true, count: 1 };
items[13] = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.GREY, size: fn(1177).ButtonSizes.SMALL, shrink: false, count: 2 };
const obj14 = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.GREY, size: fn(1177).ButtonSizes.SMALL, shrink: false, count: 2 };
items[14] = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.GREY, size: fn(1177).ButtonSizes.SMALL, shrink: true, count: 1 };
const obj15 = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.GREY, size: fn(1177).ButtonSizes.SMALL, shrink: true, count: 1 };
items[15] = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.GREY, size: fn(1177).ButtonSizes.XSMALL, shrink: false, count: 1 };
const obj16 = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.GREY, size: fn(1177).ButtonSizes.XSMALL, shrink: false, count: 1 };
items[16] = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.LIGHTGREY, size: fn(1177).ButtonSizes.MEDIUM, shrink: false, count: 2 };
const obj17 = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.LIGHTGREY, size: fn(1177).ButtonSizes.MEDIUM, shrink: false, count: 2 };
items[17] = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.LIGHTGREY, size: fn(1177).ButtonSizes.XSMALL, shrink: false, count: 1 };
const obj18 = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.LIGHTGREY, size: fn(1177).ButtonSizes.XSMALL, shrink: false, count: 1 };
items[18] = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.PRIMARY, size: fn(1177).ButtonSizes.MEDIUM, shrink: false, count: 2 };
const obj19 = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.PRIMARY, size: fn(1177).ButtonSizes.MEDIUM, shrink: false, count: 2 };
items[19] = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.PRIMARY, size: fn(1177).ButtonSizes.SMALL, shrink: true, count: 2 };
const obj20 = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.PRIMARY, size: fn(1177).ButtonSizes.SMALL, shrink: true, count: 2 };
items[20] = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.PRIMARY, size: fn(1177).ButtonSizes.XSMALL, shrink: false, count: 2 };
const obj21 = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.PRIMARY, size: fn(1177).ButtonSizes.XSMALL, shrink: false, count: 2 };
items[21] = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.RED, size: fn(1177).ButtonSizes.MEDIUM, shrink: false, count: 8 };
const obj22 = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.RED, size: fn(1177).ButtonSizes.MEDIUM, shrink: false, count: 8 };
items[22] = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.RED, size: fn(1177).ButtonSizes.MEDIUM, shrink: true, count: 1 };
const obj23 = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.RED, size: fn(1177).ButtonSizes.MEDIUM, shrink: true, count: 1 };
items[23] = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.RED, size: fn(1177).ButtonSizes.XSMALL, shrink: false, count: 1 };
const obj24 = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.RED, size: fn(1177).ButtonSizes.XSMALL, shrink: false, count: 1 };
items[24] = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.TRANSPARENT, size: fn(1177).ButtonSizes.MEDIUM, shrink: false, count: 8 };
const obj25 = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.TRANSPARENT, size: fn(1177).ButtonSizes.MEDIUM, shrink: false, count: 8 };
items[25] = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.TRANSPARENT, size: fn(1177).ButtonSizes.MEDIUM, shrink: true, count: 3 };
const obj26 = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.TRANSPARENT, size: fn(1177).ButtonSizes.MEDIUM, shrink: true, count: 3 };
items[26] = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.TRANSPARENT, size: fn(1177).ButtonSizes.XSMALL, shrink: false, count: 1 };
const obj27 = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.TRANSPARENT, size: fn(1177).ButtonSizes.XSMALL, shrink: false, count: 1 };
items[27] = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.TRANSPARENT, size: fn(1177).ButtonSizes.XSMALL, shrink: true, count: 1 };
const obj28 = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.TRANSPARENT, size: fn(1177).ButtonSizes.XSMALL, shrink: true, count: 1 };
items[28] = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.WHITE, size: fn(1177).ButtonSizes.SMALL, shrink: false, count: 1 };
const obj29 = { look: fn(1177).ButtonLooks.FILLED, color: fn(1177).ButtonColors.WHITE, size: fn(1177).ButtonSizes.SMALL, shrink: false, count: 1 };
items[29] = { look: fn(1177).ButtonLooks.LINK, color: fn(1177).ButtonColors.BRAND, size: fn(1177).ButtonSizes.XSMALL, shrink: true, count: 1 };
const obj30 = { look: fn(1177).ButtonLooks.LINK, color: fn(1177).ButtonColors.BRAND, size: fn(1177).ButtonSizes.XSMALL, shrink: true, count: 1 };
items[30] = { look: fn(1177).ButtonLooks.LINK, color: fn(1177).ButtonColors.LINK, size: fn(1177).ButtonSizes.MEDIUM, shrink: false, count: 3 };
const obj31 = { look: fn(1177).ButtonLooks.LINK, color: fn(1177).ButtonColors.LINK, size: fn(1177).ButtonSizes.MEDIUM, shrink: false, count: 3 };
items[31] = { look: fn(1177).ButtonLooks.LINK, color: fn(1177).ButtonColors.LINK, size: fn(1177).ButtonSizes.MEDIUM, shrink: true, count: 1 };
const obj32 = { look: fn(1177).ButtonLooks.LINK, color: fn(1177).ButtonColors.LINK, size: fn(1177).ButtonSizes.MEDIUM, shrink: true, count: 1 };
items[32] = { look: fn(1177).ButtonLooks.LINK, color: fn(1177).ButtonColors.LINK, size: fn(1177).ButtonSizes.SMALL, shrink: false, count: 2 };
const obj33 = { look: fn(1177).ButtonLooks.LINK, color: fn(1177).ButtonColors.LINK, size: fn(1177).ButtonSizes.SMALL, shrink: false, count: 2 };
items[33] = { look: fn(1177).ButtonLooks.LINK, color: fn(1177).ButtonColors.LINK, size: fn(1177).ButtonSizes.SMALL, shrink: true, count: 1 };
const obj34 = { look: fn(1177).ButtonLooks.LINK, color: fn(1177).ButtonColors.LINK, size: fn(1177).ButtonSizes.SMALL, shrink: true, count: 1 };
items[34] = { look: fn(1177).ButtonLooks.LINK, color: fn(1177).ButtonColors.LINK, size: fn(1177).ButtonSizes.XSMALL, shrink: false, count: 1 };
const obj35 = { look: fn(1177).ButtonLooks.LINK, color: fn(1177).ButtonColors.LINK, size: fn(1177).ButtonSizes.XSMALL, shrink: false, count: 1 };
items[35] = { look: fn(1177).ButtonLooks.LINK, color: fn(1177).ButtonColors.TRANSPARENT, size: fn(1177).ButtonSizes.XSMALL, shrink: false, count: 1 };
const obj36 = { look: fn(1177).ButtonLooks.LINK, color: fn(1177).ButtonColors.TRANSPARENT, size: fn(1177).ButtonSizes.XSMALL, shrink: false, count: 1 };
items[36] = { look: fn(1177).ButtonLooks.OUTLINED, color: fn(1177).ButtonColors.BRAND, size: fn(1177).ButtonSizes.MEDIUM, shrink: false, count: 2 };
const obj37 = { look: fn(1177).ButtonLooks.OUTLINED, color: fn(1177).ButtonColors.BRAND, size: fn(1177).ButtonSizes.MEDIUM, shrink: false, count: 2 };
items[37] = { look: fn(1177).ButtonLooks.OUTLINED, color: fn(1177).ButtonColors.GREY, size: fn(1177).ButtonSizes.MEDIUM, shrink: false, count: 1 };
const obj38 = { look: fn(1177).ButtonLooks.OUTLINED, color: fn(1177).ButtonColors.GREY, size: fn(1177).ButtonSizes.MEDIUM, shrink: false, count: 1 };
items[38] = { look: fn(1177).ButtonLooks.OUTLINED, color: fn(1177).ButtonColors.PRIMARY, size: fn(1177).ButtonSizes.MEDIUM, shrink: false, count: 1 };
const obj39 = { look: fn(1177).ButtonLooks.OUTLINED, color: fn(1177).ButtonColors.PRIMARY, size: fn(1177).ButtonSizes.MEDIUM, shrink: false, count: 1 };
items[39] = { look: fn(1177).ButtonLooks.OUTLINED, color: fn(1177).ButtonColors.TRANSPARENT, size: fn(1177).ButtonSizes.MEDIUM, shrink: false, count: 1 };
const obj40 = { look: fn(1177).ButtonLooks.OUTLINED, color: fn(1177).ButtonColors.TRANSPARENT, size: fn(1177).ButtonSizes.MEDIUM, shrink: false, count: 1 };
items[40] = { look: fn(1177).ButtonLooks.OUTLINED, color: fn(1177).ButtonColors.WHITE, size: fn(1177).ButtonSizes.SMALL, shrink: false, count: 1 };
let items1 = [fn(1177).ButtonColors.WHITE];
let set = new Set(items1);
const createStyles = fn(4638);
const obj43 = { comboRow: null, darkText: null, darkBg: null, comparisonRow: null, comparisonButtons: null, comparisonSide: null, container: null, header: null };
const obj41 = { look: fn(1177).ButtonLooks.OUTLINED, color: fn(1177).ButtonColors.WHITE, size: fn(1177).ButtonSizes.SMALL, shrink: false, count: 1 };
obj43.comboRow = { gap: 4, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4 };
const obj44 = { gap: 4, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4 };
obj43.darkText = { color: nativeDefault.unsafe_rawColors.GREEN_360 };
const obj45 = { color: nativeDefault.unsafe_rawColors.GREEN_360 };
obj43.darkBg = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_600, borderRadius: nativeDefault.radii.sm, marginHorizontal: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8 };
const obj46 = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_600, borderRadius: nativeDefault.radii.sm, marginHorizontal: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8 };
obj43.comparisonRow = { gap: 4, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 };
const obj47 = { gap: 4, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 };
obj43.comparisonButtons = { flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "flex-end" };
obj43.comparisonSide = { flex: 1, gap: 2 };
const obj48 = { flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "flex-end" };
obj43.container = { paddingBottom: nativeDefault.space.PX_48 };
const obj49 = { paddingBottom: nativeDefault.space.PX_48 };
obj43.header = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(obj43);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemLegacyButton.tsx");

export default function UserSettingsDesignSystemLegacyButton() {
  const tmp = closure_10();
  let tmp2 = (function groupByLook(items) {
    const obj = {};
    const iter = items[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let look = nextResult.look;
      let tmp3 = look;
      let tmp2 = nextResult;
      if (null == obj[look]) {
        obj[tmp3] = [];
      }
      let arr = obj[tmp3];
      let arr2 = arr.push(tmp2);
      continue;
    }
    return obj;
  })(items);
  let obj = {};
  let iter = (function getUniqueComparisons() {
    set = new Set();
    items = [];
    const iter = dependencyMap2[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let _HermesInternal = HermesInternal;
      let combined = "" + nextResult.look + "/" + nextResult.color;
      let tmp5 = combined;
      if (!set.has(combined)) {
        let addResult = set.add(tmp5);
        let obj = { look: null, color: null };
        ({ look: obj2.look, color: obj2.color } = tmp3);
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
      obj[tmp5.look] = [];
    }
    let arr = obj[tmp5.look];
    let arr2 = arr.push(tmp5);
    continue;
  }
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { spacing: 4, style: tmp.header, children: null };
  items = [hasOwnProperty(Text_Text.Text, { variant: "heading-xl/bold", children: "Migration Mapping" }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", children: "Legacy (uikit-native) \u2192 Mana side-by-side" })];
  obj3.children = items;
  const items1 = [React4(Stack_Stack.Stack, obj3), , , ];
  const entries = Object.entries(obj);
  items1[1] = entries.map((item) => {
    [tmp, arr] = item;
    return closure_1_5(Form.FormSection, { title: tmp, children: arr.map((entry, index) => closure_1_5(closure_1_8, { entry }, index)) }, "cmp-" + tmp);
  });
  const obj4 = { spacing: 4, style: tmp.header, children: null };
  const items2 = [hasOwnProperty(Text_Text.Text, { variant: "heading-xl/bold", children: "Legacy Button Audit" }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", children: "41 combinations across 185 importers" })];
  obj4.children = items2;
  items1[2] = React4(Stack_Stack.Stack, obj4);
  const entries1 = Object.entries(tmp2);
  items1[3] = entries1.map((item) => {
    [tmp, arr] = item;
    return closure_1_5(Form.FormSection, { title: "" + tmp + " (" + arr.reduce((acc, count) => acc + count.count, 0) + " usages)", children: arr.map((combo, index) => closure_1_5(closure_1_9, { combo }, index)) }, tmp);
  });
  obj2.children = items1;
  return React4(React2, obj2);
};