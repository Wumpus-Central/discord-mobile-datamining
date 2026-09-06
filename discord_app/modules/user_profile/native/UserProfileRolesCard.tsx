// discord_app/modules/user_profile/native/UserProfileRolesCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import VerifiedRoleIconDefault from "../../connections/native/VerifiedRoleIcon.tsx";
import UserProfileRoleUtils from "../UserProfileRoleUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../../stores/GuildRoleStore.tsx";

require = fn;
function RoleDot(color) {
  color = color.color;
  const style = [closure_12().roleDot];
  if (color == null) {
    color = React5;
  }
  style[1] = { backgroundColor: color };
  return React7(View, { style });
}
class RoleItem {
  constructor(arg0) {
    role = global.role;
    guildId = global.guildId;
    colorString = global.color;
    closure_2 = undefined;
    colorString = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    tmp = closure_12();
    if (role.name.length <= MAX_VISUAL_ROLE_LENGTH) {
      name = role.name;
    } else {
      name = role.name;
      num = 0;
      tmp3 = globalThis;
      _HermesInternal = HermesInternal;
      str = "...";
      str2 = "";
      name = "" + name.slice(0, tmp2) + "...";
    }
    closure_2 = name;
    if (colorString == null) {
      colorString = role.colorString;
    }
    tmp4 = role;
    tmp5 = closure_2;
    obj = role(closure_2[8]);
    obj = { guildId, roleId: role.id, size: 12 };
    roleIcon = obj.useRoleIcon(obj);
    closure_4 = roleIcon;
    tags = role.tags;
    guild_connections = undefined;
    if (tags != null) {
      guild_connections = tags.guild_connections;
    }
    renderContent = function renderContent() {
      if (closure_5) {
        let obj = { roleId: role.id, guildId, roleColor: null, size: 12, displayRoleIcon: false };
        colorString = undefined;
        if (role != null) {
          colorString = role.colorString;
        }
        obj.roleColor = colorString;
        let tmp3Result = tmp3(VerifiedRoleIconDefault, obj);
        let tmp8 = tmp3;
      } else {
        obj = { color: colorString };
        tmp3Result = tmp3(RoleDot, obj);
        tmp8 = tmp3;
      }
      obj = { children: null };
      const items = [tmp3Result, tmp8(Text_Text.Text, { variant: "text-xs/medium", children: name }), roleIcon];
      obj.children = items;
      return closure_2_11(closure_2_10, obj);
    };
    closure_5 = undefined !== guild_connections;
    DeveloperMode = tmp4(tmp5[9]).DeveloperMode;
    setting = DeveloperMode.useSetting();
    obj3 = guildId(tmp5[10]);
    items = [,];
    items[0] = role.id;
    items[1] = name;
    items1 = [, ,];
    items1[0] = role;
    items1[1] = name;
    items1[2] = roleIcon;
    callback = colorString.useCallback(() => {
      ClipboardUtils.copy(role.id);
      ToastUtils.roleIdCopied(name);
    }, items);
    tmp11 = jsx;
    if (setting) {
      obj1 = {
        onPress: null,
        onLongPress: null,
        accessibilityRole: "button",
        accessibilityLabel: null,
        accessibilityHint: null,
        style: null,
        children: null,
      };
      obj1.onPress = callback;
      tmp14 = undefined;
      if (setting) {
        if (obj3.useExperiment({ location: "RoleItem" }, { autoTrackExposure: false }).tidaWebformEnabled) {
          tmp14 = tmp10;
        }
      }
      obj1.onLongPress = tmp14;
      obj1.accessibilityLabel = name;
      intl = tmp4(tmp5[13]).intl;
      obj1.accessibilityHint = intl.string(tmp4(tmp5[13]).t.sMsaLg);
      obj1.style = tmp.role;
      num3 = 0;
      obj1.children = renderContent();
      tmp11Result = tmp11(tmp4(tmp5[18]).PressableHighlight, obj1);
    } else {
      tmp12 = closure_4;
      obj2 = { style: null, children: null };
      obj2.style = tmp.role;
      num2 = 0;
      obj2.children = renderContent();
      tmp11Result = tmp11(closure_4, obj2);
    }
    return tmp11Result;
  }
}
function RolesList(guildMemberRoleIds) {
  guildMemberRoleIds = guildMemberRoleIds.guildMemberRoleIds;
  const guildId = guildMemberRoleIds.guildId;
  let obj = guildMemberRoleIds(504);
  const items = [GuildRoleStore];
  const items1 = [guildMemberRoleIds, guildId];
  const stateFromStoresArray = obj.useStateFromStoresArray(
    items,
    () => {
      const manyRoles = GuildRoleStore.getManyRoles(guildId, guildMemberRoleIds);
      return manyRoles.sort(UserProfileRoleUtils.sortRolesByVerification);
    },
    items1,
  );
  let tmp2 = null;
  if (0 !== stateFromStoresArray.length) {
    obj = {
      style: tmp.roleContainer,
      children: stateFromStoresArray.map((role) => React7(RoleItem, { role, guildId }, role.id)),
    };
    tmp2 = closure_9(View, obj);
  }
  return tmp2;
}
const View = fn(17).View;
const Constants = fn(1074);
({ DEFAULT_ROLE_COLOR_HEX: closure_7, MAX_VISUAL_ROLE_LENGTH: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
let createStyles = { roleContainer: { flexDirection: "row", gap: 8, flexWrap: "wrap" }, role: null, roleDot: null };
createStyles = {
  flexDirection: "row",
  alignItems: "center",
  columnGap: 4,
  padding: 6,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  borderRadius: nativeDefault.radii.sm,
};
createStyles.role = createStyles;
let size = { borderRadius: nativeDefault.radii.round, height: 12, width: 12 };
createStyles.roleDot = size;
let closure_12 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileRolesCard.tsx");

export default function UserProfileRolesCard(userId) {
  userId = userId.userId;
  const guildId = userId.guildId;
  let obj = userId(504);
  const items = [GuildMemberStore];
  const items1 = [userId, guildId];
  const stateFromStores = obj.useStateFromStores(items, () => GuildMemberStore.getMember(guildId, userId), items1);
  let roles;
  if (stateFromStores != null) {
    roles = stateFromStores.roles;
  }
  if (roles == null) {
    roles = [];
  }
  let tmp4 = null;
  if (0 !== roles.length) {
    obj = { title: null, style: null, children: null };
    const intl = tmp(1114).intl;
    obj.title = intl.string(tmp(1114).t["LPJmL/"]);
    obj.style = userId.style;
    obj = { guildId, guildMemberRoleIds: roles };
    obj.children = closure_9(RolesList, obj);
    tmp4 = closure_9(guildId(7207), obj);
    const tmp7 = guildId(7207);
  }
  return tmp4;
}
export { RoleItem };
