// discord_app/modules/devtools/native/components/screens/DevToolsGuildTagBadgesScreen.tsx
import ThemesDefault from "Themes" /* 712 */;
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import items from "items" /* 8168 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
({ ScrollView: c4, View: c5 } = get_ActivityIndicator);
({ GUILD_TAG_BADGE_NUM_CUSTOMIZABLE_COLORS: closure_6, GUILD_TAG_BADGE_PALETTE_PRESETS, GuildTagBadgeKind } = items);
({ jsxs: error, jsx: closure_8 } = jsxProd);
const entries = Object.entries(GuildTagBadgeKind);
const found = entries.filter((arg0) => {
  [tmp] = arg0;
  return isNaN(Number(tmp));
});
let closure_9 = found.map((arg0) => {
  [tmp, tmp2] = arg0;
  return { name, value };
});
items = [{ label: "Untinted", primary: "dispatch", secondary: "limit" }, ...GUILD_TAG_BADGE_PALETTE_PRESETS.map((primary) => ({ label: "P" + arg1 + 1, primary: primary.primary, secondary: primary.secondary }))];
let closure_11 = [24, 48, 72];
createCacheKey = { wrap: null, contentContainer: null, controlRow: null, grid: null, tile: null, badgeBox: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_32 };
let obj1 = { padding: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_32 };
createCacheKey[2] = { flexDirection: "row", gap: ThemesDefault.space.PX_8 };
let obj2 = { flexDirection: "row", gap: ThemesDefault.space.PX_8 };
createCacheKey[3] = { flexDirection: "row", flexWrap: "wrap", gap: ThemesDefault.space.PX_8 };
const obj3 = { flexDirection: "row", flexWrap: "wrap", gap: ThemesDefault.space.PX_8 };
createCacheKey[4] = { alignItems: "center", justifyContent: "flex-start", gap: ThemesDefault.space.PX_4, width: 96, padding: ThemesDefault.space.PX_8, backgroundColor: "#ffffff", borderRadius: 8 };
createCacheKey[5] = { height: 72, alignItems: "center", justifyContent: "center" };
let closure_12 = createCacheKey.createStyles(createCacheKey);
const obj4 = { alignItems: "center", justifyContent: "flex-start", gap: ThemesDefault.space.PX_4, width: 96, padding: ThemesDefault.space.PX_8, backgroundColor: "#ffffff", borderRadius: 8 };
const result = require("set").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsGuildTagBadgesScreen.tsx");

export default function DevToolsGuildTagBadgesScreen() {
  const tmp = callback4();
  const _require = tmp;
  const tmp2 = callback(React.useState(1), 2);
  const first = tmp2[0];
  callback = tmp2[1];
  const tmp4 = callback(React.useState(1), 2);
  React = tmp4[1];
  closure_4 = tmp5;
  closure_5 = tmp6;
  let obj = { style: tmp.wrap, contentContainerStyle: tmp.contentContainer, children: null };
  obj = { spacing: 16, children: null };
  items = ["All ", closure_9.length, " badge kinds. Tint: "];
  items[3] = items[first].label;
  items[4] = " \u00B7 Size: ";
  items[5] = table[tmp4[0]];
  items[6] = "px. 2c = two-color badge.";
  let items1 = [callback2(_require(first[8]).Text, { variant: "text-md/normal", children: items }), , , ];
  obj = {
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    children: callback3(closure_5, {
      style: tmp.controlRow,
      children: items.map((label) => {
        const lib = arg1;
        const obj = { text: label.label, size: "sm", variant: null, onPress: null };
        let str = "secondary";
        if (arg1 === first) {
          str = "primary";
        }
        obj[2] = str;
        obj[3] = function onPress() {
          return closure_1_2(closure_0);
        };
        return closure_1_8(lib(first[9]).Button, obj, label.label);
      })
    })
  };
  items1[1] = callback3(closure_4, obj);
  obj1 = {
    style: tmp.controlRow,
    children: items.map((label) => {
      const lib = arg1;
      const obj = { text: label.label, size: "sm", variant: null, onPress: null };
      let str = "secondary";
      if (arg1 === first) {
        str = "primary";
      }
      obj[2] = str;
      obj[3] = function onPress() {
        return closure_1_2(closure_0);
      };
      return closure_1_8(lib(first[9]).Button, obj, label.label);
    })
  };
  items1[2] = callback3(_require(first[9]).Button, {
    text: "Size: " + table[tmp4[0]] + "px (tap to cycle)",
    size: "sm",
    onPress() {
      return callback((arg0) => (arg0 + 1) % length.length);
    }
  });
  const obj2 = {
    text: "Size: " + table[tmp4[0]] + "px (tap to cycle)",
    size: "sm",
    onPress() {
      return callback((arg0) => (arg0 + 1) % length.length);
    }
  };
  items1[3] = callback3(closure_5, {
    style: tmp.grid,
    children: closure_9.map((value) => {
      value = value.value;
      let obj = { style: lib.tile, children: null };
      obj = { style: lib.badgeBox, children: closure_1_8(lib(first[10]).GuildBadge, obj) };
      obj = { badge: value, primaryTintColor: closure_4.primary, secondaryTintColor: closure_4.secondary, width: closure_5, height: closure_5 };
      items = [closure_1_8(closure_5, obj), ];
      obj1 = { variant: "text-xs/normal", color: "text-muted", style: { textAlign: "center" }, children: null };
      const items1 = [value.name, ];
      let str = "";
      if (2 === closure_1_6[value]) {
        str = " \u00B7 2c";
      }
      items1[1] = str;
      obj1[3] = items1;
      items[1] = closure_1_7(lib(first[8]).Text, obj1);
      obj[1] = items;
      return closure_1_7(closure_5, obj, value);
    })
  });
  obj[1] = items1;
  obj[2] = callback2(_require(first[7]).Stack, obj);
  return callback3(closure_4, obj);
};