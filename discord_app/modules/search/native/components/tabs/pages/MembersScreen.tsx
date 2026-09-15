// === Module 16836: MembersScreen ===

// Module 16836 (MembersScreen)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1875 */;
import PermissionUtilsAll from "PermissionUtils" /* 4283 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4351 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8299 */;
import getGroupDMRecipientLimitDefault from "getGroupDMRecipientLimit" /* 11726 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 12493 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import GuildMemberStore from "GuildMemberStore" /* 2022 */;
import GuildStore from "GuildStore" /* 1980 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2012 */;
import UserStore from "UserStore" /* 1372 */;
import SearchMemberTabStore from "SearchMemberTabStore" /* 12499 */;
import SearchQueryStore from "SearchQueryStore" /* 12474 */;

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
  const analyticsLocations = guildId(7269)().analyticsLocations;
  const tmp = closure_21();
  dependencyMap = searchContext(12475).getSearchContextId(searchContext);
  let obj = searchContext(12475);
  let items = [SearchMemberTabStore];
  const stateFromStores = searchContext(563).useStateFromStores(items, () => SearchMemberTabStore.getResults(closure_3));
  closure_129_0 = searchContext;
  let obj2 = searchContext(563);
  const items1 = [SearchQueryStore];
  const items2 = [searchContext];
  const stateFromStores1 = searchContext(563).useStateFromStores(items1, () => SearchQueryStore.getChannelIds(searchContext), items2);
  if (0 === stateFromStores1.size) {
    first = stateFromStores2;
  } else {
    first = null;
    if (1 === stateFromStores1.size) {
      const _Array = Array;
      first = Array.from(stateFromStores1)[0];
    }
  }
  let obj3 = searchContext(563);
  const items3 = [stateFromStores5];
  stateFromStores2 = searchContext(563).useStateFromStores(items3, () => stateFromStores5.getChannelId());
  const tmp4Result = searchContext(563);
  fullscreenPlaceholderCount = searchContext(16793).useFullscreenPlaceholderCount({ placeholderHeight, numColumns: 1 });
  let obj4 = { placeholderHeight, numColumns: 1 };
  const tmp4Result8 = searchContext(16793);
  const items4 = [callback];
  stateFromStores3 = searchContext(563).useStateFromStores(items4, () => {
    const guild = GuildStore.getGuild(guildId);
    let guildVisualOwnerId;
    if (null != guild) {
      guildVisualOwnerId = PermissionUtilsAll.getGuildVisualOwnerId(guild);
    }
    return guildVisualOwnerId;
  });
  const tmp4Result9 = searchContext(563);
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
    const result = KeyboardManagerUtils.dismissGlobalKeyboard();
    const result1 = search_tracking_TrackingDefault.trackSearchResultClicked({ searchContext, userId: userId.id, index, entityType: constants2.USER });
    const obj4 = { userId: userId.id, channelId: null, sourceAnalyticsLocations: null };
    let tmp4 = first;
    const obj3 = { searchContext, userId: userId.id, index, entityType: constants2.USER };
    if (first === EVERYONE_CHANNEL_ID) {
      tmp4 = stateFromStores2;
    }
    obj4.channelId = tmp4;
    obj4.sourceAnalyticsLocations = analyticsLocations;
    showUserProfileActionSheetDefault(obj4);
  }, items6);
  const items7 = [searchContext];
  const items8 = [callback];
  const callback1 = stateFromStores.useCallback((arg0) => {
    ({ user, index } = arg0);
    const result = search_tracking_TrackingDefault.trackSearchResultClicked({ searchContext, userId: user.id, index, entityType: constants2.USER });
    const obj2 = { searchContext, userId: user.id, index, entityType: constants2.USER };
    const result1 = KeyboardManagerUtils.dismissGlobalKeyboard();
  }, items7);
  const callback2 = stateFromStores.useCallback((user) => {
    callback(user.user, user.index);
  }, items8);
  const tmp4Result10 = searchContext(563);
  const items9 = [SearchQueryStore];
  const items10 = [searchContext];
  stateFromStores5 = searchContext(563).useStateFromStores(items9, () => SearchQueryStore.isInitialSearchQuery(searchContext), items10);
  const tmp4Result11 = searchContext(563);
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
  const tmp4Result12 = searchContext(563);
  const contentContainerStyles = searchContext(16837).useContentContainerStyles();
  const tmp4Result13 = searchContext(16837);
  const messageTabCountsErrorText = searchContext(16835).useMessageTabCountsErrorText({ searchContext });
  if (null != messageTabCountsErrorText) {
    const obj5 = { text: messageTabCountsErrorText };
    let tmp25 = jsx(tmp2(16785), { text: messageTabCountsErrorText });
  } else {
    if (stateFromStores5) {
      if (null != stateFromStores4) {
        const obj6 = { onUserPress: callback1, onUserLongPress: callback2, channelId: stateFromStores4, guildId, disableStickySections: true, listStyleOverride: tmp.userList, isNameplatedList: true, canShowDisplayNameStylesFont: true };
        tmp25 = jsx(tmp2(11722), { onUserPress: callback1, onUserLongPress: callback2, channelId: stateFromStores4, guildId, disableStickySections: true, listStyleOverride: tmp.userList, isNameplatedList: true, canShowDisplayNameStylesFont: true });
      }
    }
    const obj7 = { contentContainerStyle: contentContainerStyles.membersContentContainer, data: memo };
    tmp25 = jsx(tmp2(16797), { contentContainerStyle: contentContainerStyles.membersContentContainer, data: memo });
  }
  return tmp25;
}
function ThreadMembersScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const channelId = searchContext.channelId;
  const guildId = searchContext.guildId;
  const items = [ChannelStore];
  const stateFromStores = searchContext(563).useStateFromStores(items, () => {
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
  const obj = searchContext(563);
  const tmp = searchContext;
  const items1 = [SearchQueryStore];
  const items2 = [searchContext];
  if (!stateFromStores) {
    if (obj2.useStateFromStores(items1, () => SearchQueryStore.isInitialSearchQuery(searchContext) && !SearchQueryStore.isTagsEmpty(searchContext), items2)) {
      const obj3 = { channelId, guildId, onUserPress: tmp(1875).dismissGlobalKeyboard, disableStickySections: true };
      let tmp7 = jsx(channelId(16838), { channelId, guildId, onUserPress: tmp(1875).dismissGlobalKeyboard, disableStickySections: true });
      const tmp6 = channelId(16838);
    }
    return tmp7;
  }
  tmp7 = <SearchableMembersScreen searchContext={searchContext} guildId={guildId} />;
  obj2 = searchContext(563);
}
const View = fn(17).View;
const EVERYONE_CHANNEL_ID = fn(7386).EVERYONE_CHANNEL_ID;
const SearchConstants = fn(7985);
({ MESSAGE_PLACEHOLDER_ITEM_SIZE: closure_14, SearchListItemTypes: closure_15 } = SearchConstants);
let closure_16 = fn(7984).SearchResultContentEntityTypes;
const Constants = fn(1074);
({ MAX_GROUP_DM_PARTICIPANTS: closure_17, RelationshipTypes: closure_18, SearchTypes: closure_19 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4639);
let obj = { container: { flex: 1, flexGrow: 1 }, userList: { backgroundColor: "transparent" }, promoBanner: { paddingTop: nativeDefault.space.PX_24, paddingBottom: 0, paddingHorizontal: 0 } };
let closure_21 = createStyles.createStyles(obj);
let obj3 = { paddingTop: nativeDefault.space.PX_24, paddingBottom: 0, paddingHorizontal: 0 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/MembersScreen.tsx");

export default noop.memo(function MembersScreen(searchContext) {
  searchContext = searchContext.searchContext;
  let stateFromStores;
  let tmp = closure_21();
  const analyticsLocations = stateFromStores(7269)(stateFromStores(7289).SEARCH_MEMBERS).analyticsLocations;
  let channelId;
  if (searchContext.type === constants3.CHANNEL) {
    channelId = searchContext.channelId;
  }
  const tmp4 = stateFromStores(7269);
  const items = [ChannelStore];
  const items1 = [channelId];
  stateFromStores = channelId(563).useStateFromStores(items, () => {
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
  const obj = channelId(563);
  const items2 = [ChannelStore];
  const items3 = [channelId];
  const stateFromStores1 = channelId(563).useStateFromStores(items2, () => {
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
    const obj3 = { value: analyticsLocations, children: null };
    const obj4 = { style: tmp.container, children: null };
    const obj6 = { channelId: searchContext.channelId, disableStickySections: true, listStyleOverride: tmp.userList, onUserPress: tmp7(1875).dismissGlobalKeyboard, listHeaderContent: null };
    let tmp21Result = null;
    if (stateFromStores) {
      const obj7 = { location: "GroupDMDetailsMembers", memberCount: stateFromStores1, recipientLimit: tmp11, wrapperStyle: tmp.promoBanner };
      tmp21Result = jsx(tmp2(16840), { location: "GroupDMDetailsMembers", memberCount: stateFromStores1, recipientLimit: tmp11, wrapperStyle: tmp.promoBanner });
    }
    obj6.listHeaderContent = tmp21Result;
    obj4.children = jsx(tmp2(12320), { channelId: searchContext.channelId, disableStickySections: true, listStyleOverride: tmp.userList, onUserPress: tmp7(1875).dismissGlobalKeyboard, listHeaderContent: null });
    obj3.children = <View style={tmp.container}>{null}</View>;
    return jsx(tmp7(7269).AnalyticsLocationProvider, { value: analyticsLocations, children: null });
  } else if (constants3.THREAD === type) {
    const obj8 = { searchContext, channelId: null, guildId: null };
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
    const obj9 = { value: analyticsLocations, children: null };
    const obj16 = { searchContext, guildId: searchContext.guildId };
    obj9.children = <SearchableMembersScreen searchContext={searchContext} guildId={searchContext.guildId} />;
    return jsx(tmp7(7269).AnalyticsLocationProvider, { value: analyticsLocations, children: null });
  }
  const obj2 = channelId(563);
});