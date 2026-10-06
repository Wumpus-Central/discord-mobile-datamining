// === Module 6016: ChangeEmailStore ===

// Module 6016 (ChangeEmailStore)
import react_native from "react-native" /* 1259 */;
import module_570 from "module_570" /* 570 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const f91325 = () => state.setState((errors) => {
  let obj2;
  const obj = { errors: obj2 };
  obj2 = {};
  const merged = Object.assign(errors.errors);
  obj2[closure_1_0] = closure_1_1;
  return obj;
});
let closure_2 = { errors: null, emailToken: null };
const useChangeEmailStore = module_570.create(() => closure_2);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let tmp2;
  let tmp4;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(7);
  if (cResult[0] !== arg0) {
    const fn = function n(errors) {
      errors = errors.errors;
      let tmp;
      if (errors != null) {
        tmp = errors[closure_0];
      }
      return tmp;
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  const tmp3 = obj(tmp2);
  if (cResult[2] !== arg0) {
    const fn2 = function l(arg0) {
      let closure_1 = arg0;
      const obj = react_native;
      obj.batchUpdates(f91325);
    };
    cResult[2] = arg0;
    cResult[3] = fn2;
    tmp4 = fn2;
  } else {
    tmp4 = cResult[3];
  }
  if (cResult[4] === tmp3) {
    let tmp5;
    if (cResult[5] === tmp4) {
      tmp5 = cResult[6];
    }
    return tmp5;
  }
  const items = [tmp3, tmp4];
  cResult[4] = tmp3;
  cResult[5] = tmp4;
  cResult[6] = items;
  tmp5 = items;
}) : ((arg0) => {
  let obj;
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
      let state;
      let closure_1 = arg0;
      let obj = react_native;
      obj.batchUpdates(f91325);
    }
  ];
  return items;
});
function setChangeEmailError(arg0, arg1) {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  const obj = require("react-native");
  obj.batchUpdates(f91325);
}
const result = size.fileFinishedImporting("modules/verification/ChangeEmailStore.tsx");

export const ChangeEmailFields = { EMAIL: "email", EMAIL_TOKEN: "email_token", PASSWORD: "password" };
export { useChangeEmailStore };
export { setChangeEmailError };
export const useChangeEmailError = tmp3;
export const setEmailToken = function setEmailToken(emailToken) {
  _require = emailToken;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { emailToken };
    return obj.setState(obj);
  });
};
export const resetChangeEmailStore = function resetChangeEmailStore() {
  let state;
  const obj = react_native;
  obj.batchUpdates(() => state.setState(closure_1_2, true));
};