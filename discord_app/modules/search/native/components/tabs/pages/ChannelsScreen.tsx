// === Module 16237: ? ===

// Module 16237
import importAllResult from "noop" /* 19 */;
import closure_4 from "getVoiceStatesForGuild" /* 4523 */;
import closure_5 from "search" /* 11899 */;
import closure_6 from "prototype" /* 11873 */;
import MessageEmbedTypes from "MessageEmbedTypes" /* 7590 */;
import { SearchResultContentEntityTypes as closure_10 } from "SearchEntrypointAnalyticsLocations" /* 7589 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let c3 = importAllResult;
({ EMPTY_VOICE_STATES: error, SearchListItemTypes: closure_8, CHANNELS_ESTIMATED_ITEM_SIZE: c9 } = MessageEmbedTypes);
const memoResult = importAllResult.memo(function ChannelsScreen(searchContext) {
  searchContext = searchContext.searchContext;
  importDefault = undefined;
  let stateFromStores;
  let stateFromStores1;
  let stateFromStores2;
  closure_5 = undefined;
  let onPressGuildTextChannel;
  let onPressGuildVoiceChannel;
  let stateFromStores3;
  let stateFromStores4;
  let fullscreenPlaceholderCount;
  let callback;
  let callback1;
  let obj = searchContext(stateFromStores[7]);
  importDefault = obj.getSearchContextId(searchContext);
  obj1 = searchContext(stateFromStores[8]);
  let items = [closure_5];
  stateFromStores = obj1.useStateFromStores(items, () => store.getTextChannels(closure_1));
  const items1 = [closure_5];
  stateFromStores1 = searchContext(stateFromStores[8]).useStateFromStores(items1, () => store.getVoiceChannels(closure_1));
  let obj3 = searchContext(stateFromStores[8]);
  const items2 = [stateFromStores2];
  const items3 = [searchContext.guildId];
  stateFromStores2 = searchContext(stateFromStores[8]).useStateFromStores(items2, () => stateFromStores2.getVoiceStates(searchContext.guildId), items3);
  const tmp6 = importDefault(stateFromStores[9])(searchContext.guildId);
  closure_5 = tmp6;
  const obj4 = searchContext(stateFromStores[8]);
  onPressGuildTextChannel = searchContext(stateFromStores[10]).useOnPressGuildTextChannel({ searchContext });
  const obj5 = searchContext(stateFromStores[10]);
  onPressGuildVoiceChannel = searchContext(stateFromStores[10]).useOnPressGuildVoiceChannel({ searchContext });
  const obj6 = searchContext(stateFromStores[10]);
  const items4 = [onPressGuildTextChannel];
  stateFromStores3 = searchContext(stateFromStores[8]).useStateFromStores(items4, () => onPressGuildTextChannel.isInitialSearchQuery(searchContext));
  const obj7 = searchContext(stateFromStores[8]);
  const items5 = [onPressGuildTextChannel];
  const items6 = [searchContext];
  stateFromStores4 = searchContext(stateFromStores[8]).useStateFromStores(items5, () => onPressGuildTextChannel.getQueryString(searchContext), items6);
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
  fullscreenPlaceholderCount = searchContext(stateFromStores[13]).useFullscreenPlaceholderCount(obj);
  const items8 = [onPressGuildTextChannel, searchContext];
  callback = stateFromStores1.useCallback((channelId, index) => {
    onPressGuildTextChannel(channelId);
    let obj = callback(stateFromStores[14]);
    obj = { searchContext, channelId, index, entityType: fullscreenPlaceholderCount.CHANNEL };
    const result = obj.trackSearchResultClicked(obj);
  }, items8);
  const items9 = [onPressGuildVoiceChannel, searchContext];
  callback1 = stateFromStores1.useCallback((channelId, index) => {
    onPressGuildVoiceChannel(channelId);
    let obj = callback(stateFromStores[14]);
    obj = { searchContext, channelId, index, entityType: fullscreenPlaceholderCount.CHANNEL };
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
      const item = arr1.forEach((channel) => {
        let arr = closure_1 + arg1;
        obj = { type: stateFromStores3.GUILD_TEXT_CHANNEL, props: obj };
        obj = {
          channel: channel.channel,
          lastMessageId: channel.lastMessageId,
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
          tmp3 = tmp2;
        }
        let arr = tmp3[channel.id];
        if (arr == null) {
          arr = closure_1_7;
        }
        channel2 = channel2.channel;
        if (channel2.isGuildStageVoice()) {
          tmp = tmp2;
        }
        let arr2 = tmp[channel2.id];
        if (arr2 == null) {
          arr2 = closure_1_7;
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
      const item1 = sorted.forEach((channel) => {
        let arr = closure_1 + arg1;
        let obj = { type: stateFromStores3.GUILD_VOICE_CHANNEL, props: null };
        obj = { channel: channel.channel, voiceStates: null, speakerVoiceStates: null, onPress: null };
        let tmp2 = closure_1_4[channel.channel.id];
        if (tmp2 == null) {
          tmp2 = onPressGuildVoiceChannel;
        }
        obj[1] = tmp2;
        let tmp3 = closure_1_5[channel.channel.id];
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
        let num2 = 0;
        if (0 < fullscreenPlaceholderCount) {
          do {
            let obj3 = { type: null, key: null };
            let tmp3 = stateFromStores3;
            obj3[0] = stateFromStores3.MESSAGE_PLACEHOLDER;
            let _HermesInternal = HermesInternal;
            obj3[1] = "message-placeholder-" + num2;
            arr1 = items.push(obj3);
            num2 = num2 + 1;
            let tmp5 = fullscreenPlaceholderCount;
          } while (num2 < fullscreenPlaceholderCount);
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
let result = require("set").fileFinishedImporting("modules/search/native/components/tabs/pages/ChannelsScreen.tsx");

export default memoResult;