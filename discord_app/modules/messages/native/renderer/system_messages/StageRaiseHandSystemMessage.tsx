// === Module 7711: StageRaiseHandSystemMessage ===

// Module 7711 (StageRaiseHandSystemMessage)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import intl5 from "intl" /* 1126 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState" /* 5043 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7630 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7632 */;
import createCommonMessageDefault from "createCommonMessage" /* 7634 */;
import StageChannelParticipantStore from "StageChannelParticipantStore" /* 5582 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ HelpdeskArticles: metroRequire, MessageFlags: metroImportDefault, MessageTypes: metroImportAll, Permissions: c9 } = Constants);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/StageRaiseHandSystemMessage.tsx");

export const createStageRaiseHandSystemMessage = function createStageRaiseHandSystemMessage(message) {
  let M87x7Y;
  let formatToParts;
  let intl2;
  let intl3;
  let intl4;
  let obj4;
  let obj6;
  let obj7;
  let tmp10;
  let tmp6Result;
  message = message.message;
  const roleStyle = message.roleStyle;
  const obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  let canResult = PermissionStore.can(constants4.MUTE_MEMBERS, ChannelStore.getChannel(message.channel_id));
  const participant = StageChannelParticipantStore.getParticipant(message.channel_id, message.author.id);
  let num;
  const obj2 = SnowflakeUtilsDefault;
  const _Date = Date;
  const date = new Date(obj2.extractTimestamp(message.id));
  const toISOStringResult = date.toISOString();
  if (participant != null) {
    const voiceState = participant.voiceState;
    if (voiceState != null) {
      num = voiceState.requestToSpeakTimestamp;
    }
  }
  if (num == null) {
    num = 0;
  }
  const _Date1 = new _Date(num);
  const toISOStringResult1 = _Date1.toISOString();
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
  const obj3 = { content: formatToParts(M87x7Y, obj4), showInviteToSpeakButton: canResult, buttonLabel: intl2.string(intl5.t.f0T7hI), ephemeralIndication: tmp10 };
  const intl = intl5.intl;
  formatToParts = intl.formatToParts;
  obj4 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle }) };
  M87x7Y = intl5.t.M87x7Y;
  intl2 = intl5.intl;
  tmp10 = undefined;
  if (message.hasFlag(metroImportDefault.EPHEMERAL)) {
    if (message.type === metroImportAll.STAGE_RAISE_HAND) {
      const obj5 = { content: intl3.formatToParts(intl5.t["qDAX++"], obj6), helpArticleLink: tmp6Result.getArticleURL(metroRequire.EPHEMERAL_MESSAGES), helpButtonAccessibilityLabel: intl4.string(intl5.t.htHOrp) };
      intl3 = intl5.intl;
      obj6 = { handleDelete: obj7 };
      obj7 = { action: "bindDismissMessage", message };
      tmp6Result = HelpdeskUtilsDefault;
      intl4 = intl5.intl;
      tmp10 = obj5;
    }
  }
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj3;
};