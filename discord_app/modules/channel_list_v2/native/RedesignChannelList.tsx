// discord_app/modules/channel_list_v2/native/RedesignChannelList.tsx
import c from "../../../../_runtime/00576_c.js";
import ChannelListState from "../../guild_sidebar/ChannelListState.tsx";
import roundToNearestPixelDefault from "../../voice_panel/native/utils/roundToNearestPixel.tsx";
import TTIFirstContentfulPaint from "../../tti_analytics/native/TTIFirstContentfulPaint.tsx";
import GuildsRenderExperiment2 from "../../main_tabs_v2/native/tabs/guilds/GuildsRenderExperiment.tsx";
import useHomeDrawerGesture from "../../home_drawer/native/useHomeDrawerGesture.tsx";
import RedesignGuildHeaderDefault from "RedesignGuildHeader.tsx";
import registerSidebarVisibilityMethods from "../../guilds_bar/native/utils/registerSidebarVisibilityMethods.tsx";
import ChannelsUnreadBarsDefault from "unread_bars/ChannelsUnreadBars.tsx";
import renderRedesignChannelListItem from "renderRedesignChannelListItem.tsx";
import useShouldRenderChannelList from "../../guild_sidebar/native/useShouldRenderChannelList.tsx";
import GuildUpsellChannelListDefault from "../../game_community_upsell/native/GuildUpsellChannelList.tsx";
import GuildsEmptyDefault from "../../main_tabs_v2/native/tabs/guilds/empty_states/GuildsEmpty.tsx";
import NsfwGateGuildSidebarDefault from "../../age_gate/native/components/NsfwGateGuildSidebar.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import ChannelListStore from "../../guild_sidebar/ChannelListStore.tsx";
import HomeDrawerStore from "../../home_drawer/native/HomeDrawerStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import SortedVoiceStateStore from "../../../stores/views/SortedVoiceStateStore.tsx";

