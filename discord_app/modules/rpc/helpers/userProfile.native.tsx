// discord_app/modules/rpc/helpers/userProfile.native.tsx
import showUserProfileActionSheet from "../../user_profile/native/showUserProfileActionSheet.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import ActionSheetStore from "../../action_sheet/native/ActionSheetStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/userProfile.native.tsx");

export function isAnyUserProfileOpen() {
  const stack = ActionSheetStore.getStack();
  return stack.some((key) => key.key.startsWith(showUserProfileActionSheet.USER_PROFILE_ACTION_SHEET_KEY_PREFIX));
}
export function openUserProfile(arg0) {
  ({ userId: require, onOpen: importDefault, onClose: dependencyMap } = arg0);
  closure_3 = async function _open() {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c3 = 2;
        if (0 === v2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            dependencyMap = 1;
            if (null == authStore.getUser(require)) {
              v2 = 3;
              c3 = 1;
              const obj4 = { value: tmp3(8744).getUser(require), done: false };
              return obj4;
            }
          }
        } else {
          if (1 === tmp7) {
            dependencyMap = 0;
            closure_128_2();
            c3 = 3;
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_128_1();
              dependencyMap = 0;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 0;
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          }
          dependencyMap = 0;
          c3 = 3;
          const obj5 = { value, done: true };
          return obj5;
        }
        if (null == authStore.getUser(closure_128_0)) {
          closure_128_2();
          dependencyMap = 0;
          c3 = 3;
          const obj7 = { value: undefined, done: true };
          return obj7;
        } else {
          const obj8 = { userId: closure_128_0, onClose: closure_128_2 };
          v2 = 2;
          c3 = 1;
          const obj9 = { value: v2(8742)(obj8), done: false };
          return obj9;
        }
      } catch (tmp28) {
        if (tmp4 === dependencyMap) {
          c3 = tmp2;
          throw tmp28;
        } else {
          v2 = tmp;
        }
      }
    }
  };
  (function open() {
    const self = this;
    const apply = closure_3.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })();
  return true;
}
