// discord_app/modules/devtools/native/components/screens/DevToolsGuildTagBadgesScreen.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import badges_GuildBadge from "../../../../guild_tag/native/badges/GuildBadge.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const GuildTagConstants = fn(7944);
({
  GUILD_TAG_BADGE_NUM_CUSTOMIZABLE_COLORS: metroRequire,
  GUILD_TAG_BADGE_PALETTE_PRESETS,
  GuildTagBadgeKind,
} = GuildTagConstants);
const jsxProd = fn(21);
({ jsxs: closure_7, jsx: closure_8 } = jsxProd);
const entries = Object.entries(GuildTagBadgeKind);
const found = entries.filter((item) => {
  [tmp] = item;
  return isNaN(Number(tmp));
});
let closure_9 = found.map((item) => {
  [tmp, tmp2] = item;
  return { name, value };
});
let items = [
  { label: "Untinted", primary: "sa", secondary: "i" },
  ...GUILD_TAG_BADGE_PALETTE_PRESETS.map((primary, index) => ({
    label: "P" + index + 1,
    primary: primary.primary,
    secondary: primary.secondary,
  })),
];
const dependencyMap = [24, 48, 72];
fn(4560);
let createStyles = { wrap: null, contentContainer: null, controlRow: null, grid: null, tile: null, badgeBox: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles.wrap = createStyles;
createStyles.contentContainer = { padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
let obj1 = { padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
createStyles.controlRow = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
let obj2 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
createStyles.grid = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
let obj3 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
createStyles.tile = {
  alignItems: "center",
  justifyContent: "flex-start",
  gap: nativeDefault.space.PX_4,
  width: 96,
  padding: nativeDefault.space.PX_8,
  backgroundColor: "#ffffff",
  borderRadius: 8,
};
createStyles.badgeBox = { height: 72, alignItems: "center", justifyContent: "center" };
let closure_12 = createStyles.createStyles(createStyles);
let size = fn(2);
const result = size.fileFinishedImporting(
  "modules/devtools/native/components/screens/DevToolsGuildTagBadgesScreen.tsx",
);

export default function DevToolsGuildTagBadgesScreen() {
  const tmp = closure_12();
  _require = tmp;
  const tmp2 = _slicedToArray(noop.useState(1), 2);
  const first = tmp2[0];
  _slicedToArray = tmp2[1];
  const tmp4 = _slicedToArray(noop.useState(1), 2);
  noop = tmp4[1];
  closure_4 = tmp5;
  closure_5 = tmp6;
  let obj = { style: tmp.wrap, contentContainerStyle: tmp.contentContainer, children: null };
  obj = { spacing: 16, children: null };
  obj = { variant: "text-md/normal", children: null };
  items = ["All ", closure_9.length, " badge kinds. Tint: "];
  items[3] = items[first].label;
  items[4] = " \u00B7 Size: ";
  items[5] = dependencyMap[tmp4[0]];
  items[6] = "px. 2c = two-color badge.";
  obj.children = items;
  let items1 = [closure_7(require("Text/Text").Text, obj), , ,];
  const obj1 = {
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    children: closure_8(closure_5, {
      style: tmp.controlRow,
      children: items.map((label, index) => {
        closure_0 = index;
        const obj = { text: label.label, size: "sm", variant: null, onPress: null };
        let str = "secondary";
        if (index === first) {
          str = "primary";
        }
        obj.variant = str;
        obj.onPress = function onPress() {
          return closure_2(closure_0);
        };
        return closure_1_8(closure_0(first[9]).Button, obj, label.label);
      }),
    }),
  };
  items1[1] = closure_8(closure_4, obj1);
  const obj2 = {
    style: tmp.controlRow,
    children: items.map((label, index) => {
      closure_0 = index;
      const obj = { text: label.label, size: "sm", variant: null, onPress: null };
      let str = "secondary";
      if (index === first) {
        str = "primary";
      }
      obj.variant = str;
      obj.onPress = function onPress() {
        return closure_2(closure_0);
      };
      return closure_1_8(closure_0(first[9]).Button, obj, label.label);
    }),
  };
  items1[2] = closure_8(require("components/Button/Button").Button, {
    text: "Size: " + dependencyMap[tmp4[0]] + "px (tap to cycle)",
    size: "sm",
    onPress() {
      return closure_3((arg0) => (arg0 + 1) % length.length);
    },
  });
  const obj3 = {
    text: "Size: " + dependencyMap[tmp4[0]] + "px (tap to cycle)",
    size: "sm",
    onPress() {
      return closure_3((arg0) => (arg0 + 1) % length.length);
    },
  };
  items1[3] = closure_8(closure_5, {
    style: tmp.grid,
    children: closure_9.map((value) => {
      value = value.value;
      let obj = { style: closure_0.tile, children: null };
      obj = { style: closure_0.badgeBox, children: null };
      const size = {
        badge: value,
        primaryTintColor: closure_4.primary,
        secondaryTintColor: closure_4.secondary,
        width: height,
        height,
      };
      obj.children = React6(badges_GuildBadge.GuildBadge, size);
      items = [React6(hasOwnProperty, obj)];
      obj = { variant: "text-xs/normal", color: "text-muted", style: { textAlign: "center" }, children: null };
      const items1 = [value.name];
      let str = "";
      if (2 === timestampProducer[value]) {
        str = " \u00B7 2c";
      }
      items1[1] = str;
      obj.children = items1;
      items[1] = React5(Text_Text.Text, obj);
      obj.children = items;
      return React5(hasOwnProperty, obj, value);
    }),
  });
  obj.children = items1;
  obj.children = closure_7(require("Stack/Stack").Stack, obj);
  return closure_8(closure_4, obj);
}
