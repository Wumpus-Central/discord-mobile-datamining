// discord_app/modules/forums/native/posts/ForumPostMessageContent.tsx
import c from "../../../../../_runtime/00576_c.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useNativeForumPostContentDefault from "hooks/useNativeForumPostContent.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let closure_4 = createStyles.createStyles({ text: { alignSelf: "flex-start" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostMessageContent.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ForumPostMessageContent(hasUnreads) {
      const cResult = c.c(15);
      ({ messageContent, message, isMessageDeleted, messageLoaded, lineClamp, senderModifier } = hasUnreads);
      let num = 2;
      if (undefined !== lineClamp) {
        num = lineClamp;
      }
      const tmp4 = closure_4();
      if (cResult[0] === isMessageDeleted) {
        if (cResult[1] === message) {
          if (cResult[2] === messageContent) {
            if (cResult[3] === messageLoaded) {
              if (cResult[4] === senderModifier) {
                let tmp5 = cResult[5];
              }
              ({ content, style, variant } = useNativeForumPostContentDefault(tmp5));
              let str = "text-muted";
              if (hasUnreads.hasUnreads) {
                str = "text-default";
              }
              if (cResult[6] === style) {
                if (cResult[7] === tmp4.text) {
                  let tmp8 = cResult[8];
                }
                if (cResult[9] === content) {
                  if (cResult[10] === num) {
                    if (cResult[11] === str) {
                      if (cResult[12] === tmp8) {
                        if (cResult[13] === variant) {
                          let tmp9 = cResult[14];
                        }
                        return tmp9;
                      }
                    }
                  }
                }
                const obj2 = {
                  variant,
                  color: str,
                  lineClamp: num,
                  ellipsizeMode: "tail",
                  includeFontPadding: true,
                  style: tmp8,
                  children: content,
                };
                const tmp11 = jsx(Text_Text.Text, {
                  variant,
                  color: str,
                  lineClamp: num,
                  ellipsizeMode: "tail",
                  includeFontPadding: true,
                  style: tmp8,
                  children: content,
                });
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
              const tmp7 = useNativeForumPostContentDefault(tmp5);
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
    }
  : function ForumPostMessageContent(senderModifier) {
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
    };
