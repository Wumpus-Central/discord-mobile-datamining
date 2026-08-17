// discord_app/modules/guild_settings/roles/native/GuildSettingsRoleEditDisplay.tsx
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { isEveryoneRole } from "GuildRoleRecordTypeTag" /* 1984 */;
import closure_6 from "handleSetSection" /* 16831 */;
import { RoleColorsStyle } from "handleSetSection" /* 16831 */;
import { STYLE_CONFIGS } from "title" /* 16830 */;
import ME from "ME" /* 676 */;
import { DEFAULT_GRADIENT_ROLE_COLORS as closure_11 } from "HOLOGRAPHIC_ROLE_COLORS" /* 16833 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
({ DEFAULT_ROLE_COLOR: c9, MAX_ROLE_LENGTH: c10 } = ME);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
createCacheKey = { roleIcon: { paddingTop: 2, opacity: 0.5 }, trailingColorContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center" }, colorBlock: { marginHorizontal: 0, marginVertical: 0, marginRight: 8, minWidth: 24, height: 24, borderRadius: 3 }, holographicInfo: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_INFO, padding: ThemesDefault.space.PX_8, marginHorizontal: ThemesDefault.space.PX_12, marginTop: -1 * ThemesDefault.space.PX_12, marginBottom: ThemesDefault.space.PX_12, display: "flex", flexDirection: "row", gap: ThemesDefault.space.PX_8, justifyContent: "center", alignItems: "center", borderRadius: ThemesDefault.radii.sm, borderWidth: 1, borderColor: ThemesDefault.colors.ICON_FEEDBACK_INFO };
createCacheKey[3] = createCacheKey;
let closure_15 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleEditDisplay.tsx");

export default function GuildSettingsRoleEditDisplay(guild) {
  guild = guild.guild;
  const role = guild.role;
  let id;
  let SOLID;
  let primary_color;
  let concat;
  ({ name, formErrors, mentionable, hoist, onNameChanged, onMentionableChanged, onHoistChanged, locked, autoFocusInput } = guild);
  const tmp = callback2();
  const tmp2 = concat(role);
  let tmp3 = tmp2;
  if (!tmp2) {
    tmp3 = locked;
  }
  id = role.id;
  let obj = guild(id[10]);
  const hasEnhancedRoleColorsForRole = obj.useHasEnhancedRoleColorsForRole(guild.id, role);
  obj1 = guild(id[11]);
  const items = [closure_6];
  const stateFromStores = obj1.useStateFromStores(items, () => closure_1_6.getRoleStyleData(role.id));
  if (null != stateFromStores) {
    if (hasEnhancedRoleColorsForRole) {
      SOLID = stateFromStores.currentStyle;
    }
    const found = STYLE_CONFIGS.find((id) => id.id === SOLID);
    concat = undefined;
    if (stateFromStores != null) {
      const styleColors = stateFromStores.styleColors;
      if (styleColors != null) {
        concat = styleColors[SOLID];
      }
    }
    primary_color = undefined;
    if (concat != null) {
      primary_color = concat.primary_color;
    }
    if (null == primary_color) {
      primary_color = closure_9;
    }
    if (null == concat) {
      concat = closure_11;
    } else {
      let secondary_color;
      if (concat != null) {
        secondary_color = concat.secondary_color;
      }
    }
    let tmp4Result = tmp4(tmp5[12]);
    tmp4Result = tmp4(tmp5[13]);
    obj = { guildId: null, roleId: null, size: 26 };
    obj[0] = guild.id;
    obj[1] = role.id;
    let roleIcon = tmp4Result.useRoleIcon(obj);
    if (roleIcon == null) {
      obj = { source: null, size: null };
      obj[0] = role(tmp5[15]);
      obj[1] = tmp4(tmp5[14]).IconSizes.MEDIUM;
      roleIcon = callback(tmp4(tmp5[14]).Icon, obj);
    }
    const items1 = [role, id, concat, primary_color, SOLID];
    const items2 = [guild.id, role, id, SOLID];
    callback = SOLID.useCallback(() => {
      if (SOLID === closure_1_7.SOLID) {
        let obj = role(id[16]);
        obj = { color: null, onSelect: null };
        obj[0] = primary_color;
        obj[1] = function onSelect(arg0) {
          closure_1_0(closure_1_2[19]).updateRoleColor(closure_1, arg0);
        };
        obj.openLazy(guild(id[18])(id[17], id.paths), "RoleColorPicker", obj);
      } else if (tmp === tmp2.GRADIENT) {
        obj = { colors: null, onSelect: null };
        obj[0] = concat;
        obj[1] = function onSelect(colors) {
          closure_1_0(closure_1_2[19]).updateRoleColors(closure_2, colors, closure_1_7.GRADIENT);
        };
        role(id[16]).openLazy(guild(id[18])(id[20], id.paths), "RoleColorPicker", obj);
        const obj3 = role(id[16]);
      }
    }, items1);
    const callback1 = SOLID.useCallback(() => {
      let obj = role(id[16]);
      obj = {
        guildId: guild.id,
        role,
        roleStyle: SOLID,
        onStyleChanged(currentStyle) {
          closure_1_0(closure_1_2[19]).updateRoleStyles(closure_2, currentStyle);
        }
      };
      obj.openLazy(guild(id[18])(id[21], id.paths), "EnhancedRoleColorsSelectStyleModal", obj);
    }, items2);
    obj1 = { label: null, value: null, isDisabled: null, onChange: null, maxLength: null, autoFocus: null, errorMessage: null };
    const intl = tmp4(tmp5[23]).intl;
    obj1[0] = intl.string(tmp4(tmp5[23]).t.dLbkBk);
    obj1[1] = name;
    obj1[2] = tmp3;
    obj1[3] = onNameChanged;
    obj1[4] = closure_10;
    obj1[5] = autoFocusInput;
    const name2 = formErrors.name;
    let first;
    if (name2 != null) {
      first = name2[0];
    }
    obj1[6] = first;
    const items3 = [callback(tmp4(tmp5[22]).TextInput, obj1), , , , , ];
    const obj2 = { role: null };
    obj2[0] = role;
    items3[1] = callback(role(tmp5[24]), obj2);
    let obj3 = { label: null, onPress: null, arrow: true, subLabel: null, disabled: null };
    const intl2 = tmp4(tmp5[23]).intl;
    obj3[0] = intl2.string(tmp4(tmp5[23]).t["9wVJRB"]);
    obj3[1] = callback1;
    let labelString;
    if (found != null) {
      labelString = found.labelString;
    }
    let str = "";
    if (null != labelString) {
      const intl3 = tmp4(tmp5[23]).intl;
      str = intl3.string(found.labelString);
    }
    obj3[3] = str;
    obj3[4] = tmp3;
    const items4 = [callback(tmp4(tmp5[26]).TableRow, obj3), ];
    if (SOLID === RoleColorsStyle.HOLOGRAPHIC) {
      const obj4 = { hasIcons: false, children: null };
      items4[1] = tmp28;
      obj4[1] = items4;
      items3[2] = tmp20(tmp4(tmp5[25]).TableRowGroup, obj4);
      let tmp20Result = SOLID === tmp27.HOLOGRAPHIC;
      if (tmp20Result) {
        const obj5 = { style: null, children: null };
        obj5[0] = tmp.holographicInfo;
        const obj6 = { size: "sm", color: null };
        obj6[1] = tmp25(tmp5[9]).colors.ICON_FEEDBACK_INFO;
        const items5 = [tmp22(tmp4(tmp5[31]).CircleInformationIcon, obj6), ];
        const obj7 = { variant: "text-sm/normal", children: null };
        const intl5 = tmp4(tmp5[23]).intl;
        obj7[1] = intl5.string(tmp25(tmp5[33]).tBhCyr);
        items5[1] = tmp22(tmp4(tmp5[32]).Text, obj7);
        obj5[1] = items5;
        tmp20Result = tmp20(primary_color, obj5);
      }
      items3[3] = tmp20Result;
      let tmp22Result = null;
      if (canGuildUseRoleIconsResult) {
        const obj8 = { hasIcons: false, children: null };
        const obj9 = { disabled: null, label: null, trailing: null, subLabel: null };
        obj9[0] = tmp3;
        const intl6 = tmp4(tmp5[23]).intl;
        obj9[1] = intl6.string(tmp4(tmp5[23]).t.B9grJw);
        const obj10 = { style: null, children: null };
        obj10[0] = tmp.roleIcon;
        obj10[1] = roleIcon;
        obj9[2] = tmp22(primary_color, obj10);
        const intl7 = tmp4(tmp5[23]).intl;
        obj9[3] = intl7.string(tmp4(tmp5[23]).t.ZTpgyG);
        obj8[1] = tmp22(tmp4(tmp5[26]).TableRow, obj9);
        tmp22Result = tmp22(tmp4(tmp5[25]).TableRowGroup, obj8);
      }
      items3[4] = tmp22Result;
      let tmp44 = tmp3;
      if (!tmp3) {
        tmp44 = tmp2;
      }
      const obj11 = { disabled: null, label: null, value: null, onValueChange: null, subLabel: null };
      obj11[0] = tmp44;
      const intl8 = tmp4(tmp5[23]).intl;
      obj11[1] = intl8.string(tmp4(tmp5[23]).t.iVW5w4);
      obj11[2] = hoist;
      obj11[3] = onHoistChanged;
      const intl9 = tmp4(tmp5[23]).intl;
      obj11[4] = intl9.string(tmp4(tmp5[23]).t.vceJPk);
      const items6 = [tmp22(tmp4(tmp5[34]).TableSwitchRow, obj11), ];
      if (!tmp3) {
        tmp3 = tmp2;
      }
      const obj12 = { children: null };
      const obj13 = { hasIcons: false, children: null };
      const obj14 = { disabled: null, label: null, value: null, onValueChange: null };
      obj14[0] = tmp3;
      const intl10 = tmp4(tmp5[23]).intl;
      obj14[1] = intl10.format(tmp4(tmp5[23]).t.DTXoJQ, {});
      obj14[2] = mentionable;
      obj14[3] = onMentionableChanged;
      items6[1] = tmp22(tmp4(tmp5[34]).TableSwitchRow, obj14);
      obj13[1] = items6;
      items3[5] = tmp20(tmp4(tmp5[25]).TableRowGroup, obj13);
      obj12[0] = items3;
      return tmp20(tmp21, obj12);
    } else {
      const obj15 = { label: null, onPress: null, arrow: true, trailing: null, subLabel: null, disabled: null };
      const intl4 = tmp4(tmp5[23]).intl;
      obj15[0] = intl4.string(tmp4(tmp5[23]).t["5NC5YW"]);
      obj15[1] = callback;
      const obj16 = { style: null, children: null };
      obj16[0] = tmp.trailingColorContainer;
      if (SOLID === tmp27.GRADIENT) {
        let primary_color1;
        if (concat != null) {
          primary_color1 = concat.primary_color;
        }
        const items7 = [primary_color1, , ];
        let secondary_color1;
        if (concat != null) {
          secondary_color1 = concat.secondary_color;
        }
        items7[1] = secondary_color1;
        let tertiary_color;
        if (concat != null) {
          tertiary_color = concat.tertiary_color;
        }
        const obj17 = { colors: null, start: null, end: null, style: null };
        items7[2] = tertiary_color;
        const found1 = items7.filter(tmp4(tmp5[28]).isNotNullish);
        obj17[0] = found1.map((color) => guild(id[29]).int2hex(color));
        obj17[1] = { x: 0, y: 0 };
        obj17[2] = { x: 1, y: 0 };
        obj17[3] = tmp.colorBlock;
        tmp22Result = tmp22(tmp25(tmp5[27]), obj17);
        const tmp25Result = tmp25(tmp5[27]);
      } else {
        const obj18 = { color: null, style: null };
        obj18[0] = primary_color;
        obj18[1] = tmp.colorBlock;
        tmp22Result = tmp22(tmp25(tmp5[30]), obj18);
      }
      obj16[1] = tmp22Result;
      obj15[3] = tmp22(primary_color, obj16);
      if (SOLID === tmp27.GRADIENT) {
        let num2;
        if (concat != null) {
          num2 = concat.primary_color;
        }
        if (num2 == null) {
          num2 = 0;
        }
        const int2hexResult = tmp4(tmp5[29]).int2hex(num2);
        const tmp4Result1 = tmp4(tmp5[29]);
        let num3;
        if (concat != null) {
          num3 = concat.secondary_color;
        }
        if (num3 == null) {
          num3 = 0;
        }
        const _HermesInternal = HermesInternal;
        concat = HermesInternal.concat;
        let combined = concat(int2hexResult, ", ", tmp4(tmp5[29]).int2hex(num3), "]");
        const tmp4Result2 = tmp4(tmp5[29]);
      } else {
        combined = tmp4(tmp5[29]).int2hex(primary_color);
        const tmp4Result3 = tmp4(tmp5[29]);
      }
      obj15[4] = combined;
      obj15[5] = tmp3;
      tmp22(tmp4(tmp5[26]).TableRow, obj15);
      const tmp29 = primary_color;
    }
    canGuildUseRoleIconsResult = tmp4Result.canGuildUseRoleIcons(guild, role);
    tmp21 = closure_14;
  }
  SOLID = RoleColorsStyle.SOLID;
};