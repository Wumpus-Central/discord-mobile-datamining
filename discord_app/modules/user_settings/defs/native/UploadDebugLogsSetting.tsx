// === Module 15069: _handleUploadDebugLogSettingPress ===

// Module 15069 (_handleUploadDebugLogSettingPress)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import { ActivityIndicator } from "get ActivityIndicator" /* 17 */;
import { DebugLogCategory } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;
import keys from "keys" /* 644 */;
import createToggle from "createToggle" /* 11006 */;

require = arg1;
function _handleUploadDebugLogSettingPress() {
  const self = this;
  const tmp = callback(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const callback2 = tmp4;
            const callback = tmp4;
            (function onUploadDebugLogsRequestStart() {
              tmp4(tmp31[5]).batchUpdates(() => state.setState({ isDisabled: true, isUploading: true }));
            })();
            let uploadDebugLogFiles = c5;
            if (obj8.isIOS()) {
              let ANDROID_APP = uploadDebugLogFiles.IOS_APP;
            } else {
              ANDROID_APP = uploadDebugLogFiles.ANDROID_APP;
            }
            c3 = 2;
            obj8 = closure_1_0(closure_1_2[6]);
            uploadDebugLogFiles = closure_1_0(closure_1_2[7]).uploadDebugLogFiles;
            uploadDebugLogFiles(ANDROID_APP);
            c4 = 3;
            c5 = 1;
            const tmp29 = closure_1_0(closure_1_2[7]);
          }
        } else if (1 === tmp8) {
          c3 = 0;
          (function onUploadDebugLogsRequestFinish() {
            tmp4(tmp31[5]).batchUpdates(() => state.setState({ isDisabled: true, isUploading: false }));
            const timerId = setTimeout(() => callback(table[5]).batchUpdates(() => state.setState({ isDisabled: false })), 5000);
          })();
          throw dependencyMap;
        } else {
          if (2 === tmp8) {
            c3 = 1;
            obj1 = callback2(4163);
            obj1 = { key: "USER_SETTINGS_CACHES_CLEARED", IconComponent: null, content: null };
            obj1[1] = callback(4401).CircleInformationIcon;
            const intl = callback(1236).intl;
            obj1[2] = intl.string(callback(1236).t.VzHcSm);
            obj1.open(obj1);
            c3 = 0;
            (function onUploadDebugLogsRequestFinish() {
              tmp4(tmp31[5]).batchUpdates(() => state.setState({ isDisabled: true, isUploading: false }));
              const timerId = setTimeout(() => callback(table[5]).batchUpdates(() => state.setState({ isDisabled: false })), 5000);
            })();
            c5 = 3;
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            const obj2 = { key: "USER_SETTINGS_CACHES_CLEARED", IconComponent: null, content: null };
            obj2[1] = callback(4401).CircleInformationIcon;
            const intl2 = callback(1236).intl;
            obj2[2] = intl2.string(callback(1236).t.BvyxE7);
            callback2(4163).open(obj2);
            c3 = 1;
            const obj6 = callback2(4163);
          }
          c3 = 0;
          (function onUploadDebugLogsRequestFinish() {
            tmp4(tmp31[5]).batchUpdates(() => state.setState({ isDisabled: true, isUploading: false }));
            const timerId = setTimeout(() => callback(table[5]).batchUpdates(() => state.setState({ isDisabled: false })), 5000);
          })();
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
      } catch (tmp31) {
        dependencyMap = tmp31;
        if (tmp5 === c3) {
          c5 = tmp3;
          throw tmp31;
        } else if (tmp2 === tmp33) {
          c4 = tmp2;
        } else {
          c4 = tmp;
        }
      }
    }
  });
  closure_8 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_7 = keys.create(() => ({ isDisabled: false, isUploading: false }));
keys = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.aY1OH2);
  },
  parent: null,
  IconComponent: require("CircleInformationIcon").CircleInformationIcon,
  onPress: function handleUploadDebugLogSettingPress() {
    const self = this;
    const apply = _handleUploadDebugLogSettingPress.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  useTrailing: function useUploadDebugLogsTrailing() {
    let tmp = null;
    if (callback2().isUploading) {
      tmp = <ActivityIndicator />;
    }
    return tmp;
  },
  useIsDisabled: function useIsUploadDebugLogsDisabled() {
    return callback2().isDisabled;
  }
};
keys = createToggle.createPressable(keys);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/UploadDebugLogsSetting.tsx");

export default keys;