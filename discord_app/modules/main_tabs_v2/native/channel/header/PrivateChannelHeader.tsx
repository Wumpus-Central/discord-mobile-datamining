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
let closure_14 = fn(1177).AVATAR_SIZE_MAP[fn(undefined, 1177).AvatarSizes.REFRESH_MEDIUM_32];
let closure_15 = Object.freeze({ onlineCount: null, memberCount: null });
const createStyles = fn(4639);
let obj = {
  activityStatusText: { color: nativeDefault.colors.TEXT_MUTED },
  groupDMIconAnchor: { marginRight: 12, flexShrink: 0 },
};
let closure_16 = createStyles.createStyles(obj);
let obj3 = { color: nativeDefault.colors.TEXT_MUTED };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/header/PrivateChannelHeader.tsx");

export default noop.memo(function PrivateChannelHeader(channelId) {
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  const pressable = channelId.pressable;
  let stateFromStores;
  const tmp = closure_16();
  let items = [ChannelStore];
  stateFromStores = channelId(stateFromStores[11]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj = channelId(stateFromStores[11]);
  const items1 = [UserStore];
  const stateFromStores1 = channelId(stateFromStores[11]).useStateFromStores(items1, () => {
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
  const obj3 = channelId(stateFromStores[11]);
  const items2 = [PresenceStore];
  const stateFromStoresObject = channelId(stateFromStores[11]).useStateFromStoresObject(items2, () => {
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
    let channelName = tmp2(tmp3[13]).computeChannelName(stateFromStores, UserStore, RelationshipStore);
    const tmp2Result = tmp2(tmp3[13]);
  } else {
    const intl = tmp2(tmp3[14]).intl;
    channelName = intl.string(tmp2(tmp3[14]).t.ai6Lbr);
  }
  let result = null;
  if (null != stateFromStores1) {
    const obj2 = { userId: stateFromStores1.id, guildId: null, textStyle: null };
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    obj2.guildId = guild_id;
    obj2.textStyle = tmp.activityStatusText;
    result = closure_11(screenIndex(tmp3[15]), obj2);
    const tmp13 = screenIndex(tmp3[15]);
  }
  let id;
  const obj5 = channelId(stateFromStores[11]);
  const tmp15 = screenIndex;
  if (stateFromStores1 != null) {
    id = stateFromStores1.id;
  }
  const obj4 = { userId: id, guildId: null };
  let guild_id1;
  if (stateFromStores != null) {
    guild_id1 = stateFromStores.guild_id;
  }
  obj4.guildId = guild_id1;
  let isMultiUserDMResult;
  const tmp16 = screenIndex(stateFromStores[16]);
  if (stateFromStores != null) {
    isMultiUserDMResult = stateFromStores.isMultiUserDM();
  }
  let tmp21 = null;
  if (true === isMultiUserDMResult) {
    tmp21 = stateFromStores;
  }
  closure_129_0 = tmp21;
  const tmp16Result = screenIndex(stateFromStores[16])(obj4);
  const items4 = [UserStore, PresenceStore];
  const items5 = [tmp21];
  const stateFromStoresObject1 = channelId(stateFromStores[11]).useStateFromStoresObject(
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
  const tmp2Result10 = channelId(stateFromStores[11]);
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
    const tmp2Result12 = tmp2(tmp3[18]);
  }
  const intl2 = tmp2(tmp3[14]).intl;
  const formatToPlainStringResult = intl2.formatToPlainString(channelId(stateFromStores[14]).t.UbNmGc, { channelName });
  const items6 = [formatToPlainStringResult, , , ,];
  let humanizeStatusResult = null;
  if (null != stateFromStores1) {
    humanizeStatusResult = null;
    if (!stateFromStores1.isSystemUser()) {
      const obj6 = { isMobile: isMobileOnline, isVR: isVROnline };
      humanizeStatusResult = tmp2(tmp3[19]).humanizeStatus(status, obj6);
      const tmp2Result13 = tmp2(tmp3[19]);
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
    const tmp2Result14 = tmp2(tmp3[18]);
    let renderUserAvatarResult = tmp2Result14.renderUserAvatar(stateFromStores1, status, isMobileOnline, isVROnline);
  } else {
    let isGroupDMResult;
    if (stateFromStores != null) {
      isGroupDMResult = stateFromStores.isGroupDM();
    }
    if (isGroupDMResult) {
      const obj7 = { style: tmp.groupDMIconAnchor, children: null };
      const obj8 = { channelId, location: "GroupDMChannelHeader", children: null };
      const tmp15Result = tmp15(tmp3[20]);
      obj8.children = tmp2(tmp3[18]).renderGroupDMIcon(stateFromStores);
      obj7.children = closure_11(tmp15Result, obj8, channelId);
      renderUserAvatarResult = closure_11(View, obj7);
      const tmp2Result15 = tmp2(tmp3[18]);
    } else {
      renderUserAvatarResult = tmp2(tmp3[18]).renderEmptyIcon();
      const tmp2Result16 = tmp2(tmp3[18]);
    }
  }
  const items7 = [renderUserAvatarResult];
  tmp24 = null != stateFromStoresObject1.onlineCount && null != stateFromStoresObject1.memberCount;
  const tmp2Result11 = channelId(stateFromStores[17]);
  const obj9 = {
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
  obj9.userId = id1;
  let guild_id2;
  if (stateFromStores != null) {
    guild_id2 = stateFromStores.guild_id;
  }
  const obj10 = { children: null };
  obj9.guildId = guild_id2;
  items7[1] = channelId(stateFromStores[18]).renderChannelTitle(channelName, obj9);
  obj10.children = items7;
  const tmp33Result = closure_13(closure_12, obj10);
  if (pressable) {
    let num2 = 44;
    if (null == result) {
      num2 = closure_14;
    }
    const obj11 = { children: null };
    const tmp2Result18 = tmp2(tmp3[18]);
    obj11.children = tmp2Result18.renderTitleWrapper(tmp33Result, callback, joined, num2);
    return closure_11(closure_12, obj11);
  } else {
    return tmp33Result;
  }
  const tmp2Result17 = channelId(stateFromStores[18]);
});
