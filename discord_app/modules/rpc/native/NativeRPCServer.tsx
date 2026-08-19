// discord_app/modules/rpc/native/NativeRPCServer.tsx
import root from "../../../../_runtime/08754_root.js";
import registerTransportDefault from "../RPCServer.tsx";

require = fn;
const tmp2 = new registerTransportDefault(() => Promise.resolve(root));
const result = require("obj132").fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;