// === Module 18265: GuildSettingsModalMemberApplications ===

// Module 18265 (GuildSettingsModalMemberApplications)
import nativeDefault from "native" /* 575 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1412 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4953 */;
import UserUtilsDefault from "UserUtils" /* 4973 */;
import Text_Text from "Text/Text" /* 5508 */;
import openJoinRequestActionSheetDefault from "openJoinRequestActionSheet" /* 18266 */;
import noop from "module_19" /* 19 */;
import GuildJoinRequestStore from "GuildJoinRequestStore" /* 6880 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(4917);
let obj = { containerInner: { paddingHorizontal: nativeDefault.space.PX_12, flex: 1, marginTop: 16 }, spinnerContainer: { padding: 32 }, footerSpinner: { paddingVertical: 16 }, spinner: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_12, flex: 1, marginTop: 16 };
obj.spinner = { color: nativeDefault.colors.TEXT_BRAND };
let closure_10 = createStyles.createStyles(obj);
const memoResult = noop.memo(function MemberApplicationUser(user) {
  user = user.user;
  const globalName = UserUtilsDefault.getGlobalName(user);
  let username = globalName;
  if (globalName == null) {
    username = user.username;
  }
  const children = [metroImportDefault(Text_Text.Text, { variant: "body-md/semibold", children: username }), ];
  let tmp5Result = null != globalName;
  if (tmp5Result) {
    const obj2 = { variant: "body-xs/medium", children: user.username };
    tmp5Result = metroImportDefault(Text_Text.Text, obj2);
  }
  children[1] = tmp5Result;
  return React5(hasOwnProperty, { children });
});
let closure_12 = noop.memo(function GuildSettingsModalMemberApplication(joinRequest) {
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
      const obj3 = { source: userAvatarSource, size: joinRequest(1186).AvatarSizes.SMALL };
      obj2.icon = closure_7(joinRequest(1186).Avatar, obj3);
      const obj4 = { user };
      obj2.label = closure_7(closure_11, obj4);
      obj2.onPress = tmp;
      obj2.start = start;
      obj2.end = end;
      return closure_7(joinRequest(6018).TableRow, obj2);
    }
  }
});
let obj4 = { color: nativeDefault.colors.TEXT_BRAND };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMemberApplications.tsx");

export default noop.memo(function GuildSettingsModalMemberApplications(guildId) {
  guildId = guildId.guildId;
  const applicationStatus = guildId.applicationStatus;
  let onEndReached;
  let tmp = closure_10();
  dependencyMap = tmp;
  let obj = guildId(18271);
  const tmp2 = applicationStatus;
  const guildJoinRequests = obj.useSortedMemberApplications({ guildId, applicationStatus, sortOrder: guildId(4953).GuildJoinRequestSortOrders.TIMESTAMP_DESC }).guildJoinRequests;
  let obj2 = { guildId, applicationStatus, sortOrder: guildId(4953).GuildJoinRequestSortOrders.TIMESTAMP_DESC };
  const fetchNextPage = guildId(18272).usePaginatedMemberApplications({ guildId, guildJoinRequests }).fetchNextPage;
  const obj3 = guildId(18272);
  items = [onEndReached];
  const items1 = [guildId, applicationStatus];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildJoinRequestStore.isFetching(guildId, applicationStatus), items1);
  const items2 = [applicationStatus, fetchNextPage];
  onEndReached = guildJoinRequests.useCallback(() => {
    fetchNextPage(MemberVerificationTypes.GuildJoinRequestSortOrders.TIMESTAMP_DESC, applicationStatus);
  }, items2);
  const items3 = [onEndReached, guildJoinRequests.length];
  const effect = guildJoinRequests.useEffect(() => {
    if (0 === guildJoinRequests.length) {
      callback();
    }
  }, items3);
  const items4 = [guildJoinRequests.length];
  const callback1 = guildJoinRequests.useCallback((joinRequest) => {
    const index = joinRequest.index;
    return metroImportDefault(closure_12, { joinRequest: joinRequest.item, start: 0 === index, end: index === guildJoinRequests.length - 1 });
  }, items4);
  const callback2 = guildJoinRequests.useCallback((joinRequestId) => joinRequestId.joinRequestId, []);
  if (stateFromStores) {
    if (0 === guildJoinRequests.length) {
      const obj5 = { style: tmp.spinnerContainer, children: null };
      const obj6 = { size: "large", color: tmp.spinner.color };
      obj5.children = closure_7(fetchNextPage, obj6);
      return closure_7(stateFromStores, obj5);
    }
  }
  if (guildId(4953).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
    const intl2 = tmp4(1112).intl;
    let stringResult = intl2.string(tmp4(1112).t["/wqiSv"]);
  } else if (tmp4(4953).GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
    const intl = tmp4(1112).intl;
    stringResult = intl.string(tmp4(1112).t.bv82GS);
  } else if (tmp4(4953).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
    const intl3 = tmp4(1112).intl;
    stringResult = intl3.string(tmp4(1112).t["7YSJ6f"]);
  }
  const obj7 = { style: tmp.containerInner, children: null };
  if (0 !== guildJoinRequests.length) {
    const obj8 = { keyExtractor: callback2, data: guildJoinRequests, renderItem: callback1, contentContainerStyle: null, onEndReached: null, ListFooterComponent: null };
    const obj9 = { paddingBottom: applicationStatus(1628)().bottom + tmp2(575).space.PX_16 };
    obj8.contentContainerStyle = obj9;
    obj8.onEndReached = onEndReached;
    obj8.ListFooterComponent = function renderFooter() {
      let tmp = null;
      if (stateFromStores) {
        const obj = { style: closure_2.footerSpinner, children: null };
        const obj2 = { size: "small", color: closure_2.spinner.color };
        obj.children = metroImportDefault(React4, obj2);
        tmp = metroImportDefault(hasOwnProperty, obj);
      }
      return tmp;
    };
    let tmp13Result = closure_7(tmp4(7356).FlashList, obj8);
  } else {
    const obj10 = { Illustration: tmp4(11449).NoResults, body: stringResult };
    tmp13Result = closure_7(tmp4(1186).EmptyState, obj10);
  }
  const obj11 = { children: null };
  obj7.children = tmp13Result;
  const items5 = [closure_7(stateFromStores, obj7), closure_7(guildId(5491).NavScrim, {})];
  obj11.children = items5;
  return closure_8(closure_9, obj11);
});
export const MemberApplicationUser = memoResult;