// === Module 15537: UploadIntlDataSetting ===

// Module 15537 (UploadIntlDataSetting)
import PlatformUtils from "PlatformUtils" /* 1115 */;
import AssetJsonUtils from "AssetJsonUtils" /* 1120 */;
import _mod1154 from "module_1154" /* 1154 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_10 = async function _serializeIntlData() {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
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
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp7;
          closure_128_0 = undefined;
          closure_128_1 = undefined;
          constants = undefined;
          closure_128_3 = undefined;
          let Identifier;
          let Build;
          c3 = 1;
          let obj5 = AssetJsonUtils;
          c4 = 2;
          c5 = 1;
          const obj1 = { value: obj5.loadJsonAsset(_mod1154), done: false };
          return obj1;
        }
      } else if (1 === tmp7) {
        c3 = 0;
        const _HermesInternal = HermesInternal;
        c5 = 3;
        const obj2 = { value: "Failed to serialize intl data: " + closure_2, done: true };
        return obj2;
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        closure_128_0 = value;
        const obj4 = { currentLocale: closure_129_0(closure_129_3[9]).intl.currentLocale, systemLocale: closure_129_0(closure_129_3[9]).systemLocale, initialLocale: closure_129_0(closure_129_3[9]).initialLocale, messagesFromIntl: null, messagesFromFile: null, metadata: null };
        obj5 = {};
        const _Object3 = Object;
        const _Object4 = Object;
        const keys = Object.keys(closure_129_0(closure_129_3[9]).t);
        const merged = Object.assign(Object.fromEntries(keys.map((item) => {
          const items = [item, ];
          const intl = closure_1_0(1114).intl;
          items[1] = intl.reserialize(closure_1_0(1114).t[item]);
          return items;
        })));
        obj4.messagesFromIntl = obj5;
        const obj6 = {};
        const merged1 = Object.assign(closure_128_0);
        obj4.messagesFromFile = obj6;
        const obj7 = { timestamp: null, platform: null, clientInfo: null, messagesFromFileKeys: null, messagesFromIntlKeys: null };
        const _Date = Date;
        const date = new Date();
        obj7.timestamp = date.toISOString();
        let str = "Android";
        if (obj15.isIOS()) {
          str = "iOS";
        }
        obj7.platform = str;
        obj = closure_129_2(closure_129_3[6]);
        constants = obj.getConstants();
        let str3 = "N/A";
        if (str2.trim().length > 0) {
          str3 = constants.Manifest;
        }
        closure_128_3 = str3;
        Identifier = constants.Identifier;
        Build = constants.Build;
        const obj8 = { appVersion: constants.Version, buildNumber: Build, manifest: closure_128_3, releaseChannel: constants.ReleaseChannel, identifier: Identifier, otaBuild: constants.OTABuild };
        obj7.clientInfo = obj8;
        const _Object = Object;
        obj7.messagesFromFileKeys = Object.keys(closure_128_0).length;
        const _Object2 = Object;
        obj7.messagesFromIntlKeys = Object.keys(closure_129_0(closure_129_3[9]).t).length;
        obj4.metadata = obj7;
        closure_128_1 = obj4;
        const _JSON = JSON;
        c3 = 0;
        c5 = 3;
        const obj9 = { value: JSON.stringify(closure_128_1, null, 2), done: true };
        return obj9;
      }
    } catch (tmp35) {
      closure_2 = tmp35;
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp35;
      } else {
        c4 = tmp;
      }
    }
  }
};
let closure_11 = async function _handleUploadIntlDataSettingPress() {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp8 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
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
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp4;
          closure_0 = tmp6;
          closure_128_0 = undefined;
          closure_128_1 = undefined;
          closure_128_2 = undefined;
          (function onUploadIntlDataRequestStart() {
            closure_1_0(1249).batchUpdates(() => state.setState({ isDisabled: true, isUploading: true }));
          })();
          if (obj11.isIOS()) {
            let ANDROID_APP = constants.IOS_APP;
          } else {
            ANDROID_APP = constants.ANDROID_APP;
          }
          closure_128_0 = ANDROID_APP;
          c3 = 2;
          (function serializeIntlData() {
            const self = this;
            const apply = closure_1_10.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })();
          c4 = 3;
          c5 = 1;
          obj11 = PlatformUtils;
        }
      } else if (1 === tmp9) {
        c3 = 0;
        (function onUploadIntlDataRequestFinish() {
          closure_1_0(1249).batchUpdates(() => state.setState({ isDisabled: true, isUploading: false }));
          const timerId = setTimeout(() => closure_1_0(dependencyMap[5]).batchUpdates(() => state.setState({ isDisabled: false })), 5000);
        })();
        throw closure_2;
      } else {
        if (2 === tmp9) {
          c3 = 1;
          let obj5 = closure_129_1(closure_129_3[12]);
          const obj1 = { key: "USER_SETTINGS_INTL_DATA_UPLOAD_FAILED", IconComponent: closure_129_0(closure_129_3[13]).CircleInformationIcon, content: "Failed to upload internationalization data." };
          obj5.open(obj1);
          c3 = 0;
          (function onUploadIntlDataRequestFinish() {
            closure_1_0(1249).batchUpdates(() => state.setState({ isDisabled: true, isUploading: false }));
            const timerId = setTimeout(() => closure_1_0(dependencyMap[5]).batchUpdates(() => state.setState({ isDisabled: false })), 5000);
          })();
          c5 = 3;
        } else if (3 === tmp9) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            (function onUploadIntlDataRequestFinish() {
              closure_1_0(1249).batchUpdates(() => state.setState({ isDisabled: true, isUploading: false }));
              const timerId = setTimeout(() => closure_1_0(dependencyMap[5]).batchUpdates(() => state.setState({ isDisabled: false })), 5000);
            })();
            c5 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            closure_128_1 = value;
            closure_128_2 = closure_129_7.DEBUG_LOG(closure_128_0, "intl_data");
            const HTTP = closure_129_0(closure_129_3[11]).HTTP;
            const request = { url: closure_128_2, body: closure_128_1, retries: 3, headers: { "Content-Type": "application/json" }, oldFormErrors: true, rejectWithError: true };
            c4 = 4;
            c5 = 1;
            const obj3 = { value: HTTP.post(request), done: false };
            return obj3;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          obj = closure_129_1(closure_129_3[12]);
          const obj4 = { key: "USER_SETTINGS_INTL_DATA_UPLOADED", IconComponent: closure_129_0(closure_129_3[13]).CircleInformationIcon, content: "Internationalization data uploaded successfully." };
          obj.open(obj4);
          c3 = 1;
        }
        c3 = 0;
        (function onUploadIntlDataRequestFinish() {
          closure_1_0(1249).batchUpdates(() => state.setState({ isDisabled: true, isUploading: false }));
          const timerId = setTimeout(() => closure_1_0(dependencyMap[5]).batchUpdates(() => state.setState({ isDisabled: false })), 5000);
        })();
        c5 = 3;
        obj5 = { value, done: true };
        return obj5;
      }
    } catch (tmp33) {
      closure_2 = tmp33;
      if (tmp5 === c3) {
        c5 = tmp3;
        throw tmp33;
      } else if (tmp2 === tmp35) {
        c4 = tmp2;
      } else {
        c4 = tmp;
      }
    }
  }
};
const ActivityIndicator = fn(17).ActivityIndicator;
const Constants = fn(1074);
({ DebugLogCategory: metroRequire, Endpoints: closure_7 } = Constants);
const jsx = fn(21).jsx;
let module_560 = fn(560);
let closure_9 = module_560.create(() => ({ isDisabled: false, isUploading: false }));
const SettingBuilders = fn(11468);
module_560 = {
  useTitle() {
    return "Upload i18n data";
  },
  parent: null,
  IconComponent: fn(15538).FileUpIcon,
  onPress: function handleUploadIntlDataSettingPress() {
    const self = this;
    const apply = closure_11.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  usePredicate: fn(14842).useStaffOrDeveloperSettingPredicate,
  useTrailing: function useUploadIntlDataTrailing() {
    let tmp = null;
    if (closure_9().isUploading) {
      tmp = <ActivityIndicator />;
    }
    return tmp;
  },
  useIsDisabled: function useIsUploadIntlDataDisabled() {
    return closure_9().isDisabled;
  }
};
module_560 = SettingBuilders.createPressable(module_560);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/UploadIntlDataSetting.tsx");

export default module_560;