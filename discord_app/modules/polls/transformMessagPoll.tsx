// discord_app/modules/polls/transformMessagPoll.tsx
const result = require("set").fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = require("../../../_runtime/03867_t.js")(expiry.expiry);
  return obj;
};