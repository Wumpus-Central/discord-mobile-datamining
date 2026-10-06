// === Module 15379: UploadIntlDataSetting ===

// Module 15379 (UploadIntlDataSetting)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import AssetJsonUtils from "AssetJsonUtils" /* 1130 */;
import AssetRegistry from "AssetRegistry" /* 1164 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 14666 */;
import FileUpIcon from "FileUpIcon" /* 15380 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import Constants from "Constants" /* 1085 */;
import module_570 from "module_570" /* 570 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11142 */;
import size from "module_2" /* 2 */;

let c4, c5;

let metroImportDefault;
let metroRequire;
let obj = function _serializeIntlData() {
  obj = _asyncToGenerator(async function() {
    let closure_2;
    let date;
    let obj10;
    let obj11;
    let obj12;
    let obj6;
    let obj9;
    let str;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let tmp32;
      let c3;
      try {
        let closure_0;
        let obj8;
        let str3;
        let Identifier;
        let Build;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            closure_0 = undefined;
            obj8 = undefined;
            tmp32 = undefined;
            str3 = undefined;
            Identifier = undefined;
            Build = undefined;
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj4 = { value: obj6.loadJsonAsset(AssetRegistry), done: false };
            obj6 = AssetJsonUtils;
            return obj4;
          }
        } else if (1 === c4) {
          c3 = 0;
          const _HermesInternal = HermesInternal;
          c5 = 3;
          const obj5 = { value: "Failed to serialize intl data: " + tmp32, done: true };
          return obj5;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          closure_0 = value;
          obj8 = { currentLocale: closure_129_0(closure_129_3[11]).intl.currentLocale, systemLocale: closure_129_0(closure_129_3[11]).systemLocale, initialLocale: closure_129_0(closure_129_3[11]).initialLocale, messagesFromIntl: obj9, messagesFromFile: obj10, metadata: obj11 };
          obj9 = {};
          const _Object3 = Object;
          const _Object4 = Object;
          const keys = Object.keys(closure_129_0(closure_129_3[11]).t);
          const merged = Object.assign(fromEntries(keys.map((item) => {
            const items = [item, ];
            const intl = closure_1_0(closure_1_3[11]).intl;
            items[1] = intl.reserialize(closure_1_0(closure_1_3[11]).t[item]);
            return items;
          })));
          obj10 = {};
          const merged1 = Object.assign(closure_0);
          obj11 = { timestamp: date.toISOString(), platform: str, clientInfo: obj12, messagesFromFileKeys: Object.keys(closure_0).length, messagesFromIntlKeys: Object.keys(closure_129_0(closure_129_3[11]).t).length };
          const _Date = Date;
          const self = this;
          const self2 = this;
          date = new Date();
          str = "Android";
          const obj15 = closure_129_0(closure_129_3[12]);
          if (obj15.isIOS()) {
            str = "iOS";
          }
          obj = closure_129_2(closure_129_3[8]);
          tmp32 = obj.getConstants();
          str3 = "N/A";
          const str2 = tmp32.Manifest;
          if (str2.trim().length > 0) {
            str3 = tmp32.Manifest;
          }
          Identifier = tmp32.Identifier;
          Build = tmp32.Build;
          obj12 = { appVersion: tmp32.Version, buildNumber: Build, manifest: str3, releaseChannel: tmp32.ReleaseChannel, identifier: Identifier, otaBuild: tmp32.OTABuild };
          const _Object = Object;
          const _Object2 = Object;
          const _JSON = JSON;
          c3 = 0;
          c5 = 3;
          const obj13 = { value: JSON.stringify(obj8, null, 2), done: true };
          return obj13;
        }
      } catch (tmp32) {
        if (0 === c3) {
          c5 = 3;
          throw tmp32;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _handleUploadIntlDataSettingPress() {
  obj = _asyncToGenerator(async () => {
    function onUploadIntlDataRequestStart() {
      let state;
      obj = open(closure_1_3[5]);
      obj.batchUpdates(() => state.setState({ isDisabled: true, isUploading: true }));
    }
    function serializeIntlData() {
      return closure_1_11(...arguments);
    }
    function onUploadIntlDataRequestFinish() {
      let state;
      obj = open(closure_1_3[5]);
      obj.batchUpdates(() => state.setState({ isDisabled: true, isUploading: false }));
      const timerId = setTimeout(() => {
        obj = closure_1_0(closure_1_3[5]);
        return obj.batchUpdates(() => state.setState({ isDisabled: false }));
      }, 5000);
    }
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      let url;
      try {
        let ANDROID_APP;
        let body;
        let open;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            ANDROID_APP = undefined;
            body = undefined;
            url = undefined;
            onUploadIntlDataRequestStart();
            const obj10 = PlatformUtils;
            if (obj10.isIOS()) {
              ANDROID_APP = constants.IOS_APP;
            } else {
              ANDROID_APP = constants.ANDROID_APP;
            }
            c3 = 2;
            open = serializeIntlData();
            c4 = 3;
            c5 = 1;
            const obj4 = { value: open, done: false };
            return obj4;
          }
        } else if (1 === c4) {
          c3 = 0;
          open = onUploadIntlDataRequestFinish();
          throw url;
        } else {
          if (2 === c4) {
            c3 = 1;
            open = closure_129_1(closure_129_3[14]).open;
            const obj5 = { key: "USER_SETTINGS_INTL_DATA_UPLOAD_FAILED", IconComponent: closure_129_0(closure_129_3[15]).CircleInformationIcon, content: "Failed to upload internationalization data." };
            const tmp19 = closure_129_1(closure_129_3[14]);
            open(obj5);
          } else if (3 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              onUploadIntlDataRequestFinish();
              c5 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              body = value;
              url = closure_129_7.DEBUG_LOG(ANDROID_APP, "intl_data");
              const HTTP = closure_129_0(closure_129_3[13]).HTTP;
              const request = { url, body, retries: 3, headers: { "Content-Type": "application/json" }, oldFormErrors: true, rejectWithError: true };
              c4 = 4;
              c5 = 1;
              const obj7 = { value: HTTP.post(request), done: false };
              return obj7;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            onUploadIntlDataRequestFinish();
            c5 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            open = closure_129_1(closure_129_3[14]).open;
            obj = { key: "USER_SETTINGS_INTL_DATA_UPLOADED", IconComponent: closure_129_0(closure_129_3[15]).CircleInformationIcon, content: "Internationalization data uploaded successfully." };
            const tmp8 = closure_129_1(closure_129_3[14]);
            open(obj);
            c3 = 1;
          }
          c3 = 0;
          onUploadIntlDataRequestFinish();
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp28) {
        url = tmp28;
        if (0 === c3) {
          c5 = 3;
          throw tmp28;
        } else if (1 === tmp30) {
          c4 = 1;
        } else {
          c4 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
const ActivityIndicator = react_native.ActivityIndicator;
({ DebugLogCategory: metroRequire, Endpoints: metroImportDefault } = Constants);
const jsx = Fragment.jsx;
let closure_9 = module_570.create(() => ({ isDisabled: false, isUploading: false }));
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
const f70470 = () => {

};
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
const fn = () => closure_9().isDisabled;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  obj = react;
  const cResult = obj.c(2);
  if (typeof f70470 === "function") {
    let tmp3;
    const isUploading = closure_9().isUploading;
    if (cResult[0] !== isUploading) {
      let tmp4 = null;
      if (isUploading) {
        tmp4 = <ActivityIndicator />;
      }
      cResult[0] = isUploading;
      cResult[1] = tmp4;
      tmp3 = tmp4;
    } else {
      tmp3 = cResult[1];
    }
    return tmp3;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}) : (() => {
  if (typeof f70470 === "function") {
    let tmp2 = null;
    if (closure_9().isUploading) {
      tmp2 = <ActivityIndicator />;
    }
    return tmp2;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
obj = {
  useTitle() {
    return "Upload i18n data";
  },
  parent: null,
  IconComponent: FileUpIcon.FileUpIcon,
  onPress: function handleUploadIntlDataSettingPress() {
    return obj(...arguments);
  },
  usePredicate: useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate,
  useTrailing: tmp5,
  useIsDisabled: fn
};
const pressable = SettingBuilders.createPressable(obj);
const result2 = size.fileFinishedImporting("modules/user_settings/defs/native/UploadIntlDataSetting.tsx");

export default pressable;