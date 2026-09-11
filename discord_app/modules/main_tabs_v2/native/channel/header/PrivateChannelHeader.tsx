// discord_app/modules/main_tabs_v2/native/channel/header/PrivateChannelHeader.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ChannelHeader from "ChannelHeader.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import PresenceStore from "../../../../../stores/PresenceStore.tsx";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ ChannelTypes: closure_9, StatusTypes: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, Fragment: closure_12, jsxs: map1 } = jsxProd);
let closure_14 = fn(1178).AVATAR_SIZE_MAP[fn(undefined, 1178).AvatarSizes.REFRESH_MEDIUM_32];
let closure_15 = Object.freeze({ onlineCount: null, memberCount: null });
const createStyles = fn(4606);
let obj = { activityStatusText: null, groupDMIconAnchor: null };
obj = { color: nativeDefault.colors.TEXT_MUTED };
obj.activityStatusText = obj;
obj.groupDMIconAnchor = { marginRight: 12, flexShrink: 0 };
let closure_16 = createStyles.createStyles(obj);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/header/PrivateChannelHeader.tsx");

export default noop.memo(function PrivateChannelHeader(channelId) {
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  const pressable = channelId.pressable;
  let stateFromStores;
  const tmp = closure_16();
  let obj = channelId(stateFromStores[11]);
  let items = [ChannelStore];
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
  let result = null;
  if (null != stateFromStores1) {
    obj = { userId: stateFromStores1.id, guildId: null, textStyle: null };
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    obj.guildId = guild_id;
    obj.textStyle = tmp.activityStatusText;
    result = closure_11(screenIndex(tmp3[15]), obj);
    const tmp13 = screenIndex(tmp3[15]);
  }
  let id;
  if (stateFromStores1 != null) {
    id = stateFromStores1.id;
  }
  obj = { userId: id, guildId: null };
  let guild_id1;
  if (stateFromStores != null) {
    guild_id1 = stateFromStores.guild_id;
  }
  obj.guildId = guild_id1;
  let isMultiUserDMResult;
  const tmp15 = screenIndex;
  const tmp16 = screenIndex(stateFromStores[16]);
  if (stateFromStores != null) {
    isMultiUserDMResult = stateFromStores.isMultiUserDM();
  }
  let tmp21 = null;
  if (true === isMultiUserDMResult) {
    tmp21 = stateFromStores;
  }
  closure_129_0 = tmp21;
  tmp2Result = tmp2(tmp3[11]);
  const items4 = [UserStore, PresenceStore];
  const items5 = [tmp21];
  const stateFromStoresObject1 = tmp2Result.useStateFromStoresObject(
    items4,
    () => {
      const currentUser = UserStore.getCurrentUser();
      if (currentUser != null) {
        const id = currentUser.id;
      }
      if (null != channelId) {
        if (null != id) {
          const items = [];
          items[HermesBuiltin.arraySpread(channelId.recipients, 0)] = id;
          const obj = {
            onlineCount: items.reduce((acc, item) => {
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
            }, 0),
            memberCount: channelId.recipients.length,
          };
          return obj;
        }
      }
      return closure_15;
    },
    items5,
  );
  const tmp16Result = screenIndex(stateFromStores[16])(obj);
  const shouldChannelShowLoadingIndicator = channelId(stateFromStores[17]).useShouldChannelShowLoadingIndicator(
    channelId,
  );
  if (shouldChannelShowLoadingIndicator) {
    result = closure_11(tmp2(tmp3[17]).ChannelHeaderLoadingIndicator, {});
  } else if (tmp24) {
    result = tmp2(tmp3[18]).renderMemberCountText(
      stateFromStoresObject1.onlineCount,
      stateFromStoresObject1.memberCount,
    );
    const tmp2Result2 = tmp2(tmp3[18]);
  }
  const intl2 = tmp2(tmp3[14]).intl;
  const formatToPlainStringResult = intl2.formatToPlainString(channelId(stateFromStores[14]).t.UbNmGc, { channelName });
  const items6 = [formatToPlainStringResult, , , ,];
  let humanizeStatusResult = null;
  if (null != stateFromStores1) {
    humanizeStatusResult = null;
    if (!stateFromStores1.isSystemUser()) {
      const obj1 = { isMobile: isMobileOnline, isVR: isVROnline };
      humanizeStatusResult = tmp2(tmp3[19]).humanizeStatus(status, obj1);
      const tmp2Result3 = tmp2(tmp3[19]);
    }
  }
  items6[1] = humanizeStatusResult;
  items6[2] = tmp16Result;
  let tmp28 = null;
  if (!shouldChannelShowLoadingIndicator) {
    tmp28 = null;
    if (null != stateFromStoresObject1.onlineCount) {
      tmp28 = null;
      if (null != stateFromStoresObject1.memberCount) {
        ({ onlineCount, memberCount } = stateFromStoresObject1);
        let str2 = "online";
        if (0 === onlineCount) {
          str2 = "total";
        }
        if ("online" === str2) {
          memberCount = onlineCount;
        }
        const intl3 = tmp2(tmp3[14]).intl;
        tmp2(tmp3[14]).t;
        const t = { count: memberCount };
        intl3.formatToPlainString("online" === str2 ? t.PIikks : t.etqpUG, t);
        const tmp30 = "online" === str2 ? t.PIikks : t.etqpUG;
      }
    }
  }
  items6[3] = tmp28;
  const intl4 = tmp2(tmp3[14]).intl;
  items6[4] = intl4.string(channelId(stateFromStores[14]).t.x87QCk);
  const found = items6.filter((item) => null != item);
  const joined = found.join(", ");
  if (null != stateFromStores1) {
    const tmp2Result4 = tmp2(tmp3[18]);
    let renderUserAvatarResult = tmp2Result4.renderUserAvatar(stateFromStores1, status, isMobileOnline, isVROnline);
  } else {
    let isGroupDMResult;
    if (stateFromStores != null) {
      isGroupDMResult = stateFromStores.isGroupDM();
    }
    if (isGroupDMResult) {
      obj2 = { style: tmp.groupDMIconAnchor, children: null };
      const obj3 = { channelId, location: "GroupDMChannelHeader", children: null };
      const tmp15Result = tmp15(tmp3[20]);
      obj3.children = tmp2(tmp3[18]).renderGroupDMIcon(stateFromStores);
      obj2.children = closure_11(tmp15Result, obj3, channelId);
      renderUserAvatarResult = closure_11(View, obj2);
      const tmp2Result5 = tmp2(tmp3[18]);
    } else {
      renderUserAvatarResult = tmp2(tmp3[18]).renderEmptyIcon();
      const tmp2Result6 = tmp2(tmp3[18]);
    }
  }
  const items7 = [renderUserAvatarResult];
  tmp24 = null != stateFromStoresObject1.onlineCount && null != stateFromStoresObject1.memberCount;
  const tmp2Result1 = channelId(stateFromStores[17]);
  obj4 = {
    accessibleTitle: formatToPlainStringResult,
    subtitle: result,
    disableArrow: !pressable,
    userId: null,
    guildId: null,
  };
  let id1;
  if (stateFromStores1 != null) {
    id1 = stateFromStores1.id;
  }
  obj4.userId = id1;
  let guild_id2;
  if (stateFromStores != null) {
    guild_id2 = stateFromStores.guild_id;
  }
  const obj5 = { children: null };
  obj4.guildId = guild_id2;
  items7[1] = channelId(stateFromStores[18]).renderChannelTitle(channelName, obj4);
  obj5.children = items7;
  const tmp33Result = closure_13(closure_12, obj5);
  if (pressable) {
    let num2 = 44;
    if (null == result) {
      num2 = closure_14;
    }
    const obj6 = { children: null };
    const tmp2Result8 = tmp2(tmp3[18]);
    obj6.children = tmp2Result8.renderTitleWrapper(tmp33Result, callback, joined, num2);
    return closure_11(closure_12, obj6);
  } else {
    return tmp33Result;
  }
  const tmp2Result7 = channelId(stateFromStores[18]);
});
