// discord_app/modules/rpc/native/server/NativeRPCServerManager.tsx
import itemsDefault from "../NativeRPCImplementation.tsx";
import importDefaultResult from "../../server/RPCServerManager.tsx";

importDefaultResult = new importDefaultResult(itemsDefault);
const result = require("set").fileFinishedImporting("modules/rpc/native/server/NativeRPCServerManager.tsx");

export default importDefaultResult;