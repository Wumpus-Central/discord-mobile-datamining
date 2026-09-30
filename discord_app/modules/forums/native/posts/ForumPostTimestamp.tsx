// === Module 11699: ForumPostTimestamp ===

// Module 11699 (ForumPostTimestamp)
import Text_Text from "Text/Text" /* 4862 */;
import ForumHooks from "ForumHooks" /* 7506 */;
import noop from "module_19" /* 19 */;

require = fn;
const useForumChannelStore = fn(11686).useForumChannelStore;
const jsx = fn(21).jsx;
const createStyles = fn(4866);
let closure_4 = createStyles.createStyles({ text: { lineHeight: 18, height: 18 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostTimestamp.tsx");

export default function ForumPostTimestamp(thread) {
  thread = thread.thread;
  ({ textStyle, hasUnreads, format } = thread);
  const tmp = closure_4();
  let str = "text-muted";
  const lastActiveTimestamp = ForumHooks.useLastActiveTimestamp(thread, useForumChannelStore(thread.parent_id).sortOrder, format);
  if (hasUnreads) {
    str = "text-default";
  }
  const obj2 = { lineClamp: 1, variant: "text-xs/normal", color: str, style: null, children: lastActiveTimestamp };
  const items = [textStyle, tmp.text];
  obj2.style = items;
  return jsx(Text_Text.Text, { lineClamp: 1, variant: "text-xs/normal", color: str, style: null, children: lastActiveTimestamp });
};