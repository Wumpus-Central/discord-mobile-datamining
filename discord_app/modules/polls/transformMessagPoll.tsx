// discord_app/modules/polls/transformMessagPoll.tsx
import set from "../../../_runtime/00002_set.js";
import tDefault from "../../../_runtime/03975_t.js";

const result = set.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = tDefault(expiry.expiry);
  return obj;
};