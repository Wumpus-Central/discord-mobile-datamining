// discord_app/modules/polls/transformMessagPoll.tsx
import _modDef2044 from "../../../_runtime/metro/02044__.js";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = _modDef2044(expiry.expiry);
  return obj;
}
