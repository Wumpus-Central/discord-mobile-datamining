// discord_app/modules/chat/native/ChatViewStickyHeader.tsx
import useStrangerDangerWarning from "../../self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx";
import useInappropriateConversationBannerForChannel from "../../self_mod/inappropriate_conversation/hooks/useInappropriateConversationBannerForChannel.tsx";
import useLikelyAtoWarning from "../../ato_alerts/hooks/useLikelyAtoWarning.tsx";
import LikelyAtoWarningBannerDefault from "../../ato_alerts/native/components/LikelyAtoWarningBanner.tsx";
import StrangerDangerWarningBannerDefault from "../../self_mod/stranger_danger/native/components/StrangerDangerWarningBanner.tsx";
import InappropriateConversationWarningBannerDefault from "../../self_mod/inappropriate_conversation/native/components/InappropriateConversationWarningBanner.tsx";
import useUnreadSettingNoticeDefault from "../../notifications/settings_unread_notice/utils/useUnreadSettingNotice.tsx";
import PinotLazy from "../../pinot/native/PinotLazy.tsx";
import ForumPostActionBarDefault from "../../forums/native/ForumPostActionBar.tsx";
import UnreadSettingNoticeDefault from "../../notifications/settings_unread_notice/native/UnreadSettingNotice.tsx";
import ChatBannerDefault from "../../messages/native/ChatBanner.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function ChatViewStickyHeaderAccountSafetyWarnings(arg0) {
  ({ channelId, senderId } = arg0);
  const strangerDangerWarning = useStrangerDangerWarning.useStrangerDangerWarning(channelId);
  const inappropriateConversationBannerForChannel =
    useInappropriateConversationBannerForChannel.useInappropriateConversationBannerForChannel(
      channelId,
      LOCATION_CONTEXT_MOBILE,
    );
  const likelyAtoWarning = useLikelyAtoWarning.useLikelyAtoWarning(channelId);
  if (null != likelyAtoWarning) {
    const obj4 = { channelId, warningId: likelyAtoWarning.id, senderId };
    let tmp5 = timestampProducer(LikelyAtoWarningBannerDefault, obj4);
  } else if (null != strangerDangerWarning) {
    const obj5 = { channelId, warningId: strangerDangerWarning.id, senderId };
    tmp5 = timestampProducer(StrangerDangerWarningBannerDefault, obj5);
  } else {
    tmp5 = null;
    if (null != inappropriateConversationBannerForChannel) {
      const obj6 = { channelId, warningId: inappropriateConversationBannerForChannel.id, senderId };
      tmp5 = timestampProducer(InappropriateConversationWarningBannerDefault, obj6);
    }
  }
  return tmp5;
}
const LOCATION_CONTEXT_MOBILE = fn(11256).LOCATION_CONTEXT_MOBILE;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/ChatViewStickyHeader.tsx");

export default noop.memo(function StickyHeader(channel) {
  channel = channel.channel;
  ({ scrollToNewMessages, ref } = channel);
  const tmp = _slicedToArray(noop.useState(false), 2);
  closure_1 = tmp[1];
  ({ showUnreadsNotice, clearUnreadsNotice } = useUnreadSettingNoticeDefault(channel));
  const tmp4 = useUnreadSettingNoticeDefault(channel);
  const pinotMemberNotice = PinotLazy.usePinotMemberNotice(channel, "mobile_chat_sticky_header");
  const imperativeHandle = noop.useImperativeHandle(ref, () => ({
    onChatViewScrolled(isFirstMessageVisible) {
      if (forumPost.isForumPost()) {
        closure_1_1(!isFirstMessageVisible.isFirstMessageVisible);
      }
    },
  }));
  let tmp10 = null;
  if (pinotMemberNotice.visible) {
    const obj2 = { channel, onDismiss: pinotMemberNotice.dismiss };
    tmp10 = timestampProducer(PinotLazy.PinotMemberNoticeBar, obj2);
  }
  const items = [tmp10, , , ,];
  let tmp12 = null;
  if (channel.isForumPost()) {
    tmp12 = null;
    if (tmp[0]) {
      const obj3 = { channel };
      tmp12 = timestampProducer(ForumPostActionBarDefault, obj3);
    }
  }
  items[1] = tmp12;
  let tmp14 = null;
  if (channel.isDM()) {
    const obj4 = { channelId: channel.id, senderId: channel.getRecipientId() };
    tmp14 = timestampProducer(ChatViewStickyHeaderAccountSafetyWarnings, obj4);
  }
  items[2] = tmp14;
  let tmp17 = null;
  if (showUnreadsNotice) {
    const obj5 = { channel, clearUnreadsNotice };
    tmp17 = timestampProducer(UnreadSettingNoticeDefault, obj5);
  }
  const obj6 = { children: null };
  items[3] = tmp17;
  items[4] = timestampProducer(ChatBannerDefault, { channel, handleScrollToNewMessages: scrollToNewMessages });
  obj6.children = items;
  return React6(React5, obj6);
});
