// discord_app/modules/user_settings/defs/native/StaffOnlyFindYourFriendsDeletionSetting.tsx
import c from "../../../../../_runtime/00576_c.js";
import _mod4733 from "../../../../../_runtime/metro/04733__.js";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
function setFindYourFriendsDeletionIsLoading(isLoading) {
  _require = isLoading;
  require("ReactBatchUpdates").batchUpdates(() => state.setState({ isLoading }));
}
let closure_9 = async function _onFindYourFriendsDeletionPress() {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "+51" };
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
          closure_0 = tmp8;
          let anyErrorMessage;
          if (
            (function getFindYourFriendsDeletionIsLoading() {
              return state.getState().isLoading;
            })()
          ) {
            c5 = 3;
          } else {
            setFindYourFriendsDeletionIsLoading(true);
            c3 = 2;
            c4 = 3;
            c5 = 1;
            const obj6 = { value: require("ContactSyncUtils").adminDeleteContactSync(), done: false };
            return obj6;
          }
        }
      } else if (1 !== tmp8) {
        if (2 === tmp8) {
          c3 = 1;
          closure_128_1 = closure_2;
          const aPIError = new closure_129_0(closure_129_2[10]).APIError(closure_128_1);
          anyErrorMessage = aPIError.getAnyErrorMessage();
          if (null != anyErrorMessage) {
            const obj7 = { text: anyErrorMessage };
            closure_129_1(closure_129_2[11]).open("FIND_YOUR_FRIENDS_DELETION", obj7);
            const obj3 = closure_129_1(closure_129_2[11]);
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_129_7(false);
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c3 = 1;
        }
        c3 = 0;
        closure_129_7(false);
      }
      c3 = 0;
      closure_129_7(false);
      throw closure_2;
    } catch (tmp41) {
      closure_2 = tmp41;
      if (tmp5 === c3) {
        c5 = tmp3;
        throw tmp41;
      } else if (tmp2 === tmp43) {
        c4 = tmp2;
      } else {
        c4 = tmp;
      }
    }
  }
};
const ActivityIndicator = fn(17).ActivityIndicator;
const jsx = fn(21).jsx;
const identity = fn(1267);
let closure_6 = identity.createWithEqualityFn(() => ({ isLoading: false }));
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useFindYourFriendsDeletionIsLoading() {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function e(isLoading) {
          return isLoading.isLoading;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      return closure_6(first, _mod4733.shallow);
    }
  : function useFindYourFriendsDeletionIsLoading() {
      return closure_6((isLoading) => isLoading.isLoading, _mod4733.shallow);
    };
ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
function useIsFindYourFriendsDeletionDisabled() {
  return closure_8();
}
const SettingBuilders = fn(10663);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsFindYourFriendsDeletionTrailing() {
      const cResult = c.c(2);
      const tmp2 = closure_8();
      if (cResult[0] !== tmp2) {
        let tmp4 = null;
        if (tmp2) {
          tmp4 = <ActivityIndicator />;
        }
        cResult[0] = tmp2;
        cResult[1] = tmp4;
        let tmp3 = tmp4;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : function useIsFindYourFriendsDeletionTrailing() {
      let tmp = null;
      if (closure_8()) {
        tmp = <ActivityIndicator />;
      }
      return tmp;
    };
const pressable = SettingBuilders.createPressable({
  useTitle() {
    return "STAFF ONLY - Find your friends deletion";
  },
  parent: fn(7992).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useIsDisabled: useIsFindYourFriendsDeletionDisabled,
  onPress: function onFindYourFriendsDeletionPress() {
    const self = this;
    const apply = closure_9.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  usePredicate: fn(15098).useStaffOrDeveloperSettingPredicate,
  useTrailing: ReactCompilerGating.isReactCompilerEnabled()
    ? function useIsFindYourFriendsDeletionTrailing() {
        const cResult = c.c(2);
        const tmp2 = closure_8();
        if (cResult[0] !== tmp2) {
          let tmp4 = null;
          if (tmp2) {
            tmp4 = <ActivityIndicator />;
          }
          cResult[0] = tmp2;
          cResult[1] = tmp4;
          let tmp3 = tmp4;
        } else {
          tmp3 = cResult[1];
        }
        return tmp3;
      }
    : function useIsFindYourFriendsDeletionTrailing() {
        let tmp = null;
        if (closure_8()) {
          tmp = <ActivityIndicator />;
        }
        return tmp;
      },
});
const size = fn(2);
const result1 = size.fileFinishedImporting(
  "modules/user_settings/defs/native/StaffOnlyFindYourFriendsDeletionSetting.tsx",
);

export default pressable;
