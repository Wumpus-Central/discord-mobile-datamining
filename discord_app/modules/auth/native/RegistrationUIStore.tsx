// === Module 15906: RegistrationUIStore ===

// Module 15906 (RegistrationUIStore)
import react_native from "react-native" /* 1259 */;
import module_570 from "module_570" /* 570 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const useRegistrationUIStore = module_570.create(() => ({ errors: {}, registrationOptions: {}, submitting: false, registrationVariant: "applicationId" }));
const result = size.fileFinishedImporting("modules/auth/native/RegistrationUIStore.tsx");

export { useRegistrationUIStore };
export const setRegistrationErrors = function setRegistrationErrors(errors) {
  _require = errors;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { errors };
    obj.setState(obj);
  });
};
export const clearRegistrationErrorMessage = function clearRegistrationErrorMessage() {
  let errors = {};
  const merged = Object.assign(errors.getState().errors);
  delete errors["message"];
  const obj2 = errors(1259);
  obj2.batchUpdates(() => {
    errors = { errors };
    errors.setState(errors);
  });
};
export const updateRegistrationOptions = function updateRegistrationOptions(arg0) {
  let closure_0;
  let obj;
  _require = arg0;
  const registrationOptions = obj.getState().registrationOptions;
  obj = require("react-native");
  obj.batchUpdates(() => {
    let obj2;
    const obj = { registrationOptions: obj2 };
    const setState = obj.setState;
    obj2 = {};
    const merged = Object.assign(registrationOptions);
    const merged1 = Object.assign(closure_0);
    setState(obj);
  });
};
export const resetRegistration = function resetRegistration() {
  let state;
  const obj = react_native;
  obj.batchUpdates(() => {
    state.setState({ errors: {}, registrationOptions: {}, submitting: false });
  });
};
export const setSubmitting = function setSubmitting(submitting) {
  _require = submitting;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { errors: {}, submitting };
    obj.setState(obj);
  });
};
export const doesRegistrationHaveIdentityType = function doesRegistrationHaveIdentityType() {
  const registrationOptions = obj.getState().registrationOptions;
  return null != registrationOptions.email || null != registrationOptions.phone;
};