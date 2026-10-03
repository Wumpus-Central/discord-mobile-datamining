// === Module 17042: MessageRequestEmpty ===

// Module 17042 (MessageRequestEmpty)
import c from "c" /* 576 */;
import native from "native" /* 1188 */;
import Pending from "Pending" /* 17043 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestEmpty.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((bodyText) => {
  const cResult = c.c(2);
  bodyText = bodyText.bodyText;
  if (cResult[0] !== bodyText) {
    const obj2 = { Illustration: Pending.Pending, body: bodyText };
    const tmp6 = jsx(native.EmptyState, { Illustration: Pending.Pending, body: bodyText });
    cResult[0] = bodyText;
    cResult[1] = tmp6;
    let tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : ((body) => jsx(native.EmptyState, { Illustration: Pending.Pending, body: body.bodyText }));