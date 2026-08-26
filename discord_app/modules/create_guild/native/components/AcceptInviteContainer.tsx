// === Module 12344: AcceptInviteContainer ===

// Module 12344 (AcceptInviteContainer)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "trackCommunicationDisabled" /* 1992 */;
import closure_6 from "createGuildRecordFromRust" /* 1910 */;
import closure_7 from "updateInvite" /* 4428 */;
import { GuildMemberFlags } from "GuildMemberFlags" /* 4077 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

const require = arg1;
createCacheKey = { flex: { flex: 1 }, paddingContainer: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[1] = createCacheKey;
let closure_10 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/create_guild/native/components/AcceptInviteContainer.tsx");

export default function AcceptInviteContainer(code) {
  code = code.code;
  const onPressClose = code.onPressClose;
  const inviteInstanceId = code.inviteInstanceId;
  let merged = Object.assign(code, Object.create(null));
  let isRegistration;
  let navigation;
  let stateFromStoresObject;
  let callback;
  isRegistration = merged.isRegistration;
  let obj = code(inviteInstanceId[9]);
  navigation = obj.useNavigation();
  const tmp2 = callback();
  const items = [closure_7, stateFromStoresObject, callback];
  stateFromStoresObject = code(inviteInstanceId[10]).useStateFromStoresObject(items, () => {
    const invite = closure_1_7.getInvite(set);
    let guild;
    const inviteError = closure_1_7.getInviteError(set);
    if (invite != null) {
      guild = invite.guild;
    }
    let tmp4 = null != guild;
    if (tmp4) {
      tmp4 = null != callback.getGuild(invite.guild.id);
    }
    let guild1;
    if (invite != null) {
      guild1 = invite.guild;
    }
    let selfMember = null;
    if (null != guild1) {
      selfMember = stateFromStoresObject.getSelfMember(invite.guild.id);
    }
    let flag = false;
    if (tmp4) {
      let roles;
      if (invite != null) {
        roles = invite.roles;
      }
      flag = false;
      if (null != roles) {
        flag = false;
        if (invite.roles.length > 0) {
          let roles1;
          if (selfMember != null) {
            roles1 = selfMember.roles;
          }
          if (roles1 == null) {
            roles1 = [];
          }
          set = new Set(roles1);
          roles = invite.roles;
          flag = roles.some((id) => !set.has(id.id));
        }
      }
    }
    const obj = { invite, inviteError, isGuildMember: null, guildMember: null };
    if (tmp4) {
      tmp4 = !flag;
    }
    obj[2] = tmp4;
    obj[3] = selfMember;
    return obj;
  });
  const items1 = [stateFromStoresObject, navigation, onPressClose];
  const layoutEffect = navigation.useLayoutEffect(() => {
    if (null != stateFromStoresObject.invite) {
      let fn = () => null;
    } else {
      fn = code(inviteInstanceId[11]).getHeaderBackButton(onPressClose);
      const obj = code(inviteInstanceId[11]);
    }
    navigation.setOptions({ headerLeft: fn });
  }, items1);
  const items2 = [isRegistration, stateFromStoresObject];
  callback = navigation.useCallback(isRegistration(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === table) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            callback = tmp2;
            let guildId;
            callback = undefined;
            const guildMember = closure_1_5.guildMember;
            guildId = guildMember;
            if (c3) {
              if (null != guildMember) {
                let obj4 = closure_1_0(table[12]);
                const flags = guildMember.flags;
                guildId = flags;
                if (flags == null) {
                  guildId = 0;
                }
                if (!obj4.hasFlag(guildId, closure_1_8.COMPLETED_ONBOARDING)) {
                  table = 1;
                  c3 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = tmp10(tmp11[14])(tmp11[13], tmp11.paths);
                  return obj1;
                }
                tmp10 = closure_1_0;
              }
            }
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            callback = arg1.default;
            const obj3 = { guildId: null };
            obj3[0] = guildId.guildId;
            table = 2;
            c3 = 1;
            obj4 = { value: null, done: false };
            obj4[0] = callback(obj3);
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
        c3 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp14) {
        c3 = tmp;
        throw tmp14;
      }
    }
  }), items2);
  const items3 = [stateFromStoresObject, callback, onPressClose, inviteInstanceId, code];
  const callback1 = navigation.useCallback(isRegistration(function*() {
    if (table === 2) {
      table = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        table = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            table = 3;
            throw arg1;
          } else if (arg0 === 2) {
            table = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let invite = tmp2;
            invite = undefined;
            v0 = function transitionToInviteChannel() {
              const self = this;
              const apply = c2.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            };
            table = function _transitionToInviteChannel() {
              const self = this;
              const tmp = closure_2_3((arg0) => {
                closure_0 = arg0;
                c5 = 0;
                c6 = 0;
                c4 = 0;
                return (function*(arg0) {
                  if (c6 === 2) {
                    c6 = 3;
                    HermesBuiltin.throwTypeError();
                  } else if (tmp6 === 3) {
                    if (arg0 === 1) {
                      throw arg1;
                    } else if (arg0 === 2) {
                      let obj = { value: null, done: true };
                      obj[0] = arg1;
                      return obj;
                    } else {
                      return { value: "HermesInternal", done: null };
                    }
                  } else {
                    try {
                      c6 = 2;
                      if (0 === c5) {
                        if (arg0 === 1) {
                          c6 = 3;
                          throw arg1;
                        } else if (arg0 === 2) {
                          c6 = 3;
                          obj = { value: null, done: true };
                          obj[0] = arg1;
                          return obj;
                        } else {
                          const table = tmp3;
                          closure_1 = tmp7;
                          if (null != channel) {
                            obj1 = closure_2_0(table[15]);
                            if (obj1.isGuildScheduledEventInviteEmbed(tmp38)) {
                              let prop;
                              if (tmp38 != null) {
                                prop = tmp38.guild_scheduled_event;
                              }
                              if (null == prop) {
                                c6 = 3;
                                return { value: "HermesInternal", done: null };
                              } else {
                                closure_1_1();
                                let tmp11Result = tmp11(tmp12[16]);
                                const result = tmp11Result.transitionToEventDetailsFromInvite(prop);
                                c6 = 3;
                                obj1 = { value: null, done: true };
                                obj1[0] = undefined;
                                return obj1;
                              }
                            } else {
                              const guild = tmp38.guild;
                              if (guild != null) {
                                const id = guild.id;
                              }
                              tmp11Result = tmp11(tmp12[15]);
                              if (tmp11Result.isRoleSubscriptionInvite(tmp38)) {
                                if (null != id) {
                                  c4 = 1;
                                  c5 = 2;
                                  c6 = 1;
                                  const obj2 = { value: null, done: false };
                                  obj2[0] = closure_2_1(tmp12[17]).performRoleSubscriptionUpsellRedirect(id);
                                  return obj2;
                                }
                              }
                            }
                          } else {
                            closure_1_1();
                          }
                          c6 = 3;
                        }
                      } else if (1 === tmp7) {
                        c4 = 0;
                      } else if (arg0 === 1) {
                        c6 = 3;
                        throw arg1;
                      } else if (arg0 === 2) {
                        c4 = 0;
                        c6 = 3;
                        obj = { value: null, done: true };
                        obj[0] = arg1;
                        return obj;
                      } else {
                        c4 = 0;
                      }
                      if (null != channel.channel) {
                        closure_1_1();
                        const _setTimeout = setTimeout;
                        const timerId = setTimeout(() => { ... }, 1);
                      } else {
                        closure_1_1();
                      }
                    } catch (tmp28) {
                      closure_3 = tmp28;
                      if (tmp4 === c4) {
                        c6 = tmp2;
                        throw tmp28;
                      } else {
                        c5 = tmp;
                      }
                    }
                  }
                })();
              });
              closure_2 = tmp;
              const apply = tmp.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            };
            invite = closure_1_5.invite;
            if (obj10.handleNSFWGuildInvite(invite)) {
              table = 3;
              obj1 = { value: null, done: true };
              obj1[0] = v0();
              return obj1;
            } else {
              if (!closure_1_5.isGuildMember) {
                if (null != invite) {
                  let obj2 = { inviteKey: null, context: null, callback: null };
                  obj2[0] = closure_1_0;
                  if (null != table) {
                    const obj3 = { invite_instance_id: null };
                    obj3[0] = tmp27;
                    let obj4 = obj3;
                  } else {
                    obj4 = {};
                  }
                  const obj5 = { location: "Accept Invite Page" };
                  const merged = Object.assign(obj4);
                  obj2[1] = obj5;
                  obj2[2] = function callback(arg0) {
                    v1(arg0);
                  };
                  obj2 = v0(tmp24[18]).acceptInvite(obj2);
                  const obj11 = v0(tmp24[18]);
                }
              }
              v0 = 1;
              table = 1;
              const obj6 = { value: null, done: false };
              obj6[0] = closure_1_6();
              return obj6;
            }
            obj10 = closure_1_0(table[19]);
            tmp24 = table;
          }
        } else if (arg0 === 1) {
          table = 3;
          throw arg1;
        } else {
          if (arg0 !== 2) {
            v0(invite);
            table = 3;
          }
          table = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
      } catch (tmp16) {
        table = tmp;
        throw tmp16;
      }
    }
  }), items3);
  obj = { code, onPressClose, onPressJoin: callback1 };
  let obj2 = code(inviteInstanceId[10]);
  const merged1 = Object.assign(merged);
  const merged2 = Object.assign(stateFromStoresObject);
  const tmp8 = onPressClose(inviteInstanceId[20]);
  obj = { style: items4, bottom: true, children: jsx(code(inviteInstanceId[22]).ThemeContextProvider, { theme: "darker", children: jsx(onPressClose(inviteInstanceId[20]), { code, onPressClose, onPressJoin: callback1 }) }) };
  items4 = [, ];
  ({ flex: arr5[0], paddingContainer: arr5[1] } = tmp2);
  return jsx(code(inviteInstanceId[21]).SafeAreaPaddingView, { style: items4, bottom: true, children: jsx(code(inviteInstanceId[22]).ThemeContextProvider, { theme: "darker", children: jsx(onPressClose(inviteInstanceId[20]), { code, onPressClose, onPressJoin: callback1 }) }) });
};