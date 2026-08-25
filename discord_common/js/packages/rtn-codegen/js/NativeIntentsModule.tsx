// === Module 4558: enforcing ===

// Module 4558 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeIntentsModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeIntentsModule.tsx");

export default enforcing;