// discord_app/modules/user_profile/native/UserProfileRolesCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import VerifiedRoleIconDefault from "../../connections/native/VerifiedRoleIcon.tsx";
import RoleIconDefault from "../../roles/native/RoleIcon.tsx";
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
      name1 = role.name;
      num = 0;
      tmp3 = globalThis;
      _HermesInternal = HermesInternal;
      str = "...";
      str2 = "";
      name = "" + name1.slice(0, tmp2) + "...";
    }
    closure_2 = name;
    if (colorString == null) {
      colorString = role.colorString;
    }
    tmp4 = role;
    tmp5 = closure_2;
    obj = role(closure_2[8]);
    obj1 = { guildId, roleId: role.id, size: 12 };
    roleIconProps = obj.useRoleIconProps(obj1);
    closure_4 = roleIconProps;
    tags = role.tags;
    guild_connections = undefined;
    if (tags != null) {
      guild_connections = tags.guild_connections;
    }
    renderContent = function renderContent() {
      if (closure_5) {
        const obj2 = { roleId: role.id, guildId, roleColor: null, size: 12, displayRoleIcon: false };
        colorString = undefined;
        if (role != null) {
          colorString = role.colorString;
        }
        obj2.roleColor = colorString;
        let tmp3Result = React7(VerifiedRoleIconDefault, obj2);
        let tmp8 = React7;
      } else {
        const obj = { color: colorString };
        tmp3Result = React7(RoleDot, obj);
        tmp8 = React7;
      }
      const children = [tmp3Result, tmp8(Text_Text.Text, { variant: "text-xs/medium", children: name })];
      let tmp8Result = null;
      if (null != roleIconProps) {
        const obj4 = {};
        const merged = Object.assign(roleIconProps);
        tmp8Result = tmp8(RoleIconDefault, obj4);
      }
      children[2] = tmp8Result;
      return closure_2_11(closure_2_10, { children });
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
    items1[2] = roleIconProps;
    callback = colorString.useCallback(() => {
      ClipboardUtils.copy(role.id);
      ToastUtils.roleIdCopied(name);
    }, items);
    tmp11 = jsx;
    if (setting) {
      obj6 = {
        onPress: null,
        onLongPress: null,
        accessibilityRole: "button",
        accessibilityLabel: null,
        accessibilityHint: null,
        style: null,
        children: null,
      };
      obj6.onPress = callback;
      tmp14 = undefined;
      if (setting) {
        if (obj3.useExperiment({ location: "RoleItem" }, { autoTrackExposure: false }).tidaWebformEnabled) {
          tmp14 = tmp10;
        }
      }
      obj6.onLongPress = tmp14;
      obj6.accessibilityLabel = name;
      intl = tmp4(tmp5[13]).intl;
      obj6.accessibilityHint = intl.string(tmp4(tmp5[13]).t.sMsaLg);
      obj6.style = tmp.role;
      num3 = 0;
      obj6.children = renderContent();
      tmp11Result = tmp11(tmp4(tmp5[19]).PressableHighlight, obj6);
    } else {
      tmp12 = closure_4;
      obj7 = { style: null, children: null };
      obj7.style = tmp.role;
      num2 = 0;
      obj7.children = renderContent();
      tmp11Result = tmp11(closure_4, obj7);
    }
    return tmp11Result;
  }
}
function RolesList(guildMemberRoleIds) {
  guildMemberRoleIds = guildMemberRoleIds.guildMemberRoleIds;
  const guildId = guildMemberRoleIds.guildId;
  const tmp = closure_12();
  const items = [GuildRoleStore];
  const items1 = [guildMemberRoleIds, guildId];
  const stateFromStoresArray = guildMemberRoleIds(504).useStateFromStoresArray(
    items,
    () => {
      const manyRoles = GuildRoleStore.getManyRoles(guildId, guildMemberRoleIds);
      return manyRoles.sort(UserProfileRoleUtils.sortRolesByVerification);
    },
    items1,
  );
  let tmp2 = null;
  if (0 !== stateFromStoresArray.length) {
    const obj2 = {
      style: tmp.roleContainer,
      children: stateFromStoresArray.map((role) => React7(RoleItem, { role, guildId }, role.id)),
    };
    tmp2 = closure_9(View, obj2);
  }
  return tmp2;
}
const View = fn(17).View;
const Constants = fn(1074);
({ DEFAULT_ROLE_COLOR_HEX: closure_7, MAX_VISUAL_ROLE_LENGTH: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4836);
let obj2 = {
  roleContainer: { flexDirection: "row", gap: 8, flexWrap: "wrap" },
  role: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
    padding: 6,
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
    borderRadius: nativeDefault.radii.sm,
  },
  roleDot: null,
};
let size = { borderRadius: nativeDefault.radii.round, height: 12, width: 12 };
obj2.roleDot = size;
let closure_12 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileRolesCard.tsx");

export default function UserProfileRolesCard(userId) {
  userId = userId.userId;
  const guildId = userId.guildId;
  const items = [GuildMemberStore];
  const items1 = [userId, guildId];
  const stateFromStores = userId(504).useStateFromStores(
    items,
    () => GuildMemberStore.getMember(guildId, userId),
    items1,
  );
  let roles;
  if (stateFromStores != null) {
    roles = stateFromStores.roles;
  }
  if (roles == null) {
    roles = [];
  }
  let tmp4 = null;
  if (0 !== roles.length) {
    const obj2 = { title: null, style: null, children: null };
    const intl = tmp(1115).intl;
    obj2.title = intl.string(tmp(1115).t["LPJmL/"]);
    obj2.style = userId.style;
    const obj3 = { guildId, guildMemberRoleIds: roles };
    obj2.children = closure_9(RolesList, obj3);
    tmp4 = closure_9(guildId(6628), obj2);
    const tmp7 = guildId(6628);
  }
  return tmp4;
}
export { RoleItem };
