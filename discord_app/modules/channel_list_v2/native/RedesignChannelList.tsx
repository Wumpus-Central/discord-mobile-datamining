// === Module 17427: RedesignChannelList ===

// Module 17427 (RedesignChannelList)
import c from "c" /* 576 */;
import ChannelListState from "ChannelListState" /* 7621 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 12014 */;
import TTIFirstContentfulPaint from "TTIFirstContentfulPaint" /* 12775 */;
import GuildsRenderExperiment2 from "GuildsRenderExperiment" /* 17339 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 17346 */;
import RedesignGuildHeaderDefault from "RedesignGuildHeader" /* 17457 */;
import registerSidebarVisibilityMethods from "registerSidebarVisibilityMethods" /* 17506 */;
import ChannelsUnreadBarsDefault from "ChannelsUnreadBars" /* 17507 */;
import renderRedesignChannelListItem from "renderRedesignChannelListItem" /* 17515 */;
import useShouldRenderChannelList from "useShouldRenderChannelList" /* 17588 */;
import GuildUpsellChannelListDefault from "GuildUpsellChannelList" /* 17599 */;
import GuildsEmptyDefault from "GuildsEmpty" /* 17612 */;
import NsfwGateGuildSidebarDefault from "NsfwGateGuildSidebar" /* 17625 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4970 */;
import ChannelListStore from "ChannelListStore" /* 7619 */;
import HomeDrawerStore from "HomeDrawerStore" /* 17341 */;
import GuildStore from "GuildStore" /* 4843 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4872 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 5703 */;

