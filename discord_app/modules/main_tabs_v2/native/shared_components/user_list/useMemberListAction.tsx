// discord_app/modules/main_tabs_v2/native/shared_components/user_list/useMemberListAction.tsx
import _slicedToArray from "_slicedToArray";
import registerAsset from "registerAsset";
import { View } from "ChatPlusIcon";
import ensureGuildLoaded from "ensureGuildLoaded";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { jsx } from "UNSAFE_isDismissibleContentDismissed";
import createCacheKey from "createCacheKey";
import { useIsMobileVisualRefreshExperimentEnabled } from "../../../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import { useScaledRowHeight } from "useScaledRowHeight.tsx";

let c10;
let closure_12;
let unpackModuleId;
const require = arg1;
({ Permissions: c10, AnalyticsSections: unpackModuleId, InstantInviteSources: closure_12 } = ME);
let closure_14 = { listActionRenderer: "Array", listActionHeight: "PX_8" };
let closure_15 = createCacheKey.createStyles({ wrapper: { paddingTop: require("PX_24").USERS_LIST_PADDING_BETWEEN_SECTIONS } });
let result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useMemberListAction.tsx");

export default function useMemberListAction(channel) {
  channel = channel.channel;
  let flag = channel.disable;
  if (flag === undefined) {
    flag = false;
  }
  let importDefault;
  let dependencyMap;
  let stateFromStores;
  let React;
  let c5;
  let flag2;
  let flag3;
  let id;
  let c9;
  let first;
  let closure_11;
  let callback;
  let callback1;
  let tmp = callback();
  importDefault = tmp;
  const tmp4 = useIsMobileVisualRefreshExperimentEnabled("useMemberListAction");
  dependencyMap = tmp4;
  const items = [c9];
  stateFromStores = channel(647).useStateFromStores(items, () => {
    let isDMResult;
    if (channel != null) {
      isDMResult = obj.isDM();
    }
    let tmp2 = null;
    if (isDMResult) {
      const user = _undefined3.getUser(obj.getRecipientId());
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
    canResult = channel(8937).isPrivateGuildChannel(channel);
    const tmp5Result = channel(8937);
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
  const tmp15 = useScaledRowHeight();
  c9 = tmp15;
  const tmp16 = stateFromStores(React.useState(undefined), 2);
  first = tmp16[0];
  closure_11 = tmp16[1];
  callback = React.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    lib((arg0) => {
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
      channel(_undefined2[15]).navigateToNewGroupDM(tmp, lib.MEMBER_LIST);
      const obj = channel(_undefined2[15]);
    }
  }, items1);
  const items2 = [canResult, id, callback1, flag2, flag3, tmp4, first, callback, stateFromStores, tmp15, tmp9, tmp];
  return React.useMemo(() => {
    let IconComponent;
    let handlePress;
    let iconSource;
    let label;
    let sublabel;
    if (null != id) {
      if (c5) {
        if (flag2) {
          let obj = { iconSource: null, IconComponent: null, label: null, sublabel: null, handlePress: null };
          obj[0] = _undefined(_undefined2[16]);
          obj[1] = channel(_undefined2[17]).ChatPlusIcon;
          const intl4 = channel(_undefined2[18]).intl;
          obj[2] = intl4.string(channel(_undefined2[18]).t["3hF1W4"]);
          let formatToPlainStringResult;
          if (null != stateFromStores) {
            const intl5 = channel(_undefined2[18]).intl;
            obj = { recipient: null };
            obj[0] = tmp35;
            formatToPlainStringResult = intl5.formatToPlainString(channel(_undefined2[18]).t["Sh/xNN"], obj);
          }
          obj[3] = formatToPlainStringResult;
          obj[4] = callback1;
          let tmp12 = obj;
        } else {
          obj = { iconSource: null, IconComponent: null, label: null, handlePress: null };
          if (flag3) {
            obj[0] = _undefined(_undefined2[19]);
            obj[1] = channel(_undefined2[20]).GroupPlusIcon;
            const intl3 = channel(_undefined2[18]).intl;
            obj[2] = intl3.string(channel(_undefined2[18]).t["LR+Ptf"]);
            obj[3] = function handlePress() {
              if (null != outer1_6.getChannel(upsertRelationship)) {
                let obj = callback(outer1_2[21]);
                if (obj.UNSAFE_isDismissibleContentDismissed(callback(outer1_2[22]).DismissibleContent.GDM_INVITE_REMINDER)) {
                  callback3();
                } else {
                  obj = { onClick: null };
                  obj[0] = callback3;
                  callback2(tmp2[23])(obj);
                }
                tmp2 = outer1_2;
              }
            };
            tmp12 = obj;
          } else if (c4) {
            obj[0] = tmp4(tmp5[24]);
            obj[1] = channel(_undefined2[25]).SettingsIcon;
            const intl2 = channel(_undefined2[18]).intl;
            obj[2] = intl2.string(channel(_undefined2[18]).t.z9Mqln);
            obj[3] = function handlePress() {
              const channel = outer1_6.getChannel(upsertRelationship);
              if (null != channel) {
                const result = callback(outer1_2[26]).openChannelMembersActionSheet(channel.id, channel.guild_id);
                const obj = callback(outer1_2[26]);
              }
            };
            tmp12 = obj;
          } else {
            obj[0] = tmp4(tmp5[19]);
            obj[1] = channel(_undefined2[20]).GroupPlusIcon;
            const intl = channel(_undefined2[18]).intl;
            obj[2] = intl.string(channel(_undefined2[18]).t["Ab/6S0"]);
            obj[3] = function handlePress() {
              const channel = outer1_6.getChannel(upsertRelationship);
              if (null != channel) {
                let obj = callback(outer1_2[27]);
                const result = obj.dismissGlobalKeyboard();
                obj = { source: null };
                obj[0] = outer1_12.CHAT_SIDEBAR;
                const result1 = callback(outer1_2[28]).showInstantInviteActionSheet(channel, obj);
                const obj2 = callback(outer1_2[28]);
              }
            };
            tmp12 = obj;
          }
        }
        ({ label, iconSource, IconComponent, handlePress, sublabel } = tmp12);
        const obj1 = { style: null, onLayout: null, children: null };
        obj1[0] = _undefined.wrapper;
        obj1[1] = callback;
        if (_undefined2) {
          let obj2 = { icon: null, onPress: null, label: null, subLabel: null, arrow: true };
          const obj3 = { source: null, IconComponent: null };
          obj3[0] = iconSource;
          obj3[1] = IconComponent;
          obj2[0] = tmp42(channel(_undefined2[29]).RowButton.Icon, obj3);
          obj2[1] = handlePress;
          obj2[2] = label;
          obj2[3] = sublabel;
          let tmp42Result = tmp42(tmp47(tmp48[29]).RowButton, obj2);
        } else {
          const obj4 = { icon: null, onPress: null, label: null, subLabel: null, start: true, end: true, arrow: true };
          const obj5 = { source: null, IconComponent: null };
          obj5[0] = iconSource;
          obj5[1] = IconComponent;
          obj4[0] = tmp42(channel(_undefined2[29]).RowButton.Icon, obj5);
          obj4[1] = handlePress;
          obj4[2] = label;
          obj4[3] = sublabel;
          tmp42Result = tmp42(tmp47(tmp48[30]).TableRow, obj4);
        }
        obj1[2] = tmp42Result;
        let closure_0 = tmp42(c5, obj1);
        _undefined = c9 + _undefined.wrapper.paddingTop;
        const obj6 = { listActionRenderer: null, listActionHeight: null };
        obj6[0] = function listActionRenderer() {
          return closure_0;
        };
        obj6[1] = function listActionHeight() {
          let tmp = outer1_10;
          if (outer1_10 == null) {
            tmp = closure_1;
          }
          return tmp;
        };
        return obj6;
      }
    }
    return outer1_14;
  }, items2);
};