// discord_app/modules/shared_space_warnings/native/BlockedUserInGdmActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ChannelActionCreatorsDefault from "../../../actions/ChannelActionCreators.tsx";
import NicknameUtilsDefault from "../../../utils/NicknameUtils.tsx";
import TableRow from "../../../design/components/TableRow/native/TableRow.native.tsx";
import SharedSpacesWarningActionCreators from "../SharedSpacesWarningActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
function getUserCalloutRowText(arg0) {
  ({ calledOutUserIds, totalUsers, guildId: require, channelId: importDefault } = arg0);
  const items = [...calledOutUserIds];
  dependencyMap = items.map((item) => user.getUser(item));
  if (totalUsers >= 4) {
    const intl4 = util.intl;
    let obj = {
      usernameHook1() {
        const obj = {
          variant: "text-md/semibold",
          children: NicknameUtilsDefault.getName(closure_1_0, closure_1_1, 19),
        };
        return closure_2_11(Text_Text.Text, obj);
      },
      usernameHook2() {
        const obj = {
          variant: "text-md/semibold",
          children: NicknameUtilsDefault.getName(closure_1_0, closure_1_1, 17),
        };
        return closure_2_11(Text_Text.Text, obj);
      },
      numberOfOtherUsers: totalUsers - calledOutUserIds.length,
    };
    let formatResult = intl4.format(util.t.qfo6KR, obj);
  } else if (3 === totalUsers) {
    const intl3 = util.intl;
    obj = {
      usernameHook1() {
        const obj = {
          variant: "text-md/semibold",
          children: NicknameUtilsDefault.getName(closure_1_0, closure_1_1, 19),
        };
        return closure_2_11(Text_Text.Text, obj);
      },
      usernameHook2() {
        const obj = {
          variant: "text-md/semibold",
          children: NicknameUtilsDefault.getName(closure_1_0, closure_1_1, 17),
        };
        return closure_2_11(Text_Text.Text, obj);
      },
    };
    formatResult = intl3.format(util.t["67ZE+9"], obj);
  } else if (2 === totalUsers) {
    const intl2 = util.intl;
    const obj1 = {
      usernameHook1() {
        const obj = {
          variant: "text-md/semibold",
          children: NicknameUtilsDefault.getName(closure_1_0, closure_1_1, 19),
        };
        return closure_2_11(Text_Text.Text, obj);
      },
      usernameHook2() {
        const obj = {
          variant: "text-md/semibold",
          children: NicknameUtilsDefault.getName(closure_1_0, closure_1_1, 17),
        };
        return closure_2_11(Text_Text.Text, obj);
      },
    };
    formatResult = intl2.format(util.t.veV4IN, obj1);
  } else {
    const intl = util.intl;
    obj = {
      usernameHook() {
        const obj = {
          variant: "text-md/semibold",
          children: NicknameUtilsDefault.getName(closure_1_0, closure_1_1, 19),
        };
        return closure_2_11(Text_Text.Text, obj);
      },
    };
    formatResult = intl.format(util.t["4WHCtq"], obj);
  }
  return formatResult;
}
function UserCalloutAvatars(userIds) {
  userIds = userIds.userIds;
  let REFRESH_MEDIUM_32 = dependencyMap;
  let obj = userIds(504);
  const items = [UserStore];
  const items1 = [userIds];
  const stateFromStoresArray = obj.useStateFromStoresArray(
    items,
    () => userIds.map((item) => user.getUser(item)),
    items1,
  );
  let found = stateFromStoresArray.filter(userIds(1369).isNotNullish);
  if (1 === userIds.length) {
    if (null != UserStore.getUser(userIds[0])) {
      obj = { user: null, guildId: null, size: null, "aria-hidden": true };
      found = found[0];
      obj.user = found;
      obj.guildId = userIds.guildId;
      REFRESH_MEDIUM_32 = tmp(1178).AvatarSizes.REFRESH_MEDIUM_32;
      obj.size = REFRESH_MEDIUM_32;
      let tmp6 = closure_11(tmp(1178).Avatar, obj);
    } else {
      tmp6 = closure_11(tmp(11825).UserIcon, {});
    }
  } else {
    obj = { users: found, size: tmp(1178).AvatarSizes.REFRESH_MEDIUM_32 };
    return closure_11(tmp(10910).FacepileGroupDMAvatar, obj);
  }
}
function BlockedUserInGDMDescription(arg0) {
  ({ numOfBlockedUsers, numOfIgnoredUsers } = arg0);
  if (numOfBlockedUsers > 0) {
    if (tmp2) {
      let obj = { children: null };
      const intl5 = util.intl;
      const items = [intl5.string(util.t.xbRNI3), "\n"];
      const intl6 = util.intl;
      items[2] = intl6.string(util.t["Bp2/ni"]);
      obj.children = items;
      let tmp3 = map1(closure_1_12, obj);
    }
    return tmp3;
  }
  if (numOfBlockedUsers > 0) {
    obj = { children: null };
    const intl3 = util.intl;
    const obj1 = { n: numOfBlockedUsers };
    const items1 = [intl3.format(util.t.iKtixW, obj1), "\n"];
    const intl4 = util.intl;
    items1[2] = intl4.string(util.t.SN1hrl);
    obj.children = items1;
    tmp3 = map1(closure_1_12, obj);
  } else {
    tmp3 = null;
    if (tmp2) {
      obj = { children: null };
      const intl = util.intl;
      const obj2 = { n: numOfIgnoredUsers };
      const items2 = [intl.format(util.t["6IRwua"], obj2), "\n"];
      const intl2 = util.intl;
      items2[2] = intl2.string(util.t["6AKLRt"]);
      obj.children = items2;
      tmp3 = map1(closure_1_12, obj);
    }
  }
}
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const SharedSpaceWarningConstants = fn(13737);
({ BlockWarningEngagements: closure_8, GdmWarningMedium: closure_9 } = SharedSpaceWarningConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_11, Fragment: closure_12, jsxs: map1 } = jsxProd);
fn(4560);
let createStyles = {
  container: null,
  headerImage: null,
  title: null,
  description: null,
  tableGroup: null,
  buttons: null,
  icon: null,
};
createStyles = { paddingTop: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8, textAlign: "center" };
createStyles.container = createStyles;
createStyles.headerImage = { alignSelf: "center", width: 73, height: 86 };
createStyles.title = { textAlign: "center", alignSelf: "center" };
createStyles.description = { textAlign: "center", alignSelf: "center" };
createStyles.tableGroup = { paddingVertical: nativeDefault.space.PX_24 };
createStyles.buttons = { gap: 8 };
createStyles.icon = { display: "flex", justifyContent: "center", alignItems: "center", minWidth: 32 };
let closure_14 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/shared_space_warnings/native/BlockedUserInGdmActionSheet.tsx");

