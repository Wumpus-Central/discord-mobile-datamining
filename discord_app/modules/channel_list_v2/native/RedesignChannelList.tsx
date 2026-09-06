// discord_app/modules/channel_list_v2/native/RedesignChannelList.tsx
import ChannelListState from "../../guild_sidebar/ChannelListState.tsx";
import roundToNearestPixelDefault from "../../voice_panel/native/utils/roundToNearestPixel.tsx";
import TTIFirstContentfulPaint from "../../tti_analytics/native/TTIFirstContentfulPaint.tsx";
import RedesignGuildHeaderDefault from "RedesignGuildHeader.tsx";
import registerSidebarVisibilityMethods from "../../guilds_bar/native/utils/registerSidebarVisibilityMethods.tsx";
import ChannelsUnreadBarsDefault from "unread_bars/ChannelsUnreadBars.tsx";
import renderRedesignChannelListItem from "renderRedesignChannelListItem.tsx";
import GuildUpsellChannelListDefault from "../../game_community_upsell/native/GuildUpsellChannelList.tsx";
import GuildsEmptyDefault from "../../main_tabs_v2/native/tabs/guilds/empty_states/GuildsEmpty.tsx";
import NsfwGateGuildSidebarDefault from "../../age_gate/native/components/NsfwGateGuildSidebar.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import ChannelListStore from "../../guild_sidebar/ChannelListStore.tsx";
import HomeDrawerStore from "../../home_drawer/native/HomeDrawerStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import SortedVoiceStateStore from "../../../stores/views/SortedVoiceStateStore.tsx";

