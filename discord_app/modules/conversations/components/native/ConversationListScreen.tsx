// === Module 7925: ConversationListScreen ===

// Module 7925 (ConversationListScreen)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import ConversationsAnalytics2 from "ConversationsAnalytics" /* 7909 */;
import ConversationListItemDefault from "ConversationListItem" /* 7926 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConversationsStore from "ConversationsStore" /* 7596 */;

require = fn;
function renderItem(item) {
  item = item.item;
  return jsx(ConversationListItemDefault, { channelId: item.channelId, conversationId: item.conversationId });
}
function keyExtractor(conversationId) {
  return conversationId.conversationId;
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, View: closure_7 } = get_ActivityIndicator);
const ConversationConstants = fn(7598);
({ MAX_CONVERSATIONS_PER_CHANNEL: closure_9, MOBILE_FETCH_LIMIT: c10, MOBILE_PREVIEW_MESSAGE_COUNT: closure_11 } = ConversationConstants);
const jsx = fn(21).jsx;
const viewabilityConfig = { waitForInteraction: false, itemVisiblePercentThreshold: 50, minimumViewTime: 1000 };
fn(4560);
let obj = { container: null, content: null, spinner: null };
obj = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.container = obj;
let createStyles = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
obj.content = createStyles;
obj.spinner = { paddingVertical: nativeDefault.space.PX_16, alignItems: "center" };
let closure_14 = createStyles.createStyles(obj);
createStyles = fn(4560);
let obj3 = { empty: null };
let obj2 = { paddingVertical: nativeDefault.space.PX_16, alignItems: "center" };
obj3.empty = { paddingVertical: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_15 = createStyles.createStyles(obj3);
const ListEmptyComponent = noop.memo(() => {
  let obj = { style: closure_15().empty, children: null };
  obj = { variant: "text-md/normal", color: "text-muted", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.LJuFRG);
  obj.children = jsx(Text_Text.Text, { variant: "text-md/normal", color: "text-muted", children: null });
  return <React5 variant="text-md/normal" color="text-muted">{null}</React5>;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conversations/components/native/ConversationListScreen.tsx");

export default function ConversationListScreen() {
  const tmp = closure_14();
  _require = tmp;
  let obj = require("BaseNavigationContainer");
  const params = obj.useRoute().params;
  const channelId = params.channelId;
  guildId = params.guildId;
  const conversationBackoffRef = require("useConversationBackoffRef").useConversationBackoffRef();
  const tmp5 = first(noop.useState(false), 2);
  first = tmp5[0];
  noop = tmp5[1];
  let obj2 = require("useConversationBackoffRef");
  let tmp2 = _require;
  const tmp3 = guildId;
  const items = [stateFromStores1];
  const items1 = [channelId];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => {
    let channelConversations = ConversationsStore.getChannelConversations(_handleEndReached);
    if (channelConversations == null) {
      channelConversations = [];
    }
    return channelConversations.map((id) => id.id);
  }, items1);
  const items2 = [stateFromStoresArray, channelId];
  const memo = noop.useMemo(() => {
    const substr = stateFromStoresArray.slice();
    const sorted = substr.sort((arg0, arg1) => channelId(guildId[16]).compare(arg1, arg0));
    return sorted.map((conversationId) => ({ channelId, conversationId }));
  }, items2);
  let obj4 = require("initialize");
  const items3 = [stateFromStores1];
  const items4 = [channelId];
  let stateFromStores = require("initialize").useStateFromStores(items3, () => null == ConversationsStore.getEdgeMarker(_handleEndReached, "before"), items4);
  const obj5 = require("initialize");
  const items5 = [stateFromStores1];
  const items6 = [channelId];
  stateFromStores1 = require("initialize").useStateFromStores(items5, () => ConversationsStore.isPendingFetch(_handleEndReached), items6);
  function _handleEndReached() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  _require = conversationBackoffRef(function*() {
    if (ref === 2) {
      ref = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        ref = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            ref = 3;
            throw value;
          } else if (arg0 === 2) {
            ref = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const channelConversations = stateFromStores1.getChannelConversations(c1);
            if (null != channelConversations) {
              if (channelConversations.length > 0) {
                if (length.length > 0) {
                  if (length[0].conversationId === channelConversations[channelConversations.length - 1].id) {
                    guildId = 1;
                    let obj2 = tmp3(guildId[17]);
                    const obj1 = { channelId: tmp32, guildId, direction: "before", anchor: length[length.length - 1].conversationId, limit, throwOnError: true, hydrateMessages: null };
                    obj2 = { limit: limit2 };
                    obj1.hydrateMessages = obj2;
                    c1 = 2;
                    ref = 1;
                    const obj3 = { value: obj2.fetchChannelConversations(obj1), done: false };
                    return obj3;
                  }
                }
              }
            }
            const current2 = ref.current;
            current2.succeed();
            closure_1_5(false);
            ref = 3;
            tmp32 = c1;
          }
        } else if (1 === tmp7) {
          guildId = 0;
          const current = ref.current;
          current.fail(closure_128_1);
          closure_1_5(true);
          ref = 3;
          const obj4 = { value: undefined, done: true };
          return obj4;
        } else if (arg0 === 1) {
          ref = 3;
          throw value;
        } else if (arg0 !== 2) {
          guildId = 0;
        }
        guildId = 0;
        ref = 3;
        obj = { value, done: true };
        return obj;
      } catch (tmp24) {
        if (tmp4 === guildId) {
          ref = tmp2;
          throw tmp24;
        } else {
          c1 = tmp;
        }
      }
    }
  });
  const items7 = [memo, channelId, guildId, conversationBackoffRef];
  const items8 = [tmp.spinner, stateFromStores1, first];
  const callback = noop.useCallback(_handleEndReached, items7);
  const memo1 = noop.useMemo(() => {
    if (stateFromStores1) {
      const obj = { style: spinner.spinner, children: <timestampProducer /> };
      let tmp2 = <React5 style={spinner.spinner}><timestampProducer /></React5>;
    } else {
      tmp2 = null;
    }
    return tmp2;
  }, items8);
  if (stateFromStores) {
    stateFromStores = memo.length > 0;
  }
  if (stateFromStores) {
    stateFromStores = memo.length < ref;
  }
  if (stateFromStores) {
    stateFromStores = !stateFromStores1;
  }
  if (stateFromStores) {
    stateFromStores = !first;
  }
  ref = noop.useRef(undefined);
  const items9 = [channelId];
  obj = { style: null, children: null };
  const items10 = [tmp.container, { paddingBottom: _handleEndReached(guildId[13])().bottom }];
  obj.style = items10;
  const callback1 = obj3.useCallback((arg0) => {
    if (null == ref.current) {
      const _Set = Set;
      const set = new Set();
      tmp2.current = set;
    }
    for (const item10018 of tmp) {
      let conversationId = item10018.item.conversationId;
      let tmp9 = conversationId;
      let current = ref.current;
      if (!current.has(conversationId)) {
        let ConversationsAnalytics = ConversationsAnalytics2.ConversationsAnalytics;
        let obj = { channelId: _handleEndReached, conversationId: null, isFocusMode: false };
        obj.conversationId = tmp9;
        let result = ConversationsAnalytics.trackPreviewImpression(obj);
        let current2 = ref.current;
        let addResult = current2.add(tmp9);
      }
      continue;
    }
  }, items9);
  obj = { data: memo, renderItem, keyExtractor, contentContainerStyle: tmp.content, onEndReached: null, ListEmptyComponent: null, ListFooterComponent: null, onViewableItemsChanged: null, viewabilityConfig: null };
  let tmp16;
  if (stateFromStores) {
    tmp16 = callback;
  }
  obj.onEndReached = tmp16;
  obj.ListEmptyComponent = ListEmptyComponent;
  obj.ListFooterComponent = memo1;
  obj.onViewableItemsChanged = callback1;
  obj.viewabilityConfig = viewabilityConfig;
  obj.children = jsx(tmp2(tmp3[19]).FlashList, { data: memo, renderItem, keyExtractor, contentContainerStyle: tmp.content, onEndReached: null, ListEmptyComponent: null, ListFooterComponent: null, onViewableItemsChanged: null, viewabilityConfig: null });
  return <memo data={memo} renderItem={renderItem} keyExtractor={keyExtractor} contentContainerStyle={tmp.content} onEndReached={null} ListEmptyComponent={null} ListFooterComponent={null} onViewableItemsChanged={null} viewabilityConfig={null} />;
};