// === Module 5623: ChangeEmailStore ===

// Module 5623 (ChangeEmailStore)
import ReactBatchUpdates from "ReactBatchUpdates" /* 1249 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

let closure_2 = { errors: null, emailToken: null };
const useChangeEmailStore = module_560.create(() => closure_2);
const result = size.fileFinishedImporting("modules/verification/ChangeEmailStore.tsx");

export const ChangeEmailFields = { EMAIL: "email", EMAIL_TOKEN: "email_token", PASSWORD: "password" };
export { useChangeEmailStore };
export const setChangeEmailError = function setChangeEmailError(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  require("ReactBatchUpdates").batchUpdates(() => state.setState((errors) => {
    errors = { errors: null };
    errors = {};
    const merged = Object.assign(errors.errors);
    errors[closure_1_0] = closure_1_1;
    errors.errors = errors;
    return errors;
  }));
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
      ReactBatchUpdates.batchUpdates(() => state.setState((errors) => {
        errors = { errors: null };
        errors = {};
        const merged = Object.assign(errors.errors);
        errors[closure_1_0] = closure_1_1;
        errors.errors = errors;
        return errors;
      }));
    }
  ];
  return items;
};
export const setEmailToken = function setEmailToken(emailToken) {
  _require = emailToken;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj = { emailToken };
    return obj.setState(obj);
  });
};
export const resetChangeEmailStore = function resetChangeEmailStore() {
  ReactBatchUpdates.batchUpdates(() => state.setState(closure_1_2, true));
};