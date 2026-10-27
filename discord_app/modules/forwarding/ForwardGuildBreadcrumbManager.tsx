// === Module 19426: ForwardGuildBreadcrumbManager ===

// Module 19426 (ForwardGuildBreadcrumbManager)
import setupLoadFromMessageManagerHandlersDefault from "setupLoadFromMessageManagerHandlers" /* 18919 */;
import BasicGuildActionCreators from "BasicGuildActionCreators" /* 19427 */;
import BasicGuildStore from "BasicGuildStore" /* 8312 */;
import GuildStore from "GuildStore" /* 4846 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7216 */;

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
      const result = guild_id(18908).queueMessageLinkFetch(() => BasicGuildActionCreators.fetchBasicGuild(guild_id));
      const obj = guild_id(18908);
    }
  }
}
const MessageReferenceTypes = fn(1084).MessageReferenceTypes;
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