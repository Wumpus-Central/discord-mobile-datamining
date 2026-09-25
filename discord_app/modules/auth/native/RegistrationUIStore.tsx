// === Module 15543: RegistrationUIStore ===

// Module 15543 (RegistrationUIStore)
import ReactBatchUpdates from "ReactBatchUpdates" /* 1248 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const useRegistrationUIStore = module_560.create(() => ({ errors: {}, registrationOptions: {}, submitting: false, registrationVariant: "channel" }));
const result = size.fileFinishedImporting("modules/auth/native/RegistrationUIStore.tsx");

export { useRegistrationUIStore };
export const setRegistrationErrors = function setRegistrationErrors(errors) {
  _require = errors;
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj = { errors };
    obj.setState(obj);
  });
};
export const clearRegistrationErrorMessage = function clearRegistrationErrorMessage() {
  let errors = {};
  const merged = Object.assign(errors.getState().errors);
  delete tmp2[tmp];
  errors(1248).batchUpdates(() => {
    errors = { errors };
    errors.setState(errors);
  });
};
export const updateRegistrationOptions = function updateRegistrationOptions(arg0) {
  _require = arg0;
  const registrationOptions = obj.getState().registrationOptions;
  obj = require("ReactBatchUpdates");
  obj.batchUpdates(() => {
    const obj = { registrationOptions: null };
    const merged = Object.assign(registrationOptions);
    const merged1 = Object.assign(closure_0);
    obj.registrationOptions = {};
    obj.setState(obj);
  });
};
export const resetRegistration = function resetRegistration() {
  ReactBatchUpdates.batchUpdates(() => {
    state.setState({ errors: {}, registrationOptions: {}, submitting: false });
  });
};
export const setSubmitting = function setSubmitting(submitting) {
  _require = submitting;
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj = { errors: {}, submitting };
    obj.setState(obj);
  });
};
export const doesRegistrationHaveIdentityType = function doesRegistrationHaveIdentityType() {
  const registrationOptions = obj.getState().registrationOptions;
  return null != registrationOptions.email || null != registrationOptions.phone;
};