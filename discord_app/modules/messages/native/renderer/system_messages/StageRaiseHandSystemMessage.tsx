// === Module 8288: StageRaiseHandSystemMessage ===

// Module 8288 (StageRaiseHandSystemMessage)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import util from "util" /* 1115 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2108 */;
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState" /* 4903 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8218 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8220 */;
import createCommonMessageDefault from "createCommonMessage" /* 8222 */;
import StageChannelParticipantStore from "StageChannelParticipantStore" /* 5635 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import PermissionStore from "PermissionStore" /* 4395 */;

require = fn;
const Constants = fn(1074);
({ HelpdeskArticles: metroRequire, MessageFlags: closure_7, MessageTypes: closure_8, Permissions: closure_9 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/StageRaiseHandSystemMessage.tsx");

export const createStageRaiseHandSystemMessage = function createStageRaiseHandSystemMessage(roleStyle) {
  const message = roleStyle.message;
  const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
  let canResult = PermissionStore.can(constants4.MUTE_MEMBERS, ChannelStore.getChannel(message.channel_id));
  const participant = StageChannelParticipantStore.getParticipant(message.channel_id, message.author.id);
  let num;
  const date = new Date(SnowflakeUtilsDefault.extractTimestamp(message.id));
  if (participant != null) {
    const voiceState = participant.voiceState;
    if (voiceState != null) {
      num = voiceState.requestToSpeakTimestamp;
    }
  }
  if (num == null) {
    num = 0;
  }
  const toISOStringResult = new Date(SnowflakeUtilsDefault.extractTimestamp(message.id)).toISOString();
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
  const obj3 = { content: null, showInviteToSpeakButton: null, buttonLabel: null, ephemeralIndication: null };
  const intl = util.intl;
  toISOStringResult1 = new Date(num).toISOString();
  obj3.content = intl.formatToParts(util.t.M87x7Y, { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) });
  obj3.showInviteToSpeakButton = canResult;
  const intl2 = util.intl;
  obj3.buttonLabel = intl2.string(util.t.f0T7hI);
  let tmp10;
  if (message.hasFlag(constants2.EPHEMERAL)) {
    if (message.type === constants3.STAGE_RAISE_HAND) {
      const obj5 = { content: null, helpArticleLink: null, helpButtonAccessibilityLabel: null };
      const intl3 = util.intl;
      const obj6 = { handleDelete: null };
      const obj7 = { action: "bindDismissMessage", message };
      obj6.handleDelete = obj7;
      obj5.content = intl3.formatToParts(util.t["qDAX++"], obj6);
      obj5.helpArticleLink = HelpdeskUtilsDefault.getArticleURL(constants.EPHEMERAL_MESSAGES);
      const intl4 = util.intl;
      obj5.helpButtonAccessibilityLabel = intl4.string(util.t.htHOrp);
      tmp10 = obj5;
      const tmp6Result = HelpdeskUtilsDefault;
    }
  }
  obj3.ephemeralIndication = tmp10;
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return obj3;
};