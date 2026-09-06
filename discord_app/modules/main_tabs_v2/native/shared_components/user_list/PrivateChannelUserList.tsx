// === Module 12186: ? ===

// Module 12186
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "ensureGuildLoaded" /* 1957 */;
import closure_7 from "markAllUserIdListsStale" /* 4209 */;
import closure_8 from "mergeGuildAvatar" /* 1371 */;
import ME from "ME" /* 1074 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
let c4 = importAllResult;
({ RelationshipTypes: c9, MAX_GROUP_DM_PARTICIPANTS: c10 } = ME);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
const memoResult = importAllResult.memo(function PrivateChannelUserList(channelId) {
  channelId = channelId.channelId;
  let flag = channelId.headerShown;
  ({ disableStickySections, listStyleOverride, disableBottomSafeZone, insetEnd } = channelId);
  if (flag === undefined) {
    flag = true;
  }
  const hideTitle = channelId.hideTitle;
  const onUserPress = channelId.onUserPress;
  ({ opensUserProfileOnUserPress, inActionSheet } = channelId);
  if (opensUserProfileOnUserPress === undefined) {
    opensUserProfileOnUserPress = true;
  }
  const listHeaderContent = channelId.listHeaderContent;
  let analyticsLocations;
  let stateFromStores;
  let stateFromStoresArray;
  let renderListHeader;
  let listHeaderSize;
  let flag2;
  let ownerId;
  closure_12 = undefined;
  let token;
  let token1;
  closure_15 = undefined;
  c16 = undefined;
  let height;
  let callback2;
  analyticsLocations = hideTitle(onUserPress[8])().analyticsLocations;
  let obj = channelId(onUserPress[9]);
  let items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => stateFromStores.getChannel(channelId));
  const items1 = [renderListHeader];
  const items2 = [stateFromStores];
  stateFromStoresArray = channelId(onUserPress[9]).useStateFromStoresArray(items1, () => {
    if (null != stateFromStores) {
      const mapped = hideTitle(onUserPress[10])(tmp.recipients).map(renderListHeader.getUser);
      const arr2 = hideTitle(onUserPress[10])(tmp.recipients);
      const found = mapped.unshift(renderListHeader.getCurrentUser()).filter(channelId(onUserPress[11]).isNotNullish);
      const arr = mapped.unshift(renderListHeader.getCurrentUser());
      let items = found.sortBy((username) => username.username.toLowerCase()).value();
      const iter = found.sortBy((username) => username.username.toLowerCase());
    } else {
      items = [];
    }
    return items;
  }, items2);
  obj = { channel: stateFromStores, disable: !flag };
  const tmp5 = hideTitle(onUserPress[12])(obj);
  renderListHeader = tmp5.listActionRenderer;
  listHeaderSize = tmp5.listActionHeight;
  flag2 = undefined;
  if (stateFromStores != null) {
    flag2 = stateFromStores.isMultiUserDM();
  }
  if (flag2 == null) {
    flag2 = false;
  }
  let tmp6;
  if (flag2) {
    ownerId = undefined;
    if (stateFromStores != null) {
      ownerId = stateFromStores.ownerId;
    }
    tmp6 = ownerId;
  }
  ownerId = tmp6;
  if (flag2) {
    let tmp8 = tmp(tmp2[13])({ useNitroCapExperiment: true });
  } else {
    tmp8 = flag2;
  }
  let tmp3Result = tmp3(tmp2[14]);
  let tmp11 = flag2;
  if (flag2) {
    tmp11 = "entitled" === tmp10;
  }
  if (tmp11) {
    tmp11 = tmp8 > flag2;
  }
  closure_12 = tmp11;
  tmp3Result = tmp3(tmp2[15]);
  token = tmp3Result.useToken(tmp(tmp2[16]).colors.TEXT_SUBTLE);
  const obj3 = channelId(onUserPress[9]);
  token1 = channelId(onUserPress[15]).useToken(tmp(tmp2[16]).colors.ICON_SUBTLE);
  const tmp15 = hideTitle(onUserPress[17])("PrivateChannelUserList");
  closure_15 = tmp15;
  const items3 = [stateFromStoresArray];
  const items4 = [stateFromStoresArray, hideTitle, tmp11, token, token1, tmp15];
  const sections = listHeaderContent.useMemo(() => {
    const items = [stateFromStoresArray.length];
    return items;
  }, items3);
  const items5 = [stateFromStoresArray, flag2, tmp6, onUserPress, opensUserProfileOnUserPress, analyticsLocations, channelId];
  const getSectionProps = listHeaderContent.useCallback(() => {
    let obj = { title: null, hideTitle: null };
    const intl = channelId(onUserPress[18]).intl;
    obj[0] = "" + intl.string(channelId(onUserPress[18]).t["9Oq93m"]) + " \u2014 " + stateFromStoresArray.length;
    obj[1] = hideTitle;
    let tmp3 = closure_12;
    if (closure_12) {
      let str = "xxs";
      if (closure_15) {
        str = "xs";
      }
      obj = { titleLeading: null, onTitlePress: null, colorOverride: null };
      obj = { size: null, color: null, accessible: false };
      obj[0] = str;
      obj[1] = token1;
      obj[0] = ownerId(channelId(tmp2[19]).NitroWheelIcon, obj);
      obj[1] = hideTitle(tmp2[20]);
      obj[2] = token;
      tmp3 = obj;
      const tmp4 = ownerId;
    }
    obj1 = { type: "section", props: null };
    const merged = Object.assign(tmp3);
    obj1[1] = obj;
    return obj1;
  }, items4);
  const getItemProps = listHeaderContent.useCallback((arg0, arg1) => {
    closure_0 = arg1;
    if (null != stateFromStoresArray[arg1]) {
      let tmp4 = flag2;
      if (flag2) {
        tmp4 = tmp3.id === ownerId;
      }
      let obj = { type: "user", props: null };
      obj = { type: null, user: null, nickname: null, isNameplatedRow: true, onPress: null, isOwner: null, start: null, end: null, canShowDisplayNameStyles: true };
      obj[0] = listHeaderSize.NONE;
      obj[1] = tmp3;
      obj[2] = stateFromStoresArray.getNickname(tmp3.id);
      obj[4] = function onPress(id) {
        if (closure_1_2 != null) {
          let obj = { user: null, index: null };
          obj[0] = id;
          obj[1] = closure_0;
          tmp(obj);
        }
        if (closure_1_3) {
          obj = { userId: null, sourceAnalyticsLocations: null, channelId: null };
          obj[0] = id.id;
          obj[1] = closure_1_5;
          obj[2] = closure_0;
          hideTitle(onUserPress[21])(obj);
        }
      };
      obj[5] = tmp4;
      obj[6] = tmp;
      obj[7] = tmp2;
      obj[1] = obj;
      return obj;
    } else {
      obj = { type: "placeholder", props: null };
      obj1 = { start: null, end: null };
      obj1[0] = tmp;
      obj1[1] = tmp2;
      obj[1] = obj1;
      return obj;
    }
  }, items5);
  const tmp3Result1 = channelId(onUserPress[15]);
  [tmp21, c16] = opensUserProfileOnUserPress(listHeaderContent.useState(), 2);
  channelId = undefined;
  if (tmp21 != null) {
    channelId = tmp21.channelId;
  }
  height = undefined;
  if (channelId === channelId) {
    height = tmp21.height;
  }
  const items6 = [channelId];
  callback2 = obj7.useCallback((nativeEvent) => {
    height = nativeEvent.nativeEvent.layout.height;
    _undefined((arg0) => {
      let tmp = arg0;
      channelId = undefined;
      if (arg0 != null) {
        channelId = tmp.channelId;
      }
      if (channelId !== height) {
        const obj = { channelId: null, height: null };
        obj[0] = tmp3;
        obj[1] = height;
        tmp = obj;
      }
      return tmp;
    });
  }, items6);
  const items7 = [channelId, listHeaderContent, renderListHeader, callback2];
  const items8 = [height, listHeaderSize];
  const callback3 = obj7.useCallback(() => {
    const obj = { onLayout: callback2, children: null };
    const items = [listHeaderContent, ];
    let tmp3;
    if (renderListHeader != null) {
      tmp3 = renderListHeader();
    }
    items[1] = tmp3;
    obj[1] = items;
    return closure_12(analyticsLocations, obj, channelId);
  }, items7);
  const callback4 = obj7.useCallback(() => {
    let num = height;
    if (height == null) {
      let tmp;
      if (listHeaderSize != null) {
        tmp = listHeaderSize();
      }
      num = tmp;
    }
    if (num == null) {
      num = 0;
    }
    return num;
  }, items8);
  if (null != listHeaderContent) {
    renderListHeader = callback3;
  }
  if (null != listHeaderContent) {
    listHeaderSize = callback4;
  }
  return ownerId(channelId(onUserPress[22]).UsersFastList, { sections, getItemProps, getSectionProps, listHeaderSize, renderListHeader, disableStickySections, disableBackgroundOverlay: true, listStyleOverride, disableBottomSafeZone, insetEnd, inActionSheet });
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/PrivateChannelUserList.tsx");

export default memoResult;