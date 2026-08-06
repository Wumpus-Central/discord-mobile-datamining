// discord_app/modules/polls/transformMessagPoll.tsx
import { t } from "../../../_runtime/03866_t.js";
const result = require("set").fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = t(expiry.expiry);
  return obj;
};