// === Module 17824: ForwardGuildBreadcrumbManager ===

// Module 17824 (ForwardGuildBreadcrumbManager)
import Constants from "Constants" /* 1074 */;
import setupLoadFromMessageManagerHandlersDefault from "setupLoadFromMessageManagerHandlers" /* 17423 */;
import BasicGuildActionCreators from "BasicGuildActionCreators" /* 17825 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;
import size from "module_2" /* 2 */;

function fetchForwardReferencedGuilds(message_reference) {
  message_reference = message_reference.message_reference;
  let type;
  if (message_reference != null) {
    type = message_reference.type;
  }
  if (type === MessageReferenceTypes.FORWARD) {
    const guild_id = message_reference.message_reference.guild_id;
    if (null != guild_id) {
      const basicGuild = BasicGuildActionCreators.fetchBasicGuild(guild_id);
    }
  }
}
const MessageReferenceTypes = Constants.MessageReferenceTypes;
class ForwardGuildBreadcrumbManager extends tmp6 {
  constructor() {
    tmp3 = new ForwardGuildBreadcrumbManager(tmp2, tmp, new.target);
    tmp4 = closure_1(closure_2[3])(tmp3, fetchForwardReferencedGuilds);
    return tmp3;
  }
}
tmp = new tmp(tmp4, tmp3, tmp2, Object, defineProperty, ForwardGuildBreadcrumbManager, importDefault);
setupLoadFromMessageManagerHandlersDefault(tmp, fetchForwardReferencedGuilds);
const result = size.fileFinishedImporting("modules/forwarding/ForwardGuildBreadcrumbManager.tsx");

export default tmp;