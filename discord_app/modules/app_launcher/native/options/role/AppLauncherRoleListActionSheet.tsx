// === Module 11980: RoleIcon ===

// Module 11980 (RoleIcon)
import ShieldUserIcon from "ShieldUserIcon" /* 9739 */;
import stylesDefault from "styles" /* 11978 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import closure_6 from "getRoleMemberCount" /* 5592 */;
import { isEveryoneRole } from "GuildRoleRecordTypeTag" /* 1985 */;
import closure_8 from "createGuildRoleRecordFromRust" /* 1984 */;
import { DEFAULT_ROLE_COLOR_HEX } from "ME" /* 673 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
class RoleIcon {
  constructor(arg0) {
    role = global.role;
    if (null == role) {
      tmp3 = jsx;
      tmp4 = closure_1;
      tmp5 = closure_3;
      tmp7 = closure_0;
      tmp6 = require("styles");
      str = "interactive-text-default";
      if (null != role) {
        str = "white";
      }
      obj = { icon: null, wrapperStyle: null };
      obj1 = { size: "sm", color: null };
      obj1[1] = str;
      obj[0] = tmp3(require("ShieldUserIcon").ShieldUserIcon, obj1);
      obj[1] = tmp;
      return tmp3(tmp6, obj);
    } else {
      obj = { backgroundColor: null };
      obj[0] = null != role.colorString ? role.colorString : DEFAULT_ROLE_COLOR_HEX;
      tmp2 = obj;
    }
    return;
  }
}
class RoleRow {
  constructor(arg0) {
    guildRole = global.guildRole;
    guildId = global.guildId;
    merged = Object.assign(global, Object.create(null));
    tmp2 = guildRole;
    tmp3 = closure_3;
    obj = require("initialize");
    items = [];
    items[0] = closure_6;
    stateFromStores = obj.useStateFromStores(items, () => {
      const roleMemberCount = closure_1_6.getRoleMemberCount(guildId);
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
      const memberCounts = closure_1_2(closure_1_3[10]).fetchMemberCounts(guildId);
    }, items1);
    tmp7 = jsx;
    obj = { label: jsx(require("Text").Text, obj1), icon: jsx(RoleIcon, { role: guildRole }), trailing: null };
    obj1 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: guildRole.name };
    tmp8 = null;
    if (!tmp5) {
      tmp8 = null;
      if (null != stateFromStores) {
        tmp9 = jsxs;
        obj2 = { variant: "text-sm/normal", color: "text-muted", children: null };
        items2 = [, , ];
        items2[0] = tmp7(require("GroupIcon").GroupIcon, { size: "xxs", color: "text-muted" });
        str = " ";
        items2[1] = " ";
        items2[2] = stateFromStores;
        obj2[2] = items2;
        tmp8 = jsxs(require("Text").Text, obj2);
      }
    }
    obj[2] = tmp8;
    merged1 = Object.assign(merged);
    return tmp7(require("TableRowInner").TableRow, obj, guildRole.id);
  }
}
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
const AppLauncherRoleListActionSheet = "AppLauncherRoleListActionSheet";
const result = require("set").fileFinishedImporting("modules/app_launcher/native/options/role/AppLauncherRoleListActionSheet.tsx");

export default function AppLauncherRoleListActionSheet(channel) {
  ({ onRolePress: require, onActionSheetDismiss } = channel);
  let guild_id;
  let first;
  let callback;
  let ref;
  let stateFromStores;
  let memo;
  guild_id = channel.channel.guild_id;
  let tmp = callback(ref.useState(""), 2);
  first = tmp[0];
  callback = tmp[1];
  ref = ref.useRef(null);
  let obj = require(first[9]);
  const items = [closure_8];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_8.getSortedRoles(guild_id));
  const items1 = [stateFromStores, first];
  memo = ref.useMemo(() => stateFromStores.filter((id) => {
    let tmp = closure_3 === id.id;
    if (!tmp) {
      const trimmed = closure_3.trim();
      tmp = closure_1_1(closure_1_3[14])(trimmed, id.name.toLowerCase());
      const str2 = id.name;
      const tmp4 = closure_1_1(closure_1_3[14]);
    }
    return tmp;
  }), items1);
  obj = { option: channel.option, onDismiss: onActionSheetDismiss, children: null };
  obj = {
    onChange(str) {
      callback(str.toLowerCase());
      const current = ref.current;
      if (current != null) {
        current.scrollToOffset({ offset: 0, animated: false });
      }
    }
  };
  const items2 = [callback2(require(first[17]).AppLauncherListSearchBar, obj), ];
  if (0 === memo.length) {
    let tmp8Result = tmp8(tmp4(tmp5[17]).AppLauncherListEmptyState, {});
  } else {
    obj1 = { ref: null, data: null, renderItem: null };
    obj1[0] = ref;
    obj1[1] = memo;
    obj1[2] = function renderItem(item) {
      item = item.item;
      const index = item.index;
      return closure_1_10(closure_1_14, {
        guildId: guild_id,
        guildRole: item,
        onPress() {
          item({ role: item });
          closure_1_1(closure_1_3[15]).hideActionSheet(closure_1_12);
          closure_1_1();
        },
        start: 0 === index,
        end: index === memo.length - 1
      });
    };
    tmp8Result = tmp8(tmp4(tmp5[17]).AppLauncherList, obj1);
  }
  items2[1] = tmp8Result;
  obj[2] = items2;
  return closure_11(require(first[16]).AppLauncherCommandOptionActionSheet, obj);
};
export const APP_LAUNCHER_ROLE_LIST_ACTION_SHEET_KEY = "AppLauncherRoleListActionSheet";
export { RoleIcon };
export { RoleRow };