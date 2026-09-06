// discord_app/modules/create_guild/native/components/AcceptInviteContainer.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import InviteStore from "../../../../stores/InviteStore.tsx";

require = fn;
const GuildMemberFlags = fn(4187).GuildMemberFlags;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { flex: { flex: 1 }, paddingContainer: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.paddingContainer = createStyles;
let closure_10 = createStyles.createStyles(createStyles);
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
  let obj = code(inviteInstanceId[9]);
  const navigation = obj.useNavigation();
  const tmp2 = closure_10();
  const items = [InviteStore, stateFromStoresObject, callback];
  stateFromStoresObject = code(inviteInstanceId[10]).useStateFromStoresObject(items, () => {
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
          const set = new Set(roles1);
          roles = invite.roles;
          flag = roles.some((id) => !set.has(id.id));
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
  callback = navigation.useCallback(
    isRegistration(function* (arg0, value) {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp2;
              closure_129_0 = undefined;
              closure_129_1 = undefined;
              const guildMember = stateFromStoresObject.guildMember;
              closure_129_0 = guildMember;
              if (isRegistration) {
                if (null != guildMember) {
                  let obj4 = v0(inviteInstanceId[12]);
                  const flags = guildMember.flags;
                  v0 = flags;
                  if (flags == null) {
                    v0 = 0;
                  }
                  if (!obj4.hasFlag(v0, constants.COMPLETED_ONBOARDING)) {
                    inviteInstanceId = 1;
                    c3 = 1;
                    const obj1 = { value: tmp10(tmp11[14])(tmp11[13], tmp11.paths), done: false };
                    return obj1;
                  }
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
              const obj2 = { value, done: true };
              return obj2;
            } else {
              closure_129_1 = value.default;
              const obj3 = { guildId: closure_129_0.guildId };
              inviteInstanceId = 2;
              c3 = 1;
              obj4 = { value: closure_129_1(obj3), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp14) {
          c3 = tmp;
          throw tmp14;
        }
      }
    }),
    items2,
  );
  const items3 = [stateFromStoresObject, callback, onPressClose, inviteInstanceId, code];
  const callback1 = navigation.useCallback(
    isRegistration(function* (arg0, value) {
      if (inviteInstanceId === 2) {
        inviteInstanceId = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          inviteInstanceId = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              inviteInstanceId = 3;
              throw value;
            } else if (arg0 === 2) {
              inviteInstanceId = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_128_0 = undefined;
              closure_128_1 = function transitionToInviteChannel() {
                const self = this;
                const apply = closure_2.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              };
              closure_128_2 = function _transitionToInviteChannel() {
                const self = this;
                const tmp = isRegistration(function* (arg0, value) {
                  if (c6 === 2) {
                    c6 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp6 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      let obj = { value, done: true };
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
                          throw value;
                        } else if (arg0 === 2) {
                          c6 = 3;
                          obj = { value, done: true };
                          return obj;
                        } else {
                          closure_2 = tmp3;
                          closure_1 = tmp7;
                          closure_129_0 = closure_0;
                          if (null != closure_0) {
                            let obj1 = closure_2_0(closure_2_2[15]);
                            if (obj1.isGuildScheduledEventInviteEmbed(tmp37)) {
                              let prop;
                              if (tmp37 != null) {
                                prop = tmp37.guild_scheduled_event;
                              }
                              if (null == prop) {
                                c6 = 3;
                                return { value: "HermesInternal", done: null };
                              } else {
                                closure_1();
                                let tmp11Result = tmp11(tmp12[16]);
                                const result = tmp11Result.transitionToEventDetailsFromInvite(prop);
                                c6 = 3;
                                obj1 = { value: undefined, done: true };
                                return obj1;
                              }
                            } else {
                              const guild = tmp37.guild;
                              if (guild != null) {
                                const id = guild.id;
                              }
                              tmp11Result = tmp11(tmp12[15]);
                              if (tmp11Result.isRoleSubscriptionInvite(tmp37)) {
                                if (null != id) {
                                  c4 = 1;
                                  c5 = 2;
                                  c6 = 1;
                                  const obj2 = {
                                    value: v1(tmp12[17]).performRoleSubscriptionUpsellRedirect(id),
                                    done: false,
                                  };
                                  return obj2;
                                }
                              }
                            }
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
                        obj = { value, done: true };
                        return obj;
                      } else {
                        c4 = 0;
                      }
                      if (null != closure_129_0.channel) {
                        closure_1();
                        const _setTimeout = setTimeout;
                        const timerId = setTimeout(() => {
                          closure_1(closure_2[18]).transitionToInvite(closure_1_0);
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
                closure_2 = tmp;
                const apply = tmp.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              };
              const invite = stateFromStoresObject.invite;
              closure_128_0 = invite;
              if (obj10.handleNSFWGuildInvite(invite)) {
                inviteInstanceId = 3;
                let obj1 = { value: onPressClose(), done: true };
                return obj1;
              } else {
                if (!stateFromStoresObject.isGuildMember) {
                  if (null != invite) {
                    let obj2 = { inviteKey: code, context: null, callback: null };
                    if (null != inviteInstanceId) {
                      const obj3 = { invite_instance_id: tmp26 };
                      let obj4 = obj3;
                    } else {
                      obj4 = {};
                    }
                    const obj5 = { location: "Accept Invite Page" };
                    const merged = Object.assign(obj4);
                    obj2.context = obj5;
                    obj2.callback = function callback(arg0) {
                      v1(arg0);
                    };
                    obj2 = v1(tmp23[18]).acceptInvite(obj2);
                    const obj11 = v1(tmp23[18]);
                  }
                }
                v1 = 1;
                inviteInstanceId = 1;
                const obj6 = { value: callback(), done: false };
                return obj6;
              }
              obj10 = tmp2(inviteInstanceId[19]);
              tmp23 = inviteInstanceId;
            }
          } else if (arg0 === 1) {
            inviteInstanceId = 3;
            throw value;
          } else {
            if (arg0 !== 2) {
              closure_128_1(closure_128_0);
              inviteInstanceId = 3;
            }
            inviteInstanceId = 3;
            obj = { value, done: true };
            return obj;
          }
        } catch (tmp16) {
          inviteInstanceId = tmp;
          throw tmp16;
        }
      }
    }),
    items3,
  );
  obj = { code, onPressClose, onPressJoin: callback1 };
  let obj2 = code(inviteInstanceId[10]);
  const merged1 = Object.assign(merged);
  const merged2 = Object.assign(stateFromStoresObject);
  const tmp8 = onPressClose(inviteInstanceId[20]);
  obj = {
    style: null,
    bottom: true,
    children: jsx(code(inviteInstanceId[22]).ThemeContextProvider, {
      theme: "darker",
      children: jsx(onPressClose(inviteInstanceId[20]), { code, onPressClose, onPressJoin: callback1 }),
    }),
  };
  const items4 = [,];
  ({ flex: arr5[0], paddingContainer: arr5[1] } = tmp2);
  obj.style = items4;
  return jsx(code(inviteInstanceId[21]).SafeAreaPaddingView, {
    style: null,
    bottom: true,
    children: jsx(code(inviteInstanceId[22]).ThemeContextProvider, {
      theme: "darker",
      children: jsx(onPressClose(inviteInstanceId[20]), { code, onPressClose, onPressJoin: callback1 }),
    }),
  });
}
