// discord_app/modules/rpc/RPCOpcodes.tsx
import set from "../../../_runtime/00002_set.js";

const result = set.fileFinishedImporting("modules/rpc/RPCOpcodes.tsx");

export default { HANDSHAKE: 0, FRAME: 1, CLOSE: 2, HELLO: 3 };