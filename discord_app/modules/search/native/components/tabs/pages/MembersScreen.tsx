// === Module 16684: MembersScreen ===

// Module 16684 (MembersScreen)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1874 */;
import PermissionUtilsAll from "PermissionUtils" /* 4204 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4272 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8179 */;
import getGroupDMRecipientLimitDefault from "getGroupDMRecipientLimit" /* 11592 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 12358 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildStore from "GuildStore" /* 1979 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import UserStore from "UserStore" /* 1371 */;
import SearchMemberTabStore from "SearchMemberTabStore" /* 12364 */;
import SearchQueryStore from "SearchQueryStore" /* 12339 */;

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
  const analyticsLocations = guildId(7162)().analyticsLocations;
  let obj = searchContext(12340);
  dependencyMap = obj.getSearchContextId(searchContext);
  let obj1 = searchContext(563);
  let items = [SearchMemberTabStore];
  const stateFromStores = obj1.useStateFromStores(items, () => SearchMemberTabStore.getResults(closure_3));
  closure_129_0 = searchContext;
  let obj2 = searchContext(563);
  const items1 = [SearchQueryStore];
  const items2 = [searchContext];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => SearchQueryStore.getChannelIds(searchContext), items2);
  if (0 === stateFromStores1.size) {
    first = stateFromStores2;
  } else {
    first = null;
    if (1 === stateFromStores1.size) {
      const _Array = Array;
      first = Array.from(stateFromStores1)[0];
    }
  }
  let tmp4Result = tmp4(563);
  const items3 = [stateFromStores5];
  stateFromStores2 = tmp4Result.useStateFromStores(items3, () => stateFromStores5.getChannelId());
  tmp4Result = tmp4(16646);
  obj = { placeholderHeight, numColumns: 1 };
  fullscreenPlaceholderCount = tmp4Result.useFullscreenPlaceholderCount(obj);
  const tmp = closure_21();
  const items4 = [callback];
  stateFromStores3 = searchContext(563).useStateFromStores(items4, () => {
    const guild = GuildStore.getGuild(guildId);
    let guildVisualOwnerId;
    if (null != guild) {
      guildVisualOwnerId = PermissionUtilsAll.getGuildVisualOwnerId(guild);
    }
    return guildVisualOwnerId;
  });
  const tmp4Result1 = searchContext(563);
  const items5 = [fullscreenPlaceholderCount];
  const stateFromStores4 = searchContext(563).useStateFromStores(items5, () => {
    if (first === EVERYONE_CHANNEL_ID) {
      return first;
    } else {
      const channel = ChannelStore.getChannel(first);
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
    let obj = KeyboardManagerUtils;
    const result = obj.dismissGlobalKeyboard();
    obj = { searchContext, userId: userId.id, index, entityType: constants2.USER };
    const result1 = search_tracking_TrackingDefault.trackSearchResultClicked(obj);
    obj = { userId: userId.id, channelId: null, sourceAnalyticsLocations: null };
    let tmp4 = first;
    if (first === EVERYONE_CHANNEL_ID) {
      tmp4 = stateFromStores2;
    }
    obj.channelId = tmp4;
    obj.sourceAnalyticsLocations = analyticsLocations;
    showUserProfileActionSheetDefault(obj);
  }, items6);
  const items7 = [searchContext];
  const items8 = [callback];
  const callback1 = stateFromStores.useCallback((arg0) => {
    ({ user, index } = arg0);
    const obj = { searchContext, userId: user.id, index, entityType: constants2.USER };
    const result = obj.trackSearchResultClicked(obj);
    const result1 = KeyboardManagerUtils.dismissGlobalKeyboard();
  }, items7);
  const callback2 = stateFromStores.useCallback((user) => {
    callback(user.user, user.index);
  }, items8);
  const tmp4Result2 = searchContext(563);
  const items9 = [SearchQueryStore];
  const items10 = [searchContext];
  stateFromStores5 = searchContext(563).useStateFromStores(items9, () => SearchQueryStore.isInitialSearchQuery(searchContext), items10);
  const tmp4Result3 = searchContext(563);
  const items11 = [SearchMemberTabStore];
  stateFromStores6 = searchContext(563).useStateFromStores(items11, () => SearchMemberTabStore.getIsFetching(closure_3));
  const items12 = [stateFromStores, stateFromStores5, stateFromStores6];
  const effect = stateFromStores.useEffect(() => {
    if (!stateFromStores5) {
      if (!stateFromStores6) {
        if (stateFromStores.length > 0) {
          const intl2 = util.intl;
          const obj = { count: length };
          let formatToPlainStringResult = intl2.formatToPlainString(util.t.ZGVL3g, obj);
        } else {
          const intl = util.intl;
          formatToPlainStringResult = intl.string(util.t.tuL9TW);
        }
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(formatToPlainStringResult);
      }
    }
  }, items12);
  const items13 = [stateFromStores, stateFromStores6, stateFromStores5, guildId, stateFromStores3, callback, fullscreenPlaceholderCount];
  const memo = stateFromStores.useMemo(() => {
    const items = [];
    const item = stateFromStores.forEach((record, index) => {
      closure_0 = index;
      const member = GuildMemberStore.getMember(guildId, record.record.id);
      const element = { type: constants.GUILD_CHANNEL_MEMBER, props: null };
      const obj = { type: constants2.NONE, user: record.record, nickname: null, usernameColor: null, roleColors: null, isNameplatedRow: true, premiumSince: null, isOwner: null, guildId: null, onLongPress: null, onPress: null, start: null, end: null, canShowDisplayNameStylesFont: true };
      let nick;
      if (member != null) {
        nick = member.nick;
      }
      obj.nickname = nick;
      let colorString;
      if (member != null) {
        colorString = member.colorString;
      }
      obj.usernameColor = colorString;
      let colorStrings;
      if (member != null) {
        colorStrings = member.colorStrings;
      }
      obj.roleColors = colorStrings;
      let premiumSince;
      if (member != null) {
        premiumSince = member.premiumSince;
      }
      obj.premiumSince = premiumSince;
      obj.isOwner = stateFromStores3 === record.record.id;
      obj.guildId = guildId;
      obj.onLongPress = function onLongPress(arg0) {
        return callback(arg0, closure_0);
      };
      obj.onPress = function onPress(arg0) {
        return callback(arg0, closure_0);
      };
      obj.start = 0 === index;
      obj.end = index === stateFromStores.length - 1;
      element.props = obj;
      items.push(element);
    });
    if (stateFromStores6) {
      for (let num2 = 0; num2 < fullscreenPlaceholderCount; num2 = num2 + 1) {
        let obj = { type: constants.GUILD_CHANNEL_MEMBER_PLACEHOLDER, key: null };
        let _HermesInternal = HermesInternal;
        obj.key = "guild-channel-member-placeholder-" + num2;
        let arr = items.push(obj);
      }
    }
    return items;
  }, items13);
  const tmp4Result4 = searchContext(563);
  const contentContainerStyles = searchContext(16685).useContentContainerStyles();
  const tmp4Result5 = searchContext(16685);
  const messageTabCountsErrorText = searchContext(16683).useMessageTabCountsErrorText({ searchContext });
  if (null != messageTabCountsErrorText) {
    obj = { text: messageTabCountsErrorText };
    let tmp25 = jsx(tmp2(16638), { text: messageTabCountsErrorText });
  } else {
    if (stateFromStores5) {
      if (null != stateFromStores4) {
        obj1 = { onUserPress: callback1, onUserLongPress: callback2, channelId: stateFromStores4, guildId, disableStickySections: true, listStyleOverride: tmp.userList, isNameplatedList: true, canShowDisplayNameStylesFont: true };
        tmp25 = jsx(tmp2(11588), { onUserPress: callback1, onUserLongPress: callback2, channelId: stateFromStores4, guildId, disableStickySections: true, listStyleOverride: tmp.userList, isNameplatedList: true, canShowDisplayNameStylesFont: true });
      }
    }
    obj2 = { contentContainerStyle: contentContainerStyles.membersContentContainer, data: memo };
    tmp25 = jsx(tmp2(16650), { contentContainerStyle: contentContainerStyles.membersContentContainer, data: memo });
  }
  return tmp25;
}
function ThreadMembersScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const channelId = searchContext.channelId;
  const guildId = searchContext.guildId;
  let obj = searchContext(563);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(channelId);
    let flag;
    if (channel != null) {
      flag = channel.isAnnouncementThread();
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  const items1 = [SearchQueryStore];
  const items2 = [searchContext];
  if (!stateFromStores) {
    if (obj2.useStateFromStores(items1, () => SearchQueryStore.isInitialSearchQuery(searchContext) && !SearchQueryStore.isTagsEmpty(searchContext), items2)) {
      obj = { channelId, guildId, onUserPress: tmp(1874).dismissGlobalKeyboard, disableStickySections: true };
      let tmp7 = jsx(channelId(16686), { channelId, guildId, onUserPress: tmp(1874).dismissGlobalKeyboard, disableStickySections: true });
      const tmp6 = channelId(16686);
    }
    return tmp7;
  }
  tmp7 = <SearchableMembersScreen searchContext={searchContext} guildId={guildId} />;
  obj2 = searchContext(563);
  tmp = searchContext;
}
const View = fn(17).View;
const EVERYONE_CHANNEL_ID = fn(7279).EVERYONE_CHANNEL_ID;
const SearchConstants = fn(7878);
({ MESSAGE_PLACEHOLDER_ITEM_SIZE: closure_14, SearchListItemTypes: closure_15 } = SearchConstants);
let closure_16 = fn(7877).SearchResultContentEntityTypes;
const Constants = fn(1074);
({ MAX_GROUP_DM_PARTICIPANTS: closure_17, RelationshipTypes: closure_18, SearchTypes: closure_19 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { container: { flex: 1, flexGrow: 1 }, userList: { backgroundColor: "transparent" }, promoBanner: null };
obj = { paddingTop: nativeDefault.space.PX_24, paddingBottom: 0, paddingHorizontal: 0 };
obj.promoBanner = obj;
let closure_21 = createStyles.createStyles(obj);
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/MembersScreen.tsx");

export default noop.memo(function MembersScreen(searchContext) {
  searchContext = searchContext.searchContext;
  let stateFromStores;
  let tmp = closure_21();
  const analyticsLocations = stateFromStores(7162)(stateFromStores(7182).SEARCH_MEMBERS).analyticsLocations;
  let channelId;
  if (searchContext.type === constants3.CHANNEL) {
    channelId = searchContext.channelId;
  }
  let obj = channelId(563);
  const items = [ChannelStore];
  const items1 = [channelId];
  stateFromStores = obj.useStateFromStores(items, () => {
    let tmp2 = null != channelId;
    if (tmp2) {
      const channel = ChannelStore.getChannel(tmp);
      let flag;
      if (channel != null) {
        flag = channel.isMultiUserDM();
      }
      if (flag == null) {
        flag = false;
      }
      tmp2 = flag;
    }
    return tmp2;
  }, items1);
  let obj1 = channelId(563);
  const items2 = [ChannelStore];
  const items3 = [channelId];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => {
    let channel = null;
    if (null != channelId) {
      channel = ChannelStore.getChannel(tmp);
    }
    let num = 0;
    if (null != channel) {
      const recipients = channel.recipients;
      let num2;
      if (recipients != null) {
        num2 = recipients.length;
      }
      if (num2 == null) {
        num2 = 0;
      }
      num = num2 + 1;
    }
    return num;
  }, items3);
  channelId(563);
  [][0] = stateFromStores;
  const type = searchContext.type;
  if (constants3.CHANNEL === type) {
    obj = { value: analyticsLocations, children: null };
    obj = { style: tmp.container, children: null };
    obj1 = { channelId: searchContext.channelId, disableStickySections: true, listStyleOverride: tmp.userList, onUserPress: tmp7(1874).dismissGlobalKeyboard, listHeaderContent: null };
    let tmp21Result = null;
    if (stateFromStores) {
      const obj2 = { location: "GroupDMDetailsMembers", memberCount: stateFromStores1, recipientLimit: tmp11, wrapperStyle: tmp.promoBanner };
      tmp21Result = jsx(tmp2(16688), { location: "GroupDMDetailsMembers", memberCount: stateFromStores1, recipientLimit: tmp11, wrapperStyle: tmp.promoBanner });
    }
    obj1.listHeaderContent = tmp21Result;
    obj.children = jsx(tmp2(12186), { channelId: searchContext.channelId, disableStickySections: true, listStyleOverride: tmp.userList, onUserPress: tmp7(1874).dismissGlobalKeyboard, listHeaderContent: null });
    obj.children = <View style={tmp.container}>{null}</View>;
    return jsx(tmp7(7162).AnalyticsLocationProvider, { style: tmp.container, children: null });
  } else if (constants3.THREAD === type) {
    const obj3 = { searchContext, channelId: null, guildId: null };
    ({ channelId: obj5.channelId, guildId: obj5.guildId } = searchContext);
    return <ThreadMembersScreen searchContext={searchContext} channelId={null} guildId={null} />;
  } else {
    if (constants3.GUILD_CHANNEL !== type) {
      if (constants3.GUILD !== type) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("[MembersScreen] Unsupported search context type: " + searchContext.type);
        throw error;
      }
    }
    const obj4 = { value: analyticsLocations, children: null };
    const obj5 = { searchContext, guildId: searchContext.guildId };
    obj4.children = <SearchableMembersScreen searchContext={searchContext} guildId={searchContext.guildId} />;
    return jsx(tmp7(7162).AnalyticsLocationProvider, { value: analyticsLocations, children: null });
  }
  const tmp4 = stateFromStores(7162);
});