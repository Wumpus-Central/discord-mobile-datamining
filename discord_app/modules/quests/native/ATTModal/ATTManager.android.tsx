// === Module 17315: ATTManager ===

// Module 17315 (ATTManager)
import SentryUtilsDefault from "SentryUtils" /* 1232 */;
import AdUserActionCreators from "AdUserActionCreators" /* 7732 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

require = fn;
class ATTManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult._openATTPrePromptOrFlowTimeoutId = null;
    applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.onPostConnectionOpen };
    return applyArgumentsResult;
  }
}
const prototype = ATTManager.prototype;
prototype["onPostConnectionOpen"] = function onPostConnectionOpen() {
  try {
    const adUser = AdUserActionCreators.fetchAdUser("post_connection_open");
  } catch (tmp4) {
    SentryUtilsDefault.captureException(tmp4);
  }
};
prototype["_terminate"] = function _terminate() {
  const self = this;
  if (null != this._openATTPrePromptOrFlowTimeoutId) {
    const _clearTimeout = clearTimeout;
    clearTimeout(self._openATTPrePromptOrFlowTimeoutId);
    self._openATTPrePromptOrFlowTimeoutId = null;
  }
};
const aTTManager = new ATTManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/ATTModal/ATTManager.android.tsx");

export default aTTManager;