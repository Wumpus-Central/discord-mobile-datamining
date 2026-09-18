// === Module 15059: StaffOnlyFindYourFriendsDeletionSetting ===

// Module 15059 (StaffOnlyFindYourFriendsDeletionSetting)
import _mod4345 from "module_4345" /* 4345 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
function setFindYourFriendsDeletionIsLoading(isLoading) {
  _require = isLoading;
  require("ReactBatchUpdates").batchUpdates(() => state.setState({ isLoading }));
}
let closure_8 = async function _onFindYourFriendsDeletionPress() {
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
          closure_0 = tmp8;
          let anyErrorMessage;
          if ((function getFindYourFriendsDeletionIsLoading() {
            return state.getState().isLoading;
          })()) {
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
          const aPIError = new closure_129_0(closure_129_2[8]).APIError(closure_128_1);
          anyErrorMessage = aPIError.getAnyErrorMessage();
          if (null != anyErrorMessage) {
            const obj7 = { key: "FIND_YOUR_FRIENDS_DELETION", content: anyErrorMessage };
            closure_129_1(closure_129_2[9]).open(obj7);
            const obj3 = closure_129_1(closure_129_2[9]);
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
const identity = fn(1243);
let closure_6 = identity.createWithEqualityFn(() => ({ isLoading: false }));
const SettingBuilders = fn(11714);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    return "STAFF ONLY - Find your friends deletion";
  },
  parent: fn(8194).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useIsDisabled: function useIsFindYourFriendsDeletionDisabled() {
    return closure_6((isLoading) => isLoading.isLoading, _mod4345.shallow);
  },
  onPress: function onFindYourFriendsDeletionPress() {
    const self = this;
    const apply = closure_8.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  usePredicate: fn(15060).useStaffOrDeveloperSettingPredicate,
  useTrailing: function useIsFindYourFriendsDeletionTrailing() {
    let tmp = null;
    if (closure_6((isLoading) => isLoading.isLoading, _mod4345.shallow)) {
      tmp = <ActivityIndicator />;
    }
    return tmp;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/StaffOnlyFindYourFriendsDeletionSetting.tsx");

export default pressable;