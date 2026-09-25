// === Module 17618: ForwardGuildBreadcrumbManager ===

// Module 17618 (ForwardGuildBreadcrumbManager)
import setupLoadFromMessageManagerHandlersDefault from "setupLoadFromMessageManagerHandlers" /* 17158 */;
import BasicGuildActionCreators from "BasicGuildActionCreators" /* 17619 */;
import BasicGuildStore from "BasicGuildStore" /* 7392 */;
import GuildStore from "GuildStore" /* 2066 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6534 */;

require = fn;
function fetchForwardReferencedGuilds(message_reference) {
  message_reference = message_reference.message_reference;
  let type;
  if (message_reference != null) {
    type = message_reference.type;
  }
  if (type === MessageReferenceTypes.FORWARD) {
    const guild_id = message_reference.message_reference.guild_id;
    let tmp2 = null != guild_id;
    if (tmp2) {
      tmp2 = null == GuildStore.getGuild(guild_id);
    }
    if (tmp2) {
      tmp2 = null == BasicGuildStore.getGuildOrStatus(guild_id);
    }
    if (tmp2) {
      const result = guild_id(17151).queueMessageLinkFetch(() => BasicGuildActionCreators.fetchBasicGuild(guild_id));
      const obj = guild_id(17151);
    }
  }
}
const MessageReferenceTypes = fn(1074).MessageReferenceTypes;
class ForwardGuildBreadcrumbManager extends tmp6 {
  constructor() {
    tmp3 = new ForwardGuildBreadcrumbManager(tmp2, tmp, new.target);
    tmp4 = closure_1(closure_2[6])(tmp3, fetchForwardReferencedGuilds);
    return tmp3;
  }
}
const tmp5 = new tmp(tmp4, tmp3, tmp2, Object, defineProperty, ForwardGuildBreadcrumbManager, importDefault);
setupLoadFromMessageManagerHandlersDefault(tmp5, fetchForwardReferencedGuilds);
const size = fn(2);
let result = size.fileFinishedImporting("modules/forwarding/ForwardGuildBreadcrumbManager.tsx");

export default tmp5;