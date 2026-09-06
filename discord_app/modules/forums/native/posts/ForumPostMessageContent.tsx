// === Module 12023: ForumPostMessageContent ===

// Module 12023 (ForumPostMessageContent)
import noopAll from "noop" /* 19 */;
import Text from "Text" /* 4556 */;
import useNativeForumPostContentDefault from "useNativeForumPostContent" /* 12024 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
noopAll;
let closure_4 = createCacheKey.createStyles({ text: { alignSelf: "flex-start" } });
const result = require("set").fileFinishedImporting("modules/forums/native/posts/ForumPostMessageContent.tsx");

export default function ForumPostMessageContent(senderModifier) {
  let num = senderModifier.lineClamp;
  ({ messageContent, message, isMessageDeleted, hasUnreads, messageLoaded } = senderModifier);
  if (num === undefined) {
    num = 2;
  }
  const tmp = callback();
  ({ content, style, variant } = useNativeForumPostContentDefault({ message, messageLoaded, messageContent, isMessageDeleted, senderModifier: senderModifier.senderModifier }));
  const obj = { variant, color: null, lineClamp: null, ellipsizeMode: "tail", includeFontPadding: true, style: null, children: null };
  let str = "text-muted";
  if (hasUnreads) {
    str = "text-default";
  }
  obj[1] = str;
  obj[2] = num;
  const items = [style, tmp.text];
  obj[5] = items;
  obj[6] = content;
  return jsx(Text.Text, { variant, color: null, lineClamp: null, ellipsizeMode: "tail", includeFontPadding: true, style: null, children: null });
};