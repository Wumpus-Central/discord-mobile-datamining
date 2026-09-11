// === Module 12107: ForumPostTimestamp ===

// Module 12107 (ForumPostTimestamp)
import Text_Text from "Text/Text" /* 4602 */;
import ForumHooks from "ForumHooks" /* 7959 */;
import noop from "module_19" /* 19 */;

require = fn;
const useForumChannelStore = fn(12094).useForumChannelStore;
const jsx = fn(21).jsx;
const createStyles = fn(4606);
let closure_4 = createStyles.createStyles({ text: { lineHeight: 18, height: 18 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostTimestamp.tsx");

export default function ForumPostTimestamp(thread) {
  thread = thread.thread;
  ({ textStyle, hasUnreads, format } = thread);
  let obj = ForumHooks;
  let str = "text-muted";
  const lastActiveTimestamp = obj.useLastActiveTimestamp(thread, useForumChannelStore(thread.parent_id).sortOrder, format);
  if (hasUnreads) {
    str = "text-default";
  }
  obj = { lineClamp: 1, variant: "text-xs/normal", color: str, style: null, children: lastActiveTimestamp };
  const items = [textStyle, closure_4().text];
  obj.style = items;
  return jsx(Text_Text.Text, { lineClamp: 1, variant: "text-xs/normal", color: str, style: null, children: lastActiveTimestamp });
};