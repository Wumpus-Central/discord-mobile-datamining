// discord_app/modules/forums/native/posts/ForumPostMessageContent.tsx
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useNativeForumPostContentDefault from "hooks/useNativeForumPostContent.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
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
  ({ content, style, variant } = useNativeForumPostContentDefault({
    message,
    messageLoaded,
    messageContent,
    isMessageDeleted,
    senderModifier: senderModifier.senderModifier,
  }));
  const obj = {
    variant,
    color: null,
    lineClamp: null,
    ellipsizeMode: "tail",
    includeFontPadding: true,
    style: null,
    children: null,
  };
  let str = "text-muted";
  if (hasUnreads) {
    str = "text-default";
  }
  obj.color = str;
  obj.lineClamp = num;
  const items = [style, tmp.text];
  obj.style = items;
  obj.children = content;
  return jsx(Text_Text.Text, {
    variant,
    color: null,
    lineClamp: null,
    ellipsizeMode: "tail",
    includeFontPadding: true,
    style: null,
    children: null,
  });
}
