// discord_app/modules/search/native/components/tabs/pages/MembersScreen.tsx
import react_native from "../../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../../../../intl/index.native.tsx";
import KeyboardManagerUtils from "../../../../../../utils/native/KeyboardManagerUtils.tsx";
import PermissionUtilsAll from "../../../../../../utils/PermissionUtils.tsx";
import AccessibilityAnnouncer2 from "../../../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import ChannelMemberStore from "../../../../../../stores/ChannelMemberStore.tsx";
import TrackingConstants from "../../../tracking/TrackingConstants.tsx";
import showUserProfileActionSheetDefault from "../../../../../user_profile/native/showUserProfileActionSheet.tsx";
import getGroupDMRecipientLimitDefault from "../../../../../group_dm/getGroupDMRecipientLimit.tsx";
import search_tracking_TrackingDefault from "../../../tracking/Tracking.tsx";
import react from "../../../../../../../_runtime/00019_react.js";
import ChannelStore from "../../../../../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../../../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../../../../stores/GuildStore.tsx";
import SelectedChannelStore from "../../../../../../stores/SelectedChannelStore.tsx";
import UserStore from "../../../../../../stores/UserStore.tsx";
import SearchMemberTabStore from "../../../stores/SearchMemberTabStore.tsx";
import SearchQueryStore from "../../../stores/SearchQueryStore.tsx";
import SearchConstants from "../../../../SearchConstants.tsx";
import Constants from "../../../../../../Constants.tsx";
import createStyles from "../../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, obj1, tmp3Result;

