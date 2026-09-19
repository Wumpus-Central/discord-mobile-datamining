// === Module 8182: ConversationListScreen ===

// Module 8182 (ConversationListScreen)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4752 */;
import ConversationsAnalytics2 from "ConversationsAnalytics" /* 8152 */;
import ConversationListItemDefault from "ConversationListItem" /* 8183 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConversationsStore from "ConversationsStore" /* 7838 */;

const require = globalThis.__r;

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
const ConversationConstants = fn(7835);
({ MAX_CONVERSATIONS_PER_CHANNEL: closure_9, MOBILE_FETCH_LIMIT: c10, MOBILE_PREVIEW_MESSAGE_COUNT: closure_11 } = ConversationConstants);
const jsx = fn(21).jsx;
const viewabilityConfig = { waitForInteraction: false, itemVisiblePercentThreshold: 50, minimumViewTime: 1000 };
let createStyles = fn(4756);
let closure_14 = createStyles.createStyles((arg0) => {
  const obj = { container: { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND }, content: null, footerSpacer: null, spinner: null };
  const obj2 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
  obj.content = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
  const obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
  obj.footerSpacer = { height: nativeDefault.space.PX_16 + arg0 };
  const obj4 = { height: nativeDefault.space.PX_16 + arg0 };
  obj.spinner = { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 + arg0, alignItems: "center" };
  return obj;
});
createStyles = fn(4756);
let obj = { empty: { paddingVertical: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 } };
let closure_15 = createStyles.createStyles(obj);
const ListEmptyComponent = noop.memo(() => {
  const obj = { style: closure_15().empty, children: null };
  const obj2 = { variant: "text-md/normal", color: "text-muted", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.LJuFRG);
  obj.children = jsx(Text_Text.Text, { variant: "text-md/normal", color: "text-muted", children: null });
  return <React5 style={closure_15().empty}>{null}</React5>;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conversations/components/native/ConversationListScreen.tsx");

export default function ConversationListScreen() {
  const params = require("BaseNavigationContainer").useRoute().params;
  const channelId = params.channelId;
  _require = channelId;
  let guildId = params.guildId;
  let _handleEndReached = guildId;
  const bottom = _handleEndReached(1612)().bottom;
  const tmp3 = closure_14(bottom);
  dependencyMap = tmp3;
  let obj = require("BaseNavigationContainer");
  const tmp = _require;
  const conversationBackoffRef = require("useConversationBackoffRef").useConversationBackoffRef();
  const tmp5 = first(noop.useState(false), 2);
  first = tmp5[0];
  noop = tmp5[1];
  let obj2 = require("useConversationBackoffRef");
  const items = [stateFromStores1];
  const items1 = [channelId];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => {
    let channelConversations = ConversationsStore.getChannelConversations(closure_0);
    if (channelConversations == null) {
      channelConversations = [];
    }
    return channelConversations.map((id) => id.id);
  }, items1);
  const items2 = [stateFromStoresArray, channelId];
  const memo = noop.useMemo(() => {
    const substr = stateFromStoresArray.slice();
    const sorted = substr.sort((arg0, arg1) => _handleEndReached(closure_1_2[16]).compare(arg1, arg0));
    return sorted.map((conversationId) => ({ channelId, conversationId }));
  }, items2);
  let obj4 = require("initialize");
  const items3 = [stateFromStores1];
  const items4 = [channelId];
  let stateFromStores = require("initialize").useStateFromStores(items3, () => null == ConversationsStore.getEdgeMarker(closure_0, "before"), items4);
  let obj5 = require("initialize");
  const items5 = [stateFromStores1];
  const items6 = [channelId];
  stateFromStores1 = require("initialize").useStateFromStores(items5, () => ConversationsStore.isPendingFetch(closure_0), items6);
  _handleEndReached = function _handleEndReached() {
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
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        ref = 2;
        if (0 === guildId) {
          if (arg0 === 1) {
            ref = 3;
            throw value;
          } else if (arg0 === 2) {
            ref = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const channelConversations = stateFromStores1.getChannelConversations(tmp3);
            if (null != channelConversations) {
              if (channelConversations.length > 0) {
                if (length.length > 0) {
                  if (length[0].conversationId === channelConversations[channelConversations.length - 1].id) {
                    c2 = 1;
                    const obj5 = { channelId: tmp3, guildId, direction: "before", anchor: length[length.length - 1].conversationId, limit, throwOnError: true, hydrateMessages: null };
                    const obj6 = { limit: limit2 };
                    obj5.hydrateMessages = obj6;
                    guildId = 2;
                    ref = 1;
                    const obj7 = { value: tmp3(closure_2[17]).fetchChannelConversations(obj5), done: false };
                    return obj7;
                  }
                }
              }
            }
            const current2 = ref.current;
            current2.succeed();
            closure_1_5(false);
            ref = 3;
          }
        } else if (1 === tmp7) {
          c2 = 0;
          const current = ref.current;
          current.fail(closure_128_1);
          closure_1_5(true);
          ref = 3;
          const obj8 = { value: undefined, done: true };
          return obj8;
        } else if (arg0 === 1) {
          ref = 3;
          throw value;
        } else if (arg0 !== 2) {
          c2 = 0;
        }
        c2 = 0;
        ref = 3;
        const obj = { value, done: true };
        return obj;
      } catch (tmp24) {
        if (tmp4 === c2) {
          ref = tmp2;
          throw tmp24;
        } else {
          guildId = tmp;
        }
      }
    }
  });
  const items7 = [memo, channelId, guildId, conversationBackoffRef];
  const items8 = [, , , ];
  ({ spinner: arr10[0], footerSpacer: arr10[1] } = tmp3);
  items8[2] = stateFromStores1;
  items8[3] = first;
  const callback = noop.useCallback(_handleEndReached, items7);
  const memo1 = noop.useMemo(() => {
    if (!stateFromStores1) {
      if (!first) {
        let obj = { style: closure_2.footerSpacer };
      }
      return <tmp2 {...obj} />;
    }
    obj = { style: closure_2.spinner, children: <timestampProducer /> };
    const obj2 = { style: closure_2.spinner, children: <timestampProducer /> };
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
  let obj7 = { style: tmp3.container, children: null };
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
        let obj = { channelId, conversationId: null, isFocusMode: false };
        obj.conversationId = tmp9;
        let result = ConversationsAnalytics.trackPreviewImpression(obj);
        let current2 = ref.current;
        let addResult = current2.add(tmp9);
      }
      continue;
    }
  }, items9);
  let obj8 = { data: memo, renderItem, keyExtractor, contentContainerStyle: tmp3.content, scrollIndicatorInsets: { bottom }, onEndReached: null, ListEmptyComponent: null, ListFooterComponent: null, onViewableItemsChanged: null, viewabilityConfig: null };
  let tmp16;
  if (stateFromStores) {
    tmp16 = callback;
  }
  obj8.onEndReached = tmp16;
  obj8.ListEmptyComponent = ListEmptyComponent;
  obj8.ListFooterComponent = memo1;
  obj8.onViewableItemsChanged = callback1;
  obj8.viewabilityConfig = viewabilityConfig;
  obj7.children = jsx(tmp(8996).FlashList, { data: memo, renderItem, keyExtractor, contentContainerStyle: tmp3.content, scrollIndicatorInsets: { bottom }, onEndReached: null, ListEmptyComponent: null, ListFooterComponent: null, onViewableItemsChanged: null, viewabilityConfig: null });
  return <memo style={tmp3.container}>{null}</memo>;
};