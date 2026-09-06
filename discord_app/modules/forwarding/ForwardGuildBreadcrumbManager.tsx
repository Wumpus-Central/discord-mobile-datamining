// discord_app/modules/forwarding/ForwardGuildBreadcrumbManager.tsx
import Constants from "../../Constants.tsx";
import setupLoadFromMessageManagerHandlersDefault from "../messages/setupLoadFromMessageManagerHandlers.tsx";
import BasicGuildActionCreators from "../guild/BasicGuildActionCreators.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
