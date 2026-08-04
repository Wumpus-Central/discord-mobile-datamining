// discord_app/modules/polls/transformMessagPoll.tsx
const result = require("set").fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = importDefault(3775)(expiry.expiry);
  return obj;
};