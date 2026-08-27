// === Module 7926: createEphemeralIndication ===

// Module 7926 (createEphemeralIndication)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import combinedDefault from "combined" /* 1995 */;
import getEphemeralReasonMessage from "getEphemeralReasonMessage" /* 7927 */;
import closure_3 from "handleMessageSendFailedAutomod" /* 7780 */;
import ME from "ME" /* 676 */;

require = arg1;
({ HelpdeskArticles: c4, MessageFlags: c5 } = ME);
const result = require("set").fileFinishedImporting("modules/messages/native/renderer/row_data/EphemeralIndication.tsx");

export const createEphemeralIndication = function createEphemeralIndication(message) {
  if (message.hasFlag(constants2.EPHEMERAL)) {
    const interactionMetadata = message.interactionMetadata;
    let ephemerality_reason;
    if (interactionMetadata != null) {
      ephemerality_reason = interactionMetadata.ephemerality_reason;
    }
    if (null != ephemerality_reason) {
      obj1 = getEphemeralReasonMessage;
      const interactionMetadata2 = message.interactionMetadata;
      let ephemerality_reason1;
      if (interactionMetadata2 != null) {
        ephemerality_reason1 = interactionMetadata2.ephemerality_reason;
      }
      let obj = { content: null, helpArticleLink: null, helpButtonAccessibilityLabel: null };
      const ephemeralReasonMessage = obj1.getEphemeralReasonMessage(ephemerality_reason1);
      const intl2 = tmp3(1236).intl;
      obj = { handleDelete: null, reason: null };
      obj1 = { action: "bindDismissMessage", message: null };
      obj1[1] = message;
      obj[0] = obj1;
      obj[1] = ephemeralReasonMessage;
      obj[0] = intl2.formatToParts(getSystemLocale.t.xgCMRQ, obj);
      obj[1] = combinedDefault.getArticleURL(constants.USING_APPS_FAQ);
      const intl3 = tmp3(1236).intl;
      obj[2] = intl3.string(getSystemLocale.t.OIWSJe);
      return obj;
    } else {
      const obj2 = { content: null, helpArticleLink: null, helpButtonAccessibilityLabel: null };
      const intl4 = getSystemLocale.intl;
      const obj3 = { count: 1, countMessages: 1, handleDelete: null };
      const obj4 = { action: "bindDismissMessage", message: null };
      obj4[1] = message;
      obj3[2] = obj4;
      obj2[0] = intl4.formatToParts(getSystemLocale.t.uX3ecL, obj3);
      obj2[1] = combinedDefault.getAppsSupportURL(constants.EPHEMERAL_MESSAGES);
      const intl5 = getSystemLocale.intl;
      obj2[2] = intl5.string(getSystemLocale.t.htHOrp);
      if (null != message.getMessage(message.id)) {
        obj2.helpArticleLink = combinedDefault.getArticleURL(constants.GUILD_AUTOMOD_BLOCKED_MESSAGE);
        const intl = tmp9(1236).intl;
        obj2.helpButtonAccessibilityLabel = intl.string(tmp9(1236).t.OiCBhP);
        const tmp11Result = combinedDefault;
      }
      return obj2;
    }
  }
};