// === Module 9796: ChatViewStickyHeader ===

// Module 9796 (ChatViewStickyHeader)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 9797 */;
import useStrangerDangerWarning from "useStrangerDangerWarning" /* 9798 */;
import useInappropriateConversationBannerForChannel from "useInappropriateConversationBannerForChannel" /* 9804 */;
import useLikelyAtoWarning from "useLikelyAtoWarning" /* 9808 */;
import LikelyAtoWarningBannerDefault from "LikelyAtoWarningBanner" /* 9809 */;
import StrangerDangerWarningBannerDefault from "StrangerDangerWarningBanner" /* 9828 */;
import InappropriateConversationWarningBannerDefault from "InappropriateConversationWarningBanner" /* 9834 */;
import useUnreadSettingNoticeDefault from "useUnreadSettingNotice" /* 9861 */;
import ForumPostActionBarDefault from "ForumPostActionBar" /* 9866 */;
import UnreadSettingNoticeDefault from "UnreadSettingNotice" /* 11087 */;
import ChatBannerDefault from "ChatBanner" /* 11090 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channel;

let metroImportAll;
let metroImportDefault;
let metroRequire;
const LOCATION_CONTEXT_MOBILE = Constants.LOCATION_CONTEXT_MOBILE;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channelId;
  let senderId;
  let tmp10;
  const obj = react2;
  const cResult = obj.c(12);
  ({ channelId, senderId } = arg0);
  const obj2 = useStrangerDangerWarning;
  const strangerDangerWarning = obj2.useStrangerDangerWarning(channelId);
  const obj3 = useInappropriateConversationBannerForChannel;
  const inappropriateConversationBannerForChannel = obj3.useInappropriateConversationBannerForChannel(channelId, LOCATION_CONTEXT_MOBILE);
  const obj4 = useLikelyAtoWarning;
  const likelyAtoWarning = obj4.useLikelyAtoWarning(channelId);
  if (null != likelyAtoWarning) {
    if (cResult[0] === channelId) {
      if (cResult[1] === likelyAtoWarning.id) {
        let tmp15;
        if (cResult[2] === senderId) {
          tmp15 = cResult[3];
        }
        tmp10 = tmp15;
      }
    }
    const obj5 = { channelId, warningId: likelyAtoWarning.id, senderId };
    const tmp18 = metroRequire(LikelyAtoWarningBannerDefault, obj5);
    cResult[0] = channelId;
    cResult[1] = likelyAtoWarning.id;
    cResult[2] = senderId;
    cResult[3] = tmp18;
    tmp15 = tmp18;
  } else if (null != strangerDangerWarning) {
    if (cResult[4] === channelId) {
      if (cResult[5] === senderId) {
        let tmp11;
        if (cResult[6] === strangerDangerWarning.id) {
          tmp11 = cResult[7];
        }
        tmp10 = tmp11;
      }
    }
    const obj6 = { channelId, warningId: strangerDangerWarning.id, senderId };
    const tmp14 = metroRequire(StrangerDangerWarningBannerDefault, obj6);
    cResult[4] = channelId;
    cResult[5] = senderId;
    cResult[6] = strangerDangerWarning.id;
    cResult[7] = tmp14;
    tmp11 = tmp14;
  } else {
    tmp10 = null;
    if (null != inappropriateConversationBannerForChannel) {
      if (cResult[8] === channelId) {
        if (cResult[9] === inappropriateConversationBannerForChannel.id) {
          let tmp6;
          if (cResult[10] === senderId) {
            tmp6 = cResult[11];
          }
          tmp10 = tmp6;
        }
      }
      const obj7 = { channelId, warningId: inappropriateConversationBannerForChannel.id, senderId };
      const tmp9 = metroRequire(InappropriateConversationWarningBannerDefault, obj7);
      cResult[8] = channelId;
      cResult[9] = inappropriateConversationBannerForChannel.id;
      cResult[10] = senderId;
      cResult[11] = tmp9;
      tmp6 = tmp9;
    }
  }
  return tmp10;
}) : ((arg0) => {
  let channelId;
  let senderId;
  let tmp5;
  ({ channelId, senderId } = arg0);
  const obj = useStrangerDangerWarning;
  const strangerDangerWarning = obj.useStrangerDangerWarning(channelId);
  const obj2 = useInappropriateConversationBannerForChannel;
  const inappropriateConversationBannerForChannel = obj2.useInappropriateConversationBannerForChannel(channelId, LOCATION_CONTEXT_MOBILE);
  const obj3 = useLikelyAtoWarning;
  const likelyAtoWarning = obj3.useLikelyAtoWarning(channelId);
  if (null != likelyAtoWarning) {
    const obj4 = { channelId, warningId: likelyAtoWarning.id, senderId };
    tmp5 = metroRequire(LikelyAtoWarningBannerDefault, obj4);
  } else if (null != strangerDangerWarning) {
    const obj5 = { channelId, warningId: strangerDangerWarning.id, senderId };
    tmp5 = metroRequire(StrangerDangerWarningBannerDefault, obj5);
  } else {
    tmp5 = null;
    if (null != inappropriateConversationBannerForChannel) {
      const obj6 = { channelId, warningId: inappropriateConversationBannerForChannel.id, senderId };
      tmp5 = metroRequire(InappropriateConversationWarningBannerDefault, obj6);
    }
  }
  return tmp5;
});
const forwardRef = react.forwardRef;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((channel, arg1) => {
  let clearUnreadsNotice;
  let closure_129_1;
  let items;
  let showUnreadsNotice;
  let tmp4;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(19);
  channel = channel.channel;
  const scrollToNewMessages = channel.scrollToNewMessages;
  [tmp4, closure_129_1] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  ({ showUnreadsNotice, clearUnreadsNotice } = useUnreadSettingNoticeDefault(channel));
  useUnreadSettingNoticeDefault(channel);
  if (cResult[0] !== channel) {
    const fn = function h() {
      let forumPost;
      return {
        onChatViewScrolled(isFirstMessageVisible) {
          isFirstMessageVisible = isFirstMessageVisible.isFirstMessageVisible;
          if (forumPost.isForumPost()) {
            closure_1_1(!isFirstMessageVisible);
          }
        }
      };
    };
    cResult[0] = channel;
    cResult[1] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  const imperativeHandle = react.useImperativeHandle(arg1, tmp7);
  if (cResult[2] === channel) {
    let tmp9;
    let tmp12;
    if (cResult[3] === tmp4) {
      tmp9 = cResult[4];
    }
    if (cResult[5] !== channel) {
      let tmp13 = null;
      if (channel.isDM()) {
        const obj3 = { channelId: channel.id, senderId: channel.getRecipientId() };
        tmp13 = metroRequire(closure_9, obj3);
      }
      cResult[5] = channel;
      cResult[6] = tmp13;
      tmp12 = tmp13;
    } else {
      tmp12 = cResult[6];
    }
    if (cResult[7] === channel) {
      if (cResult[8] === clearUnreadsNotice) {
        let tmp16;
        if (cResult[9] === showUnreadsNotice) {
          tmp16 = cResult[10];
        }
        if (cResult[11] === channel) {
          let tmp19;
          if (cResult[12] === scrollToNewMessages) {
            tmp19 = cResult[13];
          }
          if (cResult[14] === tmp9) {
            if (cResult[15] === tmp12) {
              if (cResult[16] === tmp16) {
                let tmp22;
                if (cResult[17] === tmp19) {
                  tmp22 = cResult[18];
                }
                return tmp22;
              }
            }
          }
          const obj4 = { children: items };
          items = [tmp9, tmp12, tmp16, tmp19];
          const tmp25 = metroImportAll(metroImportDefault, obj4);
          cResult[14] = tmp9;
          cResult[15] = tmp12;
          cResult[16] = tmp16;
          cResult[17] = tmp19;
          cResult[18] = tmp25;
          tmp22 = tmp25;
        }
        const obj5 = { channel, handleScrollToNewMessages: scrollToNewMessages };
        const tmp21 = metroRequire(ChatBannerDefault, obj5);
        cResult[11] = channel;
        cResult[12] = scrollToNewMessages;
        cResult[13] = tmp21;
        tmp19 = tmp21;
      }
    }
    let tmp17 = null;
    if (showUnreadsNotice) {
      const obj6 = { channel, clearUnreadsNotice };
      tmp17 = metroRequire(UnreadSettingNoticeDefault, obj6);
    }
    cResult[7] = channel;
    cResult[8] = clearUnreadsNotice;
    cResult[9] = showUnreadsNotice;
    cResult[10] = tmp17;
    tmp16 = tmp17;
  }
  let tmp10 = null;
  if (channel.isForumPost()) {
    tmp10 = null;
    if (tmp4) {
      const obj7 = { channel };
      tmp10 = metroRequire(ForumPostActionBarDefault, obj7);
    }
  }
  cResult[2] = channel;
  cResult[3] = tmp4;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : ((channel, arg1) => {
  let clearUnreadsNotice;
  let closure_1;
  let first;
  let showUnreadsNotice;
  channel = channel.channel;
  closure_1 = undefined;
  const scrollToNewMessages = channel.scrollToNewMessages;
  [first, closure_1] = react.useState(false);
  ({ showUnreadsNotice, clearUnreadsNotice } = useUnreadSettingNoticeDefault(channel));
  useUnreadSettingNoticeDefault(channel);
  const imperativeHandle = react.useImperativeHandle(arg1, () => {
    let forumPost;
    return {
      onChatViewScrolled(isFirstMessageVisible) {
        isFirstMessageVisible = isFirstMessageVisible.isFirstMessageVisible;
        if (forumPost.isForumPost()) {
          closure_1_1(!isFirstMessageVisible);
        }
      }
    };
  });
  let tmp9 = null;
  if (channel.isForumPost()) {
    tmp9 = null;
    if (first) {
      const obj = { channel };
      tmp9 = metroRequire(ForumPostActionBarDefault, obj);
    }
  }
  const items = [tmp9, , , ];
  let tmp11 = null;
  if (channel.isDM()) {
    const obj2 = { channelId: channel.id, senderId: channel.getRecipientId() };
    tmp11 = metroRequire(closure_9, obj2);
  }
  items[1] = tmp11;
  let tmp14 = null;
  if (showUnreadsNotice) {
    const obj3 = { channel, clearUnreadsNotice };
    tmp14 = metroRequire(UnreadSettingNoticeDefault, obj3);
  }
  const obj4 = { children: items };
  items[2] = tmp14;
  items[3] = metroRequire(ChatBannerDefault, { channel, handleScrollToNewMessages: scrollToNewMessages });
  return metroImportAll(metroImportDefault, obj4);
})));
const result = size.fileFinishedImporting("modules/chat/native/ChatViewStickyHeader.tsx");

export default memoResult;