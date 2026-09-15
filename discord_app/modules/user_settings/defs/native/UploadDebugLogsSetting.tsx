// discord_app/modules/user_settings/defs/native/UploadDebugLogsSetting.tsx
import util from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import DebugUploadManager from "../../../debug/DebugUploadManager.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_8 = async function _handleUploadDebugLogSettingPress() {
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
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_1 = tmp4;
          closure_0 = tmp4;
          (function onUploadDebugLogsRequestStart() {
            closure_1_0(1248).batchUpdates(() => state.setState({ isDisabled: true, isUploading: true }));
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
          closure_1_0(1248).batchUpdates(() => state.setState({ isDisabled: true, isUploading: false }));
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
            IconComponent: closure_129_0(closure_129_2[9]).CircleInformationIcon,
            content: null,
          };
          const intl = closure_129_0(closure_129_2[10]).intl;
          obj5.content = intl.string(closure_129_0(closure_129_2[10]).t.VzHcSm);
          closure_129_1(closure_129_2[8]).open(obj5);
          c3 = 0;
          (function onUploadDebugLogsRequestFinish() {
            closure_1_0(1248).batchUpdates(() => state.setState({ isDisabled: true, isUploading: false }));
            const timerId = setTimeout(
              () => closure_1_0(dependencyMap[5]).batchUpdates(() => state.setState({ isDisabled: false })),
              5000,
            );
          })();
          c5 = 3;
          const obj2 = closure_129_1(closure_129_2[8]);
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          const obj7 = {
            key: "USER_SETTINGS_CACHES_CLEARED",
            IconComponent: closure_129_0(closure_129_2[9]).CircleInformationIcon,
            content: null,
          };
          const intl2 = closure_129_0(closure_129_2[10]).intl;
          obj7.content = intl2.string(closure_129_0(closure_129_2[10]).t.BvyxE7);
          closure_129_1(closure_129_2[8]).open(obj7);
          c3 = 1;
          const obj6 = closure_129_1(closure_129_2[8]);
        }
        c3 = 0;
        (function onUploadDebugLogsRequestFinish() {
          closure_1_0(1248).batchUpdates(() => state.setState({ isDisabled: true, isUploading: false }));
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
const DebugLogCategory = fn(1074).DebugLogCategory;
const jsx = fn(21).jsx;
const module_560 = fn(560);
let closure_7 = module_560.create(() => ({ isDisabled: false, isUploading: false }));
const SettingBuilders = fn(11606);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.aY1OH2);
  },
  parent: null,
  IconComponent: fn(4594).CircleInformationIcon,
  onPress: function handleUploadDebugLogSettingPress() {
    const self = this;
    const apply = closure_8.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  useTrailing: function useUploadDebugLogsTrailing() {
    let tmp = null;
    if (closure_7().isUploading) {
      tmp = <ActivityIndicator />;
    }
    return tmp;
  },
  useIsDisabled: function useIsUploadDebugLogsDisabled() {
    return closure_7().isDisabled;
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/UploadDebugLogsSetting.tsx");

export default pressable;
