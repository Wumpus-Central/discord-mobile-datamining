// === Module 16806: onPostConnectionOpen ===

// Module 16806 (onPostConnectionOpen)
import _modDef1208 from "module_1208" /* 1208 */;
import initializeDefault from "initialize" /* 5438 */;
import _fetchAdUser from "_fetchAdUser" /* 7410 */;

require = arg1;
initializeDefault;
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
    const adUser = _fetchAdUser.fetchAdUser("post_connection_open");
  } catch (tmp4) {
    _modDef1208.captureException(tmp4);
    const obj2 = _modDef1208;
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
const result = require("set").fileFinishedImporting("modules/quests/native/ATTModal/ATTManager.android.tsx");

export default aTTManager;