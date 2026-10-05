// === Module 15363: UploadDebugLogsSetting ===

// Module 15363 (UploadDebugLogsSetting)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4812 */;
import DebugUploadManager from "DebugUploadManager" /* 12528 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import module_570 from "module_570" /* 570 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import size from "module_2" /* 2 */;

let c4, c5, closure_2;

let obj = function _handleUploadDebugLogSettingPress() {
  obj = _asyncToGenerator(async () => {
    let intl;
    let intl2;
    let obj3;
    function onUploadDebugLogsRequestStart() {
      let state;
      obj = closure_1_0(closure_1_2[5]);
      obj.batchUpdates(() => state.setState({ isDisabled: true, isUploading: true }));
    }
    function onUploadDebugLogsRequestFinish() {
      let state;
      obj = closure_1_0(closure_1_2[5]);
      obj.batchUpdates(() => state.setState({ isDisabled: true, isUploading: false }));
      const timerId = setTimeout(() => {
        obj = closure_1_0(closure_1_2[5]);
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
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let ANDROID_APP;
            let closure_1 = tmp;
            let closure_0 = tmp;
            onUploadDebugLogsRequestStart();
            const obj8 = PlatformUtils;
            if (obj8.isIOS()) {
              ANDROID_APP = DebugLogCategory.IOS_APP;
            } else {
              ANDROID_APP = DebugLogCategory.ANDROID_APP;
            }
            c3 = 2;
            c4 = 3;
            c5 = 1;
            const obj5 = { value: obj3.uploadDebugLogFiles(ANDROID_APP), done: false };
            obj3 = DebugUploadManager;
            return obj5;
          }
        } else if (1 === c4) {
          c3 = 0;
          onUploadDebugLogsRequestFinish();
          throw closure_2;
        } else {
          if (2 === c4) {
            c3 = 1;
            const obj6 = { key: "USER_SETTINGS_CACHES_CLEARED", IconComponent: closure_129_0(closure_129_2[11]).CircleInformationIcon, content: intl.string(closure_129_0(closure_129_2[12]).t.VzHcSm) };
            const open = closure_129_1(closure_129_2[10]).open;
            const tmp10 = closure_129_1(closure_129_2[10]);
            intl = closure_129_0(closure_129_2[12]).intl;
            open(obj6);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            onUploadDebugLogsRequestFinish();
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const obj7 = { key: "USER_SETTINGS_CACHES_CLEARED", IconComponent: closure_129_0(closure_129_2[11]).CircleInformationIcon, content: intl2.string(closure_129_0(closure_129_2[12]).t.BvyxE7) };
            const open2 = closure_129_1(closure_129_2[10]).open;
            const tmp35 = closure_129_1(closure_129_2[10]);
            intl2 = closure_129_0(closure_129_2[12]).intl;
            open2(obj7);
            c3 = 1;
          }
          c3 = 0;
          onUploadDebugLogsRequestFinish();
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp26) {
        closure_2 = tmp26;
        if (0 === c3) {
          c5 = 3;
          throw tmp26;
        } else if (1 === tmp28) {
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
const DebugLogCategory = Constants.DebugLogCategory;
const jsx = Fragment.jsx;
let closure_7 = module_570.create(() => ({ isDisabled: false, isUploading: false }));
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
const f70398 = () => {

};
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  obj = react;
  const cResult = obj.c(2);
  if (typeof f70398 === "function") {
    let tmp3;
    const isUploading = closure_7().isUploading;
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
  if (typeof f70398 === "function") {
    let tmp2 = null;
    if (closure_7().isUploading) {
      tmp2 = <ActivityIndicator />;
    }
    return tmp2;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
const fn = () => closure_7().isDisabled;
obj = {
  useTitle() {
    const intl = intl3.intl;
    return intl.string(intl3.t.aY1OH2);
  },
  parent: null,
  IconComponent: CircleInformationIcon.CircleInformationIcon,
  onPress: function handleUploadDebugLogSettingPress() {
    return obj(...arguments);
  },
  useTrailing: tmp4,
  useIsDisabled: fn
};
const pressable = SettingBuilders.createPressable(obj);
const result2 = size.fileFinishedImporting("modules/user_settings/defs/native/UploadDebugLogsSetting.tsx");

export default pressable;