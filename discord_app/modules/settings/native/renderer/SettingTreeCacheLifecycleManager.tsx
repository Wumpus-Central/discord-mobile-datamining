// === Module 17889: SettingTreeCacheLifecycleManager ===

// Module 17889 (SettingTreeCacheLifecycleManager)
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7363 */;

const prototype = function SettingTreeManagerLifecycleManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  importDefault = applyArgumentsResult;
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN() {
      return applyArgumentsResult.handleConnectionOpen();
    }
  };
  applyArgumentsResult.handleConnectionOpen = function handleConnectionOpen() {
    applyArgumentsResult(dependencyMap[1]).clearCaches();
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("modules/settings/native/renderer/SettingTreeCacheLifecycleManager.tsx");

export default prototype1;