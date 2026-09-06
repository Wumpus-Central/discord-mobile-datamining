// === Module 16577: GuildSettingsModalMemberApplications ===

// Module 16577 (GuildSettingsModalMemberApplications)
import nativeDefault from "native" /* 576 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4384 */;
import UserUtilsDefault from "UserUtils" /* 4404 */;
import Text_Text from "Text/Text" /* 4556 */;
import openJoinRequestActionSheetDefault from "openJoinRequestActionSheet" /* 16578 */;
import noop from "module_19" /* 19 */;
import GuildJoinRequestStore from "GuildJoinRequestStore" /* 5542 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
fn(4560);
let obj = { containerInner: null, spinnerContainer: null, footerSpinner: null, spinner: null };
obj = { paddingHorizontal: nativeDefault.space.PX_12, flex: 1, marginTop: 16 };
obj.containerInner = obj;
obj.spinnerContainer = { padding: 32 };
obj.footerSpinner = { paddingVertical: 16 };
const createStyles = { color: nativeDefault.colors.TEXT_BRAND };
obj.spinner = createStyles;
let closure_10 = createStyles.createStyles(obj);
const memoResult = noop.memo((user) => {
  user = user.user;
  let obj = UserUtilsDefault;
  const globalName = obj.getGlobalName(user);
  let username = globalName;
  if (globalName == null) {
    username = user.username;
  }
  const children = [React5(Text_Text.Text, { variant: "text-md/semibold", children: username }), ];
  let tmp5Result = null != globalName;
  if (tmp5Result) {
    obj = { variant: "text-xs/medium", children: user.username };
    tmp5Result = React5(Text_Text.Text, obj);
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
        let obj = AvatarUtilsDefault;
        userAvatarSource = obj.getUserAvatarSource(user);
      }
      obj = { arrow: true, icon: null, label: null, onPress: null, start: null, end: null };
      obj = { source: userAvatarSource, size: joinRequest(1178).AvatarSizes.SMALL };
      obj.icon = closure_7(joinRequest(1178).Avatar, obj);
      const obj1 = { user };
      obj.label = closure_7(closure_11, obj1);
      obj.onPress = tmp;
      obj.start = start;
      obj.end = end;
      return closure_7(joinRequest(5605).TableRow, obj);
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMemberApplications.tsx");

export default noop.memo(function GuildSettingsModalMemberApplications(arg0) {
  ({ guildId, applicationStatus } = arg0);
  let guildJoinRequests;
  let tmp = closure_10();
  importDefault = tmp;
  applicationStatus(guildJoinRequests[13]);
  let obj = { guildId, applicationStatus, sortOrder: applicationStatus(guildJoinRequests[14]).GuildJoinRequestSortOrders.TIMESTAMP_DESC };
  guildJoinRequests = obj.useSortedMemberApplications(obj).guildJoinRequests;
  let obj2 = applicationStatus(guildJoinRequests[15]);
  const fetchNextPage = obj2.usePaginatedMemberApplications({ guildId, guildJoinRequests }).fetchNextPage;
  let obj3 = applicationStatus(guildJoinRequests[16]);
  const items = [GuildJoinRequestStore];
  const stateFromStores = obj3.useStateFromStores(items, () => fetching.isFetching());
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
    return React5(closure_12, { joinRequest: joinRequest.item, start: 0 === index, end: index === guildJoinRequests.length - 1 });
  }, items3);
  const callback2 = fetchNextPage.useCallback((joinRequestId) => joinRequestId.joinRequestId, []);
  if (stateFromStores) {
    if (0 === guildJoinRequests.length) {
      obj = { style: tmp.spinnerContainer, children: null };
      const obj1 = { size: "large", color: tmp.spinner.color };
      obj.children = closure_7(stateFromStores, obj1);
      return closure_7(onEndReached, obj);
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
  obj2 = { style: tmp.containerInner, children: null };
  if (0 !== guildJoinRequests.length) {
    obj3 = { keyExtractor: callback2, data: guildJoinRequests, renderItem: callback1, contentContainerStyle: null, onEndReached: null, ListFooterComponent: null };
    const obj4 = { paddingBottom: require("useSafeAreaInsets")().bottom + require("native").space.PX_16 };
    obj3.contentContainerStyle = obj4;
    obj3.onEndReached = onEndReached;
    obj3.ListFooterComponent = function ListFooterComponent() {
      let tmp = null;
      if (stateFromStores) {
        let obj = { style: closure_1.footerSpinner, children: null };
        obj = { size: "small", color: closure_1.spinner.color };
        obj.children = React5(React4, obj);
        tmp = React5(hasOwnProperty, obj);
      }
      return tmp;
    };
    let tmp13Result = closure_7(applicationStatus(tmp3[18]).FlashList, obj3);
  } else {
    const obj5 = { Illustration: applicationStatus(tmp3[19]).NoResults, body: stringResult };
    tmp13Result = closure_7(applicationStatus(tmp3[11]).EmptyState, obj5);
  }
  const obj6 = { children: null };
  obj2.children = tmp13Result;
  const items4 = [closure_7(onEndReached, obj2), closure_7(applicationStatus(guildJoinRequests[20]).NavScrim, {})];
  obj6.children = items4;
  return closure_8(closure_9, obj6);
});
export const MemberApplicationUser = memoResult;