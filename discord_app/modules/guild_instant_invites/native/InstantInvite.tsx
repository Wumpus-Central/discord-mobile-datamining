// discord_app/modules/guild_instant_invites/native/InstantInvite.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import router_utils from "../../routing/router_utils.tsx";
import intl3 from "../../../intl/index.native.tsx";
import ChannelRecord from "../../../records/ChannelRecord.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import actions_AlertActionCreatorsDefault from "../../../actions/native/AlertActionCreators.tsx";
import ContextMenu from "../../../design/components/ContextMenu/native/ContextMenu.native.tsx";
import ArrowSmallRightIcon from "../../../design/components/Icon/native/redesign/generated/ArrowSmallRightIcon.tsx";
import InstantInviteIconsDefault from "InstantInviteIcons.tsx";
import InstantInviteCode from "InstantInviteCode.tsx";
import InstantInviteCreatorDefault from "InstantInviteCreator.tsx";
import guild_instant_invites_InstantInviteUtils from "InstantInviteUtils.tsx";
import InviteRolesDisplayDefault from "../../instant_invite/native/InviteRolesDisplay.tsx";
import InstantInviteUsesLabelDefault from "InstantInviteUsesLabel.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../_runtime/00019_react.js";
import UserStore from "../../../stores/UserStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let channel, dependencyMap;

