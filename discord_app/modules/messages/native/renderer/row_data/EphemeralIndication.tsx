// discord_app/modules/messages/native/renderer/row_data/EphemeralIndication.tsx
import util from "../../../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../../../utils/HelpdeskUtils.tsx";
import ApplicationCommandUserAppUtils from "../../../../application_commands/ApplicationCommandUserAppUtils.tsx";
import GuildAutomodMessageStore from "../../../../guild_automod/GuildAutomodMessageStore.tsx";

require = fn;
const Constants = fn(1074);
({ HelpdeskArticles: closure_4, MessageFlags: hasOwnProperty } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/EphemeralIndication.tsx");

export const createEphemeralIndication = function createEphemeralIndication(message) {
  if (message.hasFlag(constants2.EPHEMERAL)) {
    const interactionMetadata = message.interactionMetadata;
    let ephemerality_reason;
    if (interactionMetadata != null) {
      ephemerality_reason = interactionMetadata.ephemerality_reason;
    }
    if (null != ephemerality_reason) {
      let obj1 = ApplicationCommandUserAppUtils;
      const interactionMetadata2 = message.interactionMetadata;
      let ephemerality_reason1;
      if (interactionMetadata2 != null) {
        ephemerality_reason1 = interactionMetadata2.ephemerality_reason;
      }
      let obj = { content: null, helpArticleLink: null, helpButtonAccessibilityLabel: null };
      const ephemeralReasonMessage = obj1.getEphemeralReasonMessage(ephemerality_reason1);
      const intl2 = util.intl;
      obj = { handleDelete: null, reason: null };
      obj1 = { action: "bindDismissMessage", message };
      obj.handleDelete = obj1;
      obj.reason = ephemeralReasonMessage;
      obj.content = intl2.formatToParts(util.t.xgCMRQ, obj);
      obj.helpArticleLink = HelpdeskUtilsDefault.getArticleURL(constants.USING_APPS_FAQ);
      const intl3 = util.intl;
      obj.helpButtonAccessibilityLabel = intl3.string(util.t.OIWSJe);
      return obj;
    } else {
      const obj2 = { content: null, helpArticleLink: null, helpButtonAccessibilityLabel: null };
      const intl4 = util.intl;
      const obj3 = { count: 1, countMessages: 1, handleDelete: null };
      const obj4 = { action: "bindDismissMessage", message };
      obj3.handleDelete = obj4;
      obj2.content = intl4.formatToParts(util.t.uX3ecL, obj3);
      obj2.helpArticleLink = HelpdeskUtilsDefault.getAppsSupportURL(constants.EPHEMERAL_MESSAGES);
      const intl5 = util.intl;
      obj2.helpButtonAccessibilityLabel = intl5.string(util.t.htHOrp);
      if (null != GuildAutomodMessageStore.getMessage(message.id)) {
        obj2.helpArticleLink = HelpdeskUtilsDefault.getArticleURL(constants.GUILD_AUTOMOD_BLOCKED_MESSAGE);
        const intl = util.intl;
        obj2.helpButtonAccessibilityLabel = intl.string(util.t.OiCBhP);
        const tmp11Result = HelpdeskUtilsDefault;
      }
      return obj2;
    }
  }
};
