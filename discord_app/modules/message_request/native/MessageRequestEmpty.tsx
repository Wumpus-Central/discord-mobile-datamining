// discord_app/modules/message_request/native/MessageRequestEmpty.tsx
import "noop";
import { jsx } from "jsxProd";
import { getPendingSource } from "../../../design/components/Illustration/native/redesign/generated/Pending.tsx";
import { Button } from "../../../design/void/native.tsx";

const require = arg1;
const result = require("Button").fileFinishedImporting("modules/message_request/native/MessageRequestEmpty.tsx");

export default function MessageRequestEmpty(bodyText) {
  const obj = { Illustration: null, body: null };
  obj[0] = getPendingSource /* getPendingSource */.Pending;
  obj[1] = bodyText.bodyText;
  return jsx(Button /* Button */.EmptyState, { Illustration: null, body: null });
};