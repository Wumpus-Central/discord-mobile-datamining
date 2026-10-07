// discord_app/modules/message_request/native/MessageRequestEmpty.tsx
import c from "../../../../_runtime/00576_c.js";
import native from "../../../design/void/native.tsx";
import Pending from "../../../design/components/Illustration/native/redesign/generated/Pending.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestEmpty.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (bodyText) => {
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
    }
  : (body) => jsx(native.EmptyState, { Illustration: Pending.Pending, body: body.bodyText });
