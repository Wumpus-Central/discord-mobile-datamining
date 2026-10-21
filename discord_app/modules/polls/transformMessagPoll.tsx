// discord_app/modules/polls/transformMessagPoll.tsx
import _modDef2049 from "../../../_runtime/metro/02049__.js";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = _modDef2049(expiry.expiry);
  return obj;
}
