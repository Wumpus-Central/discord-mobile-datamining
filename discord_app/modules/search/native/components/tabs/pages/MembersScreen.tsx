// discord_app/modules/search/native/components/tabs/pages/MembersScreen.tsx
import ThemesDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import importAllResult from "../../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { EVERYONE_CHANNEL_ID } from "../../../../../../stores/ChannelMemberStore.tsx";
import closure_7 from "../../../../../../stores/ChannelStore.tsx";
import closure_8 from "../../../../../../stores/GuildMemberStore.tsx";
import closure_9 from "../../../../../../stores/GuildStore.tsx";
import closure_10 from "../../../../../../stores/SelectedChannelStore.tsx";
import closure_11 from "../../../../../../stores/UserStore.tsx";
import closure_12 from "../../../stores/SearchMemberTabStore.tsx";
import closure_13 from "../../../stores/SearchQueryStore.tsx";
import MessageEmbedTypes from "../../../../SearchConstants.tsx";
import { SearchResultContentEntityTypes as closure_16 } from "../../../tracking/TrackingConstants.tsx";
import ME from "../../../../../../Constants.tsx";
import { jsx } from "../../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
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
  analyticsLocations = guildId(7162)().analyticsLocations;
  let obj = searchContext(12340);
  dependencyMap = obj.getSearchContextId(searchContext);
  obj1 = searchContext(563);
  let items = [closure_12];
  stateFromStores = obj1.useStateFromStores(items, () => closure_1_12.getResults(closure_3));
  let obj2 = searchContext(563);
  const items1 = [closure_13];
  const items2 = [searchContext];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => closure_1_13.getChannelIds(searchContext), items2);
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
  obj = { placeholderHeight: closure_14, numColumns: 1 };
  fullscreenPlaceholderCount = tmp4Result.useFullscreenPlaceholderCount(obj);
  const tmp = callback();
  let tmp5 = closure_12;
  let tmp7 = closure_13;
  const items4 = [callback];
  stateFromStores3 = searchContext(563).useStateFromStores(items4, () => {
    const guild = callback.getGuild(guildId);
    let guildVisualOwnerId;
    if (null != guild) {
      guildVisualOwnerId = analyticsLocations(4204).getGuildVisualOwnerId(guild);
      const obj = analyticsLocations(4204);
    }
    return guildVisualOwnerId;
  });
  const tmp4Result1 = searchContext(563);
  const items5 = [fullscreenPlaceholderCount];
  const stateFromStores4 = searchContext(563).useStateFromStores(items5, () => {
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
    let obj = searchContext(1874);
    const result = obj.dismissGlobalKeyboard();
    obj = { searchContext, userId: userId.id, index, entityType: closure_1_16.USER };
    const result1 = guildId(12358).trackSearchResultClicked(obj);
    obj = { userId: userId.id, channelId: null, sourceAnalyticsLocations: null };
    let tmp4 = first;
    const obj2 = guildId(12358);
    if (first === stateFromStores2) {
      tmp4 = stateFromStores2;
    }
    obj[1] = tmp4;
    obj[2] = analyticsLocations;
    guildId(8179)(obj);
  }, items6);
  const items7 = [searchContext];
  const items8 = [callback];
  const callback1 = stateFromStores.useCallback((arg0) => {
    ({ user, index } = arg0);
    let obj = guildId(12358);
    obj = { searchContext, userId: user.id, index, entityType: closure_1_16.USER };
    const result = obj.trackSearchResultClicked(obj);
    const result1 = searchContext(1874).dismissGlobalKeyboard();
  }, items7);
  const callback2 = stateFromStores.useCallback((user) => {
    callback(user.user, user.index);
  }, items8);
  const tmp4Result2 = searchContext(563);
  const items9 = [tmp7];
  const items10 = [searchContext];
  stateFromStores5 = searchContext(563).useStateFromStores(
    items9,
    () => closure_1_13.isInitialSearchQuery(searchContext),
    items10,
  );
  const tmp4Result3 = searchContext(563);
  const items11 = [tmp5];
  stateFromStores6 = searchContext(563).useStateFromStores(items11, () => closure_1_12.getIsFetching(closure_3));
  const items12 = [stateFromStores, stateFromStores5, stateFromStores6];
  const effect = stateFromStores.useEffect(() => {
    if (!stateFromStores5) {
      if (!stateFromStores6) {
        if (stateFromStores.length > 0) {
          const intl2 = searchContext(1114).intl;
          const obj = { count: null };
          obj[0] = length;
          let formatToPlainStringResult = intl2.formatToPlainString(searchContext(1114).t.ZGVL3g, obj);
        } else {
          const intl = searchContext(1114).intl;
          formatToPlainStringResult = intl.string(searchContext(1114).t.tuL9TW);
        }
        const AccessibilityAnnouncer = searchContext(4272).AccessibilityAnnouncer;
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
    let items = [];
    const item = stateFromStores.forEach((record) => {
      items = arg1;
      const member = stateFromStores3.getMember(closure_1_1, record.record.id);
      let obj = { type: closure_2_15.GUILD_CHANNEL_MEMBER, props: null };
      obj = {
        type: closure_2_18.NONE,
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
          let tmp5 = closure_1_15;
          obj[0] = closure_1_15.GUILD_CHANNEL_MEMBER_PLACEHOLDER;
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
  const tmp4Result4 = searchContext(563);
  const contentContainerStyles = searchContext(16685).useContentContainerStyles();
  const tmp4Result5 = searchContext(16685);
  const messageTabCountsErrorText = searchContext(16683).useMessageTabCountsErrorText({ searchContext });
  if (null != messageTabCountsErrorText) {
    obj = { text: null };
    obj[0] = messageTabCountsErrorText;
    let tmp25 = jsx(tmp2(16638), { text: null });
  } else {
    if (stateFromStores5) {
      if (null != stateFromStores4) {
        obj1 = {
          onUserPress: null,
          onUserLongPress: null,
          channelId: null,
          guildId: null,
          disableStickySections: true,
          listStyleOverride: null,
          isNameplatedList: true,
          canShowDisplayNameStylesFont: true,
        };
        obj1[0] = callback1;
        obj1[1] = callback2;
        obj1[2] = stateFromStores4;
        obj1[3] = guildId;
        obj1[5] = tmp.userList;
        tmp25 = jsx(tmp2(11588), {
          onUserPress: null,
          onUserLongPress: null,
          channelId: null,
          guildId: null,
          disableStickySections: true,
          listStyleOverride: null,
          isNameplatedList: true,
          canShowDisplayNameStylesFont: true,
        });
      }
    }
    obj2 = { contentContainerStyle: null, data: null };
    obj2[0] = contentContainerStyles.membersContentContainer;
    obj2[1] = memo;
    tmp25 = jsx(tmp2(16650), { contentContainerStyle: null, data: null });
  }
  return tmp25;
}
function ThreadMembersScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const channelId = searchContext.channelId;
  const guildId = searchContext.guildId;
  let obj = searchContext(563);
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
  const items1 = [closure_13];
  const items2 = [searchContext];
  if (!stateFromStores) {
    if (
      obj2.useStateFromStores(
        items1,
        () => closure_1_13.isInitialSearchQuery(searchContext) && !closure_1_13.isTagsEmpty(searchContext),
        items2,
      )
    ) {
      obj = { channelId: null, guildId: null, onUserPress: null, disableStickySections: true };
      obj[0] = channelId;
      obj[1] = guildId;
      obj[2] = searchContext(1874).dismissGlobalKeyboard;
      let tmp7 = jsx(channelId(16686), {
        channelId: null,
        guildId: null,
        onUserPress: null,
        disableStickySections: true,
      });
      const tmp6 = channelId(16686);
    }
    return tmp7;
  }
  tmp7 = <SearchableMembersScreen searchContext={searchContext} guildId={guildId} />;
}
let c4 = importAllResult;
({ MESSAGE_PLACEHOLDER_ITEM_SIZE: closure_14, SearchListItemTypes: closure_15 } = MessageEmbedTypes);
({ MAX_GROUP_DM_PARTICIPANTS: closure_17, RelationshipTypes: closure_18, SearchTypes: closure_19 } = ME);
let obj = { container: { flex: 1, flexGrow: 1 }, userList: { backgroundColor: "transparent" }, promoBanner: null };
obj = { paddingTop: ThemesDefault.space.PX_24, paddingBottom: 0, paddingHorizontal: 0 };
obj[2] = obj;
let closure_21 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function MembersScreen(searchContext) {
  searchContext = searchContext.searchContext;
  let channelId;
  let stateFromStores;
  let tmp = callback();
  const analyticsLocations = stateFromStores(7162)(stateFromStores(7182).SEARCH_MEMBERS).analyticsLocations;
  channelId = undefined;
  if (searchContext.type === constants.CHANNEL) {
    channelId = searchContext.channelId;
  }
  let obj = channelId(563);
  const items = [closure_7];
  const items1 = [channelId];
  stateFromStores = obj.useStateFromStores(
    items,
    () => {
      let tmp2 = null != channelId;
      if (tmp2) {
        const channel = closure_1_7.getChannel(tmp);
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
  obj1 = channelId(563);
  const items2 = [closure_7];
  const items3 = [channelId];
  const stateFromStores1 = obj1.useStateFromStores(
    items2,
    () => {
      let channel = null;
      if (null != channelId) {
        channel = closure_1_7.getChannel(tmp);
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
  if (constants.CHANNEL === type) {
    obj = { value: null, children: null };
    obj[0] = analyticsLocations;
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj1 = {
      channelId: null,
      disableStickySections: true,
      listStyleOverride: null,
      onUserPress: null,
      listHeaderContent: null,
    };
    obj1[0] = searchContext.channelId;
    obj1[2] = tmp.userList;
    obj1[3] = tmp7(1874).dismissGlobalKeyboard;
    let tmp21Result = null;
    if (stateFromStores) {
      const obj2 = { location: "GroupDMDetailsMembers", memberCount: null, recipientLimit: null, wrapperStyle: null };
      obj2[1] = stateFromStores1;
      obj2[2] = tmp11;
      obj2[3] = tmp.promoBanner;
      tmp21Result = tmp21(tmp2(16688), obj2);
    }
    obj1[4] = tmp21Result;
    obj[1] = jsx(tmp2(12186), {
      channelId: null,
      disableStickySections: true,
      listStyleOverride: null,
      onUserPress: null,
      listHeaderContent: null,
    });
    obj[1] = <View style={null}>{null}</View>;
    return jsx(tmp7(7162).AnalyticsLocationProvider, { style: null, children: null });
  } else if (tmp5.THREAD === type) {
    const obj3 = { searchContext: null, channelId: null, guildId: null };
    obj3[0] = searchContext;
    ({ channelId: obj5[1], guildId: obj5[2] } = searchContext);
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
    const obj4 = { value: null, children: null };
    obj4[0] = analyticsLocations;
    const obj5 = { searchContext: null, guildId: null };
    obj5[0] = searchContext;
    obj5[1] = searchContext.guildId;
    obj4[1] = <SearchableMembersScreen searchContext={null} guildId={null} />;
    return jsx(tmp7(7162).AnalyticsLocationProvider, { value: null, children: null });
  }
  const tmp4 = stateFromStores(7162);
});
let result = require("set").fileFinishedImporting("modules/search/native/components/tabs/pages/MembersScreen.tsx");

export default memoResult;