require = fn;
let closure_3 = ["shouldRender"];
let closure_4 = ["selectedGuildId", "selectedChannelId"];
const View = fn(17).View;
const Constants = fn(1087);
({ EMPTY_NUX_SERVER: closure_15, MOBILE_GUILD_UPSELL_LIST: closure_16 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18, Fragment: closure_19 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDrawerAwareScrollToTop(arg0) {
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
      if (null != obj.coerceGuildsRoute(navigation(11136)())) {
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
}) : (function useDrawerAwareScrollToTop(arg0) {
  _require = arg0;
  let navigation = require("BaseNavigationContainer").useNavigation();
  const items = [navigation, arg0];
  const effect = noop.useEffect(() => {
    c0 = -1;
    navigation = navigation.addListener("tabPress", (arg0) => {
      let timeout = arg0;
      if (null != obj.coerceGuildsRoute(navigation(11136)())) {
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
});
ReactCompilerGating = fn(558);
const memoResult = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelList(guild) {
  const cResult = gameClaimMarkAsDismissed(guildChannels[13]).c(112);
  ({ contentInset, gameClaimMarkAsDismissed } = guild);
  guild = guild.guild;
  guildChannels = guild.guildChannels;
  const selectedChannelId = guild.selectedChannelId;
  const selectedVoiceChannelId = guild.selectedVoiceChannelId;
  ({ style, applicationAccountLinkMarkAsDismissed } = guild);
  const startApplicationAccountLinkAuthorization = guild.startApplicationAccountLinkAuthorization;
  const accountLinkApplication = guild.accountLinkApplication;
  const favoritesSuggestionsNoticeHeight = guild.favoritesSuggestionsNoticeHeight;
  let obj = gameClaimMarkAsDismissed(guildChannels[13]);
  const categoryStyles = gameClaimMarkAsDismissed(guildChannels[18]).useCategoryStyles();
  const tmp6 = guild(guildChannels[19])(guild);
  const bannerHeight = tmp6.bannerHeight;
  const bannerWidth = tmp6.bannerWidth;
  const headerHeight = tmp6.headerHeight;
  const fontScale = tmp6.fontScale;
  ({ listTop, listViewportHeight } = tmp6);
  ({ listBottom, listPaddingBottom } = tmp6);
  let obj2 = gameClaimMarkAsDismissed(guildChannels[18]);
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
  const list = tmp5(guildChannels[20]).useConfig(first).list;
  if (cResult[1] !== guildChannels) {
    class P {
      constructor() {
        obj = closure_0(closure_2[21]);
        result = obj.registerFastListChannelVisibilityMethod(closure_15, guildChannels);
        return;
      }
    }
    cResult[1] = guildChannels;
    cResult[2] = P;
  } else {
    class P {
      constructor() {
        obj = closure_0(closure_2[21]);
        result = obj.registerFastListChannelVisibilityMethod(closure_15, guildChannels);
        return;
      }
    }
  }
  if (cResult[3] === guildChannels) {
    class P {
      constructor() {
        obj = closure_0(closure_2[21]);
        result = obj.registerFastListChannelVisibilityMethod(closure_15, guildChannels);
        return;
      }
    }
    const effect = obj3.useEffect(P, items);
    if (cResult[6] !== guildChannels) {
      class P {
        constructor() {
          obj = closure_0(closure_2[21]);
          result = obj.registerFastListChannelVisibilityMethod(closure_15, guildChannels);
          return;
        }
      }
      let sections = guildChannels.getSections(false);
      cResult[6] = guildChannels;
      cResult[7] = sections;
      const tmp11 = sections;
    } else {
      class P {
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
      class P {
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
      class P {
        constructor() {
          obj = closure_0(closure_2[21]);
          result = obj.registerFastListChannelVisibilityMethod(closure_15, guildChannels);
          return;
        }
      }
    }
    gameClaimMarkAsDismissed(tmp2[22]).useExternalScrollEventHandler(tmp14);
    const tmpResult = gameClaimMarkAsDismissed(tmp2[22]);
    const _Symbol = Symbol;
    const isHomeDrawerEnabled = gameClaimMarkAsDismissed(tmp2[23]).useIsHomeDrawerEnabled();
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class P {
        constructor() {
          obj = closure_0(closure_2[21]);
          result = obj.registerFastListChannelVisibilityMethod(closure_15, guildChannels);
          return;
        }
      }
      cResult[10] = tmp18;
    } else {
      class P {
        constructor() {
          obj = closure_0(closure_2[21]);
          result = obj.registerFastListChannelVisibilityMethod(closure_15, guildChannels);
          return;
        }
      }
    }
    if (cResult[11] === guild) {
      class P {
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
    const tmpResult2 = gameClaimMarkAsDismissed(tmp2[23]);
  }
  items = [ref, guildChannels, list];
  cResult[3] = guildChannels;
  cResult[4] = list;
  cResult[5] = items;
  const tmp5Result = tmp5(guildChannels[20]);
}) : (function ChannelList(gameClaimMarkAsDismissed) {
  gameClaimMarkAsDismissed = gameClaimMarkAsDismissed.gameClaimMarkAsDismissed;
  guild = gameClaimMarkAsDismissed.guild;
  const guildChannels = gameClaimMarkAsDismissed.guildChannels;
  const selectedChannelId = gameClaimMarkAsDismissed.selectedChannelId;
  const selectedVoiceChannelId = gameClaimMarkAsDismissed.selectedVoiceChannelId;
  const applicationAccountLinkMarkAsDismissed = gameClaimMarkAsDismissed.applicationAccountLinkMarkAsDismissed;
  const startApplicationAccountLinkAuthorization = gameClaimMarkAsDismissed.startApplicationAccountLinkAuthorization;
  const accountLinkApplication = gameClaimMarkAsDismissed.accountLinkApplication;
  const favoritesSuggestionsNoticeHeight = gameClaimMarkAsDismissed.favoritesSuggestionsNoticeHeight;
  ({ contentInset, style } = gameClaimMarkAsDismissed);
  const categoryStyles = gameClaimMarkAsDismissed(guildChannels[18]).useCategoryStyles();
  const tmp5 = guild(guildChannels[19])(guild);
  const bannerHeight = tmp5.bannerHeight;
  const bannerWidth = tmp5.bannerWidth;
  const headerHeight = tmp5.headerHeight;
  const fontScale = tmp5.fontScale;
  const listViewportHeight = tmp5.listViewportHeight;
  ({ listTop, listBottom, listPaddingBottom } = tmp5);
  const ref = accountLinkApplication.useRef(null);
  let obj = gameClaimMarkAsDismissed(guildChannels[18]);
  const list = guild(guildChannels[20]).useConfig({ location: "Channel List" }).list;
  const items = [ref, guildChannels, list];
  const effect = accountLinkApplication.useEffect(() => {
    const result = registerSidebarVisibilityMethods.registerFastListChannelVisibilityMethod(ref, guildChannels);
  }, items);
  const sections = guildChannels.getSections(false);
  const id = guild.id;
  let obj2 = guild(guildChannels[20]);
  let obj3 = gameClaimMarkAsDismissed(guildChannels[22]);
  const externalScrollEventHandler = gameClaimMarkAsDismissed(guildChannels[22]).useExternalScrollEventHandler({ id });
  const isHomeDrawerEnabled = gameClaimMarkAsDismissed(guildChannels[23]).useIsHomeDrawerEnabled();
  const items1 = [guildChannels, guild, headerHeight];
  const callback = accountLinkApplication.useCallback(() => {
    const state = bannerWidth.getState();
    state.noteInteraction();
  }, []);
  const items2 = [guild, bannerHeight, bannerWidth];
  const callback1 = accountLinkApplication.useCallback((fastList) => constants(ChannelsUnreadBarsDefault, { fastList, guildChannels, guild, headerHeight }), items1);
  const callback2 = accountLinkApplication.useCallback((scrollPosValue) => constants(RedesignGuildHeaderDefault, { guild, scrollPosition: scrollPosValue.scrollPosValue, bannerHeight, bannerWidth }, guild.id), items2);
  const callback3 = accountLinkApplication.useCallback(() => {
    const result = gameClaimMarkAsDismissed(guildChannels[26]).logChannelListEndReached();
  }, []);
  const obj4 = gameClaimMarkAsDismissed(guildChannels[23]);
  const recentlyActiveChannelsEnabled = gameClaimMarkAsDismissed(guildChannels[27]).useRecentlyActiveChannelsEnabled();
  const obj5 = gameClaimMarkAsDismissed(guildChannels[27]);
  const items3 = [listViewportHeight];
  const items4 = [guild.id];
  const stateFromStores = gameClaimMarkAsDismissed(guildChannels[28]).useStateFromStores(items3, () => SortedVoiceStateStore.getVoiceStates(guild.id), items4);
  const obj6 = gameClaimMarkAsDismissed(guildChannels[28]);
  const optInEnabledForGuild = gameClaimMarkAsDismissed(guildChannels[29]).useOptInEnabledForGuild(guild.id);
  const obj7 = gameClaimMarkAsDismissed(guildChannels[29]);
  const guildLiveChannelNoticeInfo = gameClaimMarkAsDismissed(guildChannels[30]).useGuildLiveChannelNoticeInfo(guild.id);
  const obj8 = gameClaimMarkAsDismissed(guildChannels[30]);
  const scaledLiveChannelNoticeHeight = gameClaimMarkAsDismissed(guildChannels[31]).getScaledLiveChannelNoticeHeight(fontScale, guildLiveChannelNoticeInfo);
  scaledLiveChannelNoticeHeight(ref);
  const items5 = [guildChannels, sections];
  const callback4 = accountLinkApplication.useCallback((arg0) => {
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
  const items6 = [guildChannels, fontScale, stateFromStores, scaledLiveChannelNoticeHeight, favoritesSuggestionsNoticeHeight, listViewportHeight];
  const items7 = [guildChannels, selectedChannelId, guild, gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication];
  const callback5 = accountLinkApplication.useCallback((section, row) => {
    const channelListItemSize = renderRedesignChannelListItem.getChannelListItemSize({ guildChannels, section, row, fontScale, voiceStates: stateFromStores, liveChannelNoticeHeight: scaledLiveChannelNoticeHeight, favoritesSuggestionsNoticeHeight, listViewportHeight });
    return roundToNearestPixelDefault(channelListItemSize);
  }, items6);
  const items8 = [guildChannels, fontScale, callback4];
  const callback6 = accountLinkApplication.useCallback((section, row) => {
    const obj = { children: renderRedesignChannelListItem.renderChannelListItem({ guildChannels, section, row, selectedChannelId, guild, gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication }) };
    return constants(View, obj);
  }, items7);
  const items9 = [guildChannels, recentlyActiveChannelsEnabled, callback4, categoryStyles];
  const callback7 = accountLinkApplication.useCallback((section) => {
    const channelListSectionHeaderSize = renderRedesignChannelListItem.getChannelListSectionHeaderSize(guildChannels, section, fontScale, callback4(section));
    return roundToNearestPixelDefault(channelListSectionHeaderSize);
  }, items8);
  const items10 = [guildChannels, optInEnabledForGuild, stateFromStores, selectedChannelId, selectedVoiceChannelId];
  const callback8 = accountLinkApplication.useCallback((section) => constants(View, { children: renderRedesignChannelListItem.renderChannelListSectionHeader(guildChannels, section, recentlyActiveChannelsEnabled, callback4(section), categoryStyles) }), items9);
  const items11 = [guildChannels, optInEnabledForGuild, stateFromStores, selectedChannelId, selectedVoiceChannelId];
  const callback9 = accountLinkApplication.useCallback((section) => {
    const result = renderRedesignChannelListItem.calculateVoiceSummary({ guildChannels, section, optInChannelsEnabled: optInEnabledForGuild, voiceStates: stateFromStores, selectedChannelId, selectedVoiceChannelId });
    const obj2 = { guildChannels, section, optInChannelsEnabled: optInEnabledForGuild, voiceStates: stateFromStores, selectedChannelId, selectedVoiceChannelId };
    const channelListSectionFooterSize = renderRedesignChannelListItem.getChannelListSectionFooterSize(guildChannels, section, result);
    return roundToNearestPixelDefault(channelListSectionFooterSize);
  }, items10);
  const items12 = [sections];
  const callback10 = accountLinkApplication.useCallback((section) => {
    const result = renderRedesignChannelListItem.calculateVoiceSummary({ guildChannels, section, optInChannelsEnabled: optInEnabledForGuild, voiceStates: stateFromStores, selectedChannelId, selectedVoiceChannelId });
    const obj2 = { guildChannels, section, optInChannelsEnabled: optInEnabledForGuild, voiceStates: stateFromStores, selectedChannelId, selectedVoiceChannelId };
    return constants(View, { children: renderRedesignChannelListItem.renderChannelListSectionFooter(guildChannels, section, ref, result) });
  }, items11);
  const items13 = [guildChannels];
  const memo = accountLinkApplication.useMemo(() => 0 === sections.reduce((acc, item) => acc + item, 0), items12);
  const callback11 = accountLinkApplication.useCallback((arg0, arg1, arg2) => renderRedesignChannelListItem.getFastListRecyclerKey(guildChannels, arg0, arg1, arg2), items13);
  const context = accountLinkApplication.useContext(guild(guildChannels[35]));
  const obj9 = gameClaimMarkAsDismissed(guildChannels[31]);
  const youBarTotalHeight = gameClaimMarkAsDismissed(guildChannels[36]).useYouBarTotalHeight(16);
  const obj10 = gameClaimMarkAsDismissed(guildChannels[36]);
  const obj12 = { endReachedThreshold: listBottom + listPaddingBottom, getItemSize: callback5, getRecyclerKey: callback11, getSectionFooterSize: callback9, getSectionHeaderSize: callback7, headerSize: listTop, initialScrollItem: null, initialScrollSection: null, insetEnd: null, listViewportHeight: null, onEndReached: null, onScroll: null, onScrollWorklet: null, renderAccessory: null, renderHeader: null, renderItem: null, renderSectionFooter: null, renderSectionHeader: null, scrollIndicatorInsetBottom: null, sections: null, waitFor: null };
  const youBarTotalHeight1 = gameClaimMarkAsDismissed(guildChannels[36]).useYouBarTotalHeight(-16);
  const obj11 = gameClaimMarkAsDismissed(guildChannels[36]);
  let row;
  if (!obj13.isGameCommunityServerPreview(id)) {
    const first = startApplicationAccountLinkAuthorization(guildChannels.getSectionRowsFromChannel(selectedChannelId), 1)[0];
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
  obj13 = gameClaimMarkAsDismissed(guildChannels[17]);
  let section;
  if (!tmpResult.isGameCommunityServerPreview(id)) {
    const first1 = startApplicationAccountLinkAuthorization(guildChannels.getSectionRowsFromChannel(selectedChannelId), 1)[0];
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
  let tmp39;
  if (isHomeDrawerEnabled) {
    tmp39 = callback;
  }
  obj12.onScroll = tmp39;
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
  tmpResult = gameClaimMarkAsDismissed(guildChannels[17]);
  obj14.profile = gameClaimMarkAsDismissed(guildChannels[41]).Profiles.Channels;
  const obj15 = { style, contentInset, children: null };
  const tmp42 = stateFromStores;
  const tmp4Result = guild(guildChannels[41]);
  const items14 = [recentlyActiveChannelsEnabled(guild(guildChannels[37]), { guild }), ];
  if (memo) {
    const obj16 = { guild };
    let tmp40Result = tmp40(tmp4(tmp2[38]), obj16);
  } else {
    const obj17 = { ref };
    const merged = Object.assign(obj12);
    tmp40Result = tmp40(tmp4("legend" === list ? tmp2[39] : tmp2[40]), obj17, guild.id);
    const tmp4Result4 = tmp4("legend" === list ? tmp2[39] : tmp2[40]);
  }
  const tmp4Result3 = guild(guildChannels[43]);
  items14[1] = tmp40Result;
  obj15.children = items14;
  obj14.children = recentlyActiveChannelsEnabled(gameClaimMarkAsDismissed(guildChannels[42]).LayerScope, { children: tmp42(guild(guildChannels[43]), obj15) });
  return recentlyActiveChannelsEnabled(tmp4Result, obj14);
}));
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildChannels(arg0) {
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
    let tmp7 = constants(closure_23, obj4);
  } else {
    tmp7 = null;
  }
  cResult[1] = enabled;
  cResult[2] = arg0;
  cResult[3] = shouldRenderChannelList;
  cResult[4] = tmp7;
  tmp6 = tmp7;
}) : (function GuildChannels(arg0) {
  const shouldRenderChannelList = useShouldRenderChannelList.useShouldRenderChannelList();
  const GuildsRenderExperiment = GuildsRenderExperiment2.GuildsRenderExperiment;
  if (!GuildsRenderExperiment.useConfig({ location: "GuildChannels" }).enabled) {
    const obj2 = { shouldRender: shouldRenderChannelList };
    const merged = Object.assign(arg0);
    let tmp2 = constants(closure_23, obj2);
  } else {
    tmp2 = null;
  }
  return tmp2;
});
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildChannelsList(shouldRender) {
  const cResult = require("c").c(16);
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
  const tmp9 = require("useGuildActionRows")(tmp4.guild);
  importDefault = tmp9;
  const tmp10 = require("useChannelNoticeRows")(tmp4.guild);
  rows = tmp10.rows;
  ({ gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication } = tmp10);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelListStore];
    cResult[3] = items;
    let tmp11 = items;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === rows) {
    if (cResult[5] === tmp9) {
      if (cResult[6] === tmp4.guild.id) {
        let tmp13 = cResult[7];
      }
      const stateFromStoresObject = tmp(tmp2[28]).useStateFromStoresObject(tmp11, tmp13);
      ({ guildChannels, guildChannelsVersion } = stateFromStoresObject);
      if (!tmp5) {
        return null;
      } else {
        if (cResult[8] === accountLinkApplication) {
          if (cResult[9] === applicationAccountLinkMarkAsDismissed) {
            if (cResult[10] === gameClaimMarkAsDismissed) {
              if (cResult[11] === guildChannels) {
                if (cResult[12] === guildChannelsVersion) {
                  if (cResult[13] === tmp4) {
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
        const tmp22 = closure_17(closure_21, obj2);
        cResult[8] = accountLinkApplication;
        cResult[9] = applicationAccountLinkMarkAsDismissed;
        cResult[10] = gameClaimMarkAsDismissed;
        cResult[11] = guildChannels;
        cResult[12] = guildChannelsVersion;
        cResult[13] = tmp4;
        cResult[14] = startApplicationAccountLinkAuthorization;
        cResult[15] = tmp22;
      }
      const tmpResult = tmp(tmp2[28]);
    }
  }
  const fn = function h() {
    return ChannelListStore.getGuild(guild.guild.id, { guildActionRows, channelNoticeRows: rows });
  };
  cResult[4] = rows;
  cResult[5] = tmp9;
  cResult[6] = tmp4.guild.id;
  cResult[7] = fn;
  tmp13 = fn;
  const obj = require("c");
  tmp = _require;
}) : (function GuildChannelsList(shouldRender) {
  let tmp = null;
  const merged = Object.assign(shouldRender, Object.assign({ shouldRender: 0 }));
  importDefault = undefined;
  let rows;
  importDefault = require("useGuildActionRows")(merged.guild);
  const tmp3 = require("useChannelNoticeRows")(merged.guild);
  rows = tmp3.rows;
  ({ gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication } = tmp3);
  const items = [ChannelListStore];
  const stateFromStoresObject = merged(rows[28]).useStateFromStoresObject(items, () => ChannelListStore.getGuild(merged.guild.id, { guildActionRows, channelNoticeRows: rows }));
  if (shouldRender.shouldRender) {
    const obj2 = {};
    const merged1 = Object.assign(merged);
    obj2.guildChannels = tmp5;
    obj2.guildChannelsVersion = tmp6;
    obj2.gameClaimMarkAsDismissed = gameClaimMarkAsDismissed;
    obj2.applicationAccountLinkMarkAsDismissed = applicationAccountLinkMarkAsDismissed;
    obj2.startApplicationAccountLinkAuthorization = startApplicationAccountLinkAuthorization;
    obj2.accountLinkApplication = accountLinkApplication;
    tmp = closure_17(closure_21, obj2);
  }
  return tmp;
});
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelsWrapper(selectedGuildId) {
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
      const tmp47 = closure_17(GuildUpsellChannelListDefault, { style: null });
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
            cResult[14] = tmp(17617);
            class I {
              constructor() {
                return closure_1_13.getVoiceChannelId();
              }
            }
            const tmpResult7 = tmp(17617);
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
          const tmp40 = closure_17(tmp34, obj3);
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
            const tmp30 = closure_17(NsfwGateGuildSidebarDefault, tmp29);
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
            const tmp25 = closure_17(closure_22, tmp21);
            cResult[23] = stateFromStores;
            cResult[24] = tmp4;
            cResult[25] = tmp5;
            cResult[26] = stateFromStores1;
            cResult[27] = tmp25;
            tmp18 = tmp25;
          }
          tmpResult8 = tmp(9828);
        }
        tmpResult6 = tmp(4846);
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
    const tmp43 = closure_17(GuildsEmptyDefault, obj4);
    cResult[11] = tmp4.style;
    cResult[12] = tmp6;
    cResult[13] = tmp43;
    tmp41 = tmp43;
  }
  const tmpResult5 = require("initialize");
}) : (function ChannelsWrapper(selectedGuildId) {
  selectedGuildId = selectedGuildId.selectedGuildId;
  const selectedChannelId = selectedGuildId.selectedChannelId;
  const merged = Object.assign(selectedGuildId, Object.assign({ selectedGuildId: 0, selectedChannelId: 0 }));
  const items = [GuildStore];
  const stateFromStores = selectedGuildId(504).useStateFromStores(items, () => GuildStore.getGuild(selectedGuildId));
  const obj = selectedGuildId(504);
  const items1 = [SelectedChannelStore];
  const stateFromStores1 = selectedGuildId(504).useStateFromStores(items1, () => voiceChannelId.getVoiceChannelId());
  if (selectedGuildId === closure_16) {
    const obj3 = { style: merged.style };
    return closure_17(GuildUpsellChannelListDefault, obj3);
  } else {
    if (null != stateFromStores) {
      if (selectedGuildId !== closure_15) {
        if (tmp2Result.isFavoritesGuildId(selectedGuildId)) {
          const obj4 = {};
          const merged1 = Object.assign(merged);
          obj4.guild = stateFromStores;
          obj4.selectedChannelId = selectedChannelId;
          obj4.selectedVoiceChannelId = stateFromStores1;
          return closure_17(tmp2(17617).default, obj4);
        } else {
          if (tmp2Result2.shouldNSFWGateGuild(selectedGuildId)) {
            const obj5 = { style: merged.style, guildId: selectedGuildId };
            let tmp6Result = closure_17(NsfwGateGuildSidebarDefault, obj5);
          } else {
            const obj6 = {};
            const merged2 = Object.assign(merged);
            obj6.guild = stateFromStores;
            obj6.selectedChannelId = selectedChannelId;
            obj6.selectedVoiceChannelId = stateFromStores1;
            tmp6Result = closure_17(closure_22, obj6);
          }
          return tmp6Result;
        }
        tmp2Result = tmp2(4846);
      }
    }
    const obj7 = { style: merged.style, selectedGuildId };
    return closure_17(GuildsEmptyDefault, obj7);
  }
  const obj2 = selectedGuildId(504);
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/RedesignChannelList.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelsWithInstrumentation(arg0) {
  const cResult = c.c(7);
  const doesLandOnHomeDrawer = useHomeDrawerGesture.useDoesLandOnHomeDrawer();
  if (cResult[0] !== arg0) {
    const obj3 = {};
    const merged = Object.assign(arg0);
    const tmp11 = constants(closure_24, obj3);
    cResult[0] = arg0;
    cResult[1] = tmp11;
    let tmp5 = tmp11;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== doesLandOnHomeDrawer) {
    let tmp13 = null;
    if (!doesLandOnHomeDrawer) {
      tmp13 = constants(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "channel-list", checkFocusedScreen: "guilds" });
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
  const tmp16 = collapsedCategories(closure_1_19, obj4);
  cResult[4] = tmp5;
  cResult[5] = tmp12;
  cResult[6] = tmp16;
  tmp15 = tmp16;
}) : (function ChannelsWithInstrumentation(arg0) {
  const doesLandOnHomeDrawer = useHomeDrawerGesture.useDoesLandOnHomeDrawer();
  const merged = Object.assign(arg0);
  const children = [constants(closure_24, {}), ];
  let tmp6Result = null;
  if (!doesLandOnHomeDrawer) {
    tmp6Result = constants(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "channel-list", checkFocusedScreen: "guilds" });
  }
  children[1] = tmp6Result;
  return collapsedCategories(closure_1_19, { children });
}));
export const ChannelList = memoResult;