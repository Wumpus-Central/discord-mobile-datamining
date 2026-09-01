// === Module 15535: setRegistrationHandoff ===

// Module 15535 (setRegistrationHandoff)
import set from "set" /* 2 */;

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