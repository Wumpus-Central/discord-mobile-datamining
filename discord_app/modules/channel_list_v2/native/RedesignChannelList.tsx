// discord_app/modules/channel_list_v2/native/RedesignChannelList.tsx
import TTIFirstContentfulPaint from "../../tti_analytics/native/TTIFirstContentfulPaint.tsx";
import itemsDefault from "../../game_community_upsell/native/GuildUpsellChannelList.tsx";
import handleJoinGuildDefault from "../../main_tabs_v2/native/tabs/guilds/empty_states/GuildsEmpty.tsx";
import NsfwGateGuildSidebarDefault from "../../age_gate/native/components/NsfwGateGuildSidebar.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../a11y/AccessibilityStore.tsx";
import closure_7 from "../../guild_sidebar/ChannelListStore.tsx";
import closure_8 from "../../home_drawer/native/HomeDrawerStore.tsx";
import closure_9 from "../../../stores/GuildStore.tsx";
import closure_10 from "../../../stores/SelectedChannelStore.tsx";
import closure_11 from "../../../stores/views/SortedVoiceStateStore.tsx";
import ME from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
function GuildChannels(guild) {
  const _require = guild;
  importDefault = importDefault(rows[39])(guild.guild);
  const tmp = importDefault(rows[40])(guild.guild);
  rows = tmp.rows;
  ({ gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication } = tmp);
  let obj = _require(rows[24]);
  const items = [closure_7];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => closure_1_7.getGuild(guild.guild.id, { guildActionRows: closure_1, channelNoticeRows: rows }));
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
    tmp3 = callback(closure_17, obj);
  }
  return tmp3;
}
function ChannelsWrapper(selectedGuildId) {
  selectedGuildId = selectedGuildId.selectedGuildId;
  const selectedChannelId = selectedGuildId.selectedChannelId;
  const merged = Object.assign(selectedGuildId, Object.create(null));
  let obj = selectedGuildId(589);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_9.getGuild(selectedGuildId));
  obj1 = selectedGuildId(589);
  const items1 = [closure_10];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => voiceChannelId.getVoiceChannelId());
  if (selectedGuildId === closure_13) {
    obj = { style: null };
    obj[0] = merged.style;
    return callback(itemsDefault, obj);
  } else {
    if (null != stateFromStores) {
      if (selectedGuildId !== closure_12) {
        let tmp2Result = tmp2(1912);
        if (tmp2Result.isFavoritesGuildId(selectedGuildId)) {
          obj = {};
          const merged1 = Object.assign(merged);
          obj.guild = stateFromStores;
          obj.selectedChannelId = selectedChannelId;
          obj.selectedVoiceChannelId = stateFromStores1;
          return callback(tmp2(15826).default, obj);
        } else {
          tmp2Result = tmp2(9092);
          if (tmp2Result.shouldNSFWGateGuild(selectedGuildId)) {
            obj1 = { style: null, guildId: null };
            obj1[0] = merged.style;
            obj1[1] = selectedGuildId;
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
    const obj3 = { style: null, selectedGuildId: null };
    obj3[0] = merged.style;
    obj3[1] = selectedGuildId;
    return callback(handleJoinGuildDefault, obj3);
  }
}
let c4 = importAllResult;
({ EMPTY_NUX_SERVER: closure_12, MOBILE_GUILD_UPSELL_LIST: map1 } = ME);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
const memoResult = importAllResult.memo((gameClaimMarkAsDismissed) => {
  gameClaimMarkAsDismissed = gameClaimMarkAsDismissed.gameClaimMarkAsDismissed;
  let ref = gameClaimMarkAsDismissed;
  const guild = gameClaimMarkAsDismissed.guild;
  let navigation = guild;
  const guildChannels = gameClaimMarkAsDismissed.guildChannels;
  const selectedChannelId = gameClaimMarkAsDismissed.selectedChannelId;
  const selectedVoiceChannelId = gameClaimMarkAsDismissed.selectedVoiceChannelId;
  const applicationAccountLinkMarkAsDismissed = gameClaimMarkAsDismissed.applicationAccountLinkMarkAsDismissed;
  const startApplicationAccountLinkAuthorization = gameClaimMarkAsDismissed.startApplicationAccountLinkAuthorization;
  const accountLinkApplication = gameClaimMarkAsDismissed.accountLinkApplication;
  const favoritesSuggestionsNoticeHeight = gameClaimMarkAsDismissed.favoritesSuggestionsNoticeHeight;
  let categoryStyles;
  let bannerHeight;
  let bannerWidth;
  let headerHeight;
  let fontScale;
  listViewportHeight = undefined;
  ref = undefined;
  let sections;
  let recentlyActiveChannelsEnabled;
  let stateFromStores;
  let optInEnabledForGuild;
  let scaledLiveChannelNoticeHeight;
  let callback4;
  ({ contentInset, style } = gameClaimMarkAsDismissed);
  let obj = ref(guildChannels[15]);
  categoryStyles = obj.useCategoryStyles();
  const tmp5 = navigation(guildChannels[16])(guild);
  bannerHeight = tmp5.bannerHeight;
  bannerWidth = tmp5.bannerWidth;
  headerHeight = tmp5.headerHeight;
  fontScale = tmp5.fontScale;
  ({ listBottom, listPaddingBottom, listViewportHeight } = tmp5);
  ref = selectedVoiceChannelId.useRef(null);
  const items = [ref, guildChannels];
  const effect = selectedVoiceChannelId.useEffect(() => {
    const result = ref(guildChannels[17]).registerFastListChannelVisibilityMethod(ref, guildChannels);
  }, items);
  sections = guildChannels.getSections(false);
  const id = guild.id;
  obj1 = ref(guildChannels[18]);
  let obj2 = ref(guildChannels[19]);
  const isHomeDrawerEnabled = obj2.useIsHomeDrawerEnabled();
  const items1 = [guildChannels, guild, headerHeight];
  const callback = selectedVoiceChannelId.useCallback(() => {
    const state = favoritesSuggestionsNoticeHeight.getState();
    state.noteInteraction();
  }, []);
  const items2 = [guild, bannerHeight, bannerWidth];
  const callback1 = selectedVoiceChannelId.useCallback((fastList) => listViewportHeight(navigation(guildChannels[20]), { fastList, guildChannels, guild: navigation, headerHeight }), items1);
  const callback2 = selectedVoiceChannelId.useCallback((scrollPosValue) => listViewportHeight(navigation(guildChannels[21]), { guild: navigation, scrollPosition: scrollPosValue.scrollPosValue, bannerHeight, bannerWidth }, navigation.id), items2);
  const callback3 = selectedVoiceChannelId.useCallback(() => {
    const result = ref(guildChannels[22]).logChannelListEndReached();
  }, []);
  let obj3 = ref(guildChannels[23]);
  recentlyActiveChannelsEnabled = obj3.useRecentlyActiveChannelsEnabled();
  let obj4 = ref(guildChannels[24]);
  const items3 = [bannerWidth];
  const items4 = [guild.id];
  stateFromStores = obj4.useStateFromStores(items3, () => bannerWidth.getVoiceStates(navigation.id), items4);
  const externalScrollEventHandler = obj1.useExternalScrollEventHandler({ id });
  optInEnabledForGuild = ref(guildChannels[25]).useOptInEnabledForGuild(guild.id);
  const obj6 = ref(guildChannels[25]);
  const guildLiveChannelNoticeInfo = ref(guildChannels[26]).useGuildLiveChannelNoticeInfo(guild.id);
  const obj7 = ref(guildChannels[26]);
  scaledLiveChannelNoticeHeight = ref(guildChannels[27]).getScaledLiveChannelNoticeHeight(fontScale, guildLiveChannelNoticeInfo);
  navigation = undefined;
  const obj8 = ref(guildChannels[27]);
  navigation = ref(guildChannels[11]).useNavigation();
  const items5 = [navigation, ref];
  const effect1 = selectedVoiceChannelId.useEffect(() => {
    c0 = -1;
    navigation = navigation.addListener("tabPress", (arg0) => {
      let timeout = arg0;
      if (null != obj.coerceGuildsRoute(navigation(guildChannels[13])())) {
        if (-1 === timeout) {
          const _clearTimeout2 = clearTimeout;
          clearTimeout(timeout);
          const _setTimeout = setTimeout;
          timeout = setTimeout(() => {
            clearTimeout(c0);
            c0 = -1;
            closure_0 = focused.isFocused();
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
                current.scrollToTop(!startApplicationAccountLinkAuthorization.useReducedMotion);
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
      callback();
    };
  }, items5);
  const items6 = [guildChannels, sections];
  callback4 = selectedVoiceChannelId.useCallback((arg0) => {
    const diff = arg0 - 1;
    let tmp2 = diff;
    if (arg0 <= ref(guildChannels[28]).SECTION_INDEX_FIRST_NAMED_CATEGORY) {
      tmp2 = diff;
      if (0 <= diff) {
        let tmp4 = diff;
        tmp2 = diff;
        if (sections[diff] <= 0) {
          const diff1 = tmp4 - 1;
          tmp2 = diff1;
          while (0 <= diff1) {
            let tmp6 = sections;
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
      tmp7 = !ref(guildChannels[29]).getChannelListSectionHasFooterDivider(guildChannels, tmp2);
      const obj = ref(guildChannels[29]);
    }
    return tmp7;
  }, items6);
  const items7 = [guildChannels, fontScale, stateFromStores, scaledLiveChannelNoticeHeight, favoritesSuggestionsNoticeHeight, listViewportHeight];
  const items8 = [guildChannels, selectedChannelId, guild, gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication];
  const callback5 = selectedVoiceChannelId.useCallback((section, row) => {
    let obj = ref(guildChannels[29]);
    obj = { guildChannels, section, row, fontScale, voiceStates: stateFromStores, liveChannelNoticeHeight: scaledLiveChannelNoticeHeight, favoritesSuggestionsNoticeHeight, listViewportHeight };
    const channelListItemSize = obj.getChannelListItemSize(obj);
    return navigation(guildChannels[30])(channelListItemSize);
  }, items7);
  const items9 = [guildChannels, fontScale, callback4];
  const callback6 = selectedVoiceChannelId.useCallback((section, row) => {
    let obj = { children: null };
    obj = { guildChannels, section, row, selectedChannelId, guild: navigation, gameClaimMarkAsDismissed: ref, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication };
    obj[0] = ref(guildChannels[29]).renderChannelListItem(obj);
    return listViewportHeight(applicationAccountLinkMarkAsDismissed, obj);
  }, items8);
  const items10 = [guildChannels, recentlyActiveChannelsEnabled, callback4, categoryStyles];
  const callback7 = selectedVoiceChannelId.useCallback((section) => {
    const channelListSectionHeaderSize = ref(guildChannels[29]).getChannelListSectionHeaderSize(guildChannels, section, fontScale, callback4(section));
    return navigation(guildChannels[30])(channelListSectionHeaderSize);
  }, items9);
  const items11 = [guildChannels, optInEnabledForGuild, stateFromStores, selectedChannelId, selectedVoiceChannelId];
  const callback8 = selectedVoiceChannelId.useCallback((section) => {
    let obj = ref(guildChannels[29]);
    obj = { children: obj.renderChannelListSectionHeader(guildChannels, section, recentlyActiveChannelsEnabled, callback4(section), categoryStyles) };
    return listViewportHeight(applicationAccountLinkMarkAsDismissed, obj);
  }, items10);
  const items12 = [guildChannels, optInEnabledForGuild, stateFromStores, selectedChannelId, selectedVoiceChannelId];
  const callback9 = selectedVoiceChannelId.useCallback((section) => {
    let obj = ref(guildChannels[29]);
    obj = { guildChannels, section, optInChannelsEnabled: optInEnabledForGuild, voiceStates: stateFromStores, selectedChannelId, selectedVoiceChannelId };
    const result = obj.calculateVoiceSummary(obj);
    const channelListSectionFooterSize = ref(guildChannels[29]).getChannelListSectionFooterSize(guildChannels, section, result);
    return navigation(guildChannels[30])(channelListSectionFooterSize);
  }, items11);
  const items13 = [sections];
  const callback10 = selectedVoiceChannelId.useCallback((section) => {
    let obj = ref(guildChannels[29]);
    obj = { guildChannels, section, optInChannelsEnabled: optInEnabledForGuild, voiceStates: stateFromStores, selectedChannelId, selectedVoiceChannelId };
    const result = obj.calculateVoiceSummary(obj);
    obj = { children: ref(guildChannels[29]).renderChannelListSectionFooter(guildChannels, section, ref, result) };
    return listViewportHeight(applicationAccountLinkMarkAsDismissed, obj);
  }, items12);
  const items14 = [guildChannels];
  const memo = selectedVoiceChannelId.useMemo(() => 0 === sections.reduce((arg0, arg1) => arg0 + arg1, 0), items13);
  const callback11 = selectedVoiceChannelId.useCallback((arg0, arg1, arg2) => ref(guildChannels[29]).getFastListRecyclerKey(guildChannels, arg0, arg1, arg2), items14);
  const context = selectedVoiceChannelId.useContext(navigation(guildChannels[31]));
  const obj9 = ref(guildChannels[11]);
  const youBarTotalHeight = ref(guildChannels[32]).useYouBarTotalHeight(16);
  const obj10 = ref(guildChannels[32]);
  const youBarTotalHeight1 = ref(guildChannels[32]).useYouBarTotalHeight(-16);
  obj = { profile: null, children: null };
  const obj11 = ref(guildChannels[32]);
  obj[0] = ref(guildChannels[33]).Profiles.Channels;
  obj = { style, contentInset, children: null };
  const tmp35 = navigation(guildChannels[33]);
  const tmp36 = ref;
  const items15 = [listViewportHeight(navigation(guildChannels[36]), { guild }), ];
  if (memo) {
    obj1 = { guild: null };
    obj1[0] = guild;
    let tmp34Result = tmp34(tmp4(tmp2[37]), obj1);
  } else {
    obj2 = { insetEnd: null, scrollIndicatorInsets: null, waitFor: null, ref: null, chunkBase: null, stickyHeaderFooter: true, renderHeader: null, headerSize: null, footerSize: null, endReachedThreshold: null, onEndReached: null, renderAccessory: null, disableContentWrappers: true, sections: null, stickySectionsVariant: "disabled", renderSection: null, sectionSize: null, renderItem: null, itemSize: null, renderSectionFooter: null, sectionFooterSize: null, optimizeListItemRender: true, getRecyclerKey: null, initialScrollSection: null, initialScrollItem: null, initialScrollOrientation: "center", onScroll: null, onScrollWorklet: null };
    obj2[0] = youBarTotalHeight;
    obj3 = { bottom: null };
    obj3[0] = youBarTotalHeight1;
    obj2[1] = obj3;
    obj2[2] = context;
    obj2[3] = ref;
    obj2[4] = listViewportHeight;
    obj2[6] = callback2;
    obj2[7] = tmp5.listTop;
    obj2[8] = listBottom + listPaddingBottom;
    obj2[9] = listBottom + listPaddingBottom;
    obj2[10] = callback3;
    obj2[11] = callback1;
    obj2[13] = sections;
    obj2[15] = callback8;
    obj2[16] = callback7;
    obj2[17] = callback6;
    obj2[18] = callback5;
    obj2[19] = callback10;
    obj2[20] = callback9;
    obj2[22] = callback11;
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
    obj2[23] = section;
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
    obj2[24] = row;
    let tmp45;
    if (isHomeDrawerEnabled) {
      tmp45 = callback;
    }
    obj2[26] = tmp45;
    obj2[27] = externalScrollEventHandler;
    tmp34Result = tmp34(tmp4(tmp2[38]), obj2, guild.id);
    const tmp4Result = tmp4(tmp2[38]);
  }
  obj4 = { children: tmp36(navigation(guildChannels[35]), obj) };
  items15[1] = tmp34Result;
  obj[2] = items15;
  obj[1] = listViewportHeight(ref(guildChannels[34]).LayerScope, obj4);
  return listViewportHeight(tmp35, obj);
});
const memoResult1 = importAllResult.memo((arg0) => {
  let obj = { children: null };
  obj = {};
  const merged = Object.assign(arg0);
  const items = [callback(ChannelsWrapper, obj), callback(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "channel-list", checkFocusedScreen: "guilds" })];
  obj[0] = items;
  return callback2(closure_16, obj);
});
let result = require("set").fileFinishedImporting("modules/channel_list_v2/native/RedesignChannelList.tsx");

export default memoResult1;
export const ChannelList = memoResult;