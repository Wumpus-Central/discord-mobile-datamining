// discord_app/modules/remote_auth/typing.tsx
import set from "../../../_runtime/00002_set.js";

const result = set.fileFinishedImporting("modules/remote_auth/typing.tsx");

export const RemoteAuthStep = { INITIALIZING: 0, [0]: "INITIALIZING", PENDING_REMOTE_INIT: 1, [1]: "PENDING_REMOTE_INIT", PENDING_TICKET: 2, [2]: "PENDING_TICKET", PENDING_LOGIN: 3, [3]: "PENDING_LOGIN", FINISH: 4, [4]: "FINISH" };