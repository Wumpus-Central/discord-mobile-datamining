// === Module 11771: ? ===

// Module 11771
import importAllResult from "noop" /* 19 */;
import closure_4 from "ensureGuildLoaded" /* 1391 */;
import closure_5 from "markAllUserIdListsStale" /* 4034 */;
import closure_6 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let c3 = importAllResult;
({ RelationshipTypes: error, MAX_GROUP_DM_PARTICIPANTS: closure_8 } = ME);
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
  let analyticsLocations;
  let stateFromStores;
  let stateFromStoresArray;
  let flag2;
  let ownerId;
  let num;
  analyticsLocations = hideTitle(onUserPress[6])().analyticsLocations;
  let obj = channelId(onUserPress[7]);
  let items = [analyticsLocations];
  stateFromStores = obj.useStateFromStores(items, () => analyticsLocations.getChannel(channelId));
  const items1 = [stateFromStoresArray];
  const items2 = [stateFromStores];
  stateFromStoresArray = channelId(onUserPress[7]).useStateFromStoresArray(items1, () => {
    if (null != stateFromStores) {
      const mapped = hideTitle(onUserPress[8])(tmp.recipients).map(stateFromStoresArray.getUser);
      const arr2 = hideTitle(onUserPress[8])(tmp.recipients);
      const found = mapped.unshift(stateFromStoresArray.getCurrentUser()).filter(channelId(onUserPress[9]).isNotNullish);
      const arr = mapped.unshift(stateFromStoresArray.getCurrentUser());
      let items = found.sortBy((username) => username.username.toLowerCase()).value();
      const iter = found.sortBy((username) => username.username.toLowerCase());
    } else {
      items = [];
    }
    return items;
  }, items2);
  obj = { channel: stateFromStores, disable: !flag };
  const obj3 = channelId(onUserPress[7]);
  const tmp = onUserPress;
  const tmp2 = channelId;
  flag2 = undefined;
  ({ listActionRenderer, listActionHeight } = hideTitle(onUserPress[10])(obj));
  if (stateFromStores != null) {
    flag2 = stateFromStores.isMultiUserDM();
  }
  if (flag2 == null) {
    flag2 = false;
  }
  let tmp5;
  if (flag2) {
    ownerId = undefined;
    if (stateFromStores != null) {
      ownerId = stateFromStores.ownerId;
    }
    tmp5 = ownerId;
  }
  ownerId = tmp5;
  num = undefined;
  if (stateFromStores != null) {
    num = stateFromStores.userLimit;
  }
  if (num == null) {
    num = 0;
  }
  const items3 = [stateFromStoresArray];
  const items4 = [flag2, stateFromStoresArray, num, hideTitle];
  const sections = opensUserProfileOnUserPress.useMemo(() => {
    const items = [stateFromStoresArray.length];
    return items;
  }, items3);
  const items5 = [stateFromStoresArray, flag2, tmp5, onUserPress, opensUserProfileOnUserPress, analyticsLocations, channelId];
  const getSectionProps = opensUserProfileOnUserPress.useCallback(() => {
    const intl = channelId(onUserPress[11]).intl;
    const combined = "" + intl.string(channelId(onUserPress[11]).t["9Oq93m"]) + " \u2014 " + stateFromStoresArray.length;
    let sum = combined;
    if (flag2) {
      let tmp3 = num;
      if (0 <= 0) {
        tmp3 = ownerId;
      }
      const _HermesInternal = HermesInternal;
      sum = combined + "/" + tmp3;
    }
    const props = { title: sum, hideTitle };
    return { type: "section", props };
  }, items4);
  const getItemProps = opensUserProfileOnUserPress.useCallback((arg0, arg1) => {
    closure_0 = arg1;
    if (null != stateFromStoresArray[arg1]) {
      let tmp4 = flag2;
      if (flag2) {
        tmp4 = tmp3.id === ownerId;
      }
      let obj = { type: "user", props: null };
      obj = { type: null, user: null, nickname: null, isNameplatedRow: true, onPress: null, isOwner: null, start: null, end: null, canShowDisplayNameStyles: true };
      obj[0] = flag2.NONE;
      obj[1] = tmp3;
      obj[2] = stateFromStores.getNickname(tmp3.id);
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
          obj[1] = closure_1_4;
          obj[2] = closure_0;
          hideTitle(onUserPress[12])(obj);
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
  return num(tmp2(tmp[13]).UsersFastList, { sections, getItemProps, getSectionProps, listHeaderSize, renderListHeader, disableStickySections, disableBackgroundOverlay: true, listStyleOverride, disableBottomSafeZone, insetEnd, inActionSheet });
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/PrivateChannelUserList.tsx");

export default memoResult;