// === Module 15908: SearchableMembersScreen ===

// Module 15908 (SearchableMembersScreen)
import dismissGlobalKeyboard from "dismissGlobalKeyboard" /* 1892 */;
import context from "context" /* 7139 */;
import contextDefault from "context" /* 7139 */;
import QUICK_SWITCHERDefault from "QUICK_SWITCHER" /* 7159 */;
import _modDef11364 from "module_11364" /* 11364 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { EVERYONE_CHANNEL_ID } from "getMemberListId" /* 7249 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import trackCommunicationDisabled from "trackCommunicationDisabled" /* 1990 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import handleConnectionOpen from "handleConnectionOpen" /* 1979 */;
import setAutocompleteOptions from "setAutocompleteOptions" /* 11537 */;
import prototype from "prototype" /* 11510 */;
import MessageEmbedTypes from "MessageEmbedTypes" /* 8507 */;
import { SearchResultContentEntityTypes as closure_15 } from "SearchEntrypointAnalyticsLocations" /* 8506 */;
import ME from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
function SearchableMembersScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const guildId = searchContext.guildId;
  let first;
  let stateFromStores2;
  let fullscreenPlaceholderCount;
  let stateFromStores3;
  let callback;
  let stateFromStores5;
  let stateFromStores6;
  const analyticsLocations = guildId(7139)().analyticsLocations;
  let obj = searchContext(11511);
  dependencyMap = obj.getSearchContextId(searchContext);
  obj1 = searchContext(647);
  let items = [stateFromStores6];
  const stateFromStores = obj1.useStateFromStores(items, () => stateFromStores6.getResults(closure_3));
  let obj2 = searchContext(647);
  const items1 = [closure_12];
  const items2 = [searchContext];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => closure_1_12.getChannelIds(searchContext), items2);
  if (0 === stateFromStores1.size) {
    first = stateFromStores2;
  } else {
    first = null;
    if (1 === stateFromStores1.size) {
      const _Array = Array;
      first = Array.from(stateFromStores1)[0];
    }
  }
  let tmp4Result = tmp4(647);
  const items3 = [stateFromStores5];
  stateFromStores2 = tmp4Result.useStateFromStores(items3, () => stateFromStores5.getChannelId());
  tmp4Result = tmp4(15870);
  obj = { placeholderHeight: closure_13, numColumns: 1 };
  fullscreenPlaceholderCount = tmp4Result.useFullscreenPlaceholderCount(obj);
  const tmp = callback();
  const tmp5 = stateFromStores6;
  const items4 = [callback];
  stateFromStores3 = searchContext(647).useStateFromStores(items4, () => {
    const guild = callback.getGuild(guildId);
    let guildVisualOwnerId;
    if (null != guild) {
      guildVisualOwnerId = analyticsLocations(4026).getGuildVisualOwnerId(guild);
      const obj = analyticsLocations(4026);
    }
    return guildVisualOwnerId;
  });
  const tmp4Result1 = searchContext(647);
  const items5 = [fullscreenPlaceholderCount];
  const stateFromStores4 = searchContext(647).useStateFromStores(items5, () => {
    if (first === stateFromStores2) {
      return first;
    } else {
      const channel = fullscreenPlaceholderCount.getChannel(first);
      let tmp4 = first;
      if (null != channel) {
        let parent_id = first;
        if (channel.isAnnouncementThread()) {
          parent_id = first;
          if (null != channel.parent_id) {
            parent_id = channel.parent_id;
          }
        }
        tmp4 = parent_id;
      }
      return tmp4;
    }
  });
  const items6 = [searchContext, first, stateFromStores2, analyticsLocations];
  callback = stateFromStores.useCallback((userId, index) => {
    let obj = searchContext(1892);
    const result = obj.dismissGlobalKeyboard();
    obj = { searchContext, userId: userId.id, index, entityType: closure_1_15.USER };
    const result1 = guildId(11531).trackSearchResultClicked(obj);
    obj = { userId: userId.id, channelId: null, sourceAnalyticsLocations: null };
    let tmp4 = first;
    const obj2 = guildId(11531);
    if (first === stateFromStores2) {
      tmp4 = stateFromStores2;
    }
    obj[1] = tmp4;
    obj[2] = analyticsLocations;
    guildId(8929)(obj);
  }, items6);
  const items7 = [searchContext];
  const items8 = [callback];
  const callback1 = stateFromStores.useCallback((arg0) => {
    ({ user, index } = arg0);
    guildId(11531);
    const obj = { searchContext, userId: user.id, index, entityType: closure_1_15.USER };
    const result = obj.trackSearchResultClicked(obj);
    const result1 = searchContext(1892).dismissGlobalKeyboard();
  }, items7);
  const callback2 = stateFromStores.useCallback((user) => {
    callback(user.user, user.index);
  }, items8);
  const tmp4Result2 = searchContext(647);
  const items9 = [closure_12];
  const items10 = [searchContext];
  stateFromStores5 = searchContext(647).useStateFromStores(items9, () => closure_1_12.isInitialSearchQuery(searchContext), items10);
  const tmp4Result3 = searchContext(647);
  const items11 = [tmp5];
  stateFromStores6 = searchContext(647).useStateFromStores(items11, () => stateFromStores6.getIsFetching(closure_3));
  const items12 = [stateFromStores, stateFromStores5, stateFromStores6];
  const effect = stateFromStores.useEffect(() => {
    if (!stateFromStores5) {
      if (!stateFromStores6) {
        if (stateFromStores.length > 0) {
          const intl2 = searchContext(1236).intl;
          const obj = { count: null };
          obj[0] = length;
          let formatToPlainStringResult = intl2.formatToPlainString(searchContext(1236).t.ZGVL3g, obj);
        } else {
          const intl = searchContext(1236).intl;
          formatToPlainStringResult = intl.string(searchContext(1236).t.tuL9TW);
        }
        const AccessibilityAnnouncer = searchContext(1351).AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(formatToPlainStringResult);
      }
    }
  }, items12);
  const items13 = [stateFromStores, stateFromStores6, stateFromStores5, guildId, stateFromStores3, callback, fullscreenPlaceholderCount];
  const memo = stateFromStores.useMemo(() => {
    let items = [];
    const item = stateFromStores.forEach((item, index) => {
      items = index;
      const member = stateFromStores3.getMember(guildId, item.record.id);
      const obj = { type: closure_2_16.NONE, user: item.record, nickname: null, usernameColor: null, roleColors: null, isNameplatedRow: true, premiumSince: null, isOwner: null, guildId: null, onLongPress: null, onPress: null, start: null, end: null, canShowDisplayNameStylesFont: true };
      let nick;
      if (member != null) {
        nick = member.nick;
      }
      obj[2] = nick;
      let colorString;
      if (member != null) {
        colorString = member.colorString;
      }
      obj[3] = colorString;
      let colorStrings;
      if (member != null) {
        colorStrings = member.colorStrings;
      }
      obj[4] = colorStrings;
      let premiumSince;
      if (member != null) {
        premiumSince = member.premiumSince;
      }
      obj[6] = premiumSince;
      obj[7] = closure_1_8 === item.record.id;
      obj[8] = guildId;
      obj[9] = function onLongPress(arg0) {
        return closure_1_9(arg0, closure_0);
      };
      obj[10] = function onPress(arg0) {
        return closure_1_9(arg0, closure_0);
      };
      obj[11] = 0 === index;
      obj[12] = index === stateFromStores.length - 1;
      obj[1] = obj;
      items.push(obj);
    });
    if (stateFromStores6) {
      for (let num2 = 0; num2 < fullscreenPlaceholderCount; num2 = num2 + 1) {
        let obj = { type: null, key: null };
        obj[0] = closure_1_14.GUILD_CHANNEL_MEMBER_PLACEHOLDER;
        let _HermesInternal = HermesInternal;
        obj[1] = "guild-channel-member-placeholder-" + num2;
        let arr = items.push(obj);
      }
    }
    return items;
  }, items13);
  const tmp4Result4 = searchContext(647);
  const contentContainerStyles = searchContext(15909).useContentContainerStyles();
  const tmp4Result5 = searchContext(15909);
  const messageTabCountsErrorText = searchContext(15907).useMessageTabCountsErrorText({ searchContext });
  if (null != messageTabCountsErrorText) {
    obj = { text: null };
    obj[0] = messageTabCountsErrorText;
    let tmp25 = jsx(tmp2(15862), { text: null });
  } else {
    if (stateFromStores5) {
      if (null != stateFromStores4) {
        obj1 = { onUserPress: null, onUserLongPress: null, channelId: null, guildId: null, disableStickySections: true, listStyleOverride: null, isNameplatedList: true, canShowDisplayNameStylesFont: true };
        obj1[0] = callback1;
        obj1[1] = callback2;
        obj1[2] = stateFromStores4;
        obj1[3] = guildId;
        obj1[5] = tmp.userList;
        tmp25 = jsx(tmp2(10785), { onUserPress: null, onUserLongPress: null, channelId: null, guildId: null, disableStickySections: true, listStyleOverride: null, isNameplatedList: true, canShowDisplayNameStylesFont: true });
      }
    }
    obj2 = { contentContainerStyle: null, data: null };
    obj2[0] = contentContainerStyles.membersContentContainer;
    obj2[1] = memo;
    tmp25 = jsx(tmp2(15874), { contentContainerStyle: null, data: null });
  }
  return tmp25;
}
function ThreadMembersScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const channelId = searchContext.channelId;
  const guildId = searchContext.guildId;
  let obj = searchContext(647);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const channel = closure_1_7.getChannel(channelId);
    let flag;
    if (channel != null) {
      flag = channel.isAnnouncementThread();
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  const items1 = [closure_12];
  const items2 = [searchContext];
  if (!stateFromStores) {
    if (obj2.useStateFromStores(items1, () => closure_1_12.isInitialSearchQuery(searchContext) && !closure_1_12.isTagsEmpty(searchContext), items2)) {
      obj = { channelId: null, guildId: null, onUserPress: null, disableStickySections: true };
      obj[0] = channelId;
      obj[1] = guildId;
      obj[2] = tmp(1892).dismissGlobalKeyboard;
      let tmp7 = jsx(channelId(15910), { channelId: null, guildId: null, onUserPress: null, disableStickySections: true });
      const tmp6 = channelId(15910);
    }
    return tmp7;
  }
  tmp7 = <SearchableMembersScreen searchContext={searchContext} guildId={guildId} />;
  obj2 = searchContext(647);
  tmp = searchContext;
}
let c4 = importAllResult;
({ MESSAGE_PLACEHOLDER_ITEM_SIZE: map1, SearchListItemTypes: closure_14 } = MessageEmbedTypes);
({ RelationshipTypes: closure_16, SearchTypes: closure_17 } = ME);
let closure_19 = createCacheKey.createStyles({ container: { flex: 1, flexGrow: 1 }, userList: { backgroundColor: "transparent" } });
const memoResult = importAllResult.memo(function MembersScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const tmp = callback();
  const analyticsLocations = contextDefault(QUICK_SWITCHERDefault.SEARCH_MEMBERS).analyticsLocations;
  const type = searchContext.type;
  if (constants.CHANNEL === type) {
    let obj = { value: null, children: null };
    obj[0] = analyticsLocations;
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj1 = { channelId: null, disableStickySections: true, listStyleOverride: null, onUserPress: null };
    obj1[0] = searchContext.channelId;
    obj1[2] = tmp.userList;
    obj1[3] = dismissGlobalKeyboard.dismissGlobalKeyboard;
    obj[1] = jsx(_modDef11364, { channelId: null, disableStickySections: true, listStyleOverride: null, onUserPress: null });
    obj[1] = <View style={null}>{null}</View>;
    return jsx(context.AnalyticsLocationProvider, { style: null, children: null });
  } else if (constants.THREAD === type) {
    const obj2 = { searchContext: null, channelId: null, guildId: null };
    obj2[0] = searchContext;
    ({ channelId: obj3[1], guildId: obj3[2] } = searchContext);
    return <ThreadMembersScreen searchContext={null} channelId={null} guildId={null} />;
  } else {
    if (constants.GUILD_CHANNEL !== type) {
      if (constants.GUILD !== type) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        error = new Error("[MembersScreen] Unsupported search context type: " + searchContext.type);
        throw error;
      }
    }
    obj = { value: null, children: null };
    obj[0] = analyticsLocations;
    const obj3 = { searchContext: null, guildId: null };
    obj3[0] = searchContext;
    obj3[1] = searchContext.guildId;
    obj[1] = <SearchableMembersScreen searchContext={null} guildId={null} />;
    return jsx(context.AnalyticsLocationProvider, { value: null, children: null });
  }
});
let result = require("obj132").fileFinishedImporting("modules/search/native/components/tabs/pages/MembersScreen.tsx");

export default memoResult;