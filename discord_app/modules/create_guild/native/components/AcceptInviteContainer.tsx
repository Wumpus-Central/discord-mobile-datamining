// === Module 13055: AcceptInviteContainer ===

// Module 13055 (AcceptInviteContainer)
import nativeDefault from "native" /* 576 */;
import NavigatorHeader from "NavigatorHeader" /* 5927 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2105 */;
import GuildStore from "GuildStore" /* 2064 */;
import InviteStore from "InviteStore" /* 4811 */;

require = fn;
const ThemeTypes = fn(1074).ThemeTypes;
const GuildMemberFlags = fn(4448).GuildMemberFlags;
const jsx = fn(21).jsx;
const createStyles = fn(4827);
let obj2 = { flex: { flex: 1 }, paddingContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH } };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/create_guild/native/components/AcceptInviteContainer.tsx");

export default function AcceptInviteContainer(code) {
  code = code.code;
  const onPressClose = code.onPressClose;
  let inviteInstanceId = code.inviteInstanceId;
  let merged = Object.assign(code, Object.assign({ code: 0, onPressClose: 0, inviteInstanceId: 0 }));
  let stateFromStoresObject;
  let callback;
  const isRegistration = merged.isRegistration;
  const tmp2 = closure_11();
  const navigation = code(inviteInstanceId[10]).useNavigation();
  let obj = code(inviteInstanceId[10]);
  const items = [InviteStore, stateFromStoresObject, callback];
  stateFromStoresObject = code(inviteInstanceId[11]).useStateFromStoresObject(items, () => {
    const invite = InviteStore.getInvite(code);
    let guild;
    const inviteError = InviteStore.getInviteError(code);
    if (invite != null) {
      guild = invite.guild;
    }
    let tmp4 = null != guild;
    if (tmp4) {
      tmp4 = null != GuildStore.getGuild(invite.guild.id);
    }
    let guild1;
    if (invite != null) {
      guild1 = invite.guild;
    }
    let selfMember = null;
    if (null != guild1) {
      selfMember = GuildMemberStore.getSelfMember(invite.guild.id);
    }
    let flag = false;
    if (tmp4) {
      let roles1;
      if (invite != null) {
        roles1 = invite.roles;
      }
      flag = false;
      if (null != roles1) {
        flag = false;
        if (invite.roles.length > 0) {
          let roles2;
          if (selfMember != null) {
            roles2 = selfMember.roles;
          }
          if (roles2 == null) {
            roles2 = [];
          }
          const roles = invite.roles;
          flag = roles.some((id) => !set.has(id.id));
          const set = new Set(roles2);
        }
      }
    }
    const obj = { invite, inviteError, isGuildMember: null, guildMember: null };
    if (tmp4) {
      tmp4 = !flag;
    }
    obj.isGuildMember = tmp4;
    obj.guildMember = selfMember;
    return obj;
  });
  const items1 = [stateFromStoresObject, navigation, onPressClose];
  const layoutEffect = navigation.useLayoutEffect(() => {
    if (null != stateFromStoresObject.invite) {
      let fn = () => null;
    } else {
      fn = NavigatorHeader.getHeaderBackButton(onPressClose);
    }
    navigation.setOptions({ headerLeft: fn });
  }, items1);
  const items2 = [isRegistration, stateFromStoresObject];
  callback = navigation.useCallback(isRegistration(function*() {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === inviteInstanceId) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp2;
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            const guildMember = stateFromStoresObject.guildMember;
            closure_129_0 = guildMember;
            if (isRegistration) {
              if (null != guildMember) {
                const flags = guildMember.flags;
                let v0 = flags;
                if (flags == null) {
                  v0 = 0;
                }
                if (!obj5.hasFlag(v0, constants.COMPLETED_ONBOARDING)) {
                  inviteInstanceId = 1;
                  c3 = 1;
                  const obj4 = { value: tmp10(tmp11[15])(tmp11[14], tmp11.paths), done: false };
                  return obj4;
                }
                obj5 = v0(inviteInstanceId[13]);
                tmp10 = v0;
              }
            }
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_129_1 = value.default;
            const obj7 = { guildId: closure_129_0.guildId };
            inviteInstanceId = 2;
            c3 = 1;
            const obj8 = { value: closure_129_1(obj7), done: false };
            return obj8;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj = { value, done: true };
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
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v3 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            function transitionToInviteChannel() {
              const self = this;
              const apply = closure_3.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            }
            closure_3 = function _transitionToInviteChannel() {
              const self = this;
              const tmp = isRegistration(function*(arg0) {
                if (c6 === 2) {
                  c6 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp6 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    return { value: "HermesInternal", done: null };
                  }
                } else {
                  try {
                    c6 = 2;
                    if (0 === c5) {
                      if (arg0 === 1) {
                        c6 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c6 = 3;
                        const obj5 = { value, done: true };
                        return obj5;
                      } else {
                        closure_2 = tmp3;
                        closure_1 = tmp7;
                        closure_129_0 = closure_0;
                        if (null != closure_0) {
                          if (obj2.isGuildScheduledEventInviteEmbed(closure_0)) {
                            let prop;
                            if (closure_0 != null) {
                              prop = closure_0.guild_scheduled_event;
                            }
                            if (null == prop) {
                              c6 = 3;
                              return { value: "HermesInternal", done: null };
                            } else {
                              closure_1();
                              const result = v3(transitionToInviteChannel[17]).transitionToEventDetailsFromInvite(prop);
                              c6 = 3;
                              const obj6 = { value: undefined, done: true };
                              return obj6;
                            }
                          } else {
                            const guild = closure_0.guild;
                            if (guild != null) {
                              const id = guild.id;
                            }
                            if (tmp11Result2.isRoleSubscriptionInvite(closure_0)) {
                              if (null != id) {
                                c4 = 1;
                                c5 = 2;
                                c6 = 1;
                                const obj7 = { value: invite(transitionToInviteChannel[18]).performRoleSubscriptionUpsellRedirect(id), done: false };
                                return obj7;
                              }
                            }
                            tmp11Result2 = v3(transitionToInviteChannel[16]);
                          }
                          obj2 = v3(transitionToInviteChannel[16]);
                        } else {
                          closure_1();
                        }
                        c6 = 3;
                      }
                    } else if (1 === tmp7) {
                      c4 = 0;
                    } else if (arg0 === 1) {
                      c6 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c4 = 0;
                      c6 = 3;
                      const obj = { value, done: true };
                      return obj;
                    } else {
                      c4 = 0;
                    }
                    if (null != closure_129_0.channel) {
                      closure_1();
                      const _setTimeout = setTimeout;
                      const timerId = setTimeout(() => {
                        closure_1(closure_2[19]).transitionToInvite(closure_1_0);
                      }, 1);
                    } else {
                      closure_1();
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
              });
              closure_3 = tmp;
              const apply = tmp.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            };
            function join() {
              const self = this;
              const apply = closure_4.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            }
            closure_4 = function _join() {
              const self = this;
              const tmp = isRegistration(function*() {
                const inviteKey = tmp4;
                if (!v3) {
                  if (null != invite) {
                    let obj4 = { inviteKey, context: null, callback: null };
                    if (null != c2) {
                      let obj6 = { invite_instance_id: tmp24 };
                    } else {
                      obj6 = {};
                    }
                    const merged = Object.assign(obj6);
                    obj4.context = { location: "Accept Invite Page" };
                    obj4.callback = function callback(arg0) {
                      closure_1_2(arg0);
                    };
                    obj4 = invite(transitionToInviteChannel[19]).acceptInvite(obj4);
                    invite(transitionToInviteChannel[19]);
                  }
                }
                yield closure_1_6();
                if (arg0 !== 2) {
                  closure_128_2(closure_128_1);
                  c2 = 3;
                }
                return value;
              });
              closure_4 = tmp;
              const apply = tmp.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            };
            ({ isGuildMember: c0, invite } = stateFromStoresObject);
            let obj4 = { onConfirm: join, onCancel: onPressClose };
            if (!obj5.handleNSFWGuildInvite(invite, obj4)) {
              c1 = 1;
              v3 = 1;
              let obj6 = { value: join(), done: false };
              return obj6;
            }
            obj5 = v3(inviteInstanceId[20]);
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          let obj = { value, done: true };
          return obj;
        }
        v3 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp5) {
        v3 = tmp;
        throw tmp5;
      }
    }
  }), items3);
  let obj2 = code(inviteInstanceId[11]);
  let obj3 = { code, onPressClose, onPressJoin: callback1 };
  const merged1 = Object.assign(merged);
  const merged2 = Object.assign(stateFromStoresObject);
  const tmp8 = onPressClose(inviteInstanceId[21]);
  let obj4 = { style: null, bottom: true, children: null };
  const items4 = [, ];
  ({ flex: arr5[0], paddingContainer: arr5[1] } = tmp2);
  obj4.style = items4;
  const tmp11 = jsx(onPressClose(inviteInstanceId[21]), { code, onPressClose, onPressJoin: callback1 });
  obj4.children = jsx(code(inviteInstanceId[23]).ThemeContextProvider, { theme: ThemeTypes.DARK, children: jsx(onPressClose(inviteInstanceId[21]), { code, onPressClose, onPressJoin: callback1 }) });
  return jsx(code(inviteInstanceId[22]).SafeAreaPaddingView, { style: null, bottom: true, children: null });
};