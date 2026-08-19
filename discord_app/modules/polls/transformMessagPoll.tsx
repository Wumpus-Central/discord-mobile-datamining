// discord_app/modules/polls/transformMessagPoll.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import tDefault from "../../../_runtime/03975_t.js";

const result = obj132.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = tDefault(expiry.expiry);
  return obj;
};