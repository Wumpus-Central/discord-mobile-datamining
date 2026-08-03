import getActiveStageChannelIds from "getActiveStageChannelIds";
import ensureGuildLoaded from "ensureGuildLoaded";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import ME from "ME";

let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ HelpdeskArticles: closure_6, MessageFlags: error, MessageTypes: metroImportAll, Permissions: c9 } = ME);
const result = require("getUncachedChannelPermissions").fileFinishedImporting("modules/messages/native/renderer/system_messages/StageRaiseHandSystemMessage.tsx");

export const createStageRaiseHandSystemMessage = function createStageRaiseHandSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(7867) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  let canResult = getUncachedChannelPermissions.can(constants4.MUTE_MEMBERS, channel.getChannel(message.channel_id));
  participant = participant.getParticipant(message.channel_id, message.author.id);
  let obj1 = importDefault(11);
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
    canResult = rtsState === tmp(4440).RequestToSpeakStates.REQUESTED_TO_SPEAK;
  }
  if (canResult) {
    canResult = toISOStringResult === toISOStringResult1;
  }
  obj = { content: null, showInviteToSpeakButton: null, buttonLabel: null, ephemeralIndication: null };
  const intl = tmp(1236).intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: null };
  obj[1] = importDefault(7869)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle });
  obj[0] = intl.formatToParts(require(1236) /* getSystemLocale */.t.M87x7Y, obj);
  obj[1] = canResult;
  const intl2 = tmp(1236).intl;
  obj[2] = intl2.string(require(1236) /* getSystemLocale */.t.f0T7hI);
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
  const merged = Object.assign(tmp6(7870)(roleStyle));
  return obj;
};