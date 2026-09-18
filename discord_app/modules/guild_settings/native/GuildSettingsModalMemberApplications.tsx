// discord_app/modules/guild_settings/native/GuildSettingsModalMemberApplications.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import MemberVerificationTypes from "../../guild_member_verification/MemberVerificationTypes.tsx";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import openJoinRequestActionSheetDefault from "../../guild_member_verification/native/openJoinRequestActionSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildJoinRequestStore from "../../guild_member_verification/GuildJoinRequestStore.tsx";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(4722);
let obj = {
  containerInner: { paddingHorizontal: nativeDefault.space.PX_12, flex: 1, marginTop: 16 },
  spinnerContainer: { padding: 32 },
  footerSpinner: { paddingVertical: 16 },
  spinner: null,
};
let obj3 = { paddingHorizontal: nativeDefault.space.PX_12, flex: 1, marginTop: 16 };
obj.spinner = { color: nativeDefault.colors.TEXT_BRAND };
let closure_10 = createStyles.createStyles(obj);
const memoResult = noop.memo((user) => {
  user = user.user;
  const globalName = UserUtilsDefault.getGlobalName(user);
  let username = globalName;
  if (globalName == null) {
    username = user.username;
  }
  const children = [React5(Text_Text.Text, { variant: "text-md/semibold", children: username })];
  let tmp5Result = null != globalName;
  if (tmp5Result) {
    const obj2 = { variant: "text-xs/medium", children: user.username };
    tmp5Result = React5(Text_Text.Text, obj2);
  }
  children[1] = tmp5Result;
  return React6(hasOwnProperty, { children });
});
let closure_12 = noop.memo((joinRequest) => {
  joinRequest = joinRequest.joinRequest;
  [][0] = joinRequest;
  ({ start, end } = joinRequest);
  if (null == joinRequest) {
    return null;
  } else {
    const user = joinRequest.user;
    if (null == user) {
      return null;
    } else {
      let userAvatarSource = null;
      if (null != user) {
        userAvatarSource = AvatarUtilsDefault.getUserAvatarSource(user);
      }
      const obj2 = { arrow: true, icon: null, label: null, onPress: null, start: null, end: null };
      const obj3 = { source: userAvatarSource, size: joinRequest(1177).AvatarSizes.SMALL };
      obj2.icon = closure_7(joinRequest(1177).Avatar, obj3);
      const obj4 = { user };
      obj2.label = closure_7(closure_11, obj4);
      obj2.onPress = tmp;
      obj2.start = start;
      obj2.end = end;
      return closure_7(joinRequest(5775).TableRow, obj2);
    }
  }
});
let obj4 = { color: nativeDefault.colors.TEXT_BRAND };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMemberApplications.tsx");

export default noop.memo(function GuildSettingsModalMemberApplications(arg0) {
  ({ guildId, applicationStatus } = arg0);
  let guildJoinRequests;
  let tmp = closure_10();
  importDefault = tmp;
  let obj = applicationStatus(guildJoinRequests[13]);
  const tmp2 = importDefault;
  guildJoinRequests = obj.useSortedMemberApplications({
    guildId,
    applicationStatus,
    sortOrder: applicationStatus(guildJoinRequests[14]).GuildJoinRequestSortOrders.TIMESTAMP_DESC,
  }).guildJoinRequests;
  let obj2 = {
    guildId,
    applicationStatus,
    sortOrder: applicationStatus(guildJoinRequests[14]).GuildJoinRequestSortOrders.TIMESTAMP_DESC,
  };
  const fetchNextPage = applicationStatus(guildJoinRequests[15]).usePaginatedMemberApplications({
    guildId,
    guildJoinRequests,
  }).fetchNextPage;
  const obj3 = applicationStatus(guildJoinRequests[15]);
  const items = [GuildJoinRequestStore];
  const stateFromStores = applicationStatus(guildJoinRequests[16]).useStateFromStores(items, () =>
    fetching.isFetching(),
  );
  const items1 = [applicationStatus, fetchNextPage];
  const onEndReached = fetchNextPage.useCallback(() => {
    fetchNextPage(MemberVerificationTypes.GuildJoinRequestSortOrders.TIMESTAMP_DESC, applicationStatus);
  }, items1);
  const items2 = [onEndReached, guildJoinRequests.length];
  const effect = fetchNextPage.useEffect(() => {
    if (0 === guildJoinRequests.length) {
      callback();
    }
  }, items2);
  const items3 = [guildJoinRequests.length];
  const callback1 = fetchNextPage.useCallback((joinRequest) => {
    const index = joinRequest.index;
    return React5(closure_12, {
      joinRequest: joinRequest.item,
      start: 0 === index,
      end: index === guildJoinRequests.length - 1,
    });
  }, items3);
  const callback2 = fetchNextPage.useCallback((joinRequestId) => joinRequestId.joinRequestId, []);
  if (stateFromStores) {
    if (0 === guildJoinRequests.length) {
      const obj5 = { style: tmp.spinnerContainer, children: null };
      const obj6 = { size: "large", color: tmp.spinner.color };
      obj5.children = closure_7(stateFromStores, obj6);
      return closure_7(onEndReached, obj5);
    }
  }
  if (applicationStatus(guildJoinRequests[14]).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
    const intl2 = applicationStatus(tmp3[17]).intl;
    let stringResult = intl2.string(applicationStatus(tmp3[17]).t["/wqiSv"]);
  } else if (applicationStatus(tmp3[14]).GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
    const intl = applicationStatus(tmp3[17]).intl;
    stringResult = intl.string(applicationStatus(tmp3[17]).t.bv82GS);
  } else if (applicationStatus(tmp3[14]).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
    const intl3 = applicationStatus(tmp3[17]).intl;
    stringResult = intl3.string(applicationStatus(tmp3[17]).t["7YSJ6f"]);
  }
  const obj7 = { style: tmp.containerInner, children: null };
  if (0 !== guildJoinRequests.length) {
    const obj8 = {
      keyExtractor: callback2,
      data: guildJoinRequests,
      renderItem: callback1,
      contentContainerStyle: null,
      onEndReached: null,
      ListFooterComponent: null,
    };
    const obj9 = { paddingBottom: require("useSafeAreaInsets")().bottom + tmp2(tmp3[5]).space.PX_16 };
    obj8.contentContainerStyle = obj9;
    obj8.onEndReached = onEndReached;
    obj8.ListFooterComponent = function ListFooterComponent() {
      let tmp = null;
      if (stateFromStores) {
        const obj = { style: closure_1.footerSpinner, children: null };
        const obj2 = { size: "small", color: closure_1.spinner.color };
        obj.children = React5(React4, obj2);
        tmp = React5(hasOwnProperty, obj);
      }
      return tmp;
    };
    let tmp13Result = closure_7(applicationStatus(tmp3[18]).FlashList, obj8);
  } else {
    const obj10 = { Illustration: applicationStatus(tmp3[19]).NoResults, body: stringResult };
    tmp13Result = closure_7(applicationStatus(tmp3[11]).EmptyState, obj10);
  }
  const obj11 = { children: null };
  obj7.children = tmp13Result;
  const items4 = [closure_7(onEndReached, obj7), closure_7(applicationStatus(guildJoinRequests[20]).NavScrim, {})];
  obj11.children = items4;
  return closure_8(closure_9, obj11);
});
export const MemberApplicationUser = memoResult;
