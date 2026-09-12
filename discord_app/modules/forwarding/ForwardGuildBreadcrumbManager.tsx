// === Module 17939: ForwardGuildBreadcrumbManager ===

// Module 17939 (ForwardGuildBreadcrumbManager)
import setupLoadFromMessageManagerHandlersDefault from "setupLoadFromMessageManagerHandlers" /* 17537 */;
import BasicGuildActionCreators from "BasicGuildActionCreators" /* 17940 */;
import BasicGuildStore from "BasicGuildStore" /* 8059 */;
import GuildStore from "GuildStore" /* 1979 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7221 */;

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
      const result = guild_id(17530).queueMessageLinkFetch(() => BasicGuildActionCreators.fetchBasicGuild(guild_id));
      const obj = guild_id(17530);
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
tmp = new tmp(tmp4, tmp3, tmp2, Object, defineProperty, ForwardGuildBreadcrumbManager, importDefault);
setupLoadFromMessageManagerHandlersDefault(tmp, fetchForwardReferencedGuilds);
const size = fn(2);
let result = size.fileFinishedImporting("modules/forwarding/ForwardGuildBreadcrumbManager.tsx");

export default tmp;