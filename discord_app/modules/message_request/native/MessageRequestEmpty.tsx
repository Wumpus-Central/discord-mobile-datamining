// discord_app/modules/message_request/native/MessageRequestEmpty.tsx
import noopAll from "noop" /* 19 */;
import Button from "Button" /* 1297 */;
import getPendingSource from "getPendingSource" /* 16103 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/message_request/native/MessageRequestEmpty.tsx");

export default function MessageRequestEmpty(body) {
  return jsx(Button.EmptyState, { Illustration: getPendingSource.Pending, body: body.bodyText });
};