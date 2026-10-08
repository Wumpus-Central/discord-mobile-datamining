// discord_app/modules/search/native/components/tabs/pages/MembersScreen.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../../intl/index.native.tsx";
import KeyboardManagerUtils from "../../../../../../utils/native/KeyboardManagerUtils.tsx";
import PermissionUtilsAll from "../../../../../../utils/PermissionUtils.tsx";
import AccessibilityAnnouncer2 from "../../../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import showUserProfileActionSheetDefault from "../../../../../user_profile/native/showUserProfileActionSheet.tsx";
import getGroupDMRecipientLimitDefault from "../../../../../group_dm/getGroupDMRecipientLimit.tsx";
import tracking_TrackingDefault from "../../../tracking/Tracking.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../../../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../../../../stores/GuildStore.tsx";
import SelectedChannelStore from "../../../../../../stores/SelectedChannelStore.tsx";
import UserStore from "../../../../../../stores/UserStore.tsx";
import SearchMemberTabStore from "../../../stores/SearchMemberTabStore.tsx";
import SearchQueryStore from "../../../stores/SearchQueryStore.tsx";

require = fn;
const View = fn(17).View;
const EVERYONE_CHANNEL_ID = fn(6967).EVERYONE_CHANNEL_ID;
const SearchConstants = fn(9247);
({ MESSAGE_PLACEHOLDER_ITEM_SIZE: closure_14, SearchListItemTypes: closure_15 } = SearchConstants);
const constants2 = fn(9246).SearchResultContentEntityTypes;
const Constants = fn(1085);
({ MAX_GROUP_DM_PARTICIPANTS: closure_17, RelationshipTypes: closure_18, SearchTypes: closure_19 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj = {
  container: { flex: 1, flexGrow: 1 },
  userList: { backgroundColor: "transparent" },
  promoBanner: { paddingTop: nativeDefault.space.PX_24, paddingBottom: 0, paddingHorizontal: 0 },
};
let closure_21 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useMemberScreenChannelId(arg0) {
      _require = arg0;
      const cResult = require("c").c(6);
      let fromResult = globalThis;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SearchQueryStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function o() {
          return SearchQueryStore.getChannelIds(closure_0);
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp8 = items1;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const obj = require("c");
      const stateFromStores = require("useStateFromStores").useStateFromStores(first, tmp7, tmp8);
      if (0 === stateFromStores.size) {
        let tmp10 = EVERYONE_CHANNEL_ID;
      } else {
        tmp10 = null;
        if (1 === stateFromStores.size) {
          if (cResult[4] !== stateFromStores) {
            const _Array = fromResult.Array;
            fromResult = _Array.from(stateFromStores);
            cResult[4] = stateFromStores;
            cResult[5] = fromResult;
            let tmp11 = fromResult;
          } else {
            tmp11 = cResult[5];
          }
          const first1 = tmp11[0];
        }
      }
      return tmp10;
    }
  : function useMemberScreenChannelId(arg0) {
      _require = arg0;
      const items = [SearchQueryStore];
      const items1 = [arg0];
      const stateFromStores = require("useStateFromStores").useStateFromStores(
        items,
        () => SearchQueryStore.getChannelIds(closure_0),
        items1,
      );
      if (0 === stateFromStores.size) {
        let first = EVERYONE_CHANNEL_ID;
      } else {
        first = null;
        if (1 === stateFromStores.size) {
          const _Array = Array;
          first = Array.from(stateFromStores)[0];
        }
      }
      return first;
    };
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SearchableMembersScreen(searchContext) {
      const cResult = searchContext(576).c(59);
      searchContext = searchContext.searchContext;
      const guildId = searchContext.guildId;
      closure_21();
      const analyticsLocations = guildId(6841)().analyticsLocations;
      if (cResult[0] !== searchContext) {
        const searchContextId = tmp(12060).getSearchContextId(searchContext);
        cResult[0] = searchContext;
        cResult[1] = searchContextId;
        let tmp5 = searchContextId;
        const tmpResult = tmp(12060);
      } else {
        tmp5 = cResult[1];
      }
      dependencyMap = tmp5;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SearchMemberTabStore];
        cResult[2] = items;
        let tmp7 = items;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] !== tmp5) {
        class N {
          constructor() {
            return closure_12.getResults(closure_3);
          }
        }
        cResult[3] = tmp5;
        cResult[4] = N;
      } else {
        class N {
          constructor() {
            return closure_12.getResults(closure_3);
          }
        }
      }
      let obj = searchContext(576);
      const stateFromStores = searchContext(573).useStateFromStores(tmp7, N);
      const tmp11 = closure_22(searchContext);
      closure_5 = tmp11;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class N {
          constructor() {
            return closure_12.getResults(closure_3);
          }
        }
        const items1 = [SelectedChannelStore];
        class T {
          constructor() {
            return closure_10.getChannelId();
          }
        }
        cResult[5] = items1;
        cResult[6] = T;
        let tmp13 = T;
        const tmp12 = items1;
      } else {
        class N {
          constructor() {
            return closure_12.getResults(closure_3);
          }
        }
        tmp13 = cResult[6];
      }
      const tmpResult6 = searchContext(573);
      const stateFromStores1 = searchContext(573).useStateFromStores(tmp12, tmp13);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class N {
          constructor() {
            return closure_12.getResults(closure_3);
          }
        }
        tmp16[0] = closure_14;
        class T {
          constructor() {
            return closure_10.getChannelId();
          }
        }
        cResult[7] = tmp16;
      } else {
        class N {
          constructor() {
            return closure_12.getResults(closure_3);
          }
        }
      }
      const tmpResult7 = searchContext(573);
      const fullscreenPlaceholderCount = searchContext(17116).useFullscreenPlaceholderCount(tmp16);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class N {
          constructor() {
            return closure_12.getResults(closure_3);
          }
        }
        const items2 = [GuildStore];
        class T {
          constructor() {
            return closure_10.getChannelId();
          }
        }
        cResult[8] = items2;
        const tmp19 = items2;
      } else {
        class N {
          constructor() {
            return closure_12.getResults(closure_3);
          }
        }
      }
      if (cResult[9] !== guildId) {
        class H {
          constructor() {
            guild = closure_9.getGuild(guildId);
            guildVisualOwnerId = undefined;
            if (null != guild) {
              tmp3 = closure_2;
              tmp4 = closure_3;
              obj = closure_2(closure_3[22]);
              guildVisualOwnerId = obj.getGuildVisualOwnerId(guild);
            }
            return guildVisualOwnerId;
          }
        }
        cResult[9] = guildId;
        class T {
          constructor() {
            return closure_10.getChannelId();
          }
        }
        cResult[10] = H;
      } else {
        class H {
          constructor() {
            guild = closure_9.getGuild(guildId);
            guildVisualOwnerId = undefined;
            if (null != guild) {
              tmp3 = closure_2;
              tmp4 = closure_3;
              obj = closure_2(closure_3[22]);
              guildVisualOwnerId = obj.getGuildVisualOwnerId(guild);
            }
            return guildVisualOwnerId;
          }
        }
      }
      const tmpResult8 = searchContext(17116);
      const stateFromStores2 = searchContext(573).useStateFromStores(tmp19, H);
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class H {
          constructor() {
            guild = closure_9.getGuild(guildId);
            guildVisualOwnerId = undefined;
            if (null != guild) {
              tmp3 = closure_2;
              tmp4 = closure_3;
              obj = closure_2(closure_3[22]);
              guildVisualOwnerId = obj.getGuildVisualOwnerId(guild);
            }
            return guildVisualOwnerId;
          }
        }
        const items3 = [stateFromStores2];
        class T {
          constructor() {
            return closure_10.getChannelId();
          }
        }
        cResult[11] = items3;
        const tmp22 = items3;
      } else {
        class H {
          constructor() {
            guild = closure_9.getGuild(guildId);
            guildVisualOwnerId = undefined;
            if (null != guild) {
              tmp3 = closure_2;
              tmp4 = closure_3;
              obj = closure_2(closure_3[22]);
              guildVisualOwnerId = obj.getGuildVisualOwnerId(guild);
            }
            return guildVisualOwnerId;
          }
        }
      }
      if (cResult[12] !== tmp11) {
        class B {
          constructor() {
            tmp = closure_5;
            if (closure_5 === EVERYONE_CHANNEL_ID) {
              return tmp;
            } else {
              tmp2 = closure_7;
              channel = closure_7.getChannel(tmp);
              tmp3 = null;
              tmp4 = tmp;
              if (null != channel) {
                parent_id = tmp;
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
          }
        }
        cResult[12] = tmp11;
        class T {
          constructor() {
            return closure_10.getChannelId();
          }
        }
        cResult[13] = B;
      } else {
        class B {
          constructor() {
            tmp = closure_5;
            if (closure_5 === EVERYONE_CHANNEL_ID) {
              return tmp;
            } else {
              tmp2 = closure_7;
              channel = closure_7.getChannel(tmp);
              tmp3 = null;
              tmp4 = tmp;
              if (null != channel) {
                parent_id = tmp;
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
          }
        }
      }
      const tmpResult9 = searchContext(573);
      const stateFromStores3 = searchContext(573).useStateFromStores(tmp22, B);
      if (cResult[14] === analyticsLocations) {
        class B {
          constructor() {
            tmp = closure_5;
            if (closure_5 === EVERYONE_CHANNEL_ID) {
              return tmp;
            } else {
              tmp2 = closure_7;
              channel = closure_7.getChannel(tmp);
              tmp3 = null;
              tmp4 = tmp;
              if (null != channel) {
                parent_id = tmp;
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
          }
        }
      }
      class V {
        constructor(arg0, arg1) {
          obj = closure_0(closure_3[23]);
          result = obj.dismissGlobalKeyboard();
          obj2 = closure_1(closure_3[24]);
          obj1 = { searchContext, userId: searchContext.id, index: arg1, entityType: closure_16.USER };
          result1 = obj2.trackSearchResultClicked(obj1);
          obj5 = { userId: searchContext.id, channelId: null, sourceAnalyticsLocations: null };
          tmp4 = closure_5;
          tmp3 = closure_1(closure_3[25]);
          if (closure_5 === EVERYONE_CHANNEL_ID) {
            tmp4 = closure_6;
          }
          obj5.channelId = tmp4;
          obj5.sourceAnalyticsLocations = analyticsLocations;
          tmp3Result = tmp3(obj5);
          return;
        }
      }
      cResult[14] = analyticsLocations;
      cResult[15] = tmp11;
      cResult[16] = searchContext;
      cResult[17] = stateFromStores1;
      cResult[18] = V;
      const tmpResult10 = searchContext(573);
    }
  : function SearchableMembersScreen(searchContext) {
      searchContext = searchContext.searchContext;
      const guildId = searchContext.guildId;
      let callback;
      let stateFromStores4;
      const analyticsLocations = guildId(6841)().analyticsLocations;
      const tmp = closure_21();
      dependencyMap = searchContext(12060).getSearchContextId(searchContext);
      let obj = searchContext(12060);
      let items = [SearchMemberTabStore];
      const stateFromStores = searchContext(573).useStateFromStores(items, () =>
        SearchMemberTabStore.getResults(closure_3),
      );
      const tmp5 = closure_22(searchContext);
      closure_5 = tmp5;
      let obj2 = searchContext(573);
      const items1 = [stateFromStores4];
      const stateFromStores1 = searchContext(573).useStateFromStores(items1, () => stateFromStores4.getChannelId());
      let obj3 = searchContext(573);
      const fullscreenPlaceholderCount = searchContext(17116).useFullscreenPlaceholderCount({
        placeholderHeight,
        numColumns: 1,
      });
      let obj4 = searchContext(17116);
      const obj5 = { placeholderHeight, numColumns: 1 };
      const items2 = [callback];
      const stateFromStores2 = searchContext(573).useStateFromStores(items2, () => {
        guild = GuildStore.getGuild(guildId);
        let guildVisualOwnerId;
        if (null != guild) {
          guildVisualOwnerId = PermissionUtilsAll.getGuildVisualOwnerId(guild);
        }
        return guildVisualOwnerId;
      });
      const obj6 = searchContext(573);
      const items3 = [fullscreenPlaceholderCount];
      const stateFromStores3 = searchContext(573).useStateFromStores(items3, () => {
        if (closure_5 === EVERYONE_CHANNEL_ID) {
          return closure_5;
        } else {
          const channel = ChannelStore.getChannel(closure_5);
          let tmp4 = closure_5;
          if (null != channel) {
            let parent_id = closure_5;
            if (channel.isAnnouncementThread()) {
              parent_id = closure_5;
              if (null != channel.parent_id) {
                parent_id = channel.parent_id;
              }
            }
            tmp4 = parent_id;
          }
          return tmp4;
        }
      });
      const items4 = [searchContext, tmp5, stateFromStores1, analyticsLocations];
      callback = stateFromStores.useCallback((userId, index) => {
        const result = KeyboardManagerUtils.dismissGlobalKeyboard();
        const result1 = tracking_TrackingDefault.trackSearchResultClicked({
          searchContext,
          userId: userId.id,
          index,
          entityType: constants2.USER,
        });
        const obj4 = { userId: userId.id, channelId: null, sourceAnalyticsLocations: null };
        let tmp4 = closure_5;
        const obj3 = { searchContext, userId: userId.id, index, entityType: constants2.USER };
        if (closure_5 === EVERYONE_CHANNEL_ID) {
          tmp4 = stateFromStores1;
        }
        obj4.channelId = tmp4;
        obj4.sourceAnalyticsLocations = analyticsLocations;
        showUserProfileActionSheetDefault(obj4);
      }, items4);
      const items5 = [searchContext];
      const items6 = [callback];
      const callback1 = stateFromStores.useCallback((arg0) => {
        ({ user, index } = arg0);
        const result = tracking_TrackingDefault.trackSearchResultClicked({
          searchContext,
          userId: user.id,
          index,
          entityType: constants2.USER,
        });
        const obj2 = { searchContext, userId: user.id, index, entityType: constants2.USER };
        const result1 = KeyboardManagerUtils.dismissGlobalKeyboard();
      }, items5);
      const callback2 = stateFromStores.useCallback((user) => {
        callback(user.user, user.index);
      }, items6);
      const obj7 = searchContext(573);
      const items7 = [SearchQueryStore];
      const items8 = [searchContext];
      stateFromStores4 = searchContext(573).useStateFromStores(
        items7,
        () => SearchQueryStore.isInitialSearchQuery(searchContext),
        items8,
      );
      const obj8 = searchContext(573);
      const items9 = [SearchMemberTabStore];
      const stateFromStores5 = searchContext(573).useStateFromStores(items9, () =>
        SearchMemberTabStore.getIsFetching(closure_3),
      );
      const items10 = [stateFromStores, stateFromStores4, stateFromStores5];
      const effect = stateFromStores.useEffect(() => {
        if (!stateFromStores4) {
          if (!stateFromStores5) {
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
      }, items10);
      const items11 = [
        stateFromStores,
        stateFromStores5,
        stateFromStores4,
        guildId,
        stateFromStores2,
        callback,
        fullscreenPlaceholderCount,
      ];
      const memo = stateFromStores.useMemo(() => {
        const items = [];
        const item = stateFromStores.forEach((record, index) => {
          closure_0 = index;
          const member = GuildMemberStore.getMember(guildId, record.record.id);
          const element = { type: constants.GUILD_CHANNEL_MEMBER, props: null };
          const obj = {
            type: constants3.NONE,
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
          obj.isOwner = stateFromStores2 === record.record.id;
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
        if (stateFromStores5) {
          for (let num2 = 0; num2 < fullscreenPlaceholderCount; num2 = num2 + 1) {
            let obj = { type: constants.GUILD_CHANNEL_MEMBER_PLACEHOLDER, key: null };
            let _HermesInternal = HermesInternal;
            obj.key = "guild-channel-member-placeholder-" + num2;
            let arr = items.push(obj);
          }
        }
        return items;
      }, items11);
      const obj9 = searchContext(573);
      const contentContainerStyles = searchContext(17178).useContentContainerStyles();
      const obj10 = searchContext(17178);
      const messageTabCountsErrorText = searchContext(17176).useMessageTabCountsErrorText({ searchContext });
      if (null != messageTabCountsErrorText) {
        const obj12 = { text: messageTabCountsErrorText };
        let tmp20 = jsx(tmp2(17108), { text: messageTabCountsErrorText });
      } else {
        if (stateFromStores4) {
          if (null != stateFromStores3) {
            const obj13 = {
              onUserPress: callback1,
              onUserLongPress: callback2,
              channelId: stateFromStores3,
              guildId,
              disableStickySections: true,
              listStyleOverride: tmp.userList,
              isNameplatedList: true,
              canShowDisplayNameStylesFont: true,
            };
            tmp20 = jsx(tmp2(11338), {
              onUserPress: callback1,
              onUserLongPress: callback2,
              channelId: stateFromStores3,
              guildId,
              disableStickySections: true,
              listStyleOverride: tmp.userList,
              isNameplatedList: true,
              canShowDisplayNameStylesFont: true,
            });
          }
        }
        const obj14 = { contentContainerStyle: contentContainerStyles.membersContentContainer, data: memo };
        tmp20 = jsx(tmp2(17120), { contentContainerStyle: contentContainerStyles.membersContentContainer, data: memo });
      }
      return tmp20;
    };
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ThreadMembersScreen(searchContext) {
      const cResult = searchContext(576).c(13);
      searchContext = searchContext.searchContext;
      const channelId = searchContext.channelId;
      const guildId = searchContext.guildId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function s() {
          const channel = ChannelStore.getChannel(channelId);
          let flag;
          if (channel != null) {
            flag = channel.isAnnouncementThread();
          }
          if (flag == null) {
            flag = false;
          }
          return flag;
        };
        cResult[1] = channelId;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = searchContext(576);
      const stateFromStores = searchContext(573).useStateFromStores(first, tmp6);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [SearchQueryStore];
        cResult[3] = items1;
        let tmp8 = items1;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] !== searchContext) {
        const fn2 = function y() {
          return SearchQueryStore.isInitialSearchQuery(searchContext) && !SearchQueryStore.isTagsEmpty(searchContext);
        };
        const items2 = [searchContext];
        cResult[4] = searchContext;
        cResult[5] = fn2;
        cResult[6] = items2;
        let tmp11 = items2;
        let tmp10 = fn2;
      } else {
        tmp10 = cResult[5];
        tmp11 = cResult[6];
      }
      const tmpResult = searchContext(573);
      const stateFromStores1 = searchContext(573).useStateFromStores(tmp8, tmp10, tmp11);
      if (cResult[7] === channelId) {
        if (cResult[8] === guildId) {
          if (cResult[9] === stateFromStores) {
            if (cResult[10] === stateFromStores1) {
              if (cResult[11] === searchContext) {
                return cResult[12];
              }
            }
          }
        }
      }
      if (!stateFromStores) {
        if (stateFromStores1) {
          const obj2 = {
            channelId,
            guildId,
            onUserPress: tmp(1893).dismissGlobalKeyboard,
            disableStickySections: true,
          };
          let tmp16 = jsx(channelId(17179), {
            channelId,
            guildId,
            onUserPress: tmp(1893).dismissGlobalKeyboard,
            disableStickySections: true,
          });
          const tmp15 = channelId(17179);
        }
        cResult[7] = channelId;
        cResult[8] = guildId;
        cResult[9] = stateFromStores;
        cResult[10] = stateFromStores1;
        cResult[11] = searchContext;
        cResult[12] = tmp16;
      }
      tmp16 = <closure_23 searchContext={searchContext} guildId={guildId} />;
      const tmpResult2 = searchContext(573);
    }
  : function ThreadMembersScreen(searchContext) {
      searchContext = searchContext.searchContext;
      const channelId = searchContext.channelId;
      const guildId = searchContext.guildId;
      const items = [ChannelStore];
      const stateFromStores = searchContext(573).useStateFromStores(items, () => {
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
      const obj = searchContext(573);
      const tmp = searchContext;
      const items1 = [SearchQueryStore];
      const items2 = [searchContext];
      if (!stateFromStores) {
        if (
          obj2.useStateFromStores(
            items1,
            () => SearchQueryStore.isInitialSearchQuery(searchContext) && !SearchQueryStore.isTagsEmpty(searchContext),
            items2,
          )
        ) {
          const obj3 = {
            channelId,
            guildId,
            onUserPress: tmp(1893).dismissGlobalKeyboard,
            disableStickySections: true,
          };
          let tmp7 = jsx(channelId(17179), {
            channelId,
            guildId,
            onUserPress: tmp(1893).dismissGlobalKeyboard,
            disableStickySections: true,
          });
          const tmp6 = channelId(17179);
        }
        return tmp7;
      }
      tmp7 = <closure_23 searchContext={searchContext} guildId={guildId} />;
      obj2 = searchContext(573);
    };
ReactCompilerGating = fn(558);
let obj3 = { paddingTop: nativeDefault.space.PX_24, paddingBottom: 0, paddingHorizontal: 0 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/MembersScreen.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function MembersScreen(searchContext) {
        const cResult = channelId(576).c(34);
        searchContext = searchContext.searchContext;
        const tmp4 = closure_21();
        const obj = channelId(576);
        const tmp5 = stateFromStores;
        const analyticsLocations = stateFromStores(6841)(stateFromStores(6865).SEARCH_MEMBERS).analyticsLocations;
        channelId = undefined;
        if (searchContext.type === constants4.CHANNEL) {
          channelId = searchContext.channelId;
        }
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [ChannelStore];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== channelId) {
          const fn = function i() {
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
          };
          const items1 = [channelId];
          cResult[1] = channelId;
          cResult[2] = fn;
          cResult[3] = items1;
          let tmp12 = items1;
          let tmp11 = fn;
        } else {
          tmp11 = cResult[2];
          tmp12 = cResult[3];
        }
        const tmp6 = stateFromStores(6841);
        stateFromStores = channelId(573).useStateFromStores(first, tmp11, tmp12);
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [ChannelStore];
          cResult[4] = items2;
          let tmp14 = items2;
        } else {
          tmp14 = cResult[4];
        }
        if (cResult[5] !== channelId) {
          class I {
            constructor() {
              channel = null;
              if (null != channelId) {
                tmp3 = closure_7;
                channel = closure_7.getChannel(tmp);
              }
              num = 0;
              if (null != channel) {
                recipients = channel.recipients;
                num2 = undefined;
                if (recipients != null) {
                  num2 = recipients.length;
                }
                if (num2 == null) {
                  num2 = 0;
                }
                num3 = 1;
                num = num2 + 1;
              }
              return num;
            }
          }
          const items3 = [channelId];
          cResult[5] = channelId;
          cResult[6] = I;
          cResult[7] = items3;
          let tmp17 = items3;
        } else {
          class I {
            constructor() {
              channel = null;
              if (null != channelId) {
                tmp3 = closure_7;
                channel = closure_7.getChannel(tmp);
              }
              num = 0;
              if (null != channel) {
                recipients = channel.recipients;
                num2 = undefined;
                if (recipients != null) {
                  num2 = recipients.length;
                }
                if (num2 == null) {
                  num2 = 0;
                }
                num3 = 1;
                num = num2 + 1;
              }
              return num;
            }
          }
          tmp17 = cResult[7];
        }
        const tmpResult = channelId(573);
        const stateFromStores1 = channelId(573).useStateFromStores(tmp14, I, tmp17);
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
            constructor() {
              channel = null;
              if (null != channelId) {
                tmp3 = closure_7;
                channel = closure_7.getChannel(tmp);
              }
              num = 0;
              if (null != channel) {
                recipients = channel.recipients;
                num2 = undefined;
                if (recipients != null) {
                  num2 = recipients.length;
                }
                if (num2 == null) {
                  num2 = 0;
                }
                num3 = 1;
                num = num2 + 1;
              }
              return num;
            }
          }
          const items4 = [UserStore];
          cResult[8] = items4;
          const tmp19 = items4;
        } else {
          class I {
            constructor() {
              channel = null;
              if (null != channelId) {
                tmp3 = closure_7;
                channel = closure_7.getChannel(tmp);
              }
              num = 0;
              if (null != channel) {
                recipients = channel.recipients;
                num2 = undefined;
                if (recipients != null) {
                  num2 = recipients.length;
                }
                if (num2 == null) {
                  num2 = 0;
                }
                num3 = 1;
                num = num2 + 1;
              }
              return num;
            }
          }
        }
        if (cResult[9] !== stateFromStores) {
          class N {
            constructor() {
              if (closure_1) {
                tmp2 = closure_1;
                tmp3 = closure_3;
                tmp = closure_1(closure_3[35])({ useNitroCapExperiment: true });
              } else {
                tmp = MAX_GROUP_DM_PARTICIPANTS;
              }
              return tmp;
            }
          }
          const items5 = [stateFromStores];
          cResult[9] = stateFromStores;
          cResult[10] = N;
          cResult[11] = items5;
          let tmp21 = items5;
        } else {
          class N {
            constructor() {
              if (closure_1) {
                tmp2 = closure_1;
                tmp3 = closure_3;
                tmp = closure_1(closure_3[35])({ useNitroCapExperiment: true });
              } else {
                tmp = MAX_GROUP_DM_PARTICIPANTS;
              }
              return tmp;
            }
          }
          tmp21 = cResult[11];
        }
        const tmpResult3 = channelId(573);
        const stateFromStores2 = channelId(573).useStateFromStores(tmp19, N, tmp21);
        if (constants4.CHANNEL === searchContext.type) {
          class N {
            constructor() {
              if (closure_1) {
                tmp2 = closure_1;
                tmp3 = closure_3;
                tmp = closure_1(closure_3[35])({ useNitroCapExperiment: true });
              } else {
                tmp = MAX_GROUP_DM_PARTICIPANTS;
              }
              return tmp;
            }
          }
          let tmp24 = null;
          if (stateFromStores) {
            class N {
              constructor() {
                if (closure_1) {
                  tmp2 = closure_1;
                  tmp3 = closure_3;
                  tmp = closure_1(closure_3[35])({ useNitroCapExperiment: true });
                } else {
                  tmp = MAX_GROUP_DM_PARTICIPANTS;
                }
                return tmp;
              }
            }
            const obj2 = {
              location: "GroupDMDetailsMembers",
              memberCount: stateFromStores1,
              recipientLimit: stateFromStores2,
              wrapperStyle: tmp4.promoBanner,
            };
            tmp24 = jsx(tmp5(17181), {
              location: "GroupDMDetailsMembers",
              memberCount: stateFromStores1,
              recipientLimit: stateFromStores2,
              wrapperStyle: tmp4.promoBanner,
            });
          }
          cResult[12] = stateFromStores;
          cResult[13] = stateFromStores1;
          cResult[14] = stateFromStores2;
          cResult[15] = tmp4.promoBanner;
          cResult[16] = tmp24;
        } else {
          class N {
            constructor() {
              if (closure_1) {
                tmp2 = closure_1;
                tmp3 = closure_3;
                tmp = closure_1(closure_3[35])({ useNitroCapExperiment: true });
              } else {
                tmp = MAX_GROUP_DM_PARTICIPANTS;
              }
              return tmp;
            }
          }
        }
        const tmpResult4 = channelId(573);
      }
    : function MembersScreen(searchContext) {
        searchContext = searchContext.searchContext;
        let stateFromStores;
        let tmp = closure_21();
        const analyticsLocations = stateFromStores(6841)(stateFromStores(6865).SEARCH_MEMBERS).analyticsLocations;
        let channelId;
        if (searchContext.type === constants4.CHANNEL) {
          channelId = searchContext.channelId;
        }
        const tmp4 = stateFromStores(6841);
        const items = [ChannelStore];
        const items1 = [channelId];
        stateFromStores = channelId(573).useStateFromStores(
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
        const obj = channelId(573);
        const items2 = [ChannelStore];
        const items3 = [channelId];
        const stateFromStores1 = channelId(573).useStateFromStores(
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
        channelId(573);
        [][0] = stateFromStores;
        const type = searchContext.type;
        if (constants4.CHANNEL === type) {
          const obj3 = { value: analyticsLocations, children: null };
          const obj4 = { style: tmp.container, children: null };
          const obj6 = {
            channelId: searchContext.channelId,
            disableStickySections: true,
            listStyleOverride: tmp.userList,
            onUserPress: tmp7(1893).dismissGlobalKeyboard,
            listHeaderContent: null,
          };
          let tmp21Result = null;
          if (stateFromStores) {
            const obj7 = {
              location: "GroupDMDetailsMembers",
              memberCount: stateFromStores1,
              recipientLimit: tmp11,
              wrapperStyle: tmp.promoBanner,
            };
            tmp21Result = jsx(tmp2(17181), {
              location: "GroupDMDetailsMembers",
              memberCount: stateFromStores1,
              recipientLimit: tmp11,
              wrapperStyle: tmp.promoBanner,
            });
          }
          obj6.listHeaderContent = tmp21Result;
          obj4.children = jsx(tmp2(11911), {
            channelId: searchContext.channelId,
            disableStickySections: true,
            listStyleOverride: tmp.userList,
            onUserPress: tmp7(1893).dismissGlobalKeyboard,
            listHeaderContent: null,
          });
          obj3.children = <View style={tmp.container}>{null}</View>;
          return jsx(tmp7(6841).AnalyticsLocationProvider, { value: analyticsLocations, children: null });
        } else if (constants4.THREAD === type) {
          const obj8 = { searchContext, channelId: null, guildId: null };
          ({ channelId: obj5.channelId, guildId: obj5.guildId } = searchContext);
          return <closure_24 searchContext={searchContext} channelId={null} guildId={null} />;
        } else {
          if (constants4.GUILD_CHANNEL !== type) {
            if (constants4.GUILD !== type) {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const error = new Error("[MembersScreen] Unsupported search context type: " + searchContext.type);
              throw error;
            }
          }
          const obj9 = { value: analyticsLocations, children: null };
          const obj16 = { searchContext, guildId: searchContext.guildId };
          obj9.children = <closure_23 searchContext={searchContext} guildId={searchContext.guildId} />;
          return jsx(tmp7(6841).AnalyticsLocationProvider, { value: analyticsLocations, children: null });
        }
        const obj2 = channelId(573);
      },
);
