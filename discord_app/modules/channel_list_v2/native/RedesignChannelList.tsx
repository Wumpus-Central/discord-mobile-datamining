// === Module 18105: RedesignChannelList ===

// Module 18105 (RedesignChannelList)
import ChannelListState from "ChannelListState" /* 7700 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 12233 */;
import TTIFirstContentfulPaint from "TTIFirstContentfulPaint" /* 13285 */;
import GuildsRenderExperiment2 from "GuildsRenderExperiment" /* 18016 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 18024 */;
import RedesignGuildHeaderDefault from "RedesignGuildHeader" /* 18135 */;
import registerSidebarVisibilityMethods from "registerSidebarVisibilityMethods" /* 18184 */;
import ChannelsUnreadBarsDefault from "ChannelsUnreadBars" /* 18185 */;
import renderRedesignChannelListItem from "renderRedesignChannelListItem" /* 18193 */;
import useShouldRenderChannelList from "useShouldRenderChannelList" /* 18267 */;
import GuildUpsellChannelListDefault from "GuildUpsellChannelList" /* 18274 */;
import GuildsEmptyDefault from "GuildsEmpty" /* 18287 */;
import NsfwGateGuildSidebarDefault from "NsfwGateGuildSidebar" /* 18300 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import ChannelListStore from "ChannelListStore" /* 7698 */;
import HomeDrawerStore from "HomeDrawerStore" /* 18018 */;
import GuildStore from "GuildStore" /* 4880 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4912 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 5762 */;

