// discord_app/modules/devtools/native/components/screens/DevToolsGuildTagBadgesScreen.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import items from "items";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let GUILD_TAG_BADGE_PALETTE_PRESETS;
let GuildTagBadgeKind;
let c4;
let c5;
let closure_6;
let error;
let metroImportAll;
let require = arg1;
({ ScrollView: c4, View: c5 } = get_ActivityIndicator);
({ GUILD_TAG_BADGE_NUM_CUSTOMIZABLE_COLORS: closure_6, GUILD_TAG_BADGE_PALETTE_PRESETS, GuildTagBadgeKind } = items);
({ jsxs: error, jsx: metroImportAll } = jsxProd);
const entries = Object.entries(GuildTagBadgeKind);
const found = entries.filter((arg0) => {
  let tmp;
  [tmp] = arg0;
  return isNaN(Number(tmp));
});
let closure_9 = found.map((arg0) => {
  let tmp;
  let tmp2;
  [tmp, tmp2] = arg0;
  return { name, value };
});
items = [{ label: "Untinted", primary: "dispatch", secondary: "limit" }, ...GUILD_TAG_BADGE_PALETTE_PRESETS.map((primary) => ({ label: "P" + arg1 + 1, primary: primary.primary, secondary: primary.secondary }))];
let closure_11 = [24, 48, 72];
createCacheKey = { wrap: null, contentContainer: null, controlRow: null, grid: null, tile: null, badgeBox: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: require("Themes").space.PX_16, paddingBottom: require("Themes").space.PX_32 };
let obj1 = { padding: require("Themes").space.PX_16, paddingBottom: require("Themes").space.PX_32 };
createCacheKey[2] = { flexDirection: "row", gap: require("Themes").space.PX_8 };
let obj2 = { flexDirection: "row", gap: require("Themes").space.PX_8 };
createCacheKey[3] = { flexDirection: "row", flexWrap: "wrap", gap: require("Themes").space.PX_8 };
const obj3 = { flexDirection: "row", flexWrap: "wrap", gap: require("Themes").space.PX_8 };
createCacheKey[4] = { alignItems: "center", justifyContent: "flex-start", gap: require("Themes").space.PX_4, width: 96, padding: require("Themes").space.PX_8, backgroundColor: "#ffffff", borderRadius: 8 };
createCacheKey[5] = { height: 72, alignItems: "center", justifyContent: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj4 = { alignItems: "center", justifyContent: "flex-start", gap: require("Themes").space.PX_4, width: 96, padding: require("Themes").space.PX_8, backgroundColor: "#ffffff", borderRadius: 8 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsGuildTagBadgesScreen.tsx");

export default function DevToolsGuildTagBadgesScreen() {
  let tmp = createCacheKey();
  const require = tmp;
  const tmp2 = callback(React.useState(1), 2);
  const first = tmp2[0];
  callback = tmp2[1];
  const tmp4 = callback(React.useState(1), 2);
  React = tmp4[1];
  let closure_4 = tmp5;
  let closure_5 = tmp6;
  let obj = { style: tmp.wrap, contentContainerStyle: tmp.contentContainer, children: null };
  obj = { spacing: 16, children: null };
  let items = ["All ", closure_9.length, " badge kinds. Tint: "];
  items[3] = items[first].label;
  items[4] = " \u00B7 Size: ";
  items[5] = table[tmp4[0]];
  items[6] = "px. 2c = two-color badge.";
  let items1 = [callback2(require(first[8]).Text, { variant: "text-md/normal", children: items }), , , ];
  obj = { horizontal: true, showsHorizontalScrollIndicator: false, children: null };
  obj[2] = callback3(closure_5, {
    style: tmp.controlRow,
    children: items.map((label) => {
      let tmp = arg1;
      tmp = outer1_8;
      const obj = { text: label.label, size: "sm", variant: null, onPress: null };
      let str = "secondary";
      if (arg1 === first) {
        str = "primary";
      }
      obj[2] = str;
      obj[3] = function onPress() {
        return outer1_2(closure_0);
      };
      return tmp(tmp(first[9]).Button, obj, label.label);
    })
  });
  items1[1] = callback3(closure_4, obj);
  const obj2 = { text: null, size: "sm", onPress: null };
  obj2[0] = "Size: " + table[tmp4[0]] + "px (tap to cycle)";
  obj2[2] = function onPress() {
    return callback((arg0) => (arg0 + 1) % length.length);
  };
  items1[2] = callback3(require(first[9]).Button, obj2);
  let obj1 = {
    style: tmp.controlRow,
    children: items.map((label) => {
      let tmp = arg1;
      tmp = outer1_8;
      const obj = { text: label.label, size: "sm", variant: null, onPress: null };
      let str = "secondary";
      if (arg1 === first) {
        str = "primary";
      }
      obj[2] = str;
      obj[3] = function onPress() {
        return outer1_2(closure_0);
      };
      return tmp(tmp(first[9]).Button, obj, label.label);
    })
  };
  items1[3] = callback3(closure_5, {
    style: tmp.grid,
    children: closure_9.map((value) => {
      value = value.value;
      let obj = { style: tmp.tile, children: null };
      obj = { style: tmp.badgeBox, children: outer1_8(tmp(first[10]).GuildBadge, obj) };
      obj = { badge: value, primaryTintColor: tmp5.primary, secondaryTintColor: tmp5.secondary, width: closure_5, height: closure_5 };
      const items = [outer1_8(closure_5, obj), ];
      const obj1 = { variant: "text-xs/normal", color: "text-muted", style: { textAlign: "center" }, children: null };
      const items1 = [value.name, ];
      let str = "";
      if (2 === outer1_6[value]) {
        str = " \u00B7 2c";
      }
      items1[1] = str;
      obj1[3] = items1;
      items[1] = outer1_7(outer1_7(first[8]).Text, obj1);
      obj[1] = items;
      return outer1_7(closure_5, obj, value);
    })
  });
  obj[1] = items1;
  obj[2] = callback2(require(first[7]).Stack, obj);
  return callback3(closure_4, obj);
};