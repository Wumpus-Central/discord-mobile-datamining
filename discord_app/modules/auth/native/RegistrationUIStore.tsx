// discord_app/modules/auth/native/RegistrationUIStore.tsx
import keys from "keys";

let obj = keys.create(() => ({ errors: {}, registrationOptions: {}, submitting: false, registrationVariant: "call" }));
const result = require("set").fileFinishedImporting("modules/auth/native/RegistrationUIStore.tsx");

export const useRegistrationUIStore = obj;
export const setRegistrationErrors = function setRegistrationErrors(arg0) {
  const _require = arg0;
  _require("../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => {
    outer1_2.setState({ errors: closure_0 });
  });
};
export const clearRegistrationErrorMessage = function clearRegistrationErrorMessage() {
  let obj = {};
  const merged = Object.assign(obj.getState().errors);
  delete tmp2[tmp];
  obj(705).batchUpdates(() => {
    obj = { errors: obj };
    outer1_2.setState(obj);
  });
};
export const updateRegistrationOptions = function updateRegistrationOptions(arg0) {
  const _require = arg0;
  const registrationOptions = obj.getState().registrationOptions;
  obj = _require(registrationOptions[1]);
  obj.batchUpdates(() => {
    let obj = { registrationOptions: null };
    obj = {};
    const merged = Object.assign(registrationOptions);
    const merged1 = Object.assign(closure_0);
    obj[0] = obj;
    outer1_2.setState(obj);
  });
};
export const resetRegistration = function resetRegistration() {
  require("../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx") /* batchUpdates */.batchUpdates(() => {
    state.setState({ errors: {}, registrationOptions: {}, submitting: false });
  });
};
export const setSubmitting = function setSubmitting(arg0) {
  const _require = arg0;
  _require("../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => {
    outer1_2.setState({ errors: {}, submitting: closure_0 });
  });
};
export const doesRegistrationHaveIdentityType = function doesRegistrationHaveIdentityType() {
  const registrationOptions = obj.getState().registrationOptions;
  return null != registrationOptions.email || null != registrationOptions.phone;
};