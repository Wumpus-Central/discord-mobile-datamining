// discord_app/modules/guild_settings/native/GuildSettingsModalMembers.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AccessibilityAnnouncer2 from "../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import GuildActionCreatorsDefault from "../../../actions/GuildActionCreators.tsx";
import MemberSafetyPermissionsUtils from "../../guild_mod_dash_member_safety/MemberSafetyPermissionsUtils.tsx";
import ChannelPermissionsUtils from "../../channel_permissions/ChannelPermissionsUtils.tsx";
import sortByMatchScore from "../../autocompleter/index.tsx";
import RolePillDefault from "../../../components_native/common/RolePill.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import GuildMemberCountStore from "../../../stores/GuildMemberCountStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../../stores/GuildRoleStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import GuildSettingsStore from "../GuildSettingsStore.tsx";

const sortByMatchScoreDefault = sortByMatchScore;

require = fn;
let closure_3 = ["ref"];
const View = fn(17).View;
const GuildSettingsSections = fn(1085).GuildSettingsSections;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18, Fragment: closure_19 } = jsxProd);
let items = [fn(8699).AutocompleterResultTypes.USER];
const createStyles = fn(5092);
let obj = {
  containerInner: { paddingHorizontal: nativeDefault.space.PX_12, flex: 1 },
  searchFieldContainer: null,
  roleList: null,
};
let obj3 = { paddingHorizontal: nativeDefault.space.PX_12, flex: 1 };
obj.searchFieldContainer = { paddingVertical: nativeDefault.space.PX_12 };
obj.roleList = { flexDirection: "row", flexWrap: "wrap", overflow: "hidden", paddingTop: 4 };
let closure_21 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_22 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function GuildSettingsModalMember(guild) {
        let v6eGpWx = guild;
        const cResult = guild(navigation[18]).c(29);
        guild = guild.guild;
        const guildMember = guild.guildMember;
        ({ sortedGuildRoles, start, end } = guild);
        const tmp4 = closure_21();
        const obj = guild(navigation[18]);
        navigation = guild(navigation[19]).useNavigation();
        if (null == guild) {
          return null;
        } else {
          if (cResult[0] === guild.ownerId) {
            if (cResult[1] === guildMember.userId) {
              let tmp6 = cResult[2];
            }
            if (cResult[3] === guild.id) {
              if (cResult[4] === guildMember.roles) {
                if (cResult[5] === guildMember.userId) {
                  if (cResult[6] === sortedGuildRoles) {
                    let arr = cResult[8];
                  }
                  if (cResult[14] === arr) {
                    if (cResult[15] === tmp4) {
                      let tmp21 = cResult[16];
                    }
                    if (cResult[17] === guildMember.userId) {
                      if (cResult[18] === navigation) {
                        let tmp25 = cResult[19];
                      }
                      if (cResult[20] === end) {
                        if (cResult[21] === guild.id) {
                          if (cResult[22] === guildMember.userId) {
                            if (cResult[23] === tmp6) {
                              if (cResult[24] === tmp8) {
                                if (cResult[25] === start) {
                                  if (cResult[26] === tmp21) {
                                    if (cResult[27] === tmp25) {
                                      let tmp26 = cResult[28];
                                    }
                                    return tmp26;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      const obj5 = {
                        userId: guildMember.userId,
                        guildId: guild.id,
                        accessibilityLabel: tmp8,
                        subLabel: tmp21,
                        disabled: tmp6,
                        onPress: tmp25,
                        arrow: true,
                        start,
                        end,
                      };
                      const tmp29 = closure_17(guildMember(tmp2[24]), obj5);
                      cResult[20] = end;
                      cResult[21] = guild.id;
                      cResult[22] = guildMember.userId;
                      cResult[23] = tmp6;
                      cResult[24] = tmp8;
                      cResult[25] = start;
                      cResult[26] = tmp21;
                      cResult[27] = tmp25;
                      cResult[28] = tmp29;
                      tmp26 = tmp29;
                    }
                    const fn = function _() {
                      navigation.push(GuildSettingsSections.MEMBER_EDIT, { userId: guildMember.userId });
                    };
                    cResult[17] = guildMember.userId;
                    cResult[18] = navigation;
                    cResult[19] = fn;
                    tmp25 = fn;
                  }
                  let tmp22 = null;
                  if (arr.length > 0) {
                    const obj6 = { style: tmp4.roleList, pointerEvents: "none", children: arr };
                    tmp22 = closure_17(View, obj6);
                  }
                  cResult[14] = arr;
                  cResult[15] = tmp4;
                  cResult[16] = tmp22;
                  tmp21 = tmp22;
                }
              }
            }
            if (cResult[9] !== guildMember.roles) {
              class C {
                constructor(arg0) {
                  roles = guildMember.roles;
                  return roles.includes(guild.id);
                }
              }
              cResult[9] = guildMember.roles;
              cResult[10] = C;
            } else {
              class C {
                constructor(arg0) {
                  roles = guildMember.roles;
                  return roles.includes(guild.id);
                }
              }
            }
            let found = sortedGuildRoles.filter(C);
            if (cResult[11] !== guild.id) {
              class C {
                constructor(arg0) {
                  roles = guildMember.roles;
                  return roles.includes(guild.id);
                }
              }
              cResult[11] = guild.id;
              cResult[12] = tmp11;
            } else {
              class C {
                constructor(arg0) {
                  roles = guildMember.roles;
                  return roles.includes(guild.id);
                }
              }
            }
            const mapped = found.map(tmp11);
            if (found.length <= 0) {
              class C {
                constructor(arg0) {
                  roles = guildMember.roles;
                  return roles.includes(guild.id);
                }
              }
              cResult[3] = guild.id;
              cResult[4] = guildMember.roles;
              cResult[5] = guildMember.userId;
              cResult[6] = sortedGuildRoles;
              cResult[7] = undefined;
              cResult[8] = mapped;
              arr = mapped;
            } else {
              class C {
                constructor(arg0) {
                  roles = guildMember.roles;
                  return roles.includes(guild.id);
                }
              }
              const user = UserStore.getUser(guildMember.userId);
              let nickname = guildMember(tmp2[21]).getNickname(guild.id, undefined, user);
              if (nickname == null) {
                class C {
                  constructor(arg0) {
                    roles = guildMember.roles;
                    return roles.includes(guild.id);
                  }
                }
                nickname = obj4.getGlobalName(user);
              }
              if (nickname == null) {
                class C {
                  constructor(arg0) {
                    roles = guildMember.roles;
                    return roles.includes(guild.id);
                  }
                }
                if (user != null) {
                  class C {
                    constructor(arg0) {
                      roles = guildMember.roles;
                      return roles.includes(guild.id);
                    }
                  }
                }
                nickname = tmp16;
              }
              if (nickname == null) {
                class C {
                  constructor(arg0) {
                    roles = guildMember.roles;
                    return roles.includes(guild.id);
                  }
                }
              }
              const _Symbol = Symbol;
              if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                class P {
                  constructor(arg0) {
                    return guild.name;
                  }
                }
                cResult[13] = P;
              } else {
                class P {
                  constructor(arg0) {
                    return guild.name;
                  }
                }
              }
              const mapped1 = found.map(P);
              const joined = mapped1.join(", ");
              found = v6eGpWx(tmp2[23]).intl;
              v6eGpWx = v6eGpWx(tmp2[23]).t["6eGpWx"];
              const obj7 = { memberName: nickname, roleNames: joined };
              found.formatToPlainString(v6eGpWx, obj7);
              const obj3 = guildMember(tmp2[21]);
            }
          }
          let tmp7 = guildMember.userId === guild.ownerId;
          if (tmp7) {
            class P {
              constructor(arg0) {
                return guild.name;
              }
            }
            tmp7 = AuthenticationStore.getId() === guild.ownerId;
          }
          cResult[0] = guild.ownerId;
          cResult[1] = guildMember.userId;
          cResult[2] = tmp7;
          tmp6 = tmp7;
        }
        const obj2 = guild(navigation[19]);
      }
    : function GuildSettingsModalMember(guild) {
        guild = guild.guild;
        const guildMember = guild.guildMember;
        const sortedGuildRoles = guild.sortedGuildRoles;
        ({ start, end } = guild);
        const tmp = closure_21();
        dependencyMap = guild(1503).useNavigation();
        if (null == guild) {
          return null;
        } else {
          let tmp5 = guildMember.userId === guild.ownerId;
          if (tmp5) {
            tmp5 = AuthenticationStore.getId() === guild.ownerId;
          }
          const found = sortedGuildRoles.filter((id) => {
            const roles = guildMember.roles;
            return roles.includes(id.id);
          });
          const mapped = found.map((role) => constants(RolePillDefault, { role, guildId: guild.id }, role.id));
          let formatToPlainStringResult;
          if (found.length > 0) {
            const user = UserStore.getUser(guildMember.userId);
            let str = guildMember(5409).getNickname(guild.id, undefined, user);
            if (str == null) {
              str = tmp9(4962).getGlobalName(user);
              const tmp9Result = tmp9(4962);
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
            const obj2 = guildMember(5409);
            tmp9 = guildMember;
          }
          const obj4 = {
            userId: guildMember.userId,
            guildId: guild.id,
            accessibilityLabel: formatToPlainStringResult,
            subLabel: null,
            disabled: null,
            onPress: null,
            arrow: true,
            start: null,
            end: null,
          };
          let tmp12Result = null;
          if (mapped.length > 0) {
            const obj5 = { style: tmp.roleList, pointerEvents: "none", children: mapped };
            tmp12Result = closure_17(View, obj5);
          }
          obj4.subLabel = tmp12Result;
          obj4.disabled = tmp5;
          obj4.onPress = function onPress() {
            closure_2.push(GuildSettingsSections.MEMBER_EDIT, { userId: guildMember.userId });
          };
          obj4.start = start;
          obj4.end = end;
          return closure_17(guildMember(10299), obj4);
        }
        const obj = guild(1503);
      },
);
ReactCompilerGating = fn(558);
let obj4 = { paddingVertical: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembers.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function GuildSettingsModalMembers(guildId) {
        const cResult = guildId(guild[18]).c(78);
        guildId = guildId.guildId;
        let obj = guildId(guild[18]);
        const navigation = guildId(guild[19]).useNavigation();
        closure_21();
        const bottom = navigation(guild[25])().bottom;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          items = [closure_12, closure_11];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== guildId) {
          const fn = function p() {
            return {
              guild: GuildStore.getGuild(guildId),
              guildLoaded: null != GuildStore.getGuild(guildId),
              sortedGuildRoles: GuildRoleStore.getSortedRoles(guildId),
            };
          };
          cResult[1] = guildId;
          cResult[2] = fn;
          let tmp11 = fn;
        } else {
          tmp11 = cResult[2];
        }
        let obj2 = guildId(guild[19]);
        const stateFromStoresObject = guildId(guild[26]).useStateFromStoresObject(first, tmp11);
        guild = stateFromStoresObject.guild;
        const guildLoaded = stateFromStoresObject.guildLoaded;
        const sortedGuildRoles = stateFromStoresObject.sortedGuildRoles;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [PermissionStore, UserStore];
          cResult[3] = items1;
          let tmp13 = items1;
        } else {
          tmp13 = cResult[3];
        }
        if (cResult[4] !== guild) {
          class A {
            constructor() {
              canPruneGuildMembersResult = null != guild;
              if (canPruneGuildMembersResult) {
                tmp3 = closure_0;
                tmp4 = closure_2;
                obj = closure_0(closure_2[27]);
                tmp5 = closure_14;
                tmp6 = closure_13;
                canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, closure_14.getCurrentUser(), closure_13);
              }
              return canPruneGuildMembersResult;
            }
          }
          const items2 = [guild];
          cResult[4] = guild;
          cResult[5] = A;
          cResult[6] = items2;
          let tmp17 = items2;
        } else {
          class A {
            constructor() {
              canPruneGuildMembersResult = null != guild;
              if (canPruneGuildMembersResult) {
                tmp3 = closure_0;
                tmp4 = closure_2;
                obj = closure_0(closure_2[27]);
                tmp5 = closure_14;
                tmp6 = closure_13;
                canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, closure_14.getCurrentUser(), closure_13);
              }
              return canPruneGuildMembersResult;
            }
          }
          tmp17 = cResult[6];
        }
        let tmp2Result = guildId(guild[26]);
        const stateFromStores = guildId(guild[26]).useStateFromStores(tmp13, A, tmp17);
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          class A {
            constructor() {
              canPruneGuildMembersResult = null != guild;
              if (canPruneGuildMembersResult) {
                tmp3 = closure_0;
                tmp4 = closure_2;
                obj = closure_0(closure_2[27]);
                tmp5 = closure_14;
                tmp6 = closure_13;
                canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, closure_14.getCurrentUser(), closure_13);
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
          let tmp20 = fn2;
          const tmp19 = items3;
        } else {
          class A {
            constructor() {
              canPruneGuildMembersResult = null != guild;
              if (canPruneGuildMembersResult) {
                tmp3 = closure_0;
                tmp4 = closure_2;
                obj = closure_0(closure_2[27]);
                tmp5 = closure_14;
                tmp6 = closure_13;
                canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, closure_14.getCurrentUser(), closure_13);
              }
              return canPruneGuildMembersResult;
            }
          }
          tmp20 = cResult[8];
        }
        const tmp2Result6 = guildId(guild[26]);
        const stateFromStores1 = guildId(guild[26]).useStateFromStores(tmp19, tmp20);
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          class A {
            constructor() {
              canPruneGuildMembersResult = null != guild;
              if (canPruneGuildMembersResult) {
                tmp3 = closure_0;
                tmp4 = closure_2;
                obj = closure_0(closure_2[27]);
                tmp5 = closure_14;
                tmp6 = closure_13;
                canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, closure_14.getCurrentUser(), closure_13);
              }
              return canPruneGuildMembersResult;
            }
          }
          const items4 = [GuildMemberCountStore];
          cResult[9] = items4;
          const tmp22 = items4;
        } else {
          class A {
            constructor() {
              canPruneGuildMembersResult = null != guild;
              if (canPruneGuildMembersResult) {
                tmp3 = closure_0;
                tmp4 = closure_2;
                obj = closure_0(closure_2[27]);
                tmp5 = closure_14;
                tmp6 = closure_13;
                canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, closure_14.getCurrentUser(), closure_13);
              }
              return canPruneGuildMembersResult;
            }
          }
        }
        if (cResult[10] === guildId) {
          class A {
            constructor() {
              canPruneGuildMembersResult = null != guild;
              if (canPruneGuildMembersResult) {
                tmp3 = closure_0;
                tmp4 = closure_2;
                obj = closure_0(closure_2[27]);
                tmp5 = closure_14;
                tmp6 = closure_13;
                canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, closure_14.getCurrentUser(), closure_13);
              }
              return canPruneGuildMembersResult;
            }
          }
          const stateFromStores2 = tmp2(tmp4[26]).useStateFromStores(tmp22, X, items8);
          const _Symbol = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            class A {
              constructor() {
                canPruneGuildMembersResult = null != guild;
                if (canPruneGuildMembersResult) {
                  tmp3 = closure_0;
                  tmp4 = closure_2;
                  obj = closure_0(closure_2[27]);
                  tmp5 = closure_14;
                  tmp6 = closure_13;
                  canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, closure_14.getCurrentUser(), closure_13);
                }
                return canPruneGuildMembersResult;
              }
            }
            const items5 = [GuildMemberStore];
            cResult[14] = items5;
            const tmp26 = items5;
          } else {
            class A {
              constructor() {
                canPruneGuildMembersResult = null != guild;
                if (canPruneGuildMembersResult) {
                  tmp3 = closure_0;
                  tmp4 = closure_2;
                  obj = closure_0(closure_2[27]);
                  tmp5 = closure_14;
                  tmp6 = closure_13;
                  canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, closure_14.getCurrentUser(), closure_13);
                }
                return canPruneGuildMembersResult;
              }
            }
          }
          if (cResult[15] !== guildId) {
            class D {
              constructor() {
                return closure_10.getMembers(guildId);
              }
            }
            const items6 = [guildId];
            cResult[15] = guildId;
            cResult[16] = D;
            cResult[17] = items6;
            let tmp28 = items6;
          } else {
            class D {
              constructor() {
                return closure_10.getMembers(guildId);
              }
            }
            tmp28 = cResult[17];
          }
          const tmp2Result8 = tmp2(tmp4[26]);
          const stateFromStoresArray = tmp2(tmp4[26]).useStateFromStoresArray(tmp26, D, tmp28);
          const _Symbol2 = Symbol;
          if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
            class D {
              constructor() {
                return closure_10.getMembers(guildId);
              }
            }
            cResult[18] = tmp33;
          } else {
            class D {
              constructor() {
                return closure_10.getMembers(guildId);
              }
            }
          }
          const obj8 = stateFromStores1;
          const tmp2Result9 = tmp2(tmp4[26]);
          const tmp34 = stateFromStores;
          [tmp36, AuthenticationStore] = stateFromStores(stateFromStores1.useState(tmp33), 2);
          const tmp35 = stateFromStores(stateFromStores1.useState(tmp33), 2);
          const subscribeToGuildMemberUpdates = tmp2(tmp4[28]).useSubscribeToGuildMemberUpdates(guildId);
          const tmp2Result10 = tmp2(tmp4[28]);
          [tmp41, GuildMemberCountStore] = stateFromStores(stateFromStores1.useState(false), 2);
          const tmp42 = stateFromStores(stateFromStores1.useState(false), 2);
          GuildMemberStore = tmp42[0];
          closure_11 = tmp42[1];
          const _Symbol3 = Symbol;
          if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
            class D {
              constructor() {
                return closure_10.getMembers(guildId);
              }
            }
            cResult[19] = tmp44;
          } else {
            class D {
              constructor() {
                return closure_10.getMembers(guildId);
              }
            }
          }
          closure_12 = tmp34(obj8.useState(tmp44), 1)[0];
          if (cResult[20] === tmp41) {
            class D {
              constructor() {
                return closure_10.getMembers(guildId);
              }
            }
          }
          if (cResult[26] === guildId) {
            class D {
              constructor() {
                return closure_10.getMembers(guildId);
              }
            }
            const items7 = [];
            if (tmp41) {
              class D {
                constructor() {
                  return closure_10.getMembers(guildId);
                }
              }
              const iter2 = tmp36[Symbol.iterator]();
              const nextResult = iter2.next();
              while (iter2 !== undefined) {
                class D {
                  constructor() {
                    return closure_10.getMembers(guildId);
                  }
                }
                let tmp61 = nextResult;
                if (nextResult.type === guildId(guild[14]).AutocompleterResultTypes.USER) {
                  class D {
                    constructor() {
                      return closure_10.getMembers(guildId);
                    }
                  }
                  let member = GuildMemberStore.getMember(guildId, tmp61.record.id);
                  let tmp67 = member;
                  let tmp45Result = null == member;
                  if (!tmp45Result) {
                    class D {
                      constructor() {
                        return closure_10.getMembers(guildId);
                      }
                    }
                    tmp45Result = tmp45(tmp67);
                  }
                  if (!tmp45Result) {
                    class D {
                      constructor() {
                        return closure_10.getMembers(guildId);
                      }
                    }
                    let arr = items7.push(tmp67);
                  }
                }
                continue;
              }
            } else {
              class D {
                constructor() {
                  return closure_10.getMembers(guildId);
                }
              }
              const iter = stateFromStoresArray[Symbol.iterator]();
              while (iter !== undefined) {
                class D {
                  constructor() {
                    return closure_10.getMembers(guildId);
                  }
                }
                let tmp45Result2 = null == UserStore.getUser(nextResult1.userId);
                if (!tmp45Result2) {
                  class D {
                    constructor() {
                      return closure_10.getMembers(guildId);
                    }
                  }
                  tmp45Result2 = tmp45(tmp50);
                }
                if (!tmp45Result2) {
                  class D {
                    constructor() {
                      return closure_10.getMembers(guildId);
                    }
                  }
                  let arr2 = items7.push(tmp50);
                }
                continue;
              }
              const _Symbol4 = Symbol;
              if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
                class D {
                  constructor() {
                    return closure_10.getMembers(guildId);
                  }
                }
                cResult[29] = tmp55;
              } else {
                class D {
                  constructor() {
                    return closure_10.getMembers(guildId);
                  }
                }
              }
              const sorted = items7.sort(tmp55);
              nextResult1 = iter.next();
            }
            cResult[20] = tmp41;
            cResult[21] = guildId;
            cResult[22] = stateFromStoresArray;
            cResult[23] = tmp36;
            cResult[24] = stateFromStores1;
            cResult[25] = items7;
          }
          function guildRoleIsFiltered(roles) {
            let tmp2 = null != stateFromStores1;
            if (tmp2) {
              tmp2 = !ChannelPermissionsUtils.isEveryoneRoleId(guildId, stateFromStores1);
            }
            if (tmp2) {
              roles = roles.roles;
              tmp2 = -1 === roles.indexOf(stateFromStores1);
            }
            return tmp2;
          }
          cResult[26] = guildId;
          cResult[27] = stateFromStores1;
          cResult[28] = guildRoleIsFiltered;
          const tmp40 = stateFromStores(stateFromStores1.useState(false), 2);
        }
        class X {
          constructor() {
            num = closure_9.getMemberCount(guildId);
            if (num == null) {
              num = 0;
            }
            tmp = num > 0;
            if (tmp) {
              num2 = 10000;
              tmp = num <= 10000;
            }
            if (tmp) {
              tmp = guildLoaded;
            }
            return tmp;
          }
        }
        items8 = [guildId, guildLoaded];
        cResult[10] = guildId;
        cResult[11] = guildLoaded;
        cResult[12] = items8;
        cResult[13] = X;
        const tmp2Result7 = guildId(guild[26]);
      }
    : function GuildSettingsModalMembers(guildId) {
        guildId = guildId.guildId;
        guild = undefined;
        let first;
        closure_10 = undefined;
        let first1;
        closure_12 = undefined;
        let first2;
        closure_14 = undefined;
        let first3;
        const navigation = guildId(guild[19]).useNavigation();
        const tmp4 = closure_21();
        let obj = guildId(guild[19]);
        const tmp5 = navigation;
        items = [closure_12, first1];
        const stateFromStoresObject = guildId(guild[26]).useStateFromStoresObject(items, () => ({
          guild: GuildStore.getGuild(guildId),
          guildLoaded: null != GuildStore.getGuild(guildId),
          sortedGuildRoles: GuildRoleStore.getSortedRoles(guildId),
        }));
        guild = stateFromStoresObject.guild;
        const guildLoaded = stateFromStoresObject.guildLoaded;
        const sortedGuildRoles = stateFromStoresObject.sortedGuildRoles;
        let obj2 = guildId(guild[26]);
        const items1 = [first2, closure_14];
        const items2 = [guild];
        const stateFromStores = guildId(guild[26]).useStateFromStores(
          items1,
          () => {
            let canPruneGuildMembersResult = null != guild;
            if (canPruneGuildMembersResult) {
              canPruneGuildMembersResult = MemberSafetyPermissionsUtils.canPruneGuildMembers(
                tmp,
                UserStore.getCurrentUser(),
                PermissionStore,
              );
            }
            return canPruneGuildMembersResult;
          },
          items2,
        );
        const obj3 = guildId(guild[26]);
        const items3 = [first3];
        const stateFromStores1 = guildId(guild[26]).useStateFromStores(items3, () => first3.getProps().selectedRoleId);
        const obj4 = guildId(guild[26]);
        const items4 = [first];
        const items5 = [guildId, guildLoaded];
        const stateFromStores2 = guildId(guild[26]).useStateFromStores(
          items4,
          () => {
            let num = GuildMemberCountStore.getMemberCount(guildId);
            if (num == null) {
              num = 0;
            }
            let tmp = num > 0;
            if (tmp) {
              tmp = num <= 10000;
            }
            if (tmp) {
              tmp = guildLoaded;
            }
            return tmp;
          },
          items5,
        );
        const obj5 = guildId(guild[26]);
        const items6 = [closure_10];
        const items7 = [guildId];
        const stateFromStoresArray = guildId(guild[26]).useStateFromStoresArray(
          items6,
          () => GuildMemberStore.getMembers(guildId),
          items7,
        );
        let tmp11 = stateFromStores(stateFromStores1.useState([]), 2);
        first = tmp11[0];
        closure_10 = tmp11[1];
        const obj6 = guildId(guild[26]);
        const subscribeToGuildMemberUpdates = guildId(guild[28]).useSubscribeToGuildMemberUpdates(guildId);
        const tmp14 = stateFromStores(stateFromStores1.useState(false), 2);
        first1 = tmp14[0];
        closure_12 = tmp14[1];
        const tmp16 = stateFromStores(stateFromStores1.useState(false), 2);
        first2 = tmp16[0];
        closure_14 = tmp16[1];
        const obj7 = guildId(guild[28]);
        first3 = stateFromStores(
          stateFromStores1.useState(
            () =>
              new sortByMatchScoreDefault(
                (arg0) => {
                  closure_1_10(arg0);
                  closure_1_14(false);
                },
                items,
                100,
              ),
          ),
          2,
        )[0];
        const items8 = [guildId, stateFromStoresArray, first, stateFromStores1, first1];
        const memo = stateFromStores1.useMemo(() => {
          function guildRoleIsFiltered(roles) {
            let tmp2 = null != stateFromStores1;
            if (tmp2) {
              tmp2 = !guildId(guild[29]).isEveryoneRoleId(closure_1_0, stateFromStores1);
              const obj = guildId(guild[29]);
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
              let tmp20 = nextResult;
              if (nextResult.type === sortByMatchScore.AutocompleterResultTypes.USER) {
                let member = GuildMemberStore.getMember(guildId, tmp20.record.id);
                let tmp27 = member;
                let guildRoleIsFilteredResult = null == member;
                if (!guildRoleIsFilteredResult) {
                  guildRoleIsFilteredResult = guildRoleIsFiltered(tmp27);
                }
                if (!guildRoleIsFilteredResult) {
                  let arr = items.push(tmp27);
                }
              }
              continue;
            }
          } else {
            const iter = stateFromStoresArray[Symbol.iterator]();
            const nextResult1 = iter.next();
            while (iter !== undefined) {
              let tmp7 = nextResult1;
              let guildRoleIsFilteredResult1 = null == UserStore.getUser(nextResult1.userId);
              if (!guildRoleIsFilteredResult1) {
                guildRoleIsFilteredResult1 = guildRoleIsFiltered(tmp7);
              }
              if (!guildRoleIsFilteredResult1) {
                let arr3 = items.push(tmp7);
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
        c17 = diff;
        const items9 = [stateFromStores, guild, navigation];
        const effect = stateFromStores1.useEffect(() => {
          navigation.setOptions({
            headerRight() {
              if (null != closure_1_2) {
                let obj = { guild: tmp4, canPrune };
                let membersManagementActions = guildId(guild[31]).getMembersManagementActions(obj);
                const tmp2Result = guildId(guild[31]);
              } else {
                membersManagementActions = [];
              }
              return c17(guildId(guild[30]).ContextMenu, {
                items: membersManagementActions,
                children(ref) {
                  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
                  const obj = { source: closure_1_1(8664), accessibilityLabel: null, ref: null };
                  const intl = closure_1_0(1126).intl;
                  obj.accessibilityLabel = intl.string(closure_1_0(1126).t.ogxXGq);
                  obj.ref = ref.ref;
                  const merged1 = Object.assign(merged);
                  return closure_1_17(closure_1_0(7088).HeaderActionButton, obj);
                },
              });
            },
          });
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
          if (guildLoaded) {
            let obj = { userFilters: null };
            let obj2 = { guild: guildId, strict: true };
            obj.userFilters = obj2;
            first3.setOptions(obj);
          }
          return () => {
            if (guildLoaded) {
              const obj = navigation(guild[35]);
              const role = obj.selectRole(navigation(guild[36]).castGuildIdAsEveryoneGuildRoleId(guildId));
              const obj2 = navigation(guild[36]);
            }
            first3.destroy();
          };
        }, items11);
        const tmp24 = stateFromStores(stateFromStores1.useState(""), 2);
        const first4 = tmp24[0];
        closure_19 = tmp24[1];
        const items12 = [guildLoaded, guildId, first3];
        const items13 = [memo, first4, first2];
        const callback = stateFromStores1.useCallback((str) => {
          closure_19(str);
          const tmp2 = "" !== str.trim();
          closure_12(tmp2);
          if (tmp2) {
            closure_14(true);
            let tmp12;
            if (guildLoaded) {
              tmp12 = guildId;
            }
            first3.search(str, tmp12);
          } else {
            first3.clear();
            closure_14(false);
          }
        }, items12);
        const effect3 = stateFromStores1.useEffect(() => {
          if ("" !== first4.trim()) {
            if (!first2) {
              if (memo.length > 0) {
                const intl2 = util.intl;
                const obj = { count: length };
                let formatToPlainStringResult = intl2.formatToPlainString(util.t.ZGVL3g, obj);
              } else {
                const intl = util.intl;
                formatToPlainStringResult = intl.string(util.t.oB9grQ);
              }
              const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
              AccessibilityAnnouncer.announce(formatToPlainStringResult);
            }
          }
        }, items13);
        const items14 = [guild, diff, sortedGuildRoles];
        const callback1 = stateFromStores1.useCallback((guildMember) => {
          const index = guildMember.index;
          return constants(closure_22, {
            guild,
            guildMember: guildMember.item,
            sortedGuildRoles,
            start: 0 === index,
            end: index === c17,
          });
        }, items14);
        const obj8 = { style: tmp4.containerInner, children: null };
        const obj9 = { style: tmp4.searchFieldContainer, children: null };
        const callback2 = stateFromStores1.useCallback((userId) => userId.userId, []);
        const obj10 = { size: "md", placeholder: null, onChange: null, round: true };
        let intl = guildId(guild[23]).intl;
        obj10.placeholder = intl.string(guildId(guild[23]).t.pYHobK);
        obj10.onChange = callback;
        obj9.children = c17(guildId(guild[38]).SearchField, obj10);
        const items15 = [c17(stateFromStores2, obj9)];
        if (0 !== memo.length) {
          const obj11 = { keyExtractor: callback2, data: memo, renderItem: callback1, contentContainerStyle: null };
          const obj12 = { paddingBottom: navigation(guild[25])().bottom + tmp5(tmp2[16]).space.PX_16 };
          obj11.contentContainerStyle = obj12;
          let tmp33Result = tmp33(tmp(tmp2[39]).FlashList, obj11);
        } else {
          const obj13 = { Illustration: tmp(tmp2[41]).NoResults, title: null, body: null };
          let intl2 = tmp(tmp2[23]).intl;
          obj13.title = intl2.string(tmp(tmp2[23]).t.qVQ9ud);
          const intl3 = tmp(tmp2[23]).intl;
          obj13.body = intl3.string(tmp(tmp2[23]).t.oB9grQ);
          tmp33Result = tmp33(tmp(tmp2[40]).EmptyState, obj13);
        }
        const obj14 = { children: null };
        items15[1] = tmp33Result;
        obj8.children = items15;
        const items16 = [first4(stateFromStores2, obj8), c17(guildId(guild[42]).NavScrim, {})];
        obj14.children = items16;
        return first4(closure_19, obj14);
      },
);
