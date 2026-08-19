// === Module 8593: makePasswordResetLink ===

// Module 8593 (makePasswordResetLink)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;

const Routes = ME.Routes;
const result = obj132.fileFinishedImporting("modules/auth/makePasswordResetLink.tsx");

export default function makePasswordResetLink(arg0) {
  return "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT + Routes.RESET + "#token=" + arg0;
};