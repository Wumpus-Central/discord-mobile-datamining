// discord_app/modules/app_launcher/native/options/role/AppLauncherRoleListActionSheet.tsx
import c from "../../../../../../_runtime/00576_c.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import fuzzysearchDefault from "../../../../../../_runtime/06101_fuzzysearch.js";
import GuildRoleMemberActionCreatorsAll from "../../../../guild_settings/GuildRoleMemberActionCreators.tsx";
import ShieldUserIcon from "../../../../../design/components/Icon/native/redesign/generated/ShieldUserIcon.tsx";
import AppLauncherOptionIconDefault from "../../base_components/AppLauncherOptionIcon.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import _objectWithoutProperties from "../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import GuildRoleMemberCountStore from "../../../../guild_settings/GuildRoleMemberCountStore.tsx";
import GuildRoleStore from "../../../../../stores/GuildRoleStore.tsx";

const require = globalThis.__r;

require = fn;
let closure_4 = ["guildRole", "guildId"];
const isEveryoneRole = fn(2119).isEveryoneRole;
const DEFAULT_ROLE_COLOR_HEX = fn(1085).DEFAULT_ROLE_COLOR_HEX;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const AppLauncherRoleListActionSheet = "AppLauncherRoleListActionSheet";
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function RoleIcon(role) {
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
}) : (function RoleIcon(role) {
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
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function RoleRow(guildRole) {
  const cResult = require("c").c(26);
  if (cResult[0] !== guildRole) {
    guildRole = guildRole.guildRole;
    let id = guildRole;
    const guildId = guildRole.guildId;
    _require = guildId;
    const tmp9 = _objectWithoutProperties(guildRole, closure_4);
    cResult[0] = guildRole;
    cResult[1] = guildId;
    cResult[2] = guildRole;
    cResult[3] = tmp9;
    let tmp6 = tmp9;
  } else {
    _require = cResult[1];
    id = cResult[2];
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
      class C {
        constructor() {
          obj = closure_2(closure_3[13]);
          memberCounts = obj.fetchMemberCounts(closure_0);
          return;
        }
      }
      const items1 = [tmp4];
      cResult[10] = tmp4;
      cResult[11] = C;
      cResult[12] = items1;
      let tmp18 = items1;
    } else {
      class C {
        constructor() {
          obj = closure_2(closure_3[13]);
          memberCounts = obj.fetchMemberCounts(closure_0);
          return;
        }
      }
      tmp18 = cResult[12];
    }
    const effect = noop.useEffect(C, tmp18);
    if (cResult[13] !== tmp5.name) {
      class C {
        constructor() {
          obj = closure_2(closure_3[13]);
          memberCounts = obj.fetchMemberCounts(closure_0);
          return;
        }
      }
      const obj2 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp5.name };
      const tmp22 = closure_12(tmp(5087).Text, obj2);
      cResult[13] = tmp5.name;
      cResult[14] = tmp22;
    } else {
      class C {
        constructor() {
          obj = closure_2(closure_3[13]);
          memberCounts = obj.fetchMemberCounts(closure_0);
          return;
        }
      }
    }
    if (cResult[15] !== tmp5) {
      class C {
        constructor() {
          obj = closure_2(closure_3[13]);
          memberCounts = obj.fetchMemberCounts(closure_0);
          return;
        }
      }
      const obj3 = { role: tmp5 };
      const tmp25 = closure_12(closure_15, obj3);
      cResult[15] = tmp5;
      cResult[16] = tmp25;
    } else {
      class C {
        constructor() {
          obj = closure_2(closure_3[13]);
          memberCounts = obj.fetchMemberCounts(closure_0);
          return;
        }
      }
    }
    if (cResult[17] === tmp14) {
      class C {
        constructor() {
          obj = closure_2(closure_3[13]);
          memberCounts = obj.fetchMemberCounts(closure_0);
          return;
        }
      }
      if (cResult[20] === tmp5.id) {
        class C {
          constructor() {
            obj = closure_2(closure_3[13]);
            memberCounts = obj.fetchMemberCounts(closure_0);
            return;
          }
        }
      }
      const obj4 = { label: tmp21, icon: tmp23, trailing: tmp26 };
      const merged = Object.assign(tmp6);
      const tmp35 = closure_12(tmp(6186).TableRow, obj4, tmp5.id);
      cResult[20] = tmp5.id;
      cResult[21] = tmp6;
      cResult[22] = tmp21;
      cResult[23] = tmp23;
      cResult[24] = tmp26;
      cResult[25] = tmp35;
    }
    let tmp28 = null;
    if (!tmp14) {
      class C {
        constructor() {
          obj = closure_2(closure_3[13]);
          memberCounts = obj.fetchMemberCounts(closure_0);
          return;
        }
      }
      if (null != stateFromStores) {
        class C {
          constructor() {
            obj = closure_2(closure_3[13]);
            memberCounts = obj.fetchMemberCounts(closure_0);
            return;
          }
        }
        const obj5 = { variant: "text-sm/normal", color: "text-muted", children: null };
        const items2 = [closure_12(tmp(8200).GroupIcon, { size: "xxs", color: "text-muted" }), " ", stateFromStores];
        obj5.children = items2;
        tmp28 = closure_13(tmp(5087).Text, obj5);
      }
    }
    cResult[17] = tmp14;
    cResult[18] = stateFromStores;
    cResult[19] = tmp28;
    const tmpResult = tmp(504);
  }
  const fn = function v() {
    const roleMemberCount = GuildRoleMemberCountStore.getRoleMemberCount(closure_0);
    let tmp2;
    if (roleMemberCount != null) {
      tmp2 = roleMemberCount[id.id];
    }
    return tmp2;
  };
  cResult[5] = tmp4;
  cResult[6] = tmp5.id;
  cResult[7] = fn;
  tmp12 = fn;
  const obj = require("c");
}) : (function RoleRow(guildRole) {
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
  const obj2 = { label: closure_12(guildRole(5087).Text, { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: guildRole.name }), icon: closure_12(closure_15, { role: guildRole }), trailing: null };
  let tmp8 = null;
  if (!tmp5) {
    tmp8 = null;
    if (null != stateFromStores) {
      const obj4 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const items2 = [closure_12(tmp2(8200).GroupIcon, { size: "xxs", color: "text-muted" }), " ", stateFromStores];
      obj4.children = items2;
      tmp8 = closure_13(tmp2(5087).Text, obj4);
    }
  }
  obj2.trailing = tmp8;
  const merged1 = Object.assign(merged);
  return closure_12(guildRole(6186).TableRow, obj2, guildRole.id);
});
let closure_16 = tmp4;
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/options/role/AppLauncherRoleListActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function AppLauncherRoleListActionSheet(onRolePress) {
  const cResult = onRolePress(first[9]).c(27);
  onRolePress = onRolePress.onRolePress;
  const onActionSheetDismiss = onRolePress.onActionSheetDismiss;
  const option = onRolePress.option;
  const guild_id = onRolePress.channel.guild_id;
  let tmp4 = ref(noop.useState(""), 2);
  first = tmp4[0];
  closure_4 = tmp4[1];
  ref = noop.useRef(null);
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
  const obj = onRolePress(first[9]);
  const stateFromStores = onRolePress(first[12]).useStateFromStores(first1, tmp9);
  if (cResult[3] === first) {
    if (cResult[4] === stateFromStores) {
      if (cResult[8] !== onActionSheetDismiss) {
        function hideActionSheet() {
          ActionSheetActionCreatorsDefault.hideActionSheet(AppLauncherRoleListActionSheet);
          onActionSheetDismiss();
        }
        cResult[8] = onActionSheetDismiss;
        cResult[9] = hideActionSheet;
        let tmp12 = hideActionSheet;
      } else {
        tmp12 = cResult[9];
      }
      noop = tmp12;
      if (cResult[10] === tmp12) {
        if (cResult[11] === onRolePress) {
          let tmp13 = cResult[12];
        }
        closure_8 = tmp13;
        if (cResult[13] === guild_id) {
          if (cResult[14] === tmp13) {
            if (cResult[15] === arr3.length) {
              let tmp14 = cResult[16];
            }
            const _Symbol = Symbol;
            class Item {
              constructor(arg0) {
                item = onRolePress.item;
                index = onRolePress.index;
                obj = {
                  guildId: guild_id,
                  guildRole: item,
                  onPress() {
                                  return closure_8({ role: item });
                                },
                  start: 0 === index,
                  end: index === closure_6.length - 1
                };
                return closure_1_12(closure_1_16, obj);
              }
            }
            const _Symbol2 = Symbol;
            if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
              { onChange: null }.onChange = tmp16;
              class Item {
                constructor(arg0) {
                  item = onRolePress.item;
                  index = onRolePress.index;
                  obj = {
                    guildId: guild_id,
                    guildRole: item,
                    onPress() {
                                      return closure_8({ role: item });
                                    },
                    start: 0 === index,
                    end: index === closure_6.length - 1
                  };
                  return closure_1_12(closure_1_16, obj);
                }
              }
              cResult[18] = tmp19;
              let tmp17 = tmp19;
              const obj2 = { onChange: null };
            } else {
              tmp17 = cResult[18];
            }
            if (cResult[19] === tmp14) {
              if (cResult[20] === arr3) {
                if (cResult[21] === tmp20) {
                  if (cResult[23] === onActionSheetDismiss) {
                    if (cResult[24] === option) {
                      if (cResult[25] === tmp21) {
                        let tmp25 = cResult[26];
                      }
                      return tmp25;
                    }
                  }
                  class Item {
                    constructor(arg0) {
                      item = onRolePress.item;
                      index = onRolePress.index;
                      obj = {
                        guildId: guild_id,
                        guildRole: item,
                        onPress() {
                                              return closure_8({ role: item });
                                            },
                        start: 0 === index,
                        end: index === closure_6.length - 1
                      };
                      return closure_1_12(closure_1_16, obj);
                    }
                  }
                  tmp27[0] = option;
                  tmp27[1] = onActionSheetDismiss;
                  const items1 = [tmp17, cResult[22]];
                  tmp27[2] = items1;
                  const tmp28 = closure_13(tmp(tmp2[20]).AppLauncherCommandOptionActionSheet, tmp27);
                  cResult[23] = onActionSheetDismiss;
                  cResult[24] = option;
                  cResult[25] = cResult[22];
                  cResult[26] = tmp28;
                  tmp25 = tmp28;
                }
              }
            }
            let tmpResult2 = tmp(tmp2[19]);
            if (0 === arr3.length) {
              tmpResult2 = {};
              let tmp22Result = closure_12(tmpResult2.AppLauncherListEmptyState, tmpResult2);
            } else {
              const obj3 = { ref, data: arr3, renderItem: null };
              class Item {
                constructor(arg0) {
                  item = onRolePress.item;
                  index = onRolePress.index;
                  obj = {
                    guildId: guild_id,
                    guildRole: item,
                    onPress() {
                                      return closure_8({ role: item });
                                    },
                    start: 0 === index,
                    end: index === closure_6.length - 1
                  };
                  return closure_1_12(closure_1_16, obj);
                }
              }
              tmp22Result = closure_12(tmpResult2.AppLauncherList, obj3);
            }
            cResult[19] = tmp14;
            cResult[20] = arr3;
            cResult[21] = 0 === arr3.length;
            cResult[22] = tmp22Result;
          }
        }
        class Item {
          constructor(arg0) {
            item = onRolePress.item;
            index = onRolePress.index;
            obj = {
              guildId: guild_id,
              guildRole: item,
              onPress() {
                          return closure_8({ role: item });
                        },
              start: 0 === index,
              end: index === closure_6.length - 1
            };
            return closure_1_12(closure_1_16, obj);
          }
        }
        cResult[13] = guild_id;
        cResult[14] = tmp13;
        cResult[15] = arr3.length;
        cResult[16] = Item;
        tmp14 = Item;
      }
      function handleRolePress(role) {
        onRolePress({ role: role.role });
        closure_7();
      }
      cResult[10] = tmp12;
      cResult[11] = onRolePress;
      cResult[12] = handleRolePress;
      tmp13 = handleRolePress;
    }
  }
  if (cResult[6] !== first) {
    const fn2 = function y(id) {
      let tmp = first === id.id;
      if (!tmp) {
        const trimmed = first.trim();
        tmp = fuzzysearchDefault(trimmed, id.name.toLowerCase());
      }
      return tmp;
    };
    cResult[6] = first;
    class Item {
      constructor(arg0) {
        item = onRolePress.item;
        index = onRolePress.index;
        obj = {
          guildId: guild_id,
          guildRole: item,
          onPress() {
                  return closure_8({ role: item });
                },
          start: 0 === index,
          end: index === closure_6.length - 1
        };
        return closure_1_12(closure_1_16, obj);
      }
    }
    cResult[7] = fn2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[7];
  }
  const found = stateFromStores.filter(tmp10);
  cResult[3] = first;
  cResult[4] = stateFromStores;
  cResult[5] = found;
  const tmpResult = onRolePress(first[12]);
}) : (function AppLauncherRoleListActionSheet(channel) {
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
      onChange: function handleQueryUpdate(str) {
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
      renderItem: function Item(item) {
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