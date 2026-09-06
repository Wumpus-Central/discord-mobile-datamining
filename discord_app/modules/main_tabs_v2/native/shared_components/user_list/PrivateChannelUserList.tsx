// discord_app/modules/main_tabs_v2/native/shared_components/user_list/PrivateChannelUserList.tsx
import _modDef12 from "../../../../../../_runtime/metro/00012__.js";
import util from "../../../../../intl/index.native.tsx";
import GlobalUtils from "../../../../../utils/GlobalUtils.tsx";
import showUserProfileActionSheetDefault from "../../../../user_profile/native/showUserProfileActionSheet.tsx";
import NitroWheelIcon from "../../../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import openGroupDMNitroCapInfoActionSheetDefault from "../../../../group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ RelationshipTypes: closure_9, MAX_GROUP_DM_PARTICIPANTS: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/user_list/PrivateChannelUserList.tsx",
);

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
  let obj = channelId(onUserPress[9]);
  let items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const items1 = [renderListHeader];
  const items2 = [stateFromStores];
  const stateFromStoresArray = channelId(onUserPress[9]).useStateFromStoresArray(
    items1,
    () => {
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
    },
    items2,
  );
  obj = { channel: stateFromStores, disable: !flag };
  const tmp5 = hideTitle(onUserPress[12])(obj);
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
  const items5 = [
    stateFromStoresArray,
    flag2,
    tmp6,
    onUserPress,
    opensUserProfileOnUserPress,
    analyticsLocations,
    channelId,
  ];
  const getSectionProps = listHeaderContent.useCallback(() => {
    let obj = { title: null, hideTitle: null };
    const intl = util.intl;
    obj.title = "" + intl.string(util.t["9Oq93m"]) + " \u2014 " + stateFromStoresArray.length;
    obj.hideTitle = hideTitle;
    let tmp3 = closure_12;
    if (closure_12) {
      let str = "xxs";
      if (closure_15) {
        str = "xs";
      }
      obj = { titleLeading: null, onTitlePress: null, colorOverride: null };
      obj = { size: str, color: token1, accessible: false };
      obj.titleLeading = closure_2_11(NitroWheelIcon.NitroWheelIcon, obj);
      obj.onTitlePress = openGroupDMNitroCapInfoActionSheetDefault;
      obj.colorOverride = token;
      tmp3 = obj;
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
            let obj = { user, index };
            tmp(obj);
          }
          if (opensUserProfileOnUserPress) {
            obj = { userId: user.id, sourceAnalyticsLocations: analyticsLocations, channelId };
            showUserProfileActionSheetDefault(obj);
          }
        },
        isOwner: tmp4,
        start: tmp,
        end: tmp2,
        canShowDisplayNameStyles: true,
      };
      element.props = obj;
      return element;
    } else {
      const element1 = { type: "placeholder", props: null };
      obj = { start: tmp, end: tmp2 };
      element1.props = obj;
      return element1;
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
    const items = [listHeaderContent];
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
  return ownerId(channelId(onUserPress[22]).UsersFastList, {
    sections,
    getItemProps,
    getSectionProps,
    listHeaderSize,
    renderListHeader,
    disableStickySections,
    disableBackgroundOverlay: true,
    listStyleOverride,
    disableBottomSafeZone,
    insetEnd,
    inActionSheet,
  });
});
