// === Module 16877: ChannelsScreen ===

// Module 16877 (ChannelsScreen)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1126 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4590 */;
import TrackingConstants from "TrackingConstants" /* 7512 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 11982 */;
import react from "react" /* 19 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4914 */;
import SearchGuildChannelTabStore from "SearchGuildChannelTabStore" /* 11990 */;
import SearchQueryStore from "SearchQueryStore" /* 11967 */;
import SearchConstants from "SearchConstants" /* 7513 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let channel, importDefault, searchContext;

let c9;
let metroImportAll;
let metroImportDefault;
({ EMPTY_VOICE_STATES: metroImportDefault, SearchListItemTypes: metroImportAll, CHANNELS_ESTIMATED_ITEM_SIZE: c9 } = SearchConstants);
let closure_10 = TrackingConstants.SearchResultContentEntityTypes;
const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  let closure_1;
  let stateFromStores;
  let stateFromStores2;
  let tmp11;
  let tmp12;
  let tmp14;
  let tmp15;
  let tmp18;
  let tmp20;
  let tmp22;
  let tmp24;
  let tmp26;
  let tmp29;
  let tmp4;
  let tmp6;
  let tmp8;
  let tmp9;
  let tmp2 = stateFromStores;
  let obj = searchContext(stateFromStores[8]);
  const cResult = obj.c(53);
  searchContext = searchContext.searchContext;
  if (cResult[0] !== searchContext) {
    const tmpResult = searchContext(tmp2[9]);
    const searchContextId = tmpResult.getSearchContextId(searchContext);
    cResult[0] = searchContext;
    cResult[1] = searchContextId;
    tmp4 = searchContextId;
  } else {
    tmp4 = cResult[1];
  }
  importDefault = tmp4;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [closure_5];
    cResult[2] = items;
    tmp6 = items;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    const fn = function f() {
      return SearchGuildChannelTabStore.getTextChannels(closure_1);
    };
    cResult[3] = tmp4;
    cResult[4] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[4];
  }
  const tmpResult8 = searchContext(tmp2[10]);
  stateFromStores = tmpResult8.useStateFromStores(tmp6, tmp8);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [closure_5];
    cResult[5] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[5];
  }
  if (cResult[6] !== tmp4) {
    const fn2 = function v() {
      return SearchGuildChannelTabStore.getVoiceChannels(closure_1);
    };
    cResult[6] = tmp4;
    cResult[7] = fn2;
    tmp11 = fn2;
  } else {
    tmp11 = cResult[7];
  }
  const tmpResult9 = searchContext(tmp2[10]);
  const stateFromStores1 = tmpResult9.useStateFromStores(tmp9, tmp11);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [stateFromStores2];
    cResult[8] = items2;
    tmp12 = items2;
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
    tmp15 = items3;
    tmp14 = fn3;
  } else {
    tmp14 = cResult[10];
    tmp15 = cResult[11];
  }
  const tmpResult10 = searchContext(tmp2[10]);
  stateFromStores2 = tmpResult10.useStateFromStores(tmp12, tmp14, tmp15);
  closure_5 = require("useStageChannelSpeakerVoiceStates")(searchContext.guildId);
  require("useStageChannelSpeakerVoiceStates")(searchContext.guildId);
  if (cResult[12] !== searchContext) {
    let obj2 = { searchContext };
    cResult[12] = searchContext;
    cResult[13] = obj2;
    tmp18 = obj2;
  } else {
    tmp18 = cResult[13];
  }
  const tmpResult11 = searchContext(tmp2[12]);
  const onPressGuildTextChannel = tmpResult11.useOnPressGuildTextChannel(tmp18);
  if (cResult[14] !== searchContext) {
    const obj3 = { searchContext };
    cResult[14] = searchContext;
    cResult[15] = obj3;
    tmp20 = obj3;
  } else {
    tmp20 = cResult[15];
  }
  const tmpResult12 = searchContext(tmp2[12]);
  const onPressGuildVoiceChannel = tmpResult12.useOnPressGuildVoiceChannel(tmp20);
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [onPressGuildTextChannel];
    cResult[16] = items4;
    tmp22 = items4;
  } else {
    tmp22 = cResult[16];
  }
  if (cResult[17] !== searchContext) {
    const fn4 = function k() {
      return SearchQueryStore.isInitialSearchQuery(searchContext);
    };
    cResult[17] = searchContext;
    cResult[18] = fn4;
    tmp24 = fn4;
  } else {
    tmp24 = cResult[18];
  }
  const tmpResult13 = searchContext(tmp2[10]);
  const stateFromStores3 = tmpResult13.useStateFromStores(tmp22, tmp24);
  if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
    const items5 = [onPressGuildTextChannel];
    cResult[19] = items5;
    tmp26 = items5;
  } else {
    tmp26 = cResult[19];
  }
  if (cResult[20] !== searchContext) {
    class H {
      constructor() {
        return SearchQueryStore.getQueryString(searchContext);
      }
    }
    const items6 = [searchContext];
    cResult[20] = searchContext;
    cResult[21] = H;
    cResult[22] = items6;
    tmp29 = items6;
  } else {
    class H {
      constructor() {
        return SearchQueryStore.getQueryString(searchContext);
      }
    }
    tmp29 = cResult[22];
  }
  const tmpResult14 = searchContext(tmp2[10]);
  const stateFromStores4 = tmpResult14.useStateFromStores(tmp26, H, tmp29);
  if (cResult[23] === stateFromStores4) {
    class H {
      constructor() {
        return SearchQueryStore.getQueryString(searchContext);
      }
    }
  }
  class Y {
    constructor() {
      if ("" !== stateFromStores4.trim()) {
        let formatToPlainStringResult;
        const sum = stateFromStores.length + stateFromStores1.length;
        if (sum > 0) {
          const intl2 = intl3.intl;
          const obj = { count: sum };
          formatToPlainStringResult = intl2.formatToPlainString(intl3.t.ZGVL3g, obj);
        } else {
          const intl = intl3.intl;
          formatToPlainStringResult = intl.string(intl3.t.f5cMAg);
        }
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(formatToPlainStringResult);
      }
    }
  }
  cResult[23] = stateFromStores4;
  cResult[24] = stateFromStores.length;
  cResult[25] = stateFromStores1.length;
  cResult[26] = Y;
}) : ((searchContext) => {
  let tmp18;
  searchContext = searchContext.searchContext;
  let stateFromStores;
  let stateFromStores2;
  let closure_5;
  let tmp = stateFromStores;
  let obj = searchContext(stateFromStores[9]);
  importDefault = obj.getSearchContextId(searchContext);
  let obj2 = searchContext(stateFromStores[10]);
  let items = [closure_5];
  stateFromStores = obj2.useStateFromStores(items, () => SearchGuildChannelTabStore.getTextChannels(closure_1));
  let obj3 = searchContext(stateFromStores[10]);
  const items1 = [closure_5];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => SearchGuildChannelTabStore.getVoiceChannels(closure_1));
  let obj4 = searchContext(stateFromStores[10]);
  const items2 = [stateFromStores2];
  const items3 = [searchContext.guildId];
  stateFromStores2 = obj4.useStateFromStores(items2, () => SortedVoiceStateStore.getVoiceStates(searchContext.guildId), items3);
  const tmp6 = require("useStageChannelSpeakerVoiceStates")(searchContext.guildId);
  closure_5 = tmp6;
  const obj5 = searchContext(stateFromStores[12]);
  const onPressGuildTextChannel = obj5.useOnPressGuildTextChannel({ searchContext });
  const obj6 = searchContext(stateFromStores[12]);
  const onPressGuildVoiceChannel = obj6.useOnPressGuildVoiceChannel({ searchContext });
  const items4 = [onPressGuildTextChannel];
  const obj7 = searchContext(stateFromStores[10]);
  const stateFromStores3 = obj7.useStateFromStores(items4, () => SearchQueryStore.isInitialSearchQuery(searchContext));
  const items5 = [onPressGuildTextChannel];
  const items6 = [searchContext];
  const obj8 = searchContext(stateFromStores[10]);
  const stateFromStores4 = obj8.useStateFromStores(items5, () => SearchQueryStore.getQueryString(searchContext), items6);
  const items7 = [stateFromStores, stateFromStores1, stateFromStores4];
  const effect = stateFromStores1.useEffect(() => {
    if ("" !== stateFromStores4.trim()) {
      let formatToPlainStringResult;
      const sum = stateFromStores.length + stateFromStores1.length;
      if (sum > 0) {
        const intl2 = intl3.intl;
        const obj = { count: sum };
        formatToPlainStringResult = intl2.formatToPlainString(intl3.t.ZGVL3g, obj);
      } else {
        const intl = intl3.intl;
        formatToPlainStringResult = intl.string(intl3.t.f5cMAg);
      }
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(formatToPlainStringResult);
    }
  }, items7);
  const obj10 = { placeholderHeight: stateFromStores4, numColumns: 1 };
  const obj9 = searchContext(stateFromStores[15]);
  const fullscreenPlaceholderCount = obj9.useFullscreenPlaceholderCount(obj10);
  const items8 = [onPressGuildTextChannel, searchContext];
  const callback = stateFromStores1.useCallback((channelId, index) => {
    onPressGuildTextChannel(channelId);
    const obj = search_tracking_TrackingDefault;
    const obj2 = { searchContext, channelId, index, entityType: fullscreenPlaceholderCount.CHANNEL };
    const result = obj.trackSearchResultClicked(obj2);
  }, items8);
  const items9 = [onPressGuildVoiceChannel, searchContext];
  const callback1 = stateFromStores1.useCallback((channelId, index) => {
    onPressGuildVoiceChannel(channelId);
    const obj = search_tracking_TrackingDefault;
    const obj2 = { searchContext, channelId, index, entityType: fullscreenPlaceholderCount.CHANNEL };
    const result = obj.trackSearchResultClicked(obj2);
  }, items9);
  const items10 = [fullscreenPlaceholderCount, callback, callback1, stateFromStores3, tmp6, stateFromStores, stateFromStores1, stateFromStores2];
  const memo = stateFromStores1.useMemo(() => {
    let intl;
    let intl2;
    let obj2;
    let obj3;
    const items = [];
    let length = 0;
    if (stateFromStores.length > 0) {
      let element = { type: stateFromStores3.SECTION, props: obj2 };
      const push2 = items.push;
      obj2 = { title: intl.string(searchContext(stateFromStores[13]).t.nIfr0Y) };
      intl = searchContext(stateFromStores[13]).intl;
      push2(element);
      const item = stateFromStores.forEach((channel, index) => {
        let closure_0 = length + index;
        const element = {
          type: metroImportAll.GUILD_TEXT_CHANNEL,
          props: {
            channel: channel.channel,
            lastMessageId: channel.lastMessageId,
            onPress(arg0) {
              return closure_2_11(arg0, closure_0);
            }
          }
        };
        items.push(element);
      });
      length = stateFromStores.length;
    }
    if (stateFromStores1.length > 0) {
      const element1 = { type: stateFromStores3.SECTION, props: obj3 };
      const push3 = items.push;
      obj3 = { title: intl2.string(searchContext(stateFromStores[13]).t.CYnO4s) };
      intl2 = searchContext(stateFromStores[13]).intl;
      push3(element1);
      let closure_0 = stateFromStores2;
      closure_1 = closure_5;
      const sorted = stateFromStores1.sort((channel, channel2) => {
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
        let obj;
        let tmp2;
        let tmp3;
        let closure_0 = length + index;
        const element = { type: metroImportAll.GUILD_VOICE_CHANNEL, props: obj };
        obj = {
          channel: channel.channel,
          voiceStates: tmp2,
          speakerVoiceStates: tmp3,
          onPress(arg0) {
            return closure_2_12(arg0, closure_0);
          }
        };
        tmp2 = stateFromStores2[channel.channel.id];
        const push = items.push;
        if (tmp2 == null) {
          tmp2 = metroImportDefault;
        }
        tmp3 = closure_5[channel.channel.id];
        if (tmp3 == null) {
          tmp3 = metroImportDefault;
        }
        push(element);
      });
    }
    if (!stateFromStores3) {
      if (0 === items.length) {
        let num2;
        let tmp3 = globalThis;
        let num = 1;
        for (let num2 = 0; num2 < fullscreenPlaceholderCount; num2 = num2 + 1) {
          let obj4 = { type: stateFromStores3.MESSAGE_PLACEHOLDER, key: "message-placeholder-" + num2 };
          let _HermesInternal = HermesInternal;
          let push = items.push;
          let arr = push(obj4);
        }
      }
    }
    return items;
  }, items10);
  const obj11 = searchContext(stateFromStores[17]);
  const messageTabCountsErrorText = obj11.useMessageTabCountsErrorText({ searchContext });
  if (null != messageTabCountsErrorText) {
    const obj12 = { text: messageTabCountsErrorText };
    tmp18 = callback(tmp5(tmp[18]), obj12);
  } else {
    const obj13 = { data: memo };
    tmp18 = callback(tmp5(tmp[19]), obj13);
  }
  return tmp18;
}));
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/ChannelsScreen.tsx");

export default memoResult;