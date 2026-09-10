// === Module 12093: ForumPostMessageContent ===

// Module 12093 (ForumPostMessageContent)
import Text_Text from "Text/Text" /* 4601 */;
import useNativeForumPostContentDefault from "useNativeForumPostContent" /* 12094 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4605);
let closure_4 = createStyles.createStyles({ text: { alignSelf: "flex-start" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostMessageContent.tsx");

export default function ForumPostMessageContent(senderModifier) {
  let num = senderModifier.lineClamp;
  ({ messageContent, message, isMessageDeleted, hasUnreads, messageLoaded } = senderModifier);
  if (num === undefined) {
    num = 2;
  }
  const tmp = closure_4();
  ({ content, style, variant } = useNativeForumPostContentDefault({ message, messageLoaded, messageContent, isMessageDeleted, senderModifier: senderModifier.senderModifier }));
  const obj = { variant, color: null, lineClamp: null, ellipsizeMode: "tail", includeFontPadding: true, style: null, children: null };
  let str = "text-muted";
  if (hasUnreads) {
    str = "text-default";
  }
  obj.color = str;
  obj.lineClamp = num;
  const items = [style, tmp.text];
  obj.style = items;
  obj.children = content;
  return jsx(Text_Text.Text, { variant, color: null, lineClamp: null, ellipsizeMode: "tail", includeFontPadding: true, style: null, children: null });
};