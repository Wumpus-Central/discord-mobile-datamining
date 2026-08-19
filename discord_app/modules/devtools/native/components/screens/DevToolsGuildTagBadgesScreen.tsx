// discord_app/modules/devtools/native/components/screens/DevToolsGuildTagBadgesScreen.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import items from "../../../../guild_tag/GuildTagConstants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
({ ScrollView: c4, View: c5 } = get_ActivityIndicator);
({ GUILD_TAG_BADGE_NUM_CUSTOMIZABLE_COLORS: closure_6, GUILD_TAG_BADGE_PALETTE_PRESETS, GuildTagBadgeKind } = items);
({ jsxs: error, jsx: closure_8 } = jsxProd);
const entries = Object.entries(GuildTagBadgeKind);
const found = entries.filter((item, index) => {
  [tmp] = item;
  return isNaN(Number(tmp));
});
let closure_9 = found.map((item, index) => {
  [tmp, tmp2] = item;
  return { name, value };
});
items = [{ label: "Untinted", primary: "dispatch", secondary: "limit" }, ...GUILD_TAG_BADGE_PALETTE_PRESETS.map((item, index) => ({ label: "P" + index + 1, primary: item.primary, secondary: item.secondary }))];
let closure_11 = [24, 48, 72];
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_32 };
createCacheKey[2] = { flexDirection: "row", gap: ThemesDefault.space.PX_8 };
createCacheKey[3] = { flexDirection: "row", flexWrap: "wrap", gap: ThemesDefault.space.PX_8 };
createCacheKey[4] = { alignItems: "center", justifyContent: "flex-start", gap: ThemesDefault.space.PX_4, width: 96, padding: ThemesDefault.space.PX_8, backgroundColor: "#ffffff", borderRadius: 8 };
createCacheKey[5] = { height: 72, alignItems: "center", justifyContent: "center" };
let closure_12 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsGuildTagBadgesScreen.tsx");

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
  items = ["All ", closure_9.length, " badge kinds. Tint: "];
  items[3] = items[first].label;
  items[4] = " \u00B7 Size: ";
  items[5] = table[tmp4[0]];
  items[6] = "px. 2c = two-color badge.";
  let items1 = [callback2(_require(first[8]).Text, { variant: "text-md/normal", children: items }), , , ];
  let obj = {
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    children: callback3(closure_5, {
      style: tmp.controlRow,
      children: items.map((item, index) => {
        const lib = index;
        const obj = { text: item.label, size: "sm", variant: null, onPress: null };
        let str = "secondary";
        if (index === first) {
          str = "primary";
        }
        obj[2] = str;
        obj[3] = function onPress() {
          return closure_1_2(closure_0);
        };
        return closure_1_8(lib(first[9]).Button, obj, item.label);
      })
    })
  };
  items1[1] = callback3(closure_4, obj);
  obj1 = {
    style: tmp.controlRow,
    children: items.map((item, index) => {
      const lib = index;
      const obj = { text: item.label, size: "sm", variant: null, onPress: null };
      let str = "secondary";
      if (index === first) {
        str = "primary";
      }
      obj[2] = str;
      obj[3] = function onPress() {
        return closure_1_2(closure_0);
      };
      return closure_1_8(lib(first[9]).Button, obj, item.label);
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
    children: closure_9.map((item, index) => {
      const value = item.value;
      let obj = { style: lib.tile, children: null };
      { style: lib.badgeBox, children: closure_1_8(lib(first[10]).GuildBadge, obj) };
      obj = { badge: value, primaryTintColor: closure_4.primary, secondaryTintColor: closure_4.secondary, width: closure_5, height: closure_5 };
      items = [closure_1_8(closure_5, obj), ];
      obj1 = { variant: "text-xs/normal", color: "text-muted", style: { textAlign: "center" }, children: null };
      const items1 = [item.name, ];
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