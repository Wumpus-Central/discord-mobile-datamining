// discord_app/modules/chat/native/ChatViewStickyHeader.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import { LOCATION_CONTEXT_MOBILE } from "LOCATION_CONTEXT_MOBILE";
import jsxProd from "jsxProd";
import { useLikelyAtoWarning } from "../../ato_alerts/hooks/useLikelyAtoWarning.tsx";
import { LikelyAtoWarningBanner } from "../../ato_alerts/native/components/LikelyAtoWarningBanner.tsx";
import { OptInChannelBanner } from "../../messages/native/ChatBanner.tsx";
import { useUnreadSettingNotice } from "../../notifications/settings_unread_notice/utils/useUnreadSettingNotice.tsx";
import { useInappropriateConversationBannerForChannel } from "../../self_mod/inappropriate_conversation/hooks/useInappropriateConversationBannerForChannel.tsx";
import { InappropriateConversationWarningBanner } from "../../self_mod/inappropriate_conversation/native/components/InappropriateConversationWarningBanner.tsx";
import { useStrangerDangerWarning } from "../../self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx";
import { StrangerDangerWarningBanner } from "../../self_mod/stranger_danger/native/components/StrangerDangerWarningBanner.tsx";

let closure_6;
let error;
let metroImportAll;
const require = arg1;
function ChatViewStickyHeaderAccountSafetyWarnings(arg0) {
  let channelId;
  let senderId;
  ({ channelId, senderId } = arg0);
  let obj = useStrangerDangerWarning /* useStrangerDangerWarning */;
  const strangerDangerWarning = obj.useStrangerDangerWarning(channelId);
  let obj1 = useInappropriateConversationBannerForChannel /* useInappropriateConversationBannerForChannel */;
  const inappropriateConversationBannerForChannel = obj1.useInappropriateConversationBannerForChannel(channelId, LOCATION_CONTEXT_MOBILE);
  const likelyAtoWarning = useLikelyAtoWarning /* useLikelyAtoWarning */.useLikelyAtoWarning(channelId);
  if (null != likelyAtoWarning) {
    obj = { channelId: null, warningId: null, senderId: null };
    obj[0] = channelId;
    obj[1] = likelyAtoWarning.id;
    obj[2] = senderId;
    let tmp5 = callback2(LikelyAtoWarningBanner, obj);
  } else if (null != strangerDangerWarning) {
    obj = { channelId: null, warningId: null, senderId: null };
    obj[0] = channelId;
    obj[1] = strangerDangerWarning.id;
    obj[2] = senderId;
    tmp5 = callback2(StrangerDangerWarningBanner, obj);
  } else {
    tmp5 = null;
    if (null != inappropriateConversationBannerForChannel) {
      obj1 = { channelId: null, warningId: null, senderId: null };
      obj1[0] = channelId;
      obj1[1] = inappropriateConversationBannerForChannel.id;
      obj1[2] = senderId;
      tmp5 = callback2(InappropriateConversationWarningBanner, obj1);
    }
  }
  return tmp5;
}
let c4 = importAllResult;
({ jsx: closure_6, Fragment: error, jsxs: metroImportAll } = jsxProd);
const memoResult = importAllResult.memo(importAllResult.forwardRef((handleScrollToNewMessages, ref) => {
  let clearUnreadsNotice;
  let showUnreadsNotice;
  const channel = handleScrollToNewMessages.channel;
  let importDefault;
  const tmp = callback(importAllResult.useState(false), 2);
  importDefault = tmp[1];
  ({ showUnreadsNotice, clearUnreadsNotice } = useUnreadSettingNotice(channel));
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
      tmp8 = callback2(tmp2(10309), obj);
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
    tmp13 = callback2(tmp2(10313), obj);
  }
  const obj1 = { children: null };
  items[2] = tmp13;
  items[3] = callback2(OptInChannelBanner, { channel, handleScrollToNewMessages: handleScrollToNewMessages.scrollToNewMessages });
  obj1[0] = items;
  return closure_8(closure_7, obj1);
}));
const result = require("LOCATION_CONTEXT_MOBILE").fileFinishedImporting("modules/chat/native/ChatViewStickyHeader.tsx");

export default memoResult;