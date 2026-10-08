// discord_app/modules/verification/ChangeEmailStore.tsx
import ReactBatchUpdates from "../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import 00570__ from "../../../_runtime/metro/00570__.js";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

let closure_2 = { errors: null, emailToken: null };
const useChangeEmailStore = module_570.create(() => closure_2);
function setChangeEmailError(arg0, arg1) {
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
const result = size.fileFinishedImporting("modules/verification/ChangeEmailStore.tsx");

export const ChangeEmailFields = { EMAIL: "email", EMAIL_TOKEN: "email_token", PASSWORD: "password" };
export { useChangeEmailStore };
export { setChangeEmailError };
export const useChangeEmailError = ReactCompilerGating.isReactCompilerEnabled() ? (function useChangeEmailError(arg0) {
  _require = arg0;
  const obj = require("c");
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
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  const tmp3 = obj(tmp2);
  if (cResult[2] !== arg0) {
    const fn2 = function l(arg0) {
      closure_1 = arg0;
      ReactBatchUpdates.batchUpdates(() => state.setState((errors) => {
        const obj = { errors: null };
        const obj2 = {};
        const merged = Object.assign(errors.errors);
        obj2[closure_1_0] = closure_1_1;
        obj.errors = obj2;
        return obj;
      }));
    };
    cResult[2] = arg0;
    cResult[3] = fn2;
    let tmp4 = fn2;
  } else {
    tmp4 = cResult[3];
  }
  if (cResult[4] === tmp3) {
    if (cResult[5] === tmp4) {
      let tmp5 = cResult[6];
    }
    return tmp5;
  }
  const items = [tmp3, tmp4];
  cResult[4] = tmp3;
  cResult[5] = tmp4;
  cResult[6] = items;
  tmp5 = items;
}) : (function useChangeEmailError(arg0) {
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
});
export const setEmailToken = function setEmailToken(emailToken) {
  _require = emailToken;
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj = { emailToken };
    return obj.setState(obj);
  });
};
export const resetChangeEmailStore = function resetChangeEmailStore() {
  ReactBatchUpdates.batchUpdates(() => state.setState(closure_1_2, true));
};