export default function BlockedUserInGdmActionSheet(channelId) {
  channelId = channelId.channelId;
  const blockedUserIds = channelId.blockedUserIds;
  const ignoredUserIds = channelId.ignoredUserIds;
  const tmp = closure_14();
  noop = tmp;
  const items = [channelId, blockedUserIds, ignoredUserIds];
  const effect = noop.useEffect(() => {
    const obj = {
      channel_id: channelId,
      warning_medium: constants2.ACTION_SHEET,
      ignored_user_ids: ignoredUserIds,
      blocked_user_ids: blockedUserIds,
    };
    obj.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_VIEWED, obj);
  }, items);
  const channel = ChannelStore.getChannel(channelId);
  let obj = { icon: closure_11(channelId(ignoredUserIds[17]).CircleCheckIcon, {}), label: null };
  const intl = channelId(ignoredUserIds[11]).intl;
  obj.label = intl.string(channelId(ignoredUserIds[11]).t.RIMw54);
  const items1 = [obj];
  obj = { icon: closure_11(channelId(ignoredUserIds[18]).CircleInformationIcon, {}), label: null };
  const intl2 = channelId(ignoredUserIds[11]).intl;
  obj.label = intl2.string(channelId(ignoredUserIds[11]).t.bejNWN);
  items1[1] = obj;
  if (blockedUserIds.length > 0) {
    if (tmp5) {
      const items2 = [];
      HermesBuiltin.arraySpread(ignoredUserIds, HermesBuiltin.arraySpread(blockedUserIds, 0));
      const substr = items2.slice(0, 2);
      obj = { userIds: substr, guildId: null };
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      const obj1 = { icon: null, label: null };
      obj.guildId = guild_id;
      obj1.icon = closure_11(UserCalloutAvatars, obj);
      let obj2 = { calledOutUserIds: substr, totalUsers: items2.length, channelId, guildId: null };
      let guild_id1;
      if (channel != null) {
        guild_id1 = channel.guild_id;
      }
      obj2.guildId = guild_id1;
      obj1.label = getUserCalloutRowText(obj2);
      items1.unshift(obj1);
    }
    let obj3 = { startExpanded: true, children: null };
    const obj4 = { style: tmp.container, children: null };
    const obj5 = { source: blockedUserIds(tmp8[21]), style: tmp.headerImage };
    const items3 = [closure_11(closure_4, obj5), , ,];
    const obj6 = { children: null };
    const obj7 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, children: null };
    const intl3 = tmp7(tmp8[11]).intl;
    obj7.children = intl3.string(tmp7(tmp8[11]).t["mwJJ+f"]);
    const items4 = [closure_11(tmp7(tmp8[9]).Text, obj7)];
    const obj8 = { variant: "text-md/medium", color: "text-default", style: tmp.description, children: null };
    const obj9 = { numOfBlockedUsers: blockedUserIds.length, numOfIgnoredUsers: ignoredUserIds.length };
    obj8.children = closure_11(BlockedUserInGDMDescription, obj9);
    items4[1] = closure_11(tmp7(tmp8[9]).Text, obj8);
    obj6.children = items4;
    items3[1] = closure_13(closure_5, obj6);
    const obj10 = { style: tmp.tableGroup, children: null };
    const obj11 = {
      hasIcons: true,
      children: items1.map((item, index) => {
        ({ icon, label } = item);
        let obj = { icon: null, label: null };
        obj = { style: icon.icon, children: icon };
        obj.icon = closure_2_11(hasOwnProperty, obj);
        obj.label = label;
        return closure_2_11(TableRow.TableRow, obj, index);
      }),
    };
    obj10.children = closure_11(tmp7(tmp8[22]).TableRowGroup, obj11);
    items3[2] = closure_11(closure_5, obj10);
    const obj12 = { style: tmp.buttons, children: null };
    const obj13 = {
      size: "lg",
      onPress() {
        let obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        const result = SharedSpacesWarningActionCreators.dismissGdmBlockedUserWarning(channelId);
        ChannelActionCreatorsDefault.closePrivateChannel(channelId, true, true);
        obj = {
          action: constants.CLICK_TO_LEAVE,
          channel_id: channelId,
          warning_medium: constants2.ACTION_SHEET,
          ignored_user_ids: ignoredUserIds,
          blocked_user_ids: blockedUserIds,
        };
        AnalyticsUtilsDefault.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj);
      },
      text: null,
    };
    const intl4 = tmp7(tmp8[11]).intl;
    obj13.text = intl4.string(tmp7(tmp8[11]).t.I4q1kA);
    const items5 = [closure_11(tmp7(tmp8[24]).Button, obj13)];
    const obj14 = {
      size: "lg",
      variant: "secondary",
      onPress() {
        let obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        const result = SharedSpacesWarningActionCreators.dismissGdmBlockedUserWarning(channelId);
        obj = {
          action: constants.CLICK_TO_STAY,
          channel_id: channelId,
          warning_medium: constants2.ACTION_SHEET,
          ignored_user_ids: ignoredUserIds,
          blocked_user_ids: blockedUserIds,
        };
        AnalyticsUtilsDefault.track(AnalyticEvents.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj);
      },
      text: null,
    };
    const intl5 = tmp7(tmp8[11]).intl;
    obj14.text = intl5.string(tmp7(tmp8[11]).t.DRJhmT);
    items5[1] = closure_11(tmp7(tmp8[24]).Button, obj14);
    obj12.children = items5;
    items3[3] = closure_13(closure_5, obj12);
    obj4.children = items3;
    obj3.children = closure_13(closure_5, obj4);
    return closure_11(tmp7(tmp8[20]).ActionSheet, obj3);
  }
  const items6 = [];
  if (blockedUserIds.length > 0) {
    HermesBuiltin.arraySpread(blockedUserIds, 0);
    let substr1 = items6.slice(0, 2);
  } else {
    HermesBuiltin.arraySpread(ignoredUserIds, 0);
    substr1 = items6.slice(0, 2);
  }
  const obj15 = { userIds: substr1, guildId: null };
  let guild_id2;
  if (channel != null) {
    guild_id2 = channel.guild_id;
  }
  const obj16 = { icon: closure_11(UserCalloutAvatars, obj15), label: null };
  obj15.guildId = guild_id2;
  const obj17 = {
    calledOutUserIds: substr1,
    totalUsers: blockedUserIds.length > 0 ? blockedUserIds.length : ignoredUserIds.length,
    channelId,
    guildId: null,
  };
  let guild_id3;
  if (channel != null) {
    guild_id3 = channel.guild_id;
  }
  obj17.guildId = guild_id3;
  obj16.label = getUserCalloutRowText(obj17);
  items1.unshift(obj16);
  const tmp16 = blockedUserIds.length > 0 ? blockedUserIds.length : ignoredUserIds.length;
  tmp5 = ignoredUserIds.length > 0;
}
export { getUserCalloutRowText };
