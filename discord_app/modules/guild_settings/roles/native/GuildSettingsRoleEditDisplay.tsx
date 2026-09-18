// === Module 17968: GuildSettingsRoleEditDisplay ===

// Module 17968 (GuildSettingsRoleEditDisplay)
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4689 */;
import noop from "module_19" /* 19 */;
import GuildSettingsRolesStore from "GuildSettingsRolesStore" /* 17953 */;

require = fn;
const View = fn(17).View;
const isEveryoneRole = fn(2017).isEveryoneRole;
const RoleColorsStyle = fn(17953).RoleColorsStyle;
const STYLE_CONFIGS = fn(17952).STYLE_CONFIGS;
const Constants = fn(1074);
({ DEFAULT_ROLE_COLOR: closure_9, MAX_ROLE_LENGTH: c10 } = Constants);
let closure_11 = fn(17955).DEFAULT_GRADIENT_ROLE_COLORS;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(4722);
let obj2 = { roleIcon: { paddingTop: 2 }, roleIconPlaceholder: { opacity: 0.5 }, trailingColorContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center" }, colorBlock: { marginHorizontal: 0, marginVertical: 0, marginRight: 8, minWidth: 24, height: 24, borderRadius: 3 }, holographicInfo: { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO, padding: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_12, marginTop: -1 * nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_12, display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8, justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.ICON_FEEDBACK_INFO } };
let closure_15 = createStyles.createStyles(obj2);
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
  const hasEnhancedRoleColorsForRole = guild(id[10]).useHasEnhancedRoleColorsForRole(guild.id, role);
  let obj = guild(id[10]);
  const items = [GuildSettingsRolesStore];
  const stateFromStores = guild(id[11]).useStateFromStores(items, () => GuildSettingsRolesStore.getRoleStyleData(role.id));
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
    const tmp4Result = tmp4(tmp5[12]);
    const canGuildUseRoleIconsResult = tmp4(tmp5[12]).canGuildUseRoleIcons(guild, role);
    let obj3 = { guildId: guild.id, roleId: role.id, role, size: 26 };
    const roleIconProps = tmp4(tmp5[13]).useRoleIconProps(obj3);
    if (null != roleIconProps) {
      let obj4 = {};
      const merged = Object.assign(roleIconProps);
      let tmp17 = closure_12(role(tmp5[14]), obj4);
      let tmp18 = role;
      let tmp19 = closure_12;
      const tmp22 = role(tmp5[14]);
    } else {
      const obj5 = { source: role(tmp5[16]), size: tmp4(tmp5[15]).IconSizes.MEDIUM };
      tmp17 = closure_12(tmp4(tmp5[15]).Icon, obj5);
      tmp18 = role;
      tmp19 = closure_12;
    }
    const items1 = [guild.id, id];
    const items2 = [role, id, concat, primary_color, SOLID];
    const callback = SOLID.useCallback(() => {
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17970, dependencyMap.paths), "RoleIcon", { guildId: guild.id, roleId: id });
    }, items1);
    const items3 = [guild.id, role, id, SOLID];
    const callback1 = SOLID.useCallback(() => {
      if (SOLID === RoleColorsStyle.SOLID) {
        const obj2 = {
          color: primary_color,
          onSelect(arg0) {
              guild(id[21]).updateRoleColor(role, arg0);
            }
        };
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16548, dependencyMap.paths), "RoleColorPicker", obj2);
      } else if (tmp === tmp2.GRADIENT) {
        const obj4 = {
          colors: concat,
          onSelect(colors) {
              guild(id[21]).updateRoleColors(closure_1_2, colors, constants.GRADIENT);
            }
        };
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17972, dependencyMap.paths), "RoleColorPicker", obj4);
      }
    }, items2);
    const callback2 = SOLID.useCallback(() => {
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17973, dependencyMap.paths), "EnhancedRoleColorsSelectStyleModal", {
        guildId: guild.id,
        role,
        roleStyle: SOLID,
        onStyleChanged(currentStyle) {
          guild(id[21]).updateRoleStyles(closure_1_2, currentStyle);
        }
      });
    }, items3);
    const obj6 = { label: null, value: null, disabled: null, onChange: null, maxLength: null, autoFocus: null, errorMessage: null };
    const intl = tmp4(tmp5[25]).intl;
    obj6.label = intl.string(tmp4(tmp5[25]).t.dLbkBk);
    obj6.value = name;
    obj6.disabled = tmp3;
    obj6.onChange = onNameChanged;
    obj6.maxLength = maxLength;
    obj6.autoFocus = autoFocusInput;
    const name2 = formErrors.name;
    let first;
    if (name2 != null) {
      first = name2[0];
    }
    obj6.errorMessage = first;
    const items4 = [tmp19(tmp4(tmp5[24]).TextInput, obj6), , , , , ];
    const obj7 = { role };
    items4[1] = tmp19(tmp18(tmp5[26]), obj7);
    const obj8 = { label: null, onPress: null, arrow: true, subLabel: null, disabled: null };
    const intl2 = tmp4(tmp5[25]).intl;
    obj8.label = intl2.string(tmp4(tmp5[25]).t["9wVJRB"]);
    obj8.onPress = callback2;
    let labelString;
    if (found != null) {
      labelString = found.labelString;
    }
    let str = "";
    if (null != labelString) {
      const intl3 = tmp4(tmp5[25]).intl;
      str = intl3.string(found.labelString);
    }
    obj8.subLabel = str;
    obj8.disabled = tmp3;
    const items5 = [tmp19(tmp4(tmp5[28]).TableRow, obj8), ];
    if (SOLID === RoleColorsStyle.HOLOGRAPHIC) {
      const obj9 = { hasIcons: false, children: null };
      items5[1] = tmp36;
      obj9.children = items5;
      items4[2] = closure_13(tmp4(tmp5[27]).TableRowGroup, obj9);
      let tmp30Result = SOLID === RoleColorsStyle.HOLOGRAPHIC;
      if (tmp30Result) {
        const obj10 = { style: tmp.holographicInfo, children: null };
        const obj11 = { size: "sm", color: tmp18(tmp5[9]).colors.ICON_FEEDBACK_INFO };
        const items6 = [tmp19(tmp4(tmp5[33]).CircleInformationIcon, obj11), ];
        const obj12 = { variant: "text-sm/normal", children: null };
        const intl5 = tmp4(tmp5[25]).intl;
        obj12.children = intl5.string(tmp18(tmp5[35]).tBhCyr);
        items6[1] = tmp19(tmp4(tmp5[34]).Text, obj12);
        obj10.children = items6;
        tmp30Result = closure_13(primary_color, obj10);
      }
      items4[3] = tmp30Result;
      let tmp19Result = null;
      if (canGuildUseRoleIconsResult) {
        const obj13 = { disabled: tmp3, label: null, onPress: null, arrow: true, trailing: null };
        const intl6 = tmp4(tmp5[25]).intl;
        obj13.label = intl6.string(tmp4(tmp5[25]).t.B9grJw);
        obj13.onPress = callback;
        const items7 = [tmp.roleIcon, ];
        let roleIconPlaceholder = null == roleIconProps;
        if (roleIconPlaceholder) {
          roleIconPlaceholder = tmp.roleIconPlaceholder;
        }
        const obj14 = { hasIcons: false, children: null };
        const obj15 = { style: null, children: null };
        items7[1] = roleIconPlaceholder;
        obj15.style = items7;
        obj15.children = tmp17;
        obj13.trailing = tmp19(primary_color, obj15);
        obj14.children = tmp19(tmp4(tmp5[28]).TableRow, obj13);
        tmp19Result = tmp19(tmp4(tmp5[27]).TableRowGroup, obj14);
      }
      items4[4] = tmp19Result;
      let tmp52 = tmp3;
      if (!tmp3) {
        tmp52 = tmp2;
      }
      const obj16 = { disabled: tmp52, label: null, value: null, onValueChange: null, subLabel: null };
      const intl7 = tmp4(tmp5[25]).intl;
      obj16.label = intl7.string(tmp4(tmp5[25]).t.iVW5w4);
      obj16.value = hoist;
      obj16.onValueChange = onHoistChanged;
      const intl8 = tmp4(tmp5[25]).intl;
      obj16.subLabel = intl8.string(tmp4(tmp5[25]).t.vceJPk);
      const items8 = [tmp19(tmp4(tmp5[36]).TableSwitchRow, obj16), ];
      if (!tmp3) {
        tmp3 = tmp2;
      }
      const obj17 = { children: null };
      const obj18 = { hasIcons: false, children: null };
      const obj19 = { disabled: tmp3, label: null, value: null, onValueChange: null };
      const intl9 = tmp4(tmp5[25]).intl;
      obj19.label = intl9.format(tmp4(tmp5[25]).t.DTXoJQ, {});
      obj19.value = mentionable;
      obj19.onValueChange = onMentionableChanged;
      items8[1] = tmp19(tmp4(tmp5[36]).TableSwitchRow, obj19);
      obj18.children = items8;
      items4[5] = closure_13(tmp4(tmp5[27]).TableRowGroup, obj18);
      obj17.children = items4;
      return closure_13(closure_14, obj17);
    } else {
      const obj20 = { label: null, onPress: null, arrow: true, trailing: null, subLabel: null, disabled: null };
      const intl4 = tmp4(tmp5[25]).intl;
      obj20.label = intl4.string(tmp4(tmp5[25]).t["5NC5YW"]);
      obj20.onPress = callback1;
      const obj21 = { style: tmp.trailingColorContainer, children: null };
      if (SOLID === RoleColorsStyle.GRADIENT) {
        let primary_color1;
        if (concat != null) {
          primary_color1 = concat.primary_color;
        }
        const items9 = [primary_color1, , ];
        let secondary_color1;
        if (concat != null) {
          secondary_color1 = concat.secondary_color;
        }
        items9[1] = secondary_color1;
        let tertiary_color;
        if (concat != null) {
          tertiary_color = concat.tertiary_color;
        }
        const obj22 = { colors: null, start: null, end: null, style: null };
        items9[2] = tertiary_color;
        const found1 = items9.filter(tmp4(tmp5[30]).isNotNullish);
        obj22.colors = found1.map((item) => guild(id[31]).int2hex(item));
        obj22.start = { x: 0, y: 0 };
        obj22.end = { x: 1, y: 0 };
        obj22.style = tmp.colorBlock;
        let tmp19Result3 = tmp19(tmp18(tmp5[29]), obj22);
        const tmp18Result = tmp18(tmp5[29]);
      } else {
        const obj23 = { color: primary_color, style: tmp.colorBlock };
        tmp19Result3 = tmp19(tmp18(tmp5[32]), obj23);
      }
      obj21.children = tmp19Result3;
      obj20.trailing = tmp19(primary_color, obj21);
      if (SOLID === RoleColorsStyle.GRADIENT) {
        let num2;
        if (concat != null) {
          num2 = concat.primary_color;
        }
        if (num2 == null) {
          num2 = 0;
        }
        const int2hexResult = tmp4(tmp5[31]).int2hex(num2);
        const tmp4Result6 = tmp4(tmp5[31]);
        let num3;
        if (concat != null) {
          num3 = concat.secondary_color;
        }
        if (num3 == null) {
          num3 = 0;
        }
        const _HermesInternal = HermesInternal;
        concat = HermesInternal.concat;
        let combined = concat(int2hexResult, ", ", tmp4(tmp5[31]).int2hex(num3), "]");
        const tmp4Result7 = tmp4(tmp5[31]);
      } else {
        combined = tmp4(tmp5[31]).int2hex(primary_color);
        const tmp4Result8 = tmp4(tmp5[31]);
      }
      obj20.subLabel = combined;
      obj20.disabled = tmp3;
      tmp19(tmp4(tmp5[28]).TableRow, obj20);
    }
    const tmp4Result5 = tmp4(tmp5[13]);
  }
  SOLID = RoleColorsStyle.SOLID;
  let obj2 = guild(id[11]);
};