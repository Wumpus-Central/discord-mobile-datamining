// === Module 11805: AppLauncherRoleListActionSheet ===

// Module 11805 (AppLauncherRoleListActionSheet)
import c from "c" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import fuzzysearchDefault from "fuzzysearch" /* 5702 */;
import GuildRoleMemberActionCreatorsAll from "GuildRoleMemberActionCreators" /* 6624 */;
import ShieldUserIcon from "ShieldUserIcon" /* 9232 */;
import AppLauncherOptionIconDefault from "AppLauncherOptionIcon" /* 11806 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import GuildRoleMemberCountStore from "GuildRoleMemberCountStore" /* 6623 */;
import GuildRoleStore from "GuildRoleStore" /* 2106 */;

const require = globalThis.__r;

require = fn;
let closure_4 = ["guildRole", "guildId"];
const isEveryoneRole = fn(2107).isEveryoneRole;
const DEFAULT_ROLE_COLOR_HEX = fn(1085).DEFAULT_ROLE_COLOR_HEX;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const AppLauncherRoleListActionSheet = "AppLauncherRoleListActionSheet";
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((role) => {
  const cResult = c.c(10);
  role = role.role;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = {};
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  if (null == role) {
    let str = "interactive-text-default";
    if (null != role) {
      str = "white";
    }
    if (cResult[5] !== str) {
      const obj3 = { size: "sm", color: str };
      const tmp12 = __initData(ShieldUserIcon.ShieldUserIcon, obj3);
      cResult[5] = str;
      cResult[6] = tmp12;
      let tmp10 = tmp12;
    } else {
      tmp10 = cResult[6];
    }
    if (cResult[7] === first) {
      if (cResult[8] === tmp10) {
        let tmp13 = cResult[9];
      }
      return tmp13;
    }
    const obj4 = { icon: tmp10, wrapperStyle: first };
    const tmp16 = __initData(AppLauncherOptionIconDefault, obj4);
    cResult[7] = first;
    cResult[8] = tmp10;
    cResult[9] = tmp16;
    tmp13 = tmp16;
  } else if (cResult[1] !== role) {
    const tmp6 = null != role.colorString ? role.colorString : DEFAULT_ROLE_COLOR_HEX;
    cResult[1] = role;
    cResult[2] = tmp6;
  } else if (cResult[3] !== cResult[2]) {
    const obj5 = { backgroundColor: tmp5 };
    cResult[3] = tmp5;
    cResult[4] = obj5;
  }
}) : ((role) => {
  role = role.role;
  if (null == role) {
    let str = "interactive-text-default";
    if (null != role) {
      str = "white";
    }
    const obj2 = { icon: null, wrapperStyle: null };
    const obj3 = { size: "sm", color: str };
    obj2.icon = __initData(ShieldUserIcon.ShieldUserIcon, obj3);
    obj2.wrapperStyle = tmp;
    return __initData(AppLauncherOptionIconDefault, obj2);
  } else {
    const obj = { backgroundColor: null != role.colorString ? role.colorString : DEFAULT_ROLE_COLOR_HEX };
  }
});
let closure_15 = tmp3;
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildRole) => {
  const cResult = require("c").c(26);
  if (cResult[0] !== guildRole) {
    guildRole = guildRole.guildRole;
    importDefault = guildRole;
    const guildId = guildRole.guildId;
    _require = guildId;
    cResult[0] = guildRole;
    cResult[1] = guildId;
    cResult[2] = guildRole;
    class L {
      constructor() {
        roleMemberCount = closure_8.getRoleMemberCount(closure_0);
        tmp2 = undefined;
        if (roleMemberCount != null) {
          tmp3 = closure_1;
          tmp2 = roleMemberCount[closure_1.id];
        }
        return tmp2;
      }
    }
    let tmp6 = _objectWithoutProperties(guildRole, closure_4);
    const tmp9 = _objectWithoutProperties(guildRole, closure_4);
  } else {
    _require = cResult[1];
    importDefault = cResult[2];
    tmp6 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildRoleMemberCountStore];
    cResult[4] = items;
    let tmp10 = items;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === tmp4) {
    if (cResult[6] === tmp5.id) {
      let tmp12 = cResult[7];
    }
    const stateFromStores = tmp(504).useStateFromStores(tmp10, tmp12);
    if (cResult[8] !== tmp5) {
      const tmp16 = isEveryoneRole(tmp5);
      cResult[8] = tmp5;
      cResult[9] = tmp16;
      let tmp14 = tmp16;
    } else {
      tmp14 = cResult[9];
    }
    if (cResult[10] !== tmp4) {
      const fn = function b() {
        const memberCounts = GuildRoleMemberActionCreatorsAll.fetchMemberCounts(closure_0);
      };
      const items1 = [tmp4];
      cResult[10] = tmp4;
      cResult[11] = fn;
      cResult[12] = items1;
      let tmp18 = items1;
      let tmp17 = fn;
    } else {
      tmp17 = cResult[11];
      tmp18 = cResult[12];
    }
    const effect = noop.useEffect(tmp17, tmp18);
    if (cResult[13] !== tmp5.name) {
      const obj2 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp5.name };
      const tmp23 = closure_12(tmp(4886).Text, obj2);
      cResult[13] = tmp5.name;
      cResult[14] = tmp23;
      let tmp21 = tmp23;
    } else {
      tmp21 = cResult[14];
    }
    if (cResult[15] !== tmp5) {
      const obj3 = { role: tmp5 };
      const tmp27 = closure_12(closure_15, obj3);
      cResult[15] = tmp5;
      cResult[16] = tmp27;
      let tmp24 = tmp27;
    } else {
      tmp24 = cResult[16];
    }
    if (cResult[17] === tmp14) {
      if (cResult[18] === stateFromStores) {
        let tmp28 = cResult[19];
      }
      if (cResult[20] === tmp5.id) {
        if (cResult[21] === tmp6) {
          if (cResult[22] === tmp21) {
            if (cResult[23] === tmp24) {
              if (cResult[24] === tmp28) {
                let tmp33 = cResult[25];
              }
              return tmp33;
            }
          }
        }
      }
      const obj4 = { label: tmp21, icon: tmp24, trailing: tmp28 };
      const merged = Object.assign(tmp6);
      const tmp38 = closure_12(tmp(5993).TableRow, obj4, tmp5.id);
      cResult[20] = tmp5.id;
      class L {
        constructor() {
          roleMemberCount = closure_8.getRoleMemberCount(closure_0);
          tmp2 = undefined;
          if (roleMemberCount != null) {
            tmp3 = closure_1;
            tmp2 = roleMemberCount[closure_1.id];
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
        const obj5 = { variant: "text-sm/normal", color: "text-muted", children: null };
        const items2 = [closure_12(tmp(5873).GroupIcon, { size: "xxs", color: "text-muted" }), " ", stateFromStores];
        obj5.children = items2;
        tmp30 = closure_13(tmp(4886).Text, obj5);
      }
    }
    class L {
      constructor() {
        roleMemberCount = closure_8.getRoleMemberCount(closure_0);
        tmp2 = undefined;
        if (roleMemberCount != null) {
          tmp3 = closure_1;
          tmp2 = roleMemberCount[closure_1.id];
        }
        return tmp2;
      }
    }
    cResult[18] = stateFromStores;
    cResult[19] = tmp30;
    tmp28 = tmp30;
    const tmpResult = tmp(504);
  }
  class L {
    constructor() {
      roleMemberCount = closure_8.getRoleMemberCount(closure_0);
      tmp2 = undefined;
      if (roleMemberCount != null) {
        tmp3 = closure_1;
        tmp2 = roleMemberCount[closure_1.id];
      }
      return tmp2;
    }
  }
  cResult[5] = tmp4;
  cResult[6] = tmp5.id;
  cResult[7] = L;
  tmp12 = L;
  const obj = require("c");
}) : ((guildRole) => {
  guildRole = guildRole.guildRole;
  const guildId = guildRole.guildId;
  const merged = Object.assign(guildRole, Object.assign({ guildRole: 0, guildId: 0 }));
  const items = [GuildRoleMemberCountStore];
  const stateFromStores = guildRole(504).useStateFromStores(items, () => {
    const roleMemberCount = GuildRoleMemberCountStore.getRoleMemberCount(guildId);
    let tmp2;
    if (roleMemberCount != null) {
      tmp2 = roleMemberCount[guildRole.id];
    }
    return tmp2;
  });
  const items1 = [guildId];
  const obj = guildRole(504);
  const effect = noop.useEffect(() => {
    const memberCounts = GuildRoleMemberActionCreatorsAll.fetchMemberCounts(guildId);
  }, items1);
  const obj2 = { label: closure_12(guildRole(4886).Text, { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: guildRole.name }), icon: closure_12(closure_15, { role: guildRole }), trailing: null };
  let tmp8 = null;
  if (!tmp5) {
    tmp8 = null;
    if (null != stateFromStores) {
      const obj4 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const items2 = [closure_12(tmp2(5873).GroupIcon, { size: "xxs", color: "text-muted" }), " ", stateFromStores];
      obj4.children = items2;
      tmp8 = closure_13(tmp2(4886).Text, obj4);
    }
  }
  obj2.trailing = tmp8;
  const merged1 = Object.assign(merged);
  return closure_12(guildRole(5993).TableRow, obj2, guildRole.id);
});
let closure_16 = tmp4;
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/options/role/AppLauncherRoleListActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((onRolePress) => {
  const cResult = onRolePress(first[9]).c(27);
  onRolePress = onRolePress.onRolePress;
  const onActionSheetDismiss = onRolePress.onActionSheetDismiss;
  const guild_id = onRolePress.channel.guild_id;
  let tmp4 = ref(noop.useState(""), 2);
  first = tmp4[0];
  closure_4 = tmp4[1];
  const obj = onRolePress(first[9]);
  let tmp = onRolePress;
  const tmp2 = first;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildRoleStore];
    cResult[0] = items;
    let first1 = items;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] !== guild_id) {
    const fn = function c() {
      return GuildRoleStore.getSortedRoles(guild_id);
    };
    cResult[1] = guild_id;
    cResult[2] = fn;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  ref = noop.useRef(null);
  const stateFromStores = tmp(tmp2[12]).useStateFromStores(first1, tmp9);
  if (cResult[3] === first) {
    if (cResult[4] === stateFromStores) {
      if (cResult[8] !== onActionSheetDismiss) {
        class O {
          constructor() {
            obj = closure_1(closure_3[18]);
            hideActionSheetResult = obj.hideActionSheet(AppLauncherRoleListActionSheet);
            tmp2 = onActionSheetDismiss();
            return;
          }
        }
        cResult[8] = onActionSheetDismiss;
        cResult[9] = O;
      } else {
        class O {
          constructor() {
            obj = closure_1(closure_3[18]);
            hideActionSheetResult = obj.hideActionSheet(AppLauncherRoleListActionSheet);
            tmp2 = onActionSheetDismiss();
            return;
          }
        }
      }
      noop = O;
      if (cResult[10] === O) {
        class O {
          constructor() {
            obj = closure_1(closure_3[18]);
            hideActionSheetResult = obj.hideActionSheet(AppLauncherRoleListActionSheet);
            tmp2 = onActionSheetDismiss();
            return;
          }
        }
        GuildRoleMemberCountStore = M;
        if (cResult[13] === guild_id) {
          class O {
            constructor() {
              obj = closure_1(closure_3[18]);
              hideActionSheetResult = obj.hideActionSheet(AppLauncherRoleListActionSheet);
              tmp2 = onActionSheetDismiss();
              return;
            }
          }
        }
        const fn2 = function z(item) {
          item = item.item;
          const index = item.index;
          return closure_1_12(closure_1_16, {
            guildId: guild_id,
            guildRole: item,
            onPress() {
              return closure_8({ role: item });
            },
            start: 0 === index,
            end: index === arr3.length - 1
          });
        };
        cResult[13] = guild_id;
        class M {
          constructor(arg0) {
            obj = { role: onRolePress.role };
            tmp = onRolePress(obj);
            tmp2 = closure_7();
            return;
          }
        }
        cResult[14] = M;
        cResult[15] = arr3.length;
        cResult[16] = fn2;
      }
      class M {
        constructor(arg0) {
          obj = { role: onRolePress.role };
          tmp = onRolePress(obj);
          tmp2 = closure_7();
          return;
        }
      }
      cResult[10] = O;
      cResult[11] = onRolePress;
      cResult[12] = M;
    }
  }
  if (cResult[6] !== first) {
    class O {
      constructor() {
        obj = closure_1(closure_3[18]);
        hideActionSheetResult = obj.hideActionSheet(AppLauncherRoleListActionSheet);
        tmp2 = onActionSheetDismiss();
        return;
      }
    }
    cResult[6] = first;
    cResult[7] = tmp11;
  } else {
    class O {
      constructor() {
        obj = closure_1(closure_3[18]);
        hideActionSheetResult = obj.hideActionSheet(AppLauncherRoleListActionSheet);
        tmp2 = onActionSheetDismiss();
        return;
      }
    }
  }
  const found = stateFromStores.filter(tmp11);
  cResult[3] = first;
  cResult[4] = stateFromStores;
  cResult[5] = found;
  const tmpResult = tmp(tmp2[12]);
}) : ((channel) => {
  ({ onRolePress: require, onActionSheetDismiss } = channel);
  let ref;
  let memo;
  const guild_id = channel.channel.guild_id;
  let tmp = ref(memo.useState(""), 2);
  const first = tmp[0];
  closure_4 = tmp[1];
  ref = memo.useRef(null);
  const items = [GuildRoleStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildRoleStore.getSortedRoles(guild_id));
  const items1 = [stateFromStores, first];
  memo = memo.useMemo(() => stateFromStores.filter((id) => {
    let tmp = closure_1_3 === id.id;
    if (!tmp) {
      const trimmed = closure_1_3.trim();
      tmp = onActionSheetDismiss(first[17])(trimmed, id.name.toLowerCase());
      const tmp4 = onActionSheetDismiss(first[17]);
    }
    return tmp;
  }), items1);
  const obj2 = { option: channel.option, onDismiss: onActionSheetDismiss, children: null };
  const items2 = [
    closure_12(require("AppLauncherList").AppLauncherListSearchBar, {
      onChange(str) {
        closure_4(str.toLowerCase());
        const current = ref.current;
        if (current != null) {
          current.scrollToOffset({ offset: 0, animated: false });
        }
      }
    }),

  ];
  if (0 === memo.length) {
    let tmp8Result = closure_12(require("AppLauncherList").AppLauncherListEmptyState, {});
  } else {
    const obj4 = {
      ref,
      data: memo,
      renderItem(item) {
          item = item.item;
          const index = item.index;
          return closure_1_12(closure_1_16, {
            guildId: guild_id,
            guildRole: item,
            onPress() {
              _require({ role: item });
              closure_1_1(first[18]).hideActionSheet(closure_1_14);
              onActionSheetDismiss();
            },
            start: 0 === index,
            end: index === memo.length - 1
          });
        }
    };
    tmp8Result = closure_12(require("AppLauncherList").AppLauncherList, obj4);
  }
  items2[1] = tmp8Result;
  obj2.children = items2;
  return closure_13(require("AppLauncherCommandOptionActionSheet").AppLauncherCommandOptionActionSheet, obj2);
});
export const APP_LAUNCHER_ROLE_LIST_ACTION_SHEET_KEY = "AppLauncherRoleListActionSheet";
export const RoleIcon = tmp3;
export const RoleRow = tmp4;