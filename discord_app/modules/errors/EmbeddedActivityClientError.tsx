// discord_app/modules/errors/EmbeddedActivityClientError.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/errors/EmbeddedActivityClientError.tsx");
const prototype = function EmbeddedActivityClientError(reason, detailCode) {
  const obj = Object.create(new.target.prototype);
  obj.reason = reason;
  obj.detailCode = detailCode;
  return obj;
}.prototype;
prototype.Reasons = {
  PRIMARY_APP_COMMAND_NOT_FOUND: 0,
  [0]: "PRIMARY_APP_COMMAND_NOT_FOUND",
  LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED: 1,
  [1]: "LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED",
  INVALID_CHANNEL: 2,
  [2]: "INVALID_CHANNEL",
};

export default prototype;