require = fn;
let closure_3 = ["shouldRender"];
let closure_4 = ["selectedGuildId", "selectedChannelId"];
const View = fn(17).View;
const Constants = fn(1084);
({ EMPTY_NUX_SERVER: closure_15, MOBILE_GUILD_UPSELL_LIST: closure_16 } = Constants);
const ChannelListGuildActionRow = fn(7644).ChannelListGuildActionRow;
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19, Fragment: closure_20 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useDrawerAwareScrollToTop(arg0) {
      _require = arg0;
      const cResult = require("c").c(4);
      const obj = require("c");
      let navigation = require("BaseNavigationContainer").useNavigation();
      if (cResult[0] === arg0) {
        if (cResult[1] === navigation) {
          let tmp3 = cResult[2];
          let tmp4 = cResult[3];
        }
        const effect = noop.useEffect(tmp3, tmp4);
      }
      const fn = function n() {
        c0 = -1;
        navigation = navigation.addListener("tabPress", (arg0) => {
          let timeout = arg0;
          if (null != obj.coerceGuildsRoute(navigation(11176)())) {
            if (-1 === timeout) {
              const _clearTimeout2 = clearTimeout;
              clearTimeout(timeout);
              const _setTimeout = setTimeout;
              timeout = setTimeout(() => {
                clearTimeout(c0);
                c0 = -1;
                focused.isFocused();
                const animationFrame = requestAnimationFrame(() => {
                  let tmp = ref;
                  if (ref) {
                    tmp = !ref.defaultPrevented;
                  }
                  if (tmp) {
                    tmp = null != ref.current;
                  }
                  if (tmp) {
                    const current = ref.current;
                    current.scrollToTop(!AccessibilityStore.useReducedMotion);
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
      const obj2 = require("BaseNavigationContainer");
    }
  : function useDrawerAwareScrollToTop(arg0) {
      _require = arg0;
      let navigation = require("BaseNavigationContainer").useNavigation();
      const items = [navigation, arg0];
      const effect = noop.useEffect(() => {
        c0 = -1;
        navigation = navigation.addListener("tabPress", (arg0) => {
          let timeout = arg0;
          if (null != obj.coerceGuildsRoute(navigation(11176)())) {
            if (-1 === timeout) {
              const _clearTimeout2 = clearTimeout;
              clearTimeout(timeout);
              const _setTimeout = setTimeout;
              timeout = setTimeout(() => {
                clearTimeout(c0);
                c0 = -1;
                focused.isFocused();
                const animationFrame = requestAnimationFrame(() => {
                  let tmp = ref;
                  if (ref) {
                    tmp = !ref.defaultPrevented;
                  }
                  if (tmp) {
                    tmp = null != ref.current;
                  }
                  if (tmp) {
                    const current = ref.current;
                    current.scrollToTop(!AccessibilityStore.useReducedMotion);
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
ReactCompilerGating = fn(558);
const memoResult = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function ChannelList(guild) {
        const cResult = gameClaimMarkAsDismissed(guildChannels[14]).c(113);
        ({ contentInset, gameClaimMarkAsDismissed } = guild);
        guild = guild.guild;
        guildChannels = guild.guildChannels;
        const selectedChannelId = guild.selectedChannelId;
        const selectedVoiceChannelId = guild.selectedVoiceChannelId;
        ({ style, applicationAccountLinkMarkAsDismissed } = guild);
        const startApplicationAccountLinkAuthorization = guild.startApplicationAccountLinkAuthorization;
        const accountLinkApplication = guild.accountLinkApplication;
        const favoritesSuggestionsNoticeHeight = guild.favoritesSuggestionsNoticeHeight;
        let obj = gameClaimMarkAsDismissed(guildChannels[14]);
        const categoryStyles = gameClaimMarkAsDismissed(guildChannels[19]).useCategoryStyles();
        const tmp6 = guild(guildChannels[20])(guild);
        const bannerHeight = tmp6.bannerHeight;
        const bannerWidth = tmp6.bannerWidth;
        const headerHeight = tmp6.headerHeight;
        const fontScale = tmp6.fontScale;
        ({ listTop, listViewportHeight } = tmp6);
        ({ listBottom, listPaddingBottom } = tmp6);
        let obj2 = gameClaimMarkAsDismissed(guildChannels[19]);
        let obj3 = accountLinkApplication;
        const tmp5 = guild;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { location: "Channel List" };
          cResult[0] = obj4;
          let first = obj4;
        } else {
          first = cResult[0];
        }
        const ref = accountLinkApplication.useRef(null);
        const config = tmp5(guildChannels[21]).useConfig(first);
        ({ list, drawDistance } = config);
        if (cResult[1] !== guildChannels) {
          class P {
            constructor() {
              obj = closure_0(closure_2[22]);
              result = obj.registerFastListChannelVisibilityMethod(closure_15, guildChannels);
              return;
            }
          }
          cResult[1] = guildChannels;
          cResult[2] = P;
        } else {
          class P {
            constructor() {
              obj = closure_0(closure_2[22]);
              result = obj.registerFastListChannelVisibilityMethod(closure_15, guildChannels);
              return;
            }
          }
        }
        if (cResult[3] === guildChannels) {
          class P {
            constructor() {
              obj = closure_0(closure_2[22]);
              result = obj.registerFastListChannelVisibilityMethod(closure_15, guildChannels);
              return;
            }
          }
          const effect = obj3.useEffect(P, items);
          if (cResult[6] !== guildChannels) {
            class P {
              constructor() {
                obj = closure_0(closure_2[22]);
                result = obj.registerFastListChannelVisibilityMethod(closure_15, guildChannels);
                return;
              }
            }
            let sections = guildChannels.getSections(false);
            cResult[6] = guildChannels;
            cResult[7] = sections;
            const tmp12 = sections;
          } else {
            class P {
              constructor() {
                obj = closure_0(closure_2[22]);
                result = obj.registerFastListChannelVisibilityMethod(closure_15, guildChannels);
                return;
              }
            }
          }
          sections = tmp12;
          const id = guild.id;
          if (cResult[8] !== id) {
            class P {
              constructor() {
                obj = closure_0(closure_2[22]);
                result = obj.registerFastListChannelVisibilityMethod(closure_15, guildChannels);
                return;
              }
            }
            tmp15[0] = id;
            cResult[8] = id;
            cResult[9] = tmp15;
          } else {
            class P {
              constructor() {
                obj = closure_0(closure_2[22]);
                result = obj.registerFastListChannelVisibilityMethod(closure_15, guildChannels);
                return;
              }
            }
          }
          gameClaimMarkAsDismissed(tmp2[23]).useExternalScrollEventHandler(tmp15);
          const tmpResult = gameClaimMarkAsDismissed(tmp2[23]);
          const _Symbol = Symbol;
          const isHomeDrawerEnabled = gameClaimMarkAsDismissed(tmp2[24]).useIsHomeDrawerEnabled();
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            class J {
              constructor() {
                state = bannerWidth.getState();
                noteInteractionResult = state.noteInteraction();
                return;
              }
            }
            cResult[10] = J;
          } else {
            class J {
              constructor() {
                state = bannerWidth.getState();
                noteInteractionResult = state.noteInteraction();
                return;
              }
            }
          }
          if (cResult[11] === guild) {
            class J {
              constructor() {
                state = bannerWidth.getState();
                noteInteractionResult = state.noteInteraction();
                return;
              }
            }
          }
          const fn = function q(fastList) {
            return collapsedCategories(ChannelsUnreadBarsDefault, { fastList, guildChannels, guild, headerHeight });
          };
          cResult[11] = guild;
          cResult[12] = guildChannels;
          cResult[13] = headerHeight;
          cResult[14] = fn;
          const tmpResult2 = gameClaimMarkAsDismissed(tmp2[24]);
        }
        items = [ref, guildChannels, list];
        cResult[3] = guildChannels;
        cResult[4] = list;
        cResult[5] = items;
        const tmp5Result = tmp5(guildChannels[21]);
      }
    : function ChannelList(gameClaimMarkAsDismissed) {
        gameClaimMarkAsDismissed = gameClaimMarkAsDismissed.gameClaimMarkAsDismissed;
        guild = gameClaimMarkAsDismissed.guild;
        const guildChannels = gameClaimMarkAsDismissed.guildChannels;
        const selectedChannelId = gameClaimMarkAsDismissed.selectedChannelId;
        const selectedVoiceChannelId = gameClaimMarkAsDismissed.selectedVoiceChannelId;
        const applicationAccountLinkMarkAsDismissed = gameClaimMarkAsDismissed.applicationAccountLinkMarkAsDismissed;
        const startApplicationAccountLinkAuthorization =
          gameClaimMarkAsDismissed.startApplicationAccountLinkAuthorization;
        const accountLinkApplication = gameClaimMarkAsDismissed.accountLinkApplication;
        const favoritesSuggestionsNoticeHeight = gameClaimMarkAsDismissed.favoritesSuggestionsNoticeHeight;
        let callback4;
        ({ contentInset, style } = gameClaimMarkAsDismissed);
        const categoryStyles = gameClaimMarkAsDismissed(guildChannels[19]).useCategoryStyles();
        const tmp5 = guild(guildChannels[20])(guild);
        const bannerHeight = tmp5.bannerHeight;
        const bannerWidth = tmp5.bannerWidth;
        const headerHeight = tmp5.headerHeight;
        const fontScale = tmp5.fontScale;
        const listViewportHeight = tmp5.listViewportHeight;
        ({ listTop, listBottom, listPaddingBottom } = tmp5);
        const ref = accountLinkApplication.useRef(null);
        let obj = gameClaimMarkAsDismissed(guildChannels[19]);
        const config = guild(guildChannels[21]).useConfig({ location: "Channel List" });
        const list = config.list;
        const items = [ref, guildChannels, list];
        const effect = accountLinkApplication.useEffect(() => {
          const result = registerSidebarVisibilityMethods.registerFastListChannelVisibilityMethod(ref, guildChannels);
        }, items);
        const sections = guildChannels.getSections(false);
        const id = guild.id;
        let obj2 = guild(guildChannels[21]);
        let obj3 = gameClaimMarkAsDismissed(guildChannels[23]);
        const externalScrollEventHandler = gameClaimMarkAsDismissed(guildChannels[23]).useExternalScrollEventHandler({
          id,
        });
        const isHomeDrawerEnabled = gameClaimMarkAsDismissed(guildChannels[24]).useIsHomeDrawerEnabled();
        const items1 = [guildChannels, guild, headerHeight];
        const callback = accountLinkApplication.useCallback(() => {
          const state = bannerWidth.getState();
          state.noteInteraction();
        }, []);
        const items2 = [guild, bannerHeight, bannerWidth];
        const callback1 = accountLinkApplication.useCallback(
          (fastList) =>
            collapsedCategories(ChannelsUnreadBarsDefault, { fastList, guildChannels, guild, headerHeight }),
          items1,
        );
        const callback2 = accountLinkApplication.useCallback(
          (scrollPosValue) =>
            collapsedCategories(
              RedesignGuildHeaderDefault,
              { guild, scrollPosition: scrollPosValue.scrollPosValue, bannerHeight, bannerWidth },
              guild.id,
            ),
          items2,
        );
        const callback3 = accountLinkApplication.useCallback(() => {
          const result = gameClaimMarkAsDismissed(guildChannels[27]).logChannelListEndReached();
        }, []);
        const obj4 = gameClaimMarkAsDismissed(guildChannels[24]);
        const recentlyActiveChannelsEnabled = gameClaimMarkAsDismissed(
          guildChannels[28],
        ).useRecentlyActiveChannelsEnabled();
        const obj5 = gameClaimMarkAsDismissed(guildChannels[28]);
        const items3 = [listViewportHeight];
        const items4 = [guild.id];
        const stateFromStores = gameClaimMarkAsDismissed(guildChannels[29]).useStateFromStores(
          items3,
          () => SortedVoiceStateStore.getVoiceStates(guild.id),
          items4,
        );
        const obj6 = gameClaimMarkAsDismissed(guildChannels[29]);
        const optInEnabledForGuild = gameClaimMarkAsDismissed(guildChannels[30]).useOptInEnabledForGuild(guild.id);
        const obj7 = gameClaimMarkAsDismissed(guildChannels[30]);
        const guildLiveChannelNoticeInfo = gameClaimMarkAsDismissed(guildChannels[31]).useGuildLiveChannelNoticeInfo(
          guild.id,
        );
        const obj8 = gameClaimMarkAsDismissed(guildChannels[31]);
        const scaledLiveChannelNoticeHeight = gameClaimMarkAsDismissed(
          guildChannels[32],
        ).getScaledLiveChannelNoticeHeight(fontScale, guildLiveChannelNoticeInfo);
        callback4(ref);
        const items5 = [guildChannels, sections];
        callback4 = accountLinkApplication.useCallback((arg0) => {
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
            tmp7 = !renderRedesignChannelListItem.getChannelListSectionHasFooterDivider(guildChannels, tmp2);
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
        const callback5 = accountLinkApplication.useCallback((section, row) => {
          const channelListItemSize = renderRedesignChannelListItem.getChannelListItemSize({
            guildChannels,
            section,
            row,
            fontScale,
            voiceStates: stateFromStores,
            liveChannelNoticeHeight: scaledLiveChannelNoticeHeight,
            favoritesSuggestionsNoticeHeight,
            listViewportHeight,
          });
          return roundToNearestPixelDefault(channelListItemSize);
        }, items6);
        const items8 = [guildChannels, fontScale, callback4];
        const callback6 = accountLinkApplication.useCallback((section, row) => {
          const obj = {
            children: renderRedesignChannelListItem.renderChannelListItem({
              guildChannels,
              section,
              row,
              selectedChannelId,
              guild,
              gameClaimMarkAsDismissed,
              applicationAccountLinkMarkAsDismissed,
              startApplicationAccountLinkAuthorization,
              accountLinkApplication,
            }),
          };
          return collapsedCategories(View, obj);
        }, items7);
        const items9 = [guildChannels, recentlyActiveChannelsEnabled, callback4, categoryStyles];
        const callback7 = accountLinkApplication.useCallback((section) => {
          const channelListSectionHeaderSize = renderRedesignChannelListItem.getChannelListSectionHeaderSize(
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
        const callback8 = accountLinkApplication.useCallback(
          (section) =>
            collapsedCategories(View, {
              children: renderRedesignChannelListItem.renderChannelListSectionHeader(
                guildChannels,
                section,
                recentlyActiveChannelsEnabled,
                callback4(section),
                categoryStyles,
              ),
            }),
          items9,
        );
        const items11 = [
          guildChannels,
          optInEnabledForGuild,
          stateFromStores,
          selectedChannelId,
          selectedVoiceChannelId,
        ];
        const callback9 = accountLinkApplication.useCallback((section) => {
          const result = renderRedesignChannelListItem.calculateVoiceSummary({
            guildChannels,
            section,
            optInChannelsEnabled: optInEnabledForGuild,
            voiceStates: stateFromStores,
            selectedChannelId,
            selectedVoiceChannelId,
          });
          const obj2 = {
            guildChannels,
            section,
            optInChannelsEnabled: optInEnabledForGuild,
            voiceStates: stateFromStores,
            selectedChannelId,
            selectedVoiceChannelId,
          };
          const channelListSectionFooterSize = renderRedesignChannelListItem.getChannelListSectionFooterSize(
            guildChannels,
            section,
            result,
          );
          return roundToNearestPixelDefault(channelListSectionFooterSize);
        }, items10);
        const items12 = [sections];
        const callback10 = accountLinkApplication.useCallback((section) => {
          const result = renderRedesignChannelListItem.calculateVoiceSummary({
            guildChannels,
            section,
            optInChannelsEnabled: optInEnabledForGuild,
            voiceStates: stateFromStores,
            selectedChannelId,
            selectedVoiceChannelId,
          });
          const obj2 = {
            guildChannels,
            section,
            optInChannelsEnabled: optInEnabledForGuild,
            voiceStates: stateFromStores,
            selectedChannelId,
            selectedVoiceChannelId,
          };
          return collapsedCategories(View, {
            children: renderRedesignChannelListItem.renderChannelListSectionFooter(guildChannels, section, ref, result),
          });
        }, items11);
        const items13 = [guildChannels];
        const memo = accountLinkApplication.useMemo(() => 0 === sections.reduce((acc, item) => acc + item, 0), items12);
        const callback11 = accountLinkApplication.useCallback(
          (arg0, arg1, arg2) => renderRedesignChannelListItem.getFastListRecyclerKey(guildChannels, arg0, arg1, arg2),
          items13,
        );
        const context = accountLinkApplication.useContext(guild(guildChannels[36]));
        const obj9 = gameClaimMarkAsDismissed(guildChannels[32]);
        const youBarTotalHeight = gameClaimMarkAsDismissed(guildChannels[37]).useYouBarTotalHeight(16);
        const obj10 = gameClaimMarkAsDismissed(guildChannels[37]);
        const obj12 = {
          endReachedThreshold: listBottom + listPaddingBottom,
          getItemSize: callback5,
          getRecyclerKey: callback11,
          getSectionFooterSize: callback9,
          getSectionHeaderSize: callback7,
          headerSize: listTop,
          initialScrollItem: null,
          initialScrollSection: null,
          insetEnd: null,
          listViewportHeight: null,
          onEndReached: null,
          onScroll: null,
          onScrollWorklet: null,
          renderAccessory: null,
          renderHeader: null,
          renderItem: null,
          renderSectionFooter: null,
          renderSectionHeader: null,
          scrollIndicatorInsetBottom: null,
          sections: null,
          waitFor: null,
        };
        const youBarTotalHeight1 = gameClaimMarkAsDismissed(guildChannels[37]).useYouBarTotalHeight(-16);
        const obj11 = gameClaimMarkAsDismissed(guildChannels[37]);
        let row;
        if (!obj13.isGameCommunityServerPreview(id)) {
          const first = startApplicationAccountLinkAuthorization(
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
        obj12.initialScrollItem = row;
        obj13 = gameClaimMarkAsDismissed(guildChannels[18]);
        let section;
        if (!tmpResult.isGameCommunityServerPreview(id)) {
          const first1 = startApplicationAccountLinkAuthorization(
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
        obj12.initialScrollSection = section;
        obj12.insetEnd = youBarTotalHeight;
        obj12.listViewportHeight = listViewportHeight;
        obj12.onEndReached = callback3;
        let tmp40;
        if (isHomeDrawerEnabled) {
          tmp40 = callback;
        }
        obj12.onScroll = tmp40;
        obj12.onScrollWorklet = externalScrollEventHandler;
        obj12.renderAccessory = callback1;
        obj12.renderHeader = callback2;
        obj12.renderItem = callback6;
        obj12.renderSectionFooter = callback10;
        obj12.renderSectionHeader = callback8;
        obj12.scrollIndicatorInsetBottom = youBarTotalHeight1;
        obj12.sections = sections;
        obj12.waitFor = context;
        const obj14 = { profile: null, children: null };
        tmpResult = gameClaimMarkAsDismissed(guildChannels[18]);
        obj14.profile = gameClaimMarkAsDismissed(guildChannels[42]).Profiles.Channels;
        const obj15 = { style, contentInset, children: null };
        const tmp43 = optInEnabledForGuild;
        const tmp4Result = guild(guildChannels[42]);
        const items14 = [stateFromStores(guild(guildChannels[38]), { guild })];
        if (memo) {
          const obj16 = { guild };
          let tmp41Result = tmp41(tmp4(tmp2[39]), obj16);
        } else {
          const obj17 = { ref, drawDistanceMode: config.drawDistance };
          const merged = Object.assign(obj12);
          tmp41Result = tmp41(tmp4("legend" === list ? tmp2[40] : tmp2[41]), obj17, guild.id);
          const tmp4Result4 = tmp4("legend" === list ? tmp2[40] : tmp2[41]);
        }
        const tmp4Result3 = guild(guildChannels[44]);
        items14[1] = tmp41Result;
        obj15.children = items14;
        obj14.children = stateFromStores(gameClaimMarkAsDismissed(guildChannels[43]).LayerScope, {
          children: tmp43(guild(guildChannels[44]), obj15),
        });
        return stateFromStores(tmp4Result, obj14);
      },
);
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildChannels(arg0) {
      const cResult = c.c(5);
      const shouldRenderChannelList = useShouldRenderChannelList.useShouldRenderChannelList();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { location: "GuildChannels" };
        cResult[0] = obj3;
        let first = obj3;
      } else {
        first = cResult[0];
      }
      const GuildsRenderExperiment = GuildsRenderExperiment2.GuildsRenderExperiment;
      const enabled = GuildsRenderExperiment.useConfig(first).enabled;
      if (cResult[1] === enabled) {
        if (cResult[2] === arg0) {
          if (cResult[3] === shouldRenderChannelList) {
            let tmp6 = cResult[4];
          }
          return tmp6;
        }
      }
      if (!enabled) {
        const obj4 = { shouldRender: shouldRenderChannelList };
        const merged = Object.assign(arg0);
        let tmp7 = collapsedCategories(closure_24, obj4);
      } else {
        tmp7 = null;
      }
      cResult[1] = enabled;
      cResult[2] = arg0;
      cResult[3] = shouldRenderChannelList;
      cResult[4] = tmp7;
      tmp6 = tmp7;
    }
  : function GuildChannels(arg0) {
      const shouldRenderChannelList = useShouldRenderChannelList.useShouldRenderChannelList();
      const GuildsRenderExperiment = GuildsRenderExperiment2.GuildsRenderExperiment;
      if (!GuildsRenderExperiment.useConfig({ location: "GuildChannels" }).enabled) {
        const obj2 = { shouldRender: shouldRenderChannelList };
        const merged = Object.assign(arg0);
        let tmp2 = collapsedCategories(closure_24, obj2);
      } else {
        tmp2 = null;
      }
      return tmp2;
    };
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildChannelsList(shouldRender) {
      const cResult = require("c").c(22);
      if (cResult[0] !== shouldRender) {
        shouldRender = shouldRender.shouldRender;
        const tmp8 = _objectWithoutProperties(shouldRender, closure_3);
        _require = tmp8;
        cResult[0] = shouldRender;
        cResult[1] = tmp8;
        cResult[2] = shouldRender;
        let tmp5 = shouldRender;
      } else {
        _require = cResult[1];
        tmp5 = cResult[2];
      }
      const arr = require("useGuildActionRows")(tmp4.guild);
      if (cResult[3] !== arr) {
        const hasItem = arr.includes(ChannelListGuildActionRow.GUILD_CONJURE);
        cResult[3] = arr;
        cResult[4] = hasItem;
        let tmp10 = hasItem;
      } else {
        tmp10 = cResult[4];
      }
      const obj = require("c");
      const tmp9 = importDefault;
      const isConjureMobileEnabled = require("ConjureMobileExperiment").useIsConjureMobileEnabled(
        tmp10,
        "RedesignChannelList",
      );
      if (cResult[5] === arr) {
        if (cResult[6] === tmp10) {
          if (cResult[7] === isConjureMobileEnabled) {
            let tmp14 = cResult[8];
          }
          importDefault = tmp14;
          const tmp16 = tmp9(tmp2[49])(tmp4.guild);
          rows = tmp16.rows;
          ({
            gameClaimMarkAsDismissed,
            applicationAccountLinkMarkAsDismissed,
            startApplicationAccountLinkAuthorization,
            accountLinkApplication,
          } = tmp16);
          const _Symbol = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const items = [ChannelListStore];
            cResult[9] = items;
            let tmp18 = items;
          } else {
            tmp18 = cResult[9];
          }
          if (cResult[10] === rows) {
            if (cResult[11] === tmp14) {
              if (cResult[12] === tmp4.guild.id) {
                let tmp20 = cResult[13];
              }
              const stateFromStoresObject = tmp(tmp2[29]).useStateFromStoresObject(tmp18, tmp20);
              ({ guildChannels, guildChannelsVersion } = stateFromStoresObject);
              if (!tmp5) {
                return null;
              } else {
                if (cResult[14] === accountLinkApplication) {
                  if (cResult[15] === applicationAccountLinkMarkAsDismissed) {
                    if (cResult[16] === gameClaimMarkAsDismissed) {
                      if (cResult[17] === guildChannels) {
                        if (cResult[18] === guildChannelsVersion) {
                          if (cResult[19] === tmp4) {
                          }
                        }
                      }
                    }
                  }
                }
                const obj2 = {};
                const merged = Object.assign(tmp4);
                obj2.guildChannels = guildChannels;
                obj2.guildChannelsVersion = guildChannelsVersion;
                obj2.gameClaimMarkAsDismissed = gameClaimMarkAsDismissed;
                obj2.applicationAccountLinkMarkAsDismissed = applicationAccountLinkMarkAsDismissed;
                obj2.startApplicationAccountLinkAuthorization = startApplicationAccountLinkAuthorization;
                obj2.accountLinkApplication = accountLinkApplication;
                const tmp29 = closure_18(closure_22, obj2);
                cResult[14] = accountLinkApplication;
                cResult[15] = applicationAccountLinkMarkAsDismissed;
                cResult[16] = gameClaimMarkAsDismissed;
                cResult[17] = guildChannels;
                cResult[18] = guildChannelsVersion;
                cResult[19] = tmp4;
                cResult[20] = startApplicationAccountLinkAuthorization;
                cResult[21] = tmp29;
              }
              const tmpResult2 = tmp(tmp2[29]);
            }
          }
          const fn = function p() {
            return ChannelListStore.getGuild(guild.guild.id, { guildActionRows, channelNoticeRows: rows });
          };
          cResult[10] = rows;
          cResult[11] = tmp14;
          cResult[12] = tmp4.guild.id;
          cResult[13] = fn;
          tmp20 = fn;
        }
      }
      let found = arr;
      if (tmp10) {
        found = arr;
        if (!isConjureMobileEnabled) {
          found = arr.filter((item) => item !== constants.GUILD_CONJURE);
        }
      }
      cResult[5] = arr;
      cResult[6] = tmp10;
      cResult[7] = isConjureMobileEnabled;
      cResult[8] = found;
      tmp14 = found;
      const tmpResult = require("ConjureMobileExperiment");
    }
  : function GuildChannelsList(shouldRender) {
      const merged = Object.assign(shouldRender, Object.assign({ shouldRender: 0 }));
      let found;
      dependencyMap = undefined;
      const arr = found(17733)(merged.guild);
      const hasItem = arr.includes(ChannelListGuildActionRow.GUILD_CONJURE);
      merged(9567);
      found = arr;
      if (hasItem) {
        found = arr;
        if (!tmp7) {
          found = arr.filter((item) => item !== constants.GUILD_CONJURE);
        }
      }
      ({
        rows: c2,
        gameClaimMarkAsDismissed,
        applicationAccountLinkMarkAsDismissed,
        startApplicationAccountLinkAuthorization,
        accountLinkApplication,
      } = found(17739)(merged.guild));
      const tmp9 = found(17739)(merged.guild);
      const items = [ChannelListStore];
      const stateFromStoresObject = merged(504).useStateFromStoresObject(items, () =>
        ChannelListStore.getGuild(merged.guild.id, { guildActionRows: found, channelNoticeRows }),
      );
      let tmp13 = null;
      if (shouldRender.shouldRender) {
        const obj = {};
        const merged1 = Object.assign(merged);
        obj.guildChannels = tmp11;
        obj.guildChannelsVersion = tmp12;
        obj.gameClaimMarkAsDismissed = gameClaimMarkAsDismissed;
        obj.applicationAccountLinkMarkAsDismissed = applicationAccountLinkMarkAsDismissed;
        obj.startApplicationAccountLinkAuthorization = startApplicationAccountLinkAuthorization;
        obj.accountLinkApplication = accountLinkApplication;
        tmp13 = closure_18(closure_22, obj);
      }
      return tmp13;
    };
ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelsWrapper(selectedGuildId) {
      const cResult = require("c").c(28);
      if (cResult[0] !== selectedGuildId) {
        selectedGuildId = selectedGuildId.selectedGuildId;
        _require = selectedGuildId;
        const selectedChannelId = selectedGuildId.selectedChannelId;
        const tmp9 = _objectWithoutProperties(selectedGuildId, closure_4);
        cResult[0] = selectedGuildId;
        cResult[1] = tmp9;
        cResult[2] = selectedChannelId;
        cResult[3] = selectedGuildId;
        let tmp5 = selectedChannelId;
        let tmp4 = tmp9;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        _require = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[4] = items;
        let tmp10 = items;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] !== tmp6) {
        const fn = function u() {
          return GuildStore.getGuild(closure_0);
        };
        cResult[5] = tmp6;
        cResult[6] = fn;
        let tmp12 = fn;
      } else {
        tmp12 = cResult[6];
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(tmp10, tmp12);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [SelectedChannelStore];
        class I {
          constructor() {
            return closure_1_13.getVoiceChannelId();
          }
        }
        cResult[7] = items1;
        cResult[8] = I;
        let tmp15 = I;
        let tmp14 = items1;
      } else {
        tmp14 = cResult[7];
        tmp15 = cResult[8];
      }
      const tmpResult = require("initialize");
      const stateFromStores1 = require("initialize").useStateFromStores(tmp14, tmp15);
      if (tmp6 === closure_16) {
        if (cResult[9] !== tmp4.style) {
          class I {
            constructor() {
              return closure_1_13.getVoiceChannelId();
            }
          }
          const tmp47 = closure_18(GuildUpsellChannelListDefault, { style: null });
          cResult[9] = tmp4.style;
          cResult[10] = tmp47;
          let tmp44 = tmp47;
          const obj2 = { style: null };
        } else {
          tmp44 = cResult[10];
        }
        return tmp44;
      } else {
        if (null != stateFromStores) {
          if (tmp6 !== closure_15) {
            if (tmpResult6.isFavoritesGuildId(tmp6)) {
              const _Symbol = Symbol;
              if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                cResult[14] = tmp(17761);
                class I {
                  constructor() {
                    return closure_1_13.getVoiceChannelId();
                  }
                }
                const tmpResult7 = tmp(17761);
              }
              class I {
                constructor() {
                  return closure_1_13.getVoiceChannelId();
                }
              }
              if (cResult[15] === stateFromStores) {
                if (cResult[16] === tmp4) {
                  if (cResult[17] === tmp5) {
                    if (cResult[18] === stateFromStores1) {
                      let tmp35 = cResult[19];
                    }
                    return tmp35;
                  }
                }
              }
              const obj3 = {};
              const merged = Object.assign(tmp4);
              obj3.guild = stateFromStores;
              obj3.selectedChannelId = tmp5;
              obj3.selectedVoiceChannelId = stateFromStores1;
              const tmp40 = closure_18(tmp34, obj3);
              cResult[15] = stateFromStores;
              cResult[16] = tmp4;
              cResult[17] = tmp5;
              cResult[18] = stateFromStores1;
              cResult[19] = tmp40;
              tmp35 = tmp40;
            } else {
              if (tmpResult8.shouldNSFWGateGuild(tmp6)) {
                if (cResult[20] === tmp4.style) {
                }
                class I {
                  constructor() {
                    return closure_1_13.getVoiceChannelId();
                  }
                }
                tmp29[0] = tmp4.style;
                tmp29[1] = tmp6;
                const tmp30 = closure_18(NsfwGateGuildSidebarDefault, tmp29);
                cResult[20] = tmp4.style;
                cResult[21] = tmp6;
                cResult[22] = tmp30;
              } else {
                if (cResult[23] === stateFromStores) {
                  if (cResult[24] === tmp4) {
                    if (cResult[25] === tmp5) {
                      if (cResult[26] === stateFromStores1) {
                        let tmp18 = cResult[27];
                      }
                      return tmp18;
                    }
                  }
                }
                class I {
                  constructor() {
                    return closure_1_13.getVoiceChannelId();
                  }
                }
                const merged1 = Object.assign(tmp4);
                tmp21.guild = stateFromStores;
                tmp21.selectedChannelId = tmp5;
                tmp21.selectedVoiceChannelId = stateFromStores1;
                const tmp25 = closure_18(closure_23, tmp21);
                cResult[23] = stateFromStores;
                cResult[24] = tmp4;
                cResult[25] = tmp5;
                cResult[26] = stateFromStores1;
                cResult[27] = tmp25;
                tmp18 = tmp25;
              }
              tmpResult8 = tmp(9860);
            }
            tmpResult6 = tmp(4849);
          }
        }
        if (cResult[11] === tmp4.style) {
          if (cResult[12] === tmp6) {
            let tmp41 = cResult[13];
          }
          return tmp41;
        }
        class I {
          constructor() {
            return closure_1_13.getVoiceChannelId();
          }
        }
        const obj4 = { style: tmp4.style, selectedGuildId: tmp6 };
        const tmp43 = closure_18(GuildsEmptyDefault, obj4);
        cResult[11] = tmp4.style;
        cResult[12] = tmp6;
        cResult[13] = tmp43;
        tmp41 = tmp43;
      }
      const tmpResult5 = require("initialize");
    }
  : function ChannelsWrapper(selectedGuildId) {
      selectedGuildId = selectedGuildId.selectedGuildId;
      const selectedChannelId = selectedGuildId.selectedChannelId;
      const merged = Object.assign(selectedGuildId, Object.assign({ selectedGuildId: 0, selectedChannelId: 0 }));
      const items = [GuildStore];
      const stateFromStores = selectedGuildId(504).useStateFromStores(items, () =>
        GuildStore.getGuild(selectedGuildId),
      );
      const obj = selectedGuildId(504);
      const items1 = [SelectedChannelStore];
      const stateFromStores1 = selectedGuildId(504).useStateFromStores(items1, () =>
        voiceChannelId.getVoiceChannelId(),
      );
      if (selectedGuildId === closure_16) {
        const obj3 = { style: merged.style };
        return closure_18(GuildUpsellChannelListDefault, obj3);
      } else {
        if (null != stateFromStores) {
          if (selectedGuildId !== closure_15) {
            if (tmp2Result.isFavoritesGuildId(selectedGuildId)) {
              const obj4 = {};
              const merged1 = Object.assign(merged);
              obj4.guild = stateFromStores;
              obj4.selectedChannelId = selectedChannelId;
              obj4.selectedVoiceChannelId = stateFromStores1;
              return closure_18(tmp2(17761).default, obj4);
            } else {
              if (tmp2Result2.shouldNSFWGateGuild(selectedGuildId)) {
                const obj5 = { style: merged.style, guildId: selectedGuildId };
                let tmp6Result = closure_18(NsfwGateGuildSidebarDefault, obj5);
              } else {
                const obj6 = {};
                const merged2 = Object.assign(merged);
                obj6.guild = stateFromStores;
                obj6.selectedChannelId = selectedChannelId;
                obj6.selectedVoiceChannelId = stateFromStores1;
                tmp6Result = closure_18(closure_23, obj6);
              }
              return tmp6Result;
            }
            tmp2Result = tmp2(4849);
          }
        }
        const obj7 = { style: merged.style, selectedGuildId };
        return closure_18(GuildsEmptyDefault, obj7);
      }
      const obj2 = selectedGuildId(504);
    };
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/RedesignChannelList.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function ChannelsWithInstrumentation(arg0) {
        const cResult = c.c(7);
        const doesLandOnHomeDrawer = useHomeDrawerGesture.useDoesLandOnHomeDrawer();
        if (cResult[0] !== arg0) {
          const obj3 = {};
          const merged = Object.assign(arg0);
          const tmp11 = collapsedCategories(closure_25, obj3);
          cResult[0] = arg0;
          cResult[1] = tmp11;
          let tmp5 = tmp11;
        } else {
          tmp5 = cResult[1];
        }
        if (cResult[2] !== doesLandOnHomeDrawer) {
          let tmp13 = null;
          if (!doesLandOnHomeDrawer) {
            tmp13 = collapsedCategories(TTIFirstContentfulPaint.TTIFirstContentfulPaint, {
              label: "channel-list",
              checkFocusedScreen: "guilds",
            });
          }
          cResult[2] = doesLandOnHomeDrawer;
          cResult[3] = tmp13;
          let tmp12 = tmp13;
        } else {
          tmp12 = cResult[3];
        }
        if (cResult[4] === tmp5) {
          if (cResult[5] === tmp12) {
            let tmp15 = cResult[6];
          }
          return tmp15;
        }
        const obj4 = { children: null };
        const items = [tmp5, tmp12];
        obj4.children = items;
        const tmp16 = closure_1_19(closure_1_20, obj4);
        cResult[4] = tmp5;
        cResult[5] = tmp12;
        cResult[6] = tmp16;
        tmp15 = tmp16;
      }
    : function ChannelsWithInstrumentation(arg0) {
        const doesLandOnHomeDrawer = useHomeDrawerGesture.useDoesLandOnHomeDrawer();
        const merged = Object.assign(arg0);
        const children = [collapsedCategories(closure_25, {})];
        let tmp6Result = null;
        if (!doesLandOnHomeDrawer) {
          tmp6Result = collapsedCategories(TTIFirstContentfulPaint.TTIFirstContentfulPaint, {
            label: "channel-list",
            checkFocusedScreen: "guilds",
          });
        }
        children[1] = tmp6Result;
        return closure_1_19(closure_1_20, { children });
      },
);
export const ChannelList = memoResult;
