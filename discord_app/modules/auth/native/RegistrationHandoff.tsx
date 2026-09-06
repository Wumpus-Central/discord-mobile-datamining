// === Module 15944: RegistrationHandoff ===

// Module 15944 (RegistrationHandoff)
import size from "module_2" /* 2 */;

let c0 = false;
const result = size.fileFinishedImporting("modules/auth/native/RegistrationHandoff.tsx");

export function setRegistrationHandoff() {
  c0 = true;
}
export function hasRegistrationHandoff() {
  return c0;
}
export function clearRegistrationHandoff() {
  c0 = false;
}