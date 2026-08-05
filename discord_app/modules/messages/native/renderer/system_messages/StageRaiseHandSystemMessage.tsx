// discord_app/modules/messages/native/renderer/system_messages/StageRaiseHandSystemMessage.tsx
import getActiveStageChannelIds from "getActiveStageChannelIds";
import ensureGuildLoaded from "ensureGuildLoaded";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import ME from "ME";
import { getSystemLocale } from "../../../../../intl/index.native.tsx";
import { DISCORD_EPOCH } from "../../../../../utils/SnowflakeUtils.tsx";
import { formatUsernameOnClick } from "formatUsernameOnClick.tsx";
import { getMessageAuthorWithProcessedColor } from "useAuthorWithProcessedColor.tsx";

let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ HelpdeskArticles: closure_6, MessageFlags: error, MessageTypes: metroImportAll, Permissions: c9 } = ME);
const result = require("getUncachedChannelPermissions").fileFinishedImporting("modules/messages/native/renderer/system_messages/StageRaiseHandSystemMessage.tsx");

export const createStageRaiseHandSystemMessage = function createStageRaiseHandSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = getMessageAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  let canResult = getUncachedChannelPermissions.can(constants4.MUTE_MEMBERS, channel.getChannel(message.channel_id));
  participant = participant.getParticipant(message.channel_id, message.author.id);
  let obj1 = DISCORD_EPOCH;
  let num;
  const date = new Date(obj1.extractTimestamp(message.id));
  if (participant != null) {
    const voiceState = participant.voiceState;
    if (voiceState != null) {
      num = voiceState.requestToSpeakTimestamp;
    }
  }
  if (num == null) {
    num = 0;
  }
  const toISOStringResult = new Date(obj1.extractTimestamp(message.id)).toISOString();
  const date1 = new Date(num);
  if (canResult) {
    let rtsState;
    if (participant != null) {
      rtsState = participant.rtsState;
    }
    canResult = rtsState === tmp(4439).RequestToSpeakStates.REQUESTED_TO_SPEAK;
  }
  if (canResult) {
    canResult = toISOStringResult === toISOStringResult1;
  }
  obj = { content: null, showInviteToSpeakButton: null, buttonLabel: null, ephemeralIndication: null };
  const intl = tmp(1236).intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: null };
  obj[1] = formatUsernameOnClick({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle });
  obj[0] = intl.formatToParts(getSystemLocale.t.M87x7Y, obj);
  obj[1] = canResult;
  const intl2 = tmp(1236).intl;
  obj[2] = intl2.string(getSystemLocale.t.f0T7hI);
  let tmp10;
  if (message.hasFlag(constants2.EPHEMERAL)) {
    if (message.type === constants3.STAGE_RAISE_HAND) {
      obj1 = { content: null, helpArticleLink: null, helpButtonAccessibilityLabel: null };
      const intl3 = tmp(1236).intl;
      const obj2 = { handleDelete: null };
      const obj3 = { action: "bindDismissMessage", message: null };
      obj3[1] = message;
      obj2[0] = obj3;
      obj1[0] = intl3.formatToParts(tmp(1236).t["qDAX++"], obj2);
      obj1[1] = tmp6(1945).getArticleURL(constants.EPHEMERAL_MESSAGES);
      const intl4 = tmp(1236).intl;
      obj1[2] = intl4.string(tmp(1236).t.htHOrp);
      tmp10 = obj1;
      const tmp6Result = tmp6(1945);
    }
  }
  obj[3] = tmp10;
  const merged = Object.assign(tmp6(7854)(roleStyle));
  return obj;
};