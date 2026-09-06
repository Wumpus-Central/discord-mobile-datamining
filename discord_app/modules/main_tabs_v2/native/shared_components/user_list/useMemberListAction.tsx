// === Module 11589: useMemberListAction ===

// Module 11589 (useMemberListAction)
import openGroupDMAddMembersDefault from "openGroupDMAddMembers" /* 11590 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

const require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ Permissions: c10, AnalyticsSections: closure_11, InstantInviteSources: closure_12 } = Constants);
const jsx = fn(21).jsx;
let closure_14 = { listActionRenderer: "hash", listActionHeight: "call" };
fn(4560);
const createStyles = { wrapper: { paddingTop: fn(10213).USERS_LIST_PADDING_BETWEEN_SECTIONS } };
let closure_15 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useMemberListAction.tsx");

export default function useMemberListAction(channel) {
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
  let first;
  constants = undefined;
  let onLayout;
  let callback1;
  let tmp = closure_15();
  importDefault = tmp;
  const items = [first];
  stateFromStores = channel(stateFromStores[11]).useStateFromStores(items, () => {
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
    canResult = channel(tmp3[12]).isPrivateGuildChannel(channel);
    const tmp2Result = channel(tmp3[12]);
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
  const tmp14 = _slicedToArray(noop.useState(undefined), 2);
  first = tmp14[0];
  constants = tmp14[1];
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
          let obj = { iconSource: closure_1(stateFromStores[15]), IconComponent: channel(stateFromStores[16]).ChatPlusIcon, label: null, sublabel: null, handlePress: null };
          const intl4 = channel(stateFromStores[17]).intl;
          obj.label = intl4.string(channel(stateFromStores[17]).t["3hF1W4"]);
          let formatToPlainStringResult;
          if (null != stateFromStores) {
            const intl5 = channel(stateFromStores[17]).intl;
            obj = { recipient: tmp35 };
            formatToPlainStringResult = intl5.formatToPlainString(channel(stateFromStores[17]).t["Sh/xNN"], obj);
          }
          obj.sublabel = formatToPlainStringResult;
          obj.handlePress = callback1;
          let tmp12 = obj;
        } else {
          obj = { iconSource: null, IconComponent: null, label: null, handlePress: null };
          if (flag3) {
            obj.iconSource = closure_1(stateFromStores[18]);
            obj.IconComponent = channel(stateFromStores[19]).GroupPlusIcon;
            const intl3 = channel(stateFromStores[17]).intl;
            obj.label = intl3.string(channel(stateFromStores[17]).t["LR+Ptf"]);
            obj.handlePress = function handlePress() {
              if (null != flag3.getChannel(id)) {
                const groupDMAddMembersAction = channel(stateFromStores[14]).getGroupDMAddMembersAction(id, callback.MEMBER_LIST);
                if ("open" === groupDMAddMembersAction) {
                  let tmp8Result = channel(stateFromStores[20]);
                  if (tmp8Result.UNSAFE_isDismissibleContentDismissed(channel(stateFromStores[21]).DismissibleContent.GDM_INVITE_REMINDER)) {
                    onClick();
                  } else {
                    const obj = { onClick };
                    closure_1(stateFromStores[22])(obj);
                  }
                } else {
                  tmp8Result = channel(stateFromStores[14]);
                  const result = tmp8Result.showGroupDMAddMembersRoadblock(groupDMAddMembersAction, callback.MEMBER_LIST);
                }
                const obj4 = channel(stateFromStores[14]);
              }
            };
            tmp12 = obj;
          } else if (c3) {
            obj.iconSource = tmp4(stateFromStores[23]);
            obj.IconComponent = channel(stateFromStores[24]).SettingsIcon;
            const intl2 = channel(stateFromStores[17]).intl;
            obj.label = intl2.string(channel(stateFromStores[17]).t.z9Mqln);
            obj.handlePress = function handlePress() {
              channel = flag3.getChannel(id);
              if (null != channel) {
                const result = channel(stateFromStores[25]).openChannelMembersActionSheet(channel.id, channel.guild_id);
                const obj = channel(stateFromStores[25]);
              }
            };
            tmp12 = obj;
          } else {
            obj.iconSource = tmp4(stateFromStores[18]);
            obj.IconComponent = channel(stateFromStores[19]).GroupPlusIcon;
            const intl = channel(stateFromStores[17]).intl;
            obj.label = intl.string(channel(stateFromStores[17]).t["Ab/6S0"]);
            obj.handlePress = function handlePress() {
              channel = flag3.getChannel(id);
              if (null != channel) {
                let obj = channel(stateFromStores[26]);
                const result = obj.dismissGlobalKeyboard();
                obj = { source: callback1.CHAT_SIDEBAR };
                const result1 = channel(stateFromStores[27]).showInstantInviteActionSheet(channel, obj);
                const obj2 = channel(stateFromStores[27]);
              }
            };
            tmp12 = obj;
          }
        }
        const obj1 = { style: closure_1.wrapper, onLayout, children: null };
        ({ label, iconSource, IconComponent, handlePress, sublabel } = tmp12);
        let obj2 = { icon: null, onPress: null, label: null, subLabel: null, arrow: true };
        const obj3 = { source: iconSource, IconComponent };
        obj2.icon = jsx(channel(stateFromStores[28]).RowButton.Icon, { source: iconSource, IconComponent });
        obj2.onPress = handlePress;
        obj2.label = label;
        obj2.subLabel = sublabel;
        obj1.children = jsx(channel(stateFromStores[28]).RowButton, { icon: null, onPress: null, label: null, subLabel: null, arrow: true });
        closure_0 = <flag2 style={closure_1.wrapper} onLayout={onLayout}>{null}</flag2>;
        closure_1 = closure_8 + closure_1.wrapper.paddingTop;
        let obj4 = {
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
        return obj4;
      }
    }
    return closure_1_14;
  }, items2);
};