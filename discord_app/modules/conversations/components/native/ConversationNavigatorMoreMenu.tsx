// discord_app/modules/conversations/components/native/ConversationNavigatorMoreMenu.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import ThumbsUpIcon from "../../../../design/components/Icon/native/redesign/generated/ThumbsUpIcon.tsx";
import ThumbsDownIcon from "../../../../design/components/Icon/native/redesign/generated/ThumbsDownIcon.tsx";
import IconButton from "../../../../design/components/Button/native/IconButton.native.tsx";
import MoreHorizontalIcon from "../../../../design/components/Icon/native/redesign/generated/MoreHorizontalIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4640);
let obj2 = { container: { paddingHorizontal: nativeDefault.space.PX_12 } };
let closure_5 = createStyles.createStyles(obj2);
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
      const result = channelId(conversationId[7]).setConversationFeedbackRating(channelId, conversationId, "up");
      const ConversationsAnalytics = channelId(conversationId[8]).ConversationsAnalytics;
      ConversationsAnalytics.trackThumbsClicked({ channelId, conversationId, isThumbsUp: true, isFocusMode: true });
      const obj = channelId(conversationId[7]);
      const obj2 = { channelId, conversationId, isThumbsUp: true, isFocusMode: true };
      channelId(conversationId[9]).presentFeedbackSent();
    };
    const items = [obj];
    let obj2 = { label: null, IconComponent: null, action: null };
    const intl2 = util.intl;
    obj2.label = intl2.string(util.t.uNGhdg);
    obj2.IconComponent = ThumbsDownIcon.ThumbsDownIcon;
    obj2.action = function action() {
      const result = channelId(conversationId[7]).setConversationFeedbackRating(channelId, conversationId, "down");
      const ConversationsAnalytics = channelId(conversationId[8]).ConversationsAnalytics;
      ConversationsAnalytics.trackThumbsClicked({ channelId, conversationId, isThumbsUp: false, isFocusMode: true });
      const obj = channelId(conversationId[7]);
      const obj2 = { channelId, conversationId, isThumbsUp: false, isFocusMode: true };
      channelId(conversationId[9]).presentFeedbackSent();
    };
    items[1] = obj2;
    return items;
  }, items);
  return jsx(channelId(conversationId[11]).ContextMenu, {
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
      return (
        <View style={container.container} ref={ref.ref}>
          {null}
        </View>
      );
    },
  });
}
