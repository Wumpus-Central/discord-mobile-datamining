import batchUpdates from "batchUpdates";
import { ActivityIndicator } from "set";
import ME from "ME";
import { jsx } from "jsxProd";
import keys from "keys";
import createToggle from "createToggle";

let closure_6;
let error;
const require = arg1;
function _serializeIntlData() {
  const self = this;
  const tmp = callback(function*() {
    if (Build === 2) {
      Build = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
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
        Build = 2;
        if (0 === Identifier) {
          if (arg0 === 1) {
            Build = 3;
            throw arg1;
          } else if (arg0 === 2) {
            Build = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let obj4 = tmp3;
            let callback = tmp7;
            callback = undefined;
            obj4 = undefined;
            let lib;
            let dependencyMap;
            Identifier = undefined;
            Build = undefined;
            dependencyMap = 1;
            let obj5 = outer1_0(1239);
            Identifier = 2;
            Build = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = obj5.loadJsonAsset(outer1_0(1273));
            return obj1;
          }
        } else if (1 === tmp7) {
          dependencyMap = 0;
          const _HermesInternal = HermesInternal;
          Build = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = "Failed to serialize intl data: " + lib;
          return obj2;
        } else if (arg0 === 1) {
          Build = 3;
          throw arg1;
        } else if (arg0 === 2) {
          dependencyMap = 0;
          Build = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } else {
          callback = arg1;
          obj4 = { currentLocale: null, systemLocale: null, initialLocale: null, messagesFromIntl: null, messagesFromFile: null, metadata: null };
          obj4[0] = callback(1236).intl.currentLocale;
          obj4[1] = callback(1236).systemLocale;
          obj4[2] = callback(1236).initialLocale;
          obj5 = {};
          const _Object3 = Object;
          const _Object4 = Object;
          const keys = Object.keys(callback(1236).t);
          const merged = Object.assign(Object.fromEntries(keys.map((arg0) => {
            const items = [arg0, ];
            const intl = callback(1236).intl;
            items[1] = intl.reserialize(callback(1236).t[arg0]);
            return items;
          })));
          obj4[3] = obj5;
          const obj6 = {};
          const merged1 = Object.assign(callback);
          obj4[4] = obj6;
          const obj7 = { timestamp: null, platform: null, clientInfo: null, messagesFromFileKeys: null, messagesFromIntlKeys: null };
          const _Date = Date;
          const date = new Date();
          obj7[0] = date.toISOString();
          let str = "Android";
          if (obj15.isIOS()) {
            str = "iOS";
          }
          obj7[1] = str;
          obj = lib(1578);
          lib = obj.getConstants();
          let str3 = "N/A";
          if (str2.trim().length > 0) {
            str3 = lib.Manifest;
          }
          dependencyMap = str3;
          Identifier = lib.Identifier;
          Build = lib.Build;
          const obj8 = { appVersion: null, buildNumber: null, manifest: null, releaseChannel: null, identifier: null, otaBuild: null };
          obj8[0] = lib.Version;
          obj8[1] = Build;
          obj8[2] = dependencyMap;
          obj8[3] = lib.ReleaseChannel;
          obj8[4] = Identifier;
          obj8[5] = lib.OTABuild;
          obj7[2] = obj8;
          const _Object = Object;
          obj7[3] = Object.keys(callback).length;
          const _Object2 = Object;
          obj7[4] = Object.keys(callback(1236).t).length;
          obj4[5] = obj7;
          const _JSON = JSON;
          dependencyMap = 0;
          Build = 3;
          const obj9 = { value: null, done: true };
          obj9[0] = JSON.stringify(obj4, null, 2);
          return obj9;
        }
      } catch (tmp35) {
        lib = tmp35;
        if (tmp4 === dependencyMap) {
          Build = tmp2;
          throw tmp35;
        } else {
          Identifier = tmp;
        }
      }
    }
  });
  const _serializeIntlData = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleUploadIntlDataSettingPress() {
  let self = this;
  const tmp = callback(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp8 === 3) {
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
            let callback = tmp4;
            let ANDROID_APP = tmp6;
            ANDROID_APP = undefined;
            callback = undefined;
            let closure_2;
            (function onUploadIntlDataRequestStart() {
              ANDROID_APP(705).batchUpdates(() => state.setState({ isDisabled: true, isUploading: true }));
            })();
            if (obj11.isIOS()) {
              ANDROID_APP = tmp52.IOS_APP;
            } else {
              ANDROID_APP = tmp52.ANDROID_APP;
            }
            let dependencyMap = 2;
            (function serializeIntlData() {
              const self = this;
              const apply = closure_10.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })();
            c4 = 3;
            c5 = 1;
            obj11 = outer1_0(500);
          }
        } else if (1 === tmp9) {
          dependencyMap = 0;
          (function onUploadIntlDataRequestFinish() {
            ANDROID_APP(705).batchUpdates(() => state.setState({ isDisabled: true, isUploading: false }));
            const timerId = setTimeout(() => callback(table[5]).batchUpdates(() => state.setState({ isDisabled: false })), 5000);
          })();
          throw closure_2;
        } else {
          if (2 === tmp9) {
            dependencyMap = 1;
            let obj5 = callback(3986);
            const obj1 = { key: "USER_SETTINGS_INTL_DATA_UPLOAD_FAILED", IconComponent: null, content: "Failed to upload internationalization data." };
            obj1[1] = ANDROID_APP(4241).CircleInformationIcon;
            obj5.open(obj1);
            dependencyMap = 0;
            (function onUploadIntlDataRequestFinish() {
              ANDROID_APP(705).batchUpdates(() => state.setState({ isDisabled: true, isUploading: false }));
              const timerId = setTimeout(() => callback(table[5]).batchUpdates(() => state.setState({ isDisabled: false })), 5000);
            })();
            c5 = 3;
          } else if (3 === tmp9) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 0;
              (function onUploadIntlDataRequestFinish() {
                ANDROID_APP(705).batchUpdates(() => state.setState({ isDisabled: true, isUploading: false }));
                const timerId = setTimeout(() => callback(table[5]).batchUpdates(() => state.setState({ isDisabled: false })), 5000);
              })();
              c5 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              callback = arg1;
              closure_2 = outer1_7.DEBUG_LOG(ANDROID_APP, "intl_data");
              const HTTP = outer1_0(530).HTTP;
              const obj3 = { url: null, body: null, retries: 3, headers: null, oldFormErrors: true, rejectWithError: true };
              obj3[0] = closure_2;
              obj3[1] = callback;
              obj3[3] = { "Content-Type": "application/json" };
              c4 = 4;
              c5 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.post(obj3);
              return obj4;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            obj = callback(3986);
            obj5 = { key: "USER_SETTINGS_INTL_DATA_UPLOADED", IconComponent: null, content: "Internationalization data uploaded successfully." };
            obj5[1] = ANDROID_APP(4241).CircleInformationIcon;
            obj.open(obj5);
            dependencyMap = 1;
          }
          dependencyMap = 0;
          (function onUploadIntlDataRequestFinish() {
            ANDROID_APP(705).batchUpdates(() => state.setState({ isDisabled: true, isUploading: false }));
            const timerId = setTimeout(() => callback(table[5]).batchUpdates(() => state.setState({ isDisabled: false })), 5000);
          })();
          c5 = 3;
          const obj6 = { value: null, done: true };
          obj6[0] = arg1;
          return obj6;
        }
      } catch (tmp33) {
        closure_2 = tmp33;
        if (tmp5 === dependencyMap) {
          c5 = tmp3;
          throw tmp33;
        } else if (tmp2 === tmp35) {
          c4 = tmp2;
        } else {
          c4 = tmp;
        }
      }
    }
  });
  const _handleUploadIntlDataSettingPress = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ DebugLogCategory: closure_6, Endpoints: error } = ME);
let closure_9 = keys.create(() => ({ isDisabled: false, isUploading: false }));
keys = {
  useTitle() {
    return "Upload i18n data";
  },
  parent: null,
  IconComponent: require("FileUpIcon").FileUpIcon,
  onPress: function handleUploadIntlDataSettingPress() {
    const self = this;
    const apply = _handleUploadIntlDataSettingPress.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  usePredicate: require("useStaffOrDeveloperSettingPredicate").useStaffOrDeveloperSettingPredicate,
  useTrailing: function useUploadIntlDataTrailing() {
    let tmp = null;
    if (callback2().isUploading) {
      tmp = <ActivityIndicator />;
    }
    return tmp;
  },
  useIsDisabled: function useIsUploadIntlDataDisabled() {
    return callback2().isDisabled;
  }
};
keys = createToggle.createPressable(keys);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/UploadIntlDataSetting.tsx");

export default keys;