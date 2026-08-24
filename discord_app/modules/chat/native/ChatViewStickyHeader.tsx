// === Module 10607: ChatViewStickyHeaderAccountSafetyWarnings ===

// Module 10607 (ChatViewStickyHeaderAccountSafetyWarnings)
import useStrangerDangerWarning from "useStrangerDangerWarning" /* 10609 */;
import useInappropriateConversationBannerForChannel from "useInappropriateConversationBannerForChannel" /* 10614 */;
import useLikelyAtoWarning from "useLikelyAtoWarning" /* 10618 */;
import LikelyAtoWarningBannerDefault from "LikelyAtoWarningBanner" /* 10619 */;
import StrangerDangerWarningBannerDefault from "StrangerDangerWarningBanner" /* 10632 */;
import InappropriateConversationWarningBannerDefault from "InappropriateConversationWarningBanner" /* 10639 */;
import useUnreadSettingNoticeDefault from "useUnreadSettingNotice" /* 10663 */;
import OptInChannelBannerDefault from "OptInChannelBanner" /* 10672 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { LOCATION_CONTEXT_MOBILE } from "LOCATION_CONTEXT_MOBILE" /* 10608 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
function ChatViewStickyHeaderAccountSafetyWarnings(arg0) {
  ({ channelId, senderId } = arg0);
  let obj = useStrangerDangerWarning;
  const strangerDangerWarning = obj.useStrangerDangerWarning(channelId);
  obj1 = useInappropriateConversationBannerForChannel;
  const inappropriateConversationBannerForChannel = obj1.useInappropriateConversationBannerForChannel(channelId, LOCATION_CONTEXT_MOBILE);
  const likelyAtoWarning = useLikelyAtoWarning.useLikelyAtoWarning(channelId);
  if (null != likelyAtoWarning) {
    obj = { channelId: null, warningId: null, senderId: null };
    obj[0] = channelId;
    obj[1] = likelyAtoWarning.id;
    obj[2] = senderId;
    let tmp5 = callback2(LikelyAtoWarningBannerDefault, obj);
  } else if (null != strangerDangerWarning) {
    obj = { channelId: null, warningId: null, senderId: null };
    obj[0] = channelId;
    obj[1] = strangerDangerWarning.id;
    obj[2] = senderId;
    tmp5 = callback2(StrangerDangerWarningBannerDefault, obj);
  } else {
    tmp5 = null;
    if (null != inappropriateConversationBannerForChannel) {
      obj1 = { channelId: null, warningId: null, senderId: null };
      obj1[0] = channelId;
      obj1[1] = inappropriateConversationBannerForChannel.id;
      obj1[2] = senderId;
      tmp5 = callback2(InappropriateConversationWarningBannerDefault, obj1);
    }
  }
  return tmp5;
}
let c4 = importAllResult;
({ jsx: closure_6, Fragment: error, jsxs: closure_8 } = jsxProd);
const memoResult = importAllResult.memo(importAllResult.forwardRef((handleScrollToNewMessages, ref) => {
  const channel = handleScrollToNewMessages.channel;
  importDefault = undefined;
  const tmp = callback(importAllResult.useState(false), 2);
  importDefault = tmp[1];
  ({ showUnreadsNotice, clearUnreadsNotice } = useUnreadSettingNoticeDefault(channel));
  const imperativeHandle = importAllResult.useImperativeHandle(ref, () => ({
    onChatViewScrolled(isFirstMessageVisible) {
      if (forumPost.isForumPost()) {
        callback(!isFirstMessageVisible.isFirstMessageVisible);
      }
    }
  }));
  let tmp8 = null;
  if (channel.isForumPost()) {
    tmp8 = null;
    if (tmp[0]) {
      let obj = { channel: null };
      obj[0] = channel;
      tmp8 = callback2(tmp2(10665), obj);
    }
  }
  const items = [tmp8, , , ];
  let tmp10 = null;
  if (channel.isDM()) {
    obj = { channelId: null, senderId: null };
    obj[0] = channel.id;
    obj[1] = channel.getRecipientId();
    tmp10 = callback2(ChatViewStickyHeaderAccountSafetyWarnings, obj);
  }
  items[1] = tmp10;
  let tmp13 = null;
  if (showUnreadsNotice) {
    obj = { channel: null, clearUnreadsNotice: null };
    obj[0] = channel;
    obj[1] = clearUnreadsNotice;
    tmp13 = callback2(tmp2(10669), obj);
  }
  obj1 = { children: null };
  items[2] = tmp13;
  items[3] = callback2(OptInChannelBannerDefault, { channel, handleScrollToNewMessages: handleScrollToNewMessages.scrollToNewMessages });
  obj1[0] = items;
  return closure_8(closure_7, obj1);
}));
const result = require("set").fileFinishedImporting("modules/chat/native/ChatViewStickyHeader.tsx");

export default memoResult;