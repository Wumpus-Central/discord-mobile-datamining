// discord_app/modules/search/native/components/tabs/pages/ChannelsScreen.tsx
import util from "../../../../../../intl/index.native.tsx";
import AccessibilityAnnouncer2 from "../../../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import search_tracking_TrackingDefault from "../../../tracking/Tracking.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import SortedVoiceStateStore from "../../../../../../stores/views/SortedVoiceStateStore.tsx";
import SearchGuildChannelTabStore from "../../../stores/SearchGuildChannelTabStore.tsx";
import SearchQueryStore from "../../../stores/SearchQueryStore.tsx";

const require = globalThis.__r;

require = fn;
const SearchConstants = fn(9285);
({
  EMPTY_VOICE_STATES: closure_7,
  SearchListItemTypes: closure_8,
  CHANNELS_ESTIMATED_ITEM_SIZE: closure_9,
} = SearchConstants);
let closure_10 = fn(9284).SearchResultContentEntityTypes;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/ChannelsScreen.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function ChannelsScreen(searchContext) {
        const cResult = searchContext(stateFromStores[8]).c(53);
        searchContext = searchContext.searchContext;
        if (cResult[0] !== searchContext) {
          const searchContextId = tmp(tmp2[9]).getSearchContextId(searchContext);
          cResult[0] = searchContext;
          cResult[1] = searchContextId;
          let tmp4 = searchContextId;
          const tmpResult = tmp(tmp2[9]);
        } else {
          tmp4 = cResult[1];
        }
        importDefault = tmp4;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [closure_5];
          cResult[2] = items;
          let tmp6 = items;
        } else {
          tmp6 = cResult[2];
        }
        if (cResult[3] !== tmp4) {
          const fn = function f() {
            return SearchGuildChannelTabStore.getTextChannels(closure_1);
          };
          cResult[3] = tmp4;
          cResult[4] = fn;
          let tmp8 = fn;
        } else {
          tmp8 = cResult[4];
        }
        let obj = searchContext(stateFromStores[8]);
        stateFromStores = searchContext(stateFromStores[10]).useStateFromStores(tmp6, tmp8);
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [closure_5];
          cResult[5] = items1;
          let tmp9 = items1;
        } else {
          tmp9 = cResult[5];
        }
        if (cResult[6] !== tmp4) {
          const fn2 = function v() {
            return SearchGuildChannelTabStore.getVoiceChannels(closure_1);
          };
          cResult[6] = tmp4;
          cResult[7] = fn2;
          let tmp11 = fn2;
        } else {
          tmp11 = cResult[7];
        }
        const tmpResult8 = searchContext(stateFromStores[10]);
        const stateFromStores1 = searchContext(stateFromStores[10]).useStateFromStores(tmp9, tmp11);
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [stateFromStores2];
          cResult[8] = items2;
          let tmp12 = items2;
        } else {
          tmp12 = cResult[8];
        }
        if (cResult[9] !== searchContext.guildId) {
          const fn3 = function x() {
            return SortedVoiceStateStore.getVoiceStates(searchContext.guildId);
          };
          const items3 = [searchContext.guildId];
          cResult[9] = searchContext.guildId;
          cResult[10] = fn3;
          cResult[11] = items3;
          let tmp15 = items3;
          let tmp14 = fn3;
        } else {
          tmp14 = cResult[10];
          tmp15 = cResult[11];
        }
        const tmpResult9 = searchContext(stateFromStores[10]);
        stateFromStores2 = searchContext(stateFromStores[10]).useStateFromStores(tmp12, tmp14, tmp15);
        const tmpResult10 = searchContext(stateFromStores[10]);
        closure_5 = require("useStageChannelSpeakerVoiceStates")(searchContext.guildId);
        if (cResult[12] !== searchContext) {
          const obj2 = { searchContext };
          cResult[12] = searchContext;
          cResult[13] = obj2;
          let tmp18 = obj2;
        } else {
          tmp18 = cResult[13];
        }
        const tmp17 = require("useStageChannelSpeakerVoiceStates")(searchContext.guildId);
        const onPressGuildTextChannel = searchContext(stateFromStores[12]).useOnPressGuildTextChannel(tmp18);
        if (cResult[14] !== searchContext) {
          const obj3 = { searchContext };
          cResult[14] = searchContext;
          cResult[15] = obj3;
          let tmp20 = obj3;
        } else {
          tmp20 = cResult[15];
        }
        const tmpResult11 = searchContext(stateFromStores[12]);
        const onPressGuildVoiceChannel = searchContext(stateFromStores[12]).useOnPressGuildVoiceChannel(tmp20);
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          const items4 = [onPressGuildTextChannel];
          cResult[16] = items4;
          let tmp22 = items4;
        } else {
          tmp22 = cResult[16];
        }
        if (cResult[17] !== searchContext) {
          const fn4 = function k() {
            return SearchQueryStore.isInitialSearchQuery(searchContext);
          };
          cResult[17] = searchContext;
          cResult[18] = fn4;
          let tmp24 = fn4;
        } else {
          tmp24 = cResult[18];
        }
        const tmpResult12 = searchContext(stateFromStores[12]);
        const stateFromStores3 = searchContext(stateFromStores[10]).useStateFromStores(tmp22, tmp24);
        if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
          const items5 = [onPressGuildTextChannel];
          cResult[19] = items5;
          let tmp26 = items5;
        } else {
          tmp26 = cResult[19];
        }
        if (cResult[20] !== searchContext) {
          class H {
            constructor() {
              return closure_6.getQueryString(searchContext);
            }
          }
          const items6 = [searchContext];
          cResult[20] = searchContext;
          cResult[21] = H;
          cResult[22] = items6;
          let tmp29 = items6;
        } else {
          class H {
            constructor() {
              return closure_6.getQueryString(searchContext);
            }
          }
          tmp29 = cResult[22];
        }
        const tmpResult13 = searchContext(stateFromStores[10]);
        const stateFromStores4 = searchContext(stateFromStores[10]).useStateFromStores(tmp26, H, tmp29);
        if (cResult[23] === stateFromStores4) {
          class H {
            constructor() {
              return closure_6.getQueryString(searchContext);
            }
          }
        }
        class Y {
          constructor() {
            if ("" === closure_8.trim()) {
              return;
            } else {
              tmp13 = closure_2;
              tmp14 = closure_3;
              sum = closure_2.length + closure_3.length;
              num = 0;
              if (sum > 0) {
                tmp6 = closure_0;
                tmp7 = closure_2;
                intl2 = closure_0(closure_2[13]).intl;
                tmp8 = closure_0;
                tmp9 = closure_2;
                obj = { count: null };
                obj.count = sum;
                formatToPlainStringResult = intl2.formatToPlainString(closure_0(closure_2[13]).t.ZGVL3g, obj);
              } else {
                tmp = closure_0;
                tmp2 = closure_2;
                intl = closure_0(closure_2[13]).intl;
                tmp3 = closure_0;
                tmp4 = closure_2;
                formatToPlainStringResult = intl.string(closure_0(closure_2[13]).t.f5cMAg);
              }
              tmp10 = closure_0;
              tmp11 = closure_2;
              AccessibilityAnnouncer = closure_0(closure_2[14]).AccessibilityAnnouncer;
              announceResult = AccessibilityAnnouncer.announce(formatToPlainStringResult);
            }
            return;
          }
        }
        cResult[23] = stateFromStores4;
        cResult[24] = stateFromStores.length;
        cResult[25] = stateFromStores1.length;
        cResult[26] = Y;
        const tmpResult14 = searchContext(stateFromStores[10]);
      }
    : function ChannelsScreen(searchContext) {
        searchContext = searchContext.searchContext;
        let stateFromStores;
        let stateFromStores2;
        closure_5 = undefined;
        importDefault = searchContext(stateFromStores[9]).getSearchContextId(searchContext);
        let obj = searchContext(stateFromStores[9]);
        let items = [closure_5];
        stateFromStores = searchContext(stateFromStores[10]).useStateFromStores(items, () =>
          SearchGuildChannelTabStore.getTextChannels(closure_1),
        );
        let obj2 = searchContext(stateFromStores[10]);
        const items1 = [closure_5];
        const stateFromStores1 = searchContext(stateFromStores[10]).useStateFromStores(items1, () =>
          SearchGuildChannelTabStore.getVoiceChannels(closure_1),
        );
        let obj3 = searchContext(stateFromStores[10]);
        const items2 = [stateFromStores2];
        const items3 = [searchContext.guildId];
        stateFromStores2 = searchContext(stateFromStores[10]).useStateFromStores(
          items2,
          () => SortedVoiceStateStore.getVoiceStates(searchContext.guildId),
          items3,
        );
        const tmp6 = require("useStageChannelSpeakerVoiceStates")(searchContext.guildId);
        closure_5 = tmp6;
        let obj4 = searchContext(stateFromStores[10]);
        const onPressGuildTextChannel = searchContext(stateFromStores[12]).useOnPressGuildTextChannel({
          searchContext,
        });
        const obj5 = searchContext(stateFromStores[12]);
        const onPressGuildVoiceChannel = searchContext(stateFromStores[12]).useOnPressGuildVoiceChannel({
          searchContext,
        });
        const obj6 = searchContext(stateFromStores[12]);
        const items4 = [onPressGuildTextChannel];
        const stateFromStores3 = searchContext(stateFromStores[10]).useStateFromStores(items4, () =>
          SearchQueryStore.isInitialSearchQuery(searchContext),
        );
        const obj7 = searchContext(stateFromStores[10]);
        const items5 = [onPressGuildTextChannel];
        const items6 = [searchContext];
        const stateFromStores4 = searchContext(stateFromStores[10]).useStateFromStores(
          items5,
          () => SearchQueryStore.getQueryString(searchContext),
          items6,
        );
        const items7 = [stateFromStores, stateFromStores1, stateFromStores4];
        const effect = stateFromStores1.useEffect(() => {
          if ("" !== stateFromStores4.trim()) {
            const sum = stateFromStores.length + stateFromStores1.length;
            if (sum > 0) {
              const intl2 = util.intl;
              const obj = { count: sum };
              let formatToPlainStringResult = intl2.formatToPlainString(util.t.ZGVL3g, obj);
            } else {
              const intl = util.intl;
              formatToPlainStringResult = intl.string(util.t.f5cMAg);
            }
            const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
            AccessibilityAnnouncer.announce(formatToPlainStringResult);
          }
        }, items7);
        const obj8 = searchContext(stateFromStores[10]);
        const fullscreenPlaceholderCount = searchContext(stateFromStores[15]).useFullscreenPlaceholderCount({
          placeholderHeight: stateFromStores4,
          numColumns: 1,
        });
        const items8 = [onPressGuildTextChannel, searchContext];
        const callback = stateFromStores1.useCallback((channelId, index) => {
          onPressGuildTextChannel(channelId);
          const result = search_tracking_TrackingDefault.trackSearchResultClicked({
            searchContext,
            channelId,
            index,
            entityType: constants.CHANNEL,
          });
        }, items8);
        const items9 = [onPressGuildVoiceChannel, searchContext];
        const callback1 = stateFromStores1.useCallback((channelId, index) => {
          onPressGuildVoiceChannel(channelId);
          const result = search_tracking_TrackingDefault.trackSearchResultClicked({
            searchContext,
            channelId,
            index,
            entityType: constants.CHANNEL,
          });
        }, items9);
        const items10 = [
          fullscreenPlaceholderCount,
          callback,
          callback1,
          stateFromStores3,
          tmp6,
          stateFromStores,
          stateFromStores1,
          stateFromStores2,
        ];
        const memo = stateFromStores1.useMemo(() => {
          const items = [];
          closure_0 = items;
          closure_1 = 0;
          if (stateFromStores.length > 0) {
            let element = { type: stateFromStores3.SECTION, props: null };
            const obj2 = { title: null };
            const intl = searchContext(stateFromStores[13]).intl;
            obj2.title = intl.string(searchContext(stateFromStores[13]).t.nIfr0Y);
            element.props = obj2;
            items.push(element);
            const item = stateFromStores.forEach((channel, index) => {
              closure_0 = closure_1 + index;
              const element = {
                type: closure_3_8.GUILD_TEXT_CHANNEL,
                props: {
                  channel: channel.channel,
                  lastMessageId: channel.lastMessageId,
                  onPress(arg0) {
                    return callback(arg0, closure_0);
                  },
                },
              };
              closure_0.push(element);
            });
            closure_1 = stateFromStores.length;
          }
          if (stateFromStores1.length > 0) {
            const element1 = { type: stateFromStores3.SECTION, props: null };
            const obj3 = { title: null };
            const intl2 = searchContext(stateFromStores[13]).intl;
            obj3.title = intl2.string(searchContext(stateFromStores[13]).t.CYnO4s);
            element1.props = obj3;
            items.push(element1);
            closure_0 = stateFromStores2;
            closure_1 = closure_5;
            const sorted = stateFromStores1.sort(function sort(channel, channel2) {
              channel = channel.channel;
              let tmp = closure_0;
              let tmp3 = closure_0;
              if (channel.isGuildStageVoice()) {
                tmp3 = closure_1;
              }
              let arr = tmp3[channel.id];
              if (arr == null) {
                arr = onPressGuildVoiceChannel;
              }
              channel2 = channel2.channel;
              if (channel2.isGuildStageVoice()) {
                tmp = closure_1;
              }
              let arr2 = tmp[channel2.id];
              if (arr2 == null) {
                arr2 = onPressGuildVoiceChannel;
              }
              let num = 1;
              if (arr.length >= arr2.length) {
                let num2 = 0;
                if (arr.length > arr2.length) {
                  num2 = -1;
                }
                num = num2;
              }
              return num;
            });
            const item1 = sorted.forEach((channel, index) => {
              closure_0 = closure_1 + index;
              const element = { type: closure_3_8.GUILD_VOICE_CHANNEL, props: null };
              const obj = { channel: channel.channel, voiceStates: null, speakerVoiceStates: null, onPress: null };
              let tmp2 = stateFromStores2[channel.channel.id];
              if (tmp2 == null) {
                tmp2 = React5;
              }
              obj.voiceStates = tmp2;
              let tmp3 = closure_5[channel.channel.id];
              if (tmp3 == null) {
                tmp3 = React5;
              }
              obj.speakerVoiceStates = tmp3;
              obj.onPress = function onPress(arg0) {
                return callback1(arg0, closure_0);
              };
              element.props = obj;
              closure_0.push(element);
            });
          }
          if (!stateFromStores3) {
            if (0 === items.length) {
              for (let num2 = 0; num2 < fullscreenPlaceholderCount; num2 = num2 + 1) {
                let obj4 = { type: stateFromStores3.MESSAGE_PLACEHOLDER, key: null };
                let _HermesInternal = HermesInternal;
                obj4.key = "message-placeholder-" + num2;
                let arr6 = items.push(obj4);
              }
            }
          }
          return items;
        }, items10);
        const obj10 = { placeholderHeight: stateFromStores4, numColumns: 1 };
        const obj9 = searchContext(stateFromStores[15]);
        const messageTabCountsErrorText = searchContext(stateFromStores[17]).useMessageTabCountsErrorText({
          searchContext,
        });
        if (null != messageTabCountsErrorText) {
          const obj12 = { text: messageTabCountsErrorText };
          let tmp18 = callback(tmp5(tmp[18]), obj12);
        } else {
          const obj13 = { data: memo };
          tmp18 = callback(tmp5(tmp[19]), obj13);
        }
        return tmp18;
      },
);
