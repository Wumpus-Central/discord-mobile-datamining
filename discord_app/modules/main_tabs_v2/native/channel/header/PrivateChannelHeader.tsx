// discord_app/modules/main_tabs_v2/native/channel/header/PrivateChannelHeader.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ChannelHeader from "ChannelHeader.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import PresenceStore from "../../../../../stores/PresenceStore.tsx";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

require = fn;
function GroupDmMemberCount(channel) {
  channel = channel.channel;
  let items = [UserStore, PresenceStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => {
    const items = [...channel.recipients];
    const currentUser = UserStore.getCurrentUser();
    let str;
    if (currentUser != null) {
      str = currentUser.id;
    }
    if (str == null) {
      str = "0";
    }
    items[tmp] = str;
    return items.reduce((acc, item) => {
      status = status.getStatus(item);
      let num = 0;
      if (status !== constants.INVISIBLE) {
        num = 0;
        if (status !== constants.OFFLINE) {
          num = 0;
          if (status !== constants.UNKNOWN) {
            num = 1;
          }
        }
      }
      return acc + num;
    }, 0);
  });
  const obj = channel(504);
  return channel(13269).renderMemberCountText(stateFromStores, channel.recipients.length);
}
const View = fn(17).View;
const Constants = fn(1074);
({ ChannelTypes: closure_9, StatusTypes: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, Fragment: closure_12, jsxs: map1 } = jsxProd);
let closure_14 = fn(1178).AVATAR_SIZE_MAP[fn(undefined, 1178).AvatarSizes.REFRESH_MEDIUM_32];
const createStyles = fn(4560);
let obj = { activityStatusText: null, groupDMIconAnchor: null };
obj = { color: nativeDefault.colors.TEXT_MUTED };
obj.activityStatusText = obj;
obj.groupDMIconAnchor = { marginRight: 12, flexShrink: 0 };
let closure_15 = createStyles.createStyles(obj);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/header/PrivateChannelHeader.tsx");

