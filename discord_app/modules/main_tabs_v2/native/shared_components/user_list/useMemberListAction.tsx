// === Module 11211: useMemberListAction ===

// Module 11211 (useMemberListAction)
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1881 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4698 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9481 */;
import openGroupDMAddMembers from "openGroupDMAddMembers" /* 11212 */;
import showChatGDMUpsellActionSheetDefault from "showChatGDMUpsellActionSheet" /* 11224 */;
import channel_permissions_ChannelPermissionsUtils from "channel_permissions/ChannelPermissionsUtils" /* 11230 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;

const require = globalThis.__r;
const openGroupDMAddMembersDefault = openGroupDMAddMembers;

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ Permissions: c10, AnalyticsSections: closure_11, InstantInviteSources: closure_12 } = Constants);
const jsx = fn(21).jsx;
let closure_14 = { listActionRenderer: "Array", listActionHeight: "Set" };
const createStyles = fn(4890);
let closure_15 = createStyles.createStyles({ wrapper: { paddingTop: fn(10599).USERS_LIST_PADDING_BETWEEN_SECTIONS } });
const ReactCompilerGating = fn(558);
let obj2 = { wrapper: { paddingTop: fn(10599).USERS_LIST_PADDING_BETWEEN_SECTIONS } };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useMemberListAction.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(576).c(40);
  channel = channel.channel;
  const disable = channel.disable;
  closure_15();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel) {
    const fn = function p() {
      let isDMResult;
      if (channel != null) {
        isDMResult = channel.isDM();
      }
      let tmp2 = null;
      if (isDMResult) {
        const user = UserStore.getUser(channel.getRecipientId());
        let username;
        if (user != null) {
          username = user.username;
        }
        tmp2 = username;
      }
      return tmp2;
    };
    cResult[1] = channel;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  let obj = channel(576);
  const tmp4 = undefined !== disable && disable;
  const stateFromStores = channel(573).useStateFromStores(first, tmp8);
  if (cResult[3] !== channel) {
    const canResult = PermissionStore.can(constants.MANAGE_ROLES, channel);
    cResult[3] = channel;
    cResult[4] = canResult;
    let tmp10 = canResult;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === tmp10) {
    if (cResult[6] === channel) {
      let tmp14 = cResult[7];
    }
    let tmp17 = null != channel && !tmp4;
    if (tmp17) {
      if (tmp14) {
        tmp17 = tmp14;
      } else if (channel.isDM()) {
        let isFriendResult = RelationshipStore.isFriend(channel.getRecipientId());
      } else {
        isFriendResult = channel.isMultiUserDM();
        if (!isFriendResult) {
          isFriendResult = PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel);
        }
      }
    }
    if (cResult[8] !== channel) {
      let flag;
      if (channel != null) {
        flag = channel.isDM();
      }
      if (flag == null) {
        flag = false;
      }
      cResult[8] = channel;
      cResult[9] = flag;
    }
    if (cResult[10] !== channel) {
      let flag2;
      if (channel != null) {
        flag2 = channel.isMultiUserDM();
      }
      if (flag2 == null) {
        flag2 = false;
      }
      cResult[10] = channel;
      cResult[11] = flag2;
    }
    let id;
    if (channel != null) {
      id = channel.id;
    }
    id(6546)();
    [r10096, dependencyMap] = noop.useState(undefined);
    const _Symbol = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor(arg0) {
          height = channel.nativeEvent.layout.height;
          tmp = closure_2((arg0) => {
            let tmp = arg0;
            if (arg0 == null) {
              tmp = height;
            }
            return tmp;
          });
          return;
        }
      }
      cResult[12] = F;
    } else {
      class F {
        constructor(arg0) {
          height = channel.nativeEvent.layout.height;
          tmp = closure_2((arg0) => {
            let tmp = arg0;
            if (arg0 == null) {
              tmp = height;
            }
            return tmp;
          });
          return;
        }
      }
    }
    if (cResult[13] !== id) {
      class F {
        constructor(arg0) {
          height = channel.nativeEvent.layout.height;
          tmp = closure_2((arg0) => {
            let tmp = arg0;
            if (arg0 == null) {
              tmp = height;
            }
            return tmp;
          });
          return;
        }
      }
      cResult[13] = id;
      cResult[14] = tmp34;
    } else {
      class F {
        constructor(arg0) {
          height = channel.nativeEvent.layout.height;
          tmp = closure_2((arg0) => {
            let tmp = arg0;
            if (arg0 == null) {
              tmp = height;
            }
            return tmp;
          });
          return;
        }
      }
    }
    _slicedToArray = tmp34;
    if (null != id) {
      class F {
        constructor(arg0) {
          height = channel.nativeEvent.layout.height;
          tmp = closure_2((arg0) => {
            let tmp = arg0;
            if (arg0 == null) {
              tmp = height;
            }
            return tmp;
          });
          return;
        }
      }
    }
    return closure_14;
  }
  let result = tmp10;
  if (tmp10) {
    class F {
      constructor(arg0) {
        height = channel.nativeEvent.layout.height;
        tmp = closure_2((arg0) => {
          let tmp = arg0;
          if (arg0 == null) {
            tmp = height;
          }
          return tmp;
        });
        return;
      }
    }
    result = obj3.isPrivateGuildChannel(channel);
  }
  cResult[5] = tmp10;
  cResult[6] = channel;
  cResult[7] = result;
  tmp14 = result;
  const tmpResult = channel(573);
}) : ((channel) => {
  channel = channel.channel;
  let flag = channel.disable;
  if (flag === undefined) {
    flag = false;
  }
  let stateFromStores;
  _slicedToArray = undefined;
  noop = undefined;
  let flag2;
  let flag3;
  let id;
  RelationshipStore = undefined;
  first = undefined;
  constants = undefined;
  let onLayout;
  let callback1;
  let tmp = closure_15();
  importDefault = tmp;
  const items = [first];
  stateFromStores = channel(stateFromStores[13]).useStateFromStores(items, () => {
    let isDMResult;
    if (channel != null) {
      isDMResult = channel.isDM();
    }
    let tmp2 = null;
    if (isDMResult) {
      const user = UserStore.getUser(channel.getRecipientId());
      let username;
      if (user != null) {
        username = user.username;
      }
      tmp2 = username;
    }
    return tmp2;
  });
  let canResult = id.can(constants.MANAGE_ROLES, channel);
  if (canResult) {
    canResult = channel(tmp3[14]).isPrivateGuildChannel(channel);
    const tmp2Result = channel(tmp3[14]);
  }
  _slicedToArray = canResult;
  let tmp7 = null != channel && !flag;
  if (tmp7) {
    if (canResult) {
      tmp7 = canResult;
    } else if (channel.isDM()) {
      let isFriendResult = RelationshipStore.isFriend(channel.getRecipientId());
    } else {
      isFriendResult = channel.isMultiUserDM() || id.can(constants.CREATE_INSTANT_INVITE, channel);
    }
  }
  noop = tmp7;
  flag2 = undefined;
  if (channel != null) {
    flag2 = channel.isDM();
  }
  if (flag2 == null) {
    flag2 = false;
  }
  flag3 = undefined;
  if (channel != null) {
    flag3 = channel.isMultiUserDM();
  }
  if (flag3 == null) {
    flag3 = false;
  }
  id = undefined;
  if (channel != null) {
    id = channel.id;
  }
  const tmp13 = require("useScaledRowHeight")();
  RelationshipStore = tmp13;
  [first, constants] = noop.useState(undefined);
  onLayout = noop.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    closure_10((arg0) => {
      let tmp = arg0;
      if (arg0 == null) {
        tmp = height;
      }
      return tmp;
    });
  }, []);
  const items1 = [id];
  callback1 = noop.useCallback(() => {
    if (null != id) {
      openGroupDMAddMembersDefault(tmp, constants2.MEMBER_LIST);
    }
  }, items1);
  const items2 = [canResult, id, callback1, flag2, flag3, first, onLayout, stateFromStores, tmp13, tmp7, tmp];
  return noop.useMemo(() => {
    if (null != id) {
      if (c4) {
        if (flag2) {
          let obj2 = { iconSource: closure_1(stateFromStores[17]), IconComponent: channel(stateFromStores[18]).ChatPlusIcon, label: null, sublabel: null, handlePress: null };
          const intl4 = channel(stateFromStores[19]).intl;
          obj2.label = intl4.string(channel(stateFromStores[19]).t["3hF1W4"]);
          let formatToPlainStringResult;
          if (null != stateFromStores) {
            const intl5 = channel(stateFromStores[19]).intl;
            let obj3 = { recipient: tmp35 };
            formatToPlainStringResult = intl5.formatToPlainString(channel(stateFromStores[19]).t["Sh/xNN"], obj3);
          }
          obj2.sublabel = formatToPlainStringResult;
          obj2.handlePress = callback1;
          let tmp12 = obj2;
        } else {
          let obj = { iconSource: null, IconComponent: null, label: null, handlePress: null };
          if (flag3) {
            obj.iconSource = closure_1(stateFromStores[20]);
            obj.IconComponent = channel(stateFromStores[21]).GroupPlusIcon;
            const intl3 = channel(stateFromStores[19]).intl;
            obj.label = intl3.string(channel(stateFromStores[19]).t["LR+Ptf"]);
            obj.handlePress = function handlePress() {
              if (null != flag3.getChannel(id)) {
                const groupDMAddMembersAction = channel(stateFromStores[16]).getGroupDMAddMembersAction(id, callback.MEMBER_LIST);
                if ("open" === groupDMAddMembersAction) {
                  if (tmp8Result.UNSAFE_isDismissibleContentDismissed(channel(stateFromStores[23]).DismissibleContent.GDM_INVITE_REMINDER)) {
                    onClick();
                  } else {
                    const obj = { onClick };
                    closure_1(stateFromStores[24])(obj);
                  }
                  tmp8Result = channel(stateFromStores[22]);
                } else {
                  const result = channel(stateFromStores[16]).showGroupDMAddMembersRoadblock(groupDMAddMembersAction, callback.MEMBER_LIST);
                  const tmp8Result2 = channel(stateFromStores[16]);
                }
                const obj4 = channel(stateFromStores[16]);
              }
            };
            tmp12 = obj;
          } else if (c3) {
            obj.iconSource = tmp4(stateFromStores[25]);
            obj.IconComponent = channel(stateFromStores[26]).SettingsIcon;
            const intl2 = channel(stateFromStores[19]).intl;
            obj.label = intl2.string(channel(stateFromStores[19]).t.z9Mqln);
            obj.handlePress = function handlePress() {
              channel = flag3.getChannel(id);
              if (null != channel) {
                const result = channel(stateFromStores[27]).openChannelMembersActionSheet(channel.id, channel.guild_id);
                const obj = channel(stateFromStores[27]);
              }
            };
            tmp12 = obj;
          } else {
            obj.iconSource = tmp4(stateFromStores[20]);
            obj.IconComponent = channel(stateFromStores[21]).GroupPlusIcon;
            const intl = channel(stateFromStores[19]).intl;
            obj.label = intl.string(channel(stateFromStores[19]).t["Ab/6S0"]);
            obj.handlePress = function handlePress() {
              channel = flag3.getChannel(id);
              if (null != channel) {
                const result = channel(stateFromStores[28]).dismissGlobalKeyboard();
                const obj = channel(stateFromStores[28]);
                const obj3 = { source: callback1.CHAT_SIDEBAR };
                const result1 = channel(stateFromStores[29]).showInstantInviteActionSheet(channel, obj3);
                const obj2 = channel(stateFromStores[29]);
              }
            };
            tmp12 = obj;
          }
        }
        let obj4 = { style: closure_1.wrapper, onLayout, children: null };
        ({ label, iconSource, IconComponent, handlePress, sublabel } = tmp12);
        const obj5 = { icon: null, onPress: null, label: null, subLabel: null, arrow: true };
        const obj6 = { source: iconSource, IconComponent };
        obj5.icon = jsx(channel(stateFromStores[30]).RowButton.Icon, { source: iconSource, IconComponent });
        obj5.onPress = handlePress;
        obj5.label = label;
        obj5.subLabel = sublabel;
        obj4.children = jsx(channel(stateFromStores[30]).RowButton, { icon: null, onPress: null, label: null, subLabel: null, arrow: true });
        closure_0 = <flag2 style={closure_1.wrapper} onLayout={onLayout}>{null}</flag2>;
        closure_1 = closure_8 + closure_1.wrapper.paddingTop;
        const obj7 = {
          listActionRenderer() {
                return closure_0;
              },
          listActionHeight() {
                let tmp = first;
                if (first == null) {
                  tmp = closure_1;
                }
                return tmp;
              }
        };
        return obj7;
      }
    }
    return closure_1_14;
  }, items2);
});