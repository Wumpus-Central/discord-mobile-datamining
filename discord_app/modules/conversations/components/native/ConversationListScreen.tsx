// discord_app/modules/conversations/components/native/ConversationListScreen.tsx
import closure_3 from "CONVERSATION_COLORS";
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import get_ActivityIndicator from "_fetchChannelConversations";
import removePendingListFetch from "removePendingListFetch";
import CONVERSATION_COLORS from "CONVERSATION_COLORS";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { ConversationListItemBase } from "ConversationListItem.tsx";

let c10;
let c9;
let closure_6;
let error;
let unpackModuleId;
const require = arg1;
function renderItem(item) {
  item = item.item;
  return jsx(ConversationListItemBase, { channelId: item.channelId, conversationId: item.conversationId });
}
function keyExtractor(conversationId) {
  return conversationId.conversationId;
}
let c5 = importAllResult;
({ ActivityIndicator: closure_6, View: error } = get_ActivityIndicator);
({ MAX_CONVERSATIONS_PER_CHANNEL: c9, MOBILE_FETCH_LIMIT: c10, MOBILE_PREVIEW_MESSAGE_COUNT: unpackModuleId } = CONVERSATION_COLORS);
let closure_13 = { waitForInteraction: false, itemVisiblePercentThreshold: 50, minimumViewTime: 1000 };
let obj = { container: null, content: null, spinner: null };
obj = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
obj[0] = obj;
createCacheKey = { paddingHorizontal: require("Themes").space.PX_16, paddingTop: require("Themes").space.PX_16 };
obj[1] = createCacheKey;
obj[2] = { paddingVertical: require("Themes").space.PX_16, alignItems: "center" };
let closure_14 = createCacheKey.createStyles(obj);
let obj3 = { empty: null };
let obj2 = { paddingVertical: require("Themes").space.PX_16, alignItems: "center" };
obj3[0] = { paddingVertical: require("Themes").space.PX_24, paddingHorizontal: require("Themes").space.PX_16 };
let closure_15 = createCacheKey.createStyles(obj3);
let closure_18 = importAllResult.memo(() => {
  let obj = { style: callback2().empty, children: null };
  obj = { variant: "text-md/normal", color: "text-muted", children: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[2] = intl.string(getSystemLocale /* getSystemLocale */.t.LJuFRG);
  obj[1] = jsx(Text /* Text */.Text, { variant: "text-md/normal", color: "text-muted", children: null });
  return <closure_7 variant="text-md/normal" color="text-muted">{null}</closure_7>;
});
let obj4 = { paddingVertical: require("Themes").space.PX_24, paddingHorizontal: require("Themes").space.PX_16 };
let result = require("noop").fileFinishedImporting("modules/conversations/components/native/ConversationListScreen.tsx");

export default function ConversationListScreen() {
  const tmp = callback();
  let _require = tmp;
  let obj = _require(guildId[12]);
  const params = obj.useRoute().params;
  const channelId = params.channelId;
  let _handleEndReached = channelId;
  guildId = params.guildId;
  const conversationBackoffRef = _require(guildId[14]).useConversationBackoffRef();
  const tmp5 = first(importAllResult.useState(false), 2);
  first = tmp5[0];
  let obj2 = _require(guildId[14]);
  let tmp2 = _require;
  const tmp3 = guildId;
  const items = [stateFromStores1];
  const items1 = [channelId];
  const stateFromStoresArray = _require(guildId[15]).useStateFromStoresArray(items, () => {
    let channelConversations = stateFromStores1.getChannelConversations(_handleEndReached);
    if (channelConversations == null) {
      channelConversations = [];
    }
    return channelConversations.map((id) => id.id);
  }, items1);
  const items2 = [stateFromStoresArray, channelId];
  const memo = importAllResult.useMemo(() => {
    const substr = stateFromStoresArray.slice();
    const sorted = substr.sort((arg0, arg1) => callback(table[16]).compare(arg1, arg0));
    return sorted.map((conversationId) => ({ channelId: closure_1, conversationId }));
  }, items2);
  let obj4 = _require(guildId[15]);
  const items3 = [stateFromStores1];
  const items4 = [channelId];
  let stateFromStores = _require(guildId[15]).useStateFromStores(items3, () => null == stateFromStores1.getEdgeMarker(_handleEndReached, "before"), items4);
  const obj5 = _require(guildId[15]);
  const items5 = [stateFromStores1];
  const items6 = [channelId];
  stateFromStores1 = _require(guildId[15]).useStateFromStores(items5, () => stateFromStores1.isPendingFetch(_handleEndReached), items6);
  _require = undefined;
  _handleEndReached = function _handleEndReached(arg0) {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  _require = conversationBackoffRef(function*() {
    if (ref === 2) {
      ref = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
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
            throw arg1;
          } else if (arg0 === 2) {
            ref = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const callback = tmp3;
            const channelConversations = stateFromStores1.getChannelConversations(c1);
            if (null != channelConversations) {
              if (channelConversations.length > 0) {
                if (outer1_7.length > 0) {
                  if (arr[0].conversationId === channelConversations[channelConversations.length - 1].id) {
                    let c2 = 1;
                    let obj2 = callback(guildId[17]);
                    const obj1 = { channelId: null, guildId: null, direction: "before", anchor: null, limit: null, throwOnError: true, hydrateMessages: null };
                    obj1[0] = tmp33;
                    obj1[1] = c2;
                    obj1[3] = arr[arr.length - 1].conversationId;
                    obj1[4] = outer2_10;
                    obj2 = { limit: null };
                    obj2[0] = outer2_11;
                    obj1[6] = obj2;
                    c1 = 2;
                    ref = 1;
                    const obj3 = { value: null, done: false };
                    obj3[0] = obj2.fetchChannelConversations(obj1);
                    return obj3;
                  }
                }
              }
            }
            const current2 = ref.current;
            current2.succeed();
            outer1_5(false);
            ref = 3;
            tmp33 = c1;
          }
        } else if (1 === tmp7) {
          c2 = 0;
          const current = ref.current;
          current.fail(c1);
          outer1_5(true);
          ref = 3;
          const obj4 = { value: null, done: true };
          obj4[0] = undefined;
          return obj4;
        } else if (arg0 === 1) {
          ref = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          c2 = 0;
        }
        c2 = 0;
        ref = 3;
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } catch (tmp24) {
        if (tmp4 === c2) {
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
  callback = importAllResult.useCallback(_handleEndReached, items7);
  const memo1 = importAllResult.useMemo(() => {
    if (stateFromStores1) {
      const obj = { style: null, children: null };
      obj[0] = lib.spinner;
      obj[1] = outer1_12(stateFromStoresArray, {});
      let tmp2 = outer1_12(memo, obj);
    } else {
      tmp2 = null;
    }
    return tmp2;
  }, items8);
  if (stateFromStores) {
    stateFromStores = memo.length > 0;
  }
  if (stateFromStores) {
    stateFromStores = memo.length < closure_9;
  }
  if (stateFromStores) {
    stateFromStores = !stateFromStores1;
  }
  if (stateFromStores) {
    stateFromStores = !first;
  }
  closure_9 = obj3.useRef(undefined);
  const items9 = [channelId];
  obj = { style: items10, children: null };
  items10 = [tmp.container, { paddingBottom: _handleEndReached(guildId[13])().bottom }];
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
      let tmp10 = ref;
      let tmp11 = ref;
      if (!current.has(conversationId)) {
        let tmp12 = lib;
        let tmp13 = guildId;
        let ConversationsAnalytics = lib(guildId[18]).ConversationsAnalytics;
        let obj = { channelId: null, conversationId: null, isFocusMode: false };
        let tmp14 = _handleEndReached;
        obj[0] = _handleEndReached;
        let tmp15 = conversationId;
        obj[1] = tmp9;
        let result = ConversationsAnalytics.trackPreviewImpression(obj);
        let tmp17 = tmp10;
        let current2 = tmp11.current;
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
  obj[4] = tmp16;
  obj[5] = closure_18;
  obj[6] = memo1;
  obj[7] = callback1;
  obj[8] = closure_13;
  obj[1] = jsx(tmp2(tmp3[19]).FlashList, { data: memo, renderItem, keyExtractor, contentContainerStyle: tmp.content, onEndReached: null, ListEmptyComponent: null, ListFooterComponent: null, onViewableItemsChanged: null, viewabilityConfig: null });
  return <memo data={memo} renderItem={renderItem} keyExtractor={keyExtractor} contentContainerStyle={tmp.content} onEndReached={null} ListEmptyComponent={null} ListFooterComponent={null} onViewableItemsChanged={null} viewabilityConfig={null} />;
};