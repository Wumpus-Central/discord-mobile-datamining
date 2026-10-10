// discord_app/modules/forums/native/posts/grid/ForumPostGridFooter.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ForumPostReactions from "../reactions/ForumPostReactions.tsx";
import useTypingUsersIds from "../../../../chat/useTypingUsersIds.tsx";
import ForumPostMessageCountDefault from "../ForumPostMessageCount.tsx";
import ForumPostTypingUsersDefault from "../ForumPostTypingUsers.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const AnalyticsObjects = fn(1085).AnalyticsObjects;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  footer: { display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "flex-start", marginTop: 12 },
  dot: null,
};
let size = {
  height: 4,
  width: 4,
  borderRadius: 2,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
  marginHorizontal: 8,
};
obj2.dot = size;
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/grid/ForumPostGridFooter.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ForumPostGridFooter(arg0) {
      const cResult = c.c(18);
      ({ thread, firstMessage, hasUnreads, parentChannel } = arg0);
      const tmp4 = closure_8();
      const typingUserIds = useTypingUsersIds.useTypingUserIds(thread.id);
      if (cResult[0] === hasUnreads) {
        if (cResult[1] === thread) {
          let tmp6 = cResult[2];
        }
        if (cResult[3] === hasUnreads) {
          if (cResult[4] === tmp5) {
            if (cResult[5] === tmp4.dot) {
              if (cResult[6] === thread) {
                if (cResult[7] === typingUserIds) {
                  let tmp8 = cResult[8];
                }
                if (cResult[9] === firstMessage) {
                  if (cResult[10] === parentChannel) {
                    if (cResult[11] === thread) {
                      let tmp15 = cResult[12];
                    }
                    if (cResult[13] === tmp4.footer) {
                      if (cResult[14] === tmp6) {
                        if (cResult[15] === tmp8) {
                          if (cResult[16] === tmp15) {
                            let tmp20 = cResult[17];
                          }
                          return tmp20;
                        }
                      }
                    }
                    const obj3 = { style: tmp4.footer, children: null };
                    const items = [tmp6, tmp8, tmp15];
                    obj3.children = items;
                    const tmp23 = React5(View, obj3);
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
                  const obj4 = {
                    thread,
                    firstMessage,
                    parentChannel,
                    locationAnalyticsObject: AnalyticsObjects.FORUM_GRID_ITEM_FOOTER,
                  };
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
        if (tmp5) {
          const obj5 = { children: null };
          const obj6 = { style: tmp4.dot };
          const items1 = [hasOwnProperty(View, obj6)];
          const obj7 = { thread, typingUserIds, hasUnreads };
          items1[1] = hasOwnProperty(ForumPostTypingUsersDefault, obj7);
          obj5.children = items1;
          tmp9 = React5(timestampProducer, obj5);
        }
        cResult[3] = hasUnreads;
        cResult[4] = tmp5;
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
    }
  : function ForumPostGridFooter(parentChannel) {
      ({ thread, firstMessage, hasUnreads } = parentChannel);
      const tmp = closure_8();
      const typingUserIds = useTypingUsersIds.useTypingUserIds(thread.id);
      let tmp5Result = typingUserIds.length > 0;
      const obj2 = { style: tmp.footer, children: null };
      const items = [hasOwnProperty(ForumPostMessageCountDefault, { thread, hasUnreads }), ,];
      if (tmp5Result) {
        const obj3 = { children: null };
        const obj4 = { style: tmp.dot };
        const items1 = [hasOwnProperty(View, obj4)];
        const obj5 = { thread, typingUserIds, hasUnreads };
        items1[1] = hasOwnProperty(ForumPostTypingUsersDefault, obj5);
        obj3.children = items1;
        tmp5Result = React5(timestampProducer, obj3);
      }
      items[1] = tmp5Result;
      let tmp7Result = null != firstMessage;
      if (tmp7Result) {
        const obj6 = {
          thread,
          firstMessage,
          parentChannel: parentChannel.parentChannel,
          locationAnalyticsObject: AnalyticsObjects.FORUM_GRID_ITEM_FOOTER,
        };
        tmp7Result = hasOwnProperty(ForumPostReactions.MostCommonForumPostReaction, obj6);
      }
      items[2] = tmp7Result;
      obj2.children = items;
      return React5(View, obj2);
    };
