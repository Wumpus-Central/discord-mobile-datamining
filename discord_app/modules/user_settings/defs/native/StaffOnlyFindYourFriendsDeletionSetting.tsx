// discord_app/modules/user_settings/defs/native/StaffOnlyFindYourFriendsDeletionSetting.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react from "../../../../../_runtime/00576_react.js";
import _slicedToArray from "../../../../../_runtime/metro/04492__slicedToArray.js";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import useIsStaffOrDeveloperSettingPredicate from "../../dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import 01254__ from "../../../../../_runtime/metro/01254__.js";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c4, c5, closure_2;

function setFindYourFriendsDeletionIsLoading(isLoading) {
  let state;
  _require = isLoading;
  obj = require("react-native");
  obj.batchUpdates(() => {
    obj = { isLoading };
    return state.setState(obj);
  });
}
let obj = function _onFindYourFriendsDeletionPress() {
  obj = _asyncToGenerator(async function() {
    let obj5;
    function getFindYourFriendsDeletionIsLoading() {
      return state.getState().isLoading;
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
        let closure_1;
        let content;
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
            closure_1 = tmp;
            content = undefined;
            if (!getFindYourFriendsDeletionIsLoading()) {
              setFindYourFriendsDeletionIsLoading(true);
              c3 = 2;
              c4 = 3;
              c5 = 1;
              const obj6 = { value: obj5.adminDeleteContactSync(), done: false };
              obj5 = require("ContactSyncUtils");
              return obj6;
            }
          }
        } else if (1 === c4) {
          c3 = 0;
          closure_129_7(false);
          throw closure_2;
        } else {
          if (2 === c4) {
            c3 = 1;
            closure_1 = closure_2;
            const self = this;
            const self2 = this;
            const aPIError = new closure_129_0(closure_129_2[10]).APIError(closure_1);
            content = aPIError.getAnyErrorMessage();
            if (null != content) {
              const obj7 = { key: "FIND_YOUR_FRIENDS_DELETION", content };
              const obj3 = closure_129_1(closure_129_2[11]);
              obj3.open(obj7);
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_7(false);
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c3 = 1;
          }
          c3 = 0;
          closure_129_7(false);
        }
        c5 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp35) {
        closure_2 = tmp35;
        if (0 === c3) {
          c5 = 3;
          throw tmp35;
        } else if (1 === tmp37) {
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
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
let closure_6 = module_1254.createWithEqualityFn(() => ({ isLoading: false }));
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function e(isLoading) {
      return isLoading.isLoading;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return closure_6(first, _slicedToArray.shallow);
}) : (() => closure_6((isLoading) => isLoading.isLoading, _slicedToArray.shallow));
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp3;
  obj = react;
  const cResult = obj.c(2);
  const tmp2 = closure_8();
  if (cResult[0] !== tmp2) {
    let tmp4 = null;
    if (tmp2) {
      tmp4 = <ActivityIndicator />;
    }
    cResult[0] = tmp2;
    cResult[1] = tmp4;
    tmp3 = tmp4;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => {
  let tmp = null;
  if (closure_8()) {
    tmp = <ActivityIndicator />;
  }
  return tmp;
});
let fn = () => closure_8();
obj = {
  useTitle() {
    return "STAFF ONLY - Find your friends deletion";
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useIsDisabled: fn,
  onPress: function onFindYourFriendsDeletionPress() {
    return obj(...arguments);
  },
  usePredicate: useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate,
  useTrailing: tmp3
};
const pressable = SettingBuilders.createPressable(obj);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/StaffOnlyFindYourFriendsDeletionSetting.tsx");

export default pressable;