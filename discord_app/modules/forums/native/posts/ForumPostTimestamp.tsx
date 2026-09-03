// === Module 11815: ForumPostTimestamp ===

// Module 11815 (ForumPostTimestamp)
import noopAll from "noop" /* 19 */;
import Text from "Text" /* 4474 */;
import useLoadForumUnreadCounts from "useLoadForumUnreadCounts" /* 7639 */;
import { useForumChannelStore } from "set" /* 11802 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
noopAll;
let closure_4 = createCacheKey.createStyles({ text: { lineHeight: 18, height: 18 } });
const result = require("set").fileFinishedImporting("modules/forums/native/posts/ForumPostTimestamp.tsx");

export default function ForumPostTimestamp(thread) {
  thread = thread.thread;
  ({ textStyle, hasUnreads, format } = thread);
  const tmp = callback();
  const tmp2 = require;
  let color = "text-muted";
  const children = useLoadForumUnreadCounts.useLastActiveTimestamp(thread, useForumChannelStore(thread.parent_id).sortOrder, format);
  if (hasUnreads) {
    color = "text-default";
  }
  const style = [textStyle, tmp.text];
  return jsx(Text.Text, { lineClamp: 1, variant: "text-xs/normal", color, style, children });
};