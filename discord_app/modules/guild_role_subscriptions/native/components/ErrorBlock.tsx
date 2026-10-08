// === Module 11938: ErrorBlock ===

// Module 11938 (ErrorBlock)
import c from "c" /* 576 */;
import MessageBlock from "MessageBlock" /* 11939 */;
import noop from "module_19" /* 19 */;

const MessageBlockDefault = MessageBlock;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/ErrorBlock.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ErrorBlock(children) {
  const cResult = c.c(2);
  children = children.children;
  if (cResult[0] !== children) {
    const obj2 = { color: MessageBlock.MessageBlockColors.RED, children };
    const tmp8 = jsx(MessageBlockDefault, { color: MessageBlock.MessageBlockColors.RED, children });
    cResult[0] = children;
    cResult[1] = tmp8;
    let tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function ErrorBlock(children) {
  const obj = { color: MessageBlock.MessageBlockColors.RED, children: children.children };
  return jsx(MessageBlockDefault, { color: MessageBlock.MessageBlockColors.RED, children: children.children });
});