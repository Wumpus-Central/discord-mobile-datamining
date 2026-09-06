// discord_app/modules/icymi/native/content_inventory/CustomStatusEntryRow.tsx
import useReplyActions from "useReplyActions.tsx";
import ICYMICustomStatusRowDefault from "ICYMICustomStatusRow.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/content_inventory/CustomStatusEntryRow.tsx");

export default function CustomStatusEntryRow(content) {
  content = content.content;
  ({ renderForScreenshot, visible } = content);
  let obj = useReplyActions;
  const replyActions = obj.useReplyActions({ content });
  ({ openEmojiPicker, openReplyActionSheet } = replyActions);
  obj = {
    id: content.id,
    userId: content.author_id,
    customStatusExtra: content.extra,
    renderForScreenshot,
    visible,
    variant: {
      kind: "otherUserStatus",
      handlePressPrimary: openReplyActionSheet,
      handlePressSecondary: openEmojiPicker,
    },
  };
  return jsx(ICYMICustomStatusRowDefault, {
    id: content.id,
    userId: content.author_id,
    customStatusExtra: content.extra,
    renderForScreenshot,
    visible,
    variant: {
      kind: "otherUserStatus",
      handlePressPrimary: openReplyActionSheet,
      handlePressSecondary: openEmojiPicker,
    },
  });
}
