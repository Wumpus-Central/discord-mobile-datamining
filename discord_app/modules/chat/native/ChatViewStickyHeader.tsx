// discord_app/modules/chat/native/ChatViewStickyHeader.tsx
import useInappropriateConversationBannerForChannel from "../../self_mod/inappropriate_conversation/hooks/useInappropriateConversationBannerForChannel.tsx";
import useStrangerDangerWarning from "../../self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx";
import useLikelyAtoWarning from "../../ato_alerts/hooks/useLikelyAtoWarning.tsx";
import LikelyAtoWarningBannerDefault from "../../ato_alerts/native/components/LikelyAtoWarningBanner.tsx";
import StrangerDangerWarningBannerDefault from "../../self_mod/stranger_danger/native/components/StrangerDangerWarningBanner.tsx";
import InappropriateConversationWarningBannerDefault from "../../self_mod/inappropriate_conversation/native/components/InappropriateConversationWarningBanner.tsx";
import useUnreadSettingNoticeDefault from "../../notifications/settings_unread_notice/utils/useUnreadSettingNotice.tsx";
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
const LOCATION_CONTEXT_MOBILE = fn(10905).LOCATION_CONTEXT_MOBILE;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/ChatViewStickyHeader.tsx");

export default noop.memo(
  noop.forwardRef((handleScrollToNewMessages, arg1) => {
    const channel = handleScrollToNewMessages.channel;
    const tmp = _slicedToArray(noop.useState(false), 2);
    closure_1 = tmp[1];
    ({ showUnreadsNotice, clearUnreadsNotice } = useUnreadSettingNoticeDefault(channel));
    const imperativeHandle = noop.useImperativeHandle(arg1, () => ({
      onChatViewScrolled(isFirstMessageVisible) {
        if (forumPost.isForumPost()) {
          closure_1_1(!isFirstMessageVisible.isFirstMessageVisible);
        }
      },
    }));
    let tmp8 = null;
    if (channel.isForumPost()) {
      tmp8 = null;
      if (tmp[0]) {
        const obj = { channel };
        tmp8 = timestampProducer(ForumPostActionBarDefault, obj);
      }
    }
    const items = [tmp8, , ,];
    let tmp10 = null;
    if (channel.isDM()) {
      const obj2 = { channelId: channel.id, senderId: channel.getRecipientId() };
      tmp10 = timestampProducer(ChatViewStickyHeaderAccountSafetyWarnings, obj2);
    }
    items[1] = tmp10;
    let tmp13 = null;
    if (showUnreadsNotice) {
      const obj3 = { channel, clearUnreadsNotice };
      tmp13 = timestampProducer(UnreadSettingNoticeDefault, obj3);
    }
    const obj4 = { children: null };
    items[2] = tmp13;
    items[3] = timestampProducer(ChatBannerDefault, {
      channel,
      handleScrollToNewMessages: handleScrollToNewMessages.scrollToNewMessages,
    });
    obj4.children = items;
    return React6(React5, obj4);
  }),
);
