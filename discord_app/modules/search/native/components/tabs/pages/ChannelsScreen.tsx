// discord_app/modules/search/native/components/tabs/pages/ChannelsScreen.tsx
import importAllResult from "../../../../../../../_runtime/00019_noop.js";
import getVoiceStatesForGuild from "../../../../../../stores/views/SortedVoiceStateStore.tsx";
import search from "../../../stores/SearchGuildChannelTabStore.tsx";
import prototype from "../../../stores/SearchQueryStore.tsx";
import MessageEmbedTypes from "../../../../SearchConstants.tsx";
import { SearchResultContentEntityTypes as closure_10 } from "../../../tracking/TrackingConstants.tsx";
import { jsx } from "../../../../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
let c3 = importAllResult;
({ EMPTY_VOICE_STATES: error, SearchListItemTypes: closure_8, CHANNELS_ESTIMATED_ITEM_SIZE: c9 } = MessageEmbedTypes);
const memoResult = importAllResult.memo(function ChannelsScreen(searchContext) {
  searchContext = searchContext.searchContext;
  let stateFromStores;
  let stateFromStores2;
  closure_5 = undefined;
  let obj = searchContext(stateFromStores[7]);
  importDefault = obj.getSearchContextId(searchContext);
  obj1 = searchContext(stateFromStores[8]);
  let items = [closure_5];
  stateFromStores = obj1.useStateFromStores(items, () => store.getTextChannels(closure_1));
  const items1 = [closure_5];
  const stateFromStores1 = searchContext(stateFromStores[8]).useStateFromStores(items1, () => store.getVoiceChannels(closure_1));
  let obj3 = searchContext(stateFromStores[8]);
  const items2 = [stateFromStores2];
  const items3 = [searchContext.guildId];
  stateFromStores2 = searchContext(stateFromStores[8]).useStateFromStores(items2, () => stateFromStores2.getVoiceStates(searchContext.guildId), items3);
  const tmp6 = importDefault(stateFromStores[9])(searchContext.guildId);
  closure_5 = tmp6;
  const obj4 = searchContext(stateFromStores[8]);
  const onPressGuildTextChannel = searchContext(stateFromStores[10]).useOnPressGuildTextChannel({ searchContext });
  const obj5 = searchContext(stateFromStores[10]);
  const onPressGuildVoiceChannel = searchContext(stateFromStores[10]).useOnPressGuildVoiceChannel({ searchContext });
  const obj6 = searchContext(stateFromStores[10]);
  const items4 = [onPressGuildTextChannel];
  const stateFromStores3 = searchContext(stateFromStores[8]).useStateFromStores(items4, () => onPressGuildTextChannel.isInitialSearchQuery(searchContext));
  const obj7 = searchContext(stateFromStores[8]);
  const items5 = [onPressGuildTextChannel];
  const items6 = [searchContext];
  const stateFromStores4 = searchContext(stateFromStores[8]).useStateFromStores(items5, () => onPressGuildTextChannel.getQueryString(searchContext), items6);
  const items7 = [stateFromStores, stateFromStores1, stateFromStores4];
  const effect = stateFromStores1.useEffect(() => {
    if ("" !== stateFromStores4.trim()) {
      const sum = stateFromStores.length + stateFromStores1.length;
      if (sum > 0) {
        const intl2 = searchContext(stateFromStores[11]).intl;
        const obj = { count: null };
        obj[0] = sum;
        let formatToPlainStringResult = intl2.formatToPlainString(searchContext(stateFromStores[11]).t.ZGVL3g, obj);
      } else {
        const intl = searchContext(stateFromStores[11]).intl;
        formatToPlainStringResult = intl.string(searchContext(stateFromStores[11]).t.f5cMAg);
      }
      const AccessibilityAnnouncer = searchContext(stateFromStores[12]).AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(formatToPlainStringResult);
    }
  }, items7);
  const obj8 = searchContext(stateFromStores[8]);
  obj = { placeholderHeight: stateFromStores4, numColumns: 1 };
  const fullscreenPlaceholderCount = searchContext(stateFromStores[13]).useFullscreenPlaceholderCount(obj);
  const items8 = [onPressGuildTextChannel, searchContext];
  const callback = stateFromStores1.useCallback((channelId, index) => {
    onPressGuildTextChannel(channelId);
    callback(stateFromStores[14]);
    const obj = { searchContext, channelId, index, entityType: fullscreenPlaceholderCount.CHANNEL };
    const result = obj.trackSearchResultClicked(obj);
  }, items8);
  const items9 = [onPressGuildVoiceChannel, searchContext];
  const callback1 = stateFromStores1.useCallback((channelId, index) => {
    onPressGuildVoiceChannel(channelId);
    callback(stateFromStores[14]);
    const obj = { searchContext, channelId, index, entityType: fullscreenPlaceholderCount.CHANNEL };
    const result = obj.trackSearchResultClicked(obj);
  }, items9);
  const items10 = [fullscreenPlaceholderCount, callback, callback1, stateFromStores3, tmp6, stateFromStores, stateFromStores1, stateFromStores2];
  const memo = stateFromStores1.useMemo(() => {
    const items = [];
    closure_0 = items;
    closure_1 = 0;
    let arr1 = stateFromStores;
    if (stateFromStores.length > 0) {
      let obj = { type: null, props: null };
      obj[0] = stateFromStores3.SECTION;
      obj = { title: null };
      const intl = searchContext(stateFromStores[11]).intl;
      obj[0] = intl.string(searchContext(stateFromStores[11]).t.nIfr0Y);
      obj[1] = obj;
      items.push(obj);
      const item = arr1.forEach((item, index) => {
        let arr = closure_1 + index;
        const obj = {
          channel: item.channel,
          lastMessageId: item.lastMessageId,
          onPress(arg0) {
            return closure_1_11(arg0, closure_0);
          }
        };
        arr = arr.push(obj);
      });
      closure_1 = arr1.length;
    }
    obj = stateFromStores1;
    if (stateFromStores1.length > 0) {
      obj1 = { type: null, props: null };
      obj1[0] = stateFromStores3.SECTION;
      const obj2 = { title: null };
      const intl2 = searchContext(stateFromStores[11]).intl;
      obj2[0] = intl2.string(searchContext(stateFromStores[11]).t.CYnO4s);
      obj1[1] = obj2;
      items.push(obj1);
      closure_0 = stateFromStores2;
      closure_1 = closure_5;
      const sorted = obj.sort((channel, channel2) => {
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
      const item1 = sorted.forEach((item, index) => {
        let arr = closure_1 + index;
        const obj = { channel: item.channel, voiceStates: null, speakerVoiceStates: null, onPress: null };
        let tmp2 = stateFromStores2[item.channel.id];
        if (tmp2 == null) {
          tmp2 = onPressGuildVoiceChannel;
        }
        obj[1] = tmp2;
        let tmp3 = closure_1_5[item.channel.id];
        if (tmp3 == null) {
          tmp3 = onPressGuildVoiceChannel;
        }
        obj[2] = tmp3;
        obj[3] = function onPress(arg0) {
          return closure_1_12(arg0, closure_0);
        };
        obj[1] = obj;
        arr = arr.push(obj);
      });
    }
    if (!stateFromStores3) {
      if (0 === items.length) {
        for (let num2 = 0; num2 < fullscreenPlaceholderCount; num2 = num2 + 1) {
          let obj3 = { type: null, key: null };
          obj3[0] = stateFromStores3.MESSAGE_PLACEHOLDER;
          let _HermesInternal = HermesInternal;
          obj3[1] = "message-placeholder-" + num2;
          arr1 = items.push(obj3);
        }
      }
    }
    return items;
  }, items10);
  const obj9 = searchContext(stateFromStores[13]);
  const messageTabCountsErrorText = searchContext(stateFromStores[15]).useMessageTabCountsErrorText({ searchContext });
  if (null != messageTabCountsErrorText) {
    obj = { text: null };
    obj[0] = messageTabCountsErrorText;
    let tmp18 = callback(tmp5(tmp[16]), obj);
  } else {
    obj1 = { data: null };
    obj1[0] = memo;
    tmp18 = callback(tmp5(tmp[17]), obj1);
  }
  return tmp18;
});
let result = require("obj132").fileFinishedImporting("modules/search/native/components/tabs/pages/ChannelsScreen.tsx");

export default memoResult;