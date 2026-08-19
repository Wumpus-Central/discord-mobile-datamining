// === Module 7506: getInviteURL ===

// Module 7506 (getInviteURL)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/instant_invite/getInviteURL.tsx");

export default function getInviteURL() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "";
  }
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let str2 = "";
  const combined = "/" + str;
  if (flag) {
    const _location = location;
    const _HermesInternal = HermesInternal;
    str2 = "" + location.protocol + "//";
  }
  return "" + str2 + window.GLOBAL_ENV.INVITE_HOST + combined;
};