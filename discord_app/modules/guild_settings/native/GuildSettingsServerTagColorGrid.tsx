// discord_app/modules/guild_settings/native/GuildSettingsServerTagColorGrid.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const GuildTagConstants = fn(7944);
({
  GUILD_TAG_BADGE_PALETTE_PRESETS: closure_4,
  GUILD_TAG_BADGE_NUM_CUSTOMIZABLE_COLORS: hasOwnProperty,
  GuildTagBadgeSize: metroRequire,
} = GuildTagConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
const createStyles = {
  grid: { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 },
  defaultIcon: null,
};
const rect = { position: "absolute", right: nativeDefault.space.PX_4, bottom: nativeDefault.space.PX_4 };
createStyles.defaultIcon = rect;
let closure_9 = createStyles.createStyles(createStyles);
let size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagColorGrid.tsx");

export default function GuildSettingsServerTagColorGrid(badge) {
  badge = badge.badge;
  let primary = badge.primaryColor;
  let secondary = badge.secondaryColor;
  ({ onSelectColor: View, cellSize } = badge);
  let tmp = closure_9();
  closure_5 = tmp2;
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
        let tmp2 = closure_5;
        if (closure_5) {
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
  if (closure_5[badge] >= 2) {
    if (primary == null) {
      primary = cellSize[0].primary;
    }
    let obj = { primaryColor: primary, secondaryColor: null };
    if (secondary == null) {
      secondary = cellSize[0].secondary;
    }
    obj.secondaryColor = secondary;
    let formatToPlainStringResult = formatToPlainString(t.hr4D2X, obj);
    let tmp11 = tmp8;
    let tmp12 = tmp7;
  } else {
    let primary2 = primary;
    if (primary == null) {
      primary2 = cellSize[0].primary;
    }
    obj = { color: primary2 };
    formatToPlainStringResult = formatToPlainString(t["7BFCRR"], obj);
    tmp11 = tmp8;
    tmp12 = tmp7;
  }
  obj = { spacing: primary(tmp11[4]).space.PX_8, children: null };
  const obj1 = { variant: "text-md/medium", color: "text-subtle", accessibilityRole: "header", children: null };
  const intl2 = tmp12(tmp11[6]).intl;
  obj1.children = intl2.string(tmp12(tmp11[6]).t["Fg/TNW"]);
  const items = [closure_7(tmp12(tmp11[8]).Text, obj1)];
  let obj2 = { accessibilityRole: "radiogroup", style: tmp.grid, children: null };
  const items1 = [
    cellSize.map((primary) => {
      badge = primary;
      const obj = { size: cellSize, selected: null, accessibilityLabel: null, onPress: null, children: null };
      let tmp5 = primary.primary === primary;
      if (tmp5) {
        let tmp7 = !closure_5;
        if (closure_5) {
          tmp7 = primary.secondary === secondary;
        }
        tmp5 = tmp7;
      }
      obj.selected = tmp5;
      if (closure_5) {
        let guildTagPalettePresetColorLabel = primary(tmp3[10])(primary.primary, primary.secondary);
      } else {
        guildTagPalettePresetColorLabel = badge(tmp3[10]).getGuildTagPalettePresetColorLabel(primary.primary);
        const obj2 = badge(tmp3[10]);
      }
      obj.accessibilityLabel = guildTagPalettePresetColorLabel;
      obj.onPress = function onPress() {
        secondary = null;
        if (closure_5) {
          secondary = primary.secondary;
        }
        return View(primary.primary, secondary);
      };
      const size = {
        badge,
        width: closure_1_6.SIZE_32,
        height: closure_1_6.SIZE_32,
        primaryTintColor: primary.primary,
        secondaryTintColor: null,
      };
      secondary = undefined;
      if (closure_5) {
        secondary = primary.secondary;
      }
      size.secondaryTintColor = secondary;
      obj.children = closure_1_7(badge(secondary[11]).GuildBadge, size);
      return closure_1_7(primary(secondary[9]), obj, "" + primary.primary + primary.secondary);
    }),
    ,
  ];
  const obj3 = { size: cellSize, selected: tmp3, accessibilityLabel: null, onPress: null, children: null };
  const intl3 = tmp12(tmp11[6]).intl;
  obj3.accessibilityLabel = intl3.string(tmp12(tmp11[6]).t.S6N0gC);
  obj3.onPress = function onPress() {
    return View(null, null);
  };
  let size = { badge, width: closure_6.SIZE_32, height: closure_6.SIZE_32 };
  const items2 = [closure_7(tmp12(tmp11[11]).GuildBadge, size)];
  const tmp15 = primary(tmp11[9]);
  items2[1] = closure_7(tmp12(tmp11[12]).RefreshIcon, {
    size: "xs",
    color: primary(tmp11[4]).colors.ICON_DEFAULT,
    style: tmp.defaultIcon,
  });
  obj3.children = items2;
  items1[1] = closure_8(tmp15, obj3);
  const obj5 = {
    size: cellSize,
    selected: everyResult,
    accessibilityRole: "button",
    accessibilityLabel: formatToPlainStringResult,
    onPress: badge.onPressEyedropper,
    children: null,
  };
  const obj4 = { size: "xs", color: primary(tmp11[4]).colors.ICON_DEFAULT, style: tmp.defaultIcon };
  const tmp16 = primary(tmp11[9]);
  obj5.children = closure_7(tmp12(tmp11[13]).EyeDropperIcon, {
    size: "sm",
    color: primary(tmp11[4]).colors.ICON_DEFAULT,
  });
  items1[2] = closure_7(tmp16, obj5);
  obj2.children = items1;
  items[1] = closure_8(View, obj2);
  obj.children = items;
  return closure_8(tmp12(tmp11[7]).Stack, obj);
}
