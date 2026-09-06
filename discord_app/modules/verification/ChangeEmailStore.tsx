// discord_app/modules/verification/ChangeEmailStore.tsx
import set from "../../../_runtime/00002_set.js";
import batchUpdates from "../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import keys from "../../../_runtime/00560_keys.js";

let closure_2 = { errors: null, emailToken: null };
let obj = keys.create(() => closure_2);
const result = set.fileFinishedImporting("modules/verification/ChangeEmailStore.tsx");

export const ChangeEmailFields = { EMAIL: "email", EMAIL_TOKEN: "email_token", PASSWORD: "password" };
export const useChangeEmailStore = obj;
export const setChangeEmailError = function setChangeEmailError(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  require("../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() =>
    closure_1_3.setState((errors) => {
      obj = { errors: null };
      obj = {};
      const merged = Object.assign(errors.errors);
      obj[closure_0] = closure_1;
      obj[0] = obj;
      return obj;
    }),
  );
};
export const useChangeEmailError = function useChangeEmailError(arg0) {
  closure_0 = arg0;
  const items = [
    obj((errors) => {
      errors = errors.errors;
      let tmp;
      if (errors != null) {
        tmp = errors[closure_0];
      }
      return tmp;
    }),
    (arg0) => {
      closure_1 = arg0;
      callback(closure_1_1[1]).batchUpdates(() =>
        closure_1_3.setState((errors) => {
          obj = { errors: null };
          obj = {};
          const merged = Object.assign(errors.errors);
          obj[closure_0] = closure_1;
          obj[0] = obj;
          return obj;
        }),
      );
    },
  ];
  return items;
};
export const setEmailToken = function setEmailToken(arg0) {
  const _require = arg0;
  require("../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() =>
    closure_1_3.setState({ emailToken: closure_0 }),
  );
};
export const resetChangeEmailStore = function resetChangeEmailStore() {
  batchUpdates.batchUpdates(() => state.setState(closure_2, true));
};
