// discord_app/modules/guild_settings/native/GuildSettingsServerTagColorGrid.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import items from "../../guild_tag/GuildTagConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
noopAll;
({ GUILD_TAG_BADGE_PALETTE_PRESETS: c4, GUILD_TAG_BADGE_NUM_CUSTOMIZABLE_COLORS: c5, GuildTagBadgeSize: closure_6 } = items);
({ jsx: error, jsxs: closure_8 } = jsxProd);
const createCacheKey = { position: "absolute", right: ThemesDefault.space.PX_4, bottom: ThemesDefault.space.PX_4 };
createCacheKey[1] = createCacheKey;
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagColorGrid.tsx");

export default function GuildSettingsServerTagColorGrid(badge) {
  badge = badge.badge;
  let primary = badge.primaryColor;
  let secondary = badge.secondaryColor;
  ({ onSelectColor: View, cellSize } = badge);
  let tmp = callback3();
  const table = tmp2;
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
    everyResult = cellSize.every((item, index) => {
      let tmp = item.primary !== primary;
      if (!tmp) {
        let tmp2 = closure_5;
        if (closure_5) {
          tmp2 = item.secondary !== secondary;
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
  obj = { spacing: primary(tmp11[4]).space.PX_8, children: null };
  obj1 = { variant: "text-md/medium", color: "text-subtle", accessibilityRole: "header", children: null };
  const intl2 = tmp12(tmp11[6]).intl;
  obj1[3] = intl2.string(tmp12(tmp11[6]).t["Fg/TNW"]);
  const items = [callback(tmp12(tmp11[8]).Text, obj1), ];
  let obj2 = { accessibilityRole: "radiogroup", style: tmp.grid, children: null };
  const items1 = [
    cellSize.map((item, index) => {
      closure_0 = item;
      let obj = { size: cellSize, selected: null, accessibilityLabel: null, onPress: null, children: null };
      let tmp5 = item.primary === primary;
      if (tmp5) {
        let tmp7 = !closure_5;
        if (closure_5) {
          tmp7 = item.secondary === secondary;
        }
        tmp5 = tmp7;
      }
      obj[1] = tmp5;
      if (closure_5) {
        let guildTagPalettePresetColorLabel = primary(tmp3[10])(item.primary, item.secondary);
      } else {
        guildTagPalettePresetColorLabel = badge(tmp3[10]).getGuildTagPalettePresetColorLabel(item.primary);
        const obj2 = badge(tmp3[10]);
      }
      obj[2] = guildTagPalettePresetColorLabel;
      obj[3] = function onPress() {
        secondary = null;
        if (closure_1_5) {
          secondary = item.secondary;
        }
        return closure_1_3(item.primary, secondary);
      };
      obj = { badge: closure_0, width: closure_1_6.SIZE_32, height: closure_1_6.SIZE_32, primaryTintColor: item.primary, secondaryTintColor: null };
      secondary = undefined;
      if (closure_5) {
        secondary = item.secondary;
      }
      obj[4] = secondary;
      obj[4] = closure_1_7(badge(secondary[11]).GuildBadge, obj);
      return closure_1_7(primary(secondary[9]), obj, "" + item.primary + item.secondary);
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
  const tmp15 = primary(tmp11[9]);
  items2[1] = callback(tmp12(tmp11[12]).RefreshIcon, { size: "xs", color: primary(tmp11[4]).colors.ICON_DEFAULT, style: tmp.defaultIcon });
  obj3[4] = items2;
  items1[1] = callback2(tmp15, obj3);
  const obj6 = { size: cellSize, selected: everyResult, accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult, onPress: badge.onPressEyedropper, children: null };
  const obj5 = { size: "xs", color: primary(tmp11[4]).colors.ICON_DEFAULT, style: tmp.defaultIcon };
  const tmp16 = primary(tmp11[9]);
  obj6[5] = callback(tmp12(tmp11[13]).EyeDropperIcon, { size: "sm", color: primary(tmp11[4]).colors.ICON_DEFAULT });
  items1[2] = callback(tmp16, obj6);
  obj2[2] = items1;
  items[1] = callback2(View, obj2);
  obj[1] = items;
  return callback2(tmp12(tmp11[7]).Stack, obj);
};