// === Module 17625: GuildSettingsRoleEditDisplay ===

// Module 17625 (GuildSettingsRoleEditDisplay)
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import noop from "module_19" /* 19 */;
import GuildSettingsRolesStore from "GuildSettingsRolesStore" /* 17610 */;

require = fn;
const View = fn(17).View;
const isEveryoneRole = fn(2016).isEveryoneRole;
const RoleColorsStyle = fn(17610).RoleColorsStyle;
const STYLE_CONFIGS = fn(17609).STYLE_CONFIGS;
const Constants = fn(1074);
({ DEFAULT_ROLE_COLOR: closure_9, MAX_ROLE_LENGTH: c10 } = Constants);
let closure_11 = fn(17612).DEFAULT_GRADIENT_ROLE_COLORS;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
fn(4560);
let createStyles = { roleIcon: { paddingTop: 2, opacity: 0.5 }, trailingColorContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center" }, colorBlock: { marginHorizontal: 0, marginVertical: 0, marginRight: 8, minWidth: 24, height: 24, borderRadius: 3 }, holographicInfo: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO, padding: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_12, marginTop: -1 * nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_12, display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8, justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.ICON_FEEDBACK_INFO };
createStyles.holographicInfo = createStyles;
let closure_15 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleEditDisplay.tsx");

export default function GuildSettingsRoleEditDisplay(guild) {
  guild = guild.guild;
  const role = guild.role;
  let id;
  let SOLID;
  let primary_color;
  let concat;
  ({ name, formErrors, mentionable, hoist, onNameChanged, onMentionableChanged, onHoistChanged, locked, autoFocusInput } = guild);
  const tmp = closure_15();
  const tmp2 = concat(role);
  let tmp3 = tmp2;
  if (!tmp2) {
    tmp3 = locked;
  }
  id = role.id;
  let obj = guild(id[10]);
  const hasEnhancedRoleColorsForRole = obj.useHasEnhancedRoleColorsForRole(guild.id, role);
  let obj1 = guild(id[11]);
  const items = [GuildSettingsRolesStore];
  const stateFromStores = obj1.useStateFromStores(items, () => GuildSettingsRolesStore.getRoleStyleData(role.id));
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
    tmp4(tmp5[12]);
    const tmp4Result = tmp4(tmp5[13]);
    obj = { guildId: guild.id, roleId: role.id, size: 26 };
    let roleIcon = tmp4Result.useRoleIcon(obj);
    if (roleIcon == null) {
      obj = { source: role(tmp5[15]), size: tmp4(tmp5[14]).IconSizes.MEDIUM };
      roleIcon = closure_12(tmp4(tmp5[14]).Icon, obj);
    }
    const items1 = [role, id, concat, primary_color, SOLID];
    const items2 = [guild.id, role, id, SOLID];
    const callback = SOLID.useCallback(() => {
      if (SOLID === RoleColorsStyle.SOLID) {
        let obj = {
          color: primary_color,
          onSelect(arg0) {
              guild(id[19]).updateRoleColor(role, arg0);
            }
        };
        obj.openLazy(asyncRequireImpl(16291, dependencyMap.paths), "RoleColorPicker", obj);
      } else if (tmp === tmp2.GRADIENT) {
        obj = {
          colors: concat,
          onSelect(colors) {
              guild(id[19]).updateRoleColors(closure_1_2, colors, constants.GRADIENT);
            }
        };
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17627, dependencyMap.paths), "RoleColorPicker", obj);
      }
    }, items1);
    const callback1 = SOLID.useCallback(() => {
      const obj = {
        guildId: guild.id,
        role,
        roleStyle: SOLID,
        onStyleChanged(currentStyle) {
          guild(id[19]).updateRoleStyles(closure_1_2, currentStyle);
        }
      };
      obj.openLazy(asyncRequireImpl(17628, dependencyMap.paths), "EnhancedRoleColorsSelectStyleModal", obj);
    }, items2);
    obj1 = { label: null, value: null, isDisabled: null, onChange: null, maxLength: null, autoFocus: null, errorMessage: null };
    const intl = tmp4(tmp5[23]).intl;
    obj1.label = intl.string(tmp4(tmp5[23]).t.dLbkBk);
    obj1.value = name;
    obj1.isDisabled = tmp3;
    obj1.onChange = onNameChanged;
    obj1.maxLength = maxLength;
    obj1.autoFocus = autoFocusInput;
    const name2 = formErrors.name;
    let first;
    if (name2 != null) {
      first = name2[0];
    }
    obj1.errorMessage = first;
    const items3 = [closure_12(tmp4(tmp5[22]).TextInput, obj1), , , , , ];
    const obj2 = { role };
    items3[1] = closure_12(role(tmp5[24]), obj2);
    let obj3 = { label: null, onPress: null, arrow: true, subLabel: null, disabled: null };
    const intl2 = tmp4(tmp5[23]).intl;
    obj3.label = intl2.string(tmp4(tmp5[23]).t["9wVJRB"]);
    obj3.onPress = callback1;
    let labelString;
    if (found != null) {
      labelString = found.labelString;
    }
    let str = "";
    if (null != labelString) {
      const intl3 = tmp4(tmp5[23]).intl;
      str = intl3.string(found.labelString);
    }
    obj3.subLabel = str;
    obj3.disabled = tmp3;
    const items4 = [closure_12(tmp4(tmp5[26]).TableRow, obj3), ];
    if (SOLID === RoleColorsStyle.HOLOGRAPHIC) {
      const obj4 = { hasIcons: false, children: null };
      items4[1] = tmp28;
      obj4.children = items4;
      items3[2] = closure_13(tmp4(tmp5[25]).TableRowGroup, obj4);
      let tmp20Result = SOLID === RoleColorsStyle.HOLOGRAPHIC;
      if (tmp20Result) {
        const obj5 = { style: tmp.holographicInfo, children: null };
        const obj6 = { size: "sm", color: tmp25(tmp5[9]).colors.ICON_FEEDBACK_INFO };
        const items5 = [closure_12(tmp4(tmp5[31]).CircleInformationIcon, obj6), ];
        const obj7 = { variant: "text-sm/normal", children: null };
        const intl5 = tmp4(tmp5[23]).intl;
        obj7.children = intl5.string(tmp25(tmp5[33]).tBhCyr);
        items5[1] = closure_12(tmp4(tmp5[32]).Text, obj7);
        obj5.children = items5;
        tmp20Result = closure_13(primary_color, obj5);
      }
      items3[3] = tmp20Result;
      let tmp22Result = null;
      if (canGuildUseRoleIconsResult) {
        const obj8 = { hasIcons: false, children: null };
        const obj9 = { disabled: tmp3, label: null, trailing: null, subLabel: null };
        const intl6 = tmp4(tmp5[23]).intl;
        obj9.label = intl6.string(tmp4(tmp5[23]).t.B9grJw);
        const obj10 = { style: tmp.roleIcon, children: roleIcon };
        obj9.trailing = closure_12(primary_color, obj10);
        const intl7 = tmp4(tmp5[23]).intl;
        obj9.subLabel = intl7.string(tmp4(tmp5[23]).t.ZTpgyG);
        obj8.children = closure_12(tmp4(tmp5[26]).TableRow, obj9);
        tmp22Result = closure_12(tmp4(tmp5[25]).TableRowGroup, obj8);
      }
      items3[4] = tmp22Result;
      let tmp44 = tmp3;
      if (!tmp3) {
        tmp44 = tmp2;
      }
      const obj11 = { disabled: tmp44, label: null, value: null, onValueChange: null, subLabel: null };
      const intl8 = tmp4(tmp5[23]).intl;
      obj11.label = intl8.string(tmp4(tmp5[23]).t.iVW5w4);
      obj11.value = hoist;
      obj11.onValueChange = onHoistChanged;
      const intl9 = tmp4(tmp5[23]).intl;
      obj11.subLabel = intl9.string(tmp4(tmp5[23]).t.vceJPk);
      const items6 = [closure_12(tmp4(tmp5[34]).TableSwitchRow, obj11), ];
      if (!tmp3) {
        tmp3 = tmp2;
      }
      const obj12 = { children: null };
      const obj13 = { hasIcons: false, children: null };
      const obj14 = { disabled: tmp3, label: null, value: null, onValueChange: null };
      const intl10 = tmp4(tmp5[23]).intl;
      obj14.label = intl10.format(tmp4(tmp5[23]).t.DTXoJQ, {});
      obj14.value = mentionable;
      obj14.onValueChange = onMentionableChanged;
      items6[1] = closure_12(tmp4(tmp5[34]).TableSwitchRow, obj14);
      obj13.children = items6;
      items3[5] = closure_13(tmp4(tmp5[25]).TableRowGroup, obj13);
      obj12.children = items3;
      return closure_13(closure_14, obj12);
    } else {
      const obj15 = { label: null, onPress: null, arrow: true, trailing: null, subLabel: null, disabled: null };
      const intl4 = tmp4(tmp5[23]).intl;
      obj15.label = intl4.string(tmp4(tmp5[23]).t["5NC5YW"]);
      obj15.onPress = callback;
      const obj16 = { style: tmp.trailingColorContainer, children: null };
      if (SOLID === RoleColorsStyle.GRADIENT) {
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
        obj17.colors = found1.map((item) => guild(id[29]).int2hex(item));
        obj17.start = { x: 0, y: 0 };
        obj17.end = { x: 1, y: 0 };
        obj17.style = tmp.colorBlock;
        tmp22Result = closure_12(tmp25(tmp5[27]), obj17);
        const tmp25Result = tmp25(tmp5[27]);
      } else {
        const obj18 = { color: primary_color, style: tmp.colorBlock };
        tmp22Result = closure_12(tmp25(tmp5[30]), obj18);
      }
      obj16.children = tmp22Result;
      obj15.trailing = closure_12(primary_color, obj16);
      if (SOLID === RoleColorsStyle.GRADIENT) {
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
      obj15.subLabel = combined;
      obj15.disabled = tmp3;
      closure_12(tmp4(tmp5[26]).TableRow, obj15);
    }
    canGuildUseRoleIconsResult = tmp4Result.canGuildUseRoleIcons(guild, role);
  }
  SOLID = RoleColorsStyle.SOLID;
};