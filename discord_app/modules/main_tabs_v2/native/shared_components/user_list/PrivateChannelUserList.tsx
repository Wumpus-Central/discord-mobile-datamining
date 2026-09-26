// === Module 11668: PrivateChannelUserList ===

// Module 11668 (PrivateChannelUserList)
import _modDef12 from "module_12" /* 12 */;
import util from "util" /* 1115 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7624 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8122 */;
import openGroupDMNitroCapInfoActionSheetDefault from "openGroupDMNitroCapInfoActionSheet" /* 11670 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ RelationshipTypes: closure_9, MAX_GROUP_DM_PARTICIPANTS: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/PrivateChannelUserList.tsx");

export default noop.memo(function PrivateChannelUserList(channelId) {
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
  let stateFromStores;
  let renderListHeader;
  let ownerId;
  closure_12 = undefined;
  let token;
  let token1;
  closure_15 = undefined;
  c16 = undefined;
  let height;
  let callback2;
  const analyticsLocations = hideTitle(onUserPress[8])().analyticsLocations;
  let items = [stateFromStores];
  stateFromStores = channelId(onUserPress[9]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj = channelId(onUserPress[9]);
  const items1 = [renderListHeader];
  const items2 = [stateFromStores];
  const stateFromStoresArray = channelId(onUserPress[9]).useStateFromStoresArray(items1, () => {
    if (null != stateFromStores) {
      const mapped = _modDef12(tmp.recipients).map(UserStore.getUser);
      const arr2 = _modDef12(tmp.recipients);
      const found = mapped.unshift(UserStore.getCurrentUser()).filter(GlobalUtils.isNotNullish);
      const arr = mapped.unshift(UserStore.getCurrentUser());
      let items = found.sortBy((username) => username.username.toLowerCase()).value();
      const iter = found.sortBy((username) => username.username.toLowerCase());
    } else {
      items = [];
    }
    return items;
  }, items2);
  const tmp5 = hideTitle(onUserPress[12])({ channel: stateFromStores, disable: !flag });
  renderListHeader = tmp5.listActionRenderer;
  let listHeaderSize = tmp5.listActionHeight;
  let flag2;
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
  channelId(onUserPress[14]);
  let tmp11 = flag2;
  if (flag2) {
    tmp11 = "entitled" === tmp10;
  }
  if (tmp11) {
    tmp11 = tmp8 > flag2;
  }
  closure_12 = tmp11;
  let obj2 = { channel: stateFromStores, disable: !flag };
  let obj3 = channelId(onUserPress[9]);
  token = channelId(onUserPress[15]).useToken(tmp(tmp2[16]).colors.TEXT_SUBTLE);
  const tmp3Result3 = channelId(onUserPress[15]);
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
    const obj = { title: null, hideTitle: null };
    const intl = util.intl;
    obj.title = "" + intl.string(util.t["9Oq93m"]) + " \u2014 " + stateFromStoresArray.length;
    obj.hideTitle = hideTitle;
    let tmp3 = closure_12;
    if (closure_12) {
      let str = "xxs";
      if (closure_15) {
        str = "xs";
      }
      const obj2 = { titleLeading: null, onTitlePress: null, colorOverride: null };
      const obj3 = { size: str, color: token1, accessible: false };
      obj2.titleLeading = closure_2_11(NitroWheelIcon.NitroWheelIcon, obj3);
      obj2.onTitlePress = openGroupDMNitroCapInfoActionSheetDefault;
      obj2.colorOverride = token;
      tmp3 = obj2;
    }
    const element = { type: "section", props: null };
    const merged = Object.assign(tmp3);
    element.props = obj;
    return element;
  }, items4);
  const getItemProps = listHeaderContent.useCallback((arg0, index) => {
    if (null != stateFromStoresArray[index]) {
      let tmp4 = flag2;
      if (flag2) {
        tmp4 = tmp3.id === ownerId;
      }
      const element = { type: "user", props: null };
      let obj = {
        type: listHeaderSize.NONE,
        user: tmp3,
        nickname: stateFromStoresArray.getNickname(tmp3.id),
        isNameplatedRow: true,
        onPress(user) {
            if (onUserPress != null) {
              const obj = { user, index };
              tmp(obj);
            }
            if (opensUserProfileOnUserPress) {
              const obj2 = { userId: user.id, sourceAnalyticsLocations: analyticsLocations, channelId };
              showUserProfileActionSheetDefault(obj2);
            }
          },
        isOwner: tmp4,
        start: tmp,
        end: tmp2,
        canShowDisplayNameStyles: true
      };
      element.props = obj;
      return element;
    } else {
      const element1 = { type: "placeholder", props: null };
      let obj2 = { start: tmp, end: tmp2 };
      element1.props = obj2;
      return element1;
    }
  }, items5);
  const tmp3Result4 = channelId(onUserPress[15]);
  [tmp21, c16] = opensUserProfileOnUserPress(listHeaderContent.useState(), 2);
  let channelId1;
  if (tmp21 != null) {
    channelId1 = tmp21.channelId;
  }
  height = undefined;
  if (channelId1 === channelId) {
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
      if (channelId !== channelId) {
        const obj = { channelId: tmp3, height };
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
    obj.children = items;
    return closure_2_12(View, obj, channelId);
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