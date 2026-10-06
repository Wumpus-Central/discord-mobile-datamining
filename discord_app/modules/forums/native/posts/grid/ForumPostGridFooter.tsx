// === Module 11645: ForumPostGridFooter ===

// Module 11645 (ForumPostGridFooter)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import ForumPostReactions from "ForumPostReactions" /* 10040 */;
import useTypingUsersIds from "useTypingUsersIds" /* 11593 */;
import ForumPostMessageCountDefault from "ForumPostMessageCount" /* 11646 */;
import ForumPostTypingUsersDefault from "ForumPostTypingUsers" /* 11647 */;
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
let obj = { footer: { display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "flex-start", marginTop: 12 }, dot: size };
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
  const cResult = obj.c(18);
  ({ thread, firstMessage, hasUnreads, parentChannel } = arg0);
  const tmp4 = closure_8();
  const obj2 = useTypingUsersIds;
  const typingUserIds = obj2.useTypingUserIds(thread.id);
  if (cResult[0] === hasUnreads) {
    let tmp6;
    if (cResult[1] === thread) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === hasUnreads) {
      if (cResult[4] === typingUserIds.length > 0) {
        if (cResult[5] === tmp4.dot) {
          if (cResult[6] === thread) {
            let tmp8;
            if (cResult[7] === typingUserIds) {
              tmp8 = cResult[8];
            }
            if (cResult[9] === firstMessage) {
              if (cResult[10] === parentChannel) {
                let tmp15;
                if (cResult[11] === thread) {
                  tmp15 = cResult[12];
                }
                if (cResult[13] === tmp4.footer) {
                  if (cResult[14] === tmp6) {
                    if (cResult[15] === tmp8) {
                      let tmp20;
                      if (cResult[16] === tmp15) {
                        tmp20 = cResult[17];
                      }
                      return tmp20;
                    }
                  }
                }
                const obj3 = { style: tmp4.footer, children: items };
                items = [tmp6, tmp8, tmp15];
                const tmp23 = metroImportDefault(View, obj3);
                cResult[13] = tmp4.footer;
                cResult[14] = tmp6;
                cResult[15] = tmp8;
                cResult[16] = tmp15;
                cResult[17] = tmp23;
                tmp20 = tmp23;
              }
            }
            let tmp17 = null != firstMessage;
            if (tmp17) {
              const obj4 = { thread, firstMessage, parentChannel, locationAnalyticsObject: AnalyticsObjects.FORUM_GRID_ITEM_FOOTER };
              tmp17 = hasOwnProperty(ForumPostReactions.MostCommonForumPostReaction, obj4);
            }
            cResult[9] = firstMessage;
            cResult[10] = parentChannel;
            cResult[11] = thread;
            cResult[12] = tmp17;
            tmp15 = tmp17;
          }
        }
      }
    }
    let tmp9 = tmp5;
    if (tmp9) {
      const obj5 = { children: items1 };
      const obj6 = { style: tmp4.dot };
      items1 = [hasOwnProperty(View, obj6), ];
      const obj7 = { thread, typingUserIds, hasUnreads };
      items1[1] = hasOwnProperty(ForumPostTypingUsersDefault, obj7);
      tmp9 = metroImportDefault(metroRequire, obj5);
    }
    cResult[3] = hasUnreads;
    cResult[4] = typingUserIds.length > 0;
    cResult[5] = tmp4.dot;
    cResult[6] = thread;
    cResult[7] = typingUserIds;
    cResult[8] = tmp9;
    tmp8 = tmp9;
  }
  const tmp7 = hasOwnProperty(ForumPostMessageCountDefault, { thread, hasUnreads });
  cResult[0] = hasUnreads;
  cResult[1] = thread;
  cResult[2] = tmp7;
  tmp6 = tmp7;
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
  let tmp5Result = typingUserIds.length > 0;
  const obj2 = { style: tmp.footer, children: items };
  items = [hasOwnProperty(ForumPostMessageCountDefault, { thread, hasUnreads }), , ];
  if (tmp5Result) {
    const obj3 = { children: items1 };
    const obj4 = { style: tmp.dot };
    items1 = [hasOwnProperty(View, obj4), ];
    const obj5 = { thread, typingUserIds, hasUnreads };
    items1[1] = hasOwnProperty(ForumPostTypingUsersDefault, obj5);
    tmp5Result = metroImportDefault(metroRequire, obj3);
  }
  items[1] = tmp5Result;
  let tmp7Result = null != firstMessage;
  if (tmp7Result) {
    const obj6 = { thread, firstMessage, parentChannel, locationAnalyticsObject: AnalyticsObjects.FORUM_GRID_ITEM_FOOTER };
    tmp7Result = hasOwnProperty(ForumPostReactions.MostCommonForumPostReaction, obj6);
  }
  items[2] = tmp7Result;
  return metroImportDefault(View, obj2);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/forums/native/posts/grid/ForumPostGridFooter.tsx");

export default tmp4;