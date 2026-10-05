// discord_app/modules/messages/getHeaderTextForInvite.tsx
import intl2 from "../../intl/index.native.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/messages/getHeaderTextForInvite.tsx");

export const getHeaderTextForInvite = function getHeaderTextForInvite(arg0) {
  let isGuest;
  let isHubGuild;
  let isOwnInvite;
  let isStage;
  let isStream;
  let isVoiceChannel;
  let stringResult3;
  ({ isOwnInvite, isGuest, isStage, isStream } = arg0);
  ({ isVoiceChannel, isHubGuild } = arg0);
  const intl = intl2.intl;
  const string = intl.string;
  const t = intl2.t;
  if (isVoiceChannel) {
    let stringResult1;
    if (isOwnInvite) {
      let stringResult;
      if (isStream) {
        stringResult = string(t.N85DCl);
      } else if (isStage) {
        stringResult = string(t.TJQcNv);
      } else if (isGuest) {
        stringResult = string(t.mJyBir);
      } else {
        stringResult = string(t.lxTgP9);
      }
      stringResult1 = stringResult;
    } else if (isStream) {
      stringResult1 = string(t.Mnvc3C);
    } else if (isStage) {
      stringResult1 = string(t.FdPNr5);
    } else if (isGuest) {
      stringResult1 = string(t.f4gmrf);
    } else {
      stringResult1 = string(t.H39rEY);
    }
    stringResult3 = stringResult1;
  } else if (isHubGuild) {
    let stringResult2;
    if (isOwnInvite) {
      stringResult2 = string(t.UxmnHx);
    } else {
      stringResult2 = string(t.sigPEf);
    }
    stringResult3 = stringResult2;
  } else if (isOwnInvite) {
    stringResult3 = string(t["oU/lsl"]);
  } else {
    stringResult3 = string(t.BoQUFf);
  }
  return stringResult3;
};
