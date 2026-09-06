// === Module 11362: ChatViewStickyHeader ===

// Module 11362 (ChatViewStickyHeader)
import useInappropriateConversationBannerForChannel from "useInappropriateConversationBannerForChannel" /* 10969 */;
import useStrangerDangerWarning from "useStrangerDangerWarning" /* 11364 */;
import useLikelyAtoWarning from "useLikelyAtoWarning" /* 11367 */;
import LikelyAtoWarningBannerDefault from "LikelyAtoWarningBanner" /* 11368 */;
import StrangerDangerWarningBannerDefault from "StrangerDangerWarningBanner" /* 11381 */;
import InappropriateConversationWarningBannerDefault from "InappropriateConversationWarningBanner" /* 11387 */;
import useUnreadSettingNoticeDefault from "useUnreadSettingNotice" /* 11411 */;
import ForumPostActionBarDefault from "ForumPostActionBar" /* 11413 */;
import UnreadSettingNoticeDefault from "UnreadSettingNotice" /* 11417 */;
import ChatBannerDefault from "ChatBanner" /* 11420 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function ChatViewStickyHeaderAccountSafetyWarnings(arg0) {
  ({ channelId, senderId } = arg0);
  let obj = useStrangerDangerWarning;
  const strangerDangerWarning = obj.useStrangerDangerWarning(channelId);
  let obj1 = useInappropriateConversationBannerForChannel;
  const inappropriateConversationBannerForChannel = obj1.useInappropriateConversationBannerForChannel(channelId, LOCATION_CONTEXT_MOBILE);
  const likelyAtoWarning = useLikelyAtoWarning.useLikelyAtoWarning(channelId);
  if (null != likelyAtoWarning) {
    obj = { channelId, warningId: likelyAtoWarning.id, senderId };
    let tmp5 = timestampProducer(LikelyAtoWarningBannerDefault, obj);
  } else if (null != strangerDangerWarning) {
    obj = { channelId, warningId: strangerDangerWarning.id, senderId };
    tmp5 = timestampProducer(StrangerDangerWarningBannerDefault, obj);
  } else {
    tmp5 = null;
    if (null != inappropriateConversationBannerForChannel) {
      obj1 = { channelId, warningId: inappropriateConversationBannerForChannel.id, senderId };
      tmp5 = timestampProducer(InappropriateConversationWarningBannerDefault, obj1);
    }
  }
  return tmp5;
}
const LOCATION_CONTEXT_MOBILE = fn(11363).LOCATION_CONTEXT_MOBILE;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/ChatViewStickyHeader.tsx");

export default noop.memo(noop.forwardRef((handleScrollToNewMessages, arg1) => {
  const channel = handleScrollToNewMessages.channel;
  const tmp = _slicedToArray(noop.useState(false), 2);
  closure_1 = tmp[1];
  ({ showUnreadsNotice, clearUnreadsNotice } = useUnreadSettingNoticeDefault(channel));
  const imperativeHandle = noop.useImperativeHandle(arg1, () => ({
    onChatViewScrolled(isFirstMessageVisible) {
      if (forumPost.isForumPost()) {
        closure_1_1(!isFirstMessageVisible.isFirstMessageVisible);
      }
    }
  }));
  let tmp8 = null;
  if (channel.isForumPost()) {
    tmp8 = null;
    if (tmp[0]) {
      let obj = { channel };
      tmp8 = timestampProducer(ForumPostActionBarDefault, obj);
    }
  }
  const items = [tmp8, , , ];
  let tmp10 = null;
  if (channel.isDM()) {
    obj = { channelId: channel.id, senderId: channel.getRecipientId() };
    tmp10 = timestampProducer(ChatViewStickyHeaderAccountSafetyWarnings, obj);
  }
  items[1] = tmp10;
  let tmp13 = null;
  if (showUnreadsNotice) {
    obj = { channel, clearUnreadsNotice };
    tmp13 = timestampProducer(UnreadSettingNoticeDefault, obj);
  }
  const obj1 = { children: null };
  items[2] = tmp13;
  items[3] = timestampProducer(ChatBannerDefault, { channel, handleScrollToNewMessages: handleScrollToNewMessages.scrollToNewMessages });
  obj1.children = items;
  return React6(React5, obj1);
}));