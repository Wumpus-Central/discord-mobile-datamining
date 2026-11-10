// === Module 18168: UserSettingsDesignSystemBadge ===

// Module 18168 (UserSettingsDesignSystemBadge)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import Text_Text from "Text/Text" /* 5753 */;
import Stack_Stack from "Stack/Stack" /* 6161 */;
import Card from "Card" /* 7043 */;
import Badge from "Badge" /* 7053 */;
import TableRadioGroup from "TableRadioGroup" /* 7127 */;
import TextInput from "TextInput" /* 7151 */;
import TableSwitchRow from "TableSwitchRow" /* 7432 */;
import LockIcon from "LockIcon" /* 8744 */;
import TagIcon from "TagIcon" /* 9659 */;
import StarIcon3 from "StarIcon" /* 10190 */;
import ExperimentalCommonIcon from "ExperimentalCommonIcon" /* 11621 */;
import ExperimentalRareIcon from "ExperimentalRareIcon" /* 11623 */;
import ExperimentalEpicIcon from "ExperimentalEpicIcon" /* 11625 */;
import ExperimentalMythicIcon2 from "ExperimentalMythicIcon" /* 11627 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function Playground() {
  const tmp2 = _slicedToArray(noop.useState("secondary"), 2);
  const first = tmp2[0];
  const tmp4 = _slicedToArray(noop.useState("new"), 2);
  const first1 = tmp4[0];
  const tmp6 = _slicedToArray(noop.useState("Custom"), 2);
  const first2 = tmp6[0];
  const tmp7 = _slicedToArray(noop.useState(false), 2);
  const first3 = tmp7[0];
  const obj = { spacing: nativeDefault.space.PX_12, children: null };
  items = [metroImportDefault(Text_Text.Heading, { variant: "body-lg/semibold", children: "Playground" }), , , , , ];
  const obj2 = { style: closure_9().preview, children: null };
  let tmp15 = first1;
  if ("custom" === first1) {
    let str = "Custom";
    if (first2.length > 0) {
      str = first2;
    }
    const obj3 = { text: str };
    tmp15 = obj3;
  }
  const obj4 = { type: tmp15, variant: first, icon: null };
  if (!first3) {
    obj4.icon = undefined;
    obj2.children = metroImportDefault(Badge.Badge, obj4);
    items[1] = metroImportDefault(timestampProducer, obj2);
    const obj5 = { title: "Variant", value: first, onChange: tmp2[1], hasIcons: false, children: closure_10.map((label) => closure_1_7(require("TableRadioRow").TableRadioRow, { label, value: label }, label)) };
    items[2] = metroImportDefault(TableRadioGroup.TableRadioGroup, obj5);
    const obj6 = { title: "Type", value: first1, onChange: tmp4[1], hasIcons: false, children: items.map((label) => closure_1_7(require("TableRadioRow").TableRadioRow, { label: label.label, value: label.value }, label.value)) };
    items[3] = metroImportDefault(TableRadioGroup.TableRadioGroup, obj6);
    let tmp12Result = null;
    if (tmp14) {
      const obj7 = { label: "Custom text", value: first2, onChange: tmp6[1] };
      tmp12Result = metroImportDefault(TextInput.TextInput, obj7);
    }
    items[4] = tmp12Result;
    const obj8 = { label: "Leading icon", value: first3, onValueChange: tmp7[1], start: true, end: true };
    items[5] = metroImportDefault(TableSwitchRow.TableSwitchRow, obj8);
    obj.children = items;
    return React5(Stack_Stack.Stack, obj);
  } else if ("premium" === first) {
    let ExperimentalMythicIcon = LockIcon.LockIcon;
  } else if ("inverted" === first) {
    ExperimentalMythicIcon = TagIcon.TagIcon;
  } else if ("rarity-common" === first) {
    ExperimentalMythicIcon = ExperimentalCommonIcon.ExperimentalCommonIcon;
  } else if ("rarity-rare" === first) {
    ExperimentalMythicIcon = ExperimentalRareIcon.ExperimentalRareIcon;
  } else {
    if ("rarity-epic" === first) {
      ExperimentalMythicIcon = ExperimentalEpicIcon.ExperimentalEpicIcon;
    } else if ("rarity-mythic" !== first) {
      ExperimentalMythicIcon = StarIcon3.StarIcon;
    }
    ExperimentalMythicIcon = ExperimentalMythicIcon2.ExperimentalMythicIcon;
  }
  const tmp = closure_9();
}
function VariantMatrix() {
  _require = closure_9();
  let obj = { children: null };
  const obj2 = { spacing: nativeDefault.space.PX_16, children: null };
  items = [
    closure_7(require("Text/Text").Heading, { variant: "body-lg/semibold", children: "Variants" }),
    closure_7(require("Text/Text").Text, { variant: "body-sm/normal", color: "text-subtle", children: "Every variant with built-in types, custom text, and a leading icon. With no variant, a badge uses the grey default." }),
    closure_10.map((variant) => {
      const obj = { spacing: nativeDefault.space.PX_8, children: null };
      items = [metroImportDefault(Text_Text.Text, { variant: "body-sm/medium", children: variant }), ];
      const obj3 = { style: badgeRow.badgeRow, children: null };
      const items1 = [metroImportDefault(Badge.Badge, { type: "new", variant }), metroImportDefault(Badge.Badge, { type: "beta", variant }), metroImportDefault(Badge.Badge, { type: { text: "Custom" }, variant }), , ];
      const obj7 = { type: "new", variant, icon: null };
      if ("premium" === variant) {
        let StarIcon = LockIcon.LockIcon;
      } else if ("inverted" === variant) {
        StarIcon = TagIcon.TagIcon;
      } else if ("rarity-common" === variant) {
        StarIcon = ExperimentalCommonIcon.ExperimentalCommonIcon;
      } else if ("rarity-rare" === variant) {
        StarIcon = ExperimentalRareIcon.ExperimentalRareIcon;
      } else if ("rarity-epic" === variant) {
        StarIcon = ExperimentalEpicIcon.ExperimentalEpicIcon;
      } else if ("rarity-mythic" === variant) {
        StarIcon = ExperimentalMythicIcon2.ExperimentalMythicIcon;
      } else {
        StarIcon = StarIcon3.StarIcon;
      }
      obj7.icon = StarIcon;
      items1[3] = metroImportDefault(Badge.Badge, obj7);
      const obj8 = { type: { text: "Custom" }, variant, icon: null };
      if ("premium" === variant) {
        let StarIcon2 = LockIcon.LockIcon;
      } else if ("inverted" === variant) {
        StarIcon2 = TagIcon.TagIcon;
      } else if ("rarity-common" === variant) {
        StarIcon2 = ExperimentalCommonIcon.ExperimentalCommonIcon;
      } else if ("rarity-rare" === variant) {
        StarIcon2 = ExperimentalRareIcon.ExperimentalRareIcon;
      } else if ("rarity-epic" === variant) {
        StarIcon2 = ExperimentalEpicIcon.ExperimentalEpicIcon;
      } else if ("rarity-mythic" === variant) {
        StarIcon2 = ExperimentalMythicIcon2.ExperimentalMythicIcon;
      } else {
        StarIcon2 = StarIcon3.StarIcon;
      }
      obj8.icon = StarIcon2;
      items1[4] = metroImportDefault(Badge.Badge, obj8);
      obj3.children = items1;
      items[1] = React5(timestampProducer, obj3);
      obj.children = items;
      return React5(Stack_Stack.Stack, obj, variant);
    })
  ];
  obj2.children = items;
  obj.children = closure_8(require("Stack/Stack").Stack, obj2);
  return closure_7(require("Card").Card, obj);
}
function Truncation() {
  const tmp = closure_9();
  const obj = { children: null };
  const obj2 = { spacing: nativeDefault.space.PX_12, children: null };
  items = [metroImportDefault(Text_Text.Heading, { variant: "body-lg/semibold", children: "Long text" }), metroImportDefault(Text_Text.Text, { variant: "body-sm/normal", color: "text-subtle", children: "Labels stay on one line and truncate with an ellipsis when space runs out. The icon never shrinks." }), , , ];
  const obj3 = { style: tmp.narrow, children: null };
  const obj4 = { type: { text } };
  obj3.children = metroImportDefault(Badge.Badge, obj4);
  items[2] = metroImportDefault(timestampProducer, obj3);
  const obj6 = { style: tmp.narrow, children: metroImportDefault(Badge.Badge, { type: { text }, variant: "primary", icon: StarIcon3.StarIcon }) };
  items[3] = metroImportDefault(timestampProducer, obj6);
  const obj8 = { style: tmp.narrow, children: null };
  const obj5 = { text };
  const obj7 = { type: { text }, variant: "primary", icon: StarIcon3.StarIcon };
  obj8.children = metroImportDefault(Badge.Badge, { type: { text }, variant: "rarity-epic", icon: ExperimentalEpicIcon.ExperimentalEpicIcon });
  items[4] = metroImportDefault(timestampProducer, obj8);
  obj2.children = items;
  obj.children = React5(Stack_Stack.Stack, obj2);
  return metroImportDefault(Card.Card, obj);
}
function ComparisonRow(arg0) {
  ({ label, legacy, mana } = arg0);
  const tmp = closure_9();
  const obj = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_12, children: null };
  items = [metroImportDefault(Text_Text.Text, { variant: "body-sm/normal", style: tmp.comparisonLabel, children: label }), metroImportDefault(timestampProducer, { style: tmp.comparisonCell, children: legacy }), metroImportDefault(timestampProducer, { style: tmp.comparisonCell, children: mana })];
  obj.children = items;
  return React5(Stack_Stack.Stack, obj);
}
function LegacyComparison() {
  const tmp = closure_9();
  const obj = { children: null };
  const obj2 = { spacing: nativeDefault.space.PX_12, children: null };
  items = [metroImportDefault(Text_Text.Heading, { variant: "body-lg/semibold", children: "Legacy vs. Mana" }), metroImportDefault(Text_Text.Text, { variant: "body-sm/normal", color: "text-subtle", children: "Legacy defaults on the left, the closest Mana Badge on the right. A bare type renders the grey default, so brand needs an explicit variant." }), , , , , , ];
  const obj3 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_12, children: null };
  const items1 = [metroImportDefault(timestampProducer, { style: tmp.comparisonLabel }), metroImportDefault(timestampProducer, { style: tmp.comparisonCell, children: metroImportDefault(Text_Text.Text, { variant: "body-xs/semibold", color: "text-subtle", children: "Legacy" }) }), ];
  const obj4 = { style: tmp.comparisonLabel };
  const obj5 = { style: tmp.comparisonCell, children: metroImportDefault(Text_Text.Text, { variant: "body-xs/semibold", color: "text-subtle", children: "Legacy" }) };
  items1[2] = metroImportDefault(timestampProducer, { style: tmp.comparisonCell, children: metroImportDefault(Text_Text.Text, { variant: "body-xs/semibold", color: "text-subtle", children: "Mana" }) });
  obj3.children = items1;
  items[2] = React5(Stack_Stack.Stack, obj3);
  const obj6 = { style: tmp.comparisonCell, children: metroImportDefault(Text_Text.Text, { variant: "body-xs/semibold", color: "text-subtle", children: "Mana" }) };
  items[3] = metroImportDefault(ComparisonRow, { label: "TextBadge vs. default", legacy: metroImportDefault(native.TextBadge, { text: "New" }), mana: metroImportDefault(Badge.Badge, { type: { text: "New" } }) });
  const obj7 = { label: "TextBadge vs. default", legacy: metroImportDefault(native.TextBadge, { text: "New" }), mana: metroImportDefault(Badge.Badge, { type: { text: "New" } }) };
  items[4] = metroImportDefault(ComparisonRow, { label: "NewTag vs. new", legacy: metroImportDefault(native.NewTag, {}), mana: metroImportDefault(Badge.Badge, { type: "new" }) });
  const obj8 = { label: "NewTag vs. new", legacy: metroImportDefault(native.NewTag, {}), mana: metroImportDefault(Badge.Badge, { type: "new" }) };
  items[5] = metroImportDefault(ComparisonRow, { label: "NewTag vs. new, brand", legacy: metroImportDefault(native.NewTag, {}), mana: metroImportDefault(Badge.Badge, { type: "new", variant: "primary" }) });
  const obj9 = { label: "NewTag vs. new, brand", legacy: metroImportDefault(native.NewTag, {}), mana: metroImportDefault(Badge.Badge, { type: "new", variant: "primary" }) };
  items[6] = metroImportDefault(ComparisonRow, { label: "BetaTag vs. beta", legacy: metroImportDefault(native.BetaTag, {}), mana: metroImportDefault(Badge.Badge, { type: "beta" }) });
  const obj10 = { label: "BetaTag vs. beta", legacy: metroImportDefault(native.BetaTag, {}), mana: metroImportDefault(Badge.Badge, { type: "beta" }) };
  items[7] = metroImportDefault(ComparisonRow, { label: "BetaTag vs. beta, brand", legacy: metroImportDefault(native.BetaTag, {}), mana: metroImportDefault(Badge.Badge, { type: "beta", variant: "primary" }) });
  obj2.children = items;
  obj.children = React5(Stack_Stack.Stack, obj2);
  return metroImportDefault(Card.Card, obj);
}
function LayoutCase(arg0) {
  ({ title, children } = arg0);
  const obj = { spacing: nativeDefault.space.PX_4, children: null };
  items = [metroImportDefault(Text_Text.Text, { variant: "body-xs/semibold", color: "text-subtle", children: title }), ];
  const tmp = closure_9();
  items[1] = metroImportDefault(timestampProducer, { style: closure_9().layoutCase, children });
  obj.children = items;
  return React5(Stack_Stack.Stack, obj);
}
function ParentLayouts() {
  const tmp = closure_9();
  const obj = { children: null };
  const obj2 = { spacing: nativeDefault.space.PX_12, children: null };
  items = [metroImportDefault(Text_Text.Heading, { variant: "body-lg/semibold", children: "Parent layouts" }), metroImportDefault(Text_Text.Text, { variant: "body-sm/normal", color: "text-subtle", children: "Legacy and Mana badges in the same parents. Both follow the parent's alignment; use parent/container layout to position Mana badges." }), , , , , ];
  const obj3 = { title: "Row next to text (TextBadge, then Mana)", children: null };
  const obj4 = { style: tmp.inlineRow, children: null };
  const items1 = [metroImportDefault(Text_Text.Text, { variant: "body-md/semibold", children: "Channel name" }), metroImportDefault(native.TextBadge, { text: "New", style: tmp.inlineBadge })];
  obj4.children = items1;
  const items2 = [React5(timestampProducer, obj4), ];
  const obj6 = { style: tmp.inlineRow, children: null };
  const items3 = [metroImportDefault(Text_Text.Text, { variant: "body-md/semibold", children: "Channel name" }), metroImportDefault(timestampProducer, { style: tmp.inlineBadge, children: metroImportDefault(Badge.Badge, { type: { text: "New" } }) })];
  obj6.children = items3;
  items2[1] = React5(timestampProducer, obj6);
  obj3.children = items2;
  items[2] = React5(LayoutCase, obj3);
  const obj8 = { title: "Row next to text (BetaTag, then Mana brand)", children: null };
  const obj9 = { style: tmp.inlineRow, children: null };
  const items4 = [metroImportDefault(Text_Text.Text, { variant: "body-md/semibold", children: "Feature name" }), metroImportDefault(native.BetaTag, {})];
  obj9.children = items4;
  const items5 = [React5(timestampProducer, obj9), ];
  const obj10 = { style: tmp.inlineRow, children: null };
  const items6 = [metroImportDefault(Text_Text.Text, { variant: "body-md/semibold", children: "Feature name" }), ];
  const obj5 = { text: "New", style: tmp.inlineBadge };
  const obj7 = { style: tmp.inlineBadge, children: metroImportDefault(Badge.Badge, { type: { text: "New" } }) };
  items6[1] = metroImportDefault(timestampProducer, { style: tmp.inlineBadge, children: metroImportDefault(Badge.Badge, { type: "beta", variant: "primary" }) });
  obj10.children = items6;
  items5[1] = React5(timestampProducer, obj10);
  obj8.children = items5;
  items[3] = React5(LayoutCase, obj8);
  const obj12 = { title: "Column, default alignment (TextBadge, then Mana)", children: null };
  const items7 = [metroImportDefault(native.TextBadge, { text: "New" }), metroImportDefault(Badge.Badge, { type: { text: "New" } })];
  obj12.children = items7;
  items[4] = React5(LayoutCase, obj12);
  const obj13 = { title: "Column with alignSelf: 'flex-start' (TextBadge, then Mana)", children: null };
  const items8 = [metroImportDefault(native.TextBadge, { text: "New", style: tmp.selfStart }), ];
  const obj11 = { style: tmp.inlineBadge, children: metroImportDefault(Badge.Badge, { type: "beta", variant: "primary" }) };
  const obj14 = { text: "New", style: tmp.selfStart };
  items8[1] = metroImportDefault(timestampProducer, { style: tmp.selfStartParent, children: metroImportDefault(Badge.Badge, { type: { text: "New" } }) });
  obj13.children = items8;
  items[5] = React5(LayoutCase, obj13);
  const obj16 = { title: "Trailing edge of a list row (TextBadge, then Mana)", children: null };
  const obj17 = { style: tmp.trailingRow, children: null };
  const items9 = [metroImportDefault(Text_Text.Text, { variant: "body-md/normal", children: "Notifications" }), metroImportDefault(native.TextBadge, { text: "New" })];
  obj17.children = items9;
  const items10 = [React5(timestampProducer, obj17), ];
  const obj18 = { style: tmp.trailingRow, children: null };
  const items11 = [metroImportDefault(Text_Text.Text, { variant: "body-md/normal", children: "Notifications" }), metroImportDefault(Badge.Badge, { type: { text: "New" } })];
  obj18.children = items11;
  items10[1] = React5(timestampProducer, obj18);
  obj16.children = items10;
  items[6] = React5(LayoutCase, obj16);
  obj2.children = items;
  obj.children = React5(Stack_Stack.Stack, obj2);
  return metroImportDefault(Card.Card, obj);
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5142);
let obj2 = { container: { padding: nativeDefault.space.PX_16 }, preview: null, badgeRow: null, narrow: null, comparisonLabel: null, comparisonCell: null, layoutCase: null, inlineRow: null, trailingRow: null, inlineBadge: null, selfStart: null, selfStartParent: null };
let obj3 = { padding: nativeDefault.space.PX_16 };
obj2.preview = { minHeight: nativeDefault.space.PX_32, alignItems: "center", justifyContent: "center" };
let obj4 = { minHeight: nativeDefault.space.PX_32, alignItems: "center", justifyContent: "center" };
obj2.badgeRow = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.narrow = { width: 120, flexDirection: "row" };
obj2.comparisonLabel = { flex: 1 };
obj2.comparisonCell = { width: 88, alignItems: "flex-start" };
let obj5 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.layoutCase = { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_8 };
obj2.inlineRow = { flexDirection: "row", alignItems: "center" };
obj2.trailingRow = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
let obj6 = { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_8 };
obj2.inlineBadge = { marginLeft: nativeDefault.space.PX_8 };
obj2.selfStart = { alignSelf: "flex-start" };
obj2.selfStartParent = { alignItems: "flex-start" };
let closure_9 = createStyles.createStyles(obj2);
let closure_10 = ["secondary", "primary", "expressive", "premium", "inverted", "rarity-common", "rarity-rare", "rarity-epic", "rarity-mythic"];
let items = [{ value: "new", label: "new" }, { value: "beta", label: "beta" }, { value: "early_access", label: "early_access" }, { value: "free_trial", label: "free_trial" }, { value: "custom", label: "Custom text" }];
let c12 = "A very long custom badge label that truncates";
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemBadge.tsx");

export default function UserSettingsDesignSystemBadge() {
  const obj = { contentContainerStyle: closure_9().container, children: null };
  const obj2 = { spacing: nativeDefault.space.PX_24, children: null };
  items = [metroImportDefault(Text_Text.Text, { variant: "body-md/normal", color: "text-subtle", children: "Badges label feature status, like New or Beta. They are not for counts or notifications." }), metroImportDefault(Playground, {}), metroImportDefault(VariantMatrix, {}), metroImportDefault(Truncation, {}), metroImportDefault(LegacyComparison, {}), metroImportDefault(ParentLayouts, {})];
  obj2.children = items;
  obj.children = React5(Stack_Stack.Stack, obj2);
  return metroImportDefault(hasOwnProperty, obj);
};