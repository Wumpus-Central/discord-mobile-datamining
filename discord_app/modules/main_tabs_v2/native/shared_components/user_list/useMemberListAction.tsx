// === Module 11104: useMemberListAction ===

// Module 11104 (useMemberListAction)
import useIsMobileVisualRefreshExperimentEnabledDefault from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import useScaledRowHeightDefault from "useScaledRowHeight" /* 7708 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "ensureGuildLoaded" /* 1391 */;
import closure_7 from "getUncachedChannelPermissions" /* 4089 */;
import closure_8 from "markAllUserIdListsStale" /* 4098 */;
import closure_9 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const require = arg1;
({ Permissions: c10, AnalyticsSections: unpackModuleId, InstantInviteSources: closure_12 } = ME);
let closure_14 = { listActionRenderer: "Array", listActionHeight: "ct" };
let closure_15 = createCacheKey.createStyles({ wrapper: { paddingTop: require("PX_24").USERS_LIST_PADDING_BETWEEN_SECTIONS } });
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useMemberListAction.tsx");

export default function useMemberListAction(channel) {
  channel = channel.channel;
  let flag = channel.disable;
  if (flag === undefined) {
    flag = false;
  }
  importDefault = undefined;
  dependencyMap = undefined;
  let stateFromStores;
  let React;
  c5 = undefined;
  let flag2;
  let flag3;
  let id;
  closure_9 = undefined;
  let first;
  closure_11 = undefined;
  let callback;
  let callback1;
  let tmp = callback();
  importDefault = tmp;
  const tmp4 = useIsMobileVisualRefreshExperimentEnabledDefault("useMemberListAction");
  dependencyMap = tmp4;
  const items = [closure_9];
  stateFromStores = channel(647).useStateFromStores(items, () => {
    let isDMResult;
    if (channel != null) {
      isDMResult = obj.isDM();
    }
    let tmp2 = null;
    if (isDMResult) {
      user = user.getUser(obj.getRecipientId());
      let username;
      if (user != null) {
        username = user.username;
      }
      tmp2 = username;
    }
    return tmp2;
  });
  let canResult = flag3.can(first.MANAGE_ROLES, channel);
  if (canResult) {
    canResult = channel(9628).isPrivateGuildChannel(channel);
    const tmp5Result = channel(9628);
  }
  React = canResult;
  let tmp9 = null != channel && !flag;
  if (tmp9) {
    if (canResult) {
      tmp9 = canResult;
    } else if (channel.isDM()) {
      let isFriendResult = id.isFriend(channel.getRecipientId());
    } else {
      isFriendResult = channel.isMultiUserDM() || flag3.can(first.CREATE_INSTANT_INVITE, channel);
    }
  }
  c5 = tmp9;
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
  const tmp15 = useScaledRowHeightDefault();
  closure_9 = tmp15;
  const tmp16 = stateFromStores(React.useState(undefined), 2);
  first = tmp16[0];
  closure_11 = tmp16[1];
  callback = React.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    lib2((arg0) => {
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
      channel(4299).navigateToNewGroupDM(tmp, lib2.MEMBER_LIST);
      const obj = channel(4299);
    }
  }, items1);
  const items2 = [canResult, id, callback1, flag2, flag3, tmp4, first, callback, stateFromStores, tmp15, tmp9, tmp];
  return React.useMemo(() => {
    if (null != id) {
      if (c5) {
        if (flag2) {
          let obj = { iconSource: null, IconComponent: null, label: null, sublabel: null, handlePress: null };
          obj[0] = lib(11105);
          obj[1] = channel(11106).ChatPlusIcon;
          const intl4 = channel(1236).intl;
          obj[2] = intl4.string(channel(1236).t["3hF1W4"]);
          let formatToPlainStringResult;
          if (null != stateFromStores) {
            const intl5 = channel(1236).intl;
            obj = { recipient: null };
            obj[0] = tmp35;
            formatToPlainStringResult = intl5.formatToPlainString(channel(1236).t["Sh/xNN"], obj);
          }
          obj[3] = formatToPlainStringResult;
          obj[4] = callback1;
          let tmp12 = obj;
        } else {
          obj = { iconSource: null, IconComponent: null, label: null, handlePress: null };
          if (flag3) {
            obj[0] = lib(10034);
            obj[1] = channel(10035).GroupPlusIcon;
            const intl3 = channel(1236).intl;
            obj[2] = intl3.string(channel(1236).t["LR+Ptf"]);
            obj[3] = function handlePress() {
              if (null != closure_1_6.getChannel(closure_8)) {
                let obj = callback(closure_1_2[21]);
                if (obj.UNSAFE_isDismissibleContentDismissed(callback(closure_1_2[22]).DismissibleContent.GDM_INVITE_REMINDER)) {
                  callback3();
                } else {
                  obj = { onClick: null };
                  obj[0] = callback3;
                  callback2(tmp2[23])(obj);
                }
                tmp2 = closure_1_2;
              }
            };
            tmp12 = obj;
          } else if (c4) {
            obj[0] = tmp4(11111);
            obj[1] = channel(6192).SettingsIcon;
            const intl2 = channel(1236).intl;
            obj[2] = intl2.string(channel(1236).t.z9Mqln);
            obj[3] = function handlePress() {
              channel = closure_1_6.getChannel(closure_8);
              if (null != channel) {
                const result = callback(closure_1_2[26]).openChannelMembersActionSheet(channel.id, channel.guild_id);
                const obj = callback(closure_1_2[26]);
              }
            };
            tmp12 = obj;
          } else {
            obj[0] = tmp4(10034);
            obj[1] = channel(10035).GroupPlusIcon;
            const intl = channel(1236).intl;
            obj[2] = intl.string(channel(1236).t["Ab/6S0"]);
            obj[3] = function handlePress() {
              channel = closure_1_6.getChannel(closure_8);
              if (null != channel) {
                let obj = callback(closure_1_2[27]);
                const result = obj.dismissGlobalKeyboard();
                obj = { source: null };
                obj[0] = closure_1_12.CHAT_SIDEBAR;
                const result1 = callback(closure_1_2[28]).showInstantInviteActionSheet(channel, obj);
                const obj2 = callback(closure_1_2[28]);
              }
            };
            tmp12 = obj;
          }
        }
        ({ label, iconSource, IconComponent, handlePress, sublabel } = tmp12);
        obj1 = { style: null, onLayout: null, children: null };
        obj1[0] = lib.wrapper;
        obj1[1] = callback;
        if (dependencyMap) {
          let obj2 = { icon: null, onPress: null, label: null, subLabel: null, arrow: true };
          const obj3 = { source: null, IconComponent: null };
          obj3[0] = iconSource;
          obj3[1] = IconComponent;
          obj2[0] = tmp42(channel(8297).RowButton.Icon, obj3);
          obj2[1] = handlePress;
          obj2[2] = label;
          obj2[3] = sublabel;
          let tmp42Result = tmp42(tmp47(8297).RowButton, obj2);
        } else {
          const obj4 = { icon: null, onPress: null, label: null, subLabel: null, start: true, end: true, arrow: true };
          const obj5 = { source: null, IconComponent: null };
          obj5[0] = iconSource;
          obj5[1] = IconComponent;
          obj4[0] = tmp42(channel(8297).RowButton.Icon, obj5);
          obj4[1] = handlePress;
          obj4[2] = label;
          obj4[3] = sublabel;
          tmp42Result = tmp42(tmp47(5551).TableRow, obj4);
        }
        obj1[2] = tmp42Result;
        closure_0 = tmp42(c5, obj1);
        lib = closure_9 + lib.wrapper.paddingTop;
        const obj6 = { listActionRenderer: null, listActionHeight: null };
        obj6[0] = function listActionRenderer() {
          return closure_0;
        };
        obj6[1] = function listActionHeight() {
          let tmp = closure_1_10;
          if (closure_1_10 == null) {
            tmp = closure_1;
          }
          return tmp;
        };
        return obj6;
      }
    }
    return closure_1_14;
  }, items2);
};