require = fn;
function GuildChannels(guild) {
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
  let obj = require("initialize");
  const items = [ChannelListStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () =>
    ChannelListStore.getGuild(guild.guild.id, { guildActionRows, channelNoticeRows: rows }),
  );
  ({ guildChannels, guildChannelsVersion } = stateFromStoresObject);
  let tmp3 = null;
  if (obj2.useShouldRenderChannelList()) {
    obj = {};
    const merged = Object.assign(guild);
    obj.guildChannels = guildChannels;
    obj.guildChannelsVersion = guildChannelsVersion;
    obj.gameClaimMarkAsDismissed = gameClaimMarkAsDismissed;
    obj.applicationAccountLinkMarkAsDismissed = applicationAccountLinkMarkAsDismissed;
    obj.startApplicationAccountLinkAuthorization = startApplicationAccountLinkAuthorization;
    obj.accountLinkApplication = accountLinkApplication;
    tmp3 = closure_14(closure_17, obj);
  }
  return tmp3;
}
function ChannelsWrapper(selectedGuildId) {
  selectedGuildId = selectedGuildId.selectedGuildId;
  const selectedChannelId = selectedGuildId.selectedChannelId;
  const merged = Object.assign(selectedGuildId, Object.assign({ selectedGuildId: 0, selectedChannelId: 0 }));
  let obj = selectedGuildId(504);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(selectedGuildId));
  let obj1 = selectedGuildId(504);
  const items1 = [SelectedChannelStore];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => voiceChannelId.getVoiceChannelId());
  if (selectedGuildId === closure_13) {
    obj = { style: merged.style };
    return closure_14(GuildUpsellChannelListDefault, obj);
  } else {
    if (null != stateFromStores) {
      if (selectedGuildId !== closure_12) {
        let tmp2Result = tmp2(1982);
        if (tmp2Result.isFavoritesGuildId(selectedGuildId)) {
          obj = {};
          const merged1 = Object.assign(merged);
          obj.guild = stateFromStores;
          obj.selectedChannelId = selectedChannelId;
          obj.selectedVoiceChannelId = stateFromStores1;
          return closure_14(tmp2(16271).default, obj);
        } else {
          tmp2Result = tmp2(10294);
          if (tmp2Result.shouldNSFWGateGuild(selectedGuildId)) {
            obj1 = { style: merged.style, guildId: selectedGuildId };
            let tmp6Result = tmp6(NsfwGateGuildSidebarDefault, obj1);
          } else {
            const obj2 = {};
            const merged2 = Object.assign(merged);
            obj2.guild = stateFromStores;
            obj2.selectedChannelId = selectedChannelId;
            obj2.selectedVoiceChannelId = stateFromStores1;
            tmp6Result = tmp6(GuildChannels, obj2);
          }
          return tmp6Result;
        }
      }
    }
    const obj3 = { style: merged.style, selectedGuildId };
    return closure_14(GuildsEmptyDefault, obj3);
  }
}
const View = fn(17).View;
const Constants = fn(1074);
({ EMPTY_NUX_SERVER: closure_12, MOBILE_GUILD_UPSELL_LIST: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
const memoResult = noop.memo((gameClaimMarkAsDismissed) => {
  gameClaimMarkAsDismissed = gameClaimMarkAsDismissed.gameClaimMarkAsDismissed;
  let guild = gameClaimMarkAsDismissed.guild;
  const guildChannels = gameClaimMarkAsDismissed.guildChannels;
  const selectedChannelId = gameClaimMarkAsDismissed.selectedChannelId;
  const selectedVoiceChannelId = gameClaimMarkAsDismissed.selectedVoiceChannelId;
  const applicationAccountLinkMarkAsDismissed = gameClaimMarkAsDismissed.applicationAccountLinkMarkAsDismissed;
  const startApplicationAccountLinkAuthorization = gameClaimMarkAsDismissed.startApplicationAccountLinkAuthorization;
  const accountLinkApplication = gameClaimMarkAsDismissed.accountLinkApplication;
  const favoritesSuggestionsNoticeHeight = gameClaimMarkAsDismissed.favoritesSuggestionsNoticeHeight;
  listViewportHeight = undefined;
  ({ contentInset, style } = gameClaimMarkAsDismissed);
  let obj = gameClaimMarkAsDismissed(guildChannels[15]);
  const categoryStyles = obj.useCategoryStyles();
  const tmp5 = guild(guildChannels[16])(guild);
  const bannerHeight = tmp5.bannerHeight;
  const bannerWidth = tmp5.bannerWidth;
  const headerHeight = tmp5.headerHeight;
  const fontScale = tmp5.fontScale;
  ({ listBottom, listPaddingBottom, listViewportHeight } = tmp5);
  const ref = selectedVoiceChannelId.useRef(null);
  const items = [ref, guildChannels];
  const effect = selectedVoiceChannelId.useEffect(() => {
    const result = registerSidebarVisibilityMethods.registerFastListChannelVisibilityMethod(ref, guildChannels);
  }, items);
  const sections = guildChannels.getSections(false);
  const id = guild.id;
  let obj1 = gameClaimMarkAsDismissed(guildChannels[18]);
  let obj2 = gameClaimMarkAsDismissed(guildChannels[19]);
  const isHomeDrawerEnabled = obj2.useIsHomeDrawerEnabled();
  const items1 = [guildChannels, guild, headerHeight];
  const callback = selectedVoiceChannelId.useCallback(() => {
    const state = favoritesSuggestionsNoticeHeight.getState();
    state.noteInteraction();
  }, []);
  const items2 = [guild, bannerHeight, bannerWidth];
  const callback1 = selectedVoiceChannelId.useCallback(
    (fastList) => closure_2_14(ChannelsUnreadBarsDefault, { fastList, guildChannels, guild, headerHeight }),
    items1,
  );
  const callback2 = selectedVoiceChannelId.useCallback(
    (scrollPosValue) =>
      closure_2_14(
        RedesignGuildHeaderDefault,
        { guild, scrollPosition: scrollPosValue.scrollPosValue, bannerHeight, bannerWidth },
        guild.id,
      ),
    items2,
  );
  const callback3 = selectedVoiceChannelId.useCallback(() => {
    const result = gameClaimMarkAsDismissed(guildChannels[22]).logChannelListEndReached();
  }, []);
  let obj3 = gameClaimMarkAsDismissed(guildChannels[23]);
  const recentlyActiveChannelsEnabled = obj3.useRecentlyActiveChannelsEnabled();
  let obj4 = gameClaimMarkAsDismissed(guildChannels[24]);
  const items3 = [bannerWidth];
  const items4 = [guild.id];
  const stateFromStores = obj4.useStateFromStores(items3, () => SortedVoiceStateStore.getVoiceStates(guild.id), items4);
  const externalScrollEventHandler = obj1.useExternalScrollEventHandler({ id });
  const optInEnabledForGuild = gameClaimMarkAsDismissed(guildChannels[25]).useOptInEnabledForGuild(guild.id);
  const obj6 = gameClaimMarkAsDismissed(guildChannels[25]);
  const guildLiveChannelNoticeInfo = gameClaimMarkAsDismissed(guildChannels[26]).useGuildLiveChannelNoticeInfo(
    guild.id,
  );
  const obj7 = gameClaimMarkAsDismissed(guildChannels[26]);
  const scaledLiveChannelNoticeHeight = gameClaimMarkAsDismissed(guildChannels[27]).getScaledLiveChannelNoticeHeight(
    fontScale,
    guildLiveChannelNoticeInfo,
  );
  closure_129_0 = ref;
  const obj8 = gameClaimMarkAsDismissed(guildChannels[27]);
  const navigation = gameClaimMarkAsDismissed(guildChannels[11]).useNavigation();
  closure_129_1 = navigation;
  const items5 = [navigation, ref];
  const effect1 = selectedVoiceChannelId.useEffect(() => {
    c0 = -1;
    guild = guild.addListener("tabPress", (arg0) => {
      let timeout = arg0;
      if (null != obj.coerceGuildsRoute(guild(guildChannels[13])())) {
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
  const items7 = [
    guildChannels,
    fontScale,
    stateFromStores,
    scaledLiveChannelNoticeHeight,
    favoritesSuggestionsNoticeHeight,
    listViewportHeight,
  ];
  const items8 = [
    guildChannels,
    selectedChannelId,
    guild,
    gameClaimMarkAsDismissed,
    applicationAccountLinkMarkAsDismissed,
    startApplicationAccountLinkAuthorization,
    accountLinkApplication,
  ];
  const callback5 = selectedVoiceChannelId.useCallback((section, row) => {
    const obj = {
      guildChannels,
      section,
      row,
      fontScale,
      voiceStates: stateFromStores,
      liveChannelNoticeHeight: scaledLiveChannelNoticeHeight,
      favoritesSuggestionsNoticeHeight,
      listViewportHeight,
    };
    const channelListItemSize = obj.getChannelListItemSize(obj);
    return roundToNearestPixelDefault(channelListItemSize);
  }, items7);
  const items9 = [guildChannels, fontScale, callback4];
  const callback6 = selectedVoiceChannelId.useCallback((section, row) => {
    let obj = { children: null };
    obj = {
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
    obj.children = renderRedesignChannelListItem.renderChannelListItem(obj);
    return closure_2_14(View, obj);
  }, items8);
  const items10 = [guildChannels, recentlyActiveChannelsEnabled, callback4, categoryStyles];
  const callback7 = selectedVoiceChannelId.useCallback((section) => {
    const channelListSectionHeaderSize = renderRedesignChannelListItem.getChannelListSectionHeaderSize(
      guildChannels,
      section,
      fontScale,
      callback4(section),
    );
    return roundToNearestPixelDefault(channelListSectionHeaderSize);
  }, items9);
  const items11 = [guildChannels, optInEnabledForGuild, stateFromStores, selectedChannelId, selectedVoiceChannelId];
  const callback8 = selectedVoiceChannelId.useCallback((section) => {
    let obj = renderRedesignChannelListItem;
    obj = {
      children: obj.renderChannelListSectionHeader(
        guildChannels,
        section,
        recentlyActiveChannelsEnabled,
        callback4(section),
        categoryStyles,
      ),
    };
    return closure_2_14(View, obj);
  }, items10);
  const items12 = [guildChannels, optInEnabledForGuild, stateFromStores, selectedChannelId, selectedVoiceChannelId];
  const callback9 = selectedVoiceChannelId.useCallback((section) => {
    const obj = {
      guildChannels,
      section,
      optInChannelsEnabled: optInEnabledForGuild,
      voiceStates: stateFromStores,
      selectedChannelId,
      selectedVoiceChannelId,
    };
    const result = obj.calculateVoiceSummary(obj);
    const channelListSectionFooterSize = renderRedesignChannelListItem.getChannelListSectionFooterSize(
      guildChannels,
      section,
      result,
    );
    return roundToNearestPixelDefault(channelListSectionFooterSize);
  }, items11);
  const items13 = [sections];
  const callback10 = selectedVoiceChannelId.useCallback((section) => {
    let obj = {
      guildChannels,
      section,
      optInChannelsEnabled: optInEnabledForGuild,
      voiceStates: stateFromStores,
      selectedChannelId,
      selectedVoiceChannelId,
    };
    const result = obj.calculateVoiceSummary(obj);
    obj = {
      children: renderRedesignChannelListItem.renderChannelListSectionFooter(guildChannels, section, ref, result),
    };
    return closure_2_14(View, obj);
  }, items12);
  const items14 = [guildChannels];
  const memo = selectedVoiceChannelId.useMemo(() => 0 === sections.reduce((acc, item) => acc + item, 0), items13);
  const callback11 = selectedVoiceChannelId.useCallback(
    (arg0, arg1, arg2) => renderRedesignChannelListItem.getFastListRecyclerKey(guildChannels, arg0, arg1, arg2),
    items14,
  );
  const context = selectedVoiceChannelId.useContext(guild(guildChannels[31]));
  const obj9 = gameClaimMarkAsDismissed(guildChannels[11]);
  const youBarTotalHeight = gameClaimMarkAsDismissed(guildChannels[32]).useYouBarTotalHeight(16);
  const obj10 = gameClaimMarkAsDismissed(guildChannels[32]);
  const youBarTotalHeight1 = gameClaimMarkAsDismissed(guildChannels[32]).useYouBarTotalHeight(-16);
  obj = { profile: null, children: null };
  const obj11 = gameClaimMarkAsDismissed(guildChannels[32]);
  obj.profile = gameClaimMarkAsDismissed(guildChannels[33]).Profiles.Channels;
  obj = { style, contentInset, children: null };
  const tmp35 = guild(guildChannels[33]);
  const tmp36 = ref;
  const items15 = [listViewportHeight(guild(guildChannels[36]), { guild })];
  if (memo) {
    obj1 = { guild };
    let tmp34Result = tmp34(tmp4(tmp2[37]), obj1);
  } else {
    obj2 = {
      insetEnd: youBarTotalHeight,
      scrollIndicatorInsets: null,
      waitFor: null,
      ref: null,
      chunkBase: null,
      stickyHeaderFooter: true,
      renderHeader: null,
      headerSize: null,
      footerSize: null,
      endReachedThreshold: null,
      onEndReached: null,
      renderAccessory: null,
      disableContentWrappers: true,
      sections: null,
      stickySectionsVariant: "disabled",
      renderSection: null,
      sectionSize: null,
      renderItem: null,
      itemSize: null,
      renderSectionFooter: null,
      sectionFooterSize: null,
      optimizeListItemRender: true,
      getRecyclerKey: null,
      initialScrollSection: null,
      initialScrollItem: null,
      initialScrollOrientation: "center",
      onScroll: null,
      onScrollWorklet: null,
    };
    obj3 = { bottom: youBarTotalHeight1 };
    obj2.scrollIndicatorInsets = obj3;
    obj2.waitFor = context;
    obj2.ref = ref;
    obj2.chunkBase = listViewportHeight;
    obj2.renderHeader = callback2;
    obj2.headerSize = tmp5.listTop;
    obj2.footerSize = listBottom + listPaddingBottom;
    obj2.endReachedThreshold = listBottom + listPaddingBottom;
    obj2.onEndReached = callback3;
    obj2.renderAccessory = callback1;
    obj2.sections = sections;
    obj2.renderSection = callback8;
    obj2.sectionSize = callback7;
    obj2.renderItem = callback6;
    obj2.itemSize = callback5;
    obj2.renderSectionFooter = callback10;
    obj2.sectionFooterSize = callback9;
    obj2.getRecyclerKey = callback11;
    let tmpResult = tmp(tmp2[14]);
    let section;
    if (!tmpResult.isGameCommunityServerPreview(id)) {
      const first = selectedChannelId(guildChannels.getSectionRowsFromChannel(selectedChannelId), 1)[0];
      if (null != first) {
        if (null != first.row) {
          if (first.row >= 0) {
            if (first.section >= 0) {
              section = first.section;
            }
          }
        }
      }
    }
    obj2.initialScrollSection = section;
    tmpResult = tmp(tmp2[14]);
    let row;
    if (!tmpResult.isGameCommunityServerPreview(id)) {
      const first1 = selectedChannelId(guildChannels.getSectionRowsFromChannel(selectedChannelId), 1)[0];
      if (null != first1) {
        if (null != first1.row) {
          if (first1.row >= 0) {
            if (first1.section >= 0) {
              row = first1.row;
            }
          }
        }
      }
    }
    obj2.initialScrollItem = row;
    let tmp45;
    if (isHomeDrawerEnabled) {
      tmp45 = callback;
    }
    obj2.onScroll = tmp45;
    obj2.onScrollWorklet = externalScrollEventHandler;
    tmp34Result = tmp34(tmp4(tmp2[38]), obj2, guild.id);
    const tmp4Result = tmp4(tmp2[38]);
  }
  obj4 = { children: tmp36(guild(guildChannels[35]), obj) };
  items15[1] = tmp34Result;
  obj.children = items15;
  obj.children = listViewportHeight(gameClaimMarkAsDismissed(guildChannels[34]).LayerScope, obj4);
  return listViewportHeight(tmp35, obj);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/RedesignChannelList.tsx");

export default noop.memo((arg0) => {
  let obj = { children: null };
  obj = {};
  const merged = Object.assign(arg0);
  const items = [
    closure_1_14(ChannelsWrapper, obj),
    closure_1_14(TTIFirstContentfulPaint.TTIFirstContentfulPaint, {
      label: "channel-list",
      checkFocusedScreen: "guilds",
    }),
  ];
  obj.children = items;
  return __initData(value2, obj);
});
export const ChannelList = memoResult;
