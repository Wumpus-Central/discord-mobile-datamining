// discord_app/modules/forums/native/posts/ForumPostMessageContent.tsx
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { useNativeForumPostContent } from "hooks/useNativeForumPostContent.tsx";

const require = arg1;
let closure_4 = createCacheKey.createStyles({ text: { alignSelf: "flex-start" } });
const result = require("createCacheKey").fileFinishedImporting("modules/forums/native/posts/ForumPostMessageContent.tsx");

export default function ForumPostMessageContent(senderModifier) {
  let content;
  let hasUnreads;
  let isMessageDeleted;
  let message;
  let messageContent;
  let messageLoaded;
  let style;
  let variant;
  let num = senderModifier.lineClamp;
  ({ messageContent, message, isMessageDeleted, hasUnreads, messageLoaded } = senderModifier);
  if (num === undefined) {
    num = 2;
  }
  const tmp = callback();
  ({ content, style, variant } = useNativeForumPostContent({ message, messageLoaded, messageContent, isMessageDeleted, senderModifier: senderModifier.senderModifier }));
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