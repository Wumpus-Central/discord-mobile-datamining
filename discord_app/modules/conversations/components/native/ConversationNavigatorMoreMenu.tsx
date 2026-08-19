// discord_app/modules/conversations/components/native/ConversationNavigatorMoreMenu.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
const createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_12 };
createCacheKey[0] = createCacheKey;
let closure_5 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorMoreMenu.tsx");

export default function ConversationNavigatorMoreMenu(channelId) {
  channelId = channelId.channelId;
  const conversationId = channelId.conversationId;
  const React = callback();
  let items = [channelId, conversationId];
  const memo = React.useMemo(() => {
    let obj = { label: null, IconComponent: null, action: null };
    const intl = channelId(conversationId[5]).intl;
    obj[0] = intl.string(channelId(conversationId[5]).t["7iRs51"]);
    obj[1] = channelId(conversationId[6]).ThumbsUpIcon;
    obj[2] = function action() {
      let obj = channelId(conversationId[7]);
      const result = obj.setConversationFeedbackRating(closure_0, closure_1, "up");
      const ConversationsAnalytics = channelId(conversationId[8]).ConversationsAnalytics;
      obj = { channelId: closure_0, conversationId: closure_1, isThumbsUp: true, isFocusMode: true };
      ConversationsAnalytics.trackThumbsClicked(obj);
      channelId(conversationId[9]).presentFeedbackSent();
    };
    const items = [obj, ];
    obj = { label: null, IconComponent: null, action: null };
    const intl2 = channelId(conversationId[5]).intl;
    obj[0] = intl2.string(channelId(conversationId[5]).t.uNGhdg);
    obj[1] = channelId(conversationId[10]).ThumbsDownIcon;
    obj[2] = function action() {
      let obj = channelId(conversationId[7]);
      const result = obj.setConversationFeedbackRating(closure_0, closure_1, "down");
      const ConversationsAnalytics = channelId(conversationId[8]).ConversationsAnalytics;
      obj = { channelId: closure_0, conversationId: closure_1, isThumbsUp: false, isFocusMode: true };
      ConversationsAnalytics.trackThumbsClicked(obj);
      channelId(conversationId[9]).presentFeedbackSent();
    };
    items[1] = obj;
    return items;
  }, items);
  return jsx(channelId(conversationId[11]).ContextMenu, {
    items: memo,
    children(ref) {
      const merged = Object.assign(ref, Object.create(null));
      const obj = {};
      const merged1 = Object.assign(merged);
      obj.size = "sm";
      obj.variant = "tertiary";
      const intl = channelId(conversationId[5]).intl;
      obj.accessibilityLabel = intl.string(channelId(conversationId[5]).t["6Ic4Ev"]);
      obj.icon = jsx(channelId(conversationId[13]).MoreHorizontalIcon, { size: "sm" });
      obj[2] = jsx(channelId(conversationId[12]).IconButton, {});
      return <View />;
    }
  });
};