// discord_app/modules/quests/native/ATTModal/ATTManager.android.tsx
import "initialize";

const require = arg1;
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
    const adUser = require("../../../ads/native/AdUserActionCreators.android.tsx") /* _fetchAdUser */.fetchAdUser("post_connection_open");
  } catch (tmp4) {
    require("../../../../utils/SentryUtils.native.tsx").captureException(tmp4);
    const obj2 = require("../../../../utils/SentryUtils.native.tsx");
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
const result = require("module_1208").fileFinishedImporting("modules/quests/native/ATTModal/ATTManager.android.tsx");

export default aTTManager;