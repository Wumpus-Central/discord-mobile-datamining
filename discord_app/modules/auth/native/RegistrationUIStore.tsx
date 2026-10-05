// discord_app/modules/auth/native/RegistrationUIStore.tsx
import react_native from "../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import 00570__ from "../../../../_runtime/metro/00570__.js";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const useRegistrationUIStore = module_570.create(() => ({ errors: {}, registrationOptions: {}, submitting: false, registrationVariant: "code" }));
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