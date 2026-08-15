// discord_app/modules/guild_settings/native/GuildSettingsModalMemberApplications.tsx
import importAllResult from "getNoResultsSource";
import get_ActivityIndicator from "getSystemLocale";
import updateSubmittedGuildJoinRequestTotal from "updateSubmittedGuildJoinRequestTotal";
import jsxProd from "set";
import createCacheKey from "createCacheKey";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { getAvatarURL } from "../../../utils/AvatarUtils.tsx";
import { nameFromUser } from "../../../utils/UserUtils.tsx";

let c4;
let c5;
let c9;
let error;
let metroImportAll;
const require = arg1;
let c3 = importAllResult;
({ ActivityIndicator: c4, View: c5 } = get_ActivityIndicator);
({ jsx: error, jsxs: metroImportAll, Fragment: c9 } = jsxProd);
let obj = { containerInner: null, spinnerContainer: null, footerSpinner: null, spinner: null };
obj = { paddingHorizontal: require("Themes").space.PX_12, flex: 1, marginTop: 16 };
obj[0] = obj;
obj[1] = { padding: 32 };
obj[2] = { paddingVertical: 16 };
createCacheKey = { color: require("Themes").colors.TEXT_BRAND };
obj[3] = createCacheKey;
let closure_10 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((user) => {
  user = user.user;
  let obj = nameFromUser;
  const globalName = obj.getGlobalName(user);
  let username = globalName;
  if (globalName == null) {
    username = user.username;
  }
  const children = [closure_7(Text.Text, { variant: "text-md/semibold", children: username }), ];
  let tmp5Result = null != globalName;
  if (tmp5Result) {
    obj = { variant: "text-xs/medium", children: null };
    obj[1] = user.username;
    tmp5Result = tmp5(Text.Text, obj);
  }
  children[1] = tmp5Result;
  return closure_8(closure_5, { children });
});
const unpackModuleId = memoResult;
let closure_12 = importAllResult.memo((joinRequest) => {
  let end;
  let start;
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
        let obj = getAvatarURL;
        userAvatarSource = obj.getUserAvatarSource(user);
      }
      obj = { arrow: true, icon: null, label: null, onPress: null, start: null, end: null };
      obj = { source: null, size: null };
      obj[0] = userAvatarSource;
      obj[1] = joinRequest(1297).AvatarSizes.SMALL;
      obj[1] = callback(joinRequest(1297).Avatar, obj);
      const obj1 = { user: null };
      obj1[0] = user;
      obj[2] = callback(closure_11, obj1);
      obj[3] = tmp;
      obj[4] = start;
      obj[5] = end;
      return callback(joinRequest(6291).TableRow, obj);
    }
  }
});
const memoResult1 = importAllResult.memo(function GuildSettingsModalMemberApplications(arg0) {
  let applicationStatus;
  let guildId;
  ({ guildId, applicationStatus } = arg0);
  let importDefault;
  let guildJoinRequests;
  let fetchNextPage;
  let stateFromStores;
  let callback;
  let tmp = callback2();
  importDefault = tmp;
  let obj = applicationStatus(guildJoinRequests[13]);
  obj = { guildId, applicationStatus, sortOrder: applicationStatus(guildJoinRequests[14]).GuildJoinRequestSortOrders.TIMESTAMP_DESC };
  guildJoinRequests = obj.useSortedMemberApplications(obj).guildJoinRequests;
  let obj2 = applicationStatus(guildJoinRequests[15]);
  fetchNextPage = obj2.usePaginatedMemberApplications({ guildId, guildJoinRequests }).fetchNextPage;
  let obj3 = applicationStatus(guildJoinRequests[16]);
  const items = [updateSubmittedGuildJoinRequestTotal];
  stateFromStores = obj3.useStateFromStores(items, () => fetching.isFetching());
  const items1 = [applicationStatus, fetchNextPage];
  callback = fetchNextPage.useCallback(() => {
    fetchNextPage(applicationStatus(guildJoinRequests[14]).GuildJoinRequestSortOrders.TIMESTAMP_DESC, applicationStatus);
  }, items1);
  const items2 = [callback, guildJoinRequests.length];
  const effect = fetchNextPage.useEffect(() => {
    if (0 === guildJoinRequests.length) {
      callback();
    }
  }, items2);
  const items3 = [guildJoinRequests.length];
  const callback1 = fetchNextPage.useCallback((index) => {
    index = index.index;
    return outer1_7(outer1_12, { joinRequest: index.item, start: 0 === index, end: index === guildJoinRequests.length - 1 });
  }, items3);
  callback2 = fetchNextPage.useCallback((joinRequestId) => joinRequestId.joinRequestId, []);
  if (stateFromStores) {
    if (0 === guildJoinRequests.length) {
      obj = { style: null, children: null };
      obj[0] = tmp.spinnerContainer;
      const obj1 = { size: "large", color: null };
      obj1[1] = tmp.spinner.color;
      obj[1] = callback(stateFromStores, obj1);
      return callback(callback, obj);
    }
  }
  if (applicationStatus(guildJoinRequests[14]).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
    const intl2 = tmp4(tmp3[17]).intl;
    let stringResult = intl2.string(tmp4(tmp3[17]).t["/wqiSv"]);
  } else if (tmp4(tmp3[14]).GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
    const intl = tmp4(tmp3[17]).intl;
    stringResult = intl.string(tmp4(tmp3[17]).t.bv82GS);
  } else if (tmp4(tmp3[14]).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
    const intl3 = tmp4(tmp3[17]).intl;
    stringResult = intl3.string(tmp4(tmp3[17]).t["7YSJ6f"]);
  }
  obj2 = { style: tmp.containerInner, children: null };
  if (0 !== guildJoinRequests.length) {
    obj3 = { keyExtractor: null, data: null, renderItem: null, contentContainerStyle: null, onEndReached: null, ListFooterComponent: null };
    obj3[0] = callback2;
    obj3[1] = guildJoinRequests;
    obj3[2] = callback1;
    const obj4 = { paddingBottom: null };
    obj4[0] = importDefault(guildJoinRequests[12])().bottom + importDefault(tmp3[5]).space.PX_16;
    obj3[3] = obj4;
    obj3[4] = callback;
    obj3[5] = function ListFooterComponent() {
      let tmp = null;
      if (stateFromStores) {
        let obj = { style: null, children: null };
        obj[0] = _undefined.footerSpinner;
        obj = { size: "small", color: null };
        obj[1] = _undefined.spinner.color;
        obj[1] = outer1_7(stateFromStores, obj);
        tmp = outer1_7(callback, obj);
      }
      return tmp;
    };
    let tmp13Result = tmp13(tmp4(tmp3[18]).FlashList, obj3);
  } else {
    const obj5 = { Illustration: null, body: null };
    obj5[0] = tmp4(tmp3[19]).NoResults;
    obj5[1] = stringResult;
    tmp13Result = tmp13(tmp4(tmp3[11]).EmptyState, obj5);
  }
  const obj6 = { children: null };
  obj2[1] = tmp13Result;
  const items4 = [callback(callback, obj2), callback(applicationStatus(guildJoinRequests[20]).NavScrim, {})];
  obj6[0] = items4;
  return closure_8(closure_9, obj6);
});
const result = require("updateSubmittedGuildJoinRequestTotal").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMemberApplications.tsx");

export default memoResult1;
export const MemberApplicationUser = memoResult;