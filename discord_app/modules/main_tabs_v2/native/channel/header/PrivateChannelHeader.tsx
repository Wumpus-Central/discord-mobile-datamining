// === Module 13266: GroupDmMemberCount ===

// Module 13266 (GroupDmMemberCount)
import ThemesDefault from "Themes" /* 576 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "ensureGuildLoaded" /* 1957 */;
import closure_6 from "sortActivity" /* 4600 */;
import closure_7 from "markAllUserIdListsStale" /* 4209 */;
import closure_8 from "mergeGuildAvatar" /* 1371 */;
import ME from "ME" /* 1074 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
function GroupDmMemberCount(channel) {
  channel = channel.channel;
  let items = [closure_8, closure_6];
  const stateFromStores = channel(504).useStateFromStores(items, () => {
    const items = [...channel.recipients];
    const currentUser = closure_1_8.getCurrentUser();
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
  const obj = channel(504);
  return channel(13269).renderMemberCountText(stateFromStores, channel.recipients.length);
}
let c3 = importAllResult;
({ ChannelTypes: c9, StatusTypes: c10 } = ME);
({ jsx: unpackModuleId, Fragment: closure_12, jsxs: map1 } = jsxProd);
let closure_14 = require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.REFRESH_MEDIUM_32];
let obj = { activityStatusText: null, groupDMIconAnchor: null };
obj = { color: ThemesDefault.colors.TEXT_MUTED };
obj[0] = obj;
obj[1] = { marginRight: 12, flexShrink: 0 };
let closure_15 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function PrivateChannelHeader(channelId) {
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  const pressable = channelId.pressable;
  let stateFromStores;
  let stateFromStores1;
  const tmp = callback2();
  let obj = channelId(stateFromStores[11]);
  const items = [closure_5];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_5.getChannel(channelId));
  let obj2 = channelId(stateFromStores[11]);
  const items1 = [closure_8];
  stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let type;
    if (stateFromStores != null) {
      type = obj.type;
    }
    let user;
    if (type === closure_1_9.DM) {
      user = closure_1_8.getUser(obj.getRecipientId());
    }
    return user;
  });
  let obj4 = channelId(stateFromStores[11]);
  const items2 = [closure_6];
  const stateFromStoresObject = obj4.useStateFromStoresObject(items2, () => {
    let isMobileOnlineResult = null != stateFromStores1;
    if (isMobileOnlineResult) {
      isMobileOnlineResult = closure_1_6.isMobileOnline(tmp.id);
    }
    const obj = { isMobileOnline: isMobileOnlineResult, isVROnline: null, status: null };
    let isVROnlineResult = null != tmp;
    if (isVROnlineResult) {
      isVROnlineResult = closure_1_6.isVROnline(tmp.id);
    }
    obj[1] = isVROnlineResult;
    if (null != stateFromStores1) {
      let UNKNOWN = closure_1_6.getStatus(tmp.id);
    } else {
      UNKNOWN = closure_1_10.UNKNOWN;
    }
    obj[2] = UNKNOWN;
    return obj;
  });
  ({ isMobileOnline, isVROnline, status } = stateFromStoresObject);
  const items3 = [channelId, screenIndex];
  const callback = stateFromStores1.useCallback(() => {
    const result = channelId(stateFromStores[12]).navigateToChannelDetails(channelId, screenIndex, "private-channel-header-title");
  }, items3);
  if (null != stateFromStores) {
    let tmp2Result = tmp2(tmp3[13]);
    let channelName = tmp2Result.computeChannelName(stateFromStores, tmp4, closure_7);
  } else {
    const intl = tmp2(tmp3[14]).intl;
    channelName = intl.string(tmp2(tmp3[14]).t.ai6Lbr);
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
    tmp10Result = callback(screenIndex(tmp3[15]), obj);
    const tmp10 = callback;
    const tmp12 = screenIndex(tmp3[15]);
  }
  tmp2Result = tmp2(tmp3[16]);
  let isMultiUserDMResult = null != stateFromStores;
  const shouldChannelShowLoadingIndicator = tmp2Result.useShouldChannelShowLoadingIndicator(channelId);
  if (isMultiUserDMResult) {
    isMultiUserDMResult = stateFromStores.isMultiUserDM();
  }
  if (shouldChannelShowLoadingIndicator) {
    tmp10Result = callback(tmp2(tmp3[16]).ChannelHeaderLoadingIndicator, {});
  } else if (isMultiUserDMResult) {
    obj = { channel: null };
    obj[0] = stateFromStores;
    tmp10Result = callback(GroupDmMemberCount, obj);
  }
  const intl2 = tmp2(tmp3[14]).intl;
  const formatToPlainStringResult = intl2.formatToPlainString(channelId(stateFromStores[14]).t.UbNmGc, { channelName });
  let humanizeStatusResult = null;
  if (null != stateFromStores1) {
    humanizeStatusResult = null;
    if (!stateFromStores1.isSystemUser()) {
      obj1 = { isMobile: null, isVR: null };
      obj1[0] = isMobileOnline;
      obj1[1] = isVROnline;
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
      obj2 = { style: null, children: null };
      obj2[0] = tmp.groupDMIconAnchor;
      const obj3 = { channelId: null, location: "GroupDMChannelHeader", children: null };
      obj3[0] = channelId;
      const tmp35 = screenIndex(tmp3[19]);
      obj3[2] = tmp2(tmp3[18]).renderGroupDMIcon(stateFromStores);
      obj2[1] = callback(tmp35, obj3, channelId);
      renderUserAvatarResult = callback(View, obj2);
      const tmp2Result3 = tmp2(tmp3[18]);
    } else {
      renderUserAvatarResult = tmp2(tmp3[18]).renderEmptyIcon();
      const tmp2Result4 = tmp2(tmp3[18]);
    }
  }
  const items4 = [renderUserAvatarResult, ];
  obj4 = { accessibleTitle: formatToPlainStringResult, subtitle: tmp10Result, disableArrow: !pressable, userId: null, guildId: null };
  let id;
  if (stateFromStores1 != null) {
    id = stateFromStores1.id;
  }
  obj4[3] = id;
  let guild_id1;
  if (stateFromStores != null) {
    guild_id1 = stateFromStores.guild_id;
  }
  const obj5 = { children: null };
  obj4[4] = guild_id1;
  items4[1] = channelId(stateFromStores[18]).renderChannelTitle(channelName, obj4);
  obj5[0] = items4;
  const tmp28Result = closure_13(closure_12, obj5);
  if (pressable) {
    let num = 44;
    if (null == tmp10Result) {
      num = closure_14;
    }
    const obj6 = { children: null };
    const tmp2Result6 = tmp2(tmp3[18]);
    obj6[0] = tmp2Result6.renderTitleWrapper(tmp28Result, callback, combined, num);
    return callback(tmp29, obj6);
  } else {
    return tmp28Result;
  }
  const tmp28 = closure_13;
  const tmp2Result5 = channelId(stateFromStores[18]);
  tmp4 = closure_8;
});
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/channel/header/PrivateChannelHeader.tsx");

export default memoResult;