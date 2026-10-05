// === Module 11805: AppLauncherRoleListActionSheet ===

// Module 11805 (AppLauncherRoleListActionSheet)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import GuildRoleRecord from "GuildRoleRecord" /* 2107 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import fuzzysearchDefault from "fuzzysearch" /* 5702 */;
import GuildRoleMemberActionCreatorsAll from "GuildRoleMemberActionCreators" /* 6624 */;
import ShieldUserIcon2 from "ShieldUserIcon" /* 9232 */;
import AppLauncherOptionIconDefault from "AppLauncherOptionIcon" /* 11806 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import GuildRoleMemberCountStore_mod from "GuildRoleMemberCountStore" /* 6623 */;
import GuildRoleStore from "GuildRoleStore" /* 2106 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, guildRole, importDefault, onRolePress;

let closure_12;
let map1;
let closure_4 = ["guildRole", "guildId"];
let GuildRoleMemberCountStore = GuildRoleMemberCountStore_mod;
const isEveryoneRole = GuildRoleRecord.isEveryoneRole;
const DEFAULT_ROLE_COLOR_HEX = Constants.DEFAULT_ROLE_COLOR_HEX;
({ jsx: closure_12, jsxs: map1 } = Fragment);
const AppLauncherRoleListActionSheet = "AppLauncherRoleListActionSheet";
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((role) => {
  let first;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(10);
  role = role.role;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = {};
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  if (null != role) {
    let tmp5;
    let tmp7;
    if (cResult[1] !== role) {
      const tmp6 = null != role.colorString ? role.colorString : DEFAULT_ROLE_COLOR_HEX;
      cResult[1] = role;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    } else {
      tmp5 = cResult[2];
    }
    if (cResult[3] !== tmp5) {
      const obj3 = { backgroundColor: tmp5 };
      cResult[3] = tmp5;
      cResult[4] = obj3;
      tmp7 = obj3;
    } else {
      tmp7 = cResult[4];
    }
    first = tmp7;
  }
  let str = "interactive-text-default";
  if (null != role) {
    str = "white";
  }
  if (cResult[5] !== str) {
    const obj4 = { size: "sm", color: str };
    const tmp10 = closure_12(ShieldUserIcon2.ShieldUserIcon, obj4);
    cResult[5] = str;
    cResult[6] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[6];
  }
  if (cResult[7] === first) {
    let tmp11;
    if (cResult[8] === tmp8) {
      tmp11 = cResult[9];
    }
    return tmp11;
  }
  const tmp12 = closure_12(AppLauncherOptionIconDefault, { icon: tmp8, wrapperStyle: first });
  cResult[7] = first;
  cResult[8] = tmp8;
  cResult[9] = tmp12;
  tmp11 = tmp12;
}) : ((role) => {
  role = role.role;
  let str = "interactive-text-default";
  const tmp3 = AppLauncherOptionIconDefault;
  const ShieldUserIcon = ShieldUserIcon2.ShieldUserIcon;
  if (null != role) {
    str = "white";
  }
  const obj2 = { icon: closure_12(ShieldUserIcon, { size: "sm", color: str }), wrapperStyle: {} };
  return closure_12(tmp3, obj2);
});
let closure_15 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildRole) => {
  let closure_0;
  let id;
  let items2;
  let tmp10;
  let tmp6;
  let obj = require("react");
  const cResult = obj.c(26);
  if (cResult[0] !== guildRole) {
    guildRole = guildRole.guildRole;
    importDefault = guildRole;
    const guildId = guildRole.guildId;
    _require = guildId;
    cResult[0] = guildRole;
    cResult[1] = guildId;
    cResult[2] = guildRole;
    const tmp9 = _objectWithoutProperties(guildRole, closure_4);
    class L {
      constructor() {
        const roleMemberCount = GuildRoleMemberCountStore.getRoleMemberCount(closure_0);
        let tmp2;
        if (roleMemberCount != null) {
          tmp2 = roleMemberCount[id.id];
        }
        return tmp2;
      }
    }
    tmp6 = tmp9;
  } else {
    _require = cResult[1];
    importDefault = cResult[2];
    tmp6 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildRoleMemberCountStore];
    cResult[4] = items;
    tmp10 = items;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === tmp4) {
    let tmp12;
    let tmp14;
    let tmp18;
    let tmp17;
    let tmp21;
    let tmp24;
    if (cResult[6] === tmp5.id) {
      tmp12 = cResult[7];
    }
    const tmpResult = require("get initialized");
    const stateFromStores = tmpResult.useStateFromStores(tmp10, tmp12);
    if (cResult[8] !== tmp5) {
      const tmp16 = isEveryoneRole(tmp5);
      cResult[8] = tmp5;
      cResult[9] = tmp16;
      tmp14 = tmp16;
    } else {
      tmp14 = cResult[9];
    }
    if (cResult[10] !== tmp4) {
      const fn = function b() {
        const obj = GuildRoleMemberActionCreatorsAll;
        const memberCounts = obj.fetchMemberCounts(closure_0);
      };
      const items1 = [tmp4];
      cResult[10] = tmp4;
      cResult[11] = fn;
      cResult[12] = items1;
      tmp18 = items1;
      tmp17 = fn;
    } else {
      tmp17 = cResult[11];
      tmp18 = cResult[12];
    }
    const effect = react.useEffect(tmp17, tmp18);
    if (cResult[13] !== tmp5.name) {
      const obj2 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp5.name };
      const tmp23 = closure_12(require("Text/Text").Text, obj2);
      cResult[13] = tmp5.name;
      cResult[14] = tmp23;
      tmp21 = tmp23;
    } else {
      tmp21 = cResult[14];
    }
    if (cResult[15] !== tmp5) {
      const obj3 = { role: tmp5 };
      const tmp27 = closure_12(closure_15, obj3);
      cResult[15] = tmp5;
      cResult[16] = tmp27;
      tmp24 = tmp27;
    } else {
      tmp24 = cResult[16];
    }
    if (cResult[17] === tmp14) {
      let tmp28;
      if (cResult[18] === stateFromStores) {
        tmp28 = cResult[19];
      }
      if (cResult[20] === tmp5.id) {
        if (cResult[21] === tmp6) {
          if (cResult[22] === tmp21) {
            if (cResult[23] === tmp24) {
              let tmp33;
              if (cResult[24] === tmp28) {
                tmp33 = cResult[25];
              }
              return tmp33;
            }
          }
        }
      }
      const obj4 = { label: tmp21, icon: tmp24, trailing: tmp28 };
      const TableRow = tmp(5993).TableRow;
      const merged = Object.assign(tmp6);
      const tmp38 = closure_12(TableRow, obj4, tmp5.id);
      cResult[20] = tmp5.id;
      class L {
        constructor() {
          const roleMemberCount = GuildRoleMemberCountStore.getRoleMemberCount(closure_0);
          let tmp2;
          if (roleMemberCount != null) {
            tmp2 = roleMemberCount[id.id];
          }
          return tmp2;
        }
      }
      cResult[21] = tmp6;
      cResult[22] = tmp21;
      cResult[23] = tmp24;
      cResult[24] = tmp28;
      cResult[25] = tmp38;
      tmp33 = tmp38;
    }
    let tmp30 = null;
    if (!tmp14) {
      tmp30 = null;
      if (null != stateFromStores) {
        const obj5 = { variant: "text-sm/normal", color: "text-muted", children: items2 };
        const Text = tmp(4886).Text;
        items2 = [closure_12(require("GroupIcon").GroupIcon, { size: "xxs", color: "text-muted" }), " ", stateFromStores];
        tmp30 = closure_13(Text, obj5);
      }
    }
    class L {
      constructor() {
        const roleMemberCount = GuildRoleMemberCountStore.getRoleMemberCount(closure_0);
        let tmp2;
        if (roleMemberCount != null) {
          tmp2 = roleMemberCount[id.id];
        }
        return tmp2;
      }
    }
    cResult[18] = stateFromStores;
    cResult[19] = tmp30;
    tmp28 = tmp30;
  }
  class L {
    constructor() {
      const roleMemberCount = GuildRoleMemberCountStore.getRoleMemberCount(closure_0);
      let tmp2;
      if (roleMemberCount != null) {
        tmp2 = roleMemberCount[id.id];
      }
      return tmp2;
    }
  }
  cResult[5] = tmp4;
  cResult[6] = tmp5.id;
  cResult[7] = L;
  tmp12 = L;
}) : ((guildRole) => {
  let items2;
  let obj3;
  let tmp8;
  guildRole = guildRole.guildRole;
  const guildId = guildRole.guildId;
  const merged = Object.assign(guildRole, Object.assign({ guildRole: 0, guildId: 0 }));
  let tmp2 = guildRole;
  let obj = guildRole(504);
  const items = [GuildRoleMemberCountStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const roleMemberCount = GuildRoleMemberCountStore.getRoleMemberCount(guildId);
    let tmp2;
    if (roleMemberCount != null) {
      tmp2 = roleMemberCount[guildRole.id];
    }
    return tmp2;
  });
  const items1 = [guildId];
  const tmp5 = isEveryoneRole(guildRole);
  const effect = react.useEffect(() => {
    const obj = GuildRoleMemberActionCreatorsAll;
    const memberCounts = obj.fetchMemberCounts(guildId);
  }, items1);
  const obj2 = { label: closure_12(guildRole(4886).Text, obj3), icon: closure_12(closure_15, { role: guildRole }), trailing: tmp8 };
  const TableRow = guildRole(5993).TableRow;
  tmp8 = null;
  obj3 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: guildRole.name };
  if (!tmp5) {
    tmp8 = null;
    if (null != stateFromStores) {
      const obj4 = { variant: "text-sm/normal", color: "text-muted", children: items2 };
      const Text = tmp2(4886).Text;
      items2 = [closure_12(tmp2(5873).GroupIcon, { size: "xxs", color: "text-muted" }), " ", stateFromStores];
      tmp8 = closure_13(Text, obj4);
    }
  }
  const merged1 = Object.assign(merged);
  return closure_12(TableRow, obj2, guildRole.id);
});
let closure_16 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((onRolePress) => {
  let closure_8;
  let first;
  let first1;
  let ref;
  let tmp9;
  let tmp = onRolePress;
  let obj = onRolePress(first[9]);
  const cResult = obj.c(27);
  onRolePress = onRolePress.onRolePress;
  const onActionSheetDismiss = onRolePress.onActionSheetDismiss;
  const guild_id = onRolePress.channel.guild_id;
  let tmp4 = ref(O.useState(""), 2);
  const tmp2 = first;
  first = tmp4[0];
  closure_4 = tmp4[1];
  ref = O.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildRoleStore];
    cResult[0] = items;
    first1 = items;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] !== guild_id) {
    const fn = function c() {
      return GuildRoleStore.getSortedRoles(guild_id);
    };
    cResult[1] = guild_id;
    cResult[2] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  const tmpResult = tmp(tmp2[12]);
  const stateFromStores = tmpResult.useStateFromStores(first1, tmp9);
  if (cResult[3] === first) {
    let arr3;
    if (cResult[4] === stateFromStores) {
      arr3 = cResult[5];
    }
    if (cResult[8] !== onActionSheetDismiss) {
      class O {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(AppLauncherRoleListActionSheet);
          onActionSheetDismiss();
        }
      }
      cResult[8] = onActionSheetDismiss;
      cResult[9] = O;
    } else {
      class O {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(AppLauncherRoleListActionSheet);
          onActionSheetDismiss();
        }
      }
    }
    O = tmp13;
    if (cResult[10] === tmp13) {
      class O {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(AppLauncherRoleListActionSheet);
          onActionSheetDismiss();
        }
      }
      GuildRoleMemberCountStore = M;
      if (cResult[13] === guild_id) {
        class O {
          constructor() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(AppLauncherRoleListActionSheet);
            onActionSheetDismiss();
          }
        }
      }
      const fn2 = function z(item) {
        item = item.item;
        const index = item.index;
        let obj = {
          guildId: guild_id,
          guildRole: item,
          onPress() {
            const obj = { role: item };
            return GuildRoleMemberCountStore(obj);
          },
          start: 0 === index,
          end: index === arr3.length - 1
        };
        return closure_1_12(closure_1_16, obj);
      };
      cResult[13] = guild_id;
      class M {
        constructor(role) {
          const obj = { role: role.role };
          onRolePress(obj);
          O();
        }
      }
      cResult[14] = M;
      cResult[15] = arr3.length;
      cResult[16] = fn2;
    }
    class M {
      constructor(role) {
        const obj = { role: role.role };
        onRolePress(obj);
        O();
      }
    }
    cResult[10] = tmp13;
    cResult[11] = onRolePress;
    cResult[12] = M;
  }
  if (cResult[6] !== first) {
    class O {
      constructor() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(AppLauncherRoleListActionSheet);
        onActionSheetDismiss();
      }
    }
    cResult[6] = first;
    cResult[7] = tmp11;
  } else {
    class O {
      constructor() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(AppLauncherRoleListActionSheet);
        onActionSheetDismiss();
      }
    }
  }
  const found = stateFromStores.filter(tmp11);
  cResult[3] = first;
  cResult[4] = stateFromStores;
  cResult[5] = found;
  arr3 = found;
}) : ((channel) => {
  let items2;
  let onActionSheetDismiss;
  let require;
  let tmp8Result;
  ({ onRolePress: require, onActionSheetDismiss } = channel);
  let ref;
  let memo;
  const guild_id = channel.channel.guild_id;
  const option = channel.option;
  let tmp = ref(memo.useState(""), 2);
  const first = tmp[0];
  closure_4 = tmp[1];
  ref = memo.useRef(null);
  let obj = require("get initialized");
  const items = [GuildRoleStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildRoleStore.getSortedRoles(guild_id));
  const items1 = [stateFromStores, first];
  memo = memo.useMemo(() => stateFromStores.filter((id) => {
    let tmp = closure_1_3 === id.id;
    if (!tmp) {
      const str2 = id.name;
      const tmp4 = onActionSheetDismiss(first[17]);
      const trimmed = closure_1_3.trim();
      tmp = tmp4(trimmed, str2.toLowerCase());
    }
    return tmp;
  }), items1);
  let obj2 = { option, onDismiss: onActionSheetDismiss, children: items2 };
  const length = memo.length;
  const AppLauncherCommandOptionActionSheet = require("AppLauncherCommandOptionActionSheet").AppLauncherCommandOptionActionSheet;
  items2 = [, ];
  const obj3 = {
    onChange(str) {
      closure_4(str.toLowerCase());
      const current = ref.current;
      if (current != null) {
        current.scrollToOffset({ offset: 0, animated: false });
      }
    }
  };
  items2[0] = closure_12(require("AppLauncherList").AppLauncherListSearchBar, obj3);
  if (0 === length) {
    tmp8Result = closure_12(require("AppLauncherList").AppLauncherListEmptyState, {});
  } else {
    const obj4 = {
      ref,
      data: memo,
      renderItem(item) {
          item = item.item;
          const index = item.index;
          let obj = {
            guildId: guild_id,
            guildRole: item,
            onPress() {
              const obj = { role: item };
              _require(obj);
              const obj2 = closure_1_1(first[18]);
              obj2.hideActionSheet(closure_1_14);
              onActionSheetDismiss();
            },
            start: 0 === index,
            end: index === memo.length - 1
          };
          return closure_1_12(closure_1_16, obj);
        }
    };
    tmp8Result = closure_12(require("AppLauncherList").AppLauncherList, obj4);
  }
  items2[1] = tmp8Result;
  return closure_13(AppLauncherCommandOptionActionSheet, obj2);
});
const result = size.fileFinishedImporting("modules/app_launcher/native/options/role/AppLauncherRoleListActionSheet.tsx");

export default tmp5;
export const APP_LAUNCHER_ROLE_LIST_ACTION_SHEET_KEY = "AppLauncherRoleListActionSheet";
export const RoleIcon = tmp3;
export const RoleRow = tmp4;