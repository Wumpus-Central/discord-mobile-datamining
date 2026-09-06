// === Module 13210: getHeaderTextForInvite ===

// Module 13210 (getHeaderTextForInvite)
import util from "util" /* 1114 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/getHeaderTextForInvite.tsx");

export const getHeaderTextForInvite = function getHeaderTextForInvite(arg0) {
  ({ isOwnInvite, isGuest, isStage, isStream } = arg0);
  ({ isVoiceChannel, isHubGuild } = arg0);
  const intl = util.intl;
  const string = intl.string;
  let N85DCl = util.t;
  if (isVoiceChannel) {
    if (!isOwnInvite) {
      if (isStream) {
        let stringResult = string(N85DCl.Mnvc3C);
      } else if (isStage) {
        stringResult = string(N85DCl.FdPNr5);
      } else if (isGuest) {
        stringResult = string(N85DCl.f4gmrf);
      } else {
        stringResult = string(N85DCl.H39rEY);
      }
    }
    if (isStream) {
      N85DCl = N85DCl.N85DCl;
      let stringResult1 = string(N85DCl);
    } else if (isStage) {
      stringResult1 = string(N85DCl.TJQcNv);
    } else if (isGuest) {
      stringResult1 = string(N85DCl.mJyBir);
    } else {
      stringResult1 = string(N85DCl.lxTgP9);
    }
  } else if (isHubGuild) {
    if (isOwnInvite) {
      let stringResult2 = string(N85DCl.UxmnHx);
    } else {
      stringResult2 = string(N85DCl.sigPEf);
    }
  } else {
    if (isOwnInvite) {
      let stringResult3 = string(N85DCl["oU/lsl"]);
    } else {
      stringResult3 = string(N85DCl.BoQUFf);
    }
    return stringResult3;
  }
};