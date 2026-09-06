// discord_app/modules/message_request/native/MessageRequestEmpty.tsx
import native from "../../../design/void/native.tsx";
import Pending from "../../../design/components/Illustration/native/redesign/generated/Pending.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestEmpty.tsx");

export default function MessageRequestEmpty(body) {
  return jsx(native.EmptyState, { Illustration: Pending.Pending, body: body.bodyText });
}
