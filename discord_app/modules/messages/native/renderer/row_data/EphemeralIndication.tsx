// discord_app/modules/messages/native/renderer/row_data/EphemeralIndication.tsx
import intl6 from "../../../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../../../utils/HelpdeskUtils.tsx";
import ApplicationCommandUserAppUtils from "../../../../application_commands/ApplicationCommandUserAppUtils.tsx";
import GuildAutomodMessageStore from "../../../../guild_automod/GuildAutomodMessageStore.tsx";
import Constants from "../../../../../Constants.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
({ HelpdeskArticles: closure_4, MessageFlags: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/EphemeralIndication.tsx");

export const createEphemeralIndication = function createEphemeralIndication(message) {
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let obj2;
  let obj3;
  let obj5;
  let obj6;
  let obj7;
  let obj9;
  if (message.hasFlag(hasOwnProperty.EPHEMERAL)) {
    const interactionMetadata = message.interactionMetadata;
    let ephemerality_reason;
    if (interactionMetadata != null) {
      ephemerality_reason = interactionMetadata.ephemerality_reason;
    }
    if (null != ephemerality_reason) {
      const interactionMetadata2 = message.interactionMetadata;
      let ephemerality_reason1;
      const getEphemeralReasonMessage = ApplicationCommandUserAppUtils.getEphemeralReasonMessage;
      ApplicationCommandUserAppUtils;
      if (interactionMetadata2 != null) {
        ephemerality_reason1 = interactionMetadata2.ephemerality_reason;
      }
      const obj = {
        content: intl2.formatToParts(intl6.t.xgCMRQ, obj2),
        helpArticleLink: obj5.getArticleURL(constants.USING_APPS_FAQ),
        helpButtonAccessibilityLabel: intl3.string(intl6.t.OIWSJe),
      };
      const ephemeralReasonMessage = getEphemeralReasonMessage(ephemerality_reason1);
      intl2 = intl6.intl;
      obj2 = { handleDelete: obj3, reason: ephemeralReasonMessage };
      obj3 = { action: "bindDismissMessage", message };
      obj5 = HelpdeskUtilsDefault;
      intl3 = intl6.intl;
      return obj;
    } else {
      const obj4 = {
        content: intl4.formatToParts(intl6.t.uX3ecL, obj6),
        helpArticleLink: obj9.getAppsSupportURL(constants.EPHEMERAL_MESSAGES),
        helpButtonAccessibilityLabel: intl5.string(intl6.t.htHOrp),
      };
      intl4 = intl6.intl;
      obj6 = { count: 1, countMessages: 1, handleDelete: obj7 };
      obj7 = { action: "bindDismissMessage", message };
      obj9 = HelpdeskUtilsDefault;
      intl5 = intl6.intl;
      if (null != GuildAutomodMessageStore.getMessage(message.id)) {
        const tmp12Result = HelpdeskUtilsDefault;
        obj4.helpArticleLink = tmp12Result.getArticleURL(constants.GUILD_AUTOMOD_BLOCKED_MESSAGE);
        const intl = intl6.intl;
        obj4.helpButtonAccessibilityLabel = intl.string(intl6.t.OiCBhP);
      }
      return obj4;
    }
  }
};
