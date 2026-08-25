// discord_app/modules/polls/transformMessagPoll.tsx
import set from "../../../_runtime/00002_set.js";
import hooksDefault from "../../../_runtime/03979_hooks.js";

const result = set.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = hooksDefault(expiry.expiry);
  return obj;
};