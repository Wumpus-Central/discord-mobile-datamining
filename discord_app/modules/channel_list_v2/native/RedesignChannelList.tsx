// discord_app/modules/channel_list_v2/native/RedesignChannelList.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import ChannelListState from "../../guild_sidebar/ChannelListState.tsx";
import roundToNearestPixelDefault from "../../voice_panel/native/utils/roundToNearestPixel.tsx";
import TTIFirstContentfulPaint from "../../tti_analytics/native/TTIFirstContentfulPaint.tsx";
import useHomeDrawerGesture from "../../home_drawer/native/useHomeDrawerGesture.tsx";
import RedesignGuildHeaderDefault from "RedesignGuildHeader.tsx";
import registerSidebarVisibilityMethods from "../../guilds_bar/native/utils/registerSidebarVisibilityMethods.tsx";
import ChannelsUnreadBarsDefault from "unread_bars/ChannelsUnreadBars.tsx";
import renderRedesignChannelListItem from "renderRedesignChannelListItem.tsx";
import GuildUpsellChannelListDefault from "../../game_community_upsell/native/GuildUpsellChannelList.tsx";
import GuildsEmptyDefault from "../../main_tabs_v2/native/tabs/guilds/empty_states/GuildsEmpty.tsx";
import NsfwGateGuildSidebarDefault from "../../age_gate/native/components/NsfwGateGuildSidebar.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import ChannelListStore from "../../guild_sidebar/ChannelListStore.tsx";
import HomeDrawerStore from "../../home_drawer/native/HomeDrawerStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import SortedVoiceStateStore from "../../../stores/views/SortedVoiceStateStore.tsx";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, importDefault, navigation, selectedGuildId;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_3 = ["selectedGuildId", "selectedChannelId"];
let react = react_mod;
const View = react_native.View;
({ EMPTY_NUX_SERVER: closure_14, MOBILE_GUILD_UPSELL_LIST: closure_15 } = Constants);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(4);
      const obj2 = require("BaseNavigationContainer");
      navigation = obj2.useNavigation();
      if (cResult[0] === arg0) {
        let tmp3;
        let tmp4;
        if (cResult[1] === navigation) {
          tmp3 = cResult[2];
          tmp4 = cResult[3];
        }
        const effect = react.useEffect(tmp3, tmp4);
      }
      const fn = function t() {
        let closure_1;
        let v1;
        let c0 = -1;
        navigation = navigation.addListener("tabPress", (arg0) => {
          let focused;
          let timeout = arg0;
          const obj = v1(dependencyMap[15]);
          if (null != obj.coerceGuildsRoute(navigation(dependencyMap[16])())) {
            let tmp = timeout;
            if (-1 === timeout) {
              const _clearTimeout2 = clearTimeout;
              clearTimeout(timeout);
              const _setTimeout = setTimeout;
              timeout = setTimeout(() => {
                clearTimeout(c0);
                c0 = -1;
                const ref = focused.isFocused();
                const animationFrame = requestAnimationFrame(() => {
                  let tmp = ref;
                  const useReducedMotion = AccessibilityStore.useReducedMotion;
                  if (ref) {
                    tmp = !ref.defaultPrevented;
                  }
                  if (tmp) {
                    tmp = null != ref.current;
                  }
                  if (tmp) {
                    const current = ref.current;
                    current.scrollToTop(!useReducedMotion);
                  }
                });
              }, 300);
            } else {
              const _clearTimeout = clearTimeout;
              clearTimeout(timeout);
              timeout = -1;
            }
          }
        });
        return () => {
          closure_1();
        };
      };
      const items = [navigation, arg0];
      cResult[0] = arg0;
      cResult[1] = navigation;
      cResult[2] = fn;
      cResult[3] = items;
      tmp4 = items;
      tmp3 = fn;
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      let obj = require("BaseNavigationContainer");
      navigation = obj.useNavigation();
      const items = [navigation, arg0];
      const effect = react.useEffect(() => {
        let closure_1;
        let v1;
        let c0 = -1;
        navigation = navigation.addListener("tabPress", (arg0) => {
          let focused;
          let timeout = arg0;
          const obj = v1(dependencyMap[15]);
          if (null != obj.coerceGuildsRoute(navigation(dependencyMap[16])())) {
            let tmp = timeout;
            if (-1 === timeout) {
              const _clearTimeout2 = clearTimeout;
              clearTimeout(timeout);
              const _setTimeout = setTimeout;
              timeout = setTimeout(() => {
                clearTimeout(c0);
                c0 = -1;
                const ref = focused.isFocused();
                const animationFrame = requestAnimationFrame(() => {
                  let tmp = ref;
                  const useReducedMotion = AccessibilityStore.useReducedMotion;
                  if (ref) {
                    tmp = !ref.defaultPrevented;
                  }
                  if (tmp) {
                    tmp = null != ref.current;
                  }
                  if (tmp) {
                    const current = ref.current;
                    current.scrollToTop(!useReducedMotion);
                  }
                });
              }, 300);
            } else {
              const _clearTimeout = clearTimeout;
              clearTimeout(timeout);
              timeout = -1;
            }
          }
        });
        return () => {
          closure_1();
        };
      }, items);
    };
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (guild) => {
        let applicationAccountLinkMarkAsDismissed;
        let contentInset;
        let first;
        let gameClaimMarkAsDismissed;
        let guildChannels;
        let items;
        let listBottom;
        let listPaddingBottom;
        let listTop;
        let listViewportHeight;
        let liveChannelNoticeHeight;
        let optInChannelsEnabled;
        let startApplicationAccountLinkAuthorization;
        let style;
        let voiceStates;
        let tmp2 = guildChannels;
        let obj = gameClaimMarkAsDismissed(guildChannels[13]);
        const cResult = obj.c(113);
        ({ contentInset, gameClaimMarkAsDismissed } = guild);
        guild = guild.guild;
        guildChannels = guild.guildChannels;
        const selectedChannelId = guild.selectedChannelId;
        const selectedVoiceChannelId = guild.selectedVoiceChannelId;
        ({ style, applicationAccountLinkMarkAsDismissed } = guild);
        react = guild.startApplicationAccountLinkAuthorization;
        const accountLinkApplication = guild.accountLinkApplication;
        const favoritesSuggestionsNoticeHeight = guild.favoritesSuggestionsNoticeHeight;
        let obj2 = gameClaimMarkAsDismissed(guildChannels[18]);
        const categoryStyles = obj2.useCategoryStyles();
        const tmp6 = guild(guildChannels[19])(guild);
        const bannerHeight = tmp6.bannerHeight;
        const bannerWidth = tmp6.bannerWidth;
        const headerHeight = tmp6.headerHeight;
        const fontScale = tmp6.fontScale;
        ({ listTop, listBottom, listPaddingBottom, listViewportHeight } = tmp6);
        let obj3 = react;
        const ref = react.useRef(null);
        const tmp5 = guild;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          let obj4 = { location: "Channel List" };
          cResult[0] = obj4;
          first = obj4;
        } else {
          first = cResult[0];
        }
        const tmp5Result = tmp5(tmp2[20]);
        const list = tmp5Result.useConfig(first).list;
        if (cResult[1] !== guildChannels) {
          class N {
            constructor() {
              obj = closure_0(closure_2[21]);
              result = obj.registerFastListChannelVisibilityMethod(closure_15, guildChannels);
              return;
            }
          }
          cResult[1] = guildChannels;
          cResult[2] = N;
        } else {
          class N {
            constructor() {
              obj = closure_0(closure_2[21]);
              result = obj.registerFastListChannelVisibilityMethod(closure_15, guildChannels);
              return;
            }
          }
        }
        if (cResult[3] === guildChannels) {
          let tmp11;
          class N {
            constructor() {
              obj = closure_0(closure_2[21]);
              result = obj.registerFastListChannelVisibilityMethod(closure_15, guildChannels);
              return;
            }
          }
          const effect = obj3.useEffect(N, items);
          if (cResult[6] !== guildChannels) {
            class N {
              constructor() {
                obj = closure_0(closure_2[21]);
                result = obj.registerFastListChannelVisibilityMethod(closure_15, guildChannels);
                return;
              }
            }
            let sections = guildChannels.getSections(false);
            cResult[6] = guildChannels;
            cResult[7] = sections;
            tmp11 = sections;
          } else {
            class N {
              constructor() {
                obj = closure_0(closure_2[21]);
                result = obj.registerFastListChannelVisibilityMethod(closure_15, guildChannels);
                return;
              }
            }
          }
          sections = tmp11;
          const id = guild.id;
          if (cResult[8] !== id) {
            class N {
              constructor() {
                obj = closure_0(closure_2[21]);
                result = obj.registerFastListChannelVisibilityMethod(closure_15, guildChannels);
                return;
              }
            }
            tmp14[0] = id;
            cResult[8] = id;
            cResult[9] = tmp14;
          } else {
            class N {
              constructor() {
                obj = closure_0(closure_2[21]);
                result = obj.registerFastListChannelVisibilityMethod(closure_15, guildChannels);
                return;
              }
            }
          }
          const tmpResult = gameClaimMarkAsDismissed(tmp2[22]);
          tmpResult.useExternalScrollEventHandler(tmp14);
          const _Symbol = Symbol;
          const tmpResult2 = gameClaimMarkAsDismissed(tmp2[23]);
          const isHomeDrawerEnabled = tmpResult2.useIsHomeDrawerEnabled();
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            class N {
              constructor() {
                obj = closure_0(closure_2[21]);
                result = obj.registerFastListChannelVisibilityMethod(closure_15, guildChannels);
                return;
              }
            }
            cResult[10] = tmp18;
          } else {
            class N {
              constructor() {
                obj = closure_0(closure_2[21]);
                result = obj.registerFastListChannelVisibilityMethod(closure_15, guildChannels);
                return;
              }
            }
          }
          if (cResult[11] === guild) {
            class N {
              constructor() {
                obj = closure_0(closure_2[21]);
                result = obj.registerFastListChannelVisibilityMethod(closure_15, guildChannels);
                return;
              }
            }
          }
          class X {
            constructor(arg0) {
              obj = { fastList: guild, guildChannels, guild, headerHeight };
              return jsx(closure_1(closure_2[24]), obj);
            }
          }
          cResult[11] = guild;
          cResult[12] = guildChannels;
          cResult[13] = headerHeight;
          cResult[14] = X;
        }
        items = [ref, guildChannels, list];
        cResult[3] = guildChannels;
        cResult[4] = list;
        cResult[5] = items;
      }
    : (gameClaimMarkAsDismissed) => {
        let LayerScope;
        let contentInset;
        let items14;
        let listBottom;
        let listPaddingBottom;
        let listViewportHeight;
        let obj18;
        let row;
        let section;
        let style;
        let tmp39;
        let tmp40Result;
        let youBarTotalHeight1;
        gameClaimMarkAsDismissed = gameClaimMarkAsDismissed.gameClaimMarkAsDismissed;
        const guild = gameClaimMarkAsDismissed.guild;
        const guildChannels = gameClaimMarkAsDismissed.guildChannels;
        const selectedChannelId = gameClaimMarkAsDismissed.selectedChannelId;
        const selectedVoiceChannelId = gameClaimMarkAsDismissed.selectedVoiceChannelId;
        const applicationAccountLinkMarkAsDismissed = gameClaimMarkAsDismissed.applicationAccountLinkMarkAsDismissed;
        const startApplicationAccountLinkAuthorization =
          gameClaimMarkAsDismissed.startApplicationAccountLinkAuthorization;
        const accountLinkApplication = gameClaimMarkAsDismissed.accountLinkApplication;
        const favoritesSuggestionsNoticeHeight = gameClaimMarkAsDismissed.favoritesSuggestionsNoticeHeight;
        listViewportHeight = undefined;
        let tmp2 = guildChannels;
        ({ contentInset, style } = gameClaimMarkAsDismissed);
        let obj = gameClaimMarkAsDismissed(guildChannels[18]);
        const categoryStyles = obj.useCategoryStyles();
        let tmp4 = guild;
        const tmp5 = guild(guildChannels[19])(guild);
        const bannerHeight = tmp5.bannerHeight;
        const bannerWidth = tmp5.bannerWidth;
        const headerHeight = tmp5.headerHeight;
        const fontScale = tmp5.fontScale;
        ({ listBottom, listPaddingBottom, listViewportHeight } = tmp5);
        const listTop = tmp5.listTop;
        const ref = startApplicationAccountLinkAuthorization.useRef(null);
        let obj2 = guild(guildChannels[20]);
        const list = obj2.useConfig({ location: "Channel List" }).list;
        const items = [ref, guildChannels, list];
        const effect = startApplicationAccountLinkAuthorization.useEffect(() => {
          const obj = registerSidebarVisibilityMethods;
          const result = obj.registerFastListChannelVisibilityMethod(ref, guildChannels);
        }, items);
        const sections = guildChannels.getSections(false);
        const id = guild.id;
        let obj3 = gameClaimMarkAsDismissed(guildChannels[22]);
        const externalScrollEventHandler = obj3.useExternalScrollEventHandler({ id });
        let obj4 = gameClaimMarkAsDismissed(guildChannels[23]);
        const isHomeDrawerEnabled = obj4.useIsHomeDrawerEnabled();
        const items1 = [guildChannels, guild, headerHeight];
        const callback = startApplicationAccountLinkAuthorization.useCallback(() => {
          const state = bannerHeight.getState();
          state.noteInteraction();
        }, []);
        const items2 = [guild, bannerHeight, bannerWidth];
        const callback1 = startApplicationAccountLinkAuthorization.useCallback((fastList) => {
          const obj = { fastList, guildChannels, guild, headerHeight };
          return authStore3(ChannelsUnreadBarsDefault, obj);
        }, items1);
        const callback2 = startApplicationAccountLinkAuthorization.useCallback((scrollPosValue) => {
          const obj = { guild, scrollPosition: scrollPosValue.scrollPosValue, bannerHeight, bannerWidth };
          return authStore3(RedesignGuildHeaderDefault, obj, guild.id);
        }, items2);
        const callback3 = startApplicationAccountLinkAuthorization.useCallback(() => {
          const obj = gameClaimMarkAsDismissed(guildChannels[26]);
          const result = obj.logChannelListEndReached();
        }, []);
        const obj5 = gameClaimMarkAsDismissed(guildChannels[27]);
        const recentlyActiveChannelsEnabled = obj5.useRecentlyActiveChannelsEnabled();
        const items3 = [fontScale];
        const items4 = [guild.id];
        const obj6 = gameClaimMarkAsDismissed(guildChannels[28]);
        const stateFromStores = obj6.useStateFromStores(
          items3,
          () => SortedVoiceStateStore.getVoiceStates(guild.id),
          items4,
        );
        const obj7 = gameClaimMarkAsDismissed(guildChannels[29]);
        const optInEnabledForGuild = obj7.useOptInEnabledForGuild(guild.id);
        const obj8 = gameClaimMarkAsDismissed(guildChannels[30]);
        const guildLiveChannelNoticeInfo = obj8.useGuildLiveChannelNoticeInfo(guild.id);
        const obj9 = gameClaimMarkAsDismissed(guildChannels[31]);
        const scaledLiveChannelNoticeHeight = obj9.getScaledLiveChannelNoticeHeight(
          fontScale,
          guildLiveChannelNoticeInfo,
        );
        optInEnabledForGuild(ref);
        const items5 = [guildChannels, sections];
        const callback4 = startApplicationAccountLinkAuthorization.useCallback((arg0) => {
          const diff = arg0 - 1;
          let tmp2 = diff;
          if (arg0 <= ChannelListState.SECTION_INDEX_FIRST_NAMED_CATEGORY) {
            tmp2 = diff;
            if (0 <= diff) {
              let tmp4 = diff;
              tmp2 = diff;
              if (sections[diff] <= 0) {
                const diff1 = tmp4 - 1;
                tmp2 = diff1;
                while (0 <= diff1) {
                  tmp4 = diff1;
                  tmp2 = diff1;
                  if (sections[diff1] > 0) {
                    break;
                  }
                }
              }
            }
          }
          let tmp7 = -1 !== tmp2;
          if (-1 !== tmp2) {
            const obj = renderRedesignChannelListItem;
            tmp7 = !obj.getChannelListSectionHasFooterDivider(guildChannels, tmp2);
          }
          return tmp7;
        }, items5);
        const items6 = [
          guildChannels,
          fontScale,
          stateFromStores,
          scaledLiveChannelNoticeHeight,
          favoritesSuggestionsNoticeHeight,
          listViewportHeight,
        ];
        const items7 = [
          guildChannels,
          selectedChannelId,
          guild,
          gameClaimMarkAsDismissed,
          applicationAccountLinkMarkAsDismissed,
          startApplicationAccountLinkAuthorization,
          accountLinkApplication,
        ];
        const callback5 = startApplicationAccountLinkAuthorization.useCallback((section, row) => {
          const obj = renderRedesignChannelListItem;
          const obj2 = {
            guildChannels,
            section,
            row,
            fontScale,
            voiceStates: stateFromStores,
            liveChannelNoticeHeight: scaledLiveChannelNoticeHeight,
            favoritesSuggestionsNoticeHeight,
            listViewportHeight,
          };
          const channelListItemSize = obj.getChannelListItemSize(obj2);
          return roundToNearestPixelDefault(channelListItemSize);
        }, items6);
        const items8 = [guildChannels, fontScale, callback4];
        const callback6 = startApplicationAccountLinkAuthorization.useCallback((section, row) => {
          let obj2;
          let obj3;
          const obj = { children: obj2.renderChannelListItem(obj3) };
          obj2 = renderRedesignChannelListItem;
          obj3 = {
            guildChannels,
            section,
            row,
            selectedChannelId,
            guild,
            gameClaimMarkAsDismissed,
            applicationAccountLinkMarkAsDismissed,
            startApplicationAccountLinkAuthorization,
            accountLinkApplication,
          };
          return authStore3(View, obj);
        }, items7);
        const items9 = [guildChannels, recentlyActiveChannelsEnabled, callback4, categoryStyles];
        const callback7 = startApplicationAccountLinkAuthorization.useCallback((section) => {
          const obj = renderRedesignChannelListItem;
          const channelListSectionHeaderSize = obj.getChannelListSectionHeaderSize(
            guildChannels,
            section,
            fontScale,
            callback4(section),
          );
          return roundToNearestPixelDefault(channelListSectionHeaderSize);
        }, items8);
        const items10 = [
          guildChannels,
          optInEnabledForGuild,
          stateFromStores,
          selectedChannelId,
          selectedVoiceChannelId,
        ];
        const callback8 = startApplicationAccountLinkAuthorization.useCallback((section) => {
          const obj = renderRedesignChannelListItem;
          const obj2 = {
            children: obj.renderChannelListSectionHeader(
              guildChannels,
              section,
              recentlyActiveChannelsEnabled,
              callback4(section),
              categoryStyles,
            ),
          };
          return authStore3(View, obj2);
        }, items9);
        const items11 = [
          guildChannels,
          optInEnabledForGuild,
          stateFromStores,
          selectedChannelId,
          selectedVoiceChannelId,
        ];
        const callback9 = startApplicationAccountLinkAuthorization.useCallback((section) => {
          const obj = renderRedesignChannelListItem;
          const obj2 = {
            guildChannels,
            section,
            optInChannelsEnabled: optInEnabledForGuild,
            voiceStates: stateFromStores,
            selectedChannelId,
            selectedVoiceChannelId,
          };
          const result = obj.calculateVoiceSummary(obj2);
          const obj3 = renderRedesignChannelListItem;
          const channelListSectionFooterSize = obj3.getChannelListSectionFooterSize(guildChannels, section, result);
          return roundToNearestPixelDefault(channelListSectionFooterSize);
        }, items10);
        const items12 = [sections];
        const callback10 = startApplicationAccountLinkAuthorization.useCallback((section) => {
          const obj = renderRedesignChannelListItem;
          const obj2 = {
            guildChannels,
            section,
            optInChannelsEnabled: optInEnabledForGuild,
            voiceStates: stateFromStores,
            selectedChannelId,
            selectedVoiceChannelId,
          };
          const result = obj.calculateVoiceSummary(obj2);
          const obj3 = renderRedesignChannelListItem;
          const obj4 = { children: obj3.renderChannelListSectionFooter(guildChannels, section, ref, result) };
          return authStore3(View, obj4);
        }, items11);
        const items13 = [guildChannels];
        const memo = startApplicationAccountLinkAuthorization.useMemo(
          () => 0 === sections.reduce((acc, item) => acc + item, 0),
          items12,
        );
        const callback11 = startApplicationAccountLinkAuthorization.useCallback((arg0, arg1, arg2) => {
          const obj = renderRedesignChannelListItem;
          return obj.getFastListRecyclerKey(guildChannels, arg0, arg1, arg2);
        }, items13);
        const context = startApplicationAccountLinkAuthorization.useContext(guild(guildChannels[35]));
        const obj10 = gameClaimMarkAsDismissed(guildChannels[36]);
        const youBarTotalHeight = obj10.useYouBarTotalHeight(16);
        const obj12 = {
          endReachedThreshold: listBottom + listPaddingBottom,
          footerSize: listBottom + listPaddingBottom,
          getItemSize: callback5,
          getRecyclerKey: callback11,
          getSectionFooterSize: callback9,
          getSectionHeaderSize: callback7,
          headerSize: listTop,
          initialScrollItem: row,
          initialScrollSection: section,
          insetEnd: youBarTotalHeight,
          listViewportHeight,
          onEndReached: callback3,
          onScroll: tmp39,
          onScrollWorklet: externalScrollEventHandler,
          renderAccessory: callback1,
          renderHeader: callback2,
          renderItem: callback6,
          renderSectionFooter: callback10,
          renderSectionHeader: callback8,
          scrollIndicatorInsetBottom: youBarTotalHeight1,
          sections,
          waitFor: context,
        };
        const obj11 = gameClaimMarkAsDismissed(guildChannels[36]);
        youBarTotalHeight1 = obj11.useYouBarTotalHeight(-16);
        row = undefined;
        const obj13 = gameClaimMarkAsDismissed(guildChannels[17]);
        if (!obj13.isGameCommunityServerPreview(id)) {
          const first = applicationAccountLinkMarkAsDismissed(
            guildChannels.getSectionRowsFromChannel(selectedChannelId),
            1,
          )[0];
          if (null != first) {
            if (null != first.row) {
              if (first.row >= 0) {
                if (first.section >= 0) {
                  row = first.row;
                }
              }
            }
          }
        }
        section = undefined;
        const tmpResult = gameClaimMarkAsDismissed(tmp2[17]);
        if (!tmpResult.isGameCommunityServerPreview(id)) {
          const first1 = applicationAccountLinkMarkAsDismissed(
            guildChannels.getSectionRowsFromChannel(selectedChannelId),
            1,
          )[0];
          if (null != first1) {
            if (null != first1.row) {
              if (first1.row >= 0) {
                if (first1.section >= 0) {
                  section = first1.section;
                }
              }
            }
          }
        }
        tmp39 = undefined;
        if (isHomeDrawerEnabled) {
          tmp39 = callback;
        }
        const obj14 = {
          profile: gameClaimMarkAsDismissed(tmp2[41]).Profiles.Channels,
          children: sections(LayerScope, obj18),
        };
        const tmp4Result = tmp4(tmp2[41]);
        LayerScope = tmp(tmp2[42]).LayerScope;
        const obj15 = { style, contentInset, children: items14 };
        items14 = [,];
        const tmp4Result3 = tmp4(tmp2[43]);
        items14[0] = sections(tmp4(tmp2[37]), { guild });
        const tmp42 = recentlyActiveChannelsEnabled;
        if (memo) {
          const obj16 = { guild };
          tmp40Result = tmp40(tmp4(tmp2[38]), obj16);
        } else {
          const obj17 = { ref };
          const tmp4Result4 = tmp4("legend" === list ? tmp2[39] : tmp2[40]);
          const merged = Object.assign(obj12);
          tmp40Result = tmp40(tmp4Result4, obj17, guild.id);
        }
        items14[1] = tmp40Result;
        obj18 = { children: tmp42(tmp4Result3, obj15) };
        return sections(tmp4Result, obj14);
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      let accountLinkApplication;
      let applicationAccountLinkMarkAsDismissed;
      let first;
      let gameClaimMarkAsDismissed;
      let guildActionRows;
      let guildChannels;
      let guildChannelsVersion;
      let rows;
      let startApplicationAccountLinkAuthorization;
      _require = guild;
      let obj = require("react");
      const cResult = obj.c(13);
      const tmp4 = require("useGuildActionRows")(guild.guild);
      importDefault = tmp4;
      const tmp5 = require("useChannelNoticeRows")(guild.guild);
      rows = tmp5.rows;
      ({
        gameClaimMarkAsDismissed,
        applicationAccountLinkMarkAsDismissed,
        startApplicationAccountLinkAuthorization,
        accountLinkApplication,
      } = tmp5);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelListStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === rows) {
        if (cResult[2] === tmp4) {
          let tmp8;
          if (cResult[3] === guild.guild.id) {
            tmp8 = cResult[4];
          }
          const tmpResult = require("get initialized");
          const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp8);
          ({ guildChannels, guildChannelsVersion } = stateFromStoresObject);
          let tmp10 = null;
          const tmpResult2 = require("useShouldRenderChannelList");
          if (tmpResult2.useShouldRenderChannelList()) {
            if (cResult[5] === accountLinkApplication) {
              if (cResult[6] === applicationAccountLinkMarkAsDismissed) {
                if (cResult[7] === gameClaimMarkAsDismissed) {
                  if (cResult[8] === guildChannels) {
                    if (cResult[9] === guildChannelsVersion) {
                      if (cResult[10] === guild) {
                        let tmp11;
                        if (cResult[11] === startApplicationAccountLinkAuthorization) {
                          tmp11 = cResult[12];
                        }
                        tmp10 = tmp11;
                      }
                    }
                  }
                }
              }
            }
            const obj2 = {
              guildChannels,
              guildChannelsVersion,
              gameClaimMarkAsDismissed,
              applicationAccountLinkMarkAsDismissed,
              startApplicationAccountLinkAuthorization,
              accountLinkApplication,
            };
            const merged = Object.assign(guild);
            const tmp17 = closure_16(closure_20, obj2);
            cResult[5] = accountLinkApplication;
            cResult[6] = applicationAccountLinkMarkAsDismissed;
            cResult[7] = gameClaimMarkAsDismissed;
            cResult[8] = guildChannels;
            cResult[9] = guildChannelsVersion;
            cResult[10] = guild;
            cResult[11] = startApplicationAccountLinkAuthorization;
            cResult[12] = tmp17;
            tmp11 = tmp17;
          }
          return tmp10;
        }
      }
      const fn = function n() {
        const obj = { guildActionRows, channelNoticeRows: rows };
        return ChannelListStore.getGuild(guild.guild.id, obj);
      };
      cResult[1] = rows;
      cResult[2] = tmp4;
      cResult[3] = guild.guild.id;
      cResult[4] = fn;
      tmp8 = fn;
    }
  : (guild) => {
      let accountLinkApplication;
      let applicationAccountLinkMarkAsDismissed;
      let gameClaimMarkAsDismissed;
      let guildActionRows;
      let guildChannels;
      let guildChannelsVersion;
      let rows;
      let startApplicationAccountLinkAuthorization;
      _require = guild;
      importDefault = require("useGuildActionRows")(guild.guild);
      const tmp = require("useChannelNoticeRows")(guild.guild);
      rows = tmp.rows;
      ({
        gameClaimMarkAsDismissed,
        applicationAccountLinkMarkAsDismissed,
        startApplicationAccountLinkAuthorization,
        accountLinkApplication,
      } = tmp);
      let obj = require("get initialized");
      const items = [ChannelListStore];
      const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
        const obj = { guildActionRows, channelNoticeRows: rows };
        return ChannelListStore.getGuild(guild.guild.id, obj);
      });
      ({ guildChannels, guildChannelsVersion } = stateFromStoresObject);
      let tmp3 = null;
      const obj2 = require("useShouldRenderChannelList");
      if (obj2.useShouldRenderChannelList()) {
        const obj3 = {
          guildChannels,
          guildChannelsVersion,
          gameClaimMarkAsDismissed,
          applicationAccountLinkMarkAsDismissed,
          startApplicationAccountLinkAuthorization,
          accountLinkApplication,
        };
        const merged = Object.assign(guild);
        tmp3 = closure_16(closure_20, obj3);
      }
      return tmp3;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? (selectedGuildId) => {
      let closure_0;
      let tmp10;
      let tmp12;
      let tmp14;
      let tmp15;
      let tmp4;
      let tmp5;
      let voiceChannelId;
      const obj = require("react");
      const cResult = obj.c(28);
      if (cResult[0] !== selectedGuildId) {
        selectedGuildId = selectedGuildId.selectedGuildId;
        _require = selectedGuildId;
        const selectedChannelId = selectedGuildId.selectedChannelId;
        const tmp9 = _objectWithoutProperties(selectedGuildId, closure_3);
        cResult[0] = selectedGuildId;
        cResult[1] = tmp9;
        cResult[2] = selectedChannelId;
        cResult[3] = selectedGuildId;
        tmp5 = selectedChannelId;
        tmp4 = tmp9;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        _require = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[4] = items;
        tmp10 = items;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] !== tmp6) {
        const fn = function u() {
          return GuildStore.getGuild(closure_0);
        };
        cResult[5] = tmp6;
        cResult[6] = fn;
        tmp12 = fn;
      } else {
        tmp12 = cResult[6];
      }
      const tmpResult = require("get initialized");
      const stateFromStores = tmpResult.useStateFromStores(tmp10, tmp12);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [SelectedChannelStore];
        const fn2 = function f() {
          return voiceChannelId.getVoiceChannelId();
        };
        cResult[7] = items1;
        cResult[8] = fn2;
        tmp15 = fn2;
        tmp14 = items1;
      } else {
        tmp14 = cResult[7];
        tmp15 = cResult[8];
      }
      const tmpResult5 = require("get initialized");
      const stateFromStores1 = tmpResult5.useStateFromStores(tmp14, tmp15);
      if (tmp6 === closure_15) {
        let tmp41;
        if (cResult[9] !== tmp4.style) {
          const obj2 = { style: tmp4.style };
          const tmp44 = closure_16(GuildUpsellChannelListDefault, obj2);
          cResult[9] = tmp4.style;
          cResult[10] = tmp44;
          tmp41 = tmp44;
        } else {
          tmp41 = cResult[10];
        }
        return tmp41;
      } else {
        if (null != stateFromStores) {
          if (tmp6 !== closure_14) {
            const tmpResult6 = require("FavoritesUtils");
            if (tmpResult6.isFavoritesGuildId(tmp6)) {
              let tmp29;
              const _Symbol = Symbol;
              if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                const tmpResult7 = require("FavoritesGuildChannels");
                cResult[14] = tmpResult7;
                tmp29 = tmpResult7;
              } else {
                tmp29 = cResult[14];
              }
              const _default = tmp29.default;
              if (cResult[15] === stateFromStores) {
                if (cResult[16] === tmp4) {
                  if (cResult[17] === tmp5) {
                    let tmp31;
                    if (cResult[18] === stateFromStores1) {
                      tmp31 = cResult[19];
                    }
                    return tmp31;
                  }
                }
              }
              const obj3 = {
                guild: stateFromStores,
                selectedChannelId: tmp5,
                selectedVoiceChannelId: stateFromStores1,
              };
              const merged = Object.assign(tmp4);
              const tmp36 = closure_16(_default, obj3);
              cResult[15] = stateFromStores;
              cResult[16] = tmp4;
              cResult[17] = tmp5;
              cResult[18] = stateFromStores1;
              cResult[19] = tmp36;
              tmp31 = tmp36;
            } else {
              let tmp18;
              const tmpResult8 = require("age_gate/AgeGateUtils");
              if (tmpResult8.shouldNSFWGateGuild(tmp6)) {
                if (cResult[20] === tmp4.style) {
                  let tmp25;
                  if (cResult[21] === tmp6) {
                    tmp25 = cResult[22];
                  }
                  tmp18 = tmp25;
                }
                const obj4 = { style: tmp4.style, guildId: tmp6 };
                const tmp28 = closure_16(NsfwGateGuildSidebarDefault, obj4);
                cResult[20] = tmp4.style;
                cResult[21] = tmp6;
                cResult[22] = tmp28;
                tmp25 = tmp28;
              } else {
                if (cResult[23] === stateFromStores) {
                  if (cResult[24] === tmp4) {
                    if (cResult[25] === tmp5) {
                      if (cResult[26] === stateFromStores1) {
                        tmp18 = cResult[27];
                      }
                    }
                  }
                }
                const obj5 = {
                  guild: stateFromStores,
                  selectedChannelId: tmp5,
                  selectedVoiceChannelId: stateFromStores1,
                };
                const merged1 = Object.assign(tmp4);
                const tmp24 = closure_16(closure_21, obj5);
                cResult[23] = stateFromStores;
                cResult[24] = tmp4;
                cResult[25] = tmp5;
                cResult[26] = stateFromStores1;
                cResult[27] = tmp24;
                tmp18 = tmp24;
              }
              return tmp18;
            }
          }
        }
        if (cResult[11] === tmp4.style) {
          let tmp37;
          if (cResult[12] === tmp6) {
            tmp37 = cResult[13];
          }
          return tmp37;
        }
        const obj6 = { style: tmp4.style, selectedGuildId: tmp6 };
        const tmp40 = closure_16(GuildsEmptyDefault, obj6);
        cResult[11] = tmp4.style;
        cResult[12] = tmp6;
        cResult[13] = tmp40;
        tmp37 = tmp40;
      }
    }
  : (selectedGuildId) => {
      let voiceChannelId;
      selectedGuildId = selectedGuildId.selectedGuildId;
      const selectedChannelId = selectedGuildId.selectedChannelId;
      const merged = Object.assign(selectedGuildId, Object.assign({ selectedGuildId: 0, selectedChannelId: 0 }));
      const items = [GuildStore];
      const obj = selectedGuildId(504);
      const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(selectedGuildId));
      const items1 = [SelectedChannelStore];
      const obj2 = selectedGuildId(504);
      const stateFromStores1 = obj2.useStateFromStores(items1, () => voiceChannelId.getVoiceChannelId());
      if (selectedGuildId === closure_15) {
        const obj3 = { style: merged.style };
        return closure_16(GuildUpsellChannelListDefault, obj3);
      } else {
        if (null != stateFromStores) {
          if (selectedGuildId !== closure_14) {
            const tmp2Result = selectedGuildId(2077);
            if (tmp2Result.isFavoritesGuildId(selectedGuildId)) {
              const obj4 = { guild: stateFromStores, selectedChannelId, selectedVoiceChannelId: stateFromStores1 };
              const _default = selectedGuildId(16211).default;
              const merged1 = Object.assign(merged);
              return closure_16(_default, obj4);
            } else {
              let tmp6Result;
              const tmp2Result2 = selectedGuildId(9899);
              if (tmp2Result2.shouldNSFWGateGuild(selectedGuildId)) {
                const obj5 = { style: merged.style, guildId: selectedGuildId };
                tmp6Result = closure_16(NsfwGateGuildSidebarDefault, obj5);
              } else {
                const obj6 = { guild: stateFromStores, selectedChannelId, selectedVoiceChannelId: stateFromStores1 };
                const merged2 = Object.assign(merged);
                tmp6Result = closure_16(closure_21, obj6);
              }
              return tmp6Result;
            }
          }
        }
        const obj7 = { style: merged.style, selectedGuildId };
        return closure_16(GuildsEmptyDefault, obj7);
      }
    };
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memo2Result = memo2(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let items;
        let tmp12;
        let tmp5;
        const obj = react2;
        const cResult = obj.c(7);
        const obj2 = useHomeDrawerGesture;
        const doesLandOnHomeDrawer = obj2.useDoesLandOnHomeDrawer();
        if (cResult[0] !== arg0) {
          const obj3 = {};
          const merged = Object.assign(arg0);
          const tmp11 = authStore3(closure_22, obj3);
          cResult[0] = arg0;
          cResult[1] = tmp11;
          tmp5 = tmp11;
        } else {
          tmp5 = cResult[1];
        }
        if (cResult[2] !== doesLandOnHomeDrawer) {
          let tmp13 = null;
          if (!doesLandOnHomeDrawer) {
            tmp13 = authStore3(TTIFirstContentfulPaint.TTIFirstContentfulPaint, {
              label: "channel-list",
              checkFocusedScreen: "guilds",
            });
          }
          cResult[2] = doesLandOnHomeDrawer;
          cResult[3] = tmp13;
          tmp12 = tmp13;
        } else {
          tmp12 = cResult[3];
        }
        if (cResult[4] === tmp5) {
          let tmp15;
          if (cResult[5] === tmp12) {
            tmp15 = cResult[6];
          }
          return tmp15;
        }
        const obj4 = { children: items };
        items = [tmp5, tmp12];
        const tmp16 = closure_17(authStore4, obj4);
        cResult[4] = tmp5;
        cResult[5] = tmp12;
        cResult[6] = tmp16;
        tmp15 = tmp16;
      }
    : (arg0) => {
        const obj = useHomeDrawerGesture;
        const obj2 = {};
        const doesLandOnHomeDrawer = obj.useDoesLandOnHomeDrawer();
        const merged = Object.assign(arg0);
        const children = [authStore3(closure_22, obj2)];
        let tmp6Result = null;
        if (!doesLandOnHomeDrawer) {
          tmp6Result = authStore3(TTIFirstContentfulPaint.TTIFirstContentfulPaint, {
            label: "channel-list",
            checkFocusedScreen: "guilds",
          });
        }
        children[1] = tmp6Result;
        return closure_17(authStore4, { children });
      },
);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/RedesignChannelList.tsx");

export default memo2Result;
export const ChannelList = memoResult;
