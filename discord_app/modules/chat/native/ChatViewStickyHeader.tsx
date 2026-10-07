// discord_app/modules/chat/native/ChatViewStickyHeader.tsx
import c from "../../../../_runtime/00576_c.js";
import useStrangerDangerWarning from "../../self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx";
import useInappropriateConversationBannerForChannel from "../../self_mod/inappropriate_conversation/hooks/useInappropriateConversationBannerForChannel.tsx";
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
const LOCATION_CONTEXT_MOBILE = fn(9797).LOCATION_CONTEXT_MOBILE;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let tmp = dependencyMap;
      const cResult = c.c(12);
      ({ channelId, senderId } = arg0);
      let id = useStrangerDangerWarning.useStrangerDangerWarning(channelId);
      let id2 = useInappropriateConversationBannerForChannel.useInappropriateConversationBannerForChannel(
        channelId,
        LOCATION_CONTEXT_MOBILE,
      );
      let id3 = useLikelyAtoWarning.useLikelyAtoWarning(channelId);
      if (null != id3) {
        if (cResult[0] === channelId) {
          if (cResult[1] === id3.id) {
          }
        }
        const obj5 = { channelId, warningId: id3.id, senderId };
        tmp = timestampProducer(LikelyAtoWarningBannerDefault, obj5);
        cResult[0] = channelId;
        id3 = id3.id;
        cResult[1] = id3;
        cResult[2] = senderId;
        cResult[3] = tmp;
      } else if (null != id) {
        if (cResult[4] === channelId) {
          if (cResult[5] === senderId) {
          }
        }
        const obj6 = { channelId, warningId: id.id, senderId };
        const tmp11 = timestampProducer(StrangerDangerWarningBannerDefault, obj6);
        cResult[4] = channelId;
        cResult[5] = senderId;
        id = id.id;
        cResult[6] = id;
        cResult[7] = tmp11;
      } else if (null == id2) {
        return null;
      } else {
        if (cResult[8] === channelId) {
          if (cResult[9] === id2.id) {
          }
        }
        const obj7 = { channelId, warningId: id2.id, senderId };
        const tmp6 = timestampProducer(InappropriateConversationWarningBannerDefault, obj7);
        cResult[8] = channelId;
        id2 = id2.id;
        cResult[9] = id2;
        cResult[10] = senderId;
        cResult[11] = tmp6;
      }
    }
  : (arg0) => {
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
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/ChatViewStickyHeader.tsx");

export default noop.memo(
  noop.forwardRef(
    ReactCompilerGating.isReactCompilerEnabled()
      ? (channel, arg1) => {
          const cResult = c.c(19);
          channel = channel.channel;
          const scrollToNewMessages = channel.scrollToNewMessages;
          [tmp4, importDefault] = noop.useState(false);
          const tmp3 = _slicedToArray(noop.useState(false), 2);
          ({ showUnreadsNotice, clearUnreadsNotice } = useUnreadSettingNoticeDefault(channel));
          if (cResult[0] !== channel) {
            const fn = function h() {
              return {
                onChatViewScrolled(isFirstMessageVisible) {
                  if (forumPost.isForumPost()) {
                    closure_1_1(!isFirstMessageVisible.isFirstMessageVisible);
                  }
                },
              };
            };
            cResult[0] = channel;
            cResult[1] = fn;
            let tmp7 = fn;
          } else {
            tmp7 = cResult[1];
          }
          const imperativeHandle = noop.useImperativeHandle(arg1, tmp7);
          if (cResult[2] === channel) {
            if (cResult[3] === tmp4) {
              let tmp9 = cResult[4];
            }
            if (cResult[5] !== channel) {
              let tmp13 = null;
              if (channel.isDM()) {
                const obj3 = { channelId: channel.id, senderId: channel.getRecipientId() };
                tmp13 = timestampProducer(closure_9, obj3);
              }
              cResult[5] = channel;
              cResult[6] = tmp13;
              let tmp12 = tmp13;
            } else {
              tmp12 = cResult[6];
            }
            if (cResult[7] === channel) {
              if (cResult[8] === clearUnreadsNotice) {
                if (cResult[9] === showUnreadsNotice) {
                  let tmp16 = cResult[10];
                }
                if (cResult[11] === channel) {
                  if (cResult[12] === scrollToNewMessages) {
                    let tmp19 = cResult[13];
                  }
                  if (cResult[14] === tmp9) {
                    if (cResult[15] === tmp12) {
                      if (cResult[16] === tmp16) {
                        if (cResult[17] === tmp19) {
                          let tmp22 = cResult[18];
                        }
                        return tmp22;
                      }
                    }
                  }
                  const obj4 = { children: null };
                  const items = [tmp9, tmp12, tmp16, tmp19];
                  obj4.children = items;
                  const tmp25 = closure_1_8(React5, obj4);
                  cResult[14] = tmp9;
                  cResult[15] = tmp12;
                  cResult[16] = tmp16;
                  cResult[17] = tmp19;
                  cResult[18] = tmp25;
                  tmp22 = tmp25;
                }
                const obj5 = { channel, handleScrollToNewMessages: scrollToNewMessages };
                const tmp21 = timestampProducer(ChatBannerDefault, obj5);
                cResult[11] = channel;
                cResult[12] = scrollToNewMessages;
                cResult[13] = tmp21;
                tmp19 = tmp21;
              }
            }
            let tmp17 = null;
            if (showUnreadsNotice) {
              const obj6 = { channel, clearUnreadsNotice };
              tmp17 = timestampProducer(UnreadSettingNoticeDefault, obj6);
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
              tmp10 = timestampProducer(ForumPostActionBarDefault, obj7);
            }
          }
          cResult[2] = channel;
          cResult[3] = tmp4;
          cResult[4] = tmp10;
          tmp9 = tmp10;
          const tmp6 = useUnreadSettingNoticeDefault(channel);
        }
      : (handleScrollToNewMessages, arg1) => {
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
            tmp10 = timestampProducer(closure_9, obj2);
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
          return closure_1_8(React5, obj4);
        },
  ),
);
