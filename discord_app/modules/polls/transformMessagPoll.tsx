// discord_app/modules/polls/transformMessagPoll.tsx
import _modDef4348 from "../../../_runtime/metro/04348__.js";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = _modDef4348(expiry.expiry);
  return obj;
}
