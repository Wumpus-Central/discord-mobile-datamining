// discord_app/modules/conversations/components/native/ConversationNavigatorMoreMenu.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { container: null };
createCacheKey = { paddingHorizontal: require("Themes").space.PX_12 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("jsxProd").fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorMoreMenu.tsx");

export default function ConversationNavigatorMoreMenu(channelId) {
  channelId = channelId.channelId;
  const conversationId = channelId.conversationId;
  let React;
  React = createCacheKey();
  let items = [channelId, conversationId];
  const memo = React.useMemo(() => {
    let obj = { label: null, IconComponent: null, action: null };
    const intl = channelId(conversationId[5]).intl;
    obj[0] = intl.string(channelId(conversationId[5]).t["7iRs51"]);
    obj[1] = channelId(conversationId[6]).ThumbsUpIcon;
    obj[2] = function action() {
      let obj = outer1_0(outer1_1[7]);
      const result = obj.setConversationFeedbackRating(closure_0, closure_1, "up");
      const ConversationsAnalytics = outer1_0(outer1_1[8]).ConversationsAnalytics;
      obj = { channelId: closure_0, conversationId: closure_1, isThumbsUp: true, isFocusMode: true };
      ConversationsAnalytics.trackThumbsClicked(obj);
      outer1_0(outer1_1[9]).presentFeedbackSent();
    };
    const items = [obj, ];
    obj = { label: null, IconComponent: null, action: null };
    const intl2 = channelId(conversationId[5]).intl;
    obj[0] = intl2.string(channelId(conversationId[5]).t.uNGhdg);
    obj[1] = channelId(conversationId[10]).ThumbsDownIcon;
    obj[2] = function action() {
      let obj = outer1_0(outer1_1[7]);
      const result = obj.setConversationFeedbackRating(closure_0, closure_1, "down");
      const ConversationsAnalytics = outer1_0(outer1_1[8]).ConversationsAnalytics;
      obj = { channelId: closure_0, conversationId: closure_1, isThumbsUp: false, isFocusMode: true };
      ConversationsAnalytics.trackThumbsClicked(obj);
      outer1_0(outer1_1[9]).presentFeedbackSent();
    };
    items[1] = obj;
    return items;
  }, items);
  return jsx(channelId(conversationId[11]).ContextMenu, {
    items: memo,
    children(ref) {
      let obj = { style: container.container, ref: ref.ref, children: null };
      const merged = Object.assign(ref, Object.create(null));
      obj = {};
      const merged1 = Object.assign(merged);
      obj.size = "sm";
      obj.variant = "tertiary";
      const intl = channelId(conversationId[5]).intl;
      obj.accessibilityLabel = intl.string(channelId(conversationId[5]).t["6Ic4Ev"]);
      obj.icon = outer1_4(channelId(conversationId[13]).MoreHorizontalIcon, { size: "sm" });
      obj[2] = outer1_4(channelId(conversationId[12]).IconButton, obj);
      return outer1_4(outer1_3, obj);
    }
  });
};