// === Module 16448: CustomStatusEntryRow ===

// Module 16448 (CustomStatusEntryRow)
import c from "c" /* 576 */;
import useReplyActions from "useReplyActions" /* 16444 */;
import ICYMICustomStatusRowDefault from "ICYMICustomStatusRow" /* 16449 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/content_inventory/CustomStatusEntryRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(12);
  ({ content, renderForScreenshot, visible } = arg0);
  if (cResult[0] !== content) {
    const obj2 = { content };
    cResult[0] = content;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const replyActions = useReplyActions.useReplyActions(tmp4);
  ({ openEmojiPicker, openReplyActionSheet } = replyActions);
  if (cResult[2] === openEmojiPicker) {
    if (cResult[3] === openReplyActionSheet) {
      let tmp6 = cResult[4];
    }
    if (cResult[5] === content.author_id) {
      if (cResult[6] === content.extra) {
        if (cResult[7] === content.id) {
          if (cResult[8] === renderForScreenshot) {
            if (cResult[9] === tmp6) {
              if (cResult[10] === visible) {
                let tmp7 = cResult[11];
              }
              return tmp7;
            }
          }
        }
      }
    }
    const obj3 = { id: null, userId: null, customStatusExtra: null, renderForScreenshot: null, visible: null, variant: null };
    ({ id: obj5.id, author_id: obj5.userId, extra: obj5.customStatusExtra } = content);
    obj3.renderForScreenshot = renderForScreenshot;
    obj3.visible = visible;
    obj3.variant = tmp6;
    const tmp10 = jsx(ICYMICustomStatusRowDefault, { id: null, userId: null, customStatusExtra: null, renderForScreenshot: null, visible: null, variant: null });
    cResult[5] = content.author_id;
    cResult[6] = content.extra;
    cResult[7] = content.id;
    cResult[8] = renderForScreenshot;
    cResult[9] = tmp6;
    cResult[10] = visible;
    cResult[11] = tmp10;
    tmp7 = tmp10;
  }
  const obj4 = { kind: "otherUserStatus", handlePressPrimary: openReplyActionSheet, handlePressSecondary: openEmojiPicker };
  cResult[2] = openEmojiPicker;
  cResult[3] = openReplyActionSheet;
  cResult[4] = obj4;
  tmp6 = obj4;
  const tmpResult = useReplyActions;
}) : ((content) => {
  content = content.content;
  ({ renderForScreenshot, visible } = content);
  const replyActions = useReplyActions.useReplyActions({ content });
  ({ openEmojiPicker, openReplyActionSheet } = replyActions);
  return jsx(ICYMICustomStatusRowDefault, { id: content.id, userId: content.author_id, customStatusExtra: content.extra, renderForScreenshot, visible, variant: { kind: "otherUserStatus", handlePressPrimary: openReplyActionSheet, handlePressSecondary: openEmojiPicker } });
});