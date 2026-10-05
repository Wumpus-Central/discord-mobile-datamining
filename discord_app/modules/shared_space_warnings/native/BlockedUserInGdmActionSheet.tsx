// discord_app/modules/shared_space_warnings/native/BlockedUserInGdmActionSheet.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import intl7 from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import CircleCheckIcon from "../../../design/components/Icon/native/redesign/generated/CircleCheckIcon.tsx";
import CircleInformationIcon from "../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ChannelActionCreatorsDefault from "../../../actions/ChannelActionCreators.tsx";
import NicknameUtilsDefault from "../../../utils/NicknameUtils.tsx";
import TableRow2 from "../../../design/components/TableRow/native/TableRow.native.tsx";
import SharedSpacesWarningActionCreators from "../SharedSpacesWarningActionCreators.tsx";
import react_mod from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import SharedSpaceWarningConstants from "../SharedSpaceWarningConstants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let dependencyMap, userIds;

let c9;
let closure_12;
let closure_4;
let hasOwnProperty;
let map1;
let metroImportAll;
let obj2;
let obj3;
let unpackModuleId;
function getUserCalloutRowText(arg0) {
  let calledOutUserIds;
  let closure_2;
  let formatResult;
  let require;
  let totalUsers;
  let user;
  ({ calledOutUserIds, totalUsers, guildId: require, channelId: importDefault } = arg0);
  const items = [...calledOutUserIds];
  dependencyMap = items.map((item) => user.getUser(item));
  if (totalUsers >= 4) {
    const intl4 = intl7.intl;
    let obj2 = {
      usernameHook1() {
        let obj2;
        const first = closure_2[0];
        const obj = { variant: "text-md/semibold", children: obj2.getName(_require, importDefault, first) };
        const Text = Text_Text.Text;
        obj2 = NicknameUtilsDefault;
        return unpackModuleId(Text, obj);
      },
      usernameHook2() {
        let obj2;
        let tmp;
        const obj = { variant: "text-md/semibold", children: obj2.getName(_require, importDefault, tmp) };
        tmp = closure_2[1];
        const Text = Text_Text.Text;
        obj2 = NicknameUtilsDefault;
        return unpackModuleId(Text, obj);
      },
      numberOfOtherUsers: totalUsers - calledOutUserIds.length,
    };
    formatResult = intl4.format(intl7.t.qfo6KR, obj2);
  } else if (3 === totalUsers) {
    const intl3 = intl7.intl;
    const obj3 = {
      usernameHook1() {
        let obj2;
        const first = closure_2[0];
        const obj = { variant: "text-md/semibold", children: obj2.getName(_require, importDefault, first) };
        const Text = Text_Text.Text;
        obj2 = NicknameUtilsDefault;
        return unpackModuleId(Text, obj);
      },
      usernameHook2() {
        let obj2;
        let tmp;
        const obj = { variant: "text-md/semibold", children: obj2.getName(_require, importDefault, tmp) };
        tmp = closure_2[1];
        const Text = Text_Text.Text;
        obj2 = NicknameUtilsDefault;
        return unpackModuleId(Text, obj);
      },
    };
    formatResult = intl3.format(intl7.t["67ZE+9"], obj3);
  } else if (2 === totalUsers) {
    const intl2 = intl7.intl;
    const obj4 = {
      usernameHook1() {
        let obj2;
        const first = closure_2[0];
        const obj = { variant: "text-md/semibold", children: obj2.getName(_require, importDefault, first) };
        const Text = Text_Text.Text;
        obj2 = NicknameUtilsDefault;
        return unpackModuleId(Text, obj);
      },
      usernameHook2() {
        let obj2;
        let tmp;
        const obj = { variant: "text-md/semibold", children: obj2.getName(_require, importDefault, tmp) };
        tmp = closure_2[1];
        const Text = Text_Text.Text;
        obj2 = NicknameUtilsDefault;
        return unpackModuleId(Text, obj);
      },
    };
    formatResult = intl2.format(intl7.t.veV4IN, obj4);
  } else {
    const intl = intl7.intl;
    let obj = {
      usernameHook() {
        let obj2;
        const first = closure_2[0];
        const obj = { variant: "text-md/semibold", children: obj2.getName(_require, importDefault, first) };
        const Text = Text_Text.Text;
        obj2 = NicknameUtilsDefault;
        return unpackModuleId(Text, obj);
      },
    };
    formatResult = intl.format(intl7.t["4WHCtq"], obj);
  }
  return formatResult;
}
function getBlockedUserInGDMTableRows(arg0) {
  let blockedUserIds;
  let channelId;
  let guild_id;
  let guild_id1;
  let guild_id2;
  let guild_id3;
  let ignoredUserIds;
  let intl;
  let intl2;
  let obj5;
  let obj8;
  let substr1;
  ({ channelId, blockedUserIds, ignoredUserIds } = arg0);
  const channel = ChannelStore.getChannel(channelId);
  const obj = { icon: unpackModuleId(CircleCheckIcon.CircleCheckIcon, {}), label: intl.string(intl7.t.RIMw54) };
  const tmp4 = ignoredUserIds.length > 0;
  intl = intl7.intl;
  const items = [obj];
  const obj2 = {
    icon: unpackModuleId(CircleInformationIcon.CircleInformationIcon, {}),
    label: intl2.string(intl7.t.bejNWN),
  };
  intl2 = intl7.intl;
  items[1] = obj2;
  if (blockedUserIds.length > 0) {
    if (tmp4) {
      const items1 = [];
      HermesBuiltin.arraySpread(items1, ignoredUserIds, HermesBuiltin.arraySpread(items1, blockedUserIds, 0));
      const substr = items1.slice(0, 2);
      const obj3 = { userIds: substr, guildId: guild_id };
      guild_id = undefined;
      const unshift2 = items.unshift;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      const obj4 = { icon: unpackModuleId(closure_16, obj3), label: getUserCalloutRowText(obj5) };
      obj5 = { calledOutUserIds: substr, totalUsers: items1.length, channelId, guildId: guild_id1 };
      guild_id1 = undefined;
      if (channel != null) {
        guild_id1 = channel.guild_id;
      }
      unshift2(obj4);
    }
    return items;
  }
  const items2 = [];
  if (blockedUserIds.length > 0) {
    HermesBuiltin.arraySpread(items2, blockedUserIds, 0);
    substr1 = items2.slice(0, 2);
  } else {
    HermesBuiltin.arraySpread(items2, ignoredUserIds, 0);
    substr1 = items2.slice(0, 2);
  }
  const obj6 = { userIds: substr1, guildId: guild_id2 };
  guild_id2 = undefined;
  const unshift = items.unshift;
  const tmp13 = blockedUserIds.length > 0 ? blockedUserIds.length : ignoredUserIds.length;
  if (channel != null) {
    guild_id2 = channel.guild_id;
  }
  const obj7 = { icon: unpackModuleId(closure_16, obj6), label: getUserCalloutRowText(obj8) };
  obj8 = { calledOutUserIds: substr1, totalUsers: tmp13, channelId, guildId: guild_id3 };
  guild_id3 = undefined;
  if (channel != null) {
    guild_id3 = channel.guild_id;
  }
  unshift(obj7);
}
let react = react_mod;
({ Image: closure_4, View: hasOwnProperty } = react_native);
({ BlockWarningEngagements: metroImportAll, GdmWarningMedium: c9 } = SharedSpaceWarningConstants);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: unpackModuleId, Fragment: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  headerImage: { alignSelf: "center", width: 73, height: 86 },
  title: { textAlign: "center", alignSelf: "center" },
  description: { textAlign: "center", alignSelf: "center" },
  tableGroup: obj3,
  buttons: { gap: 8 },
  icon: { display: "flex", justifyContent: "center", alignItems: "center", minWidth: 32 },
};
obj2 = { paddingTop: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8, textAlign: "center" };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: nativeDefault.space.PX_24 };
let closure_14 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (userIds) => {
      let first;
      let tmp6;
      let tmp7;
      let tmp8;
      const obj = userIds(576);
      const cResult = obj.c(14);
      userIds = userIds.userIds;
      const guildId = userIds.guildId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== userIds) {
        const fn = function l() {
          let user;
          return userIds.map((item) => user.getUser(item));
        };
        const items1 = [userIds];
        cResult[1] = userIds;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = userIds(504);
      const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp6, tmp7);
      if (cResult[4] !== stateFromStoresArray) {
        const found = stateFromStoresArray.filter(tmp(1375).isNotNullish);
        cResult[4] = stateFromStoresArray;
        cResult[5] = found;
        tmp8 = found;
      } else {
        tmp8 = cResult[5];
      }
      if (1 === userIds.length) {
        let tmp13;
        let tmp19;
        if (cResult[6] !== userIds[0]) {
          const user = UserStore.getUser(userIds[0]);
          cResult[6] = userIds[0];
          cResult[7] = user;
          tmp13 = user;
        } else {
          tmp13 = cResult[7];
        }
        if (cResult[8] === guildId) {
          if (cResult[9] === tmp13) {
            let tmp16;
            if (cResult[10] === tmp8) {
              tmp16 = cResult[11];
            }
            return tmp16;
          }
        }
        if (null != tmp13) {
          const obj2 = {
            user: tmp8[0],
            guildId,
            size: userIds(1188).AvatarSizes.REFRESH_MEDIUM_32,
            "aria-hidden": true,
          };
          const Avatar = tmp(1188).Avatar;
          tmp19 = closure_11(Avatar, obj2);
        } else {
          tmp19 = closure_11(tmp(11435).UserIcon, {});
        }
        cResult[8] = guildId;
        cResult[9] = tmp13;
        cResult[10] = tmp8;
        cResult[11] = tmp19;
        tmp16 = tmp19;
      } else {
        let tmp10;
        if (cResult[12] !== tmp8) {
          const obj3 = { users: tmp8, size: userIds(1188).AvatarSizes.REFRESH_MEDIUM_32 };
          const FacepileGroupDMAvatar = tmp(10648).FacepileGroupDMAvatar;
          const tmp12 = closure_11(FacepileGroupDMAvatar, obj3);
          cResult[12] = tmp8;
          cResult[13] = tmp12;
          tmp10 = tmp12;
        } else {
          tmp10 = cResult[13];
        }
        return tmp10;
      }
    }
  : (userIds) => {
      let tmp5;
      userIds = userIds.userIds;
      const guildId = userIds.guildId;
      const items = [UserStore];
      const items1 = [userIds];
      const obj = userIds(504);
      const stateFromStoresArray = obj.useStateFromStoresArray(
        items,
        () => {
          let user;
          return userIds.map((item) => user.getUser(item));
        },
        items1,
      );
      const found = stateFromStoresArray.filter(userIds(1375).isNotNullish);
      if (1 === userIds.length) {
        let tmp8;
        if (null != UserStore.getUser(userIds[0])) {
          const obj3 = {
            user: found[0],
            guildId,
            size: userIds(1188).AvatarSizes.REFRESH_MEDIUM_32,
            "aria-hidden": true,
          };
          const Avatar = tmp(1188).Avatar;
          tmp8 = closure_11(Avatar, obj3);
        } else {
          tmp8 = closure_11(tmp(11435).UserIcon, {});
        }
        tmp5 = tmp8;
      } else {
        const obj4 = { users: found, size: userIds(1188).AvatarSizes.REFRESH_MEDIUM_32 };
        const FacepileGroupDMAvatar = tmp(10648).FacepileGroupDMAvatar;
        tmp5 = closure_11(FacepileGroupDMAvatar, obj4);
      }
      return tmp5;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let items;
      let items1;
      let items2;
      let numOfBlockedUsers;
      let numOfIgnoredUsers;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(12);
      ({ numOfBlockedUsers, numOfIgnoredUsers } = arg0);
      if (numOfBlockedUsers > 0) {
        if (numOfIgnoredUsers > 0) {
          let first;
          let tmp28;
          const _Symbol3 = Symbol;
          if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
            const intl5 = intl7.intl;
            const stringResult = intl5.string(intl7.t.xbRNI3);
            cResult[0] = stringResult;
            first = stringResult;
          } else {
            first = cResult[0];
          }
          const _Symbol4 = Symbol;
          if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
            const obj2 = { children: items };
            items = [first, "\n"];
            const intl6 = intl7.intl;
            items[2] = intl6.string(intl7.t["Bp2/ni"]);
            const tmp31 = map1(closure_12, obj2);
            cResult[1] = tmp31;
            tmp28 = tmp31;
          } else {
            tmp28 = cResult[1];
          }
          tmp6 = tmp28;
        }
        return tmp6;
      }
      if (numOfBlockedUsers > 0) {
        let tmp16;
        let tmp19;
        let tmp21;
        if (cResult[2] !== numOfBlockedUsers) {
          const intl3 = intl7.intl;
          const obj3 = { n: numOfBlockedUsers };
          const formatResult = intl3.format(intl7.t.iKtixW, obj3);
          cResult[2] = numOfBlockedUsers;
          cResult[3] = formatResult;
          tmp16 = formatResult;
        } else {
          tmp16 = cResult[3];
        }
        const _Symbol2 = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = intl7.intl;
          const stringResult1 = intl4.string(intl7.t.SN1hrl);
          cResult[4] = stringResult1;
          tmp19 = stringResult1;
        } else {
          tmp19 = cResult[4];
        }
        if (cResult[5] !== tmp16) {
          const obj4 = { children: items1 };
          items1 = [tmp16, "\n", tmp19];
          const tmp24 = map1(closure_12, obj4);
          cResult[5] = tmp16;
          cResult[6] = tmp24;
          tmp21 = tmp24;
        } else {
          tmp21 = cResult[6];
        }
        tmp6 = tmp21;
      } else {
        tmp6 = null;
        if (numOfIgnoredUsers > 0) {
          let tmp7;
          let tmp10;
          let tmp12;
          if (cResult[7] !== numOfIgnoredUsers) {
            const intl = intl7.intl;
            const obj5 = { n: numOfIgnoredUsers };
            const formatResult1 = intl.format(intl7.t["6IRwua"], obj5);
            cResult[7] = numOfIgnoredUsers;
            cResult[8] = formatResult1;
            tmp7 = formatResult1;
          } else {
            tmp7 = cResult[8];
          }
          const _Symbol = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = intl7.intl;
            const stringResult2 = intl2.string(intl7.t["6AKLRt"]);
            cResult[9] = stringResult2;
            tmp10 = stringResult2;
          } else {
            tmp10 = cResult[9];
          }
          if (cResult[10] !== tmp7) {
            const obj6 = { children: items2 };
            items2 = [tmp7, "\n", tmp10];
            const tmp15 = map1(closure_12, obj6);
            cResult[10] = tmp7;
            cResult[11] = tmp15;
            tmp12 = tmp15;
          } else {
            tmp12 = cResult[11];
          }
          tmp6 = tmp12;
        }
      }
    }
  : (arg0) => {
      let items;
      let items1;
      let items2;
      let numOfBlockedUsers;
      let numOfIgnoredUsers;
      let tmp3;
      ({ numOfBlockedUsers, numOfIgnoredUsers } = arg0);
      if (numOfBlockedUsers > 0) {
        if (numOfIgnoredUsers > 0) {
          const obj2 = { children: items };
          const intl5 = intl7.intl;
          items = [intl5.string(intl7.t.xbRNI3), "\n"];
          const intl6 = intl7.intl;
          items[2] = intl6.string(intl7.t["Bp2/ni"]);
          tmp3 = map1(closure_12, obj2);
        }
        return tmp3;
      }
      if (numOfBlockedUsers > 0) {
        const obj3 = { children: items1 };
        const intl3 = intl7.intl;
        const obj4 = { n: numOfBlockedUsers };
        items1 = [intl3.format(intl7.t.iKtixW, obj4), "\n"];
        const intl4 = intl7.intl;
        items1[2] = intl4.string(intl7.t.SN1hrl);
        tmp3 = map1(closure_12, obj3);
      } else {
        tmp3 = null;
        if (numOfIgnoredUsers > 0) {
          const obj = { children: items2 };
          const intl = intl7.intl;
          const obj5 = { n: numOfIgnoredUsers };
          items2 = [intl.format(intl7.t["6IRwua"], obj5), "\n"];
          const intl2 = intl7.intl;
          items2[2] = intl2.string(intl7.t["6AKLRt"]);
          tmp3 = map1(closure_12, obj);
        }
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let icon;
      let ignoredUserIds;
      let items;
      let items1;
      let items2;
      let obj = channelId(ignoredUserIds[13]);
      const cResult = obj.c(78);
      channelId = channelId.channelId;
      const blockedUserIds = channelId.blockedUserIds;
      ignoredUserIds = channelId.ignoredUserIds;
      const tmp4 = closure_14();
      react = tmp4;
      if (cResult[0] === blockedUserIds) {
        if (cResult[1] === channelId) {
          let tmp5;
          let tmp6;
          if (cResult[2] === ignoredUserIds) {
            tmp5 = cResult[3];
            tmp6 = cResult[4];
          }
          const effect = react.useEffect(tmp5, tmp6);
          if (cResult[5] === blockedUserIds) {
            if (cResult[6] === channelId) {
              let tmp9;
              if (cResult[7] === ignoredUserIds) {
                tmp9 = cResult[8];
              }
              if (cResult[9] === blockedUserIds) {
                if (cResult[10] === channelId) {
                  let tmp10;
                  let tmp21;
                  let tmp28;
                  let tmp30;
                  let tmp19;
                  let tmp18;
                  let tmp17;
                  let tmp16;
                  let flag2;
                  let flag;
                  let tmp15;
                  let tmp14;
                  let tmp12;
                  let tmp11;
                  if (cResult[11] === ignoredUserIds) {
                    tmp10 = cResult[12];
                  }
                  if (cResult[13] === blockedUserIds) {
                    if (cResult[14] === channelId) {
                      if (cResult[15] === ignoredUserIds) {
                        if (cResult[16] === tmp4.container) {
                          if (cResult[17] === tmp4.description) {
                            if (cResult[18] === tmp4.headerImage) {
                              if (cResult[19] === tmp4.icon) {
                                if (cResult[20] === tmp4.tableGroup) {
                                  if (cResult[21] === tmp4.title) {
                                    tmp11 = cResult[22];
                                    tmp12 = cResult[23];
                                    class T {
                                      constructor() {
                                        const obj = ActionSheetActionCreatorsDefault;
                                        obj.hideActionSheet();
                                        const obj2 = SharedSpacesWarningActionCreators;
                                        const result = obj2.dismissGdmBlockedUserWarning(channelId);
                                        const obj3 = ChannelActionCreatorsDefault;
                                        obj3.closePrivateChannel(channelId, true, true);
                                        const obj4 = AnalyticsUtilsDefault;
                                        const obj5 = {
                                          action: metroImportAll.CLICK_TO_LEAVE,
                                          channel_id: channelId,
                                          warning_medium: constants.ACTION_SHEET,
                                          ignored_user_ids: ignoredUserIds,
                                          blocked_user_ids: blockedUserIds,
                                        };
                                        obj4.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj5);
                                      }
                                    }
                                    tmp14 = cResult[25];
                                    tmp15 = cResult[26];
                                    flag = cResult[27];
                                    flag2 = cResult[28];
                                    tmp16 = cResult[29];
                                    tmp17 = cResult[30];
                                    tmp18 = cResult[31];
                                    tmp19 = cResult[32];
                                  }
                                  if (cResult[49] === tmp11) {
                                    if (cResult[50] === flag2) {
                                      let tmp44;
                                      if (cResult[51] === tmp16) {
                                        tmp44 = cResult[52];
                                      }
                                      if (cResult[53] === tmp12) {
                                        if (cResult[54] === tmp44) {
                                          let tmp46;
                                          let tmp49;
                                          let tmp51;
                                          let tmp54;
                                          let tmp56;
                                          if (cResult[55] === tmp17) {
                                            tmp46 = cResult[56];
                                          }
                                          class T {
                                            constructor() {
                                              const obj = ActionSheetActionCreatorsDefault;
                                              obj.hideActionSheet();
                                              const obj2 = SharedSpacesWarningActionCreators;
                                              const result = obj2.dismissGdmBlockedUserWarning(channelId);
                                              const obj3 = ChannelActionCreatorsDefault;
                                              obj3.closePrivateChannel(channelId, true, true);
                                              const obj4 = AnalyticsUtilsDefault;
                                              const obj5 = {
                                                action: metroImportAll.CLICK_TO_LEAVE,
                                                channel_id: channelId,
                                                warning_medium: constants.ACTION_SHEET,
                                                ignored_user_ids: ignoredUserIds,
                                                blocked_user_ids: blockedUserIds,
                                              };
                                              obj4.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj5);
                                            }
                                          }
                                          const buttons = tmp4.buttons;
                                          if (cResult[57] === Symbol.for("react.memo_cache_sentinel")) {
                                            const string2 = tmp(tmp2[11]).intl.string;
                                            class T {
                                              constructor() {
                                                const obj = ActionSheetActionCreatorsDefault;
                                                obj.hideActionSheet();
                                                const obj2 = SharedSpacesWarningActionCreators;
                                                const result = obj2.dismissGdmBlockedUserWarning(channelId);
                                                const obj3 = ChannelActionCreatorsDefault;
                                                obj3.closePrivateChannel(channelId, true, true);
                                                const obj4 = AnalyticsUtilsDefault;
                                                const obj5 = {
                                                  action: metroImportAll.CLICK_TO_LEAVE,
                                                  channel_id: channelId,
                                                  warning_medium: constants.ACTION_SHEET,
                                                  ignored_user_ids: ignoredUserIds,
                                                  blocked_user_ids: blockedUserIds,
                                                };
                                                obj4.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj5);
                                              }
                                            }
                                            cResult[57] = tmp50;
                                            tmp49 = tmp50;
                                          } else {
                                            tmp49 = cResult[57];
                                          }
                                          if (cResult[58] !== tmp10) {
                                            let obj2 = { size: "lg", onPress: null, text: tmp49 };
                                            class T {
                                              constructor() {
                                                const obj = ActionSheetActionCreatorsDefault;
                                                obj.hideActionSheet();
                                                const obj2 = SharedSpacesWarningActionCreators;
                                                const result = obj2.dismissGdmBlockedUserWarning(channelId);
                                                const obj3 = ChannelActionCreatorsDefault;
                                                obj3.closePrivateChannel(channelId, true, true);
                                                const obj4 = AnalyticsUtilsDefault;
                                                const obj5 = {
                                                  action: metroImportAll.CLICK_TO_LEAVE,
                                                  channel_id: channelId,
                                                  warning_medium: constants.ACTION_SHEET,
                                                  ignored_user_ids: ignoredUserIds,
                                                  blocked_user_ids: blockedUserIds,
                                                };
                                                obj4.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj5);
                                              }
                                            }
                                            const tmp53 = closure_11(channelId(ignoredUserIds[29]).Button, obj2);
                                            cResult[58] = tmp10;
                                            cResult[59] = tmp53;
                                            tmp51 = tmp53;
                                          } else {
                                            tmp51 = cResult[59];
                                          }
                                          const _Symbol2 = Symbol;
                                          if (cResult[60] === Symbol.for("react.memo_cache_sentinel")) {
                                            const string3 = tmp(tmp2[11]).intl.string;
                                            class T {
                                              constructor() {
                                                const obj = ActionSheetActionCreatorsDefault;
                                                obj.hideActionSheet();
                                                const obj2 = SharedSpacesWarningActionCreators;
                                                const result = obj2.dismissGdmBlockedUserWarning(channelId);
                                                const obj3 = ChannelActionCreatorsDefault;
                                                obj3.closePrivateChannel(channelId, true, true);
                                                const obj4 = AnalyticsUtilsDefault;
                                                const obj5 = {
                                                  action: metroImportAll.CLICK_TO_LEAVE,
                                                  channel_id: channelId,
                                                  warning_medium: constants.ACTION_SHEET,
                                                  ignored_user_ids: ignoredUserIds,
                                                  blocked_user_ids: blockedUserIds,
                                                };
                                                obj4.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj5);
                                              }
                                            }
                                            cResult[60] = tmp55;
                                            tmp54 = tmp55;
                                          } else {
                                            tmp54 = cResult[60];
                                          }
                                          if (cResult[61] !== tmp9) {
                                            let obj3 = { size: "lg", variant: "secondary", onPress: null, text: tmp54 };
                                            class T {
                                              constructor() {
                                                const obj = ActionSheetActionCreatorsDefault;
                                                obj.hideActionSheet();
                                                const obj2 = SharedSpacesWarningActionCreators;
                                                const result = obj2.dismissGdmBlockedUserWarning(channelId);
                                                const obj3 = ChannelActionCreatorsDefault;
                                                obj3.closePrivateChannel(channelId, true, true);
                                                const obj4 = AnalyticsUtilsDefault;
                                                const obj5 = {
                                                  action: metroImportAll.CLICK_TO_LEAVE,
                                                  channel_id: channelId,
                                                  warning_medium: constants.ACTION_SHEET,
                                                  ignored_user_ids: ignoredUserIds,
                                                  blocked_user_ids: blockedUserIds,
                                                };
                                                obj4.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj5);
                                              }
                                            }
                                            const tmp58 = closure_11(channelId(ignoredUserIds[29]).Button, obj3);
                                            cResult[61] = tmp9;
                                            cResult[62] = tmp58;
                                            tmp56 = tmp58;
                                          } else {
                                            tmp56 = cResult[62];
                                          }
                                          if (cResult[63] === tmp4.buttons) {
                                            if (cResult[64] === tmp51) {
                                              let tmp59;
                                              if (cResult[65] === tmp56) {
                                                tmp59 = cResult[66];
                                              }
                                              if (cResult[67] === closure_5) {
                                                if (cResult[68] === tmp15) {
                                                  if (cResult[69] === tmp46) {
                                                    if (cResult[70] === tmp59) {
                                                      if (cResult[71] === tmp18) {
                                                        let tmp63;
                                                        if (cResult[72] === tmp19) {
                                                          tmp63 = cResult[73];
                                                        }
                                                        if (cResult[74] === tmp14) {
                                                          if (cResult[75] === flag) {
                                                            let tmp65;
                                                            if (cResult[76] === tmp63) {
                                                              tmp65 = cResult[77];
                                                            }
                                                            return tmp65;
                                                          }
                                                        }
                                                        class T {
                                                          constructor() {
                                                            const obj = ActionSheetActionCreatorsDefault;
                                                            obj.hideActionSheet();
                                                            const obj2 = SharedSpacesWarningActionCreators;
                                                            const result = obj2.dismissGdmBlockedUserWarning(channelId);
                                                            const obj3 = ChannelActionCreatorsDefault;
                                                            obj3.closePrivateChannel(channelId, true, true);
                                                            const obj4 = AnalyticsUtilsDefault;
                                                            const obj5 = {
                                                              action: metroImportAll.CLICK_TO_LEAVE,
                                                              channel_id: channelId,
                                                              warning_medium: constants.ACTION_SHEET,
                                                              ignored_user_ids: ignoredUserIds,
                                                              blocked_user_ids: blockedUserIds,
                                                            };
                                                            obj4.track(
                                                              AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT,
                                                              obj5,
                                                            );
                                                          }
                                                        }
                                                        let obj4 = { startExpanded: flag, children: tmp63 };
                                                        const tmp66 = closure_11(tmp14, obj4);
                                                        cResult[74] = tmp14;
                                                        cResult[75] = flag;
                                                        cResult[76] = tmp63;
                                                        cResult[77] = tmp66;
                                                        tmp65 = tmp66;
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                              class T {
                                                constructor() {
                                                  const obj = ActionSheetActionCreatorsDefault;
                                                  obj.hideActionSheet();
                                                  const obj2 = SharedSpacesWarningActionCreators;
                                                  const result = obj2.dismissGdmBlockedUserWarning(channelId);
                                                  const obj3 = ChannelActionCreatorsDefault;
                                                  obj3.closePrivateChannel(channelId, true, true);
                                                  const obj4 = AnalyticsUtilsDefault;
                                                  const obj5 = {
                                                    action: metroImportAll.CLICK_TO_LEAVE,
                                                    channel_id: channelId,
                                                    warning_medium: constants.ACTION_SHEET,
                                                    ignored_user_ids: ignoredUserIds,
                                                    blocked_user_ids: blockedUserIds,
                                                  };
                                                  obj4.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj5);
                                                }
                                              }
                                              let obj5 = { style: tmp18, children: items };
                                              items = [tmp19, tmp15, tmp46, tmp59];
                                              const tmp64 = closure_13(closure_5, obj5);
                                              cResult[67] = closure_5;
                                              cResult[68] = tmp15;
                                              cResult[69] = tmp46;
                                              cResult[70] = tmp59;
                                              cResult[71] = tmp18;
                                              cResult[72] = tmp19;
                                              cResult[73] = tmp64;
                                              tmp63 = tmp64;
                                            }
                                          }
                                          const obj6 = { style: buttons, children: items1 };
                                          items1 = [tmp51, tmp56];
                                          const tmp62 = closure_13(closure_5, obj6);
                                          cResult[63] = tmp4.buttons;
                                          cResult[64] = tmp51;
                                          cResult[65] = tmp56;
                                          cResult[66] = tmp62;
                                          tmp59 = tmp62;
                                        }
                                      }
                                      class T {
                                        constructor() {
                                          const obj = ActionSheetActionCreatorsDefault;
                                          obj.hideActionSheet();
                                          const obj2 = SharedSpacesWarningActionCreators;
                                          const result = obj2.dismissGdmBlockedUserWarning(channelId);
                                          const obj3 = ChannelActionCreatorsDefault;
                                          obj3.closePrivateChannel(channelId, true, true);
                                          const obj4 = AnalyticsUtilsDefault;
                                          const obj5 = {
                                            action: metroImportAll.CLICK_TO_LEAVE,
                                            channel_id: channelId,
                                            warning_medium: constants.ACTION_SHEET,
                                            ignored_user_ids: ignoredUserIds,
                                            blocked_user_ids: blockedUserIds,
                                          };
                                          obj4.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj5);
                                        }
                                      }
                                      const obj7 = { style: tmp17, children: tmp44 };
                                      const tmp47 = closure_11(tmp12, obj7);
                                      cResult[53] = tmp12;
                                      cResult[54] = tmp44;
                                      cResult[55] = tmp17;
                                      cResult[56] = tmp47;
                                      tmp46 = tmp47;
                                    }
                                  }
                                  class T {
                                    constructor() {
                                      const obj = ActionSheetActionCreatorsDefault;
                                      obj.hideActionSheet();
                                      const obj2 = SharedSpacesWarningActionCreators;
                                      const result = obj2.dismissGdmBlockedUserWarning(channelId);
                                      const obj3 = ChannelActionCreatorsDefault;
                                      obj3.closePrivateChannel(channelId, true, true);
                                      const obj4 = AnalyticsUtilsDefault;
                                      const obj5 = {
                                        action: metroImportAll.CLICK_TO_LEAVE,
                                        channel_id: channelId,
                                        warning_medium: constants.ACTION_SHEET,
                                        ignored_user_ids: ignoredUserIds,
                                        blocked_user_ids: blockedUserIds,
                                      };
                                      obj4.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj5);
                                    }
                                  }
                                  const obj8 = { hasIcons: flag2, children: tmp16 };
                                  const tmp45 = closure_11(tmp11, obj8);
                                  cResult[49] = tmp11;
                                  cResult[50] = flag2;
                                  cResult[51] = tmp16;
                                  cResult[52] = tmp45;
                                  tmp44 = tmp45;
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
                      const obj = ActionSheetActionCreatorsDefault;
                      obj.hideActionSheet();
                      const obj2 = SharedSpacesWarningActionCreators;
                      const result = obj2.dismissGdmBlockedUserWarning(channelId);
                      const obj3 = ChannelActionCreatorsDefault;
                      obj3.closePrivateChannel(channelId, true, true);
                      const obj4 = AnalyticsUtilsDefault;
                      const obj5 = {
                        action: metroImportAll.CLICK_TO_LEAVE,
                        channel_id: channelId,
                        warning_medium: constants.ACTION_SHEET,
                        ignored_user_ids: ignoredUserIds,
                        blocked_user_ids: blockedUserIds,
                      };
                      obj4.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj5);
                    }
                  }
                  const obj9 = { channelId, blockedUserIds, ignoredUserIds };
                  const arr4 = getBlockedUserInGDMTableRows(obj9);
                  const ActionSheet = tmp(tmp2[25]).ActionSheet;
                  const container = tmp4.container;
                  if (cResult[33] !== tmp4.headerImage) {
                    class T {
                      constructor() {
                        const obj = ActionSheetActionCreatorsDefault;
                        obj.hideActionSheet();
                        const obj2 = SharedSpacesWarningActionCreators;
                        const result = obj2.dismissGdmBlockedUserWarning(channelId);
                        const obj3 = ChannelActionCreatorsDefault;
                        obj3.closePrivateChannel(channelId, true, true);
                        const obj4 = AnalyticsUtilsDefault;
                        const obj5 = {
                          action: metroImportAll.CLICK_TO_LEAVE,
                          channel_id: channelId,
                          warning_medium: constants.ACTION_SHEET,
                          ignored_user_ids: ignoredUserIds,
                          blocked_user_ids: blockedUserIds,
                        };
                        obj4.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj5);
                      }
                    }
                    tmp24[0] = blockedUserIds(ignoredUserIds[26]);
                    tmp24[1] = tmp4.headerImage;
                    const tmp26 = closure_11(closure_4, tmp24);
                    cResult[33] = tmp4.headerImage;
                    cResult[34] = tmp26;
                    tmp21 = tmp26;
                  } else {
                    tmp21 = cResult[34];
                  }
                  const _Symbol = Symbol;
                  const title = tmp4.title;
                  if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
                    const string = tmp(tmp2[11]).intl.string;
                    class T {
                      constructor() {
                        const obj = ActionSheetActionCreatorsDefault;
                        obj.hideActionSheet();
                        const obj2 = SharedSpacesWarningActionCreators;
                        const result = obj2.dismissGdmBlockedUserWarning(channelId);
                        const obj3 = ChannelActionCreatorsDefault;
                        obj3.closePrivateChannel(channelId, true, true);
                        const obj4 = AnalyticsUtilsDefault;
                        const obj5 = {
                          action: metroImportAll.CLICK_TO_LEAVE,
                          channel_id: channelId,
                          warning_medium: constants.ACTION_SHEET,
                          ignored_user_ids: ignoredUserIds,
                          blocked_user_ids: blockedUserIds,
                        };
                        obj4.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj5);
                      }
                    }
                    cResult[35] = tmp29;
                    tmp28 = tmp29;
                  } else {
                    tmp28 = cResult[35];
                  }
                  if (cResult[36] !== tmp4.title) {
                    const obj10 = {
                      variant: "heading-xl/bold",
                      color: "mobile-text-heading-primary",
                      style: null,
                      children: tmp28,
                    };
                    class T {
                      constructor() {
                        const obj = ActionSheetActionCreatorsDefault;
                        obj.hideActionSheet();
                        const obj2 = SharedSpacesWarningActionCreators;
                        const result = obj2.dismissGdmBlockedUserWarning(channelId);
                        const obj3 = ChannelActionCreatorsDefault;
                        obj3.closePrivateChannel(channelId, true, true);
                        const obj4 = AnalyticsUtilsDefault;
                        const obj5 = {
                          action: metroImportAll.CLICK_TO_LEAVE,
                          channel_id: channelId,
                          warning_medium: constants.ACTION_SHEET,
                          ignored_user_ids: ignoredUserIds,
                          blocked_user_ids: blockedUserIds,
                        };
                        obj4.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj5);
                      }
                    }
                    const tmp32 = closure_11(channelId(ignoredUserIds[9]).Text, obj10);
                    cResult[36] = tmp4.title;
                    cResult[37] = tmp32;
                    tmp30 = tmp32;
                  } else {
                    tmp30 = cResult[37];
                  }
                  if (cResult[38] === blockedUserIds.length) {
                    let tmp33;
                    if (cResult[39] === ignoredUserIds.length) {
                      tmp33 = cResult[40];
                    }
                    if (cResult[41] === tmp4.description) {
                      let tmp37;
                      if (cResult[42] === tmp33) {
                        tmp37 = cResult[43];
                      }
                      if (cResult[44] === tmp30) {
                        let tmp39;
                        let tmp42;
                        if (cResult[45] === tmp37) {
                          tmp39 = cResult[46];
                        }
                        const tableGroup = tmp4.tableGroup;
                        class T {
                          constructor() {
                            const obj = ActionSheetActionCreatorsDefault;
                            obj.hideActionSheet();
                            const obj2 = SharedSpacesWarningActionCreators;
                            const result = obj2.dismissGdmBlockedUserWarning(channelId);
                            const obj3 = ChannelActionCreatorsDefault;
                            obj3.closePrivateChannel(channelId, true, true);
                            const obj4 = AnalyticsUtilsDefault;
                            const obj5 = {
                              action: metroImportAll.CLICK_TO_LEAVE,
                              channel_id: channelId,
                              warning_medium: constants.ACTION_SHEET,
                              ignored_user_ids: ignoredUserIds,
                              blocked_user_ids: blockedUserIds,
                            };
                            obj4.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj5);
                          }
                        }
                        if (cResult[47] !== tmp4.icon) {
                          const fn3 = function j(arg0, id) {
                            let label;
                            let obj2;
                            ({ icon, label } = arg0);
                            const obj = { icon: unpackModuleId(hasOwnProperty, obj2), label };
                            obj2 = { style: icon.icon, children: icon };
                            const TableRow = TableRow2.TableRow;
                            return unpackModuleId(TableRow, obj, id);
                          };
                          class T {
                            constructor() {
                              const obj = ActionSheetActionCreatorsDefault;
                              obj.hideActionSheet();
                              const obj2 = SharedSpacesWarningActionCreators;
                              const result = obj2.dismissGdmBlockedUserWarning(channelId);
                              const obj3 = ChannelActionCreatorsDefault;
                              obj3.closePrivateChannel(channelId, true, true);
                              const obj4 = AnalyticsUtilsDefault;
                              const obj5 = {
                                action: metroImportAll.CLICK_TO_LEAVE,
                                channel_id: channelId,
                                warning_medium: constants.ACTION_SHEET,
                                ignored_user_ids: ignoredUserIds,
                                blocked_user_ids: blockedUserIds,
                              };
                              obj4.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj5);
                            }
                          }
                          cResult[48] = fn3;
                          tmp42 = fn3;
                        } else {
                          tmp42 = cResult[48];
                        }
                        const mapped = arr4.map(tmp42);
                        cResult[13] = blockedUserIds;
                        cResult[14] = channelId;
                        cResult[15] = ignoredUserIds;
                        cResult[16] = tmp4.container;
                        cResult[17] = tmp4.description;
                        cResult[18] = tmp4.headerImage;
                        cResult[19] = tmp4.icon;
                        cResult[20] = tmp4.tableGroup;
                        cResult[21] = tmp4.title;
                        cResult[22] = tmp41;
                        cResult[23] = closure_5;
                        cResult[24] = closure_5;
                        cResult[25] = ActionSheet;
                        cResult[26] = tmp39;
                        cResult[27] = true;
                        cResult[28] = true;
                        cResult[29] = mapped;
                        cResult[30] = tableGroup;
                        cResult[31] = container;
                        cResult[32] = tmp21;
                        tmp19 = tmp21;
                        tmp18 = container;
                        tmp17 = tableGroup;
                        tmp16 = mapped;
                        flag2 = true;
                        flag = true;
                        tmp15 = tmp39;
                        tmp14 = ActionSheet;
                        tmp12 = closure_5;
                        tmp11 = tmp41;
                      }
                      class T {
                        constructor() {
                          const obj = ActionSheetActionCreatorsDefault;
                          obj.hideActionSheet();
                          const obj2 = SharedSpacesWarningActionCreators;
                          const result = obj2.dismissGdmBlockedUserWarning(channelId);
                          const obj3 = ChannelActionCreatorsDefault;
                          obj3.closePrivateChannel(channelId, true, true);
                          const obj4 = AnalyticsUtilsDefault;
                          const obj5 = {
                            action: metroImportAll.CLICK_TO_LEAVE,
                            channel_id: channelId,
                            warning_medium: constants.ACTION_SHEET,
                            ignored_user_ids: ignoredUserIds,
                            blocked_user_ids: blockedUserIds,
                          };
                          obj4.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj5);
                        }
                      }
                      const obj11 = { children: items2 };
                      items2 = [tmp30, tmp37];
                      const tmp40 = closure_13(closure_5, obj11);
                      cResult[44] = tmp30;
                      cResult[45] = tmp37;
                      cResult[46] = tmp40;
                      tmp39 = tmp40;
                    }
                    class T {
                      constructor() {
                        const obj = ActionSheetActionCreatorsDefault;
                        obj.hideActionSheet();
                        const obj2 = SharedSpacesWarningActionCreators;
                        const result = obj2.dismissGdmBlockedUserWarning(channelId);
                        const obj3 = ChannelActionCreatorsDefault;
                        obj3.closePrivateChannel(channelId, true, true);
                        const obj4 = AnalyticsUtilsDefault;
                        const obj5 = {
                          action: metroImportAll.CLICK_TO_LEAVE,
                          channel_id: channelId,
                          warning_medium: constants.ACTION_SHEET,
                          ignored_user_ids: ignoredUserIds,
                          blocked_user_ids: blockedUserIds,
                        };
                        obj4.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj5);
                      }
                    }
                    const obj12 = {
                      variant: "text-md/medium",
                      color: "text-default",
                      style: tmp4.description,
                      children: tmp33,
                    };
                    const tmp38 = closure_11(channelId(ignoredUserIds[9]).Text, obj12);
                    cResult[41] = tmp4.description;
                    cResult[42] = tmp33;
                    cResult[43] = tmp38;
                    tmp37 = tmp38;
                  }
                  const obj13 = { numOfBlockedUsers: blockedUserIds.length, numOfIgnoredUsers: ignoredUserIds.length };
                  const tmp36 = closure_11(closure_17, obj13);
                  cResult[38] = blockedUserIds.length;
                  cResult[39] = ignoredUserIds.length;
                  cResult[40] = tmp36;
                  tmp33 = tmp36;
                }
              }
              class T {
                constructor() {
                  const obj = ActionSheetActionCreatorsDefault;
                  obj.hideActionSheet();
                  const obj2 = SharedSpacesWarningActionCreators;
                  const result = obj2.dismissGdmBlockedUserWarning(channelId);
                  const obj3 = ChannelActionCreatorsDefault;
                  obj3.closePrivateChannel(channelId, true, true);
                  const obj4 = AnalyticsUtilsDefault;
                  const obj5 = {
                    action: metroImportAll.CLICK_TO_LEAVE,
                    channel_id: channelId,
                    warning_medium: constants.ACTION_SHEET,
                    ignored_user_ids: ignoredUserIds,
                    blocked_user_ids: blockedUserIds,
                  };
                  obj4.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj5);
                }
              }
              cResult[9] = blockedUserIds;
              cResult[10] = channelId;
              cResult[11] = ignoredUserIds;
              cResult[12] = T;
              tmp10 = T;
            }
          }
          const fn2 = function u() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
            const obj2 = SharedSpacesWarningActionCreators;
            const result = obj2.dismissGdmBlockedUserWarning(channelId);
            const obj3 = AnalyticsUtilsDefault;
            const obj4 = {
              action: metroImportAll.CLICK_TO_STAY,
              channel_id: channelId,
              warning_medium: constants.ACTION_SHEET,
              ignored_user_ids: ignoredUserIds,
              blocked_user_ids: blockedUserIds,
            };
            obj3.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj4);
          };
          cResult[5] = blockedUserIds;
          cResult[6] = channelId;
          cResult[7] = ignoredUserIds;
          cResult[8] = fn2;
          tmp9 = fn2;
        }
      }
      const fn = function o() {
        const obj = AnalyticsUtilsDefault;
        const obj2 = {
          channel_id: channelId,
          warning_medium: constants.ACTION_SHEET,
          ignored_user_ids: ignoredUserIds,
          blocked_user_ids: blockedUserIds,
        };
        obj.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_VIEWED, obj2);
      };
      const items3 = [channelId, blockedUserIds, ignoredUserIds];
      cResult[0] = blockedUserIds;
      cResult[1] = channelId;
      cResult[2] = ignoredUserIds;
      cResult[3] = fn;
      cResult[4] = items3;
      tmp6 = items3;
      tmp5 = fn;
    }
  : (channelId) => {
      let TableRowGroup;
      let icon;
      let intl;
      let intl2;
      let intl3;
      let items1;
      let items2;
      let items3;
      let obj2;
      let obj7;
      let obj9;
      channelId = channelId.channelId;
      const blockedUserIds = channelId.blockedUserIds;
      const ignoredUserIds = channelId.ignoredUserIds;
      const tmp = closure_14();
      react = tmp;
      const items = [channelId, blockedUserIds, ignoredUserIds];
      const effect = react.useEffect(() => {
        const obj = AnalyticsUtilsDefault;
        const obj2 = {
          channel_id: channelId,
          warning_medium: constants.ACTION_SHEET,
          ignored_user_ids: ignoredUserIds,
          blocked_user_ids: blockedUserIds,
        };
        obj.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_VIEWED, obj2);
      }, items);
      let obj = { startExpanded: true, children: closure_13(closure_5, obj2) };
      obj2 = { style: tmp.container, children: items1 };
      let obj3 = { source: blockedUserIds(ignoredUserIds[26]), style: tmp.headerImage };
      const arr4 = getBlockedUserInGDMTableRows({ channelId, blockedUserIds, ignoredUserIds });
      const ActionSheet = channelId(ignoredUserIds[25]).ActionSheet;
      items1 = [closure_11(closure_4, obj3), , ,];
      let obj4 = { children: items2 };
      let obj5 = {
        variant: "heading-xl/bold",
        color: "mobile-text-heading-primary",
        style: tmp.title,
        children: intl.string(channelId(ignoredUserIds[11]).t["mwJJ+f"]),
      };
      const Text = channelId(ignoredUserIds[9]).Text;
      intl = channelId(ignoredUserIds[11]).intl;
      items2 = [closure_11(Text, obj5)];
      const obj6 = {
        variant: "text-md/medium",
        color: "text-default",
        style: tmp.description,
        children: closure_11(closure_17, obj7),
      };
      obj7 = { numOfBlockedUsers: blockedUserIds.length, numOfIgnoredUsers: ignoredUserIds.length };
      const Text2 = channelId(ignoredUserIds[9]).Text;
      items2[1] = closure_11(Text2, obj6);
      items1[1] = closure_13(closure_5, obj4);
      const obj8 = { style: tmp.tableGroup, children: closure_11(TableRowGroup, obj9) };
      obj9 = {
        hasIcons: true,
        children: arr4.map((item, index) => {
          let label;
          let obj2;
          ({ icon, label } = item);
          const obj = { icon: unpackModuleId(hasOwnProperty, obj2), label };
          obj2 = { style: icon.icon, children: icon };
          const TableRow = TableRow2.TableRow;
          return unpackModuleId(TableRow, obj, index);
        }),
      };
      TableRowGroup = channelId(ignoredUserIds[27]).TableRowGroup;
      items1[2] = closure_11(closure_5, obj8);
      const obj10 = { style: tmp.buttons, children: items3 };
      const obj11 = {
        size: "lg",
        onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = SharedSpacesWarningActionCreators;
          const result = obj2.dismissGdmBlockedUserWarning(channelId);
          const obj3 = ChannelActionCreatorsDefault;
          obj3.closePrivateChannel(channelId, true, true);
          const obj4 = AnalyticsUtilsDefault;
          const obj5 = {
            action: metroImportAll.CLICK_TO_LEAVE,
            channel_id: channelId,
            warning_medium: constants.ACTION_SHEET,
            ignored_user_ids: ignoredUserIds,
            blocked_user_ids: blockedUserIds,
          };
          obj4.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj5);
        },
        text: intl2.string(channelId(ignoredUserIds[11]).t.I4q1kA),
      };
      const Button = channelId(ignoredUserIds[29]).Button;
      intl2 = channelId(ignoredUserIds[11]).intl;
      items3 = [closure_11(Button, obj11)];
      const obj12 = {
        size: "lg",
        variant: "secondary",
        onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = SharedSpacesWarningActionCreators;
          const result = obj2.dismissGdmBlockedUserWarning(channelId);
          const obj3 = AnalyticsUtilsDefault;
          const obj4 = {
            action: metroImportAll.CLICK_TO_STAY,
            channel_id: channelId,
            warning_medium: constants.ACTION_SHEET,
            ignored_user_ids: ignoredUserIds,
            blocked_user_ids: blockedUserIds,
          };
          obj3.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj4);
        },
        text: intl3.string(channelId(ignoredUserIds[11]).t.DRJhmT),
      };
      const Button2 = channelId(ignoredUserIds[29]).Button;
      intl3 = channelId(ignoredUserIds[11]).intl;
      items3[1] = closure_11(Button2, obj12);
      items1[3] = closure_13(closure_5, obj10);
      return closure_11(ActionSheet, obj);
    };
let result = size.fileFinishedImporting("modules/shared_space_warnings/native/BlockedUserInGdmActionSheet.tsx");

export default tmp6;
export { getUserCalloutRowText };
