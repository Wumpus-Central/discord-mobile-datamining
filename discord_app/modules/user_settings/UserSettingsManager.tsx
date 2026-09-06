// === Module 17500: UserSettingsManager ===

// Module 17500 (UserSettingsManager)
import UserSettings from "UserSettings" /* 1935 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

require = fn;
let c2 = false;
class UserSettingsManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN() {
            applyArgumentsResult.setVerifyTimezone();
          },
      OVERLAY_INITIALIZE: applyArgumentsResult.setVerifyTimezone,
      USER_SETTINGS_PROTO_UPDATE: applyArgumentsResult.ensureTimezoneUpdated
    };
    return applyArgumentsResult;
  }
}
const prototype = UserSettingsManager.prototype;
prototype["setVerifyTimezone"] = function setVerifyTimezone() {
  c2 = true;
};
prototype["ensureTimezoneUpdated"] = function ensureTimezoneUpdated() {
  if (c2) {
    c2 = false;
    const _Date = Date;
    const date = new Date();
    const timezoneOffset = date.getTimezoneOffset();
    let TimezoneOffset = timezoneOffset(1935).TimezoneOffset;
    if (TimezoneOffset.getSetting() !== timezoneOffset) {
      const _setImmediate = setImmediate;
      setImmediate(() => {
        const TimezoneOffset = UserSettings.TimezoneOffset;
        return TimezoneOffset.updateSetting(timezoneOffset);
      });
    }
  }
};
const userSettingsManager = new UserSettingsManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/UserSettingsManager.tsx");

export default userSettingsManager;
export { UserSettingsManager };