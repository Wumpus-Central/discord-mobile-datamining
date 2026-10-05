// === Module 16527: GuildSettingsModalMembers ===

// Module 16527 (GuildSettingsModalMembers)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4590 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5705 */;
import MemberSafetyPermissionsUtils from "MemberSafetyPermissionsUtils" /* 6768 */;
import ChannelPermissionsUtils from "ChannelPermissionsUtils" /* 9215 */;
import _mod9496 from "module_9496" /* 9496 */;
import RolePillDefault from "RolePill" /* 10685 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4780 */;
import GuildMemberStore_mod from "GuildMemberStore" /* 2112 */;
import GuildRoleStore from "GuildRoleStore" /* 2106 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import UserStore from "UserStore" /* 1377 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9248 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const _modDef9496 = _mod9496;
let closure_11, closure_12, dependencyMap, guildId, navigation;

let closure_17;
let closure_18;
let closure_19;
let obj2;
let obj3;
let closure_3 = ["ref"];
const View = react_native.View;
let GuildMemberStore = GuildMemberStore_mod;
const GuildSettingsSections = Constants.GuildSettingsSections;
({ jsx: closure_17, jsxs: closure_18, Fragment: closure_19 } = Fragment);
let items = [_mod9496.AutocompleterResultTypes.USER];
let createStyles = createStyles_mod;
let obj = { containerInner: obj2, searchFieldContainer: obj3, roleList: { flexDirection: "row", flexWrap: "wrap", overflow: "hidden", paddingTop: 4 } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_12, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: nativeDefault.space.PX_12 };
let closure_21 = createStyles(obj);
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let end;
  let sortedGuildRoles;
  let start;
  let obj = guild(navigation[18]);
  const cResult = obj.c(29);
  guild = guild.guild;
  const guildMember = guild.guildMember;
  ({ sortedGuildRoles, start, end } = guild);
  const tmp4 = closure_21();
  const obj2 = guild(navigation[19]);
  navigation = obj2.useNavigation();
  if (null == guild) {
    return null;
  } else {
    if (cResult[0] === guild.ownerId) {
      let tmp6;
      let tmp10;
      if (cResult[1] === guildMember.userId) {
        tmp6 = cResult[2];
      }
      if (cResult[3] === guild.id) {
        if (cResult[4] === guildMember.roles) {
          if (cResult[5] === guildMember.userId) {
            let tmp8;
            let arr;
            if (cResult[6] === sortedGuildRoles) {
              tmp8 = cResult[7];
              arr = cResult[8];
            }
            if (cResult[14] === arr) {
              let tmp19;
              if (cResult[15] === tmp4) {
                tmp19 = cResult[16];
              }
              if (cResult[17] === guildMember.userId) {
                let tmp24;
                if (cResult[18] === navigation) {
                  tmp24 = cResult[19];
                }
                if (cResult[20] === end) {
                  if (cResult[21] === guild.id) {
                    if (cResult[22] === guildMember.userId) {
                      if (cResult[23] === tmp6) {
                        if (cResult[24] === tmp8) {
                          if (cResult[25] === start) {
                            if (cResult[26] === tmp19) {
                              let tmp25;
                              if (cResult[27] === tmp24) {
                                tmp25 = cResult[28];
                              }
                              return tmp25;
                            }
                          }
                        }
                      }
                    }
                  }
                }
                class G {
                  constructor() {
                    const obj = { userId: guildMember.userId };
                    navigation.push(GuildSettingsSections.MEMBER_EDIT, obj);
                  }
                }
                const obj4 = { userId: guildMember.userId, guildId: guild.id, accessibilityLabel: tmp8, subLabel: tmp19, disabled: tmp6, onPress: tmp24, arrow: true, start, end };
                const tmp27 = closure_17(guildMember(navigation[24]), obj4);
                cResult[20] = end;
                cResult[21] = guild.id;
                cResult[22] = guildMember.userId;
                cResult[23] = tmp6;
                cResult[24] = tmp8;
                cResult[25] = start;
                cResult[26] = tmp19;
                cResult[27] = tmp24;
                cResult[28] = tmp27;
                tmp25 = tmp27;
              }
              class G {
                constructor() {
                  const obj = { userId: guildMember.userId };
                  navigation.push(GuildSettingsSections.MEMBER_EDIT, obj);
                }
              }
              cResult[17] = guildMember.userId;
              cResult[18] = navigation;
              cResult[19] = G;
              tmp24 = G;
            }
            let tmp20 = null;
            if (arr.length > 0) {
              class G {
                constructor() {
                  const obj = { userId: guildMember.userId };
                  navigation.push(GuildSettingsSections.MEMBER_EDIT, obj);
                }
              }
              tmp23[0] = tmp4.roleList;
              tmp23[2] = arr;
              tmp20 = closure_17(View, tmp23);
            }
            cResult[14] = arr;
            cResult[15] = tmp4;
            cResult[16] = tmp20;
            tmp19 = tmp20;
          }
        }
      }
      const found = sortedGuildRoles.filter(tmp9);
      if (cResult[11] !== guild.id) {
        const fn = function x(role) {
          const obj = { role, guildId: guild.id };
          return closure_17(RolePillDefault, obj, role.id);
        };
        class G {
          constructor() {
            const obj = { userId: guildMember.userId };
            navigation.push(GuildSettingsSections.MEMBER_EDIT, obj);
          }
        }
        cResult[12] = fn;
        tmp10 = fn;
      } else {
        tmp10 = cResult[12];
      }
      const mapped = found.map(tmp10);
      let formatToPlainStringResult;
      if (found.length > 0) {
        const user = UserStore.getUser(guildMember.userId);
        class G {
          constructor() {
            const obj = { userId: guildMember.userId };
            navigation.push(GuildSettingsSections.MEMBER_EDIT, obj);
          }
        }
        const obj3 = guildMember(navigation[21]);
        let str = obj3.getNickname(guild.id, undefined, user);
        if (str == null) {
          const tmp15Result = tmp15(navigation[22]);
          str = tmp15Result.getGlobalName(user);
        }
        if (str == null) {
          if (user != null) {
            const username = user.username;
          }
          class G {
            constructor() {
              const obj = { userId: guildMember.userId };
              navigation.push(GuildSettingsSections.MEMBER_EDIT, obj);
            }
          }
        }
        if (str == null) {
          str = "";
        }
        const _Symbol = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          class P {
            constructor(name) {
              return name.name;
            }
          }
          class G {
            constructor() {
              const obj = { userId: guildMember.userId };
              navigation.push(GuildSettingsSections.MEMBER_EDIT, obj);
            }
          }
        } else {
          class P {
            constructor(name) {
              return name.name;
            }
          }
        }
        const mapped1 = found.map(P);
        const joined = mapped1.join(", ");
        const intl = tmp(tmp2[23]).intl;
        const obj5 = { memberName: str, roleNames: joined };
        formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[23]).t["6eGpWx"], obj5);
      }
      cResult[3] = guild.id;
      cResult[4] = guildMember.roles;
      cResult[5] = guildMember.userId;
      cResult[6] = sortedGuildRoles;
      cResult[7] = formatToPlainStringResult;
      cResult[8] = mapped;
      tmp8 = formatToPlainStringResult;
      arr = mapped;
    }
    cResult[0] = guild.ownerId;
    cResult[1] = guildMember.userId;
    cResult[2] = guildMember.userId === guild.ownerId;
    tmp6 = tmp7;
  }
}) : ((guild) => {
  let closure_2;
  let end;
  let start;
  let tmp12Result;
  guild = guild.guild;
  const guildMember = guild.guildMember;
  const sortedGuildRoles = guild.sortedGuildRoles;
  ({ start, end } = guild);
  const tmp = closure_21();
  let obj = guild(1490);
  dependencyMap = obj.useNavigation();
  if (null == guild) {
    return null;
  } else {
    const tmp5 = guildMember.userId === guild.ownerId && AuthenticationStore.getId() === guild.ownerId;
    const found = sortedGuildRoles.filter((id) => {
      const roles = guildMember.roles;
      return roles.includes(id.id);
    });
    const mapped = found.map((role) => {
      const obj = { role, guildId: guild.id };
      return closure_17(RolePillDefault, obj, role.id);
    });
    let formatToPlainStringResult;
    if (found.length > 0) {
      const user = UserStore.getUser(guildMember.userId);
      const obj2 = guildMember(5042);
      let str = obj2.getNickname(guild.id, undefined, user);
      const tmp9 = guildMember;
      if (str == null) {
        const tmp9Result = tmp9(4722);
        str = tmp9Result.getGlobalName(user);
      }
      if (str == null) {
        let username;
        if (user != null) {
          username = user.username;
        }
        str = username;
      }
      if (str == null) {
        str = "";
      }
      const mapped1 = found.map((name) => name.name);
      const joined = mapped1.join(", ");
      const intl = tmp2(1126).intl;
      const obj3 = { memberName: str, roleNames: joined };
      formatToPlainStringResult = intl.formatToPlainString(tmp2(1126).t["6eGpWx"], obj3);
    }
    const obj4 = {
      userId: guildMember.userId,
      guildId: guild.id,
      accessibilityLabel: formatToPlainStringResult,
      subLabel: tmp12Result,
      disabled: tmp5,
      onPress() {
          const obj = { userId: guildMember.userId };
          closure_2.push(GuildSettingsSections.MEMBER_EDIT, obj);
        },
      arrow: true,
      start,
      end
    };
    tmp12Result = null;
    const tmp14 = guildMember(10680);
    if (mapped.length > 0) {
      const obj5 = { style: tmp.roleList, pointerEvents: "none", children: mapped };
      tmp12Result = closure_17(View, obj5);
    }
    return closure_17(tmp14, obj4);
  }
}));
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let closure_10;
  let first;
  let guild;
  let items8;
  let length;
  let tmp11;
  let tmp13;
  let tmp17;
  let tmp19;
  let tmp20;
  let tmp22;
  let tmp36;
  let tmp41;
  let tmp = guildId;
  let tmp2 = guildId;
  const tmp4 = guild;
  let obj = guildId(guild[18]);
  const cResult = obj.c(78);
  guildId = guildId.guildId;
  let obj2 = guildId(guild[19]);
  navigation = obj2.useNavigation();
  closure_21();
  const bottom = navigation(guild[25])().bottom;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [closure_12, closure_11];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function p() {
      const obj = { guild: GuildStore.getGuild(guildId), guildLoaded: null != GuildStore.getGuild(guildId), sortedGuildRoles: GuildRoleStore.getSortedRoles(guildId) };
      return obj;
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp11 = fn;
  } else {
    tmp11 = cResult[2];
  }
  let tmp2Result = tmp2(tmp4[26]);
  const stateFromStoresObject = tmp2Result.useStateFromStoresObject(first, tmp11);
  guild = stateFromStoresObject.guild;
  const guildLoaded = stateFromStoresObject.guildLoaded;
  const sortedGuildRoles = stateFromStoresObject.sortedGuildRoles;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PermissionStore, UserStore];
    cResult[3] = items1;
    tmp13 = items1;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] !== guild) {
    class A {
      constructor() {
        let canPruneGuildMembersResult = null != guild;
        if (canPruneGuildMembersResult) {
          const obj = MemberSafetyPermissionsUtils;
          canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
        }
        return canPruneGuildMembersResult;
      }
    }
    const items2 = [guild];
    cResult[4] = guild;
    cResult[5] = A;
    cResult[6] = items2;
    tmp17 = items2;
  } else {
    class A {
      constructor() {
        let canPruneGuildMembersResult = null != guild;
        if (canPruneGuildMembersResult) {
          const obj = MemberSafetyPermissionsUtils;
          canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
        }
        return canPruneGuildMembersResult;
      }
    }
    tmp17 = cResult[6];
  }
  const tmp2Result6 = tmp2(tmp4[26]);
  const stateFromStores = tmp2Result6.useStateFromStores(tmp13, A, tmp17);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor() {
        let canPruneGuildMembersResult = null != guild;
        if (canPruneGuildMembersResult) {
          const obj = MemberSafetyPermissionsUtils;
          canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
        }
        return canPruneGuildMembersResult;
      }
    }
    const items3 = [GuildSettingsStore];
    const fn2 = function j() {
      return GuildSettingsStore.getProps().selectedRoleId;
    };
    cResult[7] = items3;
    cResult[8] = fn2;
    tmp20 = fn2;
    tmp19 = items3;
  } else {
    class A {
      constructor() {
        let canPruneGuildMembersResult = null != guild;
        if (canPruneGuildMembersResult) {
          const obj = MemberSafetyPermissionsUtils;
          canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
        }
        return canPruneGuildMembersResult;
      }
    }
    tmp20 = cResult[8];
  }
  const tmp2Result7 = tmp2(tmp4[26]);
  const stateFromStores1 = tmp2Result7.useStateFromStores(tmp19, tmp20);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor() {
        let canPruneGuildMembersResult = null != guild;
        if (canPruneGuildMembersResult) {
          const obj = MemberSafetyPermissionsUtils;
          canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
        }
        return canPruneGuildMembersResult;
      }
    }
    const items4 = [GuildMemberCountStore];
    cResult[9] = items4;
    tmp22 = items4;
  } else {
    class A {
      constructor() {
        let canPruneGuildMembersResult = null != guild;
        if (canPruneGuildMembersResult) {
          const obj = MemberSafetyPermissionsUtils;
          canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
        }
        return canPruneGuildMembersResult;
      }
    }
  }
  if (cResult[10] === guildId) {
    let tmp26;
    let tmp28;
    class A {
      constructor() {
        let canPruneGuildMembersResult = null != guild;
        if (canPruneGuildMembersResult) {
          const obj = MemberSafetyPermissionsUtils;
          canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
        }
        return canPruneGuildMembersResult;
      }
    }
    const tmp2Result8 = tmp2(tmp4[26]);
    const stateFromStores2 = tmp2Result8.useStateFromStores(tmp22, X, items8);
    const _Symbol = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class A {
        constructor() {
          let canPruneGuildMembersResult = null != guild;
          if (canPruneGuildMembersResult) {
            const obj = MemberSafetyPermissionsUtils;
            canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
          }
          return canPruneGuildMembersResult;
        }
      }
      const items5 = [GuildMemberStore];
      cResult[14] = items5;
      tmp26 = items5;
    } else {
      class A {
        constructor() {
          let canPruneGuildMembersResult = null != guild;
          if (canPruneGuildMembersResult) {
            const obj = MemberSafetyPermissionsUtils;
            canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
          }
          return canPruneGuildMembersResult;
        }
      }
    }
    if (cResult[15] !== guildId) {
      class D {
        constructor() {
          return GuildMemberStore.getMembers(guildId);
        }
      }
      const items6 = [guildId];
      cResult[15] = guildId;
      cResult[16] = D;
      cResult[17] = items6;
      tmp28 = items6;
    } else {
      class D {
        constructor() {
          return GuildMemberStore.getMembers(guildId);
        }
      }
      tmp28 = cResult[17];
    }
    const tmp2Result9 = tmp2(tmp4[26]);
    const stateFromStoresArray = tmp2Result9.useStateFromStoresArray(tmp26, D, tmp28);
    const _Symbol2 = Symbol;
    if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
      class D {
        constructor() {
          return GuildMemberStore.getMembers(guildId);
        }
      }
      cResult[18] = tmp33;
    } else {
      class D {
        constructor() {
          return GuildMemberStore.getMembers(guildId);
        }
      }
    }
    [tmp36, AuthenticationStore] = stateFromStores(stateFromStores1.useState(tmp33), 2);
    stateFromStores(stateFromStores1.useState(tmp33), 2);
    const tmp2Result10 = tmp2(tmp4[28]);
    const subscribeToGuildMemberUpdates = tmp2Result10.useSubscribeToGuildMemberUpdates(guildId);
    [tmp41, GuildMemberCountStore] = stateFromStores(stateFromStores1.useState(false), 2);
    stateFromStores(stateFromStores1.useState(false), 2);
    const tmp42 = stateFromStores(stateFromStores1.useState(false), 2);
    GuildMemberStore = tmp42[0];
    closure_11 = tmp42[1];
    const _Symbol3 = Symbol;
    const obj8 = stateFromStores1;
    const tmp34 = stateFromStores;
    if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
      class D {
        constructor() {
          return GuildMemberStore.getMembers(guildId);
        }
      }
      cResult[19] = tmp44;
    } else {
      class D {
        constructor() {
          return GuildMemberStore.getMembers(guildId);
        }
      }
    }
    closure_12 = tmp34(obj8.useState(tmp44), 1)[0];
    if (cResult[20] === tmp41) {
      class D {
        constructor() {
          return GuildMemberStore.getMembers(guildId);
        }
      }
    }
    if (cResult[26] === guildId) {
      class D {
        constructor() {
          return GuildMemberStore.getMembers(guildId);
        }
      }
      const items7 = [];
      if (tmp41) {
        class D {
          constructor() {
            return GuildMemberStore.getMembers(guildId);
          }
        }
        const iter2 = tmp36[Symbol.iterator]();
        const nextResult = iter2.next();
        while (iter2 !== undefined) {
          class D {
            constructor() {
              return GuildMemberStore.getMembers(guildId);
            }
          }
          let tmp62 = nextResult;
          if (nextResult.type === guildId(guild[14]).AutocompleterResultTypes.USER) {
            class D {
              constructor() {
                return GuildMemberStore.getMembers(guildId);
              }
            }
            let member = GuildMemberStore.getMember(guildId, tmp62.record.id);
            let tmp68 = member;
            let tmp46Result = null == member;
            if (!tmp46Result) {
              class D {
                constructor() {
                  return GuildMemberStore.getMembers(guildId);
                }
              }
              tmp46Result = tmp46(tmp68);
            }
            if (!tmp46Result) {
              class D {
                constructor() {
                  return GuildMemberStore.getMembers(guildId);
                }
              }
              let arr = items7.push(tmp68);
            }
          }
          continue;
        }
      } else {
        class D {
          constructor() {
            return GuildMemberStore.getMembers(guildId);
          }
        }
        const iter = stateFromStoresArray[Symbol.iterator]();
        const nextResult1 = iter.next();
        while (iter !== undefined) {
          class D {
            constructor() {
              return GuildMemberStore.getMembers(guildId);
            }
          }
          let tmp46Result2 = null == UserStore.getUser(nextResult1.userId);
          if (!tmp46Result2) {
            class D {
              constructor() {
                return GuildMemberStore.getMembers(guildId);
              }
            }
            tmp46Result2 = tmp46(tmp51);
          }
          if (!tmp46Result2) {
            class D {
              constructor() {
                return GuildMemberStore.getMembers(guildId);
              }
            }
            let arr2 = items7.push(tmp51);
          }
          continue;
        }
        const _Symbol4 = Symbol;
        if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
          class D {
            constructor() {
              return GuildMemberStore.getMembers(guildId);
            }
          }
          cResult[29] = tmp56;
        } else {
          class D {
            constructor() {
              return GuildMemberStore.getMembers(guildId);
            }
          }
        }
        const sorted = items7.sort(tmp56);
      }
      cResult[20] = tmp41;
      cResult[21] = guildId;
      cResult[22] = stateFromStoresArray;
      cResult[23] = tmp36;
      cResult[24] = stateFromStores1;
      cResult[25] = items7;
    }
    function fe(roles) {
      let tmp2 = null != stateFromStores1;
      if (tmp2) {
        const obj = ChannelPermissionsUtils;
        tmp2 = !obj.isEveryoneRoleId(guildId, stateFromStores1);
      }
      if (tmp2) {
        roles = roles.roles;
        tmp2 = -1 === roles.indexOf(stateFromStores1);
      }
      return tmp2;
    }
    cResult[26] = guildId;
    cResult[27] = stateFromStores1;
    cResult[28] = fe;
  }
  class X {
    constructor() {
      let num = GuildMemberCountStore.getMemberCount(guildId);
      if (num == null) {
        num = 0;
      }
      return num > 0 && num <= 10000 && guildLoaded;
    }
  }
  items8 = [guildId, guildLoaded];
  cResult[10] = guildId;
  cResult[11] = guildLoaded;
  cResult[12] = items8;
  cResult[13] = X;
}) : ((guildId) => {
  let SearchField;
  let _undefined;
  let intl;
  let intl2;
  let intl3;
  let items15;
  let items16;
  let obj10;
  let obj12;
  let tmp33Result;
  const f125114 = () => {
    const tmp = new _modDef9496((arg0) => {
      closure_1_10(arg0);
      closure_1_14(false);
    }, items, 100);
    return tmp;
  };
  guildId = guildId.guildId;
  let guild;
  let first;
  let closure_10;
  let first1;
  closure_12 = undefined;
  let first2;
  let closure_14;
  let first3;
  let tmp = guildId;
  let tmp2 = guild;
  let obj = guildId(guild[19]);
  navigation = obj.useNavigation();
  const tmp4 = closure_21();
  const bottom = navigation(guild[25])().bottom;
  let obj2 = guildId(guild[26]);
  items = [closure_12, first1];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const obj = { guild: GuildStore.getGuild(guildId), guildLoaded: null != GuildStore.getGuild(guildId), sortedGuildRoles: GuildRoleStore.getSortedRoles(guildId) };
    return obj;
  });
  guild = stateFromStoresObject.guild;
  const guildLoaded = stateFromStoresObject.guildLoaded;
  const sortedGuildRoles = stateFromStoresObject.sortedGuildRoles;
  const items1 = [first2, closure_14];
  const items2 = [guild];
  const obj3 = guildId(guild[26]);
  const stateFromStores = obj3.useStateFromStores(items1, () => {
    let canPruneGuildMembersResult = null != guild;
    if (canPruneGuildMembersResult) {
      const obj = MemberSafetyPermissionsUtils;
      canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
    }
    return canPruneGuildMembersResult;
  }, items2);
  const items3 = [first3];
  const obj4 = guildId(guild[26]);
  const stateFromStores1 = obj4.useStateFromStores(items3, () => first3.getProps().selectedRoleId);
  const items4 = [first];
  const items5 = [guildId, guildLoaded];
  const obj5 = guildId(guild[26]);
  const stateFromStores2 = obj5.useStateFromStores(items4, () => {
    let num = GuildMemberCountStore.getMemberCount(guildId);
    if (num == null) {
      num = 0;
    }
    return num > 0 && num <= 10000 && guildLoaded;
  }, items5);
  const items6 = [closure_10];
  const items7 = [guildId];
  const obj6 = guildId(guild[26]);
  const stateFromStoresArray = obj6.useStateFromStoresArray(items6, () => GuildMemberStore.getMembers(guildId), items7);
  let tmp11 = stateFromStores(stateFromStores1.useState([]), 2);
  first = tmp11[0];
  closure_10 = tmp11[1];
  const obj7 = guildId(guild[28]);
  const subscribeToGuildMemberUpdates = obj7.useSubscribeToGuildMemberUpdates(guildId);
  const tmp14 = stateFromStores(stateFromStores1.useState(false), 2);
  first1 = tmp14[0];
  closure_12 = tmp14[1];
  const tmp16 = stateFromStores(stateFromStores1.useState(false), 2);
  first2 = tmp16[0];
  closure_14 = tmp16[1];
  first3 = stateFromStores(stateFromStores1.useState(f125114), 2)[0];
  const items8 = [guildId, stateFromStoresArray, first, stateFromStores1, first1];
  stateFromStores(stateFromStores1.useState(f125114), 2);
  const memo = stateFromStores1.useMemo(() => {
    function guildRoleIsFiltered(roles) {
      let tmp2 = null != stateFromStores1;
      if (tmp2) {
        const obj = guildId(guild[29]);
        tmp2 = !obj.isEveryoneRoleId(closure_1_0, stateFromStores1);
      }
      if (tmp2) {
        roles = roles.roles;
        tmp2 = -1 === roles.indexOf(stateFromStores1);
      }
      return tmp2;
    }
    items = [];
    if (first1) {
      const iter2 = first[Symbol.iterator]();
      const nextResult = iter2.next();
      while (iter2 !== undefined) {
        let tmp21 = nextResult;
        if (nextResult.type === _mod9496.AutocompleterResultTypes.USER) {
          let member = GuildMemberStore.getMember(guildId, tmp21.record.id);
          let tmp28 = member;
          let guildRoleIsFilteredResult = null == member;
          if (!guildRoleIsFilteredResult) {
            guildRoleIsFilteredResult = guildRoleIsFiltered(tmp28);
          }
          if (!guildRoleIsFilteredResult) {
            let arr = items.push(tmp28);
          }
        }
        continue;
      }
    } else {
      const iter = stateFromStoresArray[Symbol.iterator]();
      const nextResult1 = iter.next();
      while (iter !== undefined) {
        let tmp8 = nextResult1;
        let guildRoleIsFilteredResult1 = null == UserStore.getUser(nextResult1.userId);
        if (!guildRoleIsFilteredResult1) {
          guildRoleIsFilteredResult1 = guildRoleIsFiltered(tmp8);
        }
        if (!guildRoleIsFilteredResult1) {
          let arr3 = items.push(tmp8);
        }
        continue;
      }
      const sorted = items.sort((nick, nick2) => {
        let str = nick.nick;
        if (str == null) {
          const user = authStore.getUser(nick.userId);
          let username;
          if (user != null) {
            username = user.username;
          }
          str = username;
        }
        if (str == null) {
          str = "";
        }
        let str2 = nick2.nick;
        if (str2 == null) {
          const user1 = authStore.getUser(nick2.userId);
          let username1;
          if (user1 != null) {
            username1 = user1.username;
          }
          str2 = username1;
        }
        if (str2 == null) {
          str2 = "";
        }
        return str.localeCompare(str2);
      });
    }
    return items;
  }, items8);
  const diff = memo.length - 1;
  let c17 = diff;
  const items9 = [stateFromStores, guild, navigation];
  const effect = stateFromStores1.useEffect(() => {
    let canPrune;
    let obj = {
      headerRight() {
        let membersManagementActions;
        const ContextMenu = guildId(guild[30]).ContextMenu;
        if (null != closure_1_2) {
          let obj = { guild: tmp4, canPrune };
          const tmp2Result = guildId(guild[31]);
          membersManagementActions = tmp2Result.getMembersManagementActions(obj);
        } else {
          membersManagementActions = [];
        }
        const obj2 = {
          items: membersManagementActions,
          children(ref) {
            let intl;
            const merged = Object.assign(ref, Object.assign({ ref: 0 }));
            const obj = { source: closure_1_1(closure_1_2[33]), accessibilityLabel: intl.string(closure_1_0(closure_1_2[23]).t.ogxXGq), ref: ref.ref };
            const HeaderActionButton = closure_1_0(closure_1_2[32]).HeaderActionButton;
            intl = closure_1_0(closure_1_2[23]).intl;
            const merged1 = Object.assign(merged);
            return closure_1_17(HeaderActionButton, obj);
          }
        };
        return c17(ContextMenu, obj2);
      }
    };
    navigation.setOptions(obj);
  }, items9);
  const items10 = [stateFromStores2, guildId];
  const effect1 = stateFromStores1.useEffect(() => {
    if (stateFromStores2) {
      const obj = GuildActionCreatorsDefault;
      const members = obj.requestMembers(guildId, "", 10000, false);
    }
  }, items10);
  const items11 = [guildId, guildLoaded, first3];
  const effect2 = stateFromStores1.useEffect(() => {
    let obj2;
    if (guildLoaded) {
      let obj = { userFilters: obj2 };
      obj2 = { guild: guildId, strict: true };
      first3.setOptions(obj);
    }
    return () => {
      if (guildLoaded) {
        const selectRole = navigation(guild[35]).selectRole;
        navigation(guild[35]);
        const obj = navigation(guild[36]);
        const role = selectRole(obj.castGuildIdAsEveryoneGuildRoleId(guildId));
      }
      first3.destroy();
    };
  }, items11);
  const tmp24 = stateFromStores(stateFromStores1.useState(""), 2);
  const first4 = tmp24[0];
  let closure_19 = tmp24[1];
  const items12 = [guildLoaded, guildId, first3];
  const items13 = [memo, first4, first2];
  const callback = stateFromStores1.useCallback((str) => {
    closure_19(str);
    const tmp2 = "" !== str.trim();
    closure_12(tmp2);
    if (tmp2) {
      closure_14(true);
      let tmp12;
      const search = first3.search;
      if (guildLoaded) {
        tmp12 = guildId;
      }
      search(str, tmp12);
    } else {
      first3.clear();
      closure_14(false);
    }
  }, items12);
  const effect3 = stateFromStores1.useEffect(() => {
    if ("" !== first4.trim()) {
      if (!first2) {
        let formatToPlainStringResult;
        if (memo.length > 0) {
          const intl2 = intl4.intl;
          const obj = { count: memo.length };
          formatToPlainStringResult = intl2.formatToPlainString(intl4.t.ZGVL3g, obj);
        } else {
          const intl = intl4.intl;
          formatToPlainStringResult = intl.string(intl4.t.oB9grQ);
        }
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(formatToPlainStringResult);
      }
    }
  }, items13);
  const items14 = [guild, diff, sortedGuildRoles];
  const callback1 = stateFromStores1.useCallback((guildMember) => {
    const index = guildMember.index;
    const obj = { guild, guildMember: guildMember.item, sortedGuildRoles, start: 0 === index, end: index === c17 };
    return _undefined(closure_22, obj);
  }, items14);
  let tmp30 = first4;
  const obj8 = { style: tmp4.containerInner, children: items15 };
  const obj9 = { style: tmp4.searchFieldContainer, children: c17(SearchField, obj10) };
  const callback2 = stateFromStores1.useCallback((userId) => userId.userId, []);
  let tmp31 = closure_19;
  obj10 = { size: "md", placeholder: intl.string(guildId(guild[23]).t.pYHobK), onChange: callback, round: true };
  SearchField = guildId(guild[38]).SearchField;
  intl = guildId(guild[23]).intl;
  items15 = [c17(stateFromStores2, obj9), ];
  const tmp32 = stateFromStores2;
  const tmp5 = navigation;
  if (0 !== memo.length) {
    const obj11 = { keyExtractor: callback2, data: memo, renderItem: callback1, contentContainerStyle: obj12 };
    obj12 = { paddingBottom: bottom + tmp5(tmp2[16]).space.PX_16 };
    const FlashList = tmp(tmp2[39]).FlashList;
    tmp33Result = tmp33(FlashList, obj11);
  } else {
    const obj13 = { Illustration: tmp(tmp2[41]).NoResults, title: intl2.string(tmp(tmp2[23]).t.qVQ9ud), body: intl3.string(tmp(tmp2[23]).t.oB9grQ) };
    const EmptyState = tmp(tmp2[40]).EmptyState;
    intl2 = tmp(tmp2[23]).intl;
    intl3 = tmp(tmp2[23]).intl;
    tmp33Result = tmp33(EmptyState, obj13);
  }
  const obj14 = { children: items16 };
  items15[1] = tmp33Result;
  items16 = [tmp30(tmp32, obj8), c17(tmp(tmp2[42]).NavScrim, {})];
  return tmp30(tmp31, obj14);
}));
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembers.tsx");

export default memoResult;