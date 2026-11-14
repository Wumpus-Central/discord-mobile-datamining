// === Module 9141: ConversationNavigatorMoreMenu ===

// Module 9141 (ConversationNavigatorMoreMenu)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import LinkIcon from "LinkIcon" /* 6029 */;
import MoreHorizontalIcon from "MoreHorizontalIcon" /* 7420 */;
import IconButton from "IconButton" /* 7988 */;
import ThumbsUpIcon from "ThumbsUpIcon" /* 9142 */;
import ThumbsDownIcon from "ThumbsDownIcon" /* 9144 */;
import noop from "module_19" /* 19 */;
import SelectedConversationStore from "SelectedConversationStore" /* 9122 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5306);
let obj2 = { container: { paddingHorizontal: nativeDefault.space.PX_12 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorMoreMenu.tsx");

export default function ConversationNavigatorMoreMenu(channelId) {
  channelId = channelId.channelId;
  const conversationId = channelId.conversationId;
  noop = closure_6();
  items = [SelectedConversationStore];
  let items1 = [channelId, conversationId];
  const stateFromStores = channelId(conversationId[6]).useStateFromStores(items, () => {
    const conversation = SelectedConversationStore.getConversation(channelId);
    let id;
    if (conversation != null) {
      id = conversation.id;
    }
    let tmp3 = null;
    if (id === conversationId) {
      tmp3 = conversation;
    }
    return tmp3;
  }, items1);
  const items2 = [channelId, conversationId, stateFromStores];
  const memo = noop.useMemo(() => {
    let obj = { label: null, IconComponent: null, action: null };
    const intl = util.intl;
    obj.label = intl.string(util.t["7iRs51"]);
    obj.IconComponent = ThumbsUpIcon.ThumbsUpIcon;
    obj.action = function action() {
      const result = channelId(conversationId[9]).setConversationFeedbackRating(channelId, conversationId, "up");
      const ConversationsAnalytics = channelId(conversationId[10]).ConversationsAnalytics;
      ConversationsAnalytics.trackThumbsClicked({ channelId, conversationId, isThumbsUp: true, isFocusMode: true });
      const obj = channelId(conversationId[9]);
      const obj2 = { channelId, conversationId, isThumbsUp: true, isFocusMode: true };
      channelId(conversationId[11]).presentFeedbackSent();
    };
    items = [obj, ];
    let obj2 = { label: null, IconComponent: null, action: null };
    const intl2 = util.intl;
    obj2.label = intl2.string(util.t.uNGhdg);
    obj2.IconComponent = ThumbsDownIcon.ThumbsDownIcon;
    obj2.action = function action() {
      const result = channelId(conversationId[9]).setConversationFeedbackRating(channelId, conversationId, "down");
      const ConversationsAnalytics = channelId(conversationId[10]).ConversationsAnalytics;
      ConversationsAnalytics.trackThumbsClicked({ channelId, conversationId, isThumbsUp: false, isFocusMode: true });
      const obj = channelId(conversationId[9]);
      const obj2 = { channelId, conversationId, isThumbsUp: false, isFocusMode: true };
      channelId(conversationId[11]).presentFeedbackSent();
    };
    items[1] = obj2;
    let tmp3 = items;
    if (null != stateFromStores) {
      const items1 = [];
      const obj3 = { label: null, IconComponent: null, action: null };
      const intl3 = util.intl;
      obj3.label = intl3.string(util.t.WqhZss);
      obj3.IconComponent = LinkIcon.LinkIcon;
      obj3.action = function action() {
        const obj = channelId(conversationId[14]);
        obj.copy(channelId(conversationId[15]).getConversationPermalink(stateFromStores));
        const obj2 = channelId(conversationId[15]);
        channelId(conversationId[11]).presentLinkCopied();
      };
      items1[HermesBuiltin.arraySpread(items, 0)] = obj3;
      tmp3 = items1;
      const arraySpreadResult = HermesBuiltin.arraySpread(items, 0);
    }
    return tmp3;
  }, items2);
  return jsx(channelId(conversationId[16]).ContextMenu, {
    items: memo,
    children(ref) {
      const obj = { style: container.container, ref: ref.ref, children: null };
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      const obj2 = {};
      const merged1 = Object.assign(merged);
      obj2.size = "sm";
      obj2.variant = "tertiary";
      const intl = util.intl;
      obj2.accessibilityLabel = intl.string(util.t["6Ic4Ev"]);
      obj2.icon = jsx(MoreHorizontalIcon.MoreHorizontalIcon, { size: "sm" });
      obj.children = jsx(IconButton.IconButton, {});
      return <View style={container.container} ref={ref.ref}>{null}</View>;
    }
  });
};