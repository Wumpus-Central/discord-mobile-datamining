// === Module 16751: enforcing ===

// Module 16751 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeJankStatsModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeJankStatsModule.tsx");

export default enforcing;