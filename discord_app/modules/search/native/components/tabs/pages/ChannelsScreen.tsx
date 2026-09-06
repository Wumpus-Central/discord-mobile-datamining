// discord_app/modules/search/native/components/tabs/pages/ChannelsScreen.tsx
import util from "../../../../../../intl/index.native.tsx";
import AccessibilityAnnouncer2 from "../../../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import search_tracking_TrackingDefault from "../../../tracking/Tracking.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import SortedVoiceStateStore from "../../../../../../stores/views/SortedVoiceStateStore.tsx";
import SearchGuildChannelTabStore from "../../../stores/SearchGuildChannelTabStore.tsx";
import SearchQueryStore from "../../../stores/SearchQueryStore.tsx";

require = fn;
const SearchConstants = fn(7878);
({
  EMPTY_VOICE_STATES: closure_7,
  SearchListItemTypes: closure_8,
  CHANNELS_ESTIMATED_ITEM_SIZE: closure_9,
} = SearchConstants);
let closure_10 = fn(7877).SearchResultContentEntityTypes;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/ChannelsScreen.tsx");

export default noop.memo(function ChannelsScreen(searchContext) {
  searchContext = searchContext.searchContext;
  let stateFromStores;
  let stateFromStores2;
  closure_5 = undefined;
  let obj = searchContext(stateFromStores[7]);
  importDefault = obj.getSearchContextId(searchContext);
  let obj1 = searchContext(stateFromStores[8]);
  let items = [closure_5];
  stateFromStores = obj1.useStateFromStores(items, () => SearchGuildChannelTabStore.getTextChannels(closure_1));
  const items1 = [closure_5];
  const stateFromStores1 = searchContext(stateFromStores[8]).useStateFromStores(items1, () =>
    SearchGuildChannelTabStore.getVoiceChannels(closure_1),
  );
  const obj3 = searchContext(stateFromStores[8]);
  const items2 = [stateFromStores2];
  const items3 = [searchContext.guildId];
  stateFromStores2 = searchContext(stateFromStores[8]).useStateFromStores(
    items2,
    () => SortedVoiceStateStore.getVoiceStates(searchContext.guildId),
    items3,
  );
  const tmp6 = require("useStageChannelSpeakerVoiceStates")(searchContext.guildId);
  closure_5 = tmp6;
  const obj4 = searchContext(stateFromStores[8]);
  const onPressGuildTextChannel = searchContext(stateFromStores[10]).useOnPressGuildTextChannel({ searchContext });
  const obj5 = searchContext(stateFromStores[10]);
  const onPressGuildVoiceChannel = searchContext(stateFromStores[10]).useOnPressGuildVoiceChannel({ searchContext });
  const obj6 = searchContext(stateFromStores[10]);
  const items4 = [onPressGuildTextChannel];
  const stateFromStores3 = searchContext(stateFromStores[8]).useStateFromStores(items4, () =>
    SearchQueryStore.isInitialSearchQuery(searchContext),
  );
  const obj7 = searchContext(stateFromStores[8]);
  const items5 = [onPressGuildTextChannel];
  const items6 = [searchContext];
  const stateFromStores4 = searchContext(stateFromStores[8]).useStateFromStores(
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
  const obj8 = searchContext(stateFromStores[8]);
  obj = { placeholderHeight: stateFromStores4, numColumns: 1 };
  const fullscreenPlaceholderCount = searchContext(stateFromStores[13]).useFullscreenPlaceholderCount(obj);
  const items8 = [onPressGuildTextChannel, searchContext];
  const callback = stateFromStores1.useCallback((channelId, index) => {
    onPressGuildTextChannel(channelId);
    const obj = { searchContext, channelId, index, entityType: constants.CHANNEL };
    const result = obj.trackSearchResultClicked(obj);
  }, items8);
  const items9 = [onPressGuildVoiceChannel, searchContext];
  const callback1 = stateFromStores1.useCallback((channelId, index) => {
    onPressGuildVoiceChannel(channelId);
    const obj = { searchContext, channelId, index, entityType: constants.CHANNEL };
    const result = obj.trackSearchResultClicked(obj);
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
    let arr1 = stateFromStores;
    if (stateFromStores.length > 0) {
      let element = { type: stateFromStores3.SECTION, props: null };
      let obj = { title: null };
      const intl = searchContext(stateFromStores[11]).intl;
      obj.title = intl.string(searchContext(stateFromStores[11]).t.nIfr0Y);
      element.props = obj;
      items.push(element);
      const item = arr1.forEach((channel, index) => {
        closure_0 = closure_1 + index;
        const element = {
          type: constants.GUILD_TEXT_CHANNEL,
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
      closure_1 = arr1.length;
    }
    obj = stateFromStores1;
    if (stateFromStores1.length > 0) {
      const element1 = { type: stateFromStores3.SECTION, props: null };
      obj = { title: null };
      const intl2 = searchContext(stateFromStores[11]).intl;
      obj.title = intl2.string(searchContext(stateFromStores[11]).t.CYnO4s);
      element1.props = obj;
      items.push(element1);
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
          arr = onPressGuildVoiceChannel;
        }
        channel2 = channel2.channel;
        if (channel2.isGuildStageVoice()) {
          tmp = tmp2;
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
        const element = { type: constants.GUILD_VOICE_CHANNEL, props: null };
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
        let num2 = 0;
        if (0 < fullscreenPlaceholderCount) {
          do {
            let obj1 = { type: null, key: null };
            obj1.type = stateFromStores3.MESSAGE_PLACEHOLDER;
            let _HermesInternal = HermesInternal;
            obj1.key = "message-placeholder-" + num2;
            arr1 = items.push(obj1);
            num2 = num2 + 1;
          } while (num2 < fullscreenPlaceholderCount);
        }
      }
    }
    return items;
  }, items10);
  const obj9 = searchContext(stateFromStores[13]);
  const messageTabCountsErrorText = searchContext(stateFromStores[15]).useMessageTabCountsErrorText({ searchContext });
  if (null != messageTabCountsErrorText) {
    obj = { text: messageTabCountsErrorText };
    let tmp18 = callback(tmp5(tmp[16]), obj);
  } else {
    obj1 = { data: memo };
    tmp18 = callback(tmp5(tmp[17]), obj1);
  }
  return tmp18;
});
