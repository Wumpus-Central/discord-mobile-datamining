// discord_app/modules/verification/ChangeEmailStore.tsx
import keys from "keys";

let closure_2 = { errors: null, emailToken: null };
let obj = keys.create(() => closure_2);
const result = require("set").fileFinishedImporting("modules/verification/ChangeEmailStore.tsx");

export const ChangeEmailFields = { EMAIL: "email", EMAIL_TOKEN: "email_token", PASSWORD: "password" };
export const useChangeEmailStore = obj;
export const setChangeEmailError = function setChangeEmailError(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  _require(705).batchUpdates(() => outer1_3.setState((errors) => {
    let obj = { errors: null };
    obj = {};
    const merged = Object.assign(errors.errors);
    obj[closure_0] = closure_1;
    obj[0] = obj;
    return obj;
  }));
};
export const useChangeEmailError = function useChangeEmailError(arg0) {
  let closure_0 = arg0;
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
      let closure_1 = arg0;
      callback(outer1_1[1]).batchUpdates(() => outer1_3.setState((errors) => {
        let obj = { errors: null };
        obj = {};
        const merged = Object.assign(errors.errors);
        obj[closure_0] = closure_1;
        obj[0] = obj;
        return obj;
      }));
    }
  ];
  return items;
};
export const setEmailToken = function setEmailToken(arg0) {
  const _require = arg0;
  _require(705).batchUpdates(() => outer1_3.setState({ emailToken: closure_0 }));
};
export const resetChangeEmailStore = function resetChangeEmailStore() {
  require(705) /* batchUpdates */.batchUpdates(() => state.setState(closure_2, true));
};