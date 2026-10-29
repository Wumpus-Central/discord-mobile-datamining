// discord_app/modules/chat/native/ChatViewStickyHeader.tsx
import c from "../../../../_runtime/00576_c.js";
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
const LOCATION_CONTEXT_MOBILE = fn(11000).LOCATION_CONTEXT_MOBILE;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChatViewStickyHeaderAccountSafetyWarnings(arg0) {
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
  : function ChatViewStickyHeaderAccountSafetyWarnings(arg0) {
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
  ReactCompilerGating.isReactCompilerEnabled()
    ? function StickyHeader(channel) {
        const cResult = c.c(23);
        channel = channel.channel;
        const scrollToNewMessages = channel.scrollToNewMessages;
        [tmp5, importDefault] = noop.useState(false);
        const tmp4 = _slicedToArray(noop.useState(false), 2);
        ({ showUnreadsNotice, clearUnreadsNotice } = useUnreadSettingNoticeDefault(channel));
        const tmp7 = useUnreadSettingNoticeDefault(channel);
        const pinotMemberNotice = PinotLazy.usePinotMemberNotice(channel, "mobile_chat_sticky_header");
        if (cResult[0] !== channel) {
          const fn = function t() {
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
          let tmp9 = fn;
        } else {
          tmp9 = cResult[1];
        }
        const imperativeHandle = noop.useImperativeHandle(channel.ref, tmp9);
        if (cResult[2] === pinotMemberNotice.dismiss) {
          if (cResult[3] === pinotMemberNotice.visible) {
            let tmp11 = cResult[4];
          }
          if (cResult[5] === channel) {
            if (cResult[6] === tmp5) {
              let tmp14 = cResult[7];
            }
            if (cResult[8] !== channel) {
              let tmp18 = null;
              if (channel.isDM()) {
                const obj4 = { channelId: channel.id, senderId: channel.getRecipientId() };
                tmp18 = timestampProducer(closure_9, obj4);
              }
              cResult[8] = channel;
              cResult[9] = tmp18;
              let tmp17 = tmp18;
            } else {
              tmp17 = cResult[9];
            }
            if (cResult[10] === channel) {
              if (cResult[11] === clearUnreadsNotice) {
                if (cResult[12] === showUnreadsNotice) {
                  let tmp21 = cResult[13];
                }
                if (cResult[14] === channel) {
                  if (cResult[15] === scrollToNewMessages) {
                    let tmp24 = cResult[16];
                  }
                  if (cResult[17] === tmp11) {
                    if (cResult[18] === tmp14) {
                      if (cResult[19] === tmp17) {
                        if (cResult[20] === tmp21) {
                          if (cResult[21] === tmp24) {
                            let tmp27 = cResult[22];
                          }
                          return tmp27;
                        }
                      }
                    }
                  }
                  const obj5 = { children: null };
                  const items = [tmp11, tmp14, tmp17, tmp21, tmp24];
                  obj5.children = items;
                  const tmp30 = closure_1_8(React5, obj5);
                  cResult[17] = tmp11;
                  cResult[18] = tmp14;
                  cResult[19] = tmp17;
                  cResult[20] = tmp21;
                  cResult[21] = tmp24;
                  cResult[22] = tmp30;
                  tmp27 = tmp30;
                }
                const obj6 = { channel, handleScrollToNewMessages: scrollToNewMessages };
                const tmp26 = timestampProducer(ChatBannerDefault, obj6);
                cResult[14] = channel;
                cResult[15] = scrollToNewMessages;
                cResult[16] = tmp26;
                tmp24 = tmp26;
              }
            }
            let tmp22 = null;
            if (showUnreadsNotice) {
              const obj7 = { channel, clearUnreadsNotice };
              tmp22 = timestampProducer(UnreadSettingNoticeDefault, obj7);
            }
            cResult[10] = channel;
            cResult[11] = clearUnreadsNotice;
            cResult[12] = showUnreadsNotice;
            cResult[13] = tmp22;
            tmp21 = tmp22;
          }
          let tmp15 = null;
          if (channel.isForumPost()) {
            tmp15 = null;
            if (tmp5) {
              const obj8 = { channel };
              tmp15 = timestampProducer(ForumPostActionBarDefault, obj8);
            }
          }
          cResult[5] = channel;
          cResult[6] = tmp5;
          cResult[7] = tmp15;
          tmp14 = tmp15;
        }
        let tmp12 = null;
        if (pinotMemberNotice.visible) {
          const obj9 = { onDismiss: pinotMemberNotice.dismiss };
          tmp12 = timestampProducer(PinotLazy.PinotMemberNoticeBar, obj9);
        }
        cResult[2] = pinotMemberNotice.dismiss;
        cResult[3] = pinotMemberNotice.visible;
        cResult[4] = tmp12;
        tmp11 = tmp12;
      }
    : function StickyHeader(channel) {
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
          const obj2 = { onDismiss: pinotMemberNotice.dismiss };
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
          tmp14 = timestampProducer(closure_9, obj4);
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
        return closure_1_8(React5, obj6);
      },
);
