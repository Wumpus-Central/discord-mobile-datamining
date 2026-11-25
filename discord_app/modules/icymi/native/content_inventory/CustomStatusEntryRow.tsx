// === Module 18300: CustomStatusEntryRow ===

// Module 18300 (CustomStatusEntryRow)
import useReplyActions from "useReplyActions" /* 18296 */;
import ICYMICustomStatusRowDefault from "ICYMICustomStatusRow" /* 18301 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/content_inventory/CustomStatusEntryRow.tsx");

export default function CustomStatusEntryRow(content) {
  content = content.content;
  ({ renderForScreenshot, visible } = content);
  const replyActions = useReplyActions.useReplyActions({ content });
  ({ openEmojiPicker, openReplyActionSheet } = replyActions);
  return jsx(ICYMICustomStatusRowDefault, { id: content.id, userId: content.author_id, customStatusExtra: content.extra, renderForScreenshot, visible, variant: { kind: "otherUserStatus", handlePressPrimary: openReplyActionSheet, handlePressSecondary: openEmojiPicker } });
};