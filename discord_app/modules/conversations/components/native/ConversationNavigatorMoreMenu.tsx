// discord_app/modules/conversations/components/native/ConversationNavigatorMoreMenu.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import IconButton from "../../../../design/components/Button/native/IconButton.native.tsx";
import MoreHorizontalIcon from "../../../../design/components/Icon/native/redesign/generated/MoreHorizontalIcon.tsx";
import ThumbsUpIcon from "../../../../design/components/Icon/native/redesign/generated/ThumbsUpIcon.tsx";
import ThumbsDownIcon from "../../../../design/components/Icon/native/redesign/generated/ThumbsDownIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null };
createStyles = { paddingHorizontal: nativeDefault.space.PX_12 };
createStyles.container = createStyles;
let closure_5 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorMoreMenu.tsx");

export default function ConversationNavigatorMoreMenu(channelId) {
  channelId = channelId.channelId;
  const conversationId = channelId.conversationId;
  noop = closure_5();
  let items = [channelId, conversationId];
  const memo = noop.useMemo(() => {
    let obj = { label: null, IconComponent: null, action: null };
    const intl = util.intl;
    obj.label = intl.string(util.t["7iRs51"]);
    obj.IconComponent = ThumbsUpIcon.ThumbsUpIcon;
    obj.action = function action() {
      let obj = channelId(conversationId[7]);
      const result = obj.setConversationFeedbackRating(channelId, conversationId, "up");
      const ConversationsAnalytics = channelId(conversationId[8]).ConversationsAnalytics;
      obj = { channelId, conversationId, isThumbsUp: true, isFocusMode: true };
      ConversationsAnalytics.trackThumbsClicked(obj);
      channelId(conversationId[9]).presentFeedbackSent();
    };
    const items = [obj];
    obj = { label: null, IconComponent: null, action: null };
    const intl2 = util.intl;
    obj.label = intl2.string(util.t.uNGhdg);
    obj.IconComponent = ThumbsDownIcon.ThumbsDownIcon;
    obj.action = function action() {
      let obj = channelId(conversationId[7]);
      const result = obj.setConversationFeedbackRating(channelId, conversationId, "down");
      const ConversationsAnalytics = channelId(conversationId[8]).ConversationsAnalytics;
      obj = { channelId, conversationId, isThumbsUp: false, isFocusMode: true };
      ConversationsAnalytics.trackThumbsClicked(obj);
      channelId(conversationId[9]).presentFeedbackSent();
    };
    items[1] = obj;
    return items;
  }, items);
  return jsx(channelId(conversationId[11]).ContextMenu, {
    items: memo,
    children(ref) {
      let obj = { style: container.container, ref: ref.ref, children: null };
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      obj = {};
      const merged1 = Object.assign(merged);
      obj.size = "sm";
      obj.variant = "tertiary";
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(util.t["6Ic4Ev"]);
      obj.icon = jsx(MoreHorizontalIcon.MoreHorizontalIcon, { size: "sm" });
      obj.children = jsx(IconButton.IconButton, {});
      return <View />;
    },
  });
}
