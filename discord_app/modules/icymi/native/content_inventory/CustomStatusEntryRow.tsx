// === Module 15766: CustomStatusEntryRow ===

// Module 15766 (CustomStatusEntryRow)
import noopAll from "noop" /* 19 */;
import useReplyActions from "useReplyActions" /* 15762 */;
import UploadPlaceholderDefault from "UploadPlaceholder" /* 15767 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/icymi/native/content_inventory/CustomStatusEntryRow.tsx");

export default function CustomStatusEntryRow(content) {
  content = content.content;
  ({ renderForScreenshot, visible } = content);
  let obj = useReplyActions;
  const replyActions = obj.useReplyActions({ content });
  ({ openEmojiPicker, openReplyActionSheet } = replyActions);
  obj = { id: content.id, userId: content.author_id, customStatusExtra: content.extra, renderForScreenshot, visible, variant: { kind: "otherUserStatus", handlePressPrimary: openReplyActionSheet, handlePressSecondary: openEmojiPicker } };
  return jsx(UploadPlaceholderDefault, { id: content.id, userId: content.author_id, customStatusExtra: content.extra, renderForScreenshot, visible, variant: { kind: "otherUserStatus", handlePressPrimary: openReplyActionSheet, handlePressSecondary: openEmojiPicker } });
};