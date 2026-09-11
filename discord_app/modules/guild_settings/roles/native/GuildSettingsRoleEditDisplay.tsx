// discord_app/modules/guild_settings/roles/native/GuildSettingsRoleEditDisplay.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildSettingsRolesStore from "../GuildSettingsRolesStore.tsx";

require = fn;
const View = fn(17).View;
const isEveryoneRole = fn(2016).isEveryoneRole;
const RoleColorsStyle = fn(17694).RoleColorsStyle;
const STYLE_CONFIGS = fn(17693).STYLE_CONFIGS;
const Constants = fn(1074);
({ DEFAULT_ROLE_COLOR: closure_9, MAX_ROLE_LENGTH: c10 } = Constants);
let closure_11 = fn(17696).DEFAULT_GRADIENT_ROLE_COLORS;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
fn(4606);
let createStyles = {
  roleIcon: { paddingTop: 2 },
  roleIconPlaceholder: { opacity: 0.5 },
  trailingColorContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center" },
  colorBlock: { marginHorizontal: 0, marginVertical: 0, marginRight: 8, minWidth: 24, height: 24, borderRadius: 3 },
  holographicInfo: null,
};
createStyles = {
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO,
  padding: nativeDefault.space.PX_8,
  marginHorizontal: nativeDefault.space.PX_12,
  marginTop: -1 * nativeDefault.space.PX_12,
  marginBottom: nativeDefault.space.PX_12,
  display: "flex",
  flexDirection: "row",
  gap: nativeDefault.space.PX_8,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  borderColor: nativeDefault.colors.ICON_FEEDBACK_INFO,
};
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
  ({
    name,
    formErrors,
    mentionable,
    hoist,
    onNameChanged,
    onMentionableChanged,
    onHoistChanged,
    locked,
    autoFocusInput,
  } = guild);
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
    obj = { guildId: guild.id, roleId: role.id, role, size: 26 };
    const roleIconProps = tmp4Result.useRoleIconProps(obj);
    if (null != roleIconProps) {
      obj = {};
      const merged = Object.assign(roleIconProps);
      let tmp17 = closure_12(role(tmp5[14]), obj);
      let tmp18 = role;
      let tmp19 = closure_12;
      const tmp22 = role(tmp5[14]);
    } else {
      obj1 = { source: role(tmp5[16]), size: tmp4(tmp5[15]).IconSizes.MEDIUM };
      tmp17 = closure_12(tmp4(tmp5[15]).Icon, obj1);
      tmp18 = role;
      tmp19 = closure_12;
    }
    const items1 = [guild.id, id];
    const items2 = [role, id, concat, primary_color, SOLID];
    const callback = SOLID.useCallback(() => {
      const obj = { guildId: guild.id, roleId: id };
      obj.openLazy(asyncRequireImpl(17711, dependencyMap.paths), "RoleIcon", obj);
    }, items1);
    const items3 = [guild.id, role, id, SOLID];
    const callback1 = SOLID.useCallback(() => {
      if (SOLID === RoleColorsStyle.SOLID) {
        let obj = {
          color: primary_color,
          onSelect(arg0) {
            guild(id[21]).updateRoleColor(role, arg0);
          },
        };
        obj.openLazy(asyncRequireImpl(16362, dependencyMap.paths), "RoleColorPicker", obj);
      } else if (tmp === tmp2.GRADIENT) {
        obj = {
          colors: concat,
          onSelect(colors) {
            guild(id[21]).updateRoleColors(closure_1_2, colors, constants.GRADIENT);
          },
        };
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17713, dependencyMap.paths), "RoleColorPicker", obj);
      }
    }, items2);
    const callback2 = SOLID.useCallback(() => {
      const obj = {
        guildId: guild.id,
        role,
        roleStyle: SOLID,
        onStyleChanged(currentStyle) {
          guild(id[21]).updateRoleStyles(closure_1_2, currentStyle);
        },
      };
      obj.openLazy(asyncRequireImpl(17714, dependencyMap.paths), "EnhancedRoleColorsSelectStyleModal", obj);
    }, items3);
    const obj2 = {
      label: null,
      value: null,
      isDisabled: null,
      onChange: null,
      maxLength: null,
      autoFocus: null,
      errorMessage: null,
    };
    const intl = tmp4(tmp5[25]).intl;
    obj2.label = intl.string(tmp4(tmp5[25]).t.dLbkBk);
    obj2.value = name;
    obj2.isDisabled = tmp3;
    obj2.onChange = onNameChanged;
    obj2.maxLength = maxLength;
    obj2.autoFocus = autoFocusInput;
    const name2 = formErrors.name;
    let first;
    if (name2 != null) {
      first = name2[0];
    }
    obj2.errorMessage = first;
    const items4 = [tmp19(tmp4(tmp5[24]).TextInput, obj2), , , , ,];
    let obj3 = { role };
    items4[1] = tmp19(tmp18(tmp5[26]), obj3);
    const obj4 = { label: null, onPress: null, arrow: true, subLabel: null, disabled: null };
    const intl2 = tmp4(tmp5[25]).intl;
    obj4.label = intl2.string(tmp4(tmp5[25]).t["9wVJRB"]);
    obj4.onPress = callback2;
    let labelString;
    if (found != null) {
      labelString = found.labelString;
    }
    let str = "";
    if (null != labelString) {
      const intl3 = tmp4(tmp5[25]).intl;
      str = intl3.string(found.labelString);
    }
    obj4.subLabel = str;
    obj4.disabled = tmp3;
    const items5 = [tmp19(tmp4(tmp5[28]).TableRow, obj4)];
    if (SOLID === RoleColorsStyle.HOLOGRAPHIC) {
      const obj5 = { hasIcons: false, children: null };
      items5[1] = tmp36;
      obj5.children = items5;
      items4[2] = closure_13(tmp4(tmp5[27]).TableRowGroup, obj5);
      let tmp30Result = SOLID === RoleColorsStyle.HOLOGRAPHIC;
      if (tmp30Result) {
        const obj6 = { style: tmp.holographicInfo, children: null };
        const obj7 = { size: "sm", color: tmp18(tmp5[9]).colors.ICON_FEEDBACK_INFO };
        const items6 = [tmp19(tmp4(tmp5[33]).CircleInformationIcon, obj7)];
        const obj8 = { variant: "text-sm/normal", children: null };
        const intl5 = tmp4(tmp5[25]).intl;
        obj8.children = intl5.string(tmp18(tmp5[35]).tBhCyr);
        items6[1] = tmp19(tmp4(tmp5[34]).Text, obj8);
        obj6.children = items6;
        tmp30Result = closure_13(primary_color, obj6);
      }
      items4[3] = tmp30Result;
      let tmp19Result = null;
      if (canGuildUseRoleIconsResult) {
        const obj9 = { disabled: tmp3, label: null, onPress: null, arrow: true, trailing: null };
        const intl6 = tmp4(tmp5[25]).intl;
        obj9.label = intl6.string(tmp4(tmp5[25]).t.B9grJw);
        obj9.onPress = callback;
        const items7 = [tmp.roleIcon];
        let roleIconPlaceholder = null == roleIconProps;
        if (roleIconPlaceholder) {
          roleIconPlaceholder = tmp.roleIconPlaceholder;
        }
        const obj10 = { hasIcons: false, children: null };
        const obj11 = { style: null, children: null };
        items7[1] = roleIconPlaceholder;
        obj11.style = items7;
        obj11.children = tmp17;
        obj9.trailing = tmp19(primary_color, obj11);
        obj10.children = tmp19(tmp4(tmp5[28]).TableRow, obj9);
        tmp19Result = tmp19(tmp4(tmp5[27]).TableRowGroup, obj10);
      }
      items4[4] = tmp19Result;
      let tmp52 = tmp3;
      if (!tmp3) {
        tmp52 = tmp2;
      }
      const obj12 = { disabled: tmp52, label: null, value: null, onValueChange: null, subLabel: null };
      const intl7 = tmp4(tmp5[25]).intl;
      obj12.label = intl7.string(tmp4(tmp5[25]).t.iVW5w4);
      obj12.value = hoist;
      obj12.onValueChange = onHoistChanged;
      const intl8 = tmp4(tmp5[25]).intl;
      obj12.subLabel = intl8.string(tmp4(tmp5[25]).t.vceJPk);
      const items8 = [tmp19(tmp4(tmp5[36]).TableSwitchRow, obj12)];
      if (!tmp3) {
        tmp3 = tmp2;
      }
      const obj13 = { children: null };
      const obj14 = { hasIcons: false, children: null };
      const obj15 = { disabled: tmp3, label: null, value: null, onValueChange: null };
      const intl9 = tmp4(tmp5[25]).intl;
      obj15.label = intl9.format(tmp4(tmp5[25]).t.DTXoJQ, {});
      obj15.value = mentionable;
      obj15.onValueChange = onMentionableChanged;
      items8[1] = tmp19(tmp4(tmp5[36]).TableSwitchRow, obj15);
      obj14.children = items8;
      items4[5] = closure_13(tmp4(tmp5[27]).TableRowGroup, obj14);
      obj13.children = items4;
      return closure_13(closure_14, obj13);
    } else {
      const obj16 = { label: null, onPress: null, arrow: true, trailing: null, subLabel: null, disabled: null };
      const intl4 = tmp4(tmp5[25]).intl;
      obj16.label = intl4.string(tmp4(tmp5[25]).t["5NC5YW"]);
      obj16.onPress = callback1;
      const obj17 = { style: tmp.trailingColorContainer, children: null };
      if (SOLID === RoleColorsStyle.GRADIENT) {
        let primary_color1;
        if (concat != null) {
          primary_color1 = concat.primary_color;
        }
        const items9 = [primary_color1, ,];
        let secondary_color1;
        if (concat != null) {
          secondary_color1 = concat.secondary_color;
        }
        items9[1] = secondary_color1;
        let tertiary_color;
        if (concat != null) {
          tertiary_color = concat.tertiary_color;
        }
        const obj18 = { colors: null, start: null, end: null, style: null };
        items9[2] = tertiary_color;
        const found1 = items9.filter(tmp4(tmp5[30]).isNotNullish);
        obj18.colors = found1.map((item) => guild(id[31]).int2hex(item));
        obj18.start = { x: 0, y: 0 };
        obj18.end = { x: 1, y: 0 };
        obj18.style = tmp.colorBlock;
        tmp19Result = tmp19(tmp18(tmp5[29]), obj18);
        const tmp18Result = tmp18(tmp5[29]);
      } else {
        const obj19 = { color: primary_color, style: tmp.colorBlock };
        tmp19Result = tmp19(tmp18(tmp5[32]), obj19);
      }
      obj17.children = tmp19Result;
      obj16.trailing = tmp19(primary_color, obj17);
      if (SOLID === RoleColorsStyle.GRADIENT) {
        let num2;
        if (concat != null) {
          num2 = concat.primary_color;
        }
        if (num2 == null) {
          num2 = 0;
        }
        const int2hexResult = tmp4(tmp5[31]).int2hex(num2);
        const tmp4Result1 = tmp4(tmp5[31]);
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
        const tmp4Result2 = tmp4(tmp5[31]);
      } else {
        combined = tmp4(tmp5[31]).int2hex(primary_color);
        const tmp4Result3 = tmp4(tmp5[31]);
      }
      obj16.subLabel = combined;
      obj16.disabled = tmp3;
      tmp19(tmp4(tmp5[28]).TableRow, obj16);
    }
    canGuildUseRoleIconsResult = tmp4Result.canGuildUseRoleIcons(guild, role);
  }
  SOLID = RoleColorsStyle.SOLID;
}
