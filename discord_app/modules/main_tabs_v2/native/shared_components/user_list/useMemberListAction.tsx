// === Module 11621: useMemberListAction ===

// Module 11621 (useMemberListAction)
import openGroupDMAddMembersDefault from "openGroupDMAddMembers" /* 11625 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import PermissionStore from "PermissionStore" /* 4946 */;
import RelationshipStore from "RelationshipStore" /* 4956 */;
import UserStore from "UserStore" /* 1383 */;

const require = fn;
const View = fn(17).View;
const USERS_LIST_PADDING_BETWEEN_SECTIONS = fn(10734).USERS_LIST_PADDING_BETWEEN_SECTIONS;
const Constants = fn(1072);
({ Permissions: closure_11, AnalyticsSections: closure_12, InstantInviteSources: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let closure_16 = { listActionRenderer: "Array", listActionHeight: "flexDirection" };
const createStyles = fn(5014);
let closure_17 = createStyles.createStyles({ wrapper: { paddingTop: USERS_LIST_PADDING_BETWEEN_SECTIONS } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useMemberListAction.tsx");

export default function useMemberListAction(channel) {
  channel = channel.channel;
  let flag = channel.disable;
  if (flag === undefined) {
    flag = false;
  }
  let stateFromStores;
  let recipientId;
  noop = undefined;
  c5 = undefined;
  closure_6 = undefined;
  PermissionStore = undefined;
  c8 = undefined;
  let flag2;
  let flag3;
  let id;
  closure_12 = undefined;
  let first;
  closure_14 = undefined;
  let onLayout;
  let callback1;
  let tmp = closure_17();
  importDefault = tmp;
  let items = [flag2];
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
  let isDMResult;
  if (channel != null) {
    isDMResult = channel.isDM();
  }
  recipientId = null;
  if (true === isDMResult) {
    recipientId = channel.getRecipientId();
  }
  let obj = channel(stateFromStores[11]);
  const tmp4 = flag2;
  const items1 = [tmp4, c8];
  const stateFromStores1 = channel(stateFromStores[11]).useStateFromStores(items1, () => {
    if (null == recipientId) {
      return false;
    } else {
      const user = UserStore.getUser(recipientId);
      let tmp3 = null != user && !user.bot && !user.isSystemUser();
      if (tmp3) {
        tmp3 = !RelationshipStore.isBlocked(recipientId);
      }
      return tmp3;
    }
  });
  let obj3 = c8;
  let obj4 = PermissionStore;
  const tmp2Result = channel(stateFromStores[11]);
  const tmp9 = importDefault;
  let canResult = PermissionStore.can(id.MANAGE_ROLES, channel);
  if (canResult) {
    canResult = tmp2(tmp3[13]).isPrivateGuildChannel(channel);
    const tmp2Result2 = tmp2(tmp3[13]);
  }
  noop = canResult;
  let tmp13 = null != channel && !flag;
  if (tmp13) {
    if (canResult) {
      tmp13 = canResult;
    } else if (channel.isDM()) {
      let isFriendResult = obj3.isFriend(channel.getRecipientId());
    } else {
      isFriendResult = channel.isMultiUserDM() || obj4.can(id.CREATE_INSTANT_INVITE, channel);
    }
  }
  c5 = tmp13;
  let tmp17 = !flag;
  if (!flag) {
    tmp17 = stateFromStores1;
  }
  if (tmp17) {
    tmp17 = tmp10;
  }
  closure_6 = tmp17;
  let tmp18 = tmp13;
  if (!tmp13) {
    tmp18 = tmp17;
  }
  PermissionStore = tmp18;
  let num = 0;
  if (tmp13) {
    num = 1;
  }
  let num2 = 0;
  if (tmp17) {
    num2 = 1;
  }
  const sum = num + num2;
  c8 = sum;
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
  const tmp21 = tmp9(stateFromStores[14])();
  closure_12 = tmp21;
  const tmp22 = recipientId(noop.useState(undefined), 2);
  first = tmp22[0];
  closure_14 = tmp22[1];
  const items2 = [sum];
  onLayout = noop.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    closure_14((arg0) => {
      let tmp = arg0;
      let actionCount;
      if (arg0 != null) {
        actionCount = tmp.actionCount;
      }
      if (actionCount !== c8) {
        const obj = { actionCount: tmp3, height };
        tmp = obj;
      }
      return tmp;
    });
  }, items2);
  const items3 = [id];
  callback1 = noop.useCallback(() => {
    if (null != id) {
      openGroupDMAddMembersDefault(tmp, constants.MEMBER_LIST);
    }
  }, items3);
  const items4 = [sum, canResult, id, callback1, flag2, flag3, first, onLayout, recipientId, stateFromStores, tmp21, tmp18, tmp17, tmp13, tmp];
  return noop.useMemo(() => {
    if (null != id) {
      if (closure_7) {
        if (flag2) {
          let obj2 = { iconSource: height(stateFromStores[16]), IconComponent: channel(stateFromStores[17]).ChatPlusIcon, label: null, sublabel: null, handlePress: null };
          const intl4 = channel(stateFromStores[18]).intl;
          obj2.label = intl4.string(channel(stateFromStores[18]).t["3hF1W4"]);
          let formatToPlainStringResult;
          if (null != stateFromStores) {
            const intl5 = channel(stateFromStores[18]).intl;
            let obj3 = { recipient: tmp35 };
            formatToPlainStringResult = intl5.formatToPlainString(channel(stateFromStores[18]).t["Sh/xNN"], obj3);
          }
          obj2.sublabel = formatToPlainStringResult;
          obj2.handlePress = callback1;
          let tmp12 = obj2;
        } else {
          let obj = { iconSource: null, IconComponent: null, label: null, handlePress: null };
          if (flag3) {
            obj.iconSource = height(stateFromStores[19]);
            obj.IconComponent = channel(stateFromStores[20]).GroupPlusIcon;
            const intl3 = channel(stateFromStores[18]).intl;
            obj.label = intl3.string(channel(stateFromStores[18]).t["LR+Ptf"]);
            obj.handlePress = function handlePress() {
              if (null != closure_6.getChannel(id)) {
                const groupDMAddMembersAction = channel(stateFromStores[15]).getGroupDMAddMembersAction(id, constants.MEMBER_LIST);
                if ("open" === groupDMAddMembersAction) {
                  if (tmp8Result.UNSAFE_isDismissibleContentDismissed(channel(stateFromStores[22]).DismissibleContent.GDM_INVITE_REMINDER)) {
                    onClick();
                  } else {
                    const obj = { onClick };
                    height(stateFromStores[23])(obj);
                  }
                  tmp8Result = channel(stateFromStores[21]);
                } else {
                  const result = channel(stateFromStores[15]).showGroupDMAddMembersRoadblock(groupDMAddMembersAction, constants.MEMBER_LIST);
                  const tmp8Result2 = channel(stateFromStores[15]);
                }
                const obj4 = channel(stateFromStores[15]);
              }
            };
            tmp12 = obj;
          } else if (c4) {
            obj.iconSource = tmp4(stateFromStores[24]);
            obj.IconComponent = channel(stateFromStores[25]).SettingsIcon;
            const intl2 = channel(stateFromStores[18]).intl;
            obj.label = intl2.string(channel(stateFromStores[18]).t.z9Mqln);
            obj.handlePress = function handlePress() {
              channel = closure_6.getChannel(id);
              if (null != channel) {
                const result = channel(stateFromStores[26]).openChannelMembersActionSheet(channel.id, channel.guild_id);
                const obj = channel(stateFromStores[26]);
              }
            };
            tmp12 = obj;
          } else {
            obj.iconSource = tmp4(stateFromStores[19]);
            obj.IconComponent = channel(stateFromStores[20]).GroupPlusIcon;
            const intl = channel(stateFromStores[18]).intl;
            obj.label = intl.string(channel(stateFromStores[18]).t["Ab/6S0"]);
            obj.handlePress = function handlePress() {
              channel = closure_6.getChannel(id);
              if (null != channel) {
                const result = channel(stateFromStores[27]).dismissGlobalKeyboard();
                const obj = channel(stateFromStores[27]);
                const obj3 = { source: first.CHAT_SIDEBAR };
                const result1 = channel(stateFromStores[28]).showInstantInviteActionSheet(channel, obj3);
                const obj2 = channel(stateFromStores[28]);
              }
            };
            tmp12 = obj;
          }
        }
        let obj4 = { style: height.wrapper, onLayout, children: null };
        ({ label, iconSource, IconComponent, handlePress, sublabel } = tmp12);
        const obj5 = { spacing: flag3, children: null };
        let tmp42Result = null;
        if (c5) {
          const obj6 = { icon: null, onPress: null, label: null, subLabel: null, arrow: true };
          const obj7 = { source: iconSource, IconComponent };
          obj6.icon = closure_14(channel(stateFromStores[30]).RowButton.Icon, obj7);
          obj6.onPress = handlePress;
          obj6.label = label;
          obj6.subLabel = sublabel;
          tmp42Result = closure_14(channel(stateFromStores[30]).RowButton, obj6);
        }
        const items = [tmp42Result, ];
        let tmp42Result2 = null;
        if (closure_6) {
          tmp42Result2 = null;
          if (null != recipientId) {
            const obj8 = { icon: null, onPress: null, label: null, arrow: true };
            const obj9 = { IconComponent: channel(stateFromStores[31]).GameControllerIcon };
            obj8.icon = closure_14(channel(stateFromStores[30]).RowButton.Icon, obj9);
            obj8.onPress = function onPress() {
              return height(stateFromStores[32])(recipientId);
            };
            const intl6 = channel(stateFromStores[18]).intl;
            obj8.label = intl6.string(height(stateFromStores[33])["wkSug+"]);
            tmp42Result2 = closure_14(channel(stateFromStores[30]).RowButton, obj8);
          }
        }
        items[1] = tmp42Result2;
        obj5.children = items;
        obj4.children = onLayout(channel(stateFromStores[29]).Stack, obj5);
        closure_0 = closure_14(c5, obj4);
        height = c8 * constants + (c8 - 1) * flag3 + height.wrapper.paddingTop;
        let actionCount;
        if (first != null) {
          actionCount = first.actionCount;
        }
        if (actionCount === c8) {
          height = first.height;
        }
        const obj10 = {
          listActionRenderer() {
                return closure_0;
              },
          listActionHeight() {
                return height;
              }
        };
        return obj10;
      }
    }
    return callback1;
  }, items4);
};