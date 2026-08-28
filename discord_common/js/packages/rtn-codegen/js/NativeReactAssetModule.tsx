// === Module 17417: enforcing ===

// Module 17417 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeReactAssetModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeReactAssetModule.tsx");

export default enforcing;