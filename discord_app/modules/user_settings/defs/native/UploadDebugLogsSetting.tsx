// discord_app/modules/user_settings/defs/native/UploadDebugLogsSetting.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import DebugUploadManager from "../../../debug/DebugUploadManager.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_9 = async function _handleUploadDebugLogSettingPress() {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "IconComponent", done: null };
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
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_1 = tmp4;
          closure_0 = tmp4;
          (function onUploadDebugLogsRequestStart() {
            closure_1_0(1271).batchUpdates(() => state.setState({ isDisabled: true, isUploading: true }));
          })();
          let uploadDebugLogFiles = DebugLogCategory;
          if (obj8.isIOS()) {
            let ANDROID_APP = uploadDebugLogFiles.IOS_APP;
          } else {
            ANDROID_APP = uploadDebugLogFiles.ANDROID_APP;
          }
          c3 = 2;
          obj8 = PlatformUtils;
          uploadDebugLogFiles = DebugUploadManager.uploadDebugLogFiles;
          uploadDebugLogFiles(ANDROID_APP);
          c4 = 3;
          c5 = 1;
        }
      } else if (1 === tmp8) {
        c3 = 0;
        (function onUploadDebugLogsRequestFinish() {
          closure_1_0(1271).batchUpdates(() => state.setState({ isDisabled: true, isUploading: false }));
          const timerId = setTimeout(
            () => closure_1_0(dependencyMap[5]).batchUpdates(() => state.setState({ isDisabled: false })),
            5000,
          );
        })();
        throw dependencyMap;
      } else {
        if (2 === tmp8) {
          c3 = 1;
          const obj5 = {
            key: "USER_SETTINGS_CACHES_CLEARED",
            IconComponent: closure_129_0(closure_129_2[11]).CircleInformationIcon,
            content: null,
          };
          const intl = closure_129_0(closure_129_2[12]).intl;
          obj5.content = intl.string(closure_129_0(closure_129_2[12]).t.VzHcSm);
          closure_129_1(closure_129_2[10]).open(obj5);
          c3 = 0;
          (function onUploadDebugLogsRequestFinish() {
            closure_1_0(1271).batchUpdates(() => state.setState({ isDisabled: true, isUploading: false }));
            const timerId = setTimeout(
              () => closure_1_0(dependencyMap[5]).batchUpdates(() => state.setState({ isDisabled: false })),
              5000,
            );
          })();
          c5 = 3;
          const obj2 = closure_129_1(closure_129_2[10]);
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          const obj7 = {
            key: "USER_SETTINGS_CACHES_CLEARED",
            IconComponent: closure_129_0(closure_129_2[11]).CircleInformationIcon,
            content: null,
          };
          const intl2 = closure_129_0(closure_129_2[12]).intl;
          obj7.content = intl2.string(closure_129_0(closure_129_2[12]).t.BvyxE7);
          closure_129_1(closure_129_2[10]).open(obj7);
          c3 = 1;
          const obj6 = closure_129_1(closure_129_2[10]);
        }
        c3 = 0;
        (function onUploadDebugLogsRequestFinish() {
          closure_1_0(1271).batchUpdates(() => state.setState({ isDisabled: true, isUploading: false }));
          const timerId = setTimeout(
            () => closure_1_0(dependencyMap[5]).batchUpdates(() => state.setState({ isDisabled: false })),
            5000,
          );
        })();
        c5 = 3;
        const obj = { value, done: true };
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
};
const ActivityIndicator = fn(17).ActivityIndicator;
const DebugLogCategory = fn(1085).DebugLogCategory;
const jsx = fn(21).jsx;
const module_570 = fn(570);
let closure_7 = module_570.create(() => ({ isDisabled: false, isUploading: false }));
let ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
function useIsUploadingDebugLogs() {}
ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
function useIsUploadDebugLogsDisabled() {
  return closure_7().isDisabled;
}
const SettingBuilders = fn(11262);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useUploadDebugLogsTrailing() {
      const cResult = c.c(2);
      if (typeof useIsUploadingDebugLogs === "function") {
        const isUploading = closure_7().isUploading;
        if (cResult[0] !== isUploading) {
          let tmp4 = null;
          if (isUploading) {
            tmp4 = <ActivityIndicator />;
          }
          cResult[0] = isUploading;
          cResult[1] = tmp4;
          let tmp3 = tmp4;
        } else {
          tmp3 = cResult[1];
        }
        return tmp3;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  : function useUploadDebugLogsTrailing() {
      if (typeof useIsUploadingDebugLogs === "function") {
        let tmp2 = null;
        if (closure_7().isUploading) {
          tmp2 = <ActivityIndicator />;
        }
        return tmp2;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.aY1OH2);
  },
  parent: null,
  IconComponent: fn(5012).CircleInformationIcon,
  onPress: function handleUploadDebugLogSettingPress() {
    const self = this;
    const apply = closure_9.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  useTrailing: ReactCompilerGating.isReactCompilerEnabled()
    ? function useUploadDebugLogsTrailing() {
        const cResult = c.c(2);
        if (typeof useIsUploadingDebugLogs === "function") {
          const isUploading = closure_7().isUploading;
          if (cResult[0] !== isUploading) {
            let tmp4 = null;
            if (isUploading) {
              tmp4 = <ActivityIndicator />;
            }
            cResult[0] = isUploading;
            cResult[1] = tmp4;
            let tmp3 = tmp4;
          } else {
            tmp3 = cResult[1];
          }
          return tmp3;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    : function useUploadDebugLogsTrailing() {
        if (typeof useIsUploadingDebugLogs === "function") {
          let tmp2 = null;
          if (closure_7().isUploading) {
            tmp2 = <ActivityIndicator />;
          }
          return tmp2;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      },
  useIsDisabled: useIsUploadDebugLogsDisabled,
});
const size = fn(2);
const result2 = size.fileFinishedImporting("modules/user_settings/defs/native/UploadDebugLogsSetting.tsx");

export default pressable;
