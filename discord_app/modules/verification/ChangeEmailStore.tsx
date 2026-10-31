// === Module 6997: ChangeEmailStore ===

// Module 6997 (ChangeEmailStore)
import ReactBatchUpdates from "ReactBatchUpdates" /* 1259 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_2 = { errors: null, emailToken: null };
const useChangeEmailStore = module_560.create(() => closure_2);
const result = size.fileFinishedImporting("modules/verification/ChangeEmailStore.tsx");

export const ChangeEmailFields = { EMAIL: "email", EMAIL_TOKEN: "email_token", PASSWORD: "password" };
export { useChangeEmailStore };
export function setChangeEmailError(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  require("ReactBatchUpdates").batchUpdates(() => state.setState((errors) => {
    const obj = { errors: null };
    const obj2 = {};
    const merged = Object.assign(errors.errors);
    obj2[closure_1_0] = closure_1_1;
    obj.errors = obj2;
    return obj;
  }));
}
export function useChangeEmailError(arg0) {
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
        const obj = { errors: null };
        const obj2 = {};
        const merged = Object.assign(errors.errors);
        obj2[closure_1_0] = closure_1_1;
        obj.errors = obj2;
        return obj;
      }));
    }
  ];
  return items;
}
export function setEmailToken(emailToken) {
  _require = emailToken;
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj = { emailToken };
    return obj.setState(obj);
  });
}
export function resetChangeEmailStore() {
  ReactBatchUpdates.batchUpdates(() => state.setState(closure_1_2, true));
}