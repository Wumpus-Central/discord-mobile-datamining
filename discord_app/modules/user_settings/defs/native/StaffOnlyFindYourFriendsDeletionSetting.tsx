import batchUpdates from "batchUpdates";
import { ActivityIndicator } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import identity from "identity";
import createToggle from "createToggle";

const require = arg1;
function setFindYourFriendsDeletionIsLoading(arg0) {
  const _require = arg0;
  _require(705).batchUpdates(() => outer1_6.setState({ isLoading: closure_0 }));
}
function _onFindYourFriendsDeletionPress() {
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
            let callback2 = tmp4;
            let callback = tmp8;
            callback = undefined;
            if ((function getFindYourFriendsDeletionIsLoading() {
              return state.getState().isLoading;
            })()) {
              c5 = 3;
            } else {
              outer1_7(true);
              let c3 = 2;
              c4 = 3;
              c5 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = outer1_0(outer1_2[7]).adminDeleteContactSync();
              return obj1;
            }
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c3 = 1;
            callback2 = dependencyMap;
            const aPIError = new callback(585).APIError(callback2);
            callback = aPIError.getAnyErrorMessage();
            if (null != callback) {
              let obj2 = callback2(3894);
              obj2 = { key: "FIND_YOUR_FRIENDS_DELETION", content: null };
              obj2[1] = callback;
              obj2.open(obj2);
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            callback3(false);
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c3 = 1;
          }
          c3 = 0;
          callback3(false);
        }
        c3 = 0;
        callback3(false);
        throw dependencyMap;
      } catch (tmp41) {
        dependencyMap = tmp41;
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
  });
  const _onFindYourFriendsDeletionPress = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_6 = identity.createWithEqualityFn(() => ({ isLoading: false }));
identity = {
  useTitle() {
    return "STAFF ONLY - Find your friends deletion";
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useIsDisabled: function useIsFindYourFriendsDeletionDisabled() {
    return callback2((isLoading) => isLoading.isLoading, require(3806) /* isIterable */.shallow);
  },
  onPress: function onFindYourFriendsDeletionPress() {
    const self = this;
    const apply = _onFindYourFriendsDeletionPress.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  usePredicate: require("useStaffOrDeveloperSettingPredicate").useStaffOrDeveloperSettingPredicate,
  useTrailing: function useIsFindYourFriendsDeletionTrailing() {
    let tmp = null;
    if (callback2((isLoading) => isLoading.isLoading, require(3806) /* isIterable */.shallow)) {
      tmp = <ActivityIndicator />;
    }
    return tmp;
  }
};
identity = createToggle.createPressable(identity);
const result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/StaffOnlyFindYourFriendsDeletionSetting.tsx");

export default identity;