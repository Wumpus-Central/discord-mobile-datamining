// discord_app/modules/conversations/components/native/ConversationListScreen.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ConversationsAnalytics2 from "../../ConversationsAnalytics.tsx";
import ConversationListItemDefault from "ConversationListItem.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConversationsStore from "../../ConversationsStore.tsx";

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
const ConversationConstants = fn(7670);
({
  MAX_CONVERSATIONS_PER_CHANNEL: closure_9,
  MOBILE_FETCH_LIMIT: c10,
  MOBILE_PREVIEW_MESSAGE_COUNT: closure_11,
} = ConversationConstants);
const jsx = fn(21).jsx;
const viewabilityConfig = { waitForInteraction: false, itemVisiblePercentThreshold: 50, minimumViewTime: 1000 };
let createStyles = fn(4606);
let closure_14 = createStyles.createStyles((arg0) => {
  let obj = { container: null, content: null, footerSpacer: null, spinner: null };
  obj = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
  obj.container = obj;
  obj = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
  obj.content = obj;
  obj.footerSpacer = { height: nativeDefault.space.PX_16 + arg0 };
  const obj1 = { height: nativeDefault.space.PX_16 + arg0 };
  obj.spinner = {
    paddingTop: nativeDefault.space.PX_16,
    paddingBottom: nativeDefault.space.PX_16 + arg0,
    alignItems: "center",
  };
  return obj;
});
createStyles = fn(4606);
let obj = { empty: null };
obj = { paddingVertical: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
obj.empty = obj;
let closure_15 = createStyles.createStyles(obj);
const ListEmptyComponent = noop.memo(() => {
  let obj = { style: closure_15().empty, children: null };
  obj = { variant: "text-md/normal", color: "text-muted", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.LJuFRG);
  obj.children = jsx(Text_Text.Text, { variant: "text-md/normal", color: "text-muted", children: null });
  return (
    <React5 variant="text-md/normal" color="text-muted">
      {null}
    </React5>
  );
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conversations/components/native/ConversationListScreen.tsx");

export default function ConversationListScreen() {
  let obj = require("BaseNavigationContainer");
  const params = obj.useRoute().params;
  const channelId = params.channelId;
  _require = channelId;
  let guildId = params.guildId;
  let _handleEndReached = guildId;
  const bottom = _handleEndReached(1611)().bottom;
  const tmp3 = closure_14(bottom);
  dependencyMap = tmp3;
  const conversationBackoffRef = require("useConversationBackoffRef").useConversationBackoffRef();
  const tmp5 = first(noop.useState(false), 2);
  first = tmp5[0];
  noop = tmp5[1];
  let obj2 = require("useConversationBackoffRef");
  const tmp = _require;
  const items = [stateFromStores1];
  const items1 = [channelId];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(
    items,
    () => {
      let channelConversations = ConversationsStore.getChannelConversations(closure_0);
      if (channelConversations == null) {
        channelConversations = [];
      }
      return channelConversations.map((id) => id.id);
    },
    items1,
  );
  const items2 = [stateFromStoresArray, channelId];
  const memo = noop.useMemo(() => {
    const substr = stateFromStoresArray.slice();
    const sorted = substr.sort((arg0, arg1) => _handleEndReached(closure_1_2[16]).compare(arg1, arg0));
    return sorted.map((conversationId) => ({ channelId, conversationId }));
  }, items2);
  let obj4 = require("initialize");
  const items3 = [stateFromStores1];
  const items4 = [channelId];
  let stateFromStores = require("initialize").useStateFromStores(
    items3,
    () => null == ConversationsStore.getEdgeMarker(closure_0, "before"),
    items4,
  );
  const obj5 = require("initialize");
  const items5 = [stateFromStores1];
  const items6 = [channelId];
  stateFromStores1 = require("initialize").useStateFromStores(
    items5,
    () => ConversationsStore.isPendingFetch(closure_0),
    items6,
  );
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
  _require = conversationBackoffRef(function* () {
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
        if (0 === guildId) {
          if (arg0 === 1) {
            ref = 3;
            throw value;
          } else if (arg0 === 2) {
            ref = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const channelConversations = stateFromStores1.getChannelConversations(tmp3);
            if (null != channelConversations) {
              if (channelConversations.length > 0) {
                if (length.length > 0) {
                  if (length[0].conversationId === channelConversations[channelConversations.length - 1].id) {
                    c2 = 1;
                    let obj2 = tmp3(closure_2[17]);
                    const obj1 = {
                      channelId: tmp3,
                      guildId,
                      direction: "before",
                      anchor: length[length.length - 1].conversationId,
                      limit,
                      throwOnError: true,
                      hydrateMessages: null,
                    };
                    obj2 = { limit: limit2 };
                    obj1.hydrateMessages = obj2;
                    guildId = 2;
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
          }
        } else if (1 === tmp7) {
          c2 = 0;
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
          c2 = 0;
        }
        c2 = 0;
        ref = 3;
        obj = { value, done: true };
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
  const items8 = [, , ,];
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
  obj = { style: tmp3.container, children: null };
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
  obj = {
    data: memo,
    renderItem,
    keyExtractor,
    contentContainerStyle: tmp3.content,
    scrollIndicatorInsets: { bottom },
    onEndReached: null,
    ListEmptyComponent: null,
    ListFooterComponent: null,
    onViewableItemsChanged: null,
    viewabilityConfig: null,
  };
  let tmp16;
  if (stateFromStores) {
    tmp16 = callback;
  }
  obj.onEndReached = tmp16;
  obj.ListEmptyComponent = ListEmptyComponent;
  obj.ListFooterComponent = memo1;
  obj.onViewableItemsChanged = callback1;
  obj.viewabilityConfig = viewabilityConfig;
  obj.children = jsx(tmp(8964).FlashList, {
    data: memo,
    renderItem,
    keyExtractor,
    contentContainerStyle: tmp3.content,
    scrollIndicatorInsets: { bottom },
    onEndReached: null,
    ListEmptyComponent: null,
    ListFooterComponent: null,
    onViewableItemsChanged: null,
    viewabilityConfig: null,
  });
  return (
    <memo
      data={memo}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      contentContainerStyle={tmp3.content}
      scrollIndicatorInsets={{ bottom }}
      onEndReached={null}
      ListEmptyComponent={null}
      ListFooterComponent={null}
      onViewableItemsChanged={null}
      viewabilityConfig={null}
    />
  );
}
