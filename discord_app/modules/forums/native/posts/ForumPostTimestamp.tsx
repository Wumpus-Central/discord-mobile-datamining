// === Module 13994: ForumPostTimestamp ===

// Module 13994 (ForumPostTimestamp)
import Text_Text from "Text/Text" /* 5761 */;
import ForumHooks from "ForumHooks" /* 10017 */;
import noop from "module_19" /* 19 */;

require = fn;
const useForumChannelStore = fn(13980).useForumChannelStore;
const jsx = fn(21).jsx;
const createStyles = fn(5141);
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
  const obj2 = { lineClamp: 1, variant: "body-xs/normal", color: str, style: null, children: lastActiveTimestamp };
  items = [textStyle, tmp.text];
  obj2.style = items;
  return jsx(Text_Text.Text, { lineClamp: 1, variant: "body-xs/normal", color: str, style: null, children: lastActiveTimestamp });
};