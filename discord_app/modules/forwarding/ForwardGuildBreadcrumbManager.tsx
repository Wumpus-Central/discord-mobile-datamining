import { MessageReferenceTypes } from "ME";
import "initialize";

function fetchForwardReferencedGuilds(message_reference) {
  message_reference = message_reference.message_reference;
  let type;
  if (message_reference != null) {
    type = message_reference.type;
  }
  if (type === MessageReferenceTypes.FORWARD) {
    const guild_id = message_reference.message_reference.guild_id;
    if (null != guild_id) {
      const basicGuild = require(16688) /* _fetchBasicGuild */.fetchBasicGuild(guild_id);
      const obj = require(16688) /* _fetchBasicGuild */;
    }
  }
}
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
require("setupLoadFromMessageManagerHandlers")(tmp, fetchForwardReferencedGuilds);
const result = require("initialize").fileFinishedImporting("modules/forwarding/ForwardGuildBreadcrumbManager.tsx");

export default tmp;