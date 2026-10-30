// discord_app/modules/auth/native/RegistrationUIStore.tsx
import ReactBatchUpdates from "../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import 00560__ from "../../../../_runtime/metro/00560__.js";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const useRegistrationUIStore = module_560.create(() => ({ errors: {}, registrationOptions: {}, submitting: false, registrationVariant: "applicationId" }));
const result = size.fileFinishedImporting("modules/auth/native/RegistrationUIStore.tsx");

export { useRegistrationUIStore };
export function setRegistrationErrors(errors) {
  _require = errors;
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj = { errors };
    obj.setState(obj);
  });
}
export function clearRegistrationErrorMessage() {
  let errors = {};
  const merged = Object.assign(errors.getState().errors);
  delete tmp2[tmp];
  errors(1260).batchUpdates(() => {
    errors = { errors };
    errors.setState(errors);
  });
}
export function updateRegistrationOptions(arg0) {
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
}
export function resetRegistration() {
  ReactBatchUpdates.batchUpdates(() => {
    state.setState({ errors: {}, registrationOptions: {}, submitting: false });
  });
}
export function setSubmitting(submitting) {
  _require = submitting;
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj = { errors: {}, submitting };
    obj.setState(obj);
  });
}
export function doesRegistrationHaveIdentityType() {
  const registrationOptions = obj.getState().registrationOptions;
  return null != registrationOptions.email || null != registrationOptions.phone;
}