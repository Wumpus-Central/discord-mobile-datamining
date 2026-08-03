import "noop";
import { View } from "get ActivityIndicator";
import items from "items";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ GUILD_TAG_BADGE_PALETTE_PRESETS: c4, GUILD_TAG_BADGE_NUM_CUSTOMIZABLE_COLORS: c5, GuildTagBadgeSize: closure_6 } = items);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { grid: { flexDirection: "row", flexWrap: "wrap", gap: require("Themes").space.PX_8 }, defaultIcon: null };
createCacheKey = { position: "absolute", right: require("Themes").space.PX_4, bottom: require("Themes").space.PX_4 };
createCacheKey[1] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("items").fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagColorGrid.tsx");

export default function GuildSettingsServerTagColorGrid(badge) {
  let View;
  let cellSize;
  badge = badge.badge;
  let primary = badge.primaryColor;
  let secondary = badge.secondaryColor;
  ({ onSelectColor: View, cellSize } = badge);
  let table;
  let tmp = createCacheKey();
  table = tmp2;
  let tmp3 = null == primary;
  if (tmp3) {
    let tmp4 = !tmp2;
    if (tmp2) {
      tmp4 = null == secondary;
    }
    tmp3 = tmp4;
  }
  let everyResult = !tmp3;
  if (!tmp3) {
    everyResult = cellSize.every((primary) => {
      let tmp = primary.primary !== primary;
      if (!tmp) {
        let tmp2 = c5;
        if (c5) {
          tmp2 = primary.secondary !== secondary;
        }
        tmp = tmp2;
      }
      return tmp;
    });
  }
  const intl = badge(secondary[6]).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = badge(secondary[6]).t;
  if (table[badge] >= 2) {
    if (primary == null) {
      primary = cellSize[0].primary;
    }
    let obj = { primaryColor: null, secondaryColor: null };
    obj[0] = primary;
    if (secondary == null) {
      secondary = cellSize[0].secondary;
    }
    obj[1] = secondary;
    let formatToPlainStringResult = formatToPlainString(t.hr4D2X, obj);
    let tmp11 = tmp8;
    let tmp12 = tmp7;
  } else {
    let primary2 = primary;
    if (primary == null) {
      primary2 = cellSize[0].primary;
    }
    obj = { color: null };
    obj[0] = primary2;
    formatToPlainStringResult = formatToPlainString(t["7BFCRR"], obj);
    tmp11 = tmp8;
    tmp12 = tmp7;
  }
  obj = { spacing: null, children: null };
  obj[0] = primary(tmp11[4]).space.PX_8;
  const obj1 = { variant: "text-md/medium", color: "text-subtle", accessibilityRole: "header", children: null };
  const intl2 = tmp12(tmp11[6]).intl;
  obj1[3] = intl2.string(tmp12(tmp11[6]).t["Fg/TNW"]);
  const items = [callback(tmp12(tmp11[8]).Text, obj1), ];
  let obj2 = { accessibilityRole: "radiogroup", style: tmp.grid, children: null };
  const items1 = [
    cellSize.map((primary) => {
      let closure_0 = primary;
      let obj = { size: cellSize, selected: null, accessibilityLabel: null, onPress: null, children: null };
      let tmp5 = primary.primary === primary;
      if (tmp5) {
        let tmp7 = !c5;
        if (c5) {
          tmp7 = primary.secondary === secondary;
        }
        tmp5 = tmp7;
      }
      obj[1] = tmp5;
      if (c5) {
        let guildTagPalettePresetColorLabel = primary(tmp3[10])(primary.primary, primary.secondary);
      } else {
        guildTagPalettePresetColorLabel = badge(tmp3[10]).getGuildTagPalettePresetColorLabel(primary.primary);
        const obj2 = badge(tmp3[10]);
      }
      obj[2] = guildTagPalettePresetColorLabel;
      obj[3] = function onPress() {
        let secondary = null;
        if (outer1_5) {
          secondary = primary.secondary;
        }
        return outer1_3(primary.primary, secondary);
      };
      obj = { badge: closure_0, width: outer1_6.SIZE_32, height: outer1_6.SIZE_32, primaryTintColor: primary.primary, secondaryTintColor: null };
      secondary = undefined;
      if (c5) {
        secondary = primary.secondary;
      }
      obj[4] = secondary;
      obj[4] = outer1_7(badge(secondary[11]).GuildBadge, obj);
      return outer1_7(primary(secondary[9]), obj, "" + primary.primary + primary.secondary);
    }),
  ,

  ];
  const obj3 = { size: cellSize, selected: tmp3, accessibilityLabel: null, onPress: null, children: null };
  const intl3 = tmp12(tmp11[6]).intl;
  obj3[2] = intl3.string(tmp12(tmp11[6]).t.S6N0gC);
  obj3[3] = function onPress() {
    return callback(null, null);
  };
  const items2 = [callback(tmp12(tmp11[11]).GuildBadge, { badge, width: closure_6.SIZE_32, height: closure_6.SIZE_32 }), ];
  const obj5 = { size: "xs", color: null, style: null };
  obj5[1] = primary(tmp11[4]).colors.ICON_DEFAULT;
  obj5[2] = tmp.defaultIcon;
  items2[1] = callback(tmp12(tmp11[12]).RefreshIcon, obj5);
  obj3[4] = items2;
  items1[1] = callback2(primary(tmp11[9]), obj3);
  const obj6 = { size: cellSize, selected: everyResult, accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult, onPress: badge.onPressEyedropper, children: null };
  const obj4 = { badge, width: closure_6.SIZE_32, height: closure_6.SIZE_32 };
  const tmp15 = primary(tmp11[9]);
  const obj7 = { size: "sm", color: null };
  obj7[1] = primary(tmp11[4]).colors.ICON_DEFAULT;
  obj6[5] = callback(tmp12(tmp11[13]).EyeDropperIcon, obj7);
  items1[2] = callback(primary(tmp11[9]), obj6);
  obj2[2] = items1;
  items[1] = callback2(View, obj2);
  obj[1] = items;
  return callback2(tmp12(tmp11[7]).Stack, obj);
};