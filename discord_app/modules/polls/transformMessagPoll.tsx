// discord_app/modules/polls/transformMessagPoll.tsx
import _modDef4461 from "../../../_runtime/metro/04461__.js";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = { expiry: _modDef4461(expiry.expiry) };
  const merged = Object.assign(expiry);
  return obj;
}
