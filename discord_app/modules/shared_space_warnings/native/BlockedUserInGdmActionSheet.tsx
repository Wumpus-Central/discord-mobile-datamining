// === Module 13563: BlockedUserInGdmActionSheet ===

// Module 13563 (BlockedUserInGdmActionSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import CircleCheckIcon from "CircleCheckIcon" /* 4798 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4818 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import Text_Text from "Text/Text" /* 4892 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4909 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5048 */;
import TableRow from "TableRow" /* 6000 */;
import SharedSpacesWarningActionCreators from "SharedSpacesWarningActionCreators" /* 13565 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
function getUserCalloutRowText(arg0) {
  ({ calledOutUserIds, totalUsers, guildId: require, channelId: importDefault } = arg0);
  const items = [...calledOutUserIds];
  dependencyMap = items.map((item) => user.getUser(item));
  if (totalUsers >= 4) {
    const intl4 = util.intl;
    const obj2 = {
      usernameHook1() {
          const obj = { variant: "text-md/semibold", children: NicknameUtilsDefault.getName(_require, closure_1_1, 19) };
          return closure_2_11(Text_Text.Text, obj);
        },
      usernameHook2() {
          const obj = { variant: "text-md/semibold", children: NicknameUtilsDefault.getName(_require, closure_1_1, 17) };
          return closure_2_11(Text_Text.Text, obj);
        },
      numberOfOtherUsers: totalUsers - calledOutUserIds.length
    };
    let formatResult = intl4.format(util.t.qfo6KR, obj2);
  } else if (3 === totalUsers) {
    const intl3 = util.intl;
    const obj3 = {
      usernameHook1() {
          const obj = { variant: "text-md/semibold", children: NicknameUtilsDefault.getName(_require, closure_1_1, 19) };
          return closure_2_11(Text_Text.Text, obj);
        },
      usernameHook2() {
          const obj = { variant: "text-md/semibold", children: NicknameUtilsDefault.getName(_require, closure_1_1, 17) };
          return closure_2_11(Text_Text.Text, obj);
        }
    };
    formatResult = intl3.format(util.t["67ZE+9"], obj3);
  } else if (2 === totalUsers) {
    const intl2 = util.intl;
    const obj4 = {
      usernameHook1() {
          const obj = { variant: "text-md/semibold", children: NicknameUtilsDefault.getName(_require, closure_1_1, 19) };
          return closure_2_11(Text_Text.Text, obj);
        },
      usernameHook2() {
          const obj = { variant: "text-md/semibold", children: NicknameUtilsDefault.getName(_require, closure_1_1, 17) };
          return closure_2_11(Text_Text.Text, obj);
        }
    };
    formatResult = intl2.format(util.t.veV4IN, obj4);
  } else {
    const intl = util.intl;
    let obj = {
      usernameHook() {
          const obj = { variant: "text-md/semibold", children: NicknameUtilsDefault.getName(_require, closure_1_1, 19) };
          return closure_2_11(Text_Text.Text, obj);
        }
    };
    formatResult = intl.format(util.t["4WHCtq"], obj);
  }
  return formatResult;
}
function getBlockedUserInGDMTableRows(arg0) {
  ({ channelId, blockedUserIds, ignoredUserIds } = arg0);
  const channel = ChannelStore.getChannel(channelId);
  const obj = { icon: closure_1_11(CircleCheckIcon.CircleCheckIcon, {}), label: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.RIMw54);
  const items = [obj, ];
  const obj2 = { icon: closure_1_11(CircleInformationIcon.CircleInformationIcon, {}), label: null };
  const intl2 = util.intl;
  obj2.label = intl2.string(util.t.bejNWN);
  items[1] = obj2;
  if (blockedUserIds.length > 0) {
    if (tmp3) {
      const items1 = [];
      HermesBuiltin.arraySpread(ignoredUserIds, HermesBuiltin.arraySpread(blockedUserIds, 0));
      const substr = items1.slice(0, 2);
      const obj3 = { userIds: substr, guildId: null };
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      const obj4 = { icon: null, label: null };
      obj3.guildId = guild_id;
      obj4.icon = closure_1_11(closure_16, obj3);
      const obj5 = { calledOutUserIds: substr, totalUsers: items1.length, channelId, guildId: null };
      let guild_id1;
      if (channel != null) {
        guild_id1 = channel.guild_id;
      }
      obj5.guildId = guild_id1;
      obj4.label = getUserCalloutRowText(obj5);
      items.unshift(obj4);
    }
    return items;
  }
  const items2 = [];
  if (blockedUserIds.length > 0) {
    HermesBuiltin.arraySpread(blockedUserIds, 0);
    let substr1 = items2.slice(0, 2);
  } else {
    HermesBuiltin.arraySpread(ignoredUserIds, 0);
    substr1 = items2.slice(0, 2);
  }
  const obj6 = { userIds: substr1, guildId: null };
  let guild_id2;
  if (channel != null) {
    guild_id2 = channel.guild_id;
  }
  const obj7 = { icon: closure_1_11(closure_16, obj6), label: null };
  obj6.guildId = guild_id2;
  const obj8 = { calledOutUserIds: substr1, totalUsers: blockedUserIds.length > 0 ? blockedUserIds.length : ignoredUserIds.length, channelId, guildId: null };
  let guild_id3;
  if (channel != null) {
    guild_id3 = channel.guild_id;
  }
  obj8.guildId = guild_id3;
  obj7.label = getUserCalloutRowText(obj8);
  items.unshift(obj7);
  const tmp12 = blockedUserIds.length > 0 ? blockedUserIds.length : ignoredUserIds.length;
  tmp3 = ignoredUserIds.length > 0;
}
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const SharedSpaceWarningConstants = fn(13564);
({ BlockWarningEngagements: closure_8, GdmWarningMedium: closure_9 } = SharedSpaceWarningConstants);
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_11, Fragment: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { container: { paddingTop: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8, textAlign: "center" }, headerImage: { alignSelf: "center", width: 73, height: 86 }, title: { textAlign: "center", alignSelf: "center" }, description: { textAlign: "center", alignSelf: "center" }, tableGroup: null, buttons: null, icon: null };
let obj3 = { paddingTop: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8, textAlign: "center" };
obj2.tableGroup = { paddingVertical: nativeDefault.space.PX_24 };
obj2.buttons = { gap: 8 };
obj2.icon = { display: "flex", justifyContent: "center", alignItems: "center", minWidth: 32 };
let closure_14 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((userIds) => {
  let REFRESH_MEDIUM_32 = dependencyMap;
  const cResult = userIds(576).c(14);
  userIds = userIds.userIds;
  const guildId = userIds.guildId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userIds) {
    const fn = function l() {
      return userIds.map((item) => user.getUser(item));
    };
    const items1 = [userIds];
    cResult[1] = userIds;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp6 = items1;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  const obj = userIds(576);
  const stateFromStoresArray = userIds(504).useStateFromStoresArray(first, tmp5, tmp6);
  if (cResult[4] !== stateFromStoresArray) {
    const found = stateFromStoresArray.filter(tmp(1375).isNotNullish);
    cResult[4] = stateFromStoresArray;
    cResult[5] = found;
    let tmp7 = found;
  } else {
    tmp7 = cResult[5];
  }
  if (1 === userIds.length) {
    if (cResult[6] !== userIds[0]) {
      const user = UserStore.getUser(userIds[0]);
      cResult[6] = userIds[0];
      cResult[7] = user;
      let tmp12 = user;
    } else {
      tmp12 = cResult[7];
    }
    if (cResult[8] === guildId) {
      if (cResult[9] === tmp12) {
        if (cResult[10] === tmp7) {
          return cResult[11];
        }
      }
    }
    if (null != tmp12) {
      const obj2 = { user: tmp7[0], guildId, size: null, "aria-hidden": true };
      REFRESH_MEDIUM_32 = tmp(1188).AvatarSizes.REFRESH_MEDIUM_32;
      obj2.size = REFRESH_MEDIUM_32;
      let tmp17 = closure_11(tmp(1188).Avatar, obj2);
    } else {
      tmp17 = closure_11(tmp(11448).UserIcon, {});
    }
    cResult[8] = guildId;
    cResult[9] = tmp12;
    cResult[10] = tmp7;
    cResult[11] = tmp17;
  } else {
    if (cResult[12] !== tmp7) {
      const obj3 = { users: tmp7, size: tmp(1188).AvatarSizes.REFRESH_MEDIUM_32 };
      const tmp11 = closure_11(tmp(10661).FacepileGroupDMAvatar, obj3);
      cResult[12] = tmp7;
      cResult[13] = tmp11;
      let tmp9 = tmp11;
    } else {
      tmp9 = cResult[13];
    }
    return tmp9;
  }
  const tmpResult = userIds(504);
}) : ((userIds) => {
  userIds = userIds.userIds;
  let REFRESH_MEDIUM_32 = dependencyMap;
  const items = [UserStore];
  const items1 = [userIds];
  const stateFromStoresArray = userIds(504).useStateFromStoresArray(items, () => userIds.map((item) => user.getUser(item)), items1);
  let found = stateFromStoresArray.filter(userIds(1375).isNotNullish);
  if (1 === userIds.length) {
    if (null != UserStore.getUser(userIds[0])) {
      const obj3 = { user: null, guildId: null, size: null, "aria-hidden": true };
      found = found[0];
      obj3.user = found;
      obj3.guildId = userIds.guildId;
      REFRESH_MEDIUM_32 = tmp(1188).AvatarSizes.REFRESH_MEDIUM_32;
      obj3.size = REFRESH_MEDIUM_32;
      let tmp6 = closure_11(tmp(1188).Avatar, obj3);
    } else {
      tmp6 = closure_11(tmp(11448).UserIcon, {});
    }
  } else {
    const obj4 = { users: found, size: tmp(1188).AvatarSizes.REFRESH_MEDIUM_32 };
    return closure_11(tmp(10661).FacepileGroupDMAvatar, obj4);
  }
  const obj = userIds(504);
});
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let stringResult1 = dependencyMap;
  const cResult = c.c(12);
  ({ numOfBlockedUsers, numOfIgnoredUsers } = arg0);
  if (numOfBlockedUsers > 0) {
    if (tmp5) {
      const _Symbol3 = Symbol;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl5 = util.intl;
        const stringResult = intl5.string(util.t.xbRNI3);
        cResult[0] = stringResult;
        let string = stringResult;
      } else {
        string = cResult[0];
      }
      const _Symbol4 = Symbol;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { children: null };
        const items = [string, "\n", ];
        const intl6 = util.intl;
        string = intl6.string;
        stringResult1 = string(util.t["Bp2/ni"]);
        items[2] = stringResult1;
        obj2.children = items;
        const tmp32 = __initData2(__initData, obj2);
        cResult[1] = tmp32;
      }
    }
  }
  if (numOfBlockedUsers > 0) {
    if (cResult[2] !== numOfBlockedUsers) {
      const intl3 = util.intl;
      const obj3 = { n: numOfBlockedUsers };
      const formatResult = intl3.format(util.t.iKtixW, obj3);
      cResult[2] = numOfBlockedUsers;
      cResult[3] = formatResult;
      let tmp17 = formatResult;
    } else {
      tmp17 = cResult[3];
    }
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = util.intl;
      const stringResult2 = intl4.string(util.t.SN1hrl);
      cResult[4] = stringResult2;
      let tmp20 = stringResult2;
    } else {
      tmp20 = cResult[4];
    }
    if (cResult[5] !== tmp17) {
      const obj4 = { children: null };
      const items1 = [tmp17, "\n", tmp20];
      obj4.children = items1;
      const tmp25 = __initData2(__initData, obj4);
      cResult[5] = tmp17;
      cResult[6] = tmp25;
    }
  } else if (!tmp5) {
    return null;
  } else {
    if (cResult[7] !== numOfIgnoredUsers) {
      const intl = util.intl;
      const obj5 = { n: numOfIgnoredUsers };
      const formatResult1 = intl.format(util.t["6IRwua"], obj5);
      cResult[7] = numOfIgnoredUsers;
      cResult[8] = formatResult1;
      let tmp7 = formatResult1;
    } else {
      tmp7 = cResult[8];
    }
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = util.intl;
      const stringResult3 = intl2.string(util.t["6AKLRt"]);
      cResult[9] = stringResult3;
      let tmp10 = stringResult3;
    } else {
      tmp10 = cResult[9];
    }
    if (cResult[10] !== tmp7) {
      const obj6 = { children: null };
      const items2 = [tmp7, "\n", tmp10];
      obj6.children = items2;
      const tmp15 = __initData2(__initData, obj6);
      cResult[10] = tmp7;
      cResult[11] = tmp15;
    }
  }
}) : ((arg0) => {
  ({ numOfBlockedUsers, numOfIgnoredUsers } = arg0);
  if (numOfBlockedUsers > 0) {
    if (tmp2) {
      const obj2 = { children: null };
      const intl5 = util.intl;
      const items = [intl5.string(util.t.xbRNI3), "\n", ];
      const intl6 = util.intl;
      items[2] = intl6.string(util.t["Bp2/ni"]);
      obj2.children = items;
      let tmp3 = __initData2(__initData, obj2);
    }
    return tmp3;
  }
  if (numOfBlockedUsers > 0) {
    const obj3 = { children: null };
    const intl3 = util.intl;
    const obj4 = { n: numOfBlockedUsers };
    const items1 = [intl3.format(util.t.iKtixW, obj4), "\n", ];
    const intl4 = util.intl;
    items1[2] = intl4.string(util.t.SN1hrl);
    obj3.children = items1;
    tmp3 = __initData2(__initData, obj3);
  } else {
    tmp3 = null;
    if (tmp2) {
      const obj = { children: null };
      const intl = util.intl;
      const obj5 = { n: numOfIgnoredUsers };
      const items2 = [intl.format(util.t["6IRwua"], obj5), "\n", ];
      const intl2 = util.intl;
      items2[2] = intl2.string(util.t["6AKLRt"]);
      obj.children = items2;
      tmp3 = __initData2(__initData, obj);
    }
  }
});
ReactCompilerGating = fn(558);
let obj4 = { paddingVertical: nativeDefault.space.PX_24 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/shared_space_warnings/native/BlockedUserInGdmActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(title[13]).c(78);
  channelId = channelId.channelId;
  const blockedUserIds = channelId.blockedUserIds;
  title = channelId.ignoredUserIds;
  const tmp4 = closure_14();
  noop = tmp4;
  if (cResult[0] === blockedUserIds) {
    if (cResult[1] === channelId) {
      if (cResult[2] === title) {
        let tmp5 = cResult[3];
        let tmp6 = cResult[4];
      }
      const effect = noop.useEffect(tmp5, tmp6);
      if (cResult[5] === blockedUserIds) {
        if (cResult[6] === channelId) {
          if (cResult[7] === title) {
            let tmp9 = cResult[8];
          }
          if (cResult[9] === blockedUserIds) {
            if (cResult[10] === channelId) {
              if (cResult[11] === title) {
                let tmp10 = cResult[12];
              }
              if (cResult[13] === blockedUserIds) {
                if (cResult[14] === channelId) {
                  if (cResult[15] === title) {
                    if (cResult[16] === tmp4.container) {
                      if (cResult[17] === tmp4.description) {
                        if (cResult[18] === tmp4.headerImage) {
                          if (cResult[19] === tmp4.icon) {
                            if (cResult[20] === tmp4.tableGroup) {
                              if (cResult[21] === tmp4.title) {
                                class T {
                                  constructor() {
                                    obj = closure_1(closure_2[22]);
                                    hideActionSheetResult = obj.hideActionSheet();
                                    obj2 = closure_0(closure_2[23]);
                                    result = obj2.dismissGdmBlockedUserWarning(channelId);
                                    obj3 = closure_1(closure_2[24]);
                                    closePrivateChannelResult = obj3.closePrivateChannel(channelId, true, true);
                                    obj4 = closure_1(closure_2[21]);
                                    obj1 = { action: BlockWarningEngagements.CLICK_TO_LEAVE, channel_id: channelId, warning_medium: GdmWarningMedium.ACTION_SHEET, ignored_user_ids: ignoredUserIds, blocked_user_ids: blockedUserIds };
                                    trackResult = obj4.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj1);
                                    return;
                                  }
                                }
                                if (cResult[49] === cResult[22]) {
                                  if (cResult[50] === tmp17) {
                                    if (cResult[51] === tmp18) {
                                      let tmp55 = cResult[52];
                                    }
                                    if (cResult[53] === tmp12) {
                                      if (cResult[54] === tmp55) {
                                        if (cResult[55] === tmp19) {
                                          let tmp58 = cResult[56];
                                        }
                                        class T {
                                          constructor() {
                                            obj = closure_1(closure_2[22]);
                                            hideActionSheetResult = obj.hideActionSheet();
                                            obj2 = closure_0(closure_2[23]);
                                            result = obj2.dismissGdmBlockedUserWarning(channelId);
                                            obj3 = closure_1(closure_2[24]);
                                            closePrivateChannelResult = obj3.closePrivateChannel(channelId, true, true);
                                            obj4 = closure_1(closure_2[21]);
                                            obj1 = { action: BlockWarningEngagements.CLICK_TO_LEAVE, channel_id: channelId, warning_medium: GdmWarningMedium.ACTION_SHEET, ignored_user_ids: ignoredUserIds, blocked_user_ids: blockedUserIds };
                                            trackResult = obj4.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj1);
                                            return;
                                          }
                                        }
                                        if (cResult[57] === Symbol.for("react.memo_cache_sentinel")) {
                                          const string2 = tmp(tmp2[11]).intl.string;
                                          class T {
                                            constructor() {
                                              obj = closure_1(closure_2[22]);
                                              hideActionSheetResult = obj.hideActionSheet();
                                              obj2 = closure_0(closure_2[23]);
                                              result = obj2.dismissGdmBlockedUserWarning(channelId);
                                              obj3 = closure_1(closure_2[24]);
                                              closePrivateChannelResult = obj3.closePrivateChannel(channelId, true, true);
                                              obj4 = closure_1(closure_2[21]);
                                              obj1 = { action: BlockWarningEngagements.CLICK_TO_LEAVE, channel_id: channelId, warning_medium: GdmWarningMedium.ACTION_SHEET, ignored_user_ids: ignoredUserIds, blocked_user_ids: blockedUserIds };
                                              trackResult = obj4.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj1);
                                              return;
                                            }
                                          }
                                          cResult[57] = tmp62;
                                          let tmp61 = tmp62;
                                        } else {
                                          tmp61 = cResult[57];
                                        }
                                        if (cResult[58] !== tmp10) {
                                          let obj2 = { size: "lg", onPress: null, text: null };
                                          class T {
                                            constructor() {
                                              obj = closure_1(closure_2[22]);
                                              hideActionSheetResult = obj.hideActionSheet();
                                              obj2 = closure_0(closure_2[23]);
                                              result = obj2.dismissGdmBlockedUserWarning(channelId);
                                              obj3 = closure_1(closure_2[24]);
                                              closePrivateChannelResult = obj3.closePrivateChannel(channelId, true, true);
                                              obj4 = closure_1(closure_2[21]);
                                              obj1 = { action: BlockWarningEngagements.CLICK_TO_LEAVE, channel_id: channelId, warning_medium: GdmWarningMedium.ACTION_SHEET, ignored_user_ids: ignoredUserIds, blocked_user_ids: blockedUserIds };
                                              trackResult = obj4.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj1);
                                              return;
                                            }
                                          }
                                          obj2.text = tmp61;
                                          const tmp65 = closure_11(tmp(tmp2[29]).Button, obj2);
                                          cResult[58] = tmp10;
                                          cResult[59] = tmp65;
                                          let tmp63 = tmp65;
                                        } else {
                                          tmp63 = cResult[59];
                                        }
                                        const _Symbol2 = Symbol;
                                        if (cResult[60] === Symbol.for("react.memo_cache_sentinel")) {
                                          const string3 = tmp(tmp2[11]).intl.string;
                                          class T {
                                            constructor() {
                                              obj = closure_1(closure_2[22]);
                                              hideActionSheetResult = obj.hideActionSheet();
                                              obj2 = closure_0(closure_2[23]);
                                              result = obj2.dismissGdmBlockedUserWarning(channelId);
                                              obj3 = closure_1(closure_2[24]);
                                              closePrivateChannelResult = obj3.closePrivateChannel(channelId, true, true);
                                              obj4 = closure_1(closure_2[21]);
                                              obj1 = { action: BlockWarningEngagements.CLICK_TO_LEAVE, channel_id: channelId, warning_medium: GdmWarningMedium.ACTION_SHEET, ignored_user_ids: ignoredUserIds, blocked_user_ids: blockedUserIds };
                                              trackResult = obj4.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj1);
                                              return;
                                            }
                                          }
                                          cResult[60] = tmp67;
                                          let tmp66 = tmp67;
                                        } else {
                                          tmp66 = cResult[60];
                                        }
                                        if (cResult[61] !== tmp9) {
                                          let obj3 = { size: "lg", variant: "secondary", onPress: null, text: null };
                                          class T {
                                            constructor() {
                                              obj = closure_1(closure_2[22]);
                                              hideActionSheetResult = obj.hideActionSheet();
                                              obj2 = closure_0(closure_2[23]);
                                              result = obj2.dismissGdmBlockedUserWarning(channelId);
                                              obj3 = closure_1(closure_2[24]);
                                              closePrivateChannelResult = obj3.closePrivateChannel(channelId, true, true);
                                              obj4 = closure_1(closure_2[21]);
                                              obj1 = { action: BlockWarningEngagements.CLICK_TO_LEAVE, channel_id: channelId, warning_medium: GdmWarningMedium.ACTION_SHEET, ignored_user_ids: ignoredUserIds, blocked_user_ids: blockedUserIds };
                                              trackResult = obj4.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj1);
                                              return;
                                            }
                                          }
                                          obj3.text = tmp66;
                                          const tmp70 = closure_11(tmp(tmp2[29]).Button, obj3);
                                          cResult[61] = tmp9;
                                          cResult[62] = tmp70;
                                          let tmp68 = tmp70;
                                        } else {
                                          tmp68 = cResult[62];
                                        }
                                        if (cResult[63] === tmp4.buttons) {
                                          if (cResult[64] === tmp63) {
                                            if (cResult[65] === tmp68) {
                                              let tmp71 = cResult[66];
                                            }
                                            if (cResult[67] === tmp13) {
                                              if (cResult[68] === tmp15) {
                                                if (cResult[69] === tmp58) {
                                                  if (cResult[70] === tmp71) {
                                                    if (cResult[71] === tmp20) {
                                                      if (cResult[72] === tmp21) {
                                                        let tmp75 = cResult[73];
                                                      }
                                                      if (cResult[74] === tmp14) {
                                                        if (cResult[75] === tmp16) {
                                                          if (cResult[76] === tmp75) {
                                                            let tmp77 = cResult[77];
                                                          }
                                                          return tmp77;
                                                        }
                                                      }
                                                      class T {
                                                        constructor() {
                                                          obj = closure_1(closure_2[22]);
                                                          hideActionSheetResult = obj.hideActionSheet();
                                                          obj2 = closure_0(closure_2[23]);
                                                          result = obj2.dismissGdmBlockedUserWarning(channelId);
                                                          obj3 = closure_1(closure_2[24]);
                                                          closePrivateChannelResult = obj3.closePrivateChannel(channelId, true, true);
                                                          obj4 = closure_1(closure_2[21]);
                                                          obj1 = { action: BlockWarningEngagements.CLICK_TO_LEAVE, channel_id: channelId, warning_medium: GdmWarningMedium.ACTION_SHEET, ignored_user_ids: ignoredUserIds, blocked_user_ids: blockedUserIds };
                                                          trackResult = obj4.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj1);
                                                          return;
                                                        }
                                                      }
                                                      const obj4 = { startExpanded: tmp16, children: tmp75 };
                                                      const tmp78 = closure_11(tmp14, obj4);
                                                      cResult[74] = tmp14;
                                                      cResult[75] = tmp16;
                                                      cResult[76] = tmp75;
                                                      cResult[77] = tmp78;
                                                      tmp77 = tmp78;
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                            class T {
                                              constructor() {
                                                obj = closure_1(closure_2[22]);
                                                hideActionSheetResult = obj.hideActionSheet();
                                                obj2 = closure_0(closure_2[23]);
                                                result = obj2.dismissGdmBlockedUserWarning(channelId);
                                                obj3 = closure_1(closure_2[24]);
                                                closePrivateChannelResult = obj3.closePrivateChannel(channelId, true, true);
                                                obj4 = closure_1(closure_2[21]);
                                                obj1 = { action: BlockWarningEngagements.CLICK_TO_LEAVE, channel_id: channelId, warning_medium: GdmWarningMedium.ACTION_SHEET, ignored_user_ids: ignoredUserIds, blocked_user_ids: blockedUserIds };
                                                trackResult = obj4.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj1);
                                                return;
                                              }
                                            }
                                            const obj5 = { style: tmp20, children: null };
                                            const items = [tmp21, tmp15, tmp58, tmp71];
                                            obj5.children = items;
                                            const tmp76 = closure_13(tmp13, obj5);
                                            cResult[67] = tmp13;
                                            cResult[68] = tmp15;
                                            cResult[69] = tmp58;
                                            cResult[70] = tmp71;
                                            cResult[71] = tmp20;
                                            cResult[72] = tmp21;
                                            cResult[73] = tmp76;
                                            tmp75 = tmp76;
                                          }
                                        }
                                        const obj6 = { style: tmp4.buttons, children: null };
                                        const items1 = [tmp63, tmp68];
                                        obj6.children = items1;
                                        const tmp74 = closure_13(closure_5, obj6);
                                        cResult[63] = tmp4.buttons;
                                        cResult[64] = tmp63;
                                        cResult[65] = tmp68;
                                        cResult[66] = tmp74;
                                        tmp71 = tmp74;
                                      }
                                    }
                                    class T {
                                      constructor() {
                                        obj = closure_1(closure_2[22]);
                                        hideActionSheetResult = obj.hideActionSheet();
                                        obj2 = closure_0(closure_2[23]);
                                        result = obj2.dismissGdmBlockedUserWarning(channelId);
                                        obj3 = closure_1(closure_2[24]);
                                        closePrivateChannelResult = obj3.closePrivateChannel(channelId, true, true);
                                        obj4 = closure_1(closure_2[21]);
                                        obj1 = { action: BlockWarningEngagements.CLICK_TO_LEAVE, channel_id: channelId, warning_medium: GdmWarningMedium.ACTION_SHEET, ignored_user_ids: ignoredUserIds, blocked_user_ids: blockedUserIds };
                                        trackResult = obj4.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj1);
                                        return;
                                      }
                                    }
                                    const obj7 = { style: tmp19, children: tmp55 };
                                    const tmp59 = closure_11(tmp12, obj7);
                                    cResult[53] = tmp12;
                                    cResult[54] = tmp55;
                                    cResult[55] = tmp19;
                                    cResult[56] = tmp59;
                                    tmp58 = tmp59;
                                  }
                                }
                                const obj8 = { hasIcons: cResult[28], children: cResult[29] };
                                const tmp57 = closure_11(cResult[22], obj8);
                                cResult[49] = cResult[22];
                                cResult[50] = cResult[28];
                                cResult[51] = cResult[29];
                                cResult[52] = tmp57;
                                tmp55 = tmp57;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              class T {
                constructor() {
                  obj = closure_1(closure_2[22]);
                  hideActionSheetResult = obj.hideActionSheet();
                  obj2 = closure_0(closure_2[23]);
                  result = obj2.dismissGdmBlockedUserWarning(channelId);
                  obj3 = closure_1(closure_2[24]);
                  closePrivateChannelResult = obj3.closePrivateChannel(channelId, true, true);
                  obj4 = closure_1(closure_2[21]);
                  obj1 = { action: BlockWarningEngagements.CLICK_TO_LEAVE, channel_id: channelId, warning_medium: GdmWarningMedium.ACTION_SHEET, ignored_user_ids: ignoredUserIds, blocked_user_ids: blockedUserIds };
                  trackResult = obj4.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj1);
                  return;
                }
              }
              const obj9 = { channelId, blockedUserIds, ignoredUserIds: title };
              const ActionSheet = tmp(tmp2[25]).ActionSheet;
              const container = tmp4.container;
              if (cResult[33] !== tmp4.headerImage) {
                class T {
                  constructor() {
                    obj = closure_1(closure_2[22]);
                    hideActionSheetResult = obj.hideActionSheet();
                    obj2 = closure_0(closure_2[23]);
                    result = obj2.dismissGdmBlockedUserWarning(channelId);
                    obj3 = closure_1(closure_2[24]);
                    closePrivateChannelResult = obj3.closePrivateChannel(channelId, true, true);
                    obj4 = closure_1(closure_2[21]);
                    obj1 = { action: BlockWarningEngagements.CLICK_TO_LEAVE, channel_id: channelId, warning_medium: GdmWarningMedium.ACTION_SHEET, ignored_user_ids: ignoredUserIds, blocked_user_ids: blockedUserIds };
                    trackResult = obj4.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj1);
                    return;
                  }
                }
                tmp26[0] = blockedUserIds(tmp2[26]);
                tmp26[1] = tmp4.headerImage;
                const tmp28 = closure_11(closure_4, tmp26);
                cResult[33] = tmp4.headerImage;
                cResult[34] = tmp28;
                let tmp23 = tmp28;
              } else {
                tmp23 = cResult[34];
              }
              const _Symbol = Symbol;
              const title2 = tmp4.title;
              if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
                const string = tmp(tmp2[11]).intl.string;
                class T {
                  constructor() {
                    obj = closure_1(closure_2[22]);
                    hideActionSheetResult = obj.hideActionSheet();
                    obj2 = closure_0(closure_2[23]);
                    result = obj2.dismissGdmBlockedUserWarning(channelId);
                    obj3 = closure_1(closure_2[24]);
                    closePrivateChannelResult = obj3.closePrivateChannel(channelId, true, true);
                    obj4 = closure_1(closure_2[21]);
                    obj1 = { action: BlockWarningEngagements.CLICK_TO_LEAVE, channel_id: channelId, warning_medium: GdmWarningMedium.ACTION_SHEET, ignored_user_ids: ignoredUserIds, blocked_user_ids: blockedUserIds };
                    trackResult = obj4.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj1);
                    return;
                  }
                }
                cResult[35] = tmp31;
                let tmp30 = tmp31;
              } else {
                tmp30 = cResult[35];
              }
              if (cResult[36] !== tmp4.title) {
                const obj10 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: null, children: null };
                class T {
                  constructor() {
                    obj = closure_1(closure_2[22]);
                    hideActionSheetResult = obj.hideActionSheet();
                    obj2 = closure_0(closure_2[23]);
                    result = obj2.dismissGdmBlockedUserWarning(channelId);
                    obj3 = closure_1(closure_2[24]);
                    closePrivateChannelResult = obj3.closePrivateChannel(channelId, true, true);
                    obj4 = closure_1(closure_2[21]);
                    obj1 = { action: BlockWarningEngagements.CLICK_TO_LEAVE, channel_id: channelId, warning_medium: GdmWarningMedium.ACTION_SHEET, ignored_user_ids: ignoredUserIds, blocked_user_ids: blockedUserIds };
                    trackResult = obj4.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj1);
                    return;
                  }
                }
                obj10.children = tmp30;
                const tmp34 = closure_11(tmp(tmp2[9]).Text, obj10);
                cResult[36] = tmp4.title;
                cResult[37] = tmp34;
                let tmp32 = tmp34;
              } else {
                tmp32 = cResult[37];
              }
              if (cResult[38] === blockedUserIds.length) {
                if (cResult[39] === title.length) {
                  let tmp35 = cResult[40];
                }
                if (cResult[41] === tmp4.description) {
                  if (cResult[42] === tmp35) {
                    let tmp39 = cResult[43];
                  }
                  if (cResult[44] === tmp32) {
                    if (cResult[45] === tmp39) {
                      let tmp41 = cResult[46];
                    }
                    const tableGroup = tmp4.tableGroup;
                    class T {
                      constructor() {
                        obj = closure_1(closure_2[22]);
                        hideActionSheetResult = obj.hideActionSheet();
                        obj2 = closure_0(closure_2[23]);
                        result = obj2.dismissGdmBlockedUserWarning(channelId);
                        obj3 = closure_1(closure_2[24]);
                        closePrivateChannelResult = obj3.closePrivateChannel(channelId, true, true);
                        obj4 = closure_1(closure_2[21]);
                        obj1 = { action: BlockWarningEngagements.CLICK_TO_LEAVE, channel_id: channelId, warning_medium: GdmWarningMedium.ACTION_SHEET, ignored_user_ids: ignoredUserIds, blocked_user_ids: blockedUserIds };
                        trackResult = obj4.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj1);
                        return;
                      }
                    }
                    if (cResult[47] !== tmp4.icon) {
                      const fn3 = function j(arg0, arg1) {
                        ({ icon, label } = arg0);
                        const obj = { icon: closure_2_11(hasOwnProperty, { style: icon.icon, children: icon }), label };
                        return closure_2_11(TableRow.TableRow, obj, arg1);
                      };
                      class T {
                        constructor() {
                          obj = closure_1(closure_2[22]);
                          hideActionSheetResult = obj.hideActionSheet();
                          obj2 = closure_0(closure_2[23]);
                          result = obj2.dismissGdmBlockedUserWarning(channelId);
                          obj3 = closure_1(closure_2[24]);
                          closePrivateChannelResult = obj3.closePrivateChannel(channelId, true, true);
                          obj4 = closure_1(closure_2[21]);
                          obj1 = { action: BlockWarningEngagements.CLICK_TO_LEAVE, channel_id: channelId, warning_medium: GdmWarningMedium.ACTION_SHEET, ignored_user_ids: ignoredUserIds, blocked_user_ids: blockedUserIds };
                          trackResult = obj4.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj1);
                          return;
                        }
                      }
                      cResult[48] = fn3;
                      let tmp44 = fn3;
                    } else {
                      tmp44 = cResult[48];
                    }
                    const mapped = arr3.map(tmp44);
                    cResult[13] = blockedUserIds;
                    cResult[14] = channelId;
                    cResult[15] = title;
                    cResult[16] = tmp4.container;
                    cResult[17] = tmp4.description;
                    cResult[18] = tmp4.headerImage;
                    cResult[19] = tmp4.icon;
                    ({ tableGroup: tmp3[20], title } = tmp4);
                    cResult[21] = title;
                    cResult[22] = tmp43;
                    cResult[23] = closure_5;
                    cResult[24] = closure_5;
                    cResult[25] = ActionSheet;
                    cResult[26] = tmp41;
                    cResult[27] = true;
                    cResult[28] = true;
                    cResult[29] = mapped;
                    cResult[30] = tableGroup;
                    cResult[31] = container;
                    cResult[32] = tmp23;
                  }
                  class T {
                    constructor() {
                      obj = closure_1(closure_2[22]);
                      hideActionSheetResult = obj.hideActionSheet();
                      obj2 = closure_0(closure_2[23]);
                      result = obj2.dismissGdmBlockedUserWarning(channelId);
                      obj3 = closure_1(closure_2[24]);
                      closePrivateChannelResult = obj3.closePrivateChannel(channelId, true, true);
                      obj4 = closure_1(closure_2[21]);
                      obj1 = { action: BlockWarningEngagements.CLICK_TO_LEAVE, channel_id: channelId, warning_medium: GdmWarningMedium.ACTION_SHEET, ignored_user_ids: ignoredUserIds, blocked_user_ids: blockedUserIds };
                      trackResult = obj4.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj1);
                      return;
                    }
                  }
                  const obj11 = { children: null };
                  const items2 = [tmp32, tmp39];
                  obj11.children = items2;
                  const tmp42 = closure_13(closure_5, obj11);
                  cResult[44] = tmp32;
                  cResult[45] = tmp39;
                  cResult[46] = tmp42;
                  tmp41 = tmp42;
                }
                class T {
                  constructor() {
                    obj = closure_1(closure_2[22]);
                    hideActionSheetResult = obj.hideActionSheet();
                    obj2 = closure_0(closure_2[23]);
                    result = obj2.dismissGdmBlockedUserWarning(channelId);
                    obj3 = closure_1(closure_2[24]);
                    closePrivateChannelResult = obj3.closePrivateChannel(channelId, true, true);
                    obj4 = closure_1(closure_2[21]);
                    obj1 = { action: BlockWarningEngagements.CLICK_TO_LEAVE, channel_id: channelId, warning_medium: GdmWarningMedium.ACTION_SHEET, ignored_user_ids: ignoredUserIds, blocked_user_ids: blockedUserIds };
                    trackResult = obj4.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj1);
                    return;
                  }
                }
                const obj12 = { variant: "text-md/medium", color: "text-default", style: tmp4.description, children: tmp35 };
                const tmp40 = closure_11(tmp(tmp2[9]).Text, obj12);
                cResult[41] = tmp4.description;
                cResult[42] = tmp35;
                cResult[43] = tmp40;
                tmp39 = tmp40;
              }
              const obj13 = { numOfBlockedUsers: blockedUserIds.length, numOfIgnoredUsers: title.length };
              const tmp38 = closure_11(closure_17, obj13);
              cResult[38] = blockedUserIds.length;
              cResult[39] = title.length;
              cResult[40] = tmp38;
              tmp35 = tmp38;
              arr3 = getBlockedUserInGDMTableRows(obj9);
            }
          }
          class T {
            constructor() {
              obj = closure_1(closure_2[22]);
              hideActionSheetResult = obj.hideActionSheet();
              obj2 = closure_0(closure_2[23]);
              result = obj2.dismissGdmBlockedUserWarning(channelId);
              obj3 = closure_1(closure_2[24]);
              closePrivateChannelResult = obj3.closePrivateChannel(channelId, true, true);
              obj4 = closure_1(closure_2[21]);
              obj1 = { action: BlockWarningEngagements.CLICK_TO_LEAVE, channel_id: channelId, warning_medium: GdmWarningMedium.ACTION_SHEET, ignored_user_ids: ignoredUserIds, blocked_user_ids: blockedUserIds };
              trackResult = obj4.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj1);
              return;
            }
          }
          cResult[9] = blockedUserIds;
          cResult[10] = channelId;
          cResult[11] = title;
          cResult[12] = T;
          tmp10 = T;
        }
      }
      const fn2 = function u() {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        const result = SharedSpacesWarningActionCreators.dismissGdmBlockedUserWarning(channelId);
        AnalyticsUtilsDefault.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, { action: constants.CLICK_TO_STAY, channel_id: channelId, warning_medium: constants2.ACTION_SHEET, ignored_user_ids: title, blocked_user_ids: blockedUserIds });
      };
      cResult[5] = blockedUserIds;
      cResult[6] = channelId;
      cResult[7] = title;
      cResult[8] = fn2;
      tmp9 = fn2;
    }
  }
  const fn = function o() {
    AnalyticsUtilsDefault.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_VIEWED, { channel_id: channelId, warning_medium: constants2.ACTION_SHEET, ignored_user_ids: title, blocked_user_ids: blockedUserIds });
  };
  const items3 = [channelId, blockedUserIds, title];
  cResult[0] = blockedUserIds;
  cResult[1] = channelId;
  cResult[2] = title;
  cResult[3] = fn;
  cResult[4] = items3;
  tmp6 = items3;
  tmp5 = fn;
  let obj = channelId(title[13]);
}) : ((channelId) => {
  channelId = channelId.channelId;
  const blockedUserIds = channelId.blockedUserIds;
  const ignoredUserIds = channelId.ignoredUserIds;
  const tmp = closure_14();
  noop = tmp;
  const items = [channelId, blockedUserIds, ignoredUserIds];
  const effect = noop.useEffect(() => {
    AnalyticsUtilsDefault.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_VIEWED, { channel_id: channelId, warning_medium: constants2.ACTION_SHEET, ignored_user_ids: ignoredUserIds, blocked_user_ids: blockedUserIds });
  }, items);
  let obj = { startExpanded: true, children: null };
  let obj2 = { style: tmp.container, children: null };
  const arr4 = getBlockedUserInGDMTableRows({ channelId, blockedUserIds, ignoredUserIds });
  const items1 = [closure_11(closure_4, { source: blockedUserIds(ignoredUserIds[26]), style: tmp.headerImage }), , , ];
  const obj4 = { children: null };
  const obj5 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, children: null };
  const intl = channelId(ignoredUserIds[11]).intl;
  obj5.children = intl.string(channelId(ignoredUserIds[11]).t["mwJJ+f"]);
  const items2 = [closure_11(channelId(ignoredUserIds[9]).Text, obj5), ];
  const obj6 = { variant: "text-md/medium", color: "text-default", style: tmp.description, children: closure_11(closure_17, { numOfBlockedUsers: blockedUserIds.length, numOfIgnoredUsers: ignoredUserIds.length }) };
  items2[1] = closure_11(channelId(ignoredUserIds[9]).Text, obj6);
  obj4.children = items2;
  items1[1] = closure_13(closure_5, obj4);
  const obj8 = { style: tmp.tableGroup, children: null };
  let obj3 = { source: blockedUserIds(ignoredUserIds[26]), style: tmp.headerImage };
  const obj7 = { numOfBlockedUsers: blockedUserIds.length, numOfIgnoredUsers: ignoredUserIds.length };
  obj8.children = closure_11(channelId(ignoredUserIds[27]).TableRowGroup, {
    hasIcons: true,
    children: arr4.map((item, index) => {
      ({ icon, label } = item);
      const obj = { icon: closure_2_11(hasOwnProperty, { style: icon.icon, children: icon }), label };
      return closure_2_11(TableRow.TableRow, obj, index);
    })
  });
  items1[2] = closure_11(closure_5, obj8);
  const obj10 = { style: tmp.buttons, children: null };
  const obj11 = {
    size: "lg",
    onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      const result = SharedSpacesWarningActionCreators.dismissGdmBlockedUserWarning(channelId);
      ChannelActionCreatorsDefault.closePrivateChannel(channelId, true, true);
      AnalyticsUtilsDefault.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, { action: constants.CLICK_TO_LEAVE, channel_id: channelId, warning_medium: constants2.ACTION_SHEET, ignored_user_ids: ignoredUserIds, blocked_user_ids: blockedUserIds });
    },
    text: null
  };
  const intl2 = channelId(ignoredUserIds[11]).intl;
  obj11.text = intl2.string(channelId(ignoredUserIds[11]).t.I4q1kA);
  const items3 = [closure_11(channelId(ignoredUserIds[29]).Button, obj11), ];
  const obj12 = {
    size: "lg",
    variant: "secondary",
    onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      const result = SharedSpacesWarningActionCreators.dismissGdmBlockedUserWarning(channelId);
      AnalyticsUtilsDefault.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, { action: constants.CLICK_TO_STAY, channel_id: channelId, warning_medium: constants2.ACTION_SHEET, ignored_user_ids: ignoredUserIds, blocked_user_ids: blockedUserIds });
    },
    text: null
  };
  const intl3 = channelId(ignoredUserIds[11]).intl;
  obj12.text = intl3.string(channelId(ignoredUserIds[11]).t.DRJhmT);
  items3[1] = closure_11(channelId(ignoredUserIds[29]).Button, obj12);
  obj10.children = items3;
  items1[3] = closure_13(closure_5, obj10);
  obj2.children = items1;
  obj.children = closure_13(closure_5, obj2);
  return closure_11(channelId(ignoredUserIds[25]).ActionSheet, obj);
});
export { getUserCalloutRowText };