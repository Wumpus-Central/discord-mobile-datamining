// === Module 20076: useCommandPermissionEntryDisplay ===

// Module 20076 (useCommandPermissionEntryDisplay)
import util from "util" /* 1112 */;
import native from "native" /* 1186 */;
import UserUtilsDefault from "UserUtils" /* 5099 */;
import TableRow from "TableRow" /* 6144 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 7096 */;
import TextIcon from "TextIcon" /* 7146 */;
import useRoleIconProps from "useRoleIconProps" /* 7536 */;
import RoleIconDefault from "RoleIcon" /* 7554 */;
import ShieldUserIcon from "ShieldUserIcon" /* 8557 */;
import useCommandPermissionIdentifier from "useCommandPermissionIdentifier" /* 20077 */;
import noop from "module_19" /* 19 */;

require = fn;
const DEFAULT_ROLE_COLOR_HEX = fn(1071).DEFAULT_ROLE_COLOR_HEX;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/integrations/permission/native/useCommandPermissionEntryDisplay.tsx");

export function useChannelEntryDisplay(guild, id) {
  const commandPermissionChannel = useCommandPermissionIdentifier.useCommandPermissionChannel(guild, id, utils_ChannelUtils.getChannelIconComponentWithGuild);
  ({ icon, name } = commandPermissionChannel);
  if (commandPermissionChannel.isAllChannels) {
    const obj2 = { icon: null, label: null };
    const obj3 = { IconComponent: TextIcon.TextIcon };
    obj2.icon = jsx(TableRow.TableRow.Icon, { IconComponent: TextIcon.TextIcon });
    const intl = util.intl;
    obj2.label = intl.string(util.t["7YqSGx"]);
    let tmp6 = obj2;
  } else {
    tmp6 = null;
    if (null != icon) {
      tmp6 = null;
      if (null != name) {
        const obj4 = { icon: null, label: null, subLabel: null };
        const obj5 = { IconComponent: icon };
        obj4.icon = jsx(TableRow.TableRow.Icon, { IconComponent: icon });
        obj4.label = name;
        obj4.subLabel = tmp4;
        tmp6 = obj4;
      }
    }
  }
  return tmp6;
}
export function useRoleEntryDisplay(guild, id) {
  let obj = dependencyMap;
  let name = useCommandPermissionIdentifier.useCommandPermissionRole(guild.id, id);
  let roleIconProps = useRoleIconProps.useRoleIconProps({ guildId: guild.id, roleId: id, size: 24 });
  let name1;
  if (name != null) {
    name1 = name.name;
  }
  if (null == name1) {
    return null;
  } else {
    if (null != roleIconProps) {
      const obj5 = {};
      roleIconProps = Object.assign(roleIconProps);
      obj5.size = 24;
      let tmp4Result = jsx(RoleIconDefault, {});
    } else {
      let colorString = name.colorString;
      if (colorString == null) {
        colorString = DEFAULT_ROLE_COLOR_HEX;
      }
      const obj6 = { size: "md", color: colorString };
      tmp4Result = jsx(ShieldUserIcon.ShieldUserIcon, { size: "md", color: colorString });
    }
    obj = { icon: tmp4Result, label: null };
    name = name.name;
    obj.label = name;
  }
  const obj4 = { guildId: guild.id, roleId: id, size: 24 };
}
export function useUserEntryDisplay(guild, id) {
  const commandPermissionUser = useCommandPermissionIdentifier.useCommandPermissionUser(guild.id, id);
  ({ user, nick } = commandPermissionUser);
  let tmp5 = null;
  if (null != user) {
    const obj2 = { icon: null, label: null, subLabel: null };
    const obj3 = { user, guildId: guild.id };
    obj2.icon = jsx(native.Avatar, { user, guildId: guild.id });
    if (nick == null) {
      nick = user.username;
    }
    obj2.label = nick;
    let userTag;
    if (tmp4) {
      userTag = UserUtilsDefault.getUserTag(user);
    }
    obj2.subLabel = userTag;
    tmp5 = obj2;
  }
  return tmp5;
}