let closure_12;
let obj2;
let unpackModuleId;
let closure_3 = ["ref"];
let closure_4 = ["ref"];
const View = react_native.View;
let closure_8 = ChannelRecord.createChannelRecordFromInvite;
const Routes = Constants.Routes;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let obj = {
  creatorWrapper: obj2,
  gameWrapper: { flex: 1, flexDirection: "row", alignItems: "center", gap: 8 },
  gameText: { flex: 1 },
};
obj2 = { marginTop: nativeDefault.space.PX_8, flex: 1 };
let closure_13 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let closure_2;
      let first;
      let items1;
      let items2;
      let items3;
      let obj8;
      let tmp9;
      let tmp = channel;
      let obj = channel(576);
      const cResult = obj.c(43);
      channel = channel.channel;
      const tmp4 = closure_13();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      let linkedLobby = channel.linkedLobby;
      let linked_by;
      const tmp7 = cResult[1];
      if (linkedLobby != null) {
        linked_by = linkedLobby.linked_by;
      }
      if (tmp7 !== linked_by) {
        const linkedLobby2 = channel.linkedLobby;
        let linked_by1;
        if (linkedLobby2 != null) {
          linked_by1 = linkedLobby2.linked_by;
        }
        const fn = function s() {
          const linkedLobby = channel.linkedLobby;
          let linked_by;
          const getUser = UserStore.getUser;
          if (linkedLobby != null) {
            linked_by = linkedLobby.linked_by;
          }
          return getUser(linked_by);
        };
        cResult[1] = linked_by1;
        cResult[2] = fn;
        tmp9 = fn;
      } else {
        tmp9 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp9);
      const linkedLobby3 = channel.linkedLobby;
      let application_id;
      const useGetOrFetchApplication = tmp(6663).useGetOrFetchApplication;
      tmp(6663);
      if (linkedLobby3 != null) {
        application_id = linkedLobby3.application_id;
      }
      const getOrFetchApplication = useGetOrFetchApplication(application_id);
      const tmpResult4 = tmp(10670);
      const canUnlinkLobbyChannel = tmpResult4.useCanUnlinkLobbyChannel(channel);
      let str;
      const id = channel.id;
      const tmp17 = canUnlinkLobbyChannel(10671);
      if (getOrFetchApplication != null) {
        str = getOrFetchApplication.name;
      }
      if (str == null) {
        str = "";
      }
      const tmp17Result = tmp17(id, str);
      dependencyMap = tmp17Result;
      if (cResult[3] === canUnlinkLobbyChannel) {
        let tmp19;
        let tmp20;
        if (cResult[4] === tmp17Result) {
          tmp19 = cResult[5];
        }
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          let intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t.aW2YlJ);
          cResult[6] = stringResult;
          tmp20 = stringResult;
        } else {
          tmp20 = cResult[6];
        }
        if (cResult[7] === channel.guild_id) {
          let tmp22;
          let tmp23;
          let tmp25;
          if (cResult[8] === channel.id) {
            tmp22 = cResult[9];
          }
          const _Symbol2 = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            let intl2 = tmp(1126).intl;
            const stringResult1 = intl2.string(tmp(1126).t.JmUENg);
            cResult[10] = stringResult1;
            tmp23 = stringResult1;
          } else {
            tmp23 = cResult[10];
          }
          if (cResult[11] !== tmp19) {
            const obj2 = {
              label: tmp23,
              iconSource: canUnlinkLobbyChannel(10674).revoke,
              variant: "destructive",
              action: tmp19,
            };
            cResult[11] = tmp19;
            cResult[12] = obj2;
            tmp25 = obj2;
          } else {
            tmp25 = cResult[12];
          }
          if (cResult[13] === tmp22) {
            let tmp26;
            let tmp27;
            if (cResult[14] === tmp25) {
              tmp26 = cResult[15];
            }
            if (cResult[16] !== getOrFetchApplication) {
              const obj3 = { game: getOrFetchApplication, size: tmp(6667).GameIconSizes.SIZE_24 };
              const tmp16Result = canUnlinkLobbyChannel(6667);
              const tmp30 = closure_11(tmp16Result, obj3);
              cResult[16] = getOrFetchApplication;
              cResult[17] = tmp30;
              tmp27 = tmp30;
            } else {
              tmp27 = cResult[17];
            }
            let name;
            if (getOrFetchApplication != null) {
              name = getOrFetchApplication.name;
            }
            if (cResult[18] === tmp4.gameText) {
              let tmp32;
              if (cResult[19] === name) {
                tmp32 = cResult[20];
              }
              if (cResult[21] === tmp4.gameWrapper) {
                if (cResult[22] === tmp32) {
                  let tmp35;
                  if (cResult[23] === tmp27) {
                    tmp35 = cResult[24];
                  }
                  const _Symbol3 = Symbol;
                  if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                    class R {
                      constructor(ref) {
                        let intl;
                        const obj = {
                          size: "sm",
                          variant: "secondary",
                          icon: canUnlinkLobbyChannel(closure_2[19]).more,
                          accessibilityLabel: intl.string(channel(closure_2[16]).t.DEoVWZ),
                          ref: ref.ref,
                        };
                        const tmp = _objectWithoutProperties(ref.ref, closure_1_3);
                        const IconButton = channel(closure_2[22]).IconButton;
                        intl = channel(closure_2[16]).intl;
                        const merged = Object.assign(tmp);
                        return closure_1_11(IconButton, obj);
                      }
                    }
                    cResult[25] = R;
                  } else {
                    class R {
                      constructor(ref) {
                        let intl;
                        const obj = {
                          size: "sm",
                          variant: "secondary",
                          icon: canUnlinkLobbyChannel(closure_2[19]).more,
                          accessibilityLabel: intl.string(channel(closure_2[16]).t.DEoVWZ),
                          ref: ref.ref,
                        };
                        const tmp = _objectWithoutProperties(ref.ref, closure_1_3);
                        const IconButton = channel(closure_2[22]).IconButton;
                        intl = channel(closure_2[16]).intl;
                        const merged = Object.assign(tmp);
                        return closure_1_11(IconButton, obj);
                      }
                    }
                  }
                  if (cResult[26] !== tmp26) {
                    class R {
                      constructor(ref) {
                        let intl;
                        const obj = {
                          size: "sm",
                          variant: "secondary",
                          icon: canUnlinkLobbyChannel(closure_2[19]).more,
                          accessibilityLabel: intl.string(channel(closure_2[16]).t.DEoVWZ),
                          ref: ref.ref,
                        };
                        const tmp = _objectWithoutProperties(ref.ref, closure_1_3);
                        const IconButton = channel(closure_2[22]).IconButton;
                        intl = channel(closure_2[16]).intl;
                        const merged = Object.assign(tmp);
                        return closure_1_11(IconButton, obj);
                      }
                    }
                    const obj4 = { items: tmp26, children: R };
                    cResult[26] = tmp26;
                    cResult[27] = closure_11(tmp(7579).ContextMenu, obj4);
                    const tmp41 = closure_11(tmp(7579).ContextMenu, obj4);
                  } else {
                    class R {
                      constructor(ref) {
                        let intl;
                        const obj = {
                          size: "sm",
                          variant: "secondary",
                          icon: canUnlinkLobbyChannel(closure_2[19]).more,
                          accessibilityLabel: intl.string(channel(closure_2[16]).t.DEoVWZ),
                          ref: ref.ref,
                        };
                        const tmp = _objectWithoutProperties(ref.ref, closure_1_3);
                        const IconButton = channel(closure_2[22]).IconButton;
                        intl = channel(closure_2[16]).intl;
                        const merged = Object.assign(tmp);
                        return closure_1_11(IconButton, obj);
                      }
                    }
                  }
                  if (cResult[28] === tmp35) {
                    class R {
                      constructor(ref) {
                        let intl;
                        const obj = {
                          size: "sm",
                          variant: "secondary",
                          icon: canUnlinkLobbyChannel(closure_2[19]).more,
                          accessibilityLabel: intl.string(channel(closure_2[16]).t.DEoVWZ),
                          ref: ref.ref,
                        };
                        const tmp = _objectWithoutProperties(ref.ref, closure_1_3);
                        const IconButton = channel(closure_2[22]).IconButton;
                        intl = channel(closure_2[16]).intl;
                        const merged = Object.assign(tmp);
                        return closure_1_11(IconButton, obj);
                      }
                    }
                    if (cResult[31] !== channel) {
                      class R {
                        constructor(ref) {
                          let intl;
                          const obj = {
                            size: "sm",
                            variant: "secondary",
                            icon: canUnlinkLobbyChannel(closure_2[19]).more,
                            accessibilityLabel: intl.string(channel(closure_2[16]).t.DEoVWZ),
                            ref: ref.ref,
                          };
                          const tmp = _objectWithoutProperties(ref.ref, closure_1_3);
                          const IconButton = channel(closure_2[22]).IconButton;
                          intl = channel(closure_2[16]).intl;
                          const merged = Object.assign(tmp);
                          return closure_1_11(IconButton, obj);
                        }
                      }
                      const obj5 = { channel };
                      cResult[31] = channel;
                      cResult[32] = closure_11(tmp(10678).InstantInviteDetails, obj5);
                      const tmp46 = closure_11(tmp(10678).InstantInviteDetails, obj5);
                    } else {
                      class R {
                        constructor(ref) {
                          let intl;
                          const obj = {
                            size: "sm",
                            variant: "secondary",
                            icon: canUnlinkLobbyChannel(closure_2[19]).more,
                            accessibilityLabel: intl.string(channel(closure_2[16]).t.DEoVWZ),
                            ref: ref.ref,
                          };
                          const tmp = _objectWithoutProperties(ref.ref, closure_1_3);
                          const IconButton = channel(closure_2[22]).IconButton;
                          intl = channel(closure_2[16]).intl;
                          const merged = Object.assign(tmp);
                          return closure_1_11(IconButton, obj);
                        }
                      }
                    }
                    if (cResult[33] === channel.guild_id) {
                      class R {
                        constructor(ref) {
                          let intl;
                          const obj = {
                            size: "sm",
                            variant: "secondary",
                            icon: canUnlinkLobbyChannel(closure_2[19]).more,
                            accessibilityLabel: intl.string(channel(closure_2[16]).t.DEoVWZ),
                            ref: ref.ref,
                          };
                          const tmp = _objectWithoutProperties(ref.ref, closure_1_3);
                          const IconButton = channel(closure_2[22]).IconButton;
                          intl = channel(closure_2[16]).intl;
                          const merged = Object.assign(tmp);
                          return closure_1_11(IconButton, obj);
                        }
                      }
                      if (cResult[36] === tmp4.creatorWrapper) {
                        class R {
                          constructor(ref) {
                            let intl;
                            const obj = {
                              size: "sm",
                              variant: "secondary",
                              icon: canUnlinkLobbyChannel(closure_2[19]).more,
                              accessibilityLabel: intl.string(channel(closure_2[16]).t.DEoVWZ),
                              ref: ref.ref,
                            };
                            const tmp = _objectWithoutProperties(ref.ref, closure_1_3);
                            const IconButton = channel(closure_2[22]).IconButton;
                            intl = channel(closure_2[16]).intl;
                            const merged = Object.assign(tmp);
                            return closure_1_11(IconButton, obj);
                          }
                        }
                        if (cResult[39] === tmp42) {
                          class R {
                            constructor(ref) {
                              let intl;
                              const obj = {
                                size: "sm",
                                variant: "secondary",
                                icon: canUnlinkLobbyChannel(closure_2[19]).more,
                                accessibilityLabel: intl.string(channel(closure_2[16]).t.DEoVWZ),
                                ref: ref.ref,
                              };
                              const tmp = _objectWithoutProperties(ref.ref, closure_1_3);
                              const IconButton = channel(closure_2[22]).IconButton;
                              intl = channel(closure_2[16]).intl;
                              const merged = Object.assign(tmp);
                              return closure_1_11(IconButton, obj);
                            }
                          }
                        }
                        const obj6 = { children: items1 };
                        items1 = [tmp42, tmp45, tmp50];
                        cResult[39] = tmp42;
                        cResult[40] = tmp45;
                        cResult[41] = tmp50;
                        cResult[42] = closure_12(tmp(5995).Card, obj6);
                        const tmp56 = closure_12(tmp(5995).Card, obj6);
                      }
                      const obj7 = { direction: "horizontal", align: "flex-end", children: closure_11(View, obj8) };
                      obj8 = { style: tmp4.creatorWrapper, children: tmp47 };
                      const Stack = tmp(5593).Stack;
                      cResult[36] = tmp4.creatorWrapper;
                      cResult[37] = tmp47;
                      cResult[38] = closure_11(Stack, obj7);
                      const tmp53 = closure_11(Stack, obj7);
                    }
                    const obj9 = { user: stateFromStores, guildId: channel.guild_id };
                    cResult[33] = channel.guild_id;
                    cResult[34] = stateFromStores;
                    cResult[35] = closure_11(canUnlinkLobbyChannel(10679), obj9);
                    const tmp49 = closure_11(canUnlinkLobbyChannel(10679), obj9);
                  }
                  const obj10 = { direction: "horizontal", justify: "space-between", children: items2 };
                  items2 = [tmp35, tmp40];
                  cResult[28] = tmp35;
                  cResult[29] = tmp40;
                  cResult[30] = closure_12(tmp(5593).Stack, obj10);
                  const tmp44 = closure_12(tmp(5593).Stack, obj10);
                }
              }
              const obj11 = { style: tmp4.gameWrapper, children: items3 };
              items3 = [tmp27, tmp32];
              const tmp38 = closure_12(View, obj11);
              cResult[21] = tmp4.gameWrapper;
              cResult[22] = tmp32;
              cResult[23] = tmp27;
              cResult[24] = tmp38;
              tmp35 = tmp38;
            }
            const obj12 = {
              ellipsizeMode: "tail",
              lineClamp: 1,
              variant: "text-lg/bold",
              style: tmp4.gameText,
              children: name,
            };
            const tmp34 = closure_11(tmp(4886).Text, obj12);
            cResult[18] = tmp4.gameText;
            cResult[19] = name;
            cResult[20] = tmp34;
            tmp32 = tmp34;
          }
          const items4 = [tmp22, tmp25];
          cResult[13] = tmp22;
          cResult[14] = tmp25;
          cResult[15] = items4;
          tmp26 = items4;
        }
        const obj13 = {
          label: tmp20,
          IconComponent: tmp(10672).ArrowSmallRightIcon,
          action() {
            const obj = router_utils;
            obj.transitionTo(Routes.CHANNEL(channel.guild_id, channel.id));
          },
        };
        cResult[7] = channel.guild_id;
        cResult[8] = channel.id;
        cResult[9] = obj13;
        tmp22 = obj13;
      }
      const fn2 = function x() {
        let intl;
        let intl2;
        if (canUnlinkLobbyChannel) {
          closure_2();
        } else {
          const obj = { title: intl.string(intl3.t.JmUENg), body: intl2.string(intl3.t.SrvsML) };
          const show = actions_AlertActionCreatorsDefault.show;
          actions_AlertActionCreatorsDefault;
          intl = intl3.intl;
          intl2 = intl3.intl;
          show(obj);
        }
      };
      cResult[3] = canUnlinkLobbyChannel;
      cResult[4] = tmp17Result;
      cResult[5] = fn2;
      tmp19 = fn2;
    }
  : (channel) => {
      let closure_2;
      let items3;
      let items4;
      let items5;
      let name;
      let obj10;
      let obj9;
      channel = channel.channel;
      let canUnlinkLobbyChannel;
      dependencyMap = undefined;
      let action;
      const tmp = closure_13();
      let obj = channel(504);
      let items = [UserStore];
      const stateFromStores = obj.useStateFromStores(items, () => {
        const linkedLobby = channel.linkedLobby;
        let linked_by;
        const getUser = UserStore.getUser;
        if (linkedLobby != null) {
          linked_by = linkedLobby.linked_by;
        }
        return getUser(linked_by);
      });
      let linkedLobby = channel.linkedLobby;
      let application_id;
      const useGetOrFetchApplication = channel(6663).useGetOrFetchApplication;
      channel(6663);
      if (linkedLobby != null) {
        application_id = linkedLobby.application_id;
      }
      const getOrFetchApplication = useGetOrFetchApplication(application_id);
      const tmp2Result = channel(10670);
      canUnlinkLobbyChannel = tmp2Result.useCanUnlinkLobbyChannel(channel);
      let str;
      const id = channel.id;
      const tmp10 = canUnlinkLobbyChannel(10671);
      if (getOrFetchApplication != null) {
        str = getOrFetchApplication.name;
      }
      if (str == null) {
        str = "";
      }
      const tmp10Result = tmp10(id, str);
      dependencyMap = tmp10Result;
      const items1 = [canUnlinkLobbyChannel, tmp10Result];
      action = react.useCallback(() => {
        let intl;
        let intl2;
        if (canUnlinkLobbyChannel) {
          closure_2();
        } else {
          const obj = { title: intl.string(intl3.t.JmUENg), body: intl2.string(intl3.t.SrvsML) };
          const show = actions_AlertActionCreatorsDefault.show;
          actions_AlertActionCreatorsDefault;
          intl = intl3.intl;
          intl2 = intl3.intl;
          show(obj);
        }
      }, items1);
      const items2 = [, ,];
      ({ guild_id: arr3[0], id: arr3[1] } = channel);
      items2[2] = action;
      const memo = react.useMemo(() => {
        let intl;
        let intl2;
        let obj = {
          label: intl.string(intl3.t.aW2YlJ),
          IconComponent: ArrowSmallRightIcon.ArrowSmallRightIcon,
          action() {
            const obj = channel(closure_2[18]);
            obj.transitionTo(Routes.CHANNEL(closure_1_0.guild_id, closure_1_0.id));
          },
        };
        intl = intl3.intl;
        const items = [obj];
        const obj2 = {
          label: intl2.string(intl3.t.JmUENg),
          iconSource: InstantInviteIconsDefault.revoke,
          variant: "destructive",
          action,
        };
        intl2 = intl3.intl;
        items[1] = obj2;
        return items;
      }, items2);
      const Card = tmp2(5995).Card;
      let obj2 = { style: tmp.gameWrapper, children: items3 };
      const Stack = tmp2(5593).Stack;
      const obj3 = { game: getOrFetchApplication, size: channel(6667).GameIconSizes.SIZE_24 };
      const tmp9Result = canUnlinkLobbyChannel(6667);
      items3 = [closure_11(tmp9Result, obj3)];
      const obj4 = {
        ellipsizeMode: "tail",
        lineClamp: 1,
        variant: "text-lg/bold",
        style: tmp.gameText,
        children: name,
      };
      name = undefined;
      const Text = tmp2(4886).Text;
      if (getOrFetchApplication != null) {
        name = getOrFetchApplication.name;
      }
      const obj5 = { children: items5 };
      const obj6 = { direction: "horizontal", justify: "space-between", children: items4 };
      items3[1] = closure_11(Text, obj4);
      items4 = [closure_12(View, obj2)];
      const obj7 = {
        items: memo,
        children(ref) {
          let intl;
          const merged = Object.assign(ref, Object.assign({ ref: 0 }));
          const obj = {
            size: "sm",
            variant: "secondary",
            icon: canUnlinkLobbyChannel(closure_2[19]).more,
            accessibilityLabel: intl.string(channel(closure_2[16]).t.DEoVWZ),
            ref: ref.ref,
          };
          const IconButton = channel(closure_2[22]).IconButton;
          intl = channel(closure_2[16]).intl;
          const merged1 = Object.assign(merged);
          return closure_1_11(IconButton, obj);
        },
      };
      items4[1] = closure_11(channel(7579).ContextMenu, obj7);
      items5 = [closure_12(Stack, obj6), closure_11(channel(10678).InstantInviteDetails, { channel })];
      const obj8 = { direction: "horizontal", align: "flex-end", children: closure_11(View, obj9) };
      obj9 = { style: tmp.creatorWrapper, children: closure_11(canUnlinkLobbyChannel(10679), obj10) };
      const Stack2 = tmp2(5593).Stack;
      obj10 = { user: stateFromStores, guildId: channel.guild_id };
      items5[2] = closure_11(Stack2, obj8);
      return closure_12(Card, obj5);
    };
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let guild;
        let id;
        let invite;
        let items;
        let maxUses;
        let onInviteRevoked;
        let tmp5;
        let uses;
        let obj = react2;
        const cResult = obj.c(42);
        ({ invite, onInviteRevoked } = arg0);
        closure_13();
        ({ uses, maxUses, guild } = invite);
        if (guild != null) {
          id = guild.id;
        }
        if (cResult[0] !== invite.channel) {
          const tmp7 = closure_8(invite.channel);
          cResult[0] = invite.channel;
          cResult[1] = tmp7;
          tmp5 = tmp7;
        } else {
          tmp5 = cResult[1];
        }
        if (cResult[2] === invite) {
          let tmp8;
          if (cResult[3] === onInviteRevoked) {
            tmp8 = cResult[4];
          }
          const tmpResult = guild_instant_invites_InstantInviteUtils;
          const inviteActions = tmpResult.useInviteActions(tmp8);
          if (cResult[5] !== invite.roles) {
            const _Symbol = Symbol;
            if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
              class W {
                constructor(arg0) {
                  return arg0.id;
                }
              }
              cResult[7] = W;
            } else {
              class W {
                constructor(arg0) {
                  return arg0.id;
                }
              }
            }
            const roles = invite.roles;
            const mapped = roles.map(W);
            cResult[5] = invite.roles;
            cResult[6] = mapped;
          } else {
            class W {
              constructor(arg0) {
                return arg0.id;
              }
            }
          }
          if (cResult[8] !== invite.code) {
            class W {
              constructor(arg0) {
                return arg0.id;
              }
            }
            const obj2 = { variant: "text-lg/bold", tabularNumbers: true, children: invite.code };
            cResult[8] = invite.code;
            cResult[9] = unpackModuleId(Text_Text.Text, obj2);
            const tmp15 = unpackModuleId(Text_Text.Text, obj2);
          } else {
            class W {
              constructor(arg0) {
                return arg0.id;
              }
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            class E {
              constructor(arg0) {
                ref = arg0.ref;
                tmp = closure_1_5(arg0, closure_1_4);
                obj = { size: "sm", variant: "secondary", icon: null, accessibilityLabel: null, ref: null };
                IconButton = closure_1_0(closure_1_2[22]).IconButton;
                obj.icon = closure_1_1(closure_1_2[19]).more;
                intl = closure_1_0(closure_1_2[16]).intl;
                obj.accessibilityLabel = intl.string(closure_1_0(closure_1_2[16]).t.DEoVWZ);
                obj.ref = ref;
                merged = Object.assign(tmp);
                return closure_1_11(IconButton, obj);
              }
            }
            cResult[10] = E;
          } else {
            class E {
              constructor(arg0) {
                ref = arg0.ref;
                tmp = closure_1_5(arg0, closure_1_4);
                obj = { size: "sm", variant: "secondary", icon: null, accessibilityLabel: null, ref: null };
                IconButton = closure_1_0(closure_1_2[22]).IconButton;
                obj.icon = closure_1_1(closure_1_2[19]).more;
                intl = closure_1_0(closure_1_2[16]).intl;
                obj.accessibilityLabel = intl.string(closure_1_0(closure_1_2[16]).t.DEoVWZ);
                obj.ref = ref;
                merged = Object.assign(tmp);
                return closure_1_11(IconButton, obj);
              }
            }
          }
          if (cResult[11] !== inviteActions) {
            class E {
              constructor(arg0) {
                ref = arg0.ref;
                tmp = closure_1_5(arg0, closure_1_4);
                obj = { size: "sm", variant: "secondary", icon: null, accessibilityLabel: null, ref: null };
                IconButton = closure_1_0(closure_1_2[22]).IconButton;
                obj.icon = closure_1_1(closure_1_2[19]).more;
                intl = closure_1_0(closure_1_2[16]).intl;
                obj.accessibilityLabel = intl.string(closure_1_0(closure_1_2[16]).t.DEoVWZ);
                obj.ref = ref;
                merged = Object.assign(tmp);
                return closure_1_11(IconButton, obj);
              }
            }
            const obj3 = { items: inviteActions, children: E };
            cResult[11] = inviteActions;
            cResult[12] = unpackModuleId(ContextMenu.ContextMenu, obj3);
            const tmp19 = unpackModuleId(ContextMenu.ContextMenu, obj3);
          } else {
            class E {
              constructor(arg0) {
                ref = arg0.ref;
                tmp = closure_1_5(arg0, closure_1_4);
                obj = { size: "sm", variant: "secondary", icon: null, accessibilityLabel: null, ref: null };
                IconButton = closure_1_0(closure_1_2[22]).IconButton;
                obj.icon = closure_1_1(closure_1_2[19]).more;
                intl = closure_1_0(closure_1_2[16]).intl;
                obj.accessibilityLabel = intl.string(closure_1_0(closure_1_2[16]).t.DEoVWZ);
                obj.ref = ref;
                merged = Object.assign(tmp);
                return closure_1_11(IconButton, obj);
              }
            }
          }
          if (cResult[13] === tmp14) {
            class E {
              constructor(arg0) {
                ref = arg0.ref;
                tmp = closure_1_5(arg0, closure_1_4);
                obj = { size: "sm", variant: "secondary", icon: null, accessibilityLabel: null, ref: null };
                IconButton = closure_1_0(closure_1_2[22]).IconButton;
                obj.icon = closure_1_1(closure_1_2[19]).more;
                intl = closure_1_0(closure_1_2[16]).intl;
                obj.accessibilityLabel = intl.string(closure_1_0(closure_1_2[16]).t.DEoVWZ);
                obj.ref = ref;
                merged = Object.assign(tmp);
                return closure_1_11(IconButton, obj);
              }
            }
            if (cResult[16] !== invite) {
              class E {
                constructor(arg0) {
                  ref = arg0.ref;
                  tmp = closure_1_5(arg0, closure_1_4);
                  obj = { size: "sm", variant: "secondary", icon: null, accessibilityLabel: null, ref: null };
                  IconButton = closure_1_0(closure_1_2[22]).IconButton;
                  obj.icon = closure_1_1(closure_1_2[19]).more;
                  intl = closure_1_0(closure_1_2[16]).intl;
                  obj.accessibilityLabel = intl.string(closure_1_0(closure_1_2[16]).t.DEoVWZ);
                  obj.ref = ref;
                  merged = Object.assign(tmp);
                  return closure_1_11(IconButton, obj);
                }
              }
              cResult[16] = invite;
              cResult[17] = tmp24;
            } else {
              class E {
                constructor(arg0) {
                  ref = arg0.ref;
                  tmp = closure_1_5(arg0, closure_1_4);
                  obj = { size: "sm", variant: "secondary", icon: null, accessibilityLabel: null, ref: null };
                  IconButton = closure_1_0(closure_1_2[22]).IconButton;
                  obj.icon = closure_1_1(closure_1_2[19]).more;
                  intl = closure_1_0(closure_1_2[16]).intl;
                  obj.accessibilityLabel = intl.string(closure_1_0(closure_1_2[16]).t.DEoVWZ);
                  obj.ref = ref;
                  merged = Object.assign(tmp);
                  return closure_1_11(IconButton, obj);
                }
              }
            }
            if (cResult[18] === tmp5) {
              class E {
                constructor(arg0) {
                  ref = arg0.ref;
                  tmp = closure_1_5(arg0, closure_1_4);
                  obj = { size: "sm", variant: "secondary", icon: null, accessibilityLabel: null, ref: null };
                  IconButton = closure_1_0(closure_1_2[22]).IconButton;
                  obj.icon = closure_1_1(closure_1_2[19]).more;
                  intl = closure_1_0(closure_1_2[16]).intl;
                  obj.accessibilityLabel = intl.string(closure_1_0(closure_1_2[16]).t.DEoVWZ);
                  obj.ref = ref;
                  merged = Object.assign(tmp);
                  return closure_1_11(IconButton, obj);
                }
              }
              if (cResult[21] === id) {
                class E {
                  constructor(arg0) {
                    ref = arg0.ref;
                    tmp = closure_1_5(arg0, closure_1_4);
                    obj = { size: "sm", variant: "secondary", icon: null, accessibilityLabel: null, ref: null };
                    IconButton = closure_1_0(closure_1_2[22]).IconButton;
                    obj.icon = closure_1_1(closure_1_2[19]).more;
                    intl = closure_1_0(closure_1_2[16]).intl;
                    obj.accessibilityLabel = intl.string(closure_1_0(closure_1_2[16]).t.DEoVWZ);
                    obj.ref = ref;
                    merged = Object.assign(tmp);
                    return closure_1_11(IconButton, obj);
                  }
                }
              }
              let tmp29 = tmp13;
              if (tmp29) {
                class E {
                  constructor(arg0) {
                    ref = arg0.ref;
                    tmp = closure_1_5(arg0, closure_1_4);
                    obj = { size: "sm", variant: "secondary", icon: null, accessibilityLabel: null, ref: null };
                    IconButton = closure_1_0(closure_1_2[22]).IconButton;
                    obj.icon = closure_1_1(closure_1_2[19]).more;
                    intl = closure_1_0(closure_1_2[16]).intl;
                    obj.accessibilityLabel = intl.string(closure_1_0(closure_1_2[16]).t.DEoVWZ);
                    obj.ref = ref;
                    merged = Object.assign(tmp);
                    return closure_1_11(IconButton, obj);
                  }
                }
                const obj4 = { roleIds: arr, guildId: id };
                tmp29 = unpackModuleId(InviteRolesDisplayDefault, obj4);
              }
              cResult[21] = id;
              cResult[22] = arr;
              cResult[23] = arr.length > 0 && null != id;
              cResult[24] = tmp29;
            }
            const obj5 = { channel: tmp5, expiresAt: tmp24 };
            cResult[18] = tmp5;
            cResult[19] = tmp24;
            cResult[20] = unpackModuleId(InstantInviteCode.InstantInviteDetails, obj5);
            const tmp27 = unpackModuleId(InstantInviteCode.InstantInviteDetails, obj5);
          }
          const obj6 = { direction: "horizontal", justify: "space-between", children: items };
          items = [tmp14, tmp18];
          cResult[13] = tmp14;
          cResult[14] = tmp18;
          cResult[15] = closure_12(Stack_Stack.Stack, obj6);
          const tmp22 = closure_12(Stack_Stack.Stack, obj6);
        }
        const obj7 = { invite, onInviteRevoked };
        cResult[2] = invite;
        cResult[3] = onInviteRevoked;
        cResult[4] = obj7;
        tmp8 = obj7;
      }
    : (invite) => {
        let items2;
        let items4;
        let maxUses;
        let obj10;
        let uses;
        invite = invite.invite;
        const onInviteRevoked = invite.onInviteRevoked;
        const guild = invite.guild;
        let id;
        ({ uses, maxUses } = invite);
        const tmp = closure_13();
        if (guild != null) {
          id = guild.id;
        }
        const items = [invite];
        const memo = react.useMemo(() => closure_8(invite.channel), items);
        let obj = invite(10681);
        const items1 = [invite.roles];
        const inviteActions = obj.useInviteActions({ invite, onInviteRevoked });
        const memo1 = react.useMemo(() => {
          const roles = invite.roles;
          return roles.map((id) => id.id);
        }, items1);
        let tmp9Result = memo1.length > 0 && null != id;
        const Card = tmp4(5995).Card;
        const obj2 = { direction: "horizontal", justify: "space-between", children: items2 };
        const Stack = tmp4(5593).Stack;
        items2 = [,];
        const obj3 = { variant: "text-lg/bold", tabularNumbers: true, children: invite.code };
        items2[0] = closure_11(invite(4886).Text, obj3);
        const obj4 = {
          items: inviteActions,
          children(ref) {
            let intl;
            const merged = Object.assign(ref, Object.assign({ ref: 0 }));
            const obj = {
              size: "sm",
              variant: "secondary",
              icon: InstantInviteIconsDefault.more,
              accessibilityLabel: intl.string(invite(dependencyMap[16]).t.DEoVWZ),
              ref: ref.ref,
            };
            const IconButton = invite(dependencyMap[22]).IconButton;
            intl = invite(dependencyMap[16]).intl;
            const merged1 = Object.assign(merged);
            return closure_1_11(IconButton, obj);
          },
        };
        items2[1] = closure_11(invite(7579).ContextMenu, obj4);
        const items3 = [closure_12(Stack, obj2), , ,];
        const obj5 = { channel: memo, expiresAt: invite.getExpiresAt() };
        const InstantInviteDetails = tmp4(10678).InstantInviteDetails;
        items3[1] = closure_11(InstantInviteDetails, obj5);
        if (tmp9Result) {
          const obj6 = { roleIds: memo1, guildId: id };
          tmp9Result = closure_11(InviteRolesDisplayDefault, obj6);
        }
        const obj7 = { children: items3 };
        items3[2] = tmp9Result;
        const obj8 = { direction: "horizontal", align: "flex-end", children: items4 };
        const obj9 = { style: tmp.creatorWrapper, children: closure_11(InstantInviteCreatorDefault, obj10) };
        const Stack2 = tmp4(5593).Stack;
        obj10 = { user: invite.inviter, guildId: id };
        items4 = [closure_11(View, obj9), closure_11(InstantInviteUsesLabelDefault, { uses, maxUses })];
        items3[3] = closure_12(Stack2, obj8);
        return closure_12(Card, obj7);
      },
);
const result = size.fileFinishedImporting("modules/guild_instant_invites/native/InstantInvite.tsx");

export default memoResult;
export const LinkedChannelInvite = tmp4;
