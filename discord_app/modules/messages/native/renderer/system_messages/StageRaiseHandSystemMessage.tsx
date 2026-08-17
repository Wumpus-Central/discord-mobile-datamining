// discord_app/modules/messages/native/renderer/system_messages/StageRaiseHandSystemMessage.tsx
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getMessageAuthorWithProcessedColor from "getMessageAuthorWithProcessedColor" /* 8185 */;
import closure_3 from "getActiveStageChannelIds" /* 4989 */;
import closure_4 from "ensureGuildLoaded" /* 1391 */;
import closure_5 from "getUncachedChannelPermissions" /* 4021 */;
import ME from "ME" /* 676 */;

require = arg1;
({ HelpdeskArticles: closure_6, MessageFlags: error, MessageTypes: closure_8, Permissions: c9 } = ME);
const result = require("set").fileFinishedImporting("modules/messages/native/renderer/system_messages/StageRaiseHandSystemMessage.tsx");

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
    canResult = rtsState === tmp(4981).RequestToSpeakStates.REQUESTED_TO_SPEAK;
  }
  if (canResult) {
    canResult = toISOStringResult === toISOStringResult1;
  }
  obj = { content: null, showInviteToSpeakButton: null, buttonLabel: null, ephemeralIndication: null };
  const intl = tmp(1236).intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp6(8187)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
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
      obj1[1] = tmp6(1993).getArticleURL(constants.EPHEMERAL_MESSAGES);
      const intl4 = tmp(1236).intl;
      obj1[2] = intl4.string(tmp(1236).t.htHOrp);
      tmp10 = obj1;
      const tmp6Result = tmp6(1993);
    }
  }
  obj[3] = tmp10;
  const merged = Object.assign(tmp6(8188)(roleStyle));
  return obj;
};