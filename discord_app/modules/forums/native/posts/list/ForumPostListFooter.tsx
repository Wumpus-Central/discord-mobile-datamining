// === Module 11700: ForumPostListFooter ===

// Module 11700 (ForumPostListFooter)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import GameInvitesChannelUtils from "GameInvitesChannelUtils" /* 6973 */;
import ForumPostReactions from "ForumPostReactions" /* 10449 */;
import useTypingUsersIds from "useTypingUsersIds" /* 11638 */;
import ForumPostMessageCountDefault from "ForumPostMessageCount" /* 11693 */;
import ForumPostTypingUsersDefault from "ForumPostTypingUsers" /* 11694 */;
import GameInviteVoiceCountDefault from "GameInviteVoiceCount" /* 11701 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const AnalyticsObjects = fn(1085).AnalyticsObjects;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { footer: { display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "flex-start" }, dot: null };
let size = { height: 4, width: 4, borderRadius: 2, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginHorizontal: 8 };
obj2.dot = size;
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/list/ForumPostListFooter.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ForumPostListFooter(arg0) {
  const cResult = c.c(22);
  ({ thread, firstMessage, hasUnreads, parentChannel } = arg0);
  const tmp4 = closure_8();
  const typingUserIds = useTypingUsersIds.useTypingUserIds(thread.id);
  const isGameInvitesPost = GameInvitesChannelUtils.useIsGameInvitesPost(thread);
  if (cResult[0] === hasUnreads) {
    if (cResult[1] === thread) {
      let tmp7 = cResult[2];
    }
    if (cResult[3] === isGameInvitesPost) {
      if (cResult[4] === thread) {
        let tmp9 = cResult[5];
      }
      if (cResult[6] === hasUnreads) {
        if (cResult[7] === tmp5) {
          if (cResult[8] === tmp4.dot) {
            if (cResult[9] === thread) {
              if (cResult[10] === typingUserIds) {
                let tmp13 = cResult[11];
              }
              if (cResult[12] === firstMessage) {
                if (cResult[13] === parentChannel) {
                  if (cResult[14] === thread) {
                    let tmp20 = cResult[15];
                  }
                  if (cResult[16] === tmp4.footer) {
                    if (cResult[17] === tmp7) {
                      if (cResult[18] === tmp9) {
                        if (cResult[19] === tmp13) {
                          if (cResult[20] === tmp20) {
                            let tmp25 = cResult[21];
                          }
                          return tmp25;
                        }
                      }
                    }
                  }
                  const obj4 = { style: tmp4.footer, children: null };
                  const items = [tmp7, tmp9, tmp13, tmp20];
                  obj4.children = items;
                  const tmp28 = React5(View, obj4);
                  cResult[16] = tmp4.footer;
                  cResult[17] = tmp7;
                  cResult[18] = tmp9;
                  cResult[19] = tmp13;
                  cResult[20] = tmp20;
                  cResult[21] = tmp28;
                  tmp25 = tmp28;
                }
              }
              let tmp22 = null != firstMessage;
              if (tmp22) {
                const obj5 = { thread, firstMessage, parentChannel, locationAnalyticsObject: AnalyticsObjects.FORUM_LIST_ITEM_FOOTER };
                tmp22 = hasOwnProperty(ForumPostReactions.MostCommonForumPostReaction, obj5);
              }
              cResult[12] = firstMessage;
              cResult[13] = parentChannel;
              cResult[14] = thread;
              cResult[15] = tmp22;
              tmp20 = tmp22;
            }
          }
        }
      }
      let tmp14 = tmp5;
      if (tmp5) {
        const obj6 = { children: null };
        const obj7 = { style: tmp4.dot };
        const items1 = [hasOwnProperty(View, obj7), ];
        const obj8 = { thread, typingUserIds, hasUnreads };
        items1[1] = hasOwnProperty(ForumPostTypingUsersDefault, obj8);
        obj6.children = items1;
        tmp14 = React5(timestampProducer, obj6);
      }
      cResult[6] = hasUnreads;
      cResult[7] = tmp5;
      cResult[8] = tmp4.dot;
      cResult[9] = thread;
      cResult[10] = typingUserIds;
      cResult[11] = tmp14;
      tmp13 = tmp14;
    }
    let tmp10 = isGameInvitesPost;
    if (isGameInvitesPost) {
      const obj9 = { channel: thread };
      tmp10 = hasOwnProperty(GameInviteVoiceCountDefault, obj9);
    }
    cResult[3] = isGameInvitesPost;
    cResult[4] = thread;
    cResult[5] = tmp10;
    tmp9 = tmp10;
  }
  const tmp8 = hasOwnProperty(ForumPostMessageCountDefault, { thread, hasUnreads });
  cResult[0] = hasUnreads;
  cResult[1] = thread;
  cResult[2] = tmp8;
  tmp7 = tmp8;
}) : (function ForumPostListFooter(parentChannel) {
  ({ thread, firstMessage, hasUnreads } = parentChannel);
  const tmp = closure_8();
  const typingUserIds = useTypingUsersIds.useTypingUserIds(thread.id);
  let tmp6Result = typingUserIds.length > 0;
  let isGameInvitesPost = GameInvitesChannelUtils.useIsGameInvitesPost(thread);
  const obj3 = { style: tmp.footer, children: null };
  const items = [hasOwnProperty(ForumPostMessageCountDefault, { thread, hasUnreads }), , , ];
  if (isGameInvitesPost) {
    const obj4 = { channel: thread };
    isGameInvitesPost = hasOwnProperty(GameInviteVoiceCountDefault, obj4);
  }
  items[1] = isGameInvitesPost;
  if (tmp6Result) {
    const obj5 = { children: null };
    const obj6 = { style: tmp.dot };
    const items1 = [hasOwnProperty(View, obj6), ];
    const obj7 = { thread, typingUserIds, hasUnreads };
    items1[1] = hasOwnProperty(ForumPostTypingUsersDefault, obj7);
    obj5.children = items1;
    tmp6Result = React5(timestampProducer, obj5);
  }
  items[2] = tmp6Result;
  let tmp8Result = null != firstMessage;
  if (tmp8Result) {
    const obj8 = { thread, firstMessage, parentChannel: parentChannel.parentChannel, locationAnalyticsObject: AnalyticsObjects.FORUM_LIST_ITEM_FOOTER };
    tmp8Result = hasOwnProperty(ForumPostReactions.MostCommonForumPostReaction, obj8);
  }
  items[3] = tmp8Result;
  obj3.children = items;
  return React5(View, obj3);
});