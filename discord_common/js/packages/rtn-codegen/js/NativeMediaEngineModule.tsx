// === Module 4500: enforcing ===

// Module 4500 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeMediaEngineModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeMediaEngineModule.tsx");

export default enforcing;