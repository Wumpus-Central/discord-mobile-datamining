// === Module 8248: createStageRaiseHandSystemMessage ===

// Module 8248 (createStageRaiseHandSystemMessage)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import combinedDefault from "combined" /* 1993 */;
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState" /* 4981 */;
import getMessageAuthorWithProcessedColor from "getMessageAuthorWithProcessedColor" /* 8185 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8187 */;
import createCommonMessageDefault from "createCommonMessage" /* 8188 */;
import getActiveStageChannelIds from "getActiveStageChannelIds" /* 4989 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import ME from "ME" /* 676 */;

require = fn;
({ HelpdeskArticles: closure_6, MessageFlags: error, MessageTypes: closure_8, Permissions: c9 } = ME);
const result = require("obj132").fileFinishedImporting("modules/messages/native/renderer/system_messages/StageRaiseHandSystemMessage.tsx");

export const createStageRaiseHandSystemMessage = function createStageRaiseHandSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = getMessageAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  let canResult = closure_5.can(constants4.MUTE_MEMBERS, channel.getChannel(message.channel_id));
  participant = participant.getParticipant(message.channel_id, message.author.id);
  obj1 = DISCORD_EPOCHDefault;
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
    canResult = rtsState === useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK;
  }
  if (canResult) {
    canResult = toISOStringResult === toISOStringResult1;
  }
  const intl = getSystemLocale.intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  obj[0] = intl.formatToParts(getSystemLocale.t.M87x7Y, obj);
  obj[1] = canResult;
  const intl2 = getSystemLocale.intl;
  obj[2] = intl2.string(getSystemLocale.t.f0T7hI);
  let tmp10;
  if (message.hasFlag(constants2.EPHEMERAL)) {
    if (message.type === constants3.STAGE_RAISE_HAND) {
      obj1 = { content: null, helpArticleLink: null, helpButtonAccessibilityLabel: null };
      const intl3 = getSystemLocale.intl;
      const obj2 = { handleDelete: null };
      const obj3 = { action: "bindDismissMessage", message: null };
      obj3[1] = message;
      obj2[0] = obj3;
      obj1[0] = intl3.formatToParts(getSystemLocale.t["qDAX++"], obj2);
      obj1[1] = combinedDefault.getArticleURL(constants.EPHEMERAL_MESSAGES);
      const intl4 = getSystemLocale.intl;
      obj1[2] = intl4.string(getSystemLocale.t.htHOrp);
      tmp10 = obj1;
      const tmp6Result = combinedDefault;
    }
  }
  obj[3] = tmp10;
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return obj;
};