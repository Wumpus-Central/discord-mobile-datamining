// === Module 16199: SearchableMembersScreen ===

// Module 16199 (SearchableMembersScreen)
import dismissGlobalKeyboard from "dismissGlobalKeyboard" /* 1892 */;
import context from "context" /* 5918 */;
import contextDefault from "context" /* 5918 */;
import QUICK_SWITCHERDefault from "QUICK_SWITCHER" /* 5938 */;
import _modDef11692 from "module_11692" /* 11692 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { EVERYONE_CHANNEL_ID } from "getMemberListId" /* 6091 */;
import closure_7 from "ensureGuildLoaded" /* 1391 */;
import closure_8 from "trackCommunicationDisabled" /* 1993 */;
import closure_9 from "createGuildRecordFromRust" /* 1910 */;
import closure_10 from "handleConnectionOpen" /* 1982 */;
import closure_11 from "setAutocompleteOptions" /* 11869 */;
import closure_12 from "prototype" /* 11842 */;
import MessageEmbedTypes from "MessageEmbedTypes" /* 7569 */;
import { SearchResultContentEntityTypes as closure_15 } from "SearchEntrypointAnalyticsLocations" /* 7568 */;
import ME from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

require = arg1;
function SearchableMembersScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const guildId = searchContext.guildId;
  let analyticsLocations;
  dependencyMap = undefined;
  let stateFromStores;
  let first;
  let stateFromStores2;
  let fullscreenPlaceholderCount;
  let stateFromStores3;
  let callback;
  let stateFromStores5;
  let stateFromStores6;
  analyticsLocations = guildId(5918)().analyticsLocations;
  let obj = searchContext(11843);
  dependencyMap = obj.getSearchContextId(searchContext);
  obj1 = searchContext(647);
  let items = [stateFromStores6];
  stateFromStores = obj1.useStateFromStores(items, () => stateFromStores6.getResults(closure_3));
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
  tmp4Result = tmp4(16161);
  obj = { placeholderHeight: closure_13, numColumns: 1 };
  fullscreenPlaceholderCount = tmp4Result.useFullscreenPlaceholderCount(obj);
  const tmp = callback();
  let tmp5 = stateFromStores6;
  let tmp7 = closure_12;
  const items4 = [callback];
  stateFromStores3 = searchContext(647).useStateFromStores(items4, () => {
    const guild = callback.getGuild(guildId);
    let guildVisualOwnerId;
    if (null != guild) {
      guildVisualOwnerId = analyticsLocations(4095).getGuildVisualOwnerId(guild);
      const obj = analyticsLocations(4095);
    }
    return guildVisualOwnerId;
  });
  const tmp4Result1 = searchContext(647);
  const items5 = [fullscreenPlaceholderCount];
  const stateFromStores4 = searchContext(647).useStateFromStores(items5, () => {
    if (first === stateFromStores2) {
      return tmp;
    } else {
      const channel = fullscreenPlaceholderCount.getChannel(tmp);
      let tmp4 = tmp;
      if (null != channel) {
        let parent_id = tmp;
        if (channel.isAnnouncementThread()) {
          parent_id = tmp;
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
    const result1 = guildId(11863).trackSearchResultClicked(obj);
    obj = { userId: userId.id, channelId: null, sourceAnalyticsLocations: null };
    let tmp4 = first;
    const obj2 = guildId(11863);
    if (first === stateFromStores2) {
      tmp4 = stateFromStores2;
    }
    obj[1] = tmp4;
    obj[2] = analyticsLocations;
    guildId(8836)(obj);
  }, items6);
  const items7 = [searchContext];
  const items8 = [callback];
  const callback1 = stateFromStores.useCallback((arg0) => {
    ({ user, index } = arg0);
    let obj = guildId(11863);
    obj = { searchContext, userId: user.id, index, entityType: closure_1_15.USER };
    const result = obj.trackSearchResultClicked(obj);
    const result1 = searchContext(1892).dismissGlobalKeyboard();
  }, items7);
  const callback2 = stateFromStores.useCallback((user) => {
    callback(user.user, user.index);
  }, items8);
  const tmp4Result2 = searchContext(647);
  const items9 = [tmp7];
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
    const item = stateFromStores.forEach((record) => {
      items = arg1;
      const member = stateFromStores3.getMember(closure_1_1, record.record.id);
      let obj = { type: closure_2_14.GUILD_CHANNEL_MEMBER, props: null };
      obj = { type: closure_2_16.NONE, user: record.record, nickname: null, usernameColor: null, roleColors: null, isNameplatedRow: true, premiumSince: null, isOwner: null, guildId: null, onLongPress: null, onPress: null, start: null, end: null, canShowDisplayNameStylesFont: true };
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
      obj[7] = closure_1_8 === record.record.id;
      obj[8] = closure_1_1;
      obj[9] = function onLongPress(arg0) {
        return closure_1_9(arg0, closure_0);
      };
      obj[10] = function onPress(arg0) {
        return closure_1_9(arg0, closure_0);
      };
      obj[11] = 0 === arg1;
      obj[12] = arg1 === closure_1_4.length - 1;
      obj[1] = obj;
      items.push(obj);
    });
    if (stateFromStores6) {
      let num2 = 0;
      if (0 < fullscreenPlaceholderCount) {
        do {
          let obj = { type: null, key: null };
          let tmp5 = closure_1_14;
          obj[0] = closure_1_14.GUILD_CHANNEL_MEMBER_PLACEHOLDER;
          let _HermesInternal = HermesInternal;
          obj[1] = "guild-channel-member-placeholder-" + num2;
          let arr = items.push(obj);
          num2 = num2 + 1;
          let tmp7 = fullscreenPlaceholderCount;
        } while (num2 < fullscreenPlaceholderCount);
      }
    }
    return items;
  }, items13);
  const tmp4Result4 = searchContext(647);
  const contentContainerStyles = searchContext(16200).useContentContainerStyles();
  const tmp4Result5 = searchContext(16200);
  const messageTabCountsErrorText = searchContext(16198).useMessageTabCountsErrorText({ searchContext });
  if (null != messageTabCountsErrorText) {
    obj = { text: null };
    obj[0] = messageTabCountsErrorText;
    let tmp25 = jsx(tmp2(16153), { text: null });
  } else {
    if (stateFromStores5) {
      if (null != stateFromStores4) {
        obj1 = { onUserPress: null, onUserLongPress: null, channelId: null, guildId: null, disableStickySections: true, listStyleOverride: null, isNameplatedList: true, canShowDisplayNameStylesFont: true };
        obj1[0] = callback1;
        obj1[1] = callback2;
        obj1[2] = stateFromStores4;
        obj1[3] = guildId;
        obj1[5] = tmp.userList;
        tmp25 = jsx(tmp2(11121), { onUserPress: null, onUserLongPress: null, channelId: null, guildId: null, disableStickySections: true, listStyleOverride: null, isNameplatedList: true, canShowDisplayNameStylesFont: true });
      }
    }
    obj2 = { contentContainerStyle: null, data: null };
    obj2[0] = contentContainerStyles.membersContentContainer;
    obj2[1] = memo;
    tmp25 = jsx(tmp2(16165), { contentContainerStyle: null, data: null });
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
      obj[2] = searchContext(1892).dismissGlobalKeyboard;
      let tmp7 = jsx(channelId(16201), { channelId: null, guildId: null, onUserPress: null, disableStickySections: true });
      const tmp6 = channelId(16201);
    }
    return tmp7;
  }
  tmp7 = <SearchableMembersScreen searchContext={searchContext} guildId={guildId} />;
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
    obj[1] = jsx(_modDef11692, { channelId: null, disableStickySections: true, listStyleOverride: null, onUserPress: null });
    obj[1] = <View style={null}>{null}</View>;
    return jsx(context.AnalyticsLocationProvider, { style: null, children: null });
  } else if (tmp5.THREAD === type) {
    const obj2 = { searchContext: null, channelId: null, guildId: null };
    obj2[0] = searchContext;
    ({ channelId: obj3[1], guildId: obj3[2] } = searchContext);
    return <ThreadMembersScreen searchContext={null} channelId={null} guildId={null} />;
  } else {
    if (tmp5.GUILD_CHANNEL !== type) {
      if (tmp5.GUILD !== type) {
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
  const tmp2 = importDefault;
  const tmp4 = contextDefault;
});
let result = require("set").fileFinishedImporting("modules/search/native/components/tabs/pages/MembersScreen.tsx");

export default memoResult;