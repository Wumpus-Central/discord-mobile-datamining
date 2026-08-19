// discord_app/modules/message_request/native/MessageRequestEmpty.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import Button from "../../../design/void/native.tsx";
import getPendingSource from "../../../design/components/Illustration/native/redesign/generated/Pending.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/message_request/native/MessageRequestEmpty.tsx");

export default function MessageRequestEmpty(body) {
  return jsx(Button.EmptyState, { Illustration: getPendingSource.Pending, body: body.bodyText });
};