// discord_app/modules/guild_settings/native/GuildSettingsModalMemberApplications.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getAvatarURLDefault from "../../../utils/AvatarUtils.tsx";
import nameFromUserDefault from "../../../utils/UserUtils.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import openJoinRequestActionSheetDefault from "../../guild_member_verification/native/openJoinRequestActionSheet.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import updateSubmittedGuildJoinRequestTotal from "../../guild_member_verification/GuildJoinRequestStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
let c3 = importAllResult;
({ ActivityIndicator: c4, View: c5 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8, Fragment: c9 } = jsxProd);
let obj = { paddingHorizontal: ThemesDefault.space.PX_12, flex: 1, marginTop: 16 };
obj[0] = obj;
obj[1] = { padding: 32 };
obj[2] = { paddingVertical: 16 };
const createCacheKey = { color: ThemesDefault.colors.TEXT_BRAND };
obj[3] = createCacheKey;
let closure_10 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((user) => {
  user = user.user;
  let obj = nameFromUserDefault;
  const globalName = obj.getGlobalName(user);
  let username = globalName;
  if (globalName == null) {
    username = user.username;
  }
  const children = [callback(Text.Text, { variant: "text-md/semibold", children: username }), ];
  let tmp5Result = null != globalName;
  if (tmp5Result) {
    obj = { variant: "text-xs/medium", children: null };
    obj[1] = user.username;
    tmp5Result = callback(Text.Text, obj);
  }
  children[1] = tmp5Result;
  return callback2(closure_5, { children });
});
const unpackModuleId = memoResult;
let closure_12 = importAllResult.memo((joinRequest) => {
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
        let obj = getAvatarURLDefault;
        userAvatarSource = obj.getUserAvatarSource(user);
      }
      obj = { source: null, size: null };
      obj[0] = userAvatarSource;
      obj[1] = joinRequest(1297).AvatarSizes.SMALL;
      obj[1] = callback(joinRequest(1297).Avatar, obj);
      obj1 = { user: null };
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
  ({ guildId, applicationStatus } = arg0);
  let guildJoinRequests;
  let tmp = callback2();
  importDefault = tmp;
  applicationStatus(guildJoinRequests[13]);
  let obj = { guildId, applicationStatus, sortOrder: applicationStatus(guildJoinRequests[14]).GuildJoinRequestSortOrders.TIMESTAMP_DESC };
  guildJoinRequests = obj.useSortedMemberApplications(obj).guildJoinRequests;
  let obj2 = applicationStatus(guildJoinRequests[15]);
  const fetchNextPage = obj2.usePaginatedMemberApplications({ guildId, guildJoinRequests }).fetchNextPage;
  let obj3 = applicationStatus(guildJoinRequests[16]);
  const items = [closure_6];
  const stateFromStores = obj3.useStateFromStores(items, () => fetching.isFetching());
  const items1 = [applicationStatus, fetchNextPage];
  const callback = fetchNextPage.useCallback(() => {
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
    return closure_1_7(closure_1_12, { joinRequest: index.item, start: 0 === index, end: index === guildJoinRequests.length - 1 });
  }, items3);
  callback2 = fetchNextPage.useCallback((joinRequestId) => joinRequestId.joinRequestId, []);
  if (stateFromStores) {
    if (0 === guildJoinRequests.length) {
      obj = { style: null, children: null };
      obj[0] = tmp.spinnerContainer;
      obj1 = { size: "large", color: null };
      obj1[1] = tmp.spinner.color;
      obj[1] = callback(stateFromStores, obj1);
      return callback(callback, obj);
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
        obj[0] = closure_1.footerSpinner;
        obj = { size: "small", color: null };
        obj[1] = closure_1.spinner.color;
        obj[1] = closure_1_7(stateFromStores, obj);
        tmp = closure_1_7(callback, obj);
      }
      return tmp;
    };
    let tmp13Result = tmp13(applicationStatus(tmp3[18]).FlashList, obj3);
  } else {
    const obj5 = { Illustration: null, body: null };
    obj5[0] = applicationStatus(tmp3[19]).NoResults;
    obj5[1] = stringResult;
    tmp13Result = tmp13(applicationStatus(tmp3[11]).EmptyState, obj5);
  }
  const obj6 = { children: null };
  obj2[1] = tmp13Result;
  const items4 = [callback(callback, obj2), callback(applicationStatus(guildJoinRequests[20]).NavScrim, {})];
  obj6[0] = items4;
  return callback2(closure_9, obj6);
});
const result = require("obj132").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMemberApplications.tsx");

export default memoResult1;
export const MemberApplicationUser = memoResult;