import importAllResult from "noop";
import ensureGuildLoaded from "ensureGuildLoaded";
import sortActivity from "sortActivity";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let closure_12;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function GroupDmMemberCount(channel) {
  channel = channel.channel;
  let items = [mergeGuildAvatar, sortActivity];
  const stateFromStores = channel(589).useStateFromStores(items, () => {
    const items = [...channel.recipients];
    const currentUser = outer1_7.getCurrentUser();
    let str;
    if (currentUser != null) {
      str = currentUser.id;
    }
    if (str == null) {
      str = "0";
    }
    items[tmp] = str;
    return items.reduce((arg0, arg1) => {
      status = status.getStatus(arg1);
      let num = 0;
      if (status !== constants.INVISIBLE) {
        num = 0;
        if (status !== tmp2.OFFLINE) {
          num = 0;
          if (status !== tmp2.UNKNOWN) {
            num = 1;
          }
        }
      }
      return arg0 + num;
    }, 0);
  });
  const obj = channel(589);
  return channel(12455).renderMemberCountText(stateFromStores, channel.recipients.length);
}
let c3 = importAllResult;
({ ChannelTypes: metroImportAll, StatusTypes: c9 } = ME);
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = jsxProd);
let closure_13 = require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.REFRESH_MEDIUM_32];
let obj = { activityStatusText: null };
obj = { color: require("Themes").colors.TEXT_MUTED };
obj[0] = obj;
let closure_14 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function PrivateChannelHeader(channelId) {
  let isMobileOnline;
  let isVROnline;
  let status;
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  const pressable = channelId.pressable;
  let stateFromStores;
  let stateFromStores1;
  let obj = channelId(stateFromStores[10]);
  const items = [ensureGuildLoaded];
  stateFromStores = obj.useStateFromStores(items, () => outer1_4.getChannel(channelId));
  let obj2 = channelId(stateFromStores[10]);
  const items1 = [mergeGuildAvatar];
  stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let type;
    if (stateFromStores != null) {
      type = obj.type;
    }
    let user;
    if (type === outer1_8.DM) {
      user = outer1_7.getUser(obj.getRecipientId());
    }
    return user;
  });
  let obj4 = channelId(stateFromStores[10]);
  const items2 = [sortActivity];
  const stateFromStoresObject = obj4.useStateFromStoresObject(items2, () => {
    let isMobileOnlineResult = null != stateFromStores1;
    if (isMobileOnlineResult) {
      isMobileOnlineResult = outer1_5.isMobileOnline(tmp.id);
    }
    const obj = { isMobileOnline: isMobileOnlineResult, isVROnline: null, status: null };
    let isVROnlineResult = null != tmp;
    if (isVROnlineResult) {
      isVROnlineResult = outer1_5.isVROnline(tmp.id);
    }
    obj[1] = isVROnlineResult;
    if (null != stateFromStores1) {
      let UNKNOWN = outer1_5.getStatus(tmp.id);
    } else {
      UNKNOWN = outer1_9.UNKNOWN;
    }
    obj[2] = UNKNOWN;
    return obj;
  });
  ({ isMobileOnline, isVROnline, status } = stateFromStoresObject);
  const items3 = [channelId, screenIndex];
  const callback = stateFromStores1.useCallback(() => {
    const result = channelId(stateFromStores[11]).navigateToChannelDetails(channelId, screenIndex, "private-channel-header-title");
  }, items3);
  if (null != stateFromStores) {
    let tmp2Result = tmp2(tmp3[12]);
    let channelName = tmp2Result.computeChannelName(stateFromStores, tmp4, upsertRelationship);
  } else {
    const intl = tmp2(tmp3[13]).intl;
    channelName = intl.string(tmp2(tmp3[13]).t.ai6Lbr);
  }
  let tmp10Result = null;
  if (null != stateFromStores1) {
    obj = { userId: null, guildId: null, textStyle: null };
    obj[0] = stateFromStores1.id;
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    obj[1] = guild_id;
    obj[2] = tmp.activityStatusText;
    tmp10Result = callback(screenIndex(tmp3[14]), obj);
    const tmp10 = callback;
    const tmp12 = screenIndex(tmp3[14]);
  }
  tmp2Result = tmp2(tmp3[15]);
  let isMultiUserDMResult = null != stateFromStores;
  const shouldChannelShowLoadingIndicator = tmp2Result.useShouldChannelShowLoadingIndicator(channelId);
  if (isMultiUserDMResult) {
    isMultiUserDMResult = stateFromStores.isMultiUserDM();
  }
  if (shouldChannelShowLoadingIndicator) {
    tmp10Result = callback(tmp2(tmp3[15]).ChannelHeaderLoadingIndicator, {});
  } else if (isMultiUserDMResult) {
    obj = { channel: null };
    obj[0] = stateFromStores;
    tmp10Result = callback(GroupDmMemberCount, obj);
  }
  const intl2 = tmp2(tmp3[13]).intl;
  const formatToPlainStringResult = intl2.formatToPlainString(channelId(stateFromStores[13]).t.UbNmGc, { channelName });
  let humanizeStatusResult = null;
  if (null != stateFromStores1) {
    humanizeStatusResult = null;
    if (!stateFromStores1.isSystemUser()) {
      const obj1 = { isMobile: null, isVR: null };
      obj1[0] = isMobileOnline;
      obj1[1] = isVROnline;
      humanizeStatusResult = tmp2(tmp3[16]).humanizeStatus(status, obj1);
      const tmp2Result1 = tmp2(tmp3[16]);
    }
  }
  const intl3 = tmp2(tmp3[13]).intl;
  const stringResult = intl3.string(channelId(stateFromStores[13]).t.x87QCk);
  if (null != humanizeStatusResult) {
    const _HermesInternal2 = HermesInternal;
    let combined = "" + formatToPlainStringResult + ", " + humanizeStatusResult + ", " + stringResult;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + formatToPlainStringResult + ", " + stringResult;
  }
  if (null != stateFromStores1) {
    const tmp2Result2 = tmp2(tmp3[17]);
    let renderUserAvatarResult = tmp2Result2.renderUserAvatar(stateFromStores1, status, isMobileOnline, isVROnline);
  } else {
    let isGroupDMResult;
    if (stateFromStores != null) {
      isGroupDMResult = stateFromStores.isGroupDM();
    }
    const tmp2Result3 = tmp2(tmp3[17]);
    if (isGroupDMResult) {
      renderUserAvatarResult = tmp2Result3.renderGroupDMIcon(stateFromStores);
    } else {
      renderUserAvatarResult = tmp2Result3.renderEmptyIcon();
    }
  }
  const items4 = [renderUserAvatarResult, ];
  tmp = callback2();
  const tmp28 = closure_12;
  tmp4 = mergeGuildAvatar;
  obj2 = { accessibleTitle: formatToPlainStringResult, subtitle: tmp10Result, disableArrow: !pressable, userId: null, guildId: null };
  let id;
  if (stateFromStores1 != null) {
    id = stateFromStores1.id;
  }
  obj2[3] = id;
  let guild_id1;
  if (stateFromStores != null) {
    guild_id1 = stateFromStores.guild_id;
  }
  const obj3 = { children: null };
  obj2[4] = guild_id1;
  items4[1] = channelId(stateFromStores[17]).renderChannelTitle(channelName, obj2);
  obj3[0] = items4;
  const tmp28Result = tmp28(closure_11, obj3);
  if (pressable) {
    let num = 44;
    if (null == tmp10Result) {
      num = closure_13;
    }
    obj4 = { children: null };
    const tmp2Result5 = tmp2(tmp3[17]);
    obj4[0] = tmp2Result5.renderTitleWrapper(tmp28Result, callback, combined, num);
    return callback(tmp29, obj4);
  } else {
    return tmp28Result;
  }
  const tmp2Result4 = channelId(stateFromStores[17]);
});
let result = require("sortActivity").fileFinishedImporting("modules/main_tabs_v2/native/channel/header/PrivateChannelHeader.tsx");

export default memoResult;