export default noop.memo(function PrivateChannelHeader(channelId) {
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  const pressable = channelId.pressable;
  let stateFromStores;
  const tmp = closure_15();
  let obj = channelId(stateFromStores[11]);
  const items = [ChannelStore];
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj2 = channelId(stateFromStores[11]);
  const items1 = [UserStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let type;
    if (stateFromStores != null) {
      type = stateFromStores.type;
    }
    let user;
    if (type === constants.DM) {
      user = UserStore.getUser(stateFromStores.getRecipientId());
    }
    return user;
  });
  let obj4 = channelId(stateFromStores[11]);
  const items2 = [PresenceStore];
  const stateFromStoresObject = obj4.useStateFromStoresObject(items2, () => {
    let isMobileOnlineResult = null != stateFromStores1;
    if (isMobileOnlineResult) {
      isMobileOnlineResult = PresenceStore.isMobileOnline(stateFromStores1.id);
    }
    const obj = { isMobileOnline: isMobileOnlineResult, isVROnline: null, status: null };
    let isVROnlineResult = null != stateFromStores1;
    if (isVROnlineResult) {
      isVROnlineResult = PresenceStore.isVROnline(stateFromStores1.id);
    }
    obj.isVROnline = isVROnlineResult;
    if (null != stateFromStores1) {
      let UNKNOWN = PresenceStore.getStatus(stateFromStores1.id);
    } else {
      UNKNOWN = constants2.UNKNOWN;
    }
    obj.status = UNKNOWN;
    return obj;
  });
  ({ isMobileOnline, isVROnline, status } = stateFromStoresObject);
  const items3 = [channelId, screenIndex];
  const callback = stateFromStores1.useCallback(() => {
    const result = ChannelHeader.navigateToChannelDetails(channelId, screenIndex, "private-channel-header-title");
  }, items3);
  if (null != stateFromStores) {
    let tmp2Result = tmp2(tmp3[13]);
    let channelName = tmp2Result.computeChannelName(stateFromStores, UserStore, RelationshipStore);
  } else {
    const intl = tmp2(tmp3[14]).intl;
    channelName = intl.string(tmp2(tmp3[14]).t.ai6Lbr);
  }
  let tmp10Result = null;
  if (null != stateFromStores1) {
    obj = { userId: stateFromStores1.id, guildId: null, textStyle: null };
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    obj.guildId = guild_id;
    obj.textStyle = tmp.activityStatusText;
    tmp10Result = closure_11(screenIndex(tmp3[15]), obj);
    const tmp12 = screenIndex(tmp3[15]);
  }
  tmp2Result = tmp2(tmp3[16]);
  let isMultiUserDMResult = null != stateFromStores;
  const shouldChannelShowLoadingIndicator = tmp2Result.useShouldChannelShowLoadingIndicator(channelId);
  if (isMultiUserDMResult) {
    isMultiUserDMResult = stateFromStores.isMultiUserDM();
  }
  if (shouldChannelShowLoadingIndicator) {
    tmp10Result = closure_11(tmp2(tmp3[16]).ChannelHeaderLoadingIndicator, {});
  } else if (isMultiUserDMResult) {
    obj = { channel: stateFromStores };
    tmp10Result = closure_11(GroupDmMemberCount, obj);
  }
  const intl2 = tmp2(tmp3[14]).intl;
  const formatToPlainStringResult = intl2.formatToPlainString(channelId(stateFromStores[14]).t.UbNmGc, { channelName });
  let humanizeStatusResult = null;
  if (null != stateFromStores1) {
    humanizeStatusResult = null;
    if (!stateFromStores1.isSystemUser()) {
      const obj1 = { isMobile: isMobileOnline, isVR: isVROnline };
      humanizeStatusResult = tmp2(tmp3[17]).humanizeStatus(status, obj1);
      const tmp2Result1 = tmp2(tmp3[17]);
    }
  }
  const intl3 = tmp2(tmp3[14]).intl;
  const stringResult = intl3.string(channelId(stateFromStores[14]).t.x87QCk);
  if (null != humanizeStatusResult) {
    const _HermesInternal2 = HermesInternal;
    let combined = "" + formatToPlainStringResult + ", " + humanizeStatusResult + ", " + stringResult;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + formatToPlainStringResult + ", " + stringResult;
  }
  if (null != stateFromStores1) {
    const tmp2Result2 = tmp2(tmp3[18]);
    let renderUserAvatarResult = tmp2Result2.renderUserAvatar(stateFromStores1, status, isMobileOnline, isVROnline);
  } else {
    let isGroupDMResult;
    if (stateFromStores != null) {
      isGroupDMResult = stateFromStores.isGroupDM();
    }
    if (isGroupDMResult) {
      obj2 = { style: tmp.groupDMIconAnchor, children: null };
      const obj3 = { channelId, location: "GroupDMChannelHeader", children: null };
      const tmp35 = screenIndex(tmp3[19]);
      obj3.children = tmp2(tmp3[18]).renderGroupDMIcon(stateFromStores);
      obj2.children = closure_11(tmp35, obj3, channelId);
      renderUserAvatarResult = closure_11(View, obj2);
      const tmp2Result3 = tmp2(tmp3[18]);
    } else {
      renderUserAvatarResult = tmp2(tmp3[18]).renderEmptyIcon();
      const tmp2Result4 = tmp2(tmp3[18]);
    }
  }
  const items4 = [renderUserAvatarResult];
  obj4 = {
    accessibleTitle: formatToPlainStringResult,
    subtitle: tmp10Result,
    disableArrow: !pressable,
    userId: null,
    guildId: null,
  };
  let id;
  if (stateFromStores1 != null) {
    id = stateFromStores1.id;
  }
  obj4.userId = id;
  let guild_id1;
  if (stateFromStores != null) {
    guild_id1 = stateFromStores.guild_id;
  }
  const obj5 = { children: null };
  obj4.guildId = guild_id1;
  items4[1] = channelId(stateFromStores[18]).renderChannelTitle(channelName, obj4);
  obj5.children = items4;
  const tmp28Result = closure_13(closure_12, obj5);
  if (pressable) {
    let num = 44;
    if (null == tmp10Result) {
      num = closure_14;
    }
    const obj6 = { children: null };
    const tmp2Result6 = tmp2(tmp3[18]);
    obj6.children = tmp2Result6.renderTitleWrapper(tmp28Result, callback, combined, num);
    return closure_11(closure_12, obj6);
  } else {
    return tmp28Result;
  }
  const tmp2Result5 = channelId(stateFromStores[18]);
});
