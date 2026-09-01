// discord_app/modules/auth/native/RegistrationHandoff.tsx
import set from "../../../../_runtime/00002_set.js";

let c0 = false;
const result = set.fileFinishedImporting("modules/auth/native/RegistrationHandoff.tsx");

export function setRegistrationHandoff() {
  c0 = true;
}
export function hasRegistrationHandoff() {
  return c0;
}
export function clearRegistrationHandoff() {
  c0 = false;
}
