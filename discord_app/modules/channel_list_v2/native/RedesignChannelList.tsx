// === Module 16442: RedesignChannelList ===

// Module 16442 (RedesignChannelList)
import ChannelListState from "ChannelListState" /* 7770 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 11259 */;
import TTIFirstContentfulPaint from "TTIFirstContentfulPaint" /* 12151 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 16361 */;
import RedesignGuildHeaderDefault from "RedesignGuildHeader" /* 16472 */;
import registerSidebarVisibilityMethods from "registerSidebarVisibilityMethods" /* 16519 */;
import ChannelsUnreadBarsDefault from "ChannelsUnreadBars" /* 16520 */;
import renderRedesignChannelListItem from "renderRedesignChannelListItem" /* 16528 */;
import GuildUpsellChannelListDefault from "GuildUpsellChannelList" /* 16603 */;
import GuildsEmptyDefault from "GuildsEmpty" /* 16608 */;
import NsfwGateGuildSidebarDefault from "NsfwGateGuildSidebar" /* 16618 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4748 */;
import ChannelListStore from "ChannelListStore" /* 7767 */;
import HomeDrawerStore from "HomeDrawerStore" /* 16355 */;
import GuildStore from "GuildStore" /* 2063 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2095 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4780 */;

require = fn;
function GuildChannels(guild) {
  _require = guild;
  importDefault = require("useGuildActionRows")(guild.guild);
  const tmp = require("useChannelNoticeRows")(guild.guild);
  rows = tmp.rows;
  ({ gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication } = tmp);
  const items = [ChannelListStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => ChannelListStore.getGuild(guild.guild.id, { guildActionRows, channelNoticeRows: rows }));
  ({ guildChannels, guildChannelsVersion } = stateFromStoresObject);
  const obj = require("initialize");
  let tmp3 = null;
  if (obj2.useShouldRenderChannelList()) {
    const obj3 = {};
    const merged = Object.assign(guild);
    obj3.guildChannels = guildChannels;
    obj3.guildChannelsVersion = guildChannelsVersion;
    obj3.gameClaimMarkAsDismissed = gameClaimMarkAsDismissed;
    obj3.applicationAccountLinkMarkAsDismissed = applicationAccountLinkMarkAsDismissed;
    obj3.startApplicationAccountLinkAuthorization = startApplicationAccountLinkAuthorization;
    obj3.accountLinkApplication = accountLinkApplication;
    tmp3 = closure_14(closure_17, obj3);
  }
  return tmp3;
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
    return closure_14(GuildUpsellChannelListDefault, obj3);
  } else {
    if (null != stateFromStores) {
      if (selectedGuildId !== closure_12) {
        if (tmp2Result.isFavoritesGuildId(selectedGuildId)) {
          const obj4 = {};
          const merged1 = Object.assign(merged);
          obj4.guild = stateFromStores;
          obj4.selectedChannelId = selectedChannelId;
          obj4.selectedVoiceChannelId = stateFromStores1;
          return closure_14(tmp2(16610).default, obj4);
        } else {
          if (tmp2Result2.shouldNSFWGateGuild(selectedGuildId)) {
            const obj5 = { style: merged.style, guildId: selectedGuildId };
            let tmp6Result = closure_14(NsfwGateGuildSidebarDefault, obj5);
          } else {
            const obj6 = {};
            const merged2 = Object.assign(merged);
            obj6.guild = stateFromStores;
            obj6.selectedChannelId = selectedChannelId;
            obj6.selectedVoiceChannelId = stateFromStores1;
            tmp6Result = closure_14(GuildChannels, obj6);
          }
          return tmp6Result;
        }
        tmp2Result = tmp2(2066);
      }
    }
    const obj7 = { style: merged.style, selectedGuildId };
    return closure_14(GuildsEmptyDefault, obj7);
  }
  const obj2 = selectedGuildId(504);
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
  const categoryStyles = gameClaimMarkAsDismissed(guildChannels[15]).useCategoryStyles();
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
  let obj = gameClaimMarkAsDismissed(guildChannels[15]);
  let obj2 = gameClaimMarkAsDismissed(guildChannels[18]);
  const externalScrollEventHandler = gameClaimMarkAsDismissed(guildChannels[18]).useExternalScrollEventHandler({ id });
  const isHomeDrawerEnabled = gameClaimMarkAsDismissed(guildChannels[19]).useIsHomeDrawerEnabled();
  const items1 = [guildChannels, guild, headerHeight];
  const callback = selectedVoiceChannelId.useCallback(() => {
    const state = favoritesSuggestionsNoticeHeight.getState();
    state.noteInteraction();
  }, []);
  const items2 = [guild, bannerHeight, bannerWidth];
  const callback1 = selectedVoiceChannelId.useCallback((fastList) => closure_2_14(ChannelsUnreadBarsDefault, { fastList, guildChannels, guild, headerHeight }), items1);
  const callback2 = selectedVoiceChannelId.useCallback((scrollPosValue) => closure_2_14(RedesignGuildHeaderDefault, { guild, scrollPosition: scrollPosValue.scrollPosValue, bannerHeight, bannerWidth }, guild.id), items2);
  const callback3 = selectedVoiceChannelId.useCallback(() => {
    const result = gameClaimMarkAsDismissed(guildChannels[22]).logChannelListEndReached();
  }, []);
  let obj3 = gameClaimMarkAsDismissed(guildChannels[19]);
  const recentlyActiveChannelsEnabled = gameClaimMarkAsDismissed(guildChannels[23]).useRecentlyActiveChannelsEnabled();
  const obj4 = gameClaimMarkAsDismissed(guildChannels[23]);
  const items3 = [bannerWidth];
  const items4 = [guild.id];
  const stateFromStores = gameClaimMarkAsDismissed(guildChannels[24]).useStateFromStores(items3, () => SortedVoiceStateStore.getVoiceStates(guild.id), items4);
  const obj5 = gameClaimMarkAsDismissed(guildChannels[24]);
  const optInEnabledForGuild = gameClaimMarkAsDismissed(guildChannels[25]).useOptInEnabledForGuild(guild.id);
  const obj6 = gameClaimMarkAsDismissed(guildChannels[25]);
  const guildLiveChannelNoticeInfo = gameClaimMarkAsDismissed(guildChannels[26]).useGuildLiveChannelNoticeInfo(guild.id);
  const obj7 = gameClaimMarkAsDismissed(guildChannels[26]);
  const scaledLiveChannelNoticeHeight = gameClaimMarkAsDismissed(guildChannels[27]).getScaledLiveChannelNoticeHeight(fontScale, guildLiveChannelNoticeInfo);
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
  const items7 = [guildChannels, fontScale, stateFromStores, scaledLiveChannelNoticeHeight, favoritesSuggestionsNoticeHeight, listViewportHeight];
  const items8 = [guildChannels, selectedChannelId, guild, gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication];
  const callback5 = selectedVoiceChannelId.useCallback((section, row) => {
    const channelListItemSize = renderRedesignChannelListItem.getChannelListItemSize({ guildChannels, section, row, fontScale, voiceStates: stateFromStores, liveChannelNoticeHeight: scaledLiveChannelNoticeHeight, favoritesSuggestionsNoticeHeight, listViewportHeight });
    return roundToNearestPixelDefault(channelListItemSize);
  }, items7);
  const items9 = [guildChannels, fontScale, callback4];
  const callback6 = selectedVoiceChannelId.useCallback((section, row) => {
    const obj = { children: renderRedesignChannelListItem.renderChannelListItem({ guildChannels, section, row, selectedChannelId, guild, gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication }) };
    return closure_2_14(View, obj);
  }, items8);
  const items10 = [guildChannels, recentlyActiveChannelsEnabled, callback4, categoryStyles];
  const callback7 = selectedVoiceChannelId.useCallback((section) => {
    const channelListSectionHeaderSize = renderRedesignChannelListItem.getChannelListSectionHeaderSize(guildChannels, section, fontScale, callback4(section));
    return roundToNearestPixelDefault(channelListSectionHeaderSize);
  }, items9);
  const items11 = [guildChannels, optInEnabledForGuild, stateFromStores, selectedChannelId, selectedVoiceChannelId];
  const callback8 = selectedVoiceChannelId.useCallback((section) => closure_2_14(View, { children: renderRedesignChannelListItem.renderChannelListSectionHeader(guildChannels, section, recentlyActiveChannelsEnabled, callback4(section), categoryStyles) }), items10);
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
    return closure_2_14(View, { children: renderRedesignChannelListItem.renderChannelListSectionFooter(guildChannels, section, ref, result) });
  }, items12);
  const items14 = [guildChannels];
  const memo = selectedVoiceChannelId.useMemo(() => 0 === sections.reduce((acc, item) => acc + item, 0), items13);
  const callback11 = selectedVoiceChannelId.useCallback((arg0, arg1, arg2) => renderRedesignChannelListItem.getFastListRecyclerKey(guildChannels, arg0, arg1, arg2), items14);
  const context = selectedVoiceChannelId.useContext(guild(guildChannels[31]));
  const obj9 = gameClaimMarkAsDismissed(guildChannels[11]);
  const youBarTotalHeight = gameClaimMarkAsDismissed(guildChannels[32]).useYouBarTotalHeight(16);
  const obj10 = gameClaimMarkAsDismissed(guildChannels[32]);
  const youBarTotalHeight1 = gameClaimMarkAsDismissed(guildChannels[32]).useYouBarTotalHeight(-16);
  const obj12 = { profile: null, children: null };
  const obj11 = gameClaimMarkAsDismissed(guildChannels[32]);
  obj12.profile = gameClaimMarkAsDismissed(guildChannels[33]).Profiles.Channels;
  const obj13 = { style, contentInset, children: null };
  const tmp35 = guild(guildChannels[33]);
  const tmp36 = ref;
  const items15 = [listViewportHeight(guild(guildChannels[36]), { guild }), ];
  if (memo) {
    const obj14 = { guild };
    let tmp34Result = tmp34(tmp4(tmp2[37]), obj14);
  } else {
    const obj15 = { insetEnd: youBarTotalHeight, scrollIndicatorInsets: null, waitFor: null, ref: null, chunkBase: null, stickyHeaderFooter: true, renderHeader: null, headerSize: null, footerSize: null, endReachedThreshold: null, onEndReached: null, renderAccessory: null, disableContentWrappers: true, sections: null, stickySectionsVariant: "disabled", renderSection: null, sectionSize: null, renderItem: null, itemSize: null, renderSectionFooter: null, sectionFooterSize: null, optimizeListItemRender: true, getRecyclerKey: null, initialScrollSection: null, initialScrollItem: null, initialScrollOrientation: "center", onScroll: null, onScrollWorklet: null };
    const obj16 = { bottom: youBarTotalHeight1 };
    obj15.scrollIndicatorInsets = obj16;
    obj15.waitFor = context;
    obj15.ref = ref;
    obj15.chunkBase = listViewportHeight;
    obj15.renderHeader = callback2;
    obj15.headerSize = tmp5.listTop;
    obj15.footerSize = listBottom + listPaddingBottom;
    obj15.endReachedThreshold = listBottom + listPaddingBottom;
    obj15.onEndReached = callback3;
    obj15.renderAccessory = callback1;
    obj15.sections = sections;
    obj15.renderSection = callback8;
    obj15.sectionSize = callback7;
    obj15.renderItem = callback6;
    obj15.itemSize = callback5;
    obj15.renderSectionFooter = callback10;
    obj15.sectionFooterSize = callback9;
    obj15.getRecyclerKey = callback11;
    const tmp4Result = tmp4(tmp2[38]);
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
    obj15.initialScrollSection = section;
    tmpResult = tmp(tmp2[14]);
    let row;
    if (!tmpResult2.isGameCommunityServerPreview(id)) {
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
    obj15.initialScrollItem = row;
    let tmp45;
    if (isHomeDrawerEnabled) {
      tmp45 = callback;
    }
    obj15.onScroll = tmp45;
    obj15.onScrollWorklet = externalScrollEventHandler;
    tmp34Result = tmp34(tmp4Result, obj15, guild.id);
    tmpResult2 = tmp(tmp2[14]);
  }
  const tmp37 = guild(guildChannels[35]);
  items15[1] = tmp34Result;
  obj13.children = items15;
  obj12.children = listViewportHeight(gameClaimMarkAsDismissed(guildChannels[34]).LayerScope, { children: tmp36(guild(guildChannels[35]), obj13) });
  return listViewportHeight(tmp35, obj12);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/RedesignChannelList.tsx");

export default noop.memo((arg0) => {
  const doesLandOnHomeDrawer = useHomeDrawerGesture.useDoesLandOnHomeDrawer();
  const merged = Object.assign(arg0);
  const children = [closure_1_14(ChannelsWrapper, {}), ];
  let tmp6Result = null;
  if (!doesLandOnHomeDrawer) {
    tmp6Result = closure_1_14(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "channel-list", checkFocusedScreen: "guilds" });
  }
  children[1] = tmp6Result;
  return __initData(value2, { children });
});
export const ChannelList = memoResult;