let closure_14;
let closure_15;
let closure_17;
let closure_18;
let closure_19;
let obj2;
const View = react_native.View;
const EVERYONE_CHANNEL_ID = ChannelMemberStore.EVERYONE_CHANNEL_ID;
({ MESSAGE_PLACEHOLDER_ITEM_SIZE: closure_14, SearchListItemTypes: closure_15 } = SearchConstants);
const constants2 = TrackingConstants.SearchResultContentEntityTypes;
({ MAX_GROUP_DM_PARTICIPANTS: closure_17, RelationshipTypes: closure_18, SearchTypes: closure_19 } = Constants);
const jsx = Fragment.jsx;
let obj = { container: { flex: 1, flexGrow: 1 }, userList: { backgroundColor: "transparent" }, promoBanner: obj2 };
obj2 = { paddingTop: nativeDefault.space.PX_24, paddingBottom: 0, paddingHorizontal: 0 };
let closure_21 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let first1;
      let tmp6;
      let tmp7;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(6);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SearchQueryStore];
        cResult[0] = items;
        first = items;
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
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = tmp(573);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
      if (0 === stateFromStores.size) {
        first1 = EVERYONE_CHANNEL_ID;
      } else {
        first1 = null;
        if (1 === stateFromStores.size) {
          let tmp10;
          if (cResult[4] !== stateFromStores) {
            const _Array = Array;
            const arr = Array.from(stateFromStores);
            cResult[4] = stateFromStores;
            cResult[5] = arr;
            tmp10 = arr;
          } else {
            tmp10 = cResult[5];
          }
          first1 = tmp10[0];
        }
      }
      return first1;
    }
  : (arg0) => {
      let closure_0;
      let first;
      _require = arg0;
      const items = [SearchQueryStore];
      const items1 = [arg0];
      const obj = require("useStateFromStores");
      const stateFromStores = obj.useStateFromStores(items, () => SearchQueryStore.getChannelIds(closure_0), items1);
      if (0 === stateFromStores.size) {
        first = EVERYONE_CHANNEL_ID;
      } else {
        first = null;
        if (1 === stateFromStores.size) {
          const _Array = Array;
          first = Array.from(stateFromStores)[0];
        }
      }
      return first;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? (searchContext) => {
      let channelId;
      let closure_3;
      let tmp12;
      let tmp13;
      let tmp19;
      let tmp22;
      let tmp5;
      let tmp7;
      let obj = searchContext(576);
      const cResult = obj.c(59);
      searchContext = searchContext.searchContext;
      const guildId = searchContext.guildId;
      let tmp4 = closure_21();
      const analyticsLocations = guildId(6664)().analyticsLocations;
      if (cResult[0] !== searchContext) {
        const tmpResult = searchContext(11987);
        const searchContextId = tmpResult.getSearchContextId(searchContext);
        cResult[0] = searchContext;
        cResult[1] = searchContextId;
        tmp5 = searchContextId;
      } else {
        tmp5 = cResult[1];
      }
      dependencyMap = tmp5;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SearchMemberTabStore];
        cResult[2] = items;
        tmp7 = items;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] !== tmp5) {
        class R {
          constructor() {
            return closure_12.getResults(closure_3);
          }
        }
        cResult[3] = tmp5;
        cResult[4] = R;
      } else {
        class R {
          constructor() {
            return closure_12.getResults(closure_3);
          }
        }
      }
      const tmpResult6 = searchContext(573);
      const stateFromStores = tmpResult6.useStateFromStores(tmp7, R);
      const tmp11 = closure_22(searchContext);
      let closure_5 = tmp11;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor() {
            return closure_12.getResults(closure_3);
          }
        }
        const items1 = [SelectedChannelStore];
        class P {
          constructor() {
            return closure_10.getChannelId();
          }
        }
        cResult[5] = items1;
        cResult[6] = P;
        tmp13 = P;
        tmp12 = items1;
      } else {
        class R {
          constructor() {
            return closure_12.getResults(closure_3);
          }
        }
        tmp13 = cResult[6];
      }
      const tmpResult7 = searchContext(573);
      const stateFromStores1 = tmpResult7.useStateFromStores(tmp12, tmp13);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor() {
            return closure_12.getResults(closure_3);
          }
        }
        tmp16[0] = closure_14;
        class P {
          constructor() {
            return closure_10.getChannelId();
          }
        }
        cResult[7] = tmp16;
      } else {
        class R {
          constructor() {
            return closure_12.getResults(closure_3);
          }
        }
      }
      const tmpResult8 = searchContext(16837);
      const fullscreenPlaceholderCount = tmpResult8.useFullscreenPlaceholderCount(tmp16);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor() {
            return closure_12.getResults(closure_3);
          }
        }
        const items2 = [GuildStore];
        class P {
          constructor() {
            return closure_10.getChannelId();
          }
        }
        cResult[8] = items2;
        tmp19 = items2;
      } else {
        class R {
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
        class P {
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
      const tmpResult9 = searchContext(573);
      const stateFromStores2 = tmpResult9.useStateFromStores(tmp19, H);
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
        class P {
          constructor() {
            return closure_10.getChannelId();
          }
        }
        cResult[11] = items3;
        tmp22 = items3;
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
        class P {
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
      const tmpResult10 = searchContext(573);
      const stateFromStores3 = tmpResult10.useStateFromStores(tmp22, B);
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
    }
  : (searchContext) => {
      let closure_3;
      let tmp20;
      searchContext = searchContext.searchContext;
      const guildId = searchContext.guildId;
      dependencyMap = undefined;
      let callback;
      let stateFromStores4;
      let tmp3 = dependencyMap;
      const tmp = closure_21();
      const analyticsLocations = guildId(6664)().analyticsLocations;
      let obj = searchContext(11987);
      dependencyMap = obj.getSearchContextId(searchContext);
      let obj2 = searchContext(573);
      let items = [SearchMemberTabStore];
      const stateFromStores = obj2.useStateFromStores(items, () => SearchMemberTabStore.getResults(closure_3));
      const tmp5 = closure_22(searchContext);
      let closure_5 = tmp5;
      let obj3 = searchContext(573);
      const items1 = [stateFromStores4];
      const stateFromStores1 = obj3.useStateFromStores(items1, () => stateFromStores4.getChannelId());
      let obj4 = searchContext(16837);
      const obj5 = { placeholderHeight, numColumns: 1 };
      const fullscreenPlaceholderCount = obj4.useFullscreenPlaceholderCount(obj5);
      const items2 = [callback];
      const obj6 = searchContext(573);
      const stateFromStores2 = obj6.useStateFromStores(items2, () => {
        const guild = GuildStore.getGuild(guildId);
        let guildVisualOwnerId;
        if (null != guild) {
          const obj = PermissionUtilsAll;
          guildVisualOwnerId = obj.getGuildVisualOwnerId(guild);
        }
        return guildVisualOwnerId;
      });
      const items3 = [fullscreenPlaceholderCount];
      const obj7 = searchContext(573);
      const stateFromStores3 = obj7.useStateFromStores(items3, () => {
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
        let tmp4;
        const obj = KeyboardManagerUtils;
        const result = obj.dismissGlobalKeyboard();
        const obj2 = search_tracking_TrackingDefault;
        const obj3 = { searchContext, userId: userId.id, index, entityType: constants2.USER };
        const result1 = obj2.trackSearchResultClicked(obj3);
        const obj4 = { userId: userId.id, channelId: tmp4, sourceAnalyticsLocations: analyticsLocations };
        tmp4 = closure_5;
        const tmp3 = showUserProfileActionSheetDefault;
        if (closure_5 === EVERYONE_CHANNEL_ID) {
          tmp4 = stateFromStores1;
        }
        tmp3(obj4);
      }, items4);
      const items5 = [searchContext];
      const items6 = [callback];
      const callback1 = stateFromStores.useCallback((arg0) => {
        let index;
        let user;
        ({ user, index } = arg0);
        const obj = search_tracking_TrackingDefault;
        const obj2 = { searchContext, userId: user.id, index, entityType: constants2.USER };
        const result = obj.trackSearchResultClicked(obj2);
        const obj3 = KeyboardManagerUtils;
        const result1 = obj3.dismissGlobalKeyboard();
      }, items5);
      const callback2 = stateFromStores.useCallback((user) => {
        callback(user.user, user.index);
      }, items6);
      const items7 = [SearchQueryStore];
      const items8 = [searchContext];
      const obj8 = searchContext(573);
      stateFromStores4 = obj8.useStateFromStores(
        items7,
        () => SearchQueryStore.isInitialSearchQuery(searchContext),
        items8,
      );
      const items9 = [SearchMemberTabStore];
      const obj9 = searchContext(573);
      const stateFromStores5 = obj9.useStateFromStores(items9, () => SearchMemberTabStore.getIsFetching(closure_3));
      const items10 = [stateFromStores, stateFromStores4, stateFromStores5];
      const effect = stateFromStores.useEffect(() => {
        if (!stateFromStores4) {
          if (!stateFromStores5) {
            let formatToPlainStringResult;
            if (stateFromStores.length > 0) {
              const intl2 = intl3.intl;
              const obj = { count: stateFromStores.length };
              formatToPlainStringResult = intl2.formatToPlainString(intl3.t.ZGVL3g, obj);
            } else {
              const intl = intl3.intl;
              formatToPlainStringResult = intl.string(intl3.t.tuL9TW);
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
          let colorString;
          let colorStrings;
          let nick;
          let obj;
          let premiumSince;
          let closure_0 = index;
          const member = GuildMemberStore.getMember(guildId, record.record.id);
          const element = { type: constants.GUILD_CHANNEL_MEMBER, props: obj };
          obj = {
            type: constants2.NONE,
            user: record.record,
            nickname: nick,
            usernameColor: colorString,
            roleColors: colorStrings,
            isNameplatedRow: true,
            premiumSince,
            isOwner: stateFromStores2 === record.record.id,
            guildId,
            onLongPress(arg0) {
              return closure_2_9(arg0, closure_0);
            },
            onPress(arg0) {
              return closure_2_9(arg0, closure_0);
            },
            start: 0 === index,
            end: index === stateFromStores.length - 1,
            canShowDisplayNameStylesFont: true,
          };
          nick = undefined;
          const push = items.push;
          if (member != null) {
            nick = member.nick;
          }
          colorString = undefined;
          if (member != null) {
            colorString = member.colorString;
          }
          colorStrings = undefined;
          if (member != null) {
            colorStrings = member.colorStrings;
          }
          premiumSince = undefined;
          if (member != null) {
            premiumSince = member.premiumSince;
          }
          push(element);
        });
        if (stateFromStores5) {
          let num2;
          for (let num2 = 0; num2 < fullscreenPlaceholderCount; num2 = num2 + 1) {
            let obj = {
              type: constants.GUILD_CHANNEL_MEMBER_PLACEHOLDER,
              key: "guild-channel-member-placeholder-" + num2,
            };
            let _HermesInternal = HermesInternal;
            let push = items.push;
            let arr = push(obj);
          }
        }
        return items;
      }, items11);
      const obj10 = searchContext(16897);
      const contentContainerStyles = obj10.useContentContainerStyles();
      const obj11 = searchContext(16895);
      const messageTabCountsErrorText = obj11.useMessageTabCountsErrorText({ searchContext });
      if (null != messageTabCountsErrorText) {
        tmp20 = jsx(tmp2(16829), { text: messageTabCountsErrorText });
      } else {
        if (stateFromStores4) {
          if (null != stateFromStores3) {
            tmp20 = jsx(tmp2(11223), {
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
        tmp20 = jsx(tmp2(16841), { contentContainerStyle: contentContainerStyles.membersContentContainer, data: memo });
      }
      return tmp20;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? (searchContext) => {
      let first;
      let tmp10;
      let tmp11;
      let tmp13;
      let tmp6;
      let tmp8;
      const obj = searchContext(576);
      const cResult = obj.c(13);
      searchContext = searchContext.searchContext;
      const channelId = searchContext.channelId;
      const guildId = searchContext.guildId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
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
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = searchContext(573);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [SearchQueryStore];
        cResult[3] = items1;
        tmp8 = items1;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] !== searchContext) {
        const fn2 = function y() {
          const tmp2 =
            SearchQueryStore.isInitialSearchQuery(searchContext) && !SearchQueryStore.isTagsEmpty(searchContext);
          return tmp2;
        };
        const items2 = [searchContext];
        cResult[4] = searchContext;
        cResult[5] = fn2;
        cResult[6] = items2;
        tmp11 = items2;
        tmp10 = fn2;
      } else {
        tmp10 = cResult[5];
        tmp11 = cResult[6];
      }
      const tmpResult2 = searchContext(573);
      const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp10, tmp11);
      if (cResult[7] === channelId) {
        if (cResult[8] === guildId) {
          if (cResult[9] === stateFromStores) {
            if (cResult[10] === stateFromStores1) {
              if (cResult[11] === searchContext) {
                tmp13 = cResult[12];
              }
              return tmp13;
            }
          }
        }
      }
      if (!stateFromStores) {
        let tmp17;
        if (stateFromStores1) {
          channelId(16898);
          tmp17 = (
            <tmp16
              channelId={channelId}
              guildId={guildId}
              onUserPress={searchContext(1881).dismissGlobalKeyboard}
              disableStickySections
            />
          );
        }
        cResult[7] = channelId;
        cResult[8] = guildId;
        cResult[9] = stateFromStores;
        cResult[10] = stateFromStores1;
        cResult[11] = searchContext;
        cResult[12] = tmp17;
        tmp13 = tmp17;
      }
      tmp17 = <closure_23 searchContext={searchContext} guildId={guildId} />;
    }
  : (searchContext) => {
      searchContext = searchContext.searchContext;
      const channelId = searchContext.channelId;
      const guildId = searchContext.guildId;
      const items = [ChannelStore];
      const obj = searchContext(573);
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
      const obj2 = searchContext(573);
      const tmp = searchContext;
      if (!stateFromStores) {
        let tmp7;
        if (
          obj2.useStateFromStores(
            items1,
            () => {
              const tmp2 =
                SearchQueryStore.isInitialSearchQuery(searchContext) && !SearchQueryStore.isTagsEmpty(searchContext);
              return tmp2;
            },
            items2,
          )
        ) {
          channelId(16898);
          tmp7 = (
            <tmp6
              channelId={channelId}
              guildId={guildId}
              onUserPress={tmp(1881).dismissGlobalKeyboard}
              disableStickySections
            />
          );
        }
        return tmp7;
      }
      tmp7 = <closure_23 searchContext={searchContext} guildId={guildId} />;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (searchContext) => {
        let channelId;
        let first;
        let stateFromStores;
        let tmp11;
        let tmp12;
        let tmp14;
        let tmp17;
        let tmp19;
        let tmp21;
        const tmp = channelId;
        const obj = channelId(576);
        const cResult = obj.c(34);
        searchContext = searchContext.searchContext;
        const tmp4 = closure_21();
        const tmp6 = stateFromStores(6664);
        const analyticsLocations = tmp6(stateFromStores(6688).SEARCH_MEMBERS).analyticsLocations;
        channelId = undefined;
        const tmp5 = stateFromStores;
        if (searchContext.type === constants4.CHANNEL) {
          channelId = searchContext.channelId;
        }
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [ChannelStore];
          let num = 0;
          cResult[0] = items;
          first = items;
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
          let num2 = 1;
          cResult[1] = channelId;
          cResult[2] = fn;
          cResult[3] = items1;
          tmp12 = items1;
          tmp11 = fn;
        } else {
          tmp11 = cResult[2];
          tmp12 = cResult[3];
        }
        const tmpResult = tmp(573);
        stateFromStores = tmpResult.useStateFromStores(first, tmp11, tmp12);
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [ChannelStore];
          cResult[4] = items2;
          tmp14 = items2;
        } else {
          tmp14 = cResult[4];
        }
        if (cResult[5] !== channelId) {
          class I {
            constructor() {
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
            }
          }
          const items3 = [channelId];
          cResult[5] = channelId;
          cResult[6] = I;
          cResult[7] = items3;
          tmp17 = items3;
        } else {
          class I {
            constructor() {
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
            }
          }
          tmp17 = cResult[7];
        }
        const tmpResult3 = tmp(573);
        const stateFromStores1 = tmpResult3.useStateFromStores(tmp14, I, tmp17);
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
            constructor() {
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
            }
          }
          const items4 = [UserStore];
          cResult[8] = items4;
          tmp19 = items4;
        } else {
          class I {
            constructor() {
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
            }
          }
        }
        if (cResult[9] !== stateFromStores) {
          class R {
            constructor() {
              let tmp2;
              if (stateFromStores) {
                tmp2 = getGroupDMRecipientLimitDefault({ useNitroCapExperiment: true });
              } else {
                tmp2 = closure_17;
              }
              return tmp2;
            }
          }
          const items5 = [stateFromStores];
          cResult[9] = stateFromStores;
          cResult[10] = R;
          cResult[11] = items5;
          tmp21 = items5;
        } else {
          class R {
            constructor() {
              let tmp2;
              if (stateFromStores) {
                tmp2 = getGroupDMRecipientLimitDefault({ useNitroCapExperiment: true });
              } else {
                tmp2 = closure_17;
              }
              return tmp2;
            }
          }
          tmp21 = cResult[11];
        }
        const tmpResult4 = tmp(573);
        const stateFromStores2 = tmpResult4.useStateFromStores(tmp19, R, tmp21);
        if (constants4.CHANNEL === searchContext.type) {
          class R {
            constructor() {
              let tmp2;
              if (stateFromStores) {
                tmp2 = getGroupDMRecipientLimitDefault({ useNitroCapExperiment: true });
              } else {
                tmp2 = closure_17;
              }
              return tmp2;
            }
          }
          let tmp24 = null;
          if (stateFromStores) {
            class R {
              constructor() {
                let tmp2;
                if (stateFromStores) {
                  tmp2 = getGroupDMRecipientLimitDefault({ useNitroCapExperiment: true });
                } else {
                  tmp2 = closure_17;
                }
                return tmp2;
              }
            }
            tmp24 = jsx(tmp5(16900), {
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
          class R {
            constructor() {
              let tmp2;
              if (stateFromStores) {
                tmp2 = getGroupDMRecipientLimitDefault({ useNitroCapExperiment: true });
              } else {
                tmp2 = closure_17;
              }
              return tmp2;
            }
          }
        }
      }
    : function (searchContext) {
        let tmp19Result;
        searchContext = searchContext.searchContext;
        let stateFromStores;
        const tmp = closure_21();
        let tmp2 = stateFromStores;
        const tmp4 = stateFromStores(6664);
        const analyticsLocations = tmp4(stateFromStores(6688).SEARCH_MEMBERS).analyticsLocations;
        let channelId;
        if (searchContext.type === constants4.CHANNEL) {
          channelId = searchContext.channelId;
        }
        const items = [ChannelStore];
        const items1 = [channelId];
        const obj = channelId(573);
        stateFromStores = obj.useStateFromStores(
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
        const items2 = [ChannelStore];
        const items3 = [channelId];
        const obj2 = channelId(573);
        const stateFromStores1 = obj2.useStateFromStores(
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
          const AnalyticsLocationProvider2 = tmp7(6664).AnalyticsLocationProvider;
          ({
            channelId: searchContext.channelId,
            disableStickySections: true,
            listStyleOverride: tmp.userList,
            onUserPress: channelId(1881).dismissGlobalKeyboard,
            listHeaderContent: tmp19Result,
          });
          tmp2(11826);
          tmp19Result = null;
          if (stateFromStores) {
            tmp19Result = jsx(tmp2(16900), {
              location: "GroupDMDetailsMembers",
              memberCount: stateFromStores1,
              recipientLimit: tmp11,
              wrapperStyle: tmp.promoBanner,
            });
          }
          return <AnalyticsLocationProvider2 value={analyticsLocations}>{null}</AnalyticsLocationProvider2>;
        } else if (constants4.THREAD === type) {
          ({ channelId: obj5.channelId, guildId: obj5.guildId } = searchContext);
          return <closure_24 searchContext={searchContext} channelId={null} guildId={null} />;
        } else {
          if (constants4.GUILD_CHANNEL !== type) {
            if (constants4.GUILD !== type) {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const self = this;
              const self2 = this;
              const error = new Error("[MembersScreen] Unsupported search context type: " + searchContext.type);
              throw error;
            }
          }
          const AnalyticsLocationProvider = tmp7(6664).AnalyticsLocationProvider;
          return <AnalyticsLocationProvider value={analyticsLocations}>{null}</AnalyticsLocationProvider>;
        }
      },
);
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/MembersScreen.tsx");

export default memoResult;
