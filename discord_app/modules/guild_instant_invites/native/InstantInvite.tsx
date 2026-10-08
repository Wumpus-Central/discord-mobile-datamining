// === Module 10270: InstantInvite ===

// Module 10270 (InstantInvite)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import router_utils from "router_utils" /* 1112 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5086 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5298 */;
import Stack_Stack from "Stack/Stack" /* 5373 */;
import ContextMenu from "ContextMenu" /* 9297 */;
import ArrowSmallRightIcon from "ArrowSmallRightIcon" /* 10273 */;
import InstantInviteIconsDefault from "InstantInviteIcons" /* 10275 */;
import InstantInviteCode from "InstantInviteCode" /* 10279 */;
import InstantInviteCreatorDefault from "InstantInviteCreator" /* 10280 */;
import guild_instant_invites_InstantInviteUtils from "guild_instant_invites/InstantInviteUtils" /* 10282 */;
import InviteRolesDisplayDefault from "InviteRolesDisplay" /* 10285 */;
import InstantInviteUsesLabelDefault from "InstantInviteUsesLabel" /* 10287 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1389 */;

require = fn;
let closure_3 = ["ref"];
let closure_4 = ["ref"];
const View = fn(17).View;
let closure_8 = fn(2067).createChannelRecordFromInvite;
const Routes = fn(1085).Routes;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5090);
let obj = { creatorWrapper: { marginTop: nativeDefault.space.PX_8, flex: 1 }, gameWrapper: { flex: 1, flexDirection: "row", alignItems: "center", gap: 8 }, gameText: { flex: 1 } };
let closure_13 = createStyles.createStyles(obj);
fn(558);
let obj3 = { marginTop: nativeDefault.space.PX_8, flex: 1 };
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function LinkedChannelInvite(channel) {
  const cResult = channel(576).c(43);
  channel = channel.channel;
  const tmp4 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  let linkedLobby = channel.linkedLobby;
  let linked_by;
  if (linkedLobby != null) {
    linked_by = linkedLobby.linked_by;
  }
  if (cResult[1] !== linked_by) {
    const linkedLobby2 = channel.linkedLobby;
    let linked_by1;
    if (linkedLobby2 != null) {
      linked_by1 = linkedLobby2.linked_by;
    }
    const fn = function c() {
      const linkedLobby = channel.linkedLobby;
      let linked_by;
      if (linkedLobby != null) {
        linked_by = linkedLobby.linked_by;
      }
      return UserStore.getUser(linked_by);
    };
    cResult[1] = linked_by1;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  let obj = channel(576);
  const stateFromStores = channel(504).useStateFromStores(first, tmp8);
  const tmpResult = channel(504);
  const linkedLobby3 = channel.linkedLobby;
  let application_id;
  if (linkedLobby3 != null) {
    application_id = linkedLobby3.application_id;
  }
  const getOrFetchApplication = channel(6847).useGetOrFetchApplication(application_id);
  const tmpResult3 = channel(6847);
  const canUnlinkLobbyChannel = channel(10271).useCanUnlinkLobbyChannel(channel);
  let str;
  const tmpResult4 = channel(10271);
  if (getOrFetchApplication != null) {
    str = getOrFetchApplication.name;
  }
  if (str == null) {
    str = "";
  }
  const tmp15Result = canUnlinkLobbyChannel(10272)(channel.id, str);
  dependencyMap = tmp15Result;
  if (cResult[3] === canUnlinkLobbyChannel) {
    if (cResult[4] === tmp15Result) {
      let tmp17 = cResult[5];
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      let intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t.aW2YlJ);
      cResult[6] = stringResult;
      let tmp18 = stringResult;
    } else {
      tmp18 = cResult[6];
    }
    if (cResult[7] === channel.guild_id) {
      if (cResult[8] === channel.id) {
        let tmp20 = cResult[9];
      }
      const _Symbol2 = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        let intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(tmp(1126).t.JmUENg);
        cResult[10] = stringResult1;
        let tmp21 = stringResult1;
      } else {
        tmp21 = cResult[10];
      }
      if (cResult[11] !== tmp17) {
        let obj2 = { label: tmp21, iconSource: tmp14(10275).revoke, variant: "destructive", action: tmp17 };
        cResult[11] = tmp17;
        cResult[12] = obj2;
        let tmp23 = obj2;
      } else {
        tmp23 = cResult[12];
      }
      if (cResult[13] === tmp20) {
        if (cResult[14] === tmp23) {
          let tmp24 = cResult[15];
        }
        if (cResult[16] !== getOrFetchApplication) {
          const obj3 = { game: getOrFetchApplication, size: tmp(6851).GameIconSizes.SIZE_24 };
          const tmp28 = closure_11(tmp14(6851), obj3);
          cResult[16] = getOrFetchApplication;
          cResult[17] = tmp28;
          let tmp25 = tmp28;
          const tmp14Result = tmp14(6851);
        } else {
          tmp25 = cResult[17];
        }
        let name;
        if (getOrFetchApplication != null) {
          name = getOrFetchApplication.name;
        }
        if (cResult[18] === tmp4.gameText) {
          if (cResult[19] === name) {
            let tmp30 = cResult[20];
          }
          if (cResult[21] === tmp4.gameWrapper) {
            if (cResult[22] === tmp30) {
              if (cResult[23] === tmp25) {
                let tmp33 = cResult[24];
              }
              const _Symbol3 = Symbol;
              if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                class R {
                  constructor(arg0) {
                    tmp = closure_1_5(channel, closure_1_3);
                    obj = { size: "sm", variant: "secondary", icon: closure_1(closure_2[19]).more, accessibilityLabel: null, ref: null };
                    intl = channel(closure_2[16]).intl;
                    obj.accessibilityLabel = intl.string(channel(closure_2[16]).t.DEoVWZ);
                    obj.ref = channel.ref;
                    merged = Object.assign(tmp);
                    return closure_1_11(channel(closure_2[22]).IconButton, obj);
                  }
                }
                cResult[25] = R;
              } else {
                class R {
                  constructor(arg0) {
                    tmp = closure_1_5(channel, closure_1_3);
                    obj = { size: "sm", variant: "secondary", icon: closure_1(closure_2[19]).more, accessibilityLabel: null, ref: null };
                    intl = channel(closure_2[16]).intl;
                    obj.accessibilityLabel = intl.string(channel(closure_2[16]).t.DEoVWZ);
                    obj.ref = channel.ref;
                    merged = Object.assign(tmp);
                    return closure_1_11(channel(closure_2[22]).IconButton, obj);
                  }
                }
              }
              if (cResult[26] !== tmp24) {
                class R {
                  constructor(arg0) {
                    tmp = closure_1_5(channel, closure_1_3);
                    obj = { size: "sm", variant: "secondary", icon: closure_1(closure_2[19]).more, accessibilityLabel: null, ref: null };
                    intl = channel(closure_2[16]).intl;
                    obj.accessibilityLabel = intl.string(channel(closure_2[16]).t.DEoVWZ);
                    obj.ref = channel.ref;
                    merged = Object.assign(tmp);
                    return closure_1_11(channel(closure_2[22]).IconButton, obj);
                  }
                }
                const obj4 = { items: tmp24, children: R };
                const tmp39 = closure_11(tmp(9297).ContextMenu, obj4);
                cResult[26] = tmp24;
                cResult[27] = tmp39;
              } else {
                class R {
                  constructor(arg0) {
                    tmp = closure_1_5(channel, closure_1_3);
                    obj = { size: "sm", variant: "secondary", icon: closure_1(closure_2[19]).more, accessibilityLabel: null, ref: null };
                    intl = channel(closure_2[16]).intl;
                    obj.accessibilityLabel = intl.string(channel(closure_2[16]).t.DEoVWZ);
                    obj.ref = channel.ref;
                    merged = Object.assign(tmp);
                    return closure_1_11(channel(closure_2[22]).IconButton, obj);
                  }
                }
              }
              if (cResult[28] === tmp33) {
                class R {
                  constructor(arg0) {
                    tmp = closure_1_5(channel, closure_1_3);
                    obj = { size: "sm", variant: "secondary", icon: closure_1(closure_2[19]).more, accessibilityLabel: null, ref: null };
                    intl = channel(closure_2[16]).intl;
                    obj.accessibilityLabel = intl.string(channel(closure_2[16]).t.DEoVWZ);
                    obj.ref = channel.ref;
                    merged = Object.assign(tmp);
                    return closure_1_11(channel(closure_2[22]).IconButton, obj);
                  }
                }
                if (cResult[31] !== channel) {
                  class R {
                    constructor(arg0) {
                      tmp = closure_1_5(channel, closure_1_3);
                      obj = { size: "sm", variant: "secondary", icon: closure_1(closure_2[19]).more, accessibilityLabel: null, ref: null };
                      intl = channel(closure_2[16]).intl;
                      obj.accessibilityLabel = intl.string(channel(closure_2[16]).t.DEoVWZ);
                      obj.ref = channel.ref;
                      merged = Object.assign(tmp);
                      return closure_1_11(channel(closure_2[22]).IconButton, obj);
                    }
                  }
                  const obj5 = { channel };
                  const tmp44 = closure_11(tmp(10279).InstantInviteDetails, obj5);
                  cResult[31] = channel;
                  cResult[32] = tmp44;
                } else {
                  class R {
                    constructor(arg0) {
                      tmp = closure_1_5(channel, closure_1_3);
                      obj = { size: "sm", variant: "secondary", icon: closure_1(closure_2[19]).more, accessibilityLabel: null, ref: null };
                      intl = channel(closure_2[16]).intl;
                      obj.accessibilityLabel = intl.string(channel(closure_2[16]).t.DEoVWZ);
                      obj.ref = channel.ref;
                      merged = Object.assign(tmp);
                      return closure_1_11(channel(closure_2[22]).IconButton, obj);
                    }
                  }
                }
                if (cResult[33] === channel.guild_id) {
                  class R {
                    constructor(arg0) {
                      tmp = closure_1_5(channel, closure_1_3);
                      obj = { size: "sm", variant: "secondary", icon: closure_1(closure_2[19]).more, accessibilityLabel: null, ref: null };
                      intl = channel(closure_2[16]).intl;
                      obj.accessibilityLabel = intl.string(channel(closure_2[16]).t.DEoVWZ);
                      obj.ref = channel.ref;
                      merged = Object.assign(tmp);
                      return closure_1_11(channel(closure_2[22]).IconButton, obj);
                    }
                  }
                  if (cResult[36] === tmp4.creatorWrapper) {
                    class R {
                      constructor(arg0) {
                        tmp = closure_1_5(channel, closure_1_3);
                        obj = { size: "sm", variant: "secondary", icon: closure_1(closure_2[19]).more, accessibilityLabel: null, ref: null };
                        intl = channel(closure_2[16]).intl;
                        obj.accessibilityLabel = intl.string(channel(closure_2[16]).t.DEoVWZ);
                        obj.ref = channel.ref;
                        merged = Object.assign(tmp);
                        return closure_1_11(channel(closure_2[22]).IconButton, obj);
                      }
                    }
                    if (cResult[39] === tmp40) {
                      class R {
                        constructor(arg0) {
                          tmp = closure_1_5(channel, closure_1_3);
                          obj = { size: "sm", variant: "secondary", icon: closure_1(closure_2[19]).more, accessibilityLabel: null, ref: null };
                          intl = channel(closure_2[16]).intl;
                          obj.accessibilityLabel = intl.string(channel(closure_2[16]).t.DEoVWZ);
                          obj.ref = channel.ref;
                          merged = Object.assign(tmp);
                          return closure_1_11(channel(closure_2[22]).IconButton, obj);
                        }
                      }
                    }
                    const obj6 = { children: null };
                    const items1 = [tmp40, tmp43, tmp48];
                    obj6.children = items1;
                    const tmp54 = closure_12(tmp(6186).Card, obj6);
                    cResult[39] = tmp40;
                    cResult[40] = tmp43;
                    cResult[41] = tmp48;
                    cResult[42] = tmp54;
                  }
                  const obj7 = { direction: "horizontal", align: "flex-end", children: null };
                  const obj8 = { style: tmp4.creatorWrapper, children: tmp45 };
                  obj7.children = closure_11(View, obj8);
                  const tmp51 = closure_11(tmp(5373).Stack, obj7);
                  cResult[36] = tmp4.creatorWrapper;
                  cResult[37] = tmp45;
                  cResult[38] = tmp51;
                }
                const obj9 = { user: stateFromStores, guildId: channel.guild_id };
                const tmp47 = closure_11(tmp14(10280), obj9);
                cResult[33] = channel.guild_id;
                cResult[34] = stateFromStores;
                cResult[35] = tmp47;
              }
              const obj10 = { direction: "horizontal", justify: "space-between", children: null };
              const items2 = [tmp33, tmp38];
              obj10.children = items2;
              const tmp42 = closure_12(tmp(5373).Stack, obj10);
              cResult[28] = tmp33;
              cResult[29] = tmp38;
              cResult[30] = tmp42;
            }
          }
          const obj11 = { style: tmp4.gameWrapper, children: null };
          const items3 = [tmp25, tmp30];
          obj11.children = items3;
          const tmp36 = closure_12(View, obj11);
          cResult[21] = tmp4.gameWrapper;
          cResult[22] = tmp30;
          cResult[23] = tmp25;
          cResult[24] = tmp36;
          tmp33 = tmp36;
        }
        const obj12 = { ellipsizeMode: "tail", lineClamp: 1, variant: "text-lg/bold", style: tmp4.gameText, children: name };
        const tmp32 = closure_11(tmp(5086).Text, obj12);
        cResult[18] = tmp4.gameText;
        cResult[19] = name;
        cResult[20] = tmp32;
        tmp30 = tmp32;
      }
      const items4 = [tmp20, tmp23];
      cResult[13] = tmp20;
      cResult[14] = tmp23;
      cResult[15] = items4;
      tmp24 = items4;
    }
    const obj13 = {
      label: tmp18,
      IconComponent: tmp(10273).ArrowSmallRightIcon,
      action() {
          router_utils.transitionTo(Routes.CHANNEL(channel.guild_id, channel.id));
        }
    };
    cResult[7] = channel.guild_id;
    cResult[8] = channel.id;
    cResult[9] = obj13;
    tmp20 = obj13;
  }
  const fn2 = function x() {
    if (canUnlinkLobbyChannel) {
      dependencyMap();
    } else {
      const obj2 = { title: null, body: null };
      const intl = util.intl;
      obj2.title = intl.string(util.t.JmUENg);
      const intl2 = util.intl;
      obj2.body = intl2.string(util.t.SrvsML);
      actions_AlertActionCreatorsDefault.show(obj2);
    }
  };
  cResult[3] = canUnlinkLobbyChannel;
  cResult[4] = tmp15Result;
  cResult[5] = fn2;
  tmp17 = fn2;
  const tmp15 = canUnlinkLobbyChannel(10272);
}) : (function LinkedChannelInvite(channel) {
  channel = channel.channel;
  let canUnlinkLobbyChannel;
  dependencyMap = undefined;
  let action;
  const tmp = closure_13();
  let items = [UserStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => {
    const linkedLobby = channel.linkedLobby;
    let linked_by;
    if (linkedLobby != null) {
      linked_by = linkedLobby.linked_by;
    }
    return UserStore.getUser(linked_by);
  });
  let obj = channel(504);
  let linkedLobby = channel.linkedLobby;
  let application_id;
  if (linkedLobby != null) {
    application_id = linkedLobby.application_id;
  }
  const getOrFetchApplication = channel(6847).useGetOrFetchApplication(application_id);
  let obj2 = channel(6847);
  canUnlinkLobbyChannel = channel(10271).useCanUnlinkLobbyChannel(channel);
  let str;
  const tmp2Result = channel(10271);
  if (getOrFetchApplication != null) {
    str = getOrFetchApplication.name;
  }
  if (str == null) {
    str = "";
  }
  const tmp9Result = canUnlinkLobbyChannel(10272)(channel.id, str);
  dependencyMap = tmp9Result;
  const items1 = [canUnlinkLobbyChannel, tmp9Result];
  action = noop.useCallback(() => {
    if (canUnlinkLobbyChannel) {
      dependencyMap();
    } else {
      const obj2 = { title: null, body: null };
      const intl = util.intl;
      obj2.title = intl.string(util.t.JmUENg);
      const intl2 = util.intl;
      obj2.body = intl2.string(util.t.SrvsML);
      actions_AlertActionCreatorsDefault.show(obj2);
    }
  }, items1);
  const items2 = [, , ];
  ({ guild_id: arr3[0], id: arr3[1] } = channel);
  items2[2] = action;
  const memo = noop.useMemo(() => {
    const obj = { label: null, IconComponent: null, action: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.aW2YlJ);
    obj.IconComponent = ArrowSmallRightIcon.ArrowSmallRightIcon;
    obj.action = function action() {
      channel(closure_2[18]).transitionTo(Routes.CHANNEL(closure_1_0.guild_id, closure_1_0.id));
    };
    const items = [obj, ];
    const obj2 = { label: null, iconSource: null, variant: "destructive", action: null };
    const intl2 = util.intl;
    obj2.label = intl2.string(util.t.JmUENg);
    obj2.iconSource = InstantInviteIconsDefault.revoke;
    obj2.action = action;
    items[1] = obj2;
    return items;
  }, items2);
  const obj3 = { style: tmp.gameWrapper, children: null };
  const obj4 = { game: getOrFetchApplication, size: null };
  const tmp9 = canUnlinkLobbyChannel(10272);
  obj4.size = channel(6851).GameIconSizes.SIZE_24;
  const items3 = [closure_11(canUnlinkLobbyChannel(6851), obj4), ];
  const obj5 = { ellipsizeMode: "tail", lineClamp: 1, variant: "text-lg/bold", style: tmp.gameText, children: null };
  let name;
  if (getOrFetchApplication != null) {
    name = getOrFetchApplication.name;
  }
  const obj6 = { children: null };
  const obj7 = { direction: "horizontal", justify: "space-between", children: null };
  obj5.children = name;
  items3[1] = closure_11(channel(5086).Text, obj5);
  obj3.children = items3;
  const items4 = [
    closure_12(View, obj3),
    closure_11(channel(9297).ContextMenu, {
      items: memo,
      children(ref) {
        const merged = Object.assign(ref, Object.assign({ ref: 0 }));
        const obj = { size: "sm", variant: "secondary", icon: canUnlinkLobbyChannel(10275).more, accessibilityLabel: null, ref: null };
        const intl = channel(1126).intl;
        obj.accessibilityLabel = intl.string(channel(1126).t.DEoVWZ);
        obj.ref = ref.ref;
        const merged1 = Object.assign(merged);
        return closure_1_11(channel(8106).IconButton, obj);
      }
    })
  ];
  obj7.children = items4;
  const items5 = [closure_12(channel(5373).Stack, obj7), closure_11(channel(10279).InstantInviteDetails, { channel }), ];
  const obj9 = { direction: "horizontal", align: "flex-end", children: null };
  const obj10 = { style: tmp.creatorWrapper, children: closure_11(canUnlinkLobbyChannel(10280), { user: stateFromStores, guildId: channel.guild_id }) };
  obj9.children = closure_11(View, obj10);
  items5[2] = closure_11(channel(5373).Stack, obj9);
  obj6.children = items5;
  return closure_12(channel(6186).Card, obj6);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_instant_invites/native/InstantInvite.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function InstantInvite(arg0) {
  const cResult = c.c(42);
  ({ invite, onInviteRevoked } = arg0);
  closure_13();
  ({ uses, maxUses, guild } = invite);
  if (guild != null) {
    const id = guild.id;
  }
  if (cResult[0] !== invite.channel) {
    const tmp7 = closure_8(invite.channel);
    cResult[0] = invite.channel;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === invite) {
    if (cResult[3] === onInviteRevoked) {
      let tmp8 = cResult[4];
    }
    const inviteActions = guild_instant_invites_InstantInviteUtils.useInviteActions(tmp8);
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
      if (cResult[8] !== invite.code) {
        class W {
          constructor(arg0) {
            return arg0.id;
          }
        }
        const obj2 = { variant: "text-lg/bold", tabularNumbers: true, children: invite.code };
        const tmp16 = closure_1_11(Text_Text.Text, obj2);
        cResult[8] = invite.code;
        cResult[9] = tmp16;
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
            tmp = closure_1_5(arg0, closure_1_4);
            obj = { size: "sm", variant: "secondary", icon: closure_1_1(closure_1_2[19]).more, accessibilityLabel: null, ref: null };
            intl = closure_1_0(closure_1_2[16]).intl;
            obj.accessibilityLabel = intl.string(closure_1_0(closure_1_2[16]).t.DEoVWZ);
            obj.ref = arg0.ref;
            merged = Object.assign(tmp);
            return closure_1_11(closure_1_0(closure_1_2[22]).IconButton, obj);
          }
        }
        cResult[10] = E;
      } else {
        class E {
          constructor(arg0) {
            tmp = closure_1_5(arg0, closure_1_4);
            obj = { size: "sm", variant: "secondary", icon: closure_1_1(closure_1_2[19]).more, accessibilityLabel: null, ref: null };
            intl = closure_1_0(closure_1_2[16]).intl;
            obj.accessibilityLabel = intl.string(closure_1_0(closure_1_2[16]).t.DEoVWZ);
            obj.ref = arg0.ref;
            merged = Object.assign(tmp);
            return closure_1_11(closure_1_0(closure_1_2[22]).IconButton, obj);
          }
        }
      }
      if (cResult[11] !== inviteActions) {
        class E {
          constructor(arg0) {
            tmp = closure_1_5(arg0, closure_1_4);
            obj = { size: "sm", variant: "secondary", icon: closure_1_1(closure_1_2[19]).more, accessibilityLabel: null, ref: null };
            intl = closure_1_0(closure_1_2[16]).intl;
            obj.accessibilityLabel = intl.string(closure_1_0(closure_1_2[16]).t.DEoVWZ);
            obj.ref = arg0.ref;
            merged = Object.assign(tmp);
            return closure_1_11(closure_1_0(closure_1_2[22]).IconButton, obj);
          }
        }
        const obj3 = { items: inviteActions, children: E };
        const tmp20 = closure_1_11(ContextMenu.ContextMenu, obj3);
        cResult[11] = inviteActions;
        cResult[12] = tmp20;
      } else {
        class E {
          constructor(arg0) {
            tmp = closure_1_5(arg0, closure_1_4);
            obj = { size: "sm", variant: "secondary", icon: closure_1_1(closure_1_2[19]).more, accessibilityLabel: null, ref: null };
            intl = closure_1_0(closure_1_2[16]).intl;
            obj.accessibilityLabel = intl.string(closure_1_0(closure_1_2[16]).t.DEoVWZ);
            obj.ref = arg0.ref;
            merged = Object.assign(tmp);
            return closure_1_11(closure_1_0(closure_1_2[22]).IconButton, obj);
          }
        }
      }
      if (cResult[13] === tmp15) {
        class E {
          constructor(arg0) {
            tmp = closure_1_5(arg0, closure_1_4);
            obj = { size: "sm", variant: "secondary", icon: closure_1_1(closure_1_2[19]).more, accessibilityLabel: null, ref: null };
            intl = closure_1_0(closure_1_2[16]).intl;
            obj.accessibilityLabel = intl.string(closure_1_0(closure_1_2[16]).t.DEoVWZ);
            obj.ref = arg0.ref;
            merged = Object.assign(tmp);
            return closure_1_11(closure_1_0(closure_1_2[22]).IconButton, obj);
          }
        }
        if (cResult[16] !== invite) {
          class E {
            constructor(arg0) {
              tmp = closure_1_5(arg0, closure_1_4);
              obj = { size: "sm", variant: "secondary", icon: closure_1_1(closure_1_2[19]).more, accessibilityLabel: null, ref: null };
              intl = closure_1_0(closure_1_2[16]).intl;
              obj.accessibilityLabel = intl.string(closure_1_0(closure_1_2[16]).t.DEoVWZ);
              obj.ref = arg0.ref;
              merged = Object.assign(tmp);
              return closure_1_11(closure_1_0(closure_1_2[22]).IconButton, obj);
            }
          }
          cResult[16] = invite;
          cResult[17] = tmp25;
        } else {
          class E {
            constructor(arg0) {
              tmp = closure_1_5(arg0, closure_1_4);
              obj = { size: "sm", variant: "secondary", icon: closure_1_1(closure_1_2[19]).more, accessibilityLabel: null, ref: null };
              intl = closure_1_0(closure_1_2[16]).intl;
              obj.accessibilityLabel = intl.string(closure_1_0(closure_1_2[16]).t.DEoVWZ);
              obj.ref = arg0.ref;
              merged = Object.assign(tmp);
              return closure_1_11(closure_1_0(closure_1_2[22]).IconButton, obj);
            }
          }
        }
        if (cResult[18] === tmp5) {
          class E {
            constructor(arg0) {
              tmp = closure_1_5(arg0, closure_1_4);
              obj = { size: "sm", variant: "secondary", icon: closure_1_1(closure_1_2[19]).more, accessibilityLabel: null, ref: null };
              intl = closure_1_0(closure_1_2[16]).intl;
              obj.accessibilityLabel = intl.string(closure_1_0(closure_1_2[16]).t.DEoVWZ);
              obj.ref = arg0.ref;
              merged = Object.assign(tmp);
              return closure_1_11(closure_1_0(closure_1_2[22]).IconButton, obj);
            }
          }
          if (cResult[21] === id) {
            class E {
              constructor(arg0) {
                tmp = closure_1_5(arg0, closure_1_4);
                obj = { size: "sm", variant: "secondary", icon: closure_1_1(closure_1_2[19]).more, accessibilityLabel: null, ref: null };
                intl = closure_1_0(closure_1_2[16]).intl;
                obj.accessibilityLabel = intl.string(closure_1_0(closure_1_2[16]).t.DEoVWZ);
                obj.ref = arg0.ref;
                merged = Object.assign(tmp);
                return closure_1_11(closure_1_0(closure_1_2[22]).IconButton, obj);
              }
            }
          }
          let tmp30 = tmp14;
          if (tmp14) {
            class E {
              constructor(arg0) {
                tmp = closure_1_5(arg0, closure_1_4);
                obj = { size: "sm", variant: "secondary", icon: closure_1_1(closure_1_2[19]).more, accessibilityLabel: null, ref: null };
                intl = closure_1_0(closure_1_2[16]).intl;
                obj.accessibilityLabel = intl.string(closure_1_0(closure_1_2[16]).t.DEoVWZ);
                obj.ref = arg0.ref;
                merged = Object.assign(tmp);
                return closure_1_11(closure_1_0(closure_1_2[22]).IconButton, obj);
              }
            }
            const obj4 = { roleIds: arr, guildId: id };
            tmp30 = closure_1_11(InviteRolesDisplayDefault, obj4);
          }
          cResult[21] = id;
          cResult[22] = arr;
          cResult[23] = tmp14;
          cResult[24] = tmp30;
        }
        const obj5 = { channel: tmp5, expiresAt: tmp25 };
        const tmp28 = closure_1_11(InstantInviteCode.InstantInviteDetails, obj5);
        cResult[18] = tmp5;
        cResult[19] = tmp25;
        cResult[20] = tmp28;
      }
      const obj6 = { direction: "horizontal", justify: "space-between", children: null };
      const items = [tmp15, tmp19];
      obj6.children = items;
      const tmp23 = __initData(Stack_Stack.Stack, obj6);
      cResult[13] = tmp15;
      cResult[14] = tmp19;
      cResult[15] = tmp23;
    }
    const tmpResult = guild_instant_invites_InstantInviteUtils;
  }
  const obj7 = { invite, onInviteRevoked };
  cResult[2] = invite;
  cResult[3] = onInviteRevoked;
  cResult[4] = obj7;
  tmp8 = obj7;
}) : (function InstantInvite(onInviteRevoked) {
  const invite = onInviteRevoked.invite;
  guild = invite.guild;
  let id;
  ({ uses, maxUses } = invite);
  if (guild != null) {
    id = guild.id;
  }
  const items = [invite];
  const memo = noop.useMemo(() => closure_8(invite.channel), items);
  const tmp = closure_13();
  const items1 = [invite.roles];
  const inviteActions = invite(10282).useInviteActions({ invite, onInviteRevoked: onInviteRevoked.onInviteRevoked });
  const memo1 = noop.useMemo(() => {
    const roles = invite.roles;
    return roles.map((id) => id.id);
  }, items1);
  let tmp9Result = memo1.length > 0 && null != id;
  const obj2 = { direction: "horizontal", justify: "space-between", children: null };
  const items2 = [
    closure_11(invite(5086).Text, { variant: "text-lg/bold", tabularNumbers: true, children: invite.code }),
    closure_11(invite(9297).ContextMenu, {
      items: inviteActions,
      children(ref) {
        const merged = Object.assign(ref, Object.assign({ ref: 0 }));
        const obj = { size: "sm", variant: "secondary", icon: InstantInviteIconsDefault.more, accessibilityLabel: null, ref: null };
        const intl = invite(1126).intl;
        obj.accessibilityLabel = intl.string(invite(1126).t.DEoVWZ);
        obj.ref = ref.ref;
        const merged1 = Object.assign(merged);
        return closure_1_11(invite(8106).IconButton, obj);
      }
    })
  ];
  obj2.children = items2;
  const items3 = [closure_12(invite(5373).Stack, obj2), , , ];
  let obj = invite(10282);
  const obj3 = { variant: "text-lg/bold", tabularNumbers: true, children: invite.code };
  const obj4 = {
    items: inviteActions,
    children(ref) {
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      const obj = { size: "sm", variant: "secondary", icon: InstantInviteIconsDefault.more, accessibilityLabel: null, ref: null };
      const intl = invite(1126).intl;
      obj.accessibilityLabel = intl.string(invite(1126).t.DEoVWZ);
      obj.ref = ref.ref;
      const merged1 = Object.assign(merged);
      return closure_1_11(invite(8106).IconButton, obj);
    }
  };
  items3[1] = closure_11(invite(10279).InstantInviteDetails, { channel: memo, expiresAt: invite.getExpiresAt() });
  if (tmp9Result) {
    const obj6 = { roleIds: memo1, guildId: id };
    tmp9Result = closure_11(InviteRolesDisplayDefault, obj6);
  }
  const obj7 = { children: null };
  items3[2] = tmp9Result;
  const obj8 = { direction: "horizontal", align: "flex-end", children: null };
  const obj9 = { style: tmp.creatorWrapper, children: closure_11(InstantInviteCreatorDefault, { user: invite.inviter, guildId: id }) };
  const items4 = [closure_11(View, obj9), closure_11(InstantInviteUsesLabelDefault, { uses, maxUses })];
  obj8.children = items4;
  items3[3] = closure_12(invite(5373).Stack, obj8);
  obj7.children = items3;
  return closure_12(invite(6186).Card, obj7);
}));
export const LinkedChannelInvite = tmp3;