// discord_app/modules/gateway/ConnectionState.tsx
import set from "../../../_runtime/00002_set.js";

const result = set.fileFinishedImporting("modules/gateway/ConnectionState.tsx");

export default {
  CLOSED: "CLOSED",
  WILL_RECONNECT: "WILL_RECONNECT",
  CONNECTING: "CONNECTING",
  IDENTIFYING: "IDENTIFYING",
  RESUMING: "RESUMING",
  SESSION_ESTABLISHED: "SESSION_ESTABLISHED",
};
