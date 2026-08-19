// discord_app/modules/provisional_accounts/MessageSessionMetadataManager.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import ME from "../../Constants.tsx";
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import initializeDefault from "../../lib/AutomaticLifecycleManager.tsx";

const AnalyticEvents = ME.AnalyticEvents;
initializeDefault;
class MessageSessionMetadataManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.actions = {
      MESSAGE_CREATE(arg0) {
            return applyArgumentsResult.handleMessageCreate(arg0);
          },
      MESSAGE_UPDATE(arg0) {
            return applyArgumentsResult.handleMessageUpdate(arg0);
          }
    };
    return applyArgumentsResult;
  }
}
const prototype = MessageSessionMetadataManager.prototype;
prototype["handleMessageCreate"] = function handleMessageCreate(message) {
  const result = this._trackIfSessionMetadataExists(message.message);
};
prototype["handleMessageUpdate"] = function handleMessageUpdate(message) {
  const result = this._trackIfSessionMetadataExists(message.message);
};
prototype["_getAuthorizedApplicationIds"] = function _getAuthorizedApplicationIds(session_metadata) {
  try {
    return session_metadata.authorized_application_ids;
  } catch (err) {
    return null;
  }
};
prototype["_trackIfSessionMetadataExists"] = function _trackIfSessionMetadataExists(message) {
  if (null != message.session_metadata) {
    const obj = { message_id: null, channel_id: null, author_id: null, authorized_application_ids: null };
    ({ id: obj2[0], channel_id: obj2[1], author } = message);
    let id;
    if (author != null) {
      id = author.id;
    }
    const self = this;
    obj[2] = id;
    obj[3] = this._getAuthorizedApplicationIds(message.session_metadata);
    obj.track(AnalyticEvents.MESSAGE_DISPATCH_SESSION_METADATA_FOUND, obj);
  }
};
const messageSessionMetadataManager = new MessageSessionMetadataManager();
let result = obj132.fileFinishedImporting("modules/provisional_accounts/MessageSessionMetadataManager.tsx");

export default messageSessionMetadataManager;