require = fn;
function GuildChannels(arg0) {
  const shouldRenderChannelList = useShouldRenderChannelList.useShouldRenderChannelList();
  const GuildsRenderExperiment = GuildsRenderExperiment2.GuildsRenderExperiment;
  if (!GuildsRenderExperiment.useConfig({ location: "GuildChannels" }).enabled) {
    const obj2 = { shouldRender: shouldRenderChannelList };
    const merged = Object.assign(arg0);
    let tmp2 = __initData(GuildChannelsList, obj2);
  } else {
    tmp2 = null;
  }
  return tmp2;
}
function GuildChannelsList(shouldRender) {
  const merged = Object.assign(shouldRender, Object.assign({ shouldRender: 0 }));
  let found;
  dependencyMap = undefined;
  const arr = found(18268)(merged.guild);
  const hasItem = arr.includes(ChannelListGuildActionRow.GUILD_CONJURE);
  merged(9656);
  found = arr;
  if (hasItem) {
    found = arr;
    if (!tmp7) {
      found = arr.filter((item) => item !== constants.GUILD_CONJURE);
    }
  }
  ({ rows: c2, gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication } = found(18270)(merged.guild));
  const tmp9 = found(18270)(merged.guild);
  const items = [ChannelListStore];
  const stateFromStoresObject = merged(504).useStateFromStoresObject(items, () => ChannelListStore.getGuild(merged.guild.id, { guildActionRows: found, channelNoticeRows }));
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
    tmp13 = closure_15(closure_18, obj);
  }
  return tmp13;
}
function ChannelsWrapper(selectedGuildId) {
  selectedGuildId = selectedGuildId.selectedGuildId;
  const selectedChannelId = selectedGuildId.selectedChannelId;
  const merged = Object.assign(selectedGuildId, Object.assign({ selectedGuildId: 0, selectedChannelId: 0 }));
  const items = [GuildStore];
  const stateFromStores = selectedGuildId(504).useStateFromStores(items, () => GuildStore.getGuild(selectedGuildId));
  const obj = selectedGuildId(504);
  const items1 = [SelectedChannelStore];
  const stateFromStores1 = selectedGuildId(504).useStateFromStores(items1, () => voiceChannelId.getVoiceChannelId());
  if (selectedGuildId === closure_13) {
    const obj3 = { style: merged.style };
    return closure_15(GuildUpsellChannelListDefault, obj3);
  } else {
    if (null != stateFromStores) {
      if (selectedGuildId !== closure_12) {
        if (tmp2Result.isFavoritesGuildId(selectedGuildId)) {
          const obj4 = {};
          const merged1 = Object.assign(merged);
          obj4.guild = stateFromStores;
          obj4.selectedChannelId = selectedChannelId;
          obj4.selectedVoiceChannelId = stateFromStores1;
          return closure_15(tmp2(18292).default, obj4);
        } else {
          if (tmp2Result2.shouldNSFWGateGuild(selectedGuildId)) {
            const obj5 = { style: merged.style, guildId: selectedGuildId };
            let tmp6Result = closure_15(NsfwGateGuildSidebarDefault, obj5);
          } else {
            const obj6 = {};
            const merged2 = Object.assign(merged);
            obj6.guild = stateFromStores;
            obj6.selectedChannelId = selectedChannelId;
            obj6.selectedVoiceChannelId = stateFromStores1;
            tmp6Result = closure_15(GuildChannels, obj6);
          }
          return tmp6Result;
        }
        tmp2Result = tmp2(4883);
      }
    }
    const obj7 = { style: merged.style, selectedGuildId };
    return closure_15(GuildsEmptyDefault, obj7);
  }
  const obj2 = selectedGuildId(504);
}
const View = fn(17).View;
const Constants = fn(1072);
({ EMPTY_NUX_SERVER: closure_12, MOBILE_GUILD_UPSELL_LIST: map1 } = Constants);
const ChannelListGuildActionRow = fn(7706).ChannelListGuildActionRow;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
const memoResult = noop.memo(function ChannelList(gameClaimMarkAsDismissed) {
  gameClaimMarkAsDismissed = gameClaimMarkAsDismissed.gameClaimMarkAsDismissed;
  let guild = gameClaimMarkAsDismissed.guild;
  const guildChannels = gameClaimMarkAsDismissed.guildChannels;
  const selectedChannelId = gameClaimMarkAsDismissed.selectedChannelId;
  const selectedVoiceChannelId = gameClaimMarkAsDismissed.selectedVoiceChannelId;
  const applicationAccountLinkMarkAsDismissed = gameClaimMarkAsDismissed.applicationAccountLinkMarkAsDismissed;
  const startApplicationAccountLinkAuthorization = gameClaimMarkAsDismissed.startApplicationAccountLinkAuthorization;
  const accountLinkApplication = gameClaimMarkAsDismissed.accountLinkApplication;
  const favoritesSuggestionsNoticeHeight = gameClaimMarkAsDismissed.favoritesSuggestionsNoticeHeight;
  ({ contentInset, style } = gameClaimMarkAsDismissed);
  const categoryStyles = gameClaimMarkAsDismissed(guildChannels[16]).useCategoryStyles();
  const tmp5 = guild(guildChannels[17])(guild);
  const bannerHeight = tmp5.bannerHeight;
  const bannerWidth = tmp5.bannerWidth;
  const headerHeight = tmp5.headerHeight;
  const fontScale = tmp5.fontScale;
  const listViewportHeight = tmp5.listViewportHeight;
  ({ listTop, listBottom, listPaddingBottom } = tmp5);
  const ref = selectedVoiceChannelId.useRef(null);
  let obj = gameClaimMarkAsDismissed(guildChannels[16]);
  const config = guild(guildChannels[18]).useConfig({ location: "Channel List" });
  const list = config.list;
  const items = [ref, guildChannels, list];
  const effect = selectedVoiceChannelId.useEffect(() => {
    const result = registerSidebarVisibilityMethods.registerFastListChannelVisibilityMethod(ref, guildChannels);
  }, items);
  const sections = guildChannels.getSections(false);
  const id = guild.id;
  let obj2 = guild(guildChannels[18]);
  let obj3 = gameClaimMarkAsDismissed(guildChannels[20]);
  const externalScrollEventHandler = gameClaimMarkAsDismissed(guildChannels[20]).useExternalScrollEventHandler({ id });
  const isHomeDrawerEnabled = gameClaimMarkAsDismissed(guildChannels[21]).useIsHomeDrawerEnabled();
  const items1 = [guildChannels, guild, headerHeight];
  const callback = selectedVoiceChannelId.useCallback(() => {
    const state = favoritesSuggestionsNoticeHeight.getState();
    state.noteInteraction();
  }, []);
  const items2 = [guild, bannerHeight, bannerWidth];
  const callback1 = selectedVoiceChannelId.useCallback((fastList) => __initData(ChannelsUnreadBarsDefault, { fastList, guildChannels, guild, headerHeight }), items1);
  const callback2 = selectedVoiceChannelId.useCallback((scrollPosValue) => __initData(RedesignGuildHeaderDefault, { guild, scrollPosition: scrollPosValue.scrollPosValue, bannerHeight, bannerWidth }, guild.id), items2);
  const callback3 = selectedVoiceChannelId.useCallback(() => {
    const result = gameClaimMarkAsDismissed(guildChannels[24]).logChannelListEndReached();
  }, []);
  const obj4 = gameClaimMarkAsDismissed(guildChannels[21]);
  const recentlyActiveChannelsEnabled = gameClaimMarkAsDismissed(guildChannels[25]).useRecentlyActiveChannelsEnabled();
  const obj5 = gameClaimMarkAsDismissed(guildChannels[25]);
  const items3 = [bannerWidth];
  const items4 = [guild.id];
  const stateFromStores = gameClaimMarkAsDismissed(guildChannels[26]).useStateFromStores(items3, () => SortedVoiceStateStore.getVoiceStates(guild.id), items4);
  const obj6 = gameClaimMarkAsDismissed(guildChannels[26]);
  const optInEnabledForGuild = gameClaimMarkAsDismissed(guildChannels[27]).useOptInEnabledForGuild(guild.id);
  const obj7 = gameClaimMarkAsDismissed(guildChannels[27]);
  const guildLiveChannelNoticeInfo = gameClaimMarkAsDismissed(guildChannels[28]).useGuildLiveChannelNoticeInfo(guild.id);
  const obj8 = gameClaimMarkAsDismissed(guildChannels[28]);
  const scaledLiveChannelNoticeHeight = gameClaimMarkAsDismissed(guildChannels[29]).getScaledLiveChannelNoticeHeight(fontScale, guildLiveChannelNoticeInfo);
  closure_129_0 = ref;
  const obj9 = gameClaimMarkAsDismissed(guildChannels[29]);
  const navigation = gameClaimMarkAsDismissed(guildChannels[12]).useNavigation();
  closure_129_1 = navigation;
  const items5 = [navigation, ref];
  const effect1 = selectedVoiceChannelId.useEffect(() => {
    c0 = -1;
    guild = guild.addListener("tabPress", (arg0) => {
      let timeout = arg0;
      if (null != obj.coerceGuildsRoute(guild(guildChannels[14])())) {
        if (-1 === timeout) {
          const _clearTimeout2 = clearTimeout;
          clearTimeout(timeout);
          const _setTimeout = setTimeout;
          timeout = setTimeout(() => {
            clearTimeout(c0);
            c0 = -1;
            const defaultPrevented = focused.isFocused();
            const animationFrame = requestAnimationFrame(() => {
              let tmp = closure_0;
              if (closure_0) {
                tmp = !defaultPrevented.defaultPrevented;
              }
              if (tmp) {
                tmp = null != gameClaimMarkAsDismissed.current;
              }
              if (tmp) {
                const current = gameClaimMarkAsDismissed.current;
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
  }, items5);
  const items6 = [guildChannels, sections];
  const callback4 = selectedVoiceChannelId.useCallback((arg0) => {
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
  }, items6);
  const items7 = [guildChannels, fontScale, stateFromStores, scaledLiveChannelNoticeHeight, favoritesSuggestionsNoticeHeight, listViewportHeight];
  const items8 = [guildChannels, selectedChannelId, guild, gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication];
  const callback5 = selectedVoiceChannelId.useCallback((section, row) => {
    const channelListItemSize = renderRedesignChannelListItem.getChannelListItemSize({ guildChannels, section, row, fontScale, voiceStates: stateFromStores, liveChannelNoticeHeight: scaledLiveChannelNoticeHeight, favoritesSuggestionsNoticeHeight, listViewportHeight });
    return roundToNearestPixelDefault(channelListItemSize);
  }, items7);
  const items9 = [guildChannels, fontScale, callback4];
  const callback6 = selectedVoiceChannelId.useCallback((section, row) => {
    const obj = { children: renderRedesignChannelListItem.renderChannelListItem({ guildChannels, section, row, selectedChannelId, guild, gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication }) };
    return __initData(View, obj);
  }, items8);
  const items10 = [guildChannels, recentlyActiveChannelsEnabled, callback4, categoryStyles];
  const callback7 = selectedVoiceChannelId.useCallback((section) => {
    const channelListSectionHeaderSize = renderRedesignChannelListItem.getChannelListSectionHeaderSize(guildChannels, section, fontScale, callback4(section));
    return roundToNearestPixelDefault(channelListSectionHeaderSize);
  }, items9);
  const items11 = [guildChannels, optInEnabledForGuild, stateFromStores, selectedChannelId, selectedVoiceChannelId];
  const callback8 = selectedVoiceChannelId.useCallback((section) => __initData(View, { children: renderRedesignChannelListItem.renderChannelListSectionHeader(guildChannels, section, recentlyActiveChannelsEnabled, callback4(section), categoryStyles) }), items10);
  const items12 = [guildChannels, optInEnabledForGuild, stateFromStores, selectedChannelId, selectedVoiceChannelId];
  const callback9 = selectedVoiceChannelId.useCallback((section) => {
    const result = renderRedesignChannelListItem.calculateVoiceSummary({ guildChannels, section, optInChannelsEnabled: optInEnabledForGuild, voiceStates: stateFromStores, selectedChannelId, selectedVoiceChannelId });
    const obj2 = { guildChannels, section, optInChannelsEnabled: optInEnabledForGuild, voiceStates: stateFromStores, selectedChannelId, selectedVoiceChannelId };
    const channelListSectionFooterSize = renderRedesignChannelListItem.getChannelListSectionFooterSize(guildChannels, section, result);
    return roundToNearestPixelDefault(channelListSectionFooterSize);
  }, items11);
  const items13 = [sections];
  const callback10 = selectedVoiceChannelId.useCallback((section) => {
    const result = renderRedesignChannelListItem.calculateVoiceSummary({ guildChannels, section, optInChannelsEnabled: optInEnabledForGuild, voiceStates: stateFromStores, selectedChannelId, selectedVoiceChannelId });
    const obj2 = { guildChannels, section, optInChannelsEnabled: optInEnabledForGuild, voiceStates: stateFromStores, selectedChannelId, selectedVoiceChannelId };
    return __initData(View, { children: renderRedesignChannelListItem.renderChannelListSectionFooter(guildChannels, section, ref, result) });
  }, items12);
  const items14 = [guildChannels];
  const memo = selectedVoiceChannelId.useMemo(() => 0 === sections.reduce((acc, item) => acc + item, 0), items13);
  const callback11 = selectedVoiceChannelId.useCallback((arg0, arg1, arg2) => renderRedesignChannelListItem.getFastListRecyclerKey(guildChannels, arg0, arg1, arg2), items14);
  const context = selectedVoiceChannelId.useContext(guild(guildChannels[33]));
  const obj10 = gameClaimMarkAsDismissed(guildChannels[12]);
  const youBarTotalHeight = gameClaimMarkAsDismissed(guildChannels[34]).useYouBarTotalHeight(16);
  const obj11 = gameClaimMarkAsDismissed(guildChannels[34]);
  const obj13 = { endReachedThreshold: listBottom + listPaddingBottom, getItemSize: callback5, getRecyclerKey: callback11, getSectionFooterSize: callback9, getSectionHeaderSize: callback7, headerSize: listTop, initialScrollItem: null, initialScrollSection: null, insetEnd: null, listViewportHeight: null, onEndReached: null, onScroll: null, onScrollWorklet: null, renderAccessory: null, renderHeader: null, renderItem: null, renderSectionFooter: null, renderSectionHeader: null, scrollIndicatorInsetBottom: null, sections: null, waitFor: null };
  const youBarTotalHeight1 = gameClaimMarkAsDismissed(guildChannels[34]).useYouBarTotalHeight(-16);
  const obj12 = gameClaimMarkAsDismissed(guildChannels[34]);
  let row;
  if (!obj14.isGameCommunityServerPreview(id)) {
    const first = selectedChannelId(guildChannels.getSectionRowsFromChannel(selectedChannelId), 1)[0];
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
  obj13.initialScrollItem = row;
  obj14 = gameClaimMarkAsDismissed(guildChannels[15]);
  let section;
  if (!tmpResult.isGameCommunityServerPreview(id)) {
    const first1 = selectedChannelId(guildChannels.getSectionRowsFromChannel(selectedChannelId), 1)[0];
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
  obj13.initialScrollSection = section;
  obj13.insetEnd = youBarTotalHeight;
  obj13.listViewportHeight = listViewportHeight;
  obj13.onEndReached = callback3;
  let tmp41;
  if (isHomeDrawerEnabled) {
    tmp41 = callback;
  }
  obj13.onScroll = tmp41;
  obj13.onScrollWorklet = externalScrollEventHandler;
  obj13.renderAccessory = callback1;
  obj13.renderHeader = callback2;
  obj13.renderItem = callback6;
  obj13.renderSectionFooter = callback10;
  obj13.renderSectionHeader = callback8;
  obj13.scrollIndicatorInsetBottom = youBarTotalHeight1;
  obj13.sections = sections;
  obj13.waitFor = context;
  const obj15 = { profile: null, children: null };
  tmpResult = gameClaimMarkAsDismissed(guildChannels[15]);
  obj15.profile = gameClaimMarkAsDismissed(guildChannels[35]).Profiles.Channels;
  const obj16 = { style, contentInset, children: null };
  const tmp44 = sections;
  const tmp4Result = guild(guildChannels[35]);
  const items15 = [ref(guild(guildChannels[38]), { guild }), ];
  if (memo) {
    const obj17 = { guild };
    let tmp42Result = tmp42(tmp4(tmp2[39]), obj17);
  } else {
    const obj18 = { ref, drawDistanceMode: config.drawDistance };
    const merged = Object.assign(obj13);
    tmp42Result = tmp42(tmp4("legend" === list ? tmp2[40] : tmp2[41]), obj18, guild.id);
    const tmp4Result4 = tmp4("legend" === list ? tmp2[40] : tmp2[41]);
  }
  const tmp4Result3 = guild(guildChannels[37]);
  items15[1] = tmp42Result;
  obj16.children = items15;
  obj15.children = ref(gameClaimMarkAsDismissed(guildChannels[36]).LayerScope, { children: tmp44(guild(guildChannels[37]), obj16) });
  return ref(tmp4Result, obj15);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/RedesignChannelList.tsx");

export default noop.memo(function ChannelsWithInstrumentation(arg0) {
  const doesLandOnHomeDrawer = useHomeDrawerGesture.useDoesLandOnHomeDrawer();
  const merged = Object.assign(arg0);
  const children = [__initData(ChannelsWrapper, {}), ];
  let tmp6Result = null;
  if (!doesLandOnHomeDrawer) {
    tmp6Result = __initData(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "channel-list", checkFocusedScreen: "guilds" });
  }
  children[1] = tmp6Result;
  return __initData2(closure_1_17, { children });
});
export const ChannelList = memoResult;