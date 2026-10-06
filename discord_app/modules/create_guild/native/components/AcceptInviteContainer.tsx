// === Module 12397: AcceptInviteContainer ===

// Module 12397 (AcceptInviteContainer)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4501 */;
import NavigatorHeader from "NavigatorHeader" /* 6017 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import InviteStore from "InviteStore" /* 4877 */;
import createStyles from "createStyles" /* 4896 */;
import size from "module_2" /* 2 */;

let c1, c3, closure_2, closure_3, navigation;

let obj2;
const ThemeTypes = Constants.ThemeTypes;
const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
const jsx = Fragment.jsx;
let obj = { flex: { flex: 1 }, paddingContainer: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_11 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/create_guild/native/components/AcceptInviteContainer.tsx");

export default function AcceptInviteContainer(code) {
  code = code.code;
  const onPressClose = code.onPressClose;
  let inviteInstanceId = code.inviteInstanceId;
  let merged = Object.assign(code, Object.assign({ code: 0, onPressClose: 0, inviteInstanceId: 0 }));
  let stateFromStoresObject;
  let callback;
  const tmp2 = closure_11();
  const isRegistration = merged.isRegistration;
  let obj = code(inviteInstanceId[10]);
  navigation = obj.useNavigation();
  let obj2 = code(inviteInstanceId[11]);
  const items = [InviteStore, stateFromStoresObject, callback];
  stateFromStoresObject = obj2.useStateFromStoresObject(items, function() {
    const invite = InviteStore.getInvite(code);
    let guild;
    const inviteError = InviteStore.getInviteError(code);
    if (invite != null) {
      guild = invite.guild;
    }
    let tmp4 = null != guild && null != GuildStore.getGuild(invite.guild.id);
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
          const _Set = Set;
          if (selfMember != null) {
            roles2 = selfMember.roles;
          }
          if (roles2 == null) {
            roles2 = [];
          }
          const self = this;
          const self2 = this;
          const _Set1 = new _Set(roles2);
          const roles = invite.roles;
          flag = roles.some((id) => !_Set1.has(id.id));
        }
      }
    }
    const obj = { invite, inviteError, isGuildMember: tmp4, guildMember: selfMember };
    if (tmp4) {
      tmp4 = !flag;
    }
    return obj;
  });
  const items1 = [stateFromStoresObject, navigation, onPressClose];
  const layoutEffect = navigation.useLayoutEffect(() => {
    let fn;
    const setOptions = navigation.setOptions;
    if (null != stateFromStoresObject.invite) {
      fn = () => null;
    } else {
      const obj = NavigatorHeader;
      fn = obj.getHeaderBackButton(onPressClose);
    }
    setOptions({ headerLeft: fn });
  }, items1);
  const items2 = [isRegistration, stateFromStoresObject];
  callback = navigation.useCallback(isRegistration(function*() {
    let c2;
    let closure_1;
    let v0;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let tmp;
        let guildMember;
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
            tmp = undefined;
            guildMember = stateFromStoresObject.guildMember;
            if (isRegistration) {
              if (null != guildMember) {
                const flags = guildMember.flags;
                const tmp11 = v0(inviteInstanceId[13]);
                const tmp9 = v0;
                v0 = flags;
                const hasFlag = tmp11.hasFlag;
                if (flags == null) {
                  v0 = 0;
                }
                if (!hasFlag(v0, constants.COMPLETED_ONBOARDING)) {
                  inviteInstanceId = 1;
                  c3 = 1;
                  const obj4 = { value: tmp9(inviteInstanceId[15])(inviteInstanceId[14], inviteInstanceId.paths), done: false };
                  return obj4;
                }
              }
            }
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            tmp = value.default;
            const obj6 = { guildId: guildMember.guildId };
            inviteInstanceId = 2;
            c3 = 1;
            const obj7 = { value: tmp(obj6), done: false };
            return obj7;
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
        return { value: "IconComponent", done: null };
      } catch (tmp14) {
        c3 = 3;
        throw tmp14;
      }
    }
  }), items2);
  const items3 = [stateFromStoresObject, callback, onPressClose, inviteInstanceId, code];
  const callback1 = navigation.useCallback(isRegistration(function*() {
    let closure_129_0;
    let invite;
    let v3;
    if (v3 === 2) {
      v3 = 3;
      const str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let obj;
        v3 = 2;
        const tmp3 = c1;
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
              return obj(...arguments);
            }
            obj = function _transitionToInviteChannel() {
              obj = isRegistration((arg0) => {
                const channel = arg0;
                let c5 = 0;
                let c6 = 0;
                let c4 = 0;
                return (function*(arg0) {
                  let obj4;
                  if (c6 === 2) {
                    c6 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp3 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      return { value, done: true };
                    } else {
                      return { value: "IconComponent", done: null };
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
                          return { value, done: true };
                        } else {
                          closure_2 = tmp;
                          closure_1 = tmp4;
                          if (null != channel) {
                            const obj2 = closure_2_0(transitionToInviteChannel[16]);
                            if (obj2.isGuildScheduledEventInviteEmbed(channel)) {
                              let prop;
                              if (channel != null) {
                                prop = channel.guild_scheduled_event;
                              }
                              if (null == prop) {
                                c6 = 3;
                                return { value: "IconComponent", done: null };
                              } else {
                                closure_1();
                                const tmp8Result = closure_2_0(transitionToInviteChannel[17]);
                                const result = tmp8Result.transitionToEventDetailsFromInvite(prop);
                                c6 = 3;
                                return { value: undefined, done: true };
                              }
                            } else {
                              let id;
                              const guild = channel.guild;
                              if (guild != null) {
                                id = guild.id;
                              }
                              const tmp8Result2 = closure_2_0(transitionToInviteChannel[16]);
                              if (tmp8Result2.isRoleSubscriptionInvite(channel)) {
                                if (null != id) {
                                  c4 = 1;
                                  c5 = 2;
                                  c6 = 1;
                                  const obj7 = { value: obj4.performRoleSubscriptionUpsellRedirect(id), done: false };
                                  obj4 = invite(transitionToInviteChannel[18]);
                                  return obj7;
                                }
                              }
                            }
                          } else {
                            closure_1();
                          }
                          c6 = 3;
                          return { value: "IconComponent", done: null };
                        }
                      } else if (1 === c5) {
                        c4 = 0;
                      } else if (arg0 === 1) {
                        c6 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c4 = 0;
                        c6 = 3;
                        obj = { value, done: true };
                        return obj;
                      } else {
                        c4 = 0;
                      }
                      if (null != channel.channel) {
                        closure_1();
                        const _setTimeout = setTimeout;
                        const timerId = setTimeout(() => {
                          obj = closure_1(closure_2[19]);
                          obj.transitionToInvite(channel);
                        }, 1);
                      } else {
                        closure_1();
                      }
                    } catch (tmp25) {
                      closure_3 = tmp25;
                      if (0 === c4) {
                        c6 = 3;
                        throw tmp25;
                      } else {
                        c5 = 1;
                      }
                    }
                  }
                })();
              });
              return obj(...arguments);
            };
            function join() {
              return obj(...arguments);
            }
            obj = function _join() {
              obj = isRegistration(function*() {
                let obj7;
                if (c2 === 2) {
                  c2 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp2 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    const obj2 = { value, done: true };
                    return obj2;
                  } else {
                    return { value: "IconComponent", done: null };
                  }
                } else {
                  try {
                    c2 = 2;
                    if (0 === c1) {
                      if (arg0 === 1) {
                        c2 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c2 = 3;
                        const obj3 = { value, done: true };
                        return obj3;
                      } else {
                        const inviteKey = tmp3;
                        if (!closure_2_0) {
                          if (null != invite) {
                            let obj6;
                            const obj4 = {
                              inviteKey,
                              context: obj7,
                              callback(arg0) {
                                            closure_1_2(arg0);
                                          }
                            };
                            const acceptInvite = invite(transitionToInviteChannel[19]).acceptInvite;
                            const tmp22 = invite(transitionToInviteChannel[19]);
                            if (null != c2) {
                              const obj5 = { invite_instance_id: tmp24 };
                              obj6 = obj5;
                            } else {
                              obj6 = {};
                            }
                            obj7 = { location: "Accept Invite Page" };
                            const merged = Object.assign(obj6);
                            acceptInvite(obj4);
                          }
                        }
                        c1 = 1;
                        c2 = 1;
                        const obj8 = { value: closure_1_6(), done: false };
                        return obj8;
                      }
                    } else if (arg0 === 1) {
                      c2 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c2 = 3;
                      obj = { value, done: true };
                      return obj;
                    } else {
                      closure_128_2(closure_128_1);
                    }
                    c2 = 3;
                    return { value: "IconComponent", done: null };
                  } catch (tmp15) {
                    c2 = 3;
                    throw tmp15;
                  }
                }
              });
              return obj(...arguments);
            };
            ({ isGuildMember: closure_129_0, invite } = stateFromStoresObject);
            let obj5 = v3(inviteInstanceId[20]);
            let obj4 = { onConfirm: join, onCancel: onPressClose };
            if (!obj5.handleNSFWGuildInvite(invite, obj4)) {
              c1 = 1;
              v3 = 1;
              let obj6 = { value: join(), done: false };
              return obj6;
            }
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          obj = { value, done: true };
          return obj;
        }
        v3 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp4) {
        v3 = 3;
        throw tmp4;
      }
    }
  }), items3);
  onPressClose(inviteInstanceId[21]);
  const merged1 = Object.assign(merged);
  const merged2 = Object.assign(stateFromStoresObject);
  let tmp11 = <tmp8 code={code} onPressClose={onPressClose} onPressJoin={callback1} />;
  const items4 = [, ];
  ({ flex: arr5[0], paddingContainer: arr5[1] } = tmp2);
  const SafeAreaPaddingView = code(inviteInstanceId[22]).SafeAreaPaddingView;
  let obj5 = { theme: ThemeTypes.DARK, children: tmp11 };
  return <SafeAreaPaddingView style={items4} bottom>{null}</SafeAreaPaddingView>;
};