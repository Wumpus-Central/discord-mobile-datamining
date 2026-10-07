// === Module 11826: PrivateChannelUserList ===

// Module 11826 (PrivateChannelUserList)
import _modDef12 from "module_12" /* 12 */;
import util from "util" /* 1126 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7861 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8346 */;
import openGroupDMNitroCapInfoActionSheetDefault from "openGroupDMNitroCapInfoActionSheet" /* 11828 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ RelationshipTypes: closure_9, MAX_GROUP_DM_PARTICIPANTS: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/PrivateChannelUserList.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(onUserPress[9]).c(52);
  channelId = channelId.channelId;
  ({ disableStickySections, listStyleOverride, disableBottomSafeZone, insetEnd, headerShown, hideTitle } = channelId);
  ({ inActionSheet, onUserPress } = channelId);
  ({ opensUserProfileOnUserPress, listHeaderContent } = channelId);
  closure_4 = undefined === opensUserProfileOnUserPress || opensUserProfileOnUserPress;
  const analyticsLocations = hideTitle(onUserPress[10])().analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [stateFromStores];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function b() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  let obj = channelId(onUserPress[9]);
  let tmp4 = undefined === headerShown || headerShown;
  stateFromStores = channelId(onUserPress[11]).useStateFromStores(first, tmp8);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [listActionRenderer];
    cResult[3] = items1;
    let tmp10 = items1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    class M {
      constructor() {
        if (null != closure_6) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          arr2 = closure_1(closure_2[12])(tmp.recipients);
          tmp4 = closure_8;
          mapped = arr2.map(closure_8.getUser);
          arr1 = mapped.unshift(closure_8.getCurrentUser());
          tmp5 = closure_0;
          found = arr1.filter(closure_0(closure_2[13]).isNotNullish);
          iter = found.sortBy((username) => username.username.toLowerCase());
          valueResult = iter.value();
        } else {
          valueResult = [];
        }
        return valueResult;
      }
    }
    const items2 = [stateFromStores];
    cResult[4] = stateFromStores;
    cResult[5] = M;
    cResult[6] = items2;
    let tmp13 = items2;
  } else {
    class M {
      constructor() {
        if (null != closure_6) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          arr2 = closure_1(closure_2[12])(tmp.recipients);
          tmp4 = closure_8;
          mapped = arr2.map(closure_8.getUser);
          arr1 = mapped.unshift(closure_8.getCurrentUser());
          tmp5 = closure_0;
          found = arr1.filter(closure_0(closure_2[13]).isNotNullish);
          iter = found.sortBy((username) => username.username.toLowerCase());
          valueResult = iter.value();
        } else {
          valueResult = [];
        }
        return valueResult;
      }
    }
    tmp13 = cResult[6];
  }
  const tmpResult = channelId(onUserPress[11]);
  const stateFromStoresArray = channelId(onUserPress[11]).useStateFromStoresArray(tmp10, M, tmp13);
  if (cResult[7] === stateFromStores) {
    class M {
      constructor() {
        if (null != closure_6) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          arr2 = closure_1(closure_2[12])(tmp.recipients);
          tmp4 = closure_8;
          mapped = arr2.map(closure_8.getUser);
          arr1 = mapped.unshift(closure_8.getCurrentUser());
          tmp5 = closure_0;
          found = arr1.filter(closure_0(closure_2[13]).isNotNullish);
          iter = found.sortBy((username) => username.username.toLowerCase());
          valueResult = iter.value();
        } else {
          valueResult = [];
        }
        return valueResult;
      }
    }
    const tmp15 = hideTitle(onUserPress[14])(obj2);
    listActionRenderer = tmp15.listActionRenderer;
    const listActionHeight = tmp15.listActionHeight;
    if (cResult[10] !== stateFromStores) {
      class M {
        constructor() {
          if (null != closure_6) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            arr2 = closure_1(closure_2[12])(tmp.recipients);
            tmp4 = closure_8;
            mapped = arr2.map(closure_8.getUser);
            arr1 = mapped.unshift(closure_8.getCurrentUser());
            tmp5 = closure_0;
            found = arr1.filter(closure_0(closure_2[13]).isNotNullish);
            iter = found.sortBy((username) => username.username.toLowerCase());
            valueResult = iter.value();
          } else {
            valueResult = [];
          }
          return valueResult;
        }
      }
      if (stateFromStores != null) {
        class M {
          constructor() {
            if (null != closure_6) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              arr2 = closure_1(closure_2[12])(tmp.recipients);
              tmp4 = closure_8;
              mapped = arr2.map(closure_8.getUser);
              arr1 = mapped.unshift(closure_8.getCurrentUser());
              tmp5 = closure_0;
              found = arr1.filter(closure_0(closure_2[13]).isNotNullish);
              iter = found.sortBy((username) => username.username.toLowerCase());
              valueResult = iter.value();
            } else {
              valueResult = [];
            }
            return valueResult;
          }
        }
      }
      if (undefined == null) {
        class M {
          constructor() {
            if (null != closure_6) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              arr2 = closure_1(closure_2[12])(tmp.recipients);
              tmp4 = closure_8;
              mapped = arr2.map(closure_8.getUser);
              arr1 = mapped.unshift(closure_8.getCurrentUser());
              tmp5 = closure_0;
              found = arr1.filter(closure_0(closure_2[13]).isNotNullish);
              iter = found.sortBy((username) => username.username.toLowerCase());
              valueResult = iter.value();
            } else {
              valueResult = [];
            }
            return valueResult;
          }
        }
      }
      cResult[10] = stateFromStores;
      cResult[11] = undefined;
    } else {
      class M {
        constructor() {
          if (null != closure_6) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            arr2 = closure_1(closure_2[12])(tmp.recipients);
            tmp4 = closure_8;
            mapped = arr2.map(closure_8.getUser);
            arr1 = mapped.unshift(closure_8.getCurrentUser());
            tmp5 = closure_0;
            found = arr1.filter(closure_0(closure_2[13]).isNotNullish);
            iter = found.sortBy((username) => username.username.toLowerCase());
            valueResult = iter.value();
          } else {
            valueResult = [];
          }
          return valueResult;
        }
      }
    }
    c10 = tmp16;
    let tmp18;
    if (tmp16) {
      class M {
        constructor() {
          if (null != closure_6) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            arr2 = closure_1(closure_2[12])(tmp.recipients);
            tmp4 = closure_8;
            mapped = arr2.map(closure_8.getUser);
            arr1 = mapped.unshift(closure_8.getCurrentUser());
            tmp5 = closure_0;
            found = arr1.filter(closure_0(closure_2[13]).isNotNullish);
            iter = found.sortBy((username) => username.username.toLowerCase());
            valueResult = iter.value();
          } else {
            valueResult = [];
          }
          return valueResult;
        }
      }
      if (stateFromStores != null) {
        class M {
          constructor() {
            if (null != closure_6) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              arr2 = closure_1(closure_2[12])(tmp.recipients);
              tmp4 = closure_8;
              mapped = arr2.map(closure_8.getUser);
              arr1 = mapped.unshift(closure_8.getCurrentUser());
              tmp5 = closure_0;
              found = arr1.filter(closure_0(closure_2[13]).isNotNullish);
              iter = found.sortBy((username) => username.username.toLowerCase());
              valueResult = iter.value();
            } else {
              valueResult = [];
            }
            return valueResult;
          }
        }
      }
      tmp18 = tmp19;
    }
    c11 = tmp18;
    if (cResult[12] !== tmp16) {
      class M {
        constructor() {
          if (null != closure_6) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            arr2 = closure_1(closure_2[12])(tmp.recipients);
            tmp4 = closure_8;
            mapped = arr2.map(closure_8.getUser);
            arr1 = mapped.unshift(closure_8.getCurrentUser());
            tmp5 = closure_0;
            found = arr1.filter(closure_0(closure_2[13]).isNotNullish);
            iter = found.sortBy((username) => username.username.toLowerCase());
            valueResult = iter.value();
          } else {
            valueResult = [];
          }
          return valueResult;
        }
      }
      cResult[12] = tmp16;
      cResult[13] = tmp21;
    } else {
      class M {
        constructor() {
          if (null != closure_6) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            arr2 = closure_1(closure_2[12])(tmp.recipients);
            tmp4 = closure_8;
            mapped = arr2.map(closure_8.getUser);
            arr1 = mapped.unshift(closure_8.getCurrentUser());
            tmp5 = closure_0;
            found = arr1.filter(closure_0(closure_2[13]).isNotNullish);
            iter = found.sortBy((username) => username.username.toLowerCase());
            valueResult = iter.value();
          } else {
            valueResult = [];
          }
          return valueResult;
        }
      }
      tmp(onUserPress[16]);
      let tmp25 = tmp16;
      if (tmp16) {
        class M {
          constructor() {
            if (null != closure_6) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              arr2 = closure_1(closure_2[12])(tmp.recipients);
              tmp4 = closure_8;
              mapped = arr2.map(closure_8.getUser);
              arr1 = mapped.unshift(closure_8.getCurrentUser());
              tmp5 = closure_0;
              found = arr1.filter(closure_0(closure_2[13]).isNotNullish);
              iter = found.sortBy((username) => username.username.toLowerCase());
              valueResult = iter.value();
            } else {
              valueResult = [];
            }
            return valueResult;
          }
        }
        tmp25 = "entitled" === tmp24;
      }
      if (tmp25) {
        class M {
          constructor() {
            if (null != closure_6) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              arr2 = closure_1(closure_2[12])(tmp.recipients);
              tmp4 = closure_8;
              mapped = arr2.map(closure_8.getUser);
              arr1 = mapped.unshift(closure_8.getCurrentUser());
              tmp5 = closure_0;
              found = arr1.filter(closure_0(closure_2[13]).isNotNullish);
              iter = found.sortBy((username) => username.username.toLowerCase());
              valueResult = iter.value();
            } else {
              valueResult = [];
            }
            return valueResult;
          }
        }
        tmp25 = tmp20 > c10;
      }
      closure_12 = tmp25;
      const token = tmp(onUserPress[17]).useToken(hideTitle(onUserPress[18]).colors.TEXT_SUBTLE);
      const tmpResult7 = tmp(onUserPress[17]);
      const token1 = tmp(onUserPress[17]).useToken(hideTitle(onUserPress[18]).colors.ICON_SUBTLE);
      const tmp28 = hideTitle(onUserPress[19])("PrivateChannelUserList");
      closure_15 = tmp28;
      if (cResult[14] !== stateFromStoresArray.length) {
        class M {
          constructor() {
            if (null != closure_6) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              arr2 = closure_1(closure_2[12])(tmp.recipients);
              tmp4 = closure_8;
              mapped = arr2.map(closure_8.getUser);
              arr1 = mapped.unshift(closure_8.getCurrentUser());
              tmp5 = closure_0;
              found = arr1.filter(closure_0(closure_2[13]).isNotNullish);
              iter = found.sortBy((username) => username.username.toLowerCase());
              valueResult = iter.value();
            } else {
              valueResult = [];
            }
            return valueResult;
          }
        }
        tmp30[0] = stateFromStoresArray.length;
        cResult[14] = stateFromStoresArray.length;
        cResult[15] = tmp30;
      } else {
        class M {
          constructor() {
            if (null != closure_6) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              arr2 = closure_1(closure_2[12])(tmp.recipients);
              tmp4 = closure_8;
              mapped = arr2.map(closure_8.getUser);
              arr1 = mapped.unshift(closure_8.getCurrentUser());
              tmp5 = closure_0;
              found = arr1.filter(closure_0(closure_2[13]).isNotNullish);
              iter = found.sortBy((username) => username.username.toLowerCase());
              valueResult = iter.value();
            } else {
              valueResult = [];
            }
            return valueResult;
          }
        }
      }
      if (cResult[16] === hideTitle) {
        class M {
          constructor() {
            if (null != closure_6) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              arr2 = closure_1(closure_2[12])(tmp.recipients);
              tmp4 = closure_8;
              mapped = arr2.map(closure_8.getUser);
              arr1 = mapped.unshift(closure_8.getCurrentUser());
              tmp5 = closure_0;
              found = arr1.filter(closure_0(closure_2[13]).isNotNullish);
              iter = found.sortBy((username) => username.username.toLowerCase());
              valueResult = iter.value();
            } else {
              valueResult = [];
            }
            return valueResult;
          }
        }
      }
      function se() {
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
      }
      cResult[16] = hideTitle;
      cResult[17] = token1;
      cResult[18] = tmp25;
      cResult[19] = tmp28;
      cResult[20] = token;
      cResult[21] = stateFromStoresArray.length;
      cResult[22] = se;
      const tmpResult8 = tmp(onUserPress[17]);
    }
  }
  obj2 = { channel: stateFromStores, disable: !tmp4 };
  cResult[7] = stateFromStores;
  cResult[8] = !tmp4;
  cResult[9] = obj2;
  const tmpResult5 = channelId(onUserPress[11]);
}) : ((channelId) => {
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
  const analyticsLocations = hideTitle(onUserPress[10])().analyticsLocations;
  let items = [stateFromStores];
  stateFromStores = channelId(onUserPress[11]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj = channelId(onUserPress[11]);
  const items1 = [renderListHeader];
  const items2 = [stateFromStores];
  const stateFromStoresArray = channelId(onUserPress[11]).useStateFromStoresArray(items1, () => {
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
  const tmp5 = hideTitle(onUserPress[14])({ channel: stateFromStores, disable: !flag });
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
    let tmp8 = tmp(tmp2[15])({ useNitroCapExperiment: true });
  } else {
    tmp8 = flag2;
  }
  channelId(onUserPress[16]);
  let tmp11 = flag2;
  if (flag2) {
    tmp11 = "entitled" === tmp10;
  }
  if (tmp11) {
    tmp11 = tmp8 > flag2;
  }
  closure_12 = tmp11;
  let obj2 = { channel: stateFromStores, disable: !flag };
  let obj3 = channelId(onUserPress[11]);
  token = channelId(onUserPress[17]).useToken(tmp(tmp2[18]).colors.TEXT_SUBTLE);
  const tmp3Result3 = channelId(onUserPress[17]);
  token1 = channelId(onUserPress[17]).useToken(tmp(tmp2[18]).colors.ICON_SUBTLE);
  const tmp15 = hideTitle(onUserPress[19])("PrivateChannelUserList");
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
  const tmp3Result4 = channelId(onUserPress[17]);
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
    return __initData(View, obj, channelId);
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
  return ownerId(channelId(onUserPress[24]).UsersFastList, { sections, getItemProps, getSectionProps, listHeaderSize, renderListHeader, disableStickySections, disableBackgroundOverlay: true, listStyleOverride, disableBottomSafeZone, insetEnd, inActionSheet });
}));