// discord_app/modules/messages/native/renderer/system_messages/StageRaiseHandSystemMessage.tsx
import SnowflakeUtilsDefault from "../../../../../utils/SnowflakeUtils.tsx";
import util from "../../../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../../../utils/HelpdeskUtils.tsx";
import useAudienceRequestToSpeakState from "../../../../stage_channels/useAudienceRequestToSpeakState.tsx";
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import StageChannelParticipantStore from "../../../../stage_channels/StageChannelParticipantStore.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import PermissionStore from "../../../../../stores/PermissionStore.tsx";

require = fn;
const Constants = fn(1074);
({
  HelpdeskArticles: metroRequire,
  MessageFlags: closure_7,
  MessageTypes: closure_8,
  Permissions: closure_9,
} = Constants);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/StageRaiseHandSystemMessage.tsx",
);

export const createStageRaiseHandSystemMessage = function createStageRaiseHandSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  let canResult = PermissionStore.can(constants4.MUTE_MEMBERS, ChannelStore.getChannel(message.channel_id));
  const participant = StageChannelParticipantStore.getParticipant(message.channel_id, message.author.id);
  let obj1 = SnowflakeUtilsDefault;
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
  obj = { content: null, showInviteToSpeakButton: null, buttonLabel: null, ephemeralIndication: null };
  const intl = util.intl;
  obj = {
    username: messageAuthorWithProcessedColor.nick,
    usernameOnClick: formatUsernameOnClickDefault({
      message,
      author: messageAuthorWithProcessedColor,
      roleStyle: roleStyle.roleStyle,
    }),
  };
  obj.content = intl.formatToParts(util.t.M87x7Y, obj);
  obj.showInviteToSpeakButton = canResult;
  const intl2 = util.intl;
  obj.buttonLabel = intl2.string(util.t.f0T7hI);
  let tmp10;
  if (message.hasFlag(constants2.EPHEMERAL)) {
    if (message.type === constants3.STAGE_RAISE_HAND) {
      obj1 = { content: null, helpArticleLink: null, helpButtonAccessibilityLabel: null };
      const intl3 = util.intl;
      const obj2 = { handleDelete: null };
      const obj3 = { action: "bindDismissMessage", message };
      obj2.handleDelete = obj3;
      obj1.content = intl3.formatToParts(util.t["qDAX++"], obj2);
      obj1.helpArticleLink = HelpdeskUtilsDefault.getArticleURL(constants.EPHEMERAL_MESSAGES);
      const intl4 = util.intl;
      obj1.helpButtonAccessibilityLabel = intl4.string(util.t.htHOrp);
      tmp10 = obj1;
      const tmp6Result = HelpdeskUtilsDefault;
    }
  }
  obj.ephemeralIndication = tmp10;
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return obj;
};
