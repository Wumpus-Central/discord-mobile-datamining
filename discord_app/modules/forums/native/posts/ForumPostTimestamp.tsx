// discord_app/modules/forums/native/posts/ForumPostTimestamp.tsx
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ForumHooks from "../../ForumHooks.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const useForumChannelStore = fn(12143).useForumChannelStore;
const jsx = fn(21).jsx;
const createStyles = fn(4638);
let closure_4 = createStyles.createStyles({ text: { lineHeight: 18, height: 18 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostTimestamp.tsx");

export default function ForumPostTimestamp(thread) {
  thread = thread.thread;
  ({ textStyle, hasUnreads, format } = thread);
  const tmp = closure_4();
  let str = "text-muted";
  const lastActiveTimestamp = ForumHooks.useLastActiveTimestamp(
    thread,
    useForumChannelStore(thread.parent_id).sortOrder,
    format,
  );
  if (hasUnreads) {
    str = "text-default";
  }
  const obj2 = { lineClamp: 1, variant: "text-xs/normal", color: str, style: null, children: lastActiveTimestamp };
  const items = [textStyle, tmp.text];
  obj2.style = items;
  return jsx(Text_Text.Text, {
    lineClamp: 1,
    variant: "text-xs/normal",
    color: str,
    style: null,
    children: lastActiveTimestamp,
  });
}
