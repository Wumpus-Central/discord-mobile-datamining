// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemBadge.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import Card from "../../../../design/components/Card/native/Card.native.tsx";
import TableRadioGroup from "../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import TextInput from "../../../../design/components/TextInput/native/TextInput.native.tsx";
import Badge from "../../../../design/components/Badge/native/Badge.native.tsx";
import TableSwitchRow from "../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import LockIcon from "../../../../design/components/Icon/native/redesign/generated/LockIcon.tsx";
import TagIcon from "../../../../design/components/Icon/native/redesign/generated/TagIcon.tsx";
import StarIcon3 from "../../../../design/components/Icon/native/redesign/generated/StarIcon.tsx";
import ExperimentalCommonIcon from "../../../../design/components/Icon/native/redesign/generated/ExperimentalCommonIcon.tsx";
import ExperimentalRareIcon from "../../../../design/components/Icon/native/redesign/generated/ExperimentalRareIcon.tsx";
import ExperimentalEpicIcon from "../../../../design/components/Icon/native/redesign/generated/ExperimentalEpicIcon.tsx";
import ExperimentalMythicIcon2 from "../../../../design/components/Icon/native/redesign/generated/ExperimentalMythicIcon.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

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
  items = [React5(Text_Text.Heading, { variant: "text-lg/bold", children: "Playground" }), , , , ,];
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
    obj2.children = React5(Badge.Badge, obj4);
    items[1] = React5(timestampProducer, obj2);
    const obj5 = {
      title: "Variant",
      value: first,
      onChange: tmp2[1],
      hasIcons: false,
      children: closure_10.map((label) =>
        closure_1_7(require("TableRadioRow").TableRadioRow, { label, value: label }, label),
      ),
    };
    items[2] = React5(TableRadioGroup.TableRadioGroup, obj5);
    const obj6 = {
      title: "Type",
      value: first1,
      onChange: tmp4[1],
      hasIcons: false,
      children: items.map((label) =>
        closure_1_7(require("TableRadioRow").TableRadioRow, { label: label.label, value: label.value }, label.value),
      ),
    };
    items[3] = React5(TableRadioGroup.TableRadioGroup, obj6);
    let tmp12Result = null;
    if (tmp14) {
      const obj7 = { label: "Custom text", value: first2, onChange: tmp6[1] };
      tmp12Result = React5(TextInput.TextInput, obj7);
    }
    items[4] = tmp12Result;
    const obj8 = { label: "Leading icon", value: first3, onValueChange: tmp7[1], start: true, end: true };
    items[5] = React5(TableSwitchRow.TableSwitchRow, obj8);
    obj.children = items;
    return React6(Stack_Stack.Stack, obj);
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
    closure_7(require("Text/Text").Heading, { variant: "text-lg/bold", children: "Variants" }),
    closure_7(require("Text/Text").Text, {
      variant: "text-sm/normal",
      color: "text-subtle",
      children:
        "Every variant with built-in types, custom text, and a leading icon. With no variant, a badge uses the grey default.",
    }),
    closure_10.map((variant) => {
      const obj = { spacing: nativeDefault.space.PX_8, children: null };
      items = [React5(Text_Text.Text, { variant: "text-sm/medium", children: variant })];
      const obj3 = { style: badgeRow.badgeRow, children: null };
      const items1 = [
        React5(Badge.Badge, { type: "new", variant }),
        React5(Badge.Badge, { type: "beta", variant }),
        React5(Badge.Badge, { type: { text: "Custom" }, variant }),
        ,
      ];
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
      items1[3] = React5(Badge.Badge, obj7);
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
      items1[4] = React5(Badge.Badge, obj8);
      obj3.children = items1;
      items[1] = React6(timestampProducer, obj3);
      obj.children = items;
      return React6(Stack_Stack.Stack, obj, variant);
    }),
  ];
  obj2.children = items;
  obj.children = closure_8(require("Stack/Stack").Stack, obj2);
  return closure_7(require("Card").Card, obj);
}
function Truncation() {
  const tmp = closure_9();
  const obj = { children: null };
  const obj2 = { spacing: nativeDefault.space.PX_12, children: null };
  items = [
    React5(Text_Text.Heading, { variant: "text-lg/bold", children: "Long text" }),
    React5(Text_Text.Text, {
      variant: "text-sm/normal",
      color: "text-subtle",
      children: "Labels stay on one line and truncate with an ellipsis when space runs out. The icon never shrinks.",
    }),
    ,
    ,
  ];
  const obj3 = { style: tmp.narrow, children: null };
  const obj4 = { type: { text } };
  obj3.children = React5(Badge.Badge, obj4);
  items[2] = React5(timestampProducer, obj3);
  const obj6 = {
    style: tmp.narrow,
    children: React5(Badge.Badge, { type: { text }, variant: "primary", icon: StarIcon3.StarIcon }),
  };
  items[3] = React5(timestampProducer, obj6);
  const obj8 = { style: tmp.narrow, children: null };
  const obj5 = { text };
  const obj7 = { type: { text }, variant: "primary", icon: StarIcon3.StarIcon };
  obj8.children = React5(Badge.Badge, {
    type: { text },
    variant: "rarity-epic",
    icon: ExperimentalEpicIcon.ExperimentalEpicIcon,
  });
  items[4] = React5(timestampProducer, obj8);
  obj2.children = items;
  obj.children = React6(Stack_Stack.Stack, obj2);
  return React5(Card.Card, obj);
}
function ComparisonRow(arg0) {
  ({ label, legacy, mana } = arg0);
  const tmp = closure_9();
  const obj = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_12, children: null };
  items = [
    React5(Text_Text.Text, { variant: "text-sm/normal", style: tmp.comparisonLabel, children: label }),
    React5(timestampProducer, { style: tmp.comparisonCell, children: legacy }),
    React5(timestampProducer, { style: tmp.comparisonCell, children: mana }),
  ];
  obj.children = items;
  return React6(Stack_Stack.Stack, obj);
}
function LegacyComparison() {
  const tmp = closure_9();
  const obj = { children: null };
  const obj2 = { spacing: nativeDefault.space.PX_12, children: null };
  items = [
    React5(Text_Text.Heading, { variant: "text-lg/bold", children: "Legacy vs. Mana" }),
    React5(Text_Text.Text, {
      variant: "text-sm/normal",
      color: "text-subtle",
      children:
        "Legacy defaults on the left, the closest Mana Badge on the right. A bare type renders the grey default, so brand needs an explicit variant.",
    }),
    ,
    ,
    ,
    ,
    ,
  ];
  const obj3 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_12, children: null };
  const items1 = [
    React5(timestampProducer, { style: tmp.comparisonLabel }),
    React5(timestampProducer, {
      style: tmp.comparisonCell,
      children: React5(Text_Text.Text, { variant: "text-xs/semibold", color: "text-subtle", children: "Legacy" }),
    }),
  ];
  const obj4 = { style: tmp.comparisonLabel };
  const obj5 = {
    style: tmp.comparisonCell,
    children: React5(Text_Text.Text, { variant: "text-xs/semibold", color: "text-subtle", children: "Legacy" }),
  };
  items1[2] = React5(timestampProducer, {
    style: tmp.comparisonCell,
    children: React5(Text_Text.Text, { variant: "text-xs/semibold", color: "text-subtle", children: "Mana" }),
  });
  obj3.children = items1;
  items[2] = React6(Stack_Stack.Stack, obj3);
  const obj6 = {
    style: tmp.comparisonCell,
    children: React5(Text_Text.Text, { variant: "text-xs/semibold", color: "text-subtle", children: "Mana" }),
  };
  items[3] = React5(ComparisonRow, {
    label: "TextBadge vs. default",
    legacy: React5(native.TextBadge, { text: "New" }),
    mana: React5(Badge.Badge, { type: { text: "New" } }),
  });
  const obj7 = {
    label: "TextBadge vs. default",
    legacy: React5(native.TextBadge, { text: "New" }),
    mana: React5(Badge.Badge, { type: { text: "New" } }),
  };
  items[4] = React5(ComparisonRow, {
    label: "NewTag vs. new",
    legacy: React5(native.NewTag, {}),
    mana: React5(Badge.Badge, { type: "new" }),
  });
  const obj8 = {
    label: "NewTag vs. new",
    legacy: React5(native.NewTag, {}),
    mana: React5(Badge.Badge, { type: "new" }),
  };
  items[5] = React5(ComparisonRow, {
    label: "NewTag vs. new, brand",
    legacy: React5(native.NewTag, {}),
    mana: React5(Badge.Badge, { type: "new", variant: "primary" }),
  });
  const obj9 = {
    label: "NewTag vs. new, brand",
    legacy: React5(native.NewTag, {}),
    mana: React5(Badge.Badge, { type: "new", variant: "primary" }),
  };
  items[6] = React5(ComparisonRow, {
    label: "BetaTag vs. beta",
    legacy: React5(native.BetaTag, {}),
    mana: React5(Badge.Badge, { type: "beta" }),
  });
  const obj10 = {
    label: "BetaTag vs. beta",
    legacy: React5(native.BetaTag, {}),
    mana: React5(Badge.Badge, { type: "beta" }),
  };
  items[7] = React5(ComparisonRow, {
    label: "BetaTag vs. beta, brand",
    legacy: React5(native.BetaTag, {}),
    mana: React5(Badge.Badge, { type: "beta", variant: "primary" }),
  });
  obj2.children = items;
  obj.children = React6(Stack_Stack.Stack, obj2);
  return React5(Card.Card, obj);
}
function LayoutCase(arg0) {
  ({ title, children } = arg0);
  const obj = { spacing: nativeDefault.space.PX_4, children: null };
  items = [React5(Text_Text.Text, { variant: "text-xs/semibold", color: "text-subtle", children: title })];
  const tmp = closure_9();
  items[1] = React5(timestampProducer, { style: closure_9().layoutCase, children });
  obj.children = items;
  return React6(Stack_Stack.Stack, obj);
}
function ParentLayouts() {
  const tmp = closure_9();
  const obj = { children: null };
  const obj2 = { spacing: nativeDefault.space.PX_12, children: null };
  items = [
    React5(Text_Text.Heading, { variant: "text-lg/bold", children: "Parent layouts" }),
    React5(Text_Text.Text, {
      variant: "text-sm/normal",
      color: "text-subtle",
      children:
        "Legacy and Mana badges in the same parents. Both follow the parent's alignment; use parent/container layout to position Mana badges.",
    }),
    ,
    ,
    ,
    ,
  ];
  const obj3 = { title: "Row next to text (TextBadge, then Mana)", children: null };
  const obj4 = { style: tmp.inlineRow, children: null };
  const items1 = [
    React5(Text_Text.Text, { variant: "text-md/semibold", children: "Channel name" }),
    React5(native.TextBadge, { text: "New", style: tmp.inlineBadge }),
  ];
  obj4.children = items1;
  const items2 = [React6(timestampProducer, obj4)];
  const obj6 = { style: tmp.inlineRow, children: null };
  const items3 = [
    React5(Text_Text.Text, { variant: "text-md/semibold", children: "Channel name" }),
    React5(timestampProducer, { style: tmp.inlineBadge, children: React5(Badge.Badge, { type: { text: "New" } }) }),
  ];
  obj6.children = items3;
  items2[1] = React6(timestampProducer, obj6);
  obj3.children = items2;
  items[2] = React6(LayoutCase, obj3);
  const obj8 = { title: "Row next to text (BetaTag, then Mana brand)", children: null };
  const obj9 = { style: tmp.inlineRow, children: null };
  const items4 = [
    React5(Text_Text.Text, { variant: "text-md/semibold", children: "Feature name" }),
    React5(native.BetaTag, {}),
  ];
  obj9.children = items4;
  const items5 = [React6(timestampProducer, obj9)];
  const obj10 = { style: tmp.inlineRow, children: null };
  const items6 = [React5(Text_Text.Text, { variant: "text-md/semibold", children: "Feature name" })];
  const obj5 = { text: "New", style: tmp.inlineBadge };
  const obj7 = { style: tmp.inlineBadge, children: React5(Badge.Badge, { type: { text: "New" } }) };
  items6[1] = React5(timestampProducer, {
    style: tmp.inlineBadge,
    children: React5(Badge.Badge, { type: "beta", variant: "primary" }),
  });
  obj10.children = items6;
  items5[1] = React6(timestampProducer, obj10);
  obj8.children = items5;
  items[3] = React6(LayoutCase, obj8);
  const obj12 = { title: "Column, default alignment (TextBadge, then Mana)", children: null };
  const items7 = [React5(native.TextBadge, { text: "New" }), React5(Badge.Badge, { type: { text: "New" } })];
  obj12.children = items7;
  items[4] = React6(LayoutCase, obj12);
  const obj13 = { title: "Column with alignSelf: 'flex-start' (TextBadge, then Mana)", children: null };
  const items8 = [React5(native.TextBadge, { text: "New", style: tmp.selfStart })];
  const obj11 = { style: tmp.inlineBadge, children: React5(Badge.Badge, { type: "beta", variant: "primary" }) };
  const obj14 = { text: "New", style: tmp.selfStart };
  items8[1] = React5(timestampProducer, {
    style: tmp.selfStartParent,
    children: React5(Badge.Badge, { type: { text: "New" } }),
  });
  obj13.children = items8;
  items[5] = React6(LayoutCase, obj13);
  const obj16 = { title: "Trailing edge of a list row (TextBadge, then Mana)", children: null };
  const obj17 = { style: tmp.trailingRow, children: null };
  const items9 = [
    React5(Text_Text.Text, { variant: "text-md/normal", children: "Notifications" }),
    React5(native.TextBadge, { text: "New" }),
  ];
  obj17.children = items9;
  const items10 = [React6(timestampProducer, obj17)];
  const obj18 = { style: tmp.trailingRow, children: null };
  const items11 = [
    React5(Text_Text.Text, { variant: "text-md/normal", children: "Notifications" }),
    React5(Badge.Badge, { type: { text: "New" } }),
  ];
  obj18.children = items11;
  items10[1] = React6(timestampProducer, obj18);
  obj16.children = items10;
  items[6] = React6(LayoutCase, obj16);
  obj2.children = items;
  obj.children = React6(Stack_Stack.Stack, obj2);
  return React5(Card.Card, obj);
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5014);
let obj2 = {
  container: { padding: nativeDefault.space.PX_16 },
  preview: null,
  badgeRow: null,
  narrow: null,
  comparisonLabel: null,
  comparisonCell: null,
  layoutCase: null,
  inlineRow: null,
  trailingRow: null,
  inlineBadge: null,
  selfStart: null,
  selfStartParent: null,
};
let obj3 = { padding: nativeDefault.space.PX_16 };
obj2.preview = { minHeight: nativeDefault.space.PX_32, alignItems: "center", justifyContent: "center" };
let obj4 = { minHeight: nativeDefault.space.PX_32, alignItems: "center", justifyContent: "center" };
obj2.badgeRow = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.narrow = { width: 120, flexDirection: "row" };
obj2.comparisonLabel = { flex: 1 };
obj2.comparisonCell = { width: 88, alignItems: "flex-start" };
let obj5 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.layoutCase = {
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.sm,
  padding: nativeDefault.space.PX_8,
};
obj2.inlineRow = { flexDirection: "row", alignItems: "center" };
obj2.trailingRow = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
let obj6 = {
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.sm,
  padding: nativeDefault.space.PX_8,
};
obj2.inlineBadge = { marginLeft: nativeDefault.space.PX_8 };
obj2.selfStart = { alignSelf: "flex-start" };
obj2.selfStartParent = { alignItems: "flex-start" };
let closure_9 = createStyles.createStyles(obj2);
let closure_10 = [
  "secondary",
  "primary",
  "expressive",
  "premium",
  "inverted",
  "rarity-common",
  "rarity-rare",
  "rarity-epic",
  "rarity-mythic",
];
let items = [
  { value: "new", label: "new" },
  { value: "beta", label: "beta" },
  { value: "early_access", label: "early_access" },
  { value: "free_trial", label: "free_trial" },
  { value: "custom", label: "Custom text" },
];
let c12 = "A very long custom badge label that truncates";
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemBadge.tsx",
);

export default function UserSettingsDesignSystemBadge() {
  const obj = { contentContainerStyle: closure_9().container, children: null };
  const obj2 = { spacing: nativeDefault.space.PX_24, children: null };
  items = [
    React5(Text_Text.Text, {
      variant: "text-md/normal",
      color: "text-subtle",
      children: "Badges label feature status, like New or Beta. They are not for counts or notifications.",
    }),
    React5(Playground, {}),
    React5(VariantMatrix, {}),
    React5(Truncation, {}),
    React5(LegacyComparison, {}),
    React5(ParentLayouts, {}),
  ];
  obj2.children = items;
  obj.children = React6(Stack_Stack.Stack, obj2);
  return React5(hasOwnProperty, obj);
}
