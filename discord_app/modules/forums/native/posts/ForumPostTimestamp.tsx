// discord_app/modules/forums/native/posts/ForumPostTimestamp.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import Text from "../../../../design/components/Text/native/Text.tsx";
import useLoadForumUnreadCounts from "../../ForumHooks.tsx";
import { useForumChannelStore } from "../../ForumChannelStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = fn;
noopAll;
let closure_4 = createCacheKey.createStyles({ text: { lineHeight: 18, height: 18 } });
const result = require("obj132").fileFinishedImporting("modules/forums/native/posts/ForumPostTimestamp.tsx");

export default function ForumPostTimestamp(thread) {
  thread = thread.thread;
  ({ textStyle, hasUnreads, format } = thread);
  const tmp = callback();
  let color = "text-muted";
  const children = useLoadForumUnreadCounts.useLastActiveTimestamp(thread, useForumChannelStore(thread.parent_id).sortOrder, format);
  if (hasUnreads) {
    color = "text-default";
  }
  const style = [textStyle, tmp.text];
  return jsx(Text.Text, { lineClamp: 1, variant: "text-xs/normal", color, style, children });
};