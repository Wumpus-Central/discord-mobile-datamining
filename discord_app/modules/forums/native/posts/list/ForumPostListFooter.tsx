// === Module 11653: ForumPostListFooter ===

// Module 11653 (ForumPostListFooter)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import GameInvitesChannelUtils from "GameInvitesChannelUtils" /* 6785 */;
import ForumPostReactions from "ForumPostReactions" /* 10040 */;
import useTypingUsersIds from "useTypingUsersIds" /* 11593 */;
import ForumPostMessageCountDefault from "ForumPostMessageCount" /* 11646 */;
import ForumPostTypingUsersDefault from "ForumPostTypingUsers" /* 11647 */;
import GameInviteVoiceCountDefault from "GameInviteVoiceCount" /* 11654 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let size;
const View = react_native.View;
const AnalyticsObjects = Constants.AnalyticsObjects;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { footer: { display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "flex-start" }, dot: size };
size = { height: 4, width: 4, borderRadius: 2, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginHorizontal: 8 };
let closure_8 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let firstMessage;
  let hasUnreads;
  let items;
  let items1;
  let parentChannel;
  let thread;
  const obj = react2;
  const cResult = obj.c(22);
  ({ thread, firstMessage, hasUnreads, parentChannel } = arg0);
  const tmp4 = closure_8();
  const obj2 = useTypingUsersIds;
  const typingUserIds = obj2.useTypingUserIds(thread.id);
  const obj3 = GameInvitesChannelUtils;
  const isGameInvitesPost = obj3.useIsGameInvitesPost(thread);
  if (cResult[0] === hasUnreads) {
    let tmp7;
    if (cResult[1] === thread) {
      tmp7 = cResult[2];
    }
    if (cResult[3] === isGameInvitesPost) {
      let tmp9;
      if (cResult[4] === thread) {
        tmp9 = cResult[5];
      }
      if (cResult[6] === hasUnreads) {
        if (cResult[7] === typingUserIds.length > 0) {
          if (cResult[8] === tmp4.dot) {
            if (cResult[9] === thread) {
              let tmp13;
              if (cResult[10] === typingUserIds) {
                tmp13 = cResult[11];
              }
              if (cResult[12] === firstMessage) {
                if (cResult[13] === parentChannel) {
                  let tmp20;
                  if (cResult[14] === thread) {
                    tmp20 = cResult[15];
                  }
                  if (cResult[16] === tmp4.footer) {
                    if (cResult[17] === tmp7) {
                      if (cResult[18] === tmp9) {
                        if (cResult[19] === tmp13) {
                          let tmp25;
                          if (cResult[20] === tmp20) {
                            tmp25 = cResult[21];
                          }
                          return tmp25;
                        }
                      }
                    }
                  }
                  const obj4 = { style: tmp4.footer, children: items };
                  items = [tmp7, tmp9, tmp13, tmp20];
                  const tmp28 = metroImportDefault(View, obj4);
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
      if (tmp14) {
        const obj6 = { children: items1 };
        const obj7 = { style: tmp4.dot };
        items1 = [hasOwnProperty(View, obj7), ];
        const obj8 = { thread, typingUserIds, hasUnreads };
        items1[1] = hasOwnProperty(ForumPostTypingUsersDefault, obj8);
        tmp14 = metroImportDefault(metroRequire, obj6);
      }
      cResult[6] = hasUnreads;
      cResult[7] = typingUserIds.length > 0;
      cResult[8] = tmp4.dot;
      cResult[9] = thread;
      cResult[10] = typingUserIds;
      cResult[11] = tmp14;
      tmp13 = tmp14;
    }
    let tmp10 = isGameInvitesPost;
    if (tmp10) {
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
}) : ((parentChannel) => {
  let firstMessage;
  let hasUnreads;
  let items;
  let items1;
  let thread;
  ({ thread, firstMessage, hasUnreads } = parentChannel);
  parentChannel = parentChannel.parentChannel;
  const tmp = closure_8();
  const obj = useTypingUsersIds;
  const typingUserIds = obj.useTypingUserIds(thread.id);
  let tmp6Result = typingUserIds.length > 0;
  const obj2 = GameInvitesChannelUtils;
  let isGameInvitesPost = obj2.useIsGameInvitesPost(thread);
  const obj3 = { style: tmp.footer, children: items };
  items = [hasOwnProperty(ForumPostMessageCountDefault, { thread, hasUnreads }), , , ];
  if (isGameInvitesPost) {
    const obj4 = { channel: thread };
    isGameInvitesPost = hasOwnProperty(GameInviteVoiceCountDefault, obj4);
  }
  items[1] = isGameInvitesPost;
  if (tmp6Result) {
    const obj5 = { children: items1 };
    const obj6 = { style: tmp.dot };
    items1 = [hasOwnProperty(View, obj6), ];
    const obj7 = { thread, typingUserIds, hasUnreads };
    items1[1] = hasOwnProperty(ForumPostTypingUsersDefault, obj7);
    tmp6Result = metroImportDefault(metroRequire, obj5);
  }
  items[2] = tmp6Result;
  let tmp8Result = null != firstMessage;
  if (tmp8Result) {
    const obj8 = { thread, firstMessage, parentChannel, locationAnalyticsObject: AnalyticsObjects.FORUM_LIST_ITEM_FOOTER };
    tmp8Result = hasOwnProperty(ForumPostReactions.MostCommonForumPostReaction, obj8);
  }
  items[3] = tmp8Result;
  return metroImportDefault(View, obj3);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/forums/native/posts/list/ForumPostListFooter.tsx");

export default tmp4;