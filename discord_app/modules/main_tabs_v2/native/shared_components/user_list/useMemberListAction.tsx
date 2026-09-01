// discord_app/modules/main_tabs_v2/native/shared_components/user_list/useMemberListAction.tsx
import closure_3 from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../../../stores/ChannelStore.tsx";
import closure_7 from "../../../../../stores/PermissionStore.tsx";
import closure_8 from "../../../../../stores/RelationshipStore.tsx";
import closure_9 from "../../../../../stores/UserStore.tsx";
import ME from "../../../../../Constants.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ Permissions: c10, AnalyticsSections: unpackModuleId, InstantInviteSources: closure_12 } = ME);
let closure_14 = { listActionRenderer: "children", listActionHeight: "c" };
let closure_15 = createCacheKey.createStyles({ wrapper: { paddingTop: require("PX_24").USERS_LIST_PADDING_BETWEEN_SECTIONS } });
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useMemberListAction.tsx");

export default function useMemberListAction(channel) {
  channel = channel.channel;
  let flag = channel.disable;
  if (flag === undefined) {
    flag = false;
  }
  importDefault = undefined;
  let stateFromStores;
  let callback;
  let React;
  let flag2;
  let flag3;
  let id;
  let friend;
  let first;
  let constants;
  callback = undefined;
  let callback1;
  let tmp = callback2();
  importDefault = tmp;
  const items = [first];
  stateFromStores = channel(stateFromStores[11]).useStateFromStores(items, () => {
    let isDMResult;
    if (channel != null) {
      isDMResult = obj.isDM();
    }
    let tmp2 = null;
    if (isDMResult) {
      const user = first.getUser(obj.getRecipientId());
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
  callback = canResult;
  let tmp7 = null != channel && !flag;
  if (tmp7) {
    if (canResult) {
      tmp7 = canResult;
    } else if (channel.isDM()) {
      let isFriendResult = friend.isFriend(channel.getRecipientId());
    } else {
      isFriendResult = channel.isMultiUserDM() || id.can(constants.CREATE_INSTANT_INVITE, channel);
    }
  }
  React = tmp7;
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
  const tmp13 = importDefault(stateFromStores[13])();
  friend = tmp13;
  const tmp14 = callback(React.useState(undefined), 2);
  first = tmp14[0];
  constants = tmp14[1];
  callback = React.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    callback((arg0) => {
      let tmp = arg0;
      if (arg0 == null) {
        tmp = height;
      }
      return tmp;
    });
  }, []);
  const items1 = [id];
  callback1 = React.useCallback(() => {
    if (null != id) {
      channel(stateFromStores[14]).navigateToNewGroupDM(tmp, callback.MEMBER_LIST);
      const obj = channel(stateFromStores[14]);
    }
  }, items1);
  const items2 = [canResult, id, callback1, flag2, flag3, first, callback, stateFromStores, tmp13, tmp7, tmp];
  return React.useMemo(() => {
    if (null != id) {
      if (c4) {
        if (flag2) {
          let obj = { iconSource: null, IconComponent: null, label: null, sublabel: null, handlePress: null };
          obj[0] = lib(stateFromStores[15]);
          obj[1] = channel(stateFromStores[16]).ChatPlusIcon;
          const intl4 = channel(stateFromStores[17]).intl;
          obj[2] = intl4.string(channel(stateFromStores[17]).t["3hF1W4"]);
          let formatToPlainStringResult;
          if (null != stateFromStores) {
            const intl5 = channel(stateFromStores[17]).intl;
            obj = { recipient: null };
            obj[0] = tmp35;
            formatToPlainStringResult = intl5.formatToPlainString(channel(stateFromStores[17]).t["Sh/xNN"], obj);
          }
          obj[3] = formatToPlainStringResult;
          obj[4] = callback1;
          let tmp12 = obj;
        } else {
          obj = { iconSource: null, IconComponent: null, label: null, handlePress: null };
          if (flag3) {
            obj[0] = lib(stateFromStores[18]);
            obj[1] = channel(stateFromStores[19]).GroupPlusIcon;
            const intl3 = channel(stateFromStores[17]).intl;
            obj[2] = intl3.string(channel(stateFromStores[17]).t["LR+Ptf"]);
            obj[3] = function handlePress() {
              if (null != closure_1_6.getChannel(closure_7)) {
                let obj = callback(closure_1_2[20]);
                if (obj.UNSAFE_isDismissibleContentDismissed(callback(closure_1_2[21]).DismissibleContent.GDM_INVITE_REMINDER)) {
                  callback3();
                } else {
                  obj = { onClick: null };
                  obj[0] = callback3;
                  callback2(tmp2[22])(obj);
                }
                tmp2 = closure_1_2;
              }
            };
            tmp12 = obj;
          } else if (c3) {
            obj[0] = tmp4(tmp5[23]);
            obj[1] = channel(stateFromStores[24]).SettingsIcon;
            const intl2 = channel(stateFromStores[17]).intl;
            obj[2] = intl2.string(channel(stateFromStores[17]).t.z9Mqln);
            obj[3] = function handlePress() {
              channel = closure_1_6.getChannel(closure_7);
              if (null != channel) {
                const result = callback(closure_1_2[25]).openChannelMembersActionSheet(channel.id, channel.guild_id);
                const obj = callback(closure_1_2[25]);
              }
            };
            tmp12 = obj;
          } else {
            obj[0] = tmp4(tmp5[18]);
            obj[1] = channel(stateFromStores[19]).GroupPlusIcon;
            const intl = channel(stateFromStores[17]).intl;
            obj[2] = intl.string(channel(stateFromStores[17]).t["Ab/6S0"]);
            obj[3] = function handlePress() {
              channel = closure_1_6.getChannel(closure_7);
              if (null != channel) {
                let obj = callback(closure_1_2[26]);
                const result = obj.dismissGlobalKeyboard();
                obj = { source: null };
                obj[0] = closure_1_12.CHAT_SIDEBAR;
                const result1 = callback(closure_1_2[27]).showInstantInviteActionSheet(channel, obj);
                const obj2 = callback(closure_1_2[27]);
              }
            };
            tmp12 = obj;
          }
        }
        obj1 = { style: null, onLayout: null, children: null };
        obj1[0] = lib.wrapper;
        obj1[1] = callback;
        ({ label, iconSource, IconComponent, handlePress, sublabel } = tmp12);
        let obj2 = { icon: null, onPress: null, label: null, subLabel: null, arrow: true };
        const obj3 = { source: null, IconComponent: null };
        obj3[0] = iconSource;
        obj3[1] = IconComponent;
        obj2[0] = closure_1_13(channel(stateFromStores[28]).RowButton.Icon, obj3);
        obj2[1] = handlePress;
        obj2[2] = label;
        obj2[3] = sublabel;
        obj1[2] = closure_1_13(channel(stateFromStores[28]).RowButton, obj2);
        closure_0 = closure_1_13(flag2, obj1);
        lib = closure_8 + lib.wrapper.paddingTop;
        const obj4 = { listActionRenderer: null, listActionHeight: null };
        obj4[0] = function listActionRenderer() {
          return closure_0;
        };
        obj4[1] = function listActionHeight() {
          let tmp = closure_1_9;
          if (closure_1_9 == null) {
            tmp = closure_1;
          }
          return tmp;
        };
        return obj4;
      }
    }
    return closure_1_14;
  }, items2);
};