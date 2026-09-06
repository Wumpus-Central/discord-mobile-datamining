// discord_app/modules/app_launcher/native/options/role/AppLauncherRoleListActionSheet.tsx
import GuildRoleMemberActionCreatorsAll from "../../../../guild_settings/GuildRoleMemberActionCreators.tsx";
import ShieldUserIcon from "../../../../../design/components/Icon/native/redesign/generated/ShieldUserIcon.tsx";
import AppLauncherOptionIconDefault from "../../base_components/AppLauncherOptionIcon.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import GuildRoleMemberCountStore from "../../../../guild_settings/GuildRoleMemberCountStore.tsx";
import GuildRoleStore from "../../../../../stores/GuildRoleStore.tsx";

require = fn;
class RoleIcon {
  constructor(arg0) {
    role = global.role;
    if (null == role) {
      tmp3 = jsx;
      tmp4 = closure_1;
      tmp5 = closure_3;
      tmp7 = closure_0;
      tmp6 = closure_1(closure_3[7]);
      str = "interactive-text-default";
      if (null != role) {
        str = "white";
      }
      obj = { icon: null, wrapperStyle: null };
      obj1 = { size: "sm", color: null };
      obj1.color = str;
      obj.icon = tmp3(closure_0(closure_3[8]).ShieldUserIcon, obj1);
      obj.wrapperStyle = tmp;
      return tmp3(tmp6, obj);
    } else {
      obj = { backgroundColor: null };
      obj.backgroundColor = null != role.colorString ? role.colorString : DEFAULT_ROLE_COLOR_HEX;
      tmp2 = obj;
    }
    return;
  }
}
class RoleRow {
  constructor(arg0) {
    guildRole = global.guildRole;
    guildId = global.guildId;
    merged = Object.assign(global, Object.assign({ guildRole: 0, guildId: 0 }));
    tmp2 = guildRole;
    tmp3 = closure_3;
    obj = guildRole(closure_3[9]);
    items = [];
    items[0] = closure_6;
    stateFromStores = obj.useStateFromStores(items, () => {
      const roleMemberCount = GuildRoleMemberCountStore.getRoleMemberCount(guildId);
      let tmp2;
      if (roleMemberCount != null) {
        tmp2 = roleMemberCount[guildRole.id];
      }
      return tmp2;
    });
    items1 = [];
    items1[0] = guildId;
    tmp5 = isEveryoneRole(guildRole);
    effect = closure_5.useEffect(() => {
      const memberCounts = GuildRoleMemberActionCreatorsAll.fetchMemberCounts(guildId);
    }, items1);
    tmp7 = jsx;
    obj = { label: null, icon: jsx(RoleIcon, { role: guildRole }), trailing: null };
    obj1 = {
      lineClamp: 1,
      variant: "text-md/semibold",
      color: "mobile-text-heading-primary",
      children: guildRole.name,
    };
    obj.label = jsx(guildRole(closure_3[12]).Text, obj1);
    tmp8 = null;
    if (!tmp5) {
      tmp8 = null;
      if (null != stateFromStores) {
        tmp9 = jsxs;
        obj2 = { variant: "text-sm/normal", color: "text-muted", children: null };
        items2 = [, ,];
        items2[0] = tmp7(tmp2(tmp3[13]).GroupIcon, { size: "xxs", color: "text-muted" });
        str = " ";
        items2[1] = " ";
        items2[2] = stateFromStores;
        obj2.children = items2;
        tmp8 = jsxs(tmp2(tmp3[12]).Text, obj2);
      }
    }
    obj.trailing = tmp8;
    merged1 = Object.assign(merged);
    return tmp7(guildRole(closure_3[11]).TableRow, obj, guildRole.id);
  }
}
const isEveryoneRole = fn(2016).isEveryoneRole;
const DEFAULT_ROLE_COLOR_HEX = fn(1074).DEFAULT_ROLE_COLOR_HEX;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const AppLauncherRoleListActionSheet = "AppLauncherRoleListActionSheet";
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/options/role/AppLauncherRoleListActionSheet.tsx",
);

export default function AppLauncherRoleListActionSheet(channel) {
  ({ onRolePress: require, onActionSheetDismiss } = channel);
  _slicedToArray = undefined;
  let ref;
  const guild_id = channel.channel.guild_id;
  let tmp = _slicedToArray(ref.useState(""), 2);
  const first = tmp[0];
  _slicedToArray = tmp[1];
  ref = ref.useRef(null);
  let obj = require("initialize");
  const items = [GuildRoleStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildRoleStore.getSortedRoles(guild_id));
  const items1 = [stateFromStores, first];
  const memo = ref.useMemo(
    () =>
      stateFromStores.filter((id) => {
        let tmp = closure_1_3 === id.id;
        if (!tmp) {
          const trimmed = closure_1_3.trim();
          tmp = onActionSheetDismiss(first[14])(trimmed, id.name.toLowerCase());
          const tmp4 = onActionSheetDismiss(first[14]);
        }
        return tmp;
      }),
    items1,
  );
  obj = { option: channel.option, onDismiss: onActionSheetDismiss, children: null };
  obj = {
    onChange(str) {
      closure_4(str.toLowerCase());
      const current = ref.current;
      if (current != null) {
        current.scrollToOffset({ offset: 0, animated: false });
      }
    },
  };
  const items2 = [closure_10(require("AppLauncherList").AppLauncherListSearchBar, obj)];
  if (0 === memo.length) {
    let tmp8Result = closure_10(require("AppLauncherList").AppLauncherListEmptyState, {});
  } else {
    const obj1 = {
      ref,
      data: memo,
      renderItem(item) {
        item = item.item;
        const index = item.index;
        return closure_1_10(RoleRow, {
          guildId: guild_id,
          guildRole: item,
          onPress() {
            require({ role: item });
            closure_1_1(first[15]).hideActionSheet(closure_1_12);
            onActionSheetDismiss();
          },
          start: 0 === index,
          end: index === memo.length - 1,
        });
      },
    };
    tmp8Result = closure_10(require("AppLauncherList").AppLauncherList, obj1);
  }
  items2[1] = tmp8Result;
  obj.children = items2;
  return closure_11(require("AppLauncherCommandOptionActionSheet").AppLauncherCommandOptionActionSheet, obj);
}
export const APP_LAUNCHER_ROLE_LIST_ACTION_SHEET_KEY = "AppLauncherRoleListActionSheet";
export { RoleIcon };
export { RoleRow };
