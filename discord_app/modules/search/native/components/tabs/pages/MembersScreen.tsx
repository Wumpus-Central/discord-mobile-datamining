// discord_app/modules/search/native/components/tabs/pages/MembersScreen.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../../intl/index.native.tsx";
import KeyboardManagerUtils from "../../../../../../utils/native/KeyboardManagerUtils.tsx";
import PermissionUtilsAll from "../../../../../../utils/PermissionUtils.tsx";
import AccessibilityAnnouncer2 from "../../../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import showUserProfileActionSheetDefault from "../../../../../user_profile/native/showUserProfileActionSheet.tsx";
import getGroupDMRecipientLimitDefault from "../../../../../group_dm/getGroupDMRecipientLimit.tsx";
import TrackingDefault from "../../../tracking/Tracking.tsx";
import SearchList from "../../list/SearchList.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../../../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../../../../stores/GuildStore.tsx";
import SelectedChannelStore from "../../../../../../stores/SelectedChannelStore.tsx";
import UserStore from "../../../../../../stores/UserStore.tsx";
import SearchMemberTabStore from "../../../stores/SearchMemberTabStore.tsx";
import SearchQueryStore from "../../../stores/SearchQueryStore.tsx";

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
  let contentContainerStyles;
  let bound;
  const analyticsLocations = guildId(7918)().analyticsLocations;
  const tmp = closure_21();
  dependencyMap = searchContext(14747).getSearchContextId(searchContext);
  let obj = searchContext(14747);
  items = [contentContainerStyles];
  const stateFromStores = searchContext(563).useStateFromStores(items, () =>
    SearchMemberTabStore.getResults(closure_3),
  );
  closure_129_0 = searchContext;
  let obj2 = searchContext(563);
  const tmp5 = contentContainerStyles;
  const items1 = [bound];
  const items2 = [searchContext];
  const stateFromStores1 = searchContext(563).useStateFromStores(
    items1,
    () => SearchQueryStore.getChannelIds(searchContext),
    items2,
  );
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
  const tmp7 = bound;
  const items3 = [stateFromStores5];
  stateFromStores2 = searchContext(563).useStateFromStores(items3, () => stateFromStores5.getChannelId());
  const tmp4Result = searchContext(563);
  fullscreenPlaceholderCount = searchContext(19472).useFullscreenPlaceholderCount({ placeholderHeight, numColumns: 1 });
  let obj4 = { placeholderHeight, numColumns: 1 };
  const tmp4Result9 = searchContext(19472);
  const items4 = [callback];
  stateFromStores3 = searchContext(563).useStateFromStores(items4, () => {
    guild = GuildStore.getGuild(guildId);
    let guildVisualOwnerId;
    if (null != guild) {
      guildVisualOwnerId = PermissionUtilsAll.getGuildVisualOwnerId(guild);
    }
    return guildVisualOwnerId;
  });
  const tmp4Result10 = searchContext(563);
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
    const result1 = TrackingDefault.trackSearchResultClicked({
      searchContext,
      userId: userId.id,
      index,
      entityType: constants2.USER,
    });
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
    const result = TrackingDefault.trackSearchResultClicked({
      searchContext,
      userId: user.id,
      index,
      entityType: constants2.USER,
    });
    const obj2 = { searchContext, userId: user.id, index, entityType: constants2.USER };
    const result1 = KeyboardManagerUtils.dismissGlobalKeyboard();
  }, items7);
  const callback2 = stateFromStores.useCallback((user) => {
    callback(user.user, user.index);
  }, items8);
  const obj9 = stateFromStores;
  const tmp4Result11 = searchContext(563);
  const items9 = [tmp7];
  const items10 = [searchContext];
  stateFromStores5 = searchContext(563).useStateFromStores(
    items9,
    () => SearchQueryStore.isInitialSearchQuery(searchContext),
    items10,
  );
  const tmp4Result12 = searchContext(563);
  const items11 = [tmp5];
  stateFromStores6 = searchContext(563).useStateFromStores(items11, () =>
    SearchMemberTabStore.getIsFetching(closure_3),
  );
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
  const items13 = [
    stateFromStores,
    stateFromStores6,
    stateFromStores5,
    guildId,
    stateFromStores3,
    callback,
    fullscreenPlaceholderCount,
  ];
  const memo = stateFromStores.useMemo(() => {
    items = [];
    const item = stateFromStores.forEach((record, index) => {
      closure_0 = index;
      const member = GuildMemberStore.getMember(guildId, record.record.id);
      const element = { type: constants.GUILD_CHANNEL_MEMBER, props: null };
      const obj = {
        type: constants2.NONE,
        user: record.record,
        nickname: null,
        usernameColor: null,
        roleColors: null,
        isNameplatedRow: true,
        premiumSince: null,
        isOwner: null,
        guildId: null,
        onLongPress: null,
        onPress: null,
        start: null,
        end: null,
        canShowDisplayNameStylesFont: true,
      };
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
  const tmp4Result13 = searchContext(563);
  contentContainerStyles = searchContext(19533).useContentContainerStyles();
  const tmp4Result14 = searchContext(19533);
  const channelDockHeight = searchContext(12008).useChannelDockHeight();
  bound = undefined;
  if (channelDockHeight > 0) {
    const _Math = Math;
    bound = Math.max(tmp2(1630)().bottom, channelDockHeight);
  }
  const items14 = [contentContainerStyles.membersContentContainer, bound];
  const memo1 = obj9.useMemo(() => {
    if (null != bound) {
      const obj = {};
      const merged = Object.assign(contentContainerStyles.membersContentContainer);
      obj.paddingBottom = SearchList.SEARCH_LIST_BOTTOM_PADDING + tmp;
      let membersContentContainer = obj;
    } else {
      membersContentContainer = contentContainerStyles.membersContentContainer;
    }
    return membersContentContainer;
  }, items14);
  const tmp4Result15 = searchContext(12008);
  const messageTabCountsErrorText = searchContext(19531).useMessageTabCountsErrorText({ searchContext });
  if (null != messageTabCountsErrorText) {
    const obj5 = { text: messageTabCountsErrorText };
    let tmp29 = jsx(tmp2(19463), { text: messageTabCountsErrorText });
  } else {
    if (stateFromStores5) {
      if (null != stateFromStores4) {
        const obj6 = {
          onUserPress: callback1,
          onUserLongPress: callback2,
          channelId: stateFromStores4,
          guildId,
          disableStickySections: true,
          listStyleOverride: tmp.userList,
          isNameplatedList: true,
          canShowDisplayNameStylesFont: true,
          disableBottomSafeZone: null != bound,
          insetEnd: bound,
        };
        tmp29 = jsx(tmp2(12525), {
          onUserPress: callback1,
          onUserLongPress: callback2,
          channelId: stateFromStores4,
          guildId,
          disableStickySections: true,
          listStyleOverride: tmp.userList,
          isNameplatedList: true,
          canShowDisplayNameStylesFont: true,
          disableBottomSafeZone: null != bound,
          insetEnd: bound,
        });
      }
    }
    const obj7 = { contentContainerStyle: memo1, data: memo };
    tmp29 = jsx(tmp2(19476), { contentContainerStyle: memo1, data: memo });
  }
  return tmp29;
}
function ThreadMembersScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const channelId = searchContext.channelId;
  const guildId = searchContext.guildId;
  const channelDockHeight = searchContext(12008).useChannelDockHeight();
  if (channelDockHeight > 0) {
    const _Math = Math;
    const bound = Math.max(channelId(1630)().bottom, channelDockHeight);
  }
  const obj = searchContext(12008);
  const tmp = channelId;
  items = [ChannelStore];
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
  const tmp3Result = searchContext(563);
  const items1 = [SearchQueryStore];
  const items2 = [searchContext];
  if (!stateFromStores) {
    if (
      tmp3Result2.useStateFromStores(
        items1,
        () => SearchQueryStore.isInitialSearchQuery(searchContext) && !SearchQueryStore.isTagsEmpty(searchContext),
        items2,
      )
    ) {
      const obj2 = {
        channelId,
        guildId,
        onUserPress: tmp3(2020).dismissGlobalKeyboard,
        disableStickySections: true,
        disableBottomSafeZone: null != bound,
        insetEnd: bound,
      };
      let tmp11 = jsx(tmp(19534), {
        channelId,
        guildId,
        onUserPress: tmp3(2020).dismissGlobalKeyboard,
        disableStickySections: true,
        disableBottomSafeZone: null != bound,
        insetEnd: bound,
      });
      const tmpResult = tmp(19534);
    }
    return tmp11;
  }
  tmp11 = <SearchableMembersScreen searchContext={searchContext} guildId={guildId} />;
  tmp3Result2 = searchContext(563);
}
const View = fn(17).View;
const EVERYONE_CHANNEL_ID = fn(7315).EVERYONE_CHANNEL_ID;
const SearchConstants = fn(9066);
({ MESSAGE_PLACEHOLDER_ITEM_SIZE: closure_14, SearchListItemTypes: closure_15 } = SearchConstants);
let closure_16 = fn(9065).SearchResultContentEntityTypes;
const Constants = fn(1072);
({ MAX_GROUP_DM_PARTICIPANTS: closure_17, RelationshipTypes: closure_18, SearchTypes: closure_19 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(5306);
let obj = {
  container: { flex: 1, flexGrow: 1 },
  userList: { backgroundColor: "transparent" },
  promoBanner: { paddingTop: nativeDefault.space.PX_24, paddingBottom: 0, paddingHorizontal: 0 },
};
let closure_21 = createStyles.createStyles(obj);
let obj3 = { paddingTop: nativeDefault.space.PX_24, paddingBottom: 0, paddingHorizontal: 0 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/MembersScreen.tsx");

export default noop.memo(function MembersScreen(searchContext) {
  searchContext = searchContext.searchContext;
  let channelId;
  let stateFromStores;
  let tmp = closure_21();
  const analyticsLocations = stateFromStores(7918)(stateFromStores(7937).SEARCH_MEMBERS).analyticsLocations;
  const tmp4 = stateFromStores(7918);
  const channelDockHeight = channelId(12008).useChannelDockHeight();
  if (channelDockHeight > 0) {
    const _Math = Math;
    const bound = Math.max(stateFromStores(1630)().bottom, channelDockHeight);
  }
  channelId = undefined;
  if (searchContext.type === constants3.CHANNEL) {
    channelId = searchContext.channelId;
  }
  const obj = channelId(12008);
  items = [ChannelStore];
  const items1 = [channelId];
  stateFromStores = channelId(563).useStateFromStores(
    items,
    () => {
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
    },
    items1,
  );
  const tmp5Result = channelId(563);
  const items2 = [ChannelStore];
  const items3 = [channelId];
  const stateFromStores1 = channelId(563).useStateFromStores(
    items2,
    () => {
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
    },
    items3,
  );
  channelId(563);
  [][0] = stateFromStores;
  const type = searchContext.type;
  if (constants3.CHANNEL === type) {
    const obj2 = { value: analyticsLocations, children: null };
    const obj3 = { style: tmp.container, children: null };
    const obj4 = {
      channelId: searchContext.channelId,
      disableStickySections: true,
      listStyleOverride: tmp.userList,
      onUserPress: tmp5(2020).dismissGlobalKeyboard,
      disableBottomSafeZone: null,
      insetEnd: null,
      listHeaderContent: null,
    };
    let tmp24Result = null;
    obj4.disableBottomSafeZone = null != bound;
    obj4.insetEnd = bound;
    if (stateFromStores) {
      const obj5 = {
        location: "GroupDMDetailsMembers",
        memberCount: stateFromStores1,
        recipientLimit: tmp14,
        wrapperStyle: tmp.promoBanner,
      };
      tmp24Result = jsx(tmp2(19536), {
        location: "GroupDMDetailsMembers",
        memberCount: stateFromStores1,
        recipientLimit: tmp14,
        wrapperStyle: tmp.promoBanner,
      });
    }
    obj4.listHeaderContent = tmp24Result;
    obj3.children = jsx(tmp2(13522), {
      channelId: searchContext.channelId,
      disableStickySections: true,
      listStyleOverride: tmp.userList,
      onUserPress: tmp5(2020).dismissGlobalKeyboard,
      disableBottomSafeZone: null,
      insetEnd: null,
      listHeaderContent: null,
    });
    obj2.children = <View style={tmp.container}>{null}</View>;
    return jsx(tmp5(7918).AnalyticsLocationProvider, { value: analyticsLocations, children: null });
  } else if (constants3.THREAD === type) {
    const obj7 = { searchContext, channelId: null, guildId: null };
    ({ channelId: obj6.channelId, guildId: obj6.guildId } = searchContext);
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
    const obj8 = { value: analyticsLocations, children: null };
    const obj9 = { searchContext, guildId: searchContext.guildId };
    obj8.children = <SearchableMembersScreen searchContext={searchContext} guildId={searchContext.guildId} />;
    return jsx(tmp5(7918).AnalyticsLocationProvider, { value: analyticsLocations, children: null });
  }
  const tmp5Result3 = channelId(563);
});
