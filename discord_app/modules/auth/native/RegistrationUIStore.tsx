// discord_app/modules/auth/native/RegistrationUIStore.tsx
import ReactBatchUpdates from "../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import 00560__ from "../../../../_runtime/metro/00560__.js";
import size from "../../../../_runtime/metro/00002__.js";

const useRegistrationUIStore = module_560.create(() => ({ errors: {}, registrationOptions: {}, submitting: false, registrationVariant: "accessible" }));
const result = size.fileFinishedImporting("modules/auth/native/RegistrationUIStore.tsx");

export { useRegistrationUIStore };
export const setRegistrationErrors = function setRegistrationErrors(errors) {
  _require = errors;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj = { errors };
    obj.setState(obj);
  });
};
export const clearRegistrationErrorMessage = function clearRegistrationErrorMessage() {
  let errors = {};
  const merged = Object.assign(errors.getState().errors);
  delete tmp2[tmp];
  errors(1249).batchUpdates(() => {
    errors = { errors };
    errors.setState(errors);
  });
};
export const updateRegistrationOptions = function updateRegistrationOptions(arg0) {
  _require = arg0;
  let registrationOptions = obj.getState().registrationOptions;
  obj = require("ReactBatchUpdates");
  obj.batchUpdates(() => {
    registrationOptions = { registrationOptions: null };
    registrationOptions = {};
    const merged = Object.assign(registrationOptions);
    const merged1 = Object.assign(closure_0);
    registrationOptions.registrationOptions = registrationOptions;
    registrationOptions.setState(registrationOptions);
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
    obj = { errors: {}, submitting };
    obj.setState(obj);
  });
};
export const doesRegistrationHaveIdentityType = function doesRegistrationHaveIdentityType() {
  const registrationOptions = obj.getState().registrationOptions;
  return null != registrationOptions.email || null != registrationOptions.phone;
};