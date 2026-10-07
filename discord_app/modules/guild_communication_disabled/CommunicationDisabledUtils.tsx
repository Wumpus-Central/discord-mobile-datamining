// discord_app/modules/guild_communication_disabled/CommunicationDisabledUtils.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/guild_communication_disabled/CommunicationDisabledUtils.tsx");

export const isCommunicationDisabled = function isCommunicationDisabled(communicationDisabledUserMap) {
  let tmp = null != communicationDisabledUserMap;
  if (tmp) {
    const _Date = Date;
    const date = new Date(communicationDisabledUserMap);
    const _Date2 = Date;
    const date1 = new Date();
    tmp = date > date1;
  }
  return tmp;
};
export const isMemberCommunicationDisabled = function isMemberCommunicationDisabled(member) {
  let prop;
  if (member != null) {
    prop = member.communicationDisabledUntil;
  }
  let tmp2 = null != prop;
  if (tmp2) {
    const _Date = Date;
    const date = new Date(prop);
    const _Date2 = Date;
    const date1 = new Date();
    tmp2 = date > date1;
  }
  return tmp2;
};
