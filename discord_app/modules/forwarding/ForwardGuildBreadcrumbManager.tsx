// discord_app/modules/forwarding/ForwardGuildBreadcrumbManager.tsx
import set from "../../../_runtime/00002_set.js";
import ME from "../../Constants.tsx";
import initializeDefault from "../../lib/AutomaticLifecycleManager.tsx";
import setupLoadFromMessageManagerHandlersDefault from "../messages/setupLoadFromMessageManagerHandlers.tsx";
import _fetchBasicGuild from "../guild/BasicGuildActionCreators.tsx";

function fetchForwardReferencedGuilds(message_reference) {
  message_reference = message_reference.message_reference;
  let type;
  if (message_reference != null) {
    type = message_reference.type;
  }
  if (type === MessageReferenceTypes.FORWARD) {
    const guild_id = message_reference.message_reference.guild_id;
    if (null != guild_id) {
      const basicGuild = _fetchBasicGuild.fetchBasicGuild(guild_id);
      const obj = _fetchBasicGuild;
    }
  }
}
const MessageReferenceTypes = ME.MessageReferenceTypes;
initializeDefault;
class ForwardGuildBreadcrumbManager extends tmp6 {
  constructor() {
    tmp3 = new ForwardGuildBreadcrumbManager(tmp2, tmp, new.target);
    // ThrowIfThisInitialized (0x7c)
    tmp4 = require("setupLoadFromMessageManagerHandlers")(tmp3, fetchForwardReferencedGuilds);
    return tmp3;
  }
}
tmp = new tmp(tmp4, tmp3, tmp2, Object, defineProperty, ForwardGuildBreadcrumbManager, importDefault);
// ThrowIfThisInitialized (0x7c)
setupLoadFromMessageManagerHandlersDefault(tmp, fetchForwardReferencedGuilds);
const result = set.fileFinishedImporting("modules/forwarding/ForwardGuildBreadcrumbManager.tsx");

export default tmp;