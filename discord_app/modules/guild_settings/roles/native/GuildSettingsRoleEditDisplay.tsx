// discord_app/modules/guild_settings/roles/native/GuildSettingsRoleEditDisplay.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import GuildRoleRecord from "../../../../records/GuildRoleRecord.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import GuildSettingsRoleConstants from "../GuildSettingsRoleConstants.tsx";
import GuildSettingsRolesStore2 from "../GuildSettingsRolesStore.tsx";
import EnhancedRoleColorConstants from "../../../premium/powerups/constants/EnhancedRoleColorConstants.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const GuildSettingsRolesStore = GuildSettingsRolesStore2;

let c10;
let c9;
let closure_12;
let closure_14;
let map1;
let obj2;
const View = react_native.View;
let isEveryoneRole = GuildRoleRecord.isEveryoneRole;
const RoleColorsStyle = GuildSettingsRolesStore2.RoleColorsStyle;
const STYLE_CONFIGS = GuildSettingsRoleConstants.STYLE_CONFIGS;
({ DEFAULT_ROLE_COLOR: c9, MAX_ROLE_LENGTH: c10 } = Constants);
let closure_11 = EnhancedRoleColorConstants.DEFAULT_GRADIENT_ROLE_COLORS;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let obj = {
  roleIcon: { paddingTop: 2 },
  roleIconPlaceholder: { opacity: 0.5 },
  trailingColorContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center" },
  colorBlock: { marginHorizontal: 0, marginVertical: 0, marginRight: 8, minWidth: 24, height: 24, borderRadius: 3 },
  holographicInfo: obj2,
};
obj2 = {
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
let closure_15 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleEditDisplay.tsx");

export default function GuildSettingsRoleEditDisplay(guild) {
  let autoFocusInput;
  let colors;
  let combined;
  let first;
  let formErrors;
  let found1;
  let hoist;
  let intl;
  let intl2;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items7;
  let locked;
  let mentionable;
  let name;
  let obj10;
  let obj19;
  let onHoistChanged;
  let onMentionableChanged;
  let onNameChanged;
  let str;
  let tmp19Result;
  let tmp37;
  let tmp52;
  guild = guild.guild;
  const role = guild.role;
  let SOLID;
  let primary_color;
  isEveryoneRole = undefined;
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
  const tmp2 = isEveryoneRole(role);
  let tmp3 = tmp2 || locked;
  const id = role.id;
  let obj = guild(id[10]);
  const hasEnhancedRoleColorsForRole = obj.useHasEnhancedRoleColorsForRole(guild.id, role);
  let obj2 = guild(id[11]);
  const items = [GuildSettingsRolesStore];
  const stateFromStores = obj2.useStateFromStores(items, () => GuildSettingsRolesStore.getRoleStyleData(role.id));
  if (null != stateFromStores) {
    let tmp17;
    let tmp18;
    let tmp19;
    if (hasEnhancedRoleColorsForRole) {
      SOLID = stateFromStores.currentStyle;
    }
    const found = STYLE_CONFIGS.find((id) => id.id === SOLID);
    let tmp10;
    if (stateFromStores != null) {
      const styleColors = stateFromStores.styleColors;
      if (styleColors != null) {
        tmp10 = styleColors[SOLID];
      }
    }
    primary_color = undefined;
    if (tmp10 != null) {
      primary_color = tmp10.primary_color;
    }
    if (null == primary_color) {
      primary_color = closure_9;
    }
    if (null == tmp10) {
      tmp10 = closure_11;
    } else {
      let secondary_color;
      if (tmp10 != null) {
        secondary_color = tmp10.secondary_color;
      }
    }
    isEveryoneRole = tmp10;
    const tmp4Result = guild(id[12]);
    let obj3 = { guildId: guild.id, roleId: role.id, role, size: 26 };
    const canGuildUseRoleIconsResult = tmp4Result.canGuildUseRoleIcons(guild, role);
    const tmp4Result5 = guild(id[13]);
    const roleIconProps = tmp4Result5.useRoleIconProps(obj3);
    if (null != roleIconProps) {
      let obj4 = {};
      const tmp22 = role(id[14]);
      const merged = Object.assign(roleIconProps);
      tmp17 = closure_12(tmp22, obj4);
      tmp18 = role;
      tmp19 = closure_12;
    } else {
      const obj5 = { source: role(id[16]), size: guild(id[15]).IconSizes.MEDIUM };
      const Icon = tmp4(tmp5[15]).Icon;
      tmp17 = closure_12(Icon, obj5);
      tmp18 = role;
      tmp19 = closure_12;
    }
    const items1 = [guild.id, id];
    const items2 = [role, id, tmp10, primary_color, SOLID];
    const callback = SOLID.useCallback(() => {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { guildId: guild.id, roleId: id };
      obj.openLazy(asyncRequire(17842, dependencyMap.paths), "RoleIcon", obj2);
    }, items1);
    const items3 = [guild.id, role, id, SOLID];
    const callback1 = SOLID.useCallback(() => {
      if (SOLID === RoleColorsStyle.SOLID) {
        let obj = ActionSheetActionCreatorsDefault;
        const obj2 = {
          color: primary_color,
          onSelect(arg0) {
            const obj = guild(id[21]);
            obj.updateRoleColor(role, arg0);
          },
        };
        obj.openLazy(asyncRequire(16271, dependencyMap.paths), "RoleColorPicker", obj2);
      } else if (tmp === tmp2.GRADIENT) {
        const obj4 = {
          colors,
          onSelect(colors) {
            const obj = guild(id[21]);
            obj.updateRoleColors(closure_1_2, colors, constants.GRADIENT);
          },
        };
        const obj3 = ActionSheetActionCreatorsDefault;
        obj3.openLazy(asyncRequire(17844, dependencyMap.paths), "RoleColorPicker", obj4);
      }
    }, items2);
    const callback2 = SOLID.useCallback(() => {
      let obj = ActionSheetActionCreatorsDefault;
      const obj2 = {
        guildId: guild.id,
        role,
        roleStyle: SOLID,
        onStyleChanged(id) {
          const obj = guild(id[21]);
          obj.updateRoleStyles(closure_1_2, id);
        },
      };
      obj.openLazy(asyncRequire(17845, dependencyMap.paths), "EnhancedRoleColorsSelectStyleModal", obj2);
    }, items3);
    const obj6 = {
      label: intl.string(guild(id[25]).t.dLbkBk),
      value: name,
      disabled: tmp3,
      onChange: onNameChanged,
      maxLength,
      autoFocus: autoFocusInput,
      errorMessage: first,
    };
    const TextInput = tmp4(tmp5[24]).TextInput;
    intl = tmp4(tmp5[25]).intl;
    const name2 = formErrors.name;
    first = undefined;
    if (name2 != null) {
      first = name2[0];
    }
    const items4 = [tmp19(TextInput, obj6), , , , ,];
    const obj7 = { role };
    items4[1] = tmp19(tmp18(id[26]), obj7);
    const TableRowGroup = tmp4(tmp5[27]).TableRowGroup;
    const obj8 = {
      label: intl2.string(guild(id[25]).t["9wVJRB"]),
      onPress: callback2,
      arrow: true,
      subLabel: str,
      disabled: tmp3,
    };
    const TableRow = tmp4(tmp5[28]).TableRow;
    intl2 = tmp4(tmp5[25]).intl;
    let labelString;
    if (found != null) {
      labelString = found.labelString;
    }
    str = "";
    if (null != labelString) {
      const intl3 = tmp4(tmp5[25]).intl;
      str = intl3.string(found.labelString);
    }
    const items5 = [tmp19(TableRow, obj8)];
    let tmp19Result3 = SOLID !== RoleColorsStyle.HOLOGRAPHIC;
    if (tmp19Result3) {
      const obj9 = {
        label: intl4.string(guild(id[25]).t["5NC5YW"]),
        onPress: callback1,
        arrow: true,
        trailing: tmp19(tmp37, obj10),
        subLabel: combined,
        disabled: tmp3,
      };
      const TableRow2 = tmp4(tmp5[28]).TableRow;
      intl4 = tmp4(tmp5[25]).intl;
      obj10 = { style: tmp.trailingColorContainer, children: tmp19Result };
      tmp37 = primary_color;
      if (SOLID === RoleColorsStyle.GRADIENT) {
        let primary_color1;
        const tmp18Result = tmp18(id[29]);
        if (tmp10 != null) {
          primary_color1 = tmp10.primary_color;
        }
        const items6 = [primary_color1, ,];
        let secondary_color1;
        if (tmp10 != null) {
          secondary_color1 = tmp10.secondary_color;
        }
        items6[1] = secondary_color1;
        let tertiary_color;
        if (tmp10 != null) {
          tertiary_color = tmp10.tertiary_color;
        }
        items6[2] = tertiary_color;
        const obj11 = {
          colors: found1.map((item) => {
            const obj = guild(id[31]);
            return obj.int2hex(item);
          }),
          start: { x: 0, y: 0 },
          end: { x: 1, y: 0 },
          style: tmp.colorBlock,
        };
        found1 = items6.filter(tmp4(tmp5[30]).isNotNullish);
        tmp19Result = tmp19(tmp18Result, obj11);
      } else {
        const obj12 = { color: primary_color, style: tmp.colorBlock };
        tmp19Result = tmp19(tmp18(tmp5[32]), obj12);
      }
      if (SOLID === RoleColorsStyle.GRADIENT) {
        let num2;
        const int2hex = guild(id[31]).int2hex;
        guild(id[31]);
        if (tmp10 != null) {
          num2 = tmp10.primary_color;
        }
        if (num2 == null) {
          num2 = 0;
        }
        let num3;
        const int2hexResult = int2hex(num2);
        const int2hex2 = guild(id[31]).int2hex;
        guild(id[31]);
        if (tmp10 != null) {
          num3 = tmp10.secondary_color;
        }
        if (num3 == null) {
          num3 = 0;
        }
        const _HermesInternal = HermesInternal;
        combined = "[" + int2hexResult + ", " + int2hex2(num3) + "]";
      } else {
        const tmp4Result8 = guild(id[31]);
        combined = tmp4Result8.int2hex(primary_color);
      }
      tmp19Result3 = tmp19(TableRow2, obj9);
    }
    const obj13 = { hasIcons: false, children: items5 };
    items5[1] = tmp19Result3;
    items4[2] = closure_13(TableRowGroup, obj13);
    let tmp30Result = SOLID === RoleColorsStyle.HOLOGRAPHIC;
    if (tmp30Result) {
      const obj14 = { style: tmp.holographicInfo, children: items7 };
      const obj15 = { size: "sm", color: tmp18(id[9]).colors.ICON_FEEDBACK_INFO };
      const CircleInformationIcon = tmp4(tmp5[33]).CircleInformationIcon;
      items7 = [tmp19(CircleInformationIcon, obj15)];
      const obj16 = { variant: "text-sm/normal", children: intl5.string(tmp18(id[35]).tBhCyr) };
      const Text = tmp4(tmp5[34]).Text;
      intl5 = tmp4(tmp5[25]).intl;
      items7[1] = tmp19(Text, obj16);
      tmp30Result = closure_13(primary_color, obj14);
    }
    items4[3] = tmp30Result;
    let tmp19Result4 = null;
    if (canGuildUseRoleIconsResult) {
      const TableRowGroup2 = tmp4(tmp5[27]).TableRowGroup;
      const obj17 = {
        disabled: tmp3,
        label: intl6.string(guild(id[25]).t.B9grJw),
        onPress: callback,
        arrow: true,
        trailing: tmp19(tmp52, obj19),
      };
      const TableRow3 = tmp4(tmp5[28]).TableRow;
      intl6 = tmp4(tmp5[25]).intl;
      const items8 = [tmp.roleIcon];
      let roleIconPlaceholder = null == roleIconProps;
      tmp52 = primary_color;
      if (roleIconPlaceholder) {
        roleIconPlaceholder = tmp.roleIconPlaceholder;
      }
      obj19 = { style: items8, children: tmp17 };
      items8[1] = roleIconPlaceholder;
      const obj18 = { hasIcons: false, children: tmp19(TableRow3, obj17) };
      tmp19Result4 = tmp19(TableRowGroup2, obj18);
    }
    items4[4] = tmp19Result4;
    const TableRowGroup3 = tmp4(tmp5[27]).TableRowGroup;
    let tmp53 = tmp3;
    const TableSwitchRow = tmp4(tmp5[36]).TableSwitchRow;
    if (!tmp3) {
      tmp53 = tmp2;
    }
    const obj20 = {
      disabled: tmp53,
      label: intl7.string(guild(id[25]).t.iVW5w4),
      value: hoist,
      onValueChange: onHoistChanged,
      subLabel: intl8.string(guild(id[25]).t.vceJPk),
    };
    intl7 = tmp4(tmp5[25]).intl;
    intl8 = tmp4(tmp5[25]).intl;
    const items9 = [tmp19(TableSwitchRow, obj20)];
    const TableSwitchRow2 = tmp4(tmp5[36]).TableSwitchRow;
    if (!tmp3) {
      tmp3 = tmp2;
    }
    const obj21 = { children: items4 };
    const obj22 = { hasIcons: false, children: items9 };
    const obj23 = {
      disabled: tmp3,
      label: intl9.format(guild(id[25]).t.DTXoJQ, {}),
      value: mentionable,
      onValueChange: onMentionableChanged,
    };
    intl9 = tmp4(tmp5[25]).intl;
    items9[1] = tmp19(TableSwitchRow2, obj23);
    items4[5] = closure_13(TableRowGroup3, obj22);
    return closure_13(closure_14, obj21);
  }
  SOLID = RoleColorsStyle.SOLID;
}
