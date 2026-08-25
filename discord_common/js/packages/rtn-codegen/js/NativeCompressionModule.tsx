// === Module 13123: enforcing ===

// Module 13123 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeCompressionModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeCompressionModule.tsx");

export default enforcing;