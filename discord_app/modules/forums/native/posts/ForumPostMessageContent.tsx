// === Module 11637: ForumPostMessageContent ===

// Module 11637 (ForumPostMessageContent)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Text_Text from "Text/Text" /* 4886 */;
import useNativeForumPostContentDefault from "useNativeForumPostContent" /* 11638 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ text: { alignSelf: "flex-start" } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((hasUnreads) => {
  let content;
  let isMessageDeleted;
  let lineClamp;
  let message;
  let messageContent;
  let messageLoaded;
  let senderModifier;
  let style;
  let variant;
  const obj = react2;
  const cResult = obj.c(15);
  ({ messageContent, message, isMessageDeleted, messageLoaded, lineClamp, senderModifier } = hasUnreads);
  let num = 2;
  hasUnreads = hasUnreads.hasUnreads;
  if (undefined !== lineClamp) {
    num = lineClamp;
  }
  const tmp4 = closure_4();
  if (cResult[0] === isMessageDeleted) {
    if (cResult[1] === message) {
      if (cResult[2] === messageContent) {
        if (cResult[3] === messageLoaded) {
          let tmp5;
          if (cResult[4] === senderModifier) {
            tmp5 = cResult[5];
          }
          ({ content, style, variant } = useNativeForumPostContentDefault(tmp5));
          let str = "text-muted";
          useNativeForumPostContentDefault(tmp5);
          if (hasUnreads) {
            str = "text-default";
          }
          if (cResult[6] === style) {
            let tmp8;
            if (cResult[7] === tmp4.text) {
              tmp8 = cResult[8];
            }
            if (cResult[9] === content) {
              if (cResult[10] === num) {
                if (cResult[11] === str) {
                  if (cResult[12] === tmp8) {
                    let tmp9;
                    if (cResult[13] === variant) {
                      tmp9 = cResult[14];
                    }
                    return tmp9;
                  }
                }
              }
            }
            const tmp11 = jsx(Text_Text.Text, { variant, color: str, lineClamp: num, ellipsizeMode: "tail", includeFontPadding: true, style: tmp8, children: content });
            cResult[9] = content;
            cResult[10] = num;
            cResult[11] = str;
            cResult[12] = tmp8;
            cResult[13] = variant;
            cResult[14] = tmp11;
            tmp9 = tmp11;
          }
          const items = [style, tmp4.text];
          cResult[6] = style;
          cResult[7] = tmp4.text;
          cResult[8] = items;
          tmp8 = items;
        }
      }
    }
  }
  const obj3 = { message, messageLoaded, messageContent, isMessageDeleted, senderModifier };
  cResult[0] = isMessageDeleted;
  cResult[1] = message;
  cResult[2] = messageContent;
  cResult[3] = messageLoaded;
  cResult[4] = senderModifier;
  cResult[5] = obj3;
  tmp5 = obj3;
}) : ((lineClamp) => {
  let content;
  let hasUnreads;
  let isMessageDeleted;
  let message;
  let messageContent;
  let messageLoaded;
  let style;
  let variant;
  let num = lineClamp.lineClamp;
  ({ messageContent, message, isMessageDeleted, hasUnreads, messageLoaded } = lineClamp);
  if (num === undefined) {
    num = 2;
  }
  const senderModifier = lineClamp.senderModifier;
  const tmp = closure_4();
  ({ content, style, variant } = useNativeForumPostContentDefault({ message, messageLoaded, messageContent, isMessageDeleted, senderModifier }));
  let str = "text-muted";
  useNativeForumPostContentDefault({ message, messageLoaded, messageContent, isMessageDeleted, senderModifier });
  const Text = Text_Text.Text;
  if (hasUnreads) {
    str = "text-default";
  }
  const items = [style, tmp.text];
  return <Text variant={variant} color={str} lineClamp={num} ellipsizeMode="tail" includeFontPadding style={items}>{content}</Text>;
});
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostMessageContent.tsx");

export